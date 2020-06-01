//Variáveis iniciais de ambiente
let localInicial = L.latLng(-23.565658, -46.651218);
let raioExibicao = 5; //Km
let distanciaBusca = raioExibicao * 10;
let check = false //checar tempo de execução
//Criação do mapa 
var mymap = L.map('mapid', { zoomControl: false }).setView(localInicial, 14.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Projeto Doar Sangue - Amigos do Tezinho Inc. - UAM',
  maxZoom: 20,
  minZoom: 4,
  id: 'lucasbassi/ck9vq4yzz01rq1imp48eqymsd',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibHVjYXNiYXNzaSIsImEiOiJjazl2bzkxcXgwMHVmM2tyenIxZGc0aGNiIn0.lD4f_HJLoF1URO0V3PGu_Q'
}).addTo(mymap);
function valorSelecionado(tipo) {
  mymap.locate({ setView: true, maxZoom: 14.5 }).on("locationfound", e => {
    //Consulta de locais quando usuário passa sua localização
    carregaLocaisPorTipo(e.latlng, distanciaBusca, tipo).then(consulta => {
      console.log(consulta);
      setTimeout(function () {
        if (!check) {
          alert('Houve um erro de carregamento. Por favor atualize a página')
        }
      }, 10000)
      check = apontaLocais(consulta);
    });
  }).on("locationerror", e => {
    //Consulta de locais quando usuário NÃO passa sua localização
    carregaLocaisPorTipo(localInicial, distanciaBusca, tipo).then(consulta => {
      setTimeout(function () {
        if (!check) {
          alert('Houve um erro de carregamento. Por favor atualize a página')
        }
      }, 10000)
      check = apontaLocais(consulta);
    });
  });
}



