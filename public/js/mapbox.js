//Variáveis iniciais de ambiente
let localInicial = L.latLng(-23.565658, -46.651218);
let raioExibicao = 5; //Km
let distanciaBusca = raioExibicao * 10;
let check = false //checar tempo de execução
//Criação do mapa 
var mymap = L.map('mapid', { zoomControl: false }).setView(localInicial, 14.5);
mymap.locate({ setView: true, maxZoom: 14.5 }).on("locationfound", e => {
  //Consulta de locais quando usuário passa sua localização
  carregaLocais(e.latlng, distanciaBusca).then(consulta => {
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
  setTimeout(function () {
    if (!check) {
      alert('Houve um erro de carregamento. Por favor atualize a página')
    }
  }, 10000)
  carregaLocais(localInicial, distanciaBusca, 1).then(consulta => {
    check = apontaLocais(consulta);
  });
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Projeto Doar Sangue - Amigos do Tezinho Inc. - UAM',
  maxZoom: 20,
  minZoom: 4,
  id: 'lucasbassi/ck9vq4yzz01rq1imp48eqymsd',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibHVjYXNiYXNzaSIsImEiOiJjazl2bzkxcXgwMHVmM2tyenIxZGc0aGNiIn0.lD4f_HJLoF1URO0V3PGu_Q'
}).addTo(mymap);

var iconePadrao = L.icon({
  iconUrl: './Ícones/marcador.svg',
  iconSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});

function apontaLocais(locais) {
  locais.forEach(function (item) {
    L.marker(item.coordenadas, { icon: iconePadrao }).addTo(mymap)
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
  
  ref = {
    texto: ['Crítico', 'Alerta', 'Estável'],
    img: ['./Ícones/bolsa_baixa.svg', './Ícones/bolsa_media.svg', './Ícones/bolsa_alta.svg']
  }
  detLocal = await carregaDetalhesLocal(item.idLocal).then(local => {
    return local
  });
  detBanco = await carregaDetalhesBanco(item.idLocal).then(banco => {
    return banco
  });
  endereco = detLocal.enderecoLocal.split('\\n')
  horario = detLocal.horarioFuncionamento.split('\\n')
  data = arrumarData(detLocal.dataAtualizacao.toString())
  
  teste = "";
  teste += '<div id="mostraLocal" class="modal" tabindex="-1" role="dialog">';
  teste += '<div class="modal-dialog" role="document">';
  teste += '<div class="modal-content">';
  teste += '<div class="modal-header">';
  teste += '<h4 class="modal-title">' + item.nomeLocal + '</h4>';
  teste += '<button type="button" onclick="fechaLocal()" class="close" data-dismiss="modal" aria-label="Close">';
  teste += '<span aria-hidden="true">&times;</span>';
  teste += '</button>';
  teste += '</div>';
  teste += '<div class="modal-body">';
  teste += '<div class="container">'
  teste += '<div class="nivel_sangue">';
  teste += '<div class="titulo">';
  teste += '<h4> Banco de Sangue </h4>'
  teste += '</div>';
  teste += '<div class="container_img">';
  teste += '<div class="img01">';
  teste += '<img src="'+ ref.img[detBanco.nivelApos-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelApos-1]+ '</h6>'
  teste += '<h5> A+ </h5>'
  teste += '</div>';
  teste += '<div class="img02">';
  teste += '<img src="'+ ref.img[detBanco.nivelAneg-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelAneg-1]+ '</h6>'
  teste += '<h5> A- </h5>'
  teste += '</div>';
  teste += '<div class="img03">';
  teste += '<img src="'+ ref.img[detBanco.nivelBpos-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelBpos-1]+ '</h6>'
  teste += '<h5> B+ </h5>'
  teste += '</div>';
  teste += '<div class="img04">';
  teste += '<img src="'+ ref.img[detBanco.nivelBneg-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelBneg-1]+ '</h6>'
  teste += '<h5> B- </h5>'
  teste += '</div>';
  teste += '</div>';
  teste += '<div class="container_imgs">';
  teste += '<div class="img05">';
  teste += '<img src="'+ ref.img[detBanco.nivelOpos-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelOpos-1]+ '</h6>'
  teste += '<h5> O+ </h5>'
  teste += '</div>';
  teste += '<div class="img06">';
  teste += '<img src="'+ ref.img[detBanco.nivelOneg-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelOneg-1]+ '</h6>'
  teste += '<h5> O- </h5>'
  teste += '</div>';
  teste += '<div class="img07">';
  teste += '<img src="'+ ref.img[detBanco.nivelABpos-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelABpos-1]+ '</h6>'
  teste += '<h5> AB+ </h5>'
  teste += '</div>';
  teste += '<div class="img08">';
  teste += '<img src="'+ ref.img[detBanco.nivelABneg-1]+'">'
  teste += '<h6>'+ ref.texto[detBanco.nivelABneg-1]+ '</h6>'
  teste += '<h5> AB- </h5>'
  teste += '</div>';
  teste += '</div>';
  teste += '</div>';
  teste += '<div class="info">';
  teste += '<div class="endereco">';
  teste += '<h6>Endereço: <br>'
  endereco.forEach(function (parte) {
    teste += '<span>'+ parte +'</span><br>'
  })
  teste += '</h6>'
  teste += '<h6>Funcionamento: <br>'
  horario.forEach(function (parte){
    teste += '<span>'+ parte +';</span><br>'
  })
  teste += '</h6>'
  teste += '<h6>Telefone: <br><span>'+ detLocal.telefone +'</span> </h6>'
  teste += '<h6>Site: <br> <span><a href="'+detLocal.site+'"target="_blank">'+detLocal.site+'</a></span> </h6>'
  switch(detLocal.tipoAgendamento) {
    case "2":
      teste += '<h6><span>O agendamento para doação ocorre através do site.</span></h6>'  
    break;
    case "3":
      teste += '<h6><span>O agendamento para doação ocorre através do telefone.</span></h6>'
    break;
    case "4":
      teste += '<h6><span>O agendamento para doação ocorre presencialmente.</span></h6>'
    break;
  }
  teste += '<p>Ultima atualização: '+ data +'</P>'
  teste += '</div>';
  teste += '</div>';
  teste += '</div>';
  teste += '</div>';
  teste += '</div>';
  teste += '</div>';
  document.getElementById("local").innerHTML = teste;
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
    meses = {'Jan': '1','Feb': '2','Mar': '3','Apr': '4','May': '5','June': '6','July ': '7','Aug': '8',
    'Sep': '9','Out': '10','Nov': '11','Dec': '12'}
    dataFim = vData[2] + "/" + meses[vData[1]] + "/" + vData[3] + " " + vData[4]
    return dataFim
}