var iconePadrao = L.icon({
  iconUrl: './Ícones/marcador.svg',
  iconSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeClaro = L.icon({
  iconUrl: './Ícones/marcador-claro.svg',
  iconSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeMedio = L.icon({
  iconUrl: './Ícones/marcador-medio.svg',
  iconSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeEscuro = L.icon({
  iconUrl: './Ícones/marcador-escuro.svg',
  iconSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});

function apontaLocais(locais) {
  locais.forEach(function (item) {
    switch(item.nivelEstoque) {
    case '1':
      icone = iconeClaro
    break
    case '2':
      icone = iconeMedio
    break
    case '3':
      icone = iconeEscuro
    break
    default:
      icone = iconePadrao
    break
    }
    L.marker(item.coordenadas, { icon: icone }).addTo(mymap)
      .bindPopup(item.nomeLocal, {
        closeButton: false,
        //maxWith = x Caso precise mudar
      })
      //Popup só aparecer com mouse passando em cima
      .on('mouseover', function (e) {
        this.openPopup();
      })
      .on('mouseout', function (e) {
        this.closePopup();
      })
      .on('click', function (e) {
        abrirLocal(item)
      });
  });
  return true
}


// Abrir modal dos locais

async function abrirLocal(item) {
  document.getElementById("button_informacao").style.display = "none";
  document.getElementById("img_questionario").style.display = "none";
  document.getElementById("img_questionarioo").style.display = "none";
  document.getElementById("balao_questionario").style.display = "none";
  document.getElementById("balao").style.display = "none";
  document.getElementById("legenda").style.display = "none";

  ref = {
    texto: ['Crítico', 'Alerta', 'Estável'],
    img: ['./Ícones/bolsa_baixa.svg', './Ícones/bolsa_media.svg', './Ícones/bolsa_alta.svg']
  }
  let detLocal;
  let detBanco;
  detLocal = await carregaDetalhesLocal(item.idLocal).then(local => {
    return local
  });
  detBanco = await carregaDetalhesBanco(item.idBanco).then(banco => {
    return banco
  });
  endereco = detLocal.enderecoLocal.split('\\n')
  horario = detLocal.horarioFuncionamento.split('\\n')
  data = arrumarData(detLocal.dataAtualizacao.toString())
  console.log(detLocal);
  console.log(detBanco);

  mLocal = "";
  mLocal += '<div id="mostraLocal" class="modal"  tabindex="-1" role="dialog">';
  mLocal += '<div class="modal-dialog" role="document">';
  mLocal += '<div class="modal-content">';
  mLocal += '<div class="modal-header">';
  mLocal += '<h4 class="modal-title">' + item.nomeLocal + '</h4>';
  mLocal += '<button type="button" onclick="fechaLocal()" class="close" data-dismiss="modal" aria-label="Close">';
  mLocal += '<span aria-hidden="true">&times;</span>';
  mLocal += '</button>';
  mLocal += '</div>';
  mLocal += '<div class="modal-body">';
  mLocal += '<div class="container">'
  mLocal += '<div class="nivel_sangue">';
  mLocal += '<div class="titulo">';
  mLocal += '<h4> Banco de Sangue </h4>'
  mLocal += '</div>';
  mLocal += '<div class="container_img">';
  mLocal += '<div class="img01">';
  mLocal += '<img src="' + ref.img[detBanco.nivelApos - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelApos - 1] + '</h6>'
  mLocal += '<h5> A+ </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img02">';
  mLocal += '<img src="' + ref.img[detBanco.nivelAneg - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelAneg - 1] + '</h6>'
  mLocal += '<h5> A- </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img03">';
  mLocal += '<img src="' + ref.img[detBanco.nivelBpos - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelBpos - 1] + '</h6>'
  mLocal += '<h5> B+ </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img04">';
  mLocal += '<img src="' + ref.img[detBanco.nivelBneg - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelBneg - 1] + '</h6>'
  mLocal += '<h5> B- </h5>'
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '<div class="container_imgs">';
  mLocal += '<div class="img05">';
  mLocal += '<img src="' + ref.img[detBanco.nivelOpos - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelOpos - 1] + '</h6>'
  mLocal += '<h5> O+ </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img06">';
  mLocal += '<img src="' + ref.img[detBanco.nivelOneg - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelOneg - 1] + '</h6>'
  mLocal += '<h5> O- </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img07">';
  mLocal += '<img src="' + ref.img[detBanco.nivelABpos - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelABpos - 1] + '</h6>'
  mLocal += '<h5> AB+ </h5>'
  mLocal += '</div>';
  mLocal += '<div class="img08">';
  mLocal += '<img src="' + ref.img[detBanco.nivelABneg - 1] + '">'
  mLocal += '<h6>' + ref.texto[detBanco.nivelABneg - 1] + '</h6>'
  mLocal += '<h5> AB- </h5>'
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '<div class="info">';
  mLocal += '<div class="endereco">';
  mLocal += '<h6>Endereço: <br>'
  endereco.forEach(function (parte) {
    mLocal += '<span>' + parte + '</span><br>'
  })
  mLocal += '</h6>'
  mLocal += '<h6>Funcionamento: <br>'
  horario.forEach(function (parte) {
    mLocal += '<span>' + parte + ';</span><br>'
  })
  mLocal += '</h6>'
  mLocal += '<h6>Telefone: <br><span>' + detLocal.telefone + '</span> </h6>'
  mLocal += '<h6>Site: <br> <span><a href="' + detLocal.site + '"target="_blank">' + detLocal.site + '</a></span> </h6>'
  switch (detLocal.tipoAgendamento) {
    case "2":
      mLocal += '<h6><span>O agendamento para doação ocorre através do site.</span></h6>'
      break;
    case "3":
      mLocal += '<h6><span>O agendamento para doação ocorre através do telefone.</span></h6>'
      break;
    case "4":
      mLocal += '<h6><span>O agendamento para doação ocorre presencialmente.</span></h6>'
      break;
  }
  mLocal += '<p>Ultima atualização: ' + data + '</p>'
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '</div>';
  mLocal += '</div>';
  document.getElementById("local").innerHTML = mLocal;
}

//==============================Teste dos métodos==============================
//------Centro de Hematologia de São Paulo - Banco de Sangue de São Paulo------

// carregaDetalhesLocal("E18O20sOAXudGpju5VMw").then(resultado=>{         
//   console.log(resultado);
// });
// carregaDetalhesBanco("E18O20sOAXudGpju5VMw").then(resultado =>{
//   console.log(resultado);
// });

function arrumarData(data) {
  vData = data.split(" ")
  meses = {
    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
    'Sep': '09', 'Out': '10', 'Nov': '11', 'Dec': '12'
  }
  dataFim = vData[2] + "/" + meses[vData[1]] + "/" + vData[3] + " " + vData[4]
  return dataFim
}