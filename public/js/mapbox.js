//Variáveis iniciais de ambiente
let localInicial = L.latLng(-23.565658, -46.651218);
let raioExibicao = 5; //Km
let distanciaBusca = raioExibicao * 10;
let locais;
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

function inicio() {
  mymap.locate({ setView: true, maxZoom: 14.5 }).on("locationfound", e => {
    //Consulta de locais quando usuário passa sua localização
    close_localizacao();
    //Trecho para tratar caso o usuário esteja fora dos limites de São Paulo
    let latitude = e.latlng.lat;
    let longitude = e.latlng.lng;
    if(latitude > -23.417254 || latitude < -23.727655 || longitude > -46.474720 || longitude < -46.808425){
      e.latlng.lat = localInicial.lat;
      e.latlng.lng = localInicial.lng;
      mymap.setView(e.latlng);
    }
    //Fim do trecho
    novocarregaLocais(e.latlng, distanciaBusca).then(consulta => {
      locais = consulta
    });
  }).on("locationerror", e => {
    //Consulta de locais quando usuário NÃO passa sua localização
    close_localizacao()
    novocarregaLocais(localInicial, distanciaBusca).then(consulta => {
      locais = consulta;
    });
  });
}

var iconePadrao = L.icon({
  iconUrl: './Ícones/marcador.svg',
  shadowUrl: './Ícones/marcador-sombra.svg',
  iconSize: [25.8, 48.8],
  shadowSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeClaro = L.icon({
  iconUrl: './Ícones/marcador-claro.svg',
  shadowUrl: './Ícones/marcador-sombra.svg',
  iconSize: [25.8, 48.8],
  shadowSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeMedio = L.icon({
  iconUrl: './Ícones/marcador-medio.svg',
  shadowUrl: './Ícones/marcador-sombra.svg',
  iconSize: [25.8, 48.8],
  shadowSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});
var iconeEscuro = L.icon({
  iconUrl: './Ícones/marcador-escuro.svg',
  shadowUrl: './Ícones/marcador-sombra.svg',
  iconSize: [25.8, 48.8],
  shadowSize: [25.8, 48.8],
  popupAnchor: [0, -18]
});

function verificaLocais(tipo) {
  setTimeout(function () {
    if (typeof locais == "undefined") {
      verificaLocais(tipo);
    } else {
      apontaLocais(tipo)
    }
  }, 100)
}

function apontaLocais(tipo) {
  if (tipo == "0") {
    document.getElementById("legenda").style.visibility = "hidden"
  }
  tipo = "nivel" + tipo
  //Ainda não tratei os icones pq vi antes que dava ruim
  locais.forEach(function (item) {
    
      switch (item.banco[tipo]) {
        case 1:
          icone = iconeClaro
          break
        case 2:
          icone = iconeMedio
          break
        case 3:
          icone = iconeEscuro
          break
        default:
          icone = iconePadrao
          break;
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
  desativa();
}


// Abrir modal dos locais

async function abrirLocal(item) {
  document.getElementById("button_informacao").style.display = "none";
  document.getElementById("img_questionario").style.display = "none";
  document.getElementById("balao_questionario").style.display = "none";
  document.getElementById("legenda").style.display = "none";


  ref = {
    texto: ['Crítico', 'Alerta', 'Estável'],
    img: ['./Ícones/bolsa_baixa.svg', './Ícones/bolsa_media.svg', './Ícones/bolsa_alta.svg']
  }
  let detLocal = item.detalheLocal;
  let detBanco = item.banco;
  let horario;
  let redes;
  endereco = detLocal.enderecoLocal.split('\\n')
  if (detLocal.horarioFuncionamento != null) {
    horario = detLocal.horarioFuncionamento.split('\\n')
  }
  if (detLocal.redeSocial != null) {
    redes = detLocal.redeSocial.split('\\n')
  }
  data = arrumarData(detLocal.dataAtualizacao.toDate());

  mLocal = "";
  mLocal += '<div class="modal" id="mostraLocal" tabindex="-1" role="dialog">';
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
  mLocal += '<h4>Nível de Estoque</h4>'
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
  mLocal += '<p> Os dados sobre o nível do estoque podem ser fictícios'
    mLocal += '</p> '
  mLocal += '</div>';
  mLocal += '<div class="info">';
  mLocal += '<div class="endereco">';
  mLocal += '<h6>Endereço: <br>'
  endereco.forEach(function (parte) {
    mLocal += '<span>' + parte + '</span><br>'
  })
  mLocal += '</h6>'
  if (horario != null) {
    mLocal += '<h6>Funcionamento: <br>'
    horario.forEach(function (parte) {
      mLocal += '<span>' + parte + ';</span><br>'
    })
    mLocal += '</h6>'
  }
  if (detLocal.telefone != null || detLocal.site != null || detLocal.email != null || redes != null) {
    mLocal += '<h6>Contato:<br>'
    if (detLocal.telefone != null) {
      mLocal += '<span>Telefone: <a href="tel:'+detLocal.telefone+'">' + detLocal.telefone + '</a></span><br>'
    }
    if (detLocal.email != null) {
      mLocal += '<span>Email: <a href="mailto:'+detLocal.email+'">' + detLocal.email + '</a></span> <br>'
    }
    mLocal += '</h6>'
    if (detLocal.site != null || redes !=null) {
      mLocal += '<h6>Redes Sociais:<br>'
      if(detLocal.site!=null){
      mLocal += '<span><a href="' + detLocal.site + '"target="_blank"><img alt="site" width="35px" height="35px" src="./Ícones/icone-site.svg"></a></span><span>    </span>'}
      if (redes != null) {
      redes.forEach(function (parte) {
        rede = parte.split(";")
        if (rede[0] == "Instagram") {
          mLocal += '<span><a href="' + rede[1] + '"target="_blank"><img alt="Instagram" width="35px" height="35px" src="./Ícones/icone-instagram.svg"></a></span><span>    </span>'
        }
        else if (rede[0] == "Facebook") {
          mLocal += '<span><a href="' + rede[1] + '"target="_blank"><img alt="Facebook" width="35px" height="35px" src="./Ícones/icone-facebook.svg"></a></span><span>    </span>'
        }
        else if (rede[0] == "Twitter") {
          mLocal += '<span><a href="' + rede[1] + '"target="_blank"><img alt="Twitter" width="35px" height="35px" src="./Ícones/icone-twitter.svg"></a></span><span>    </span>'
        }
      })
    }
    mLocal += '</h6>'
  }
  }
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

function arrumarData(data) {
  let dia;
  let mes;
  if(data.getDate().toString().length == 1){
    dia = "0" + data.getDate()
  } else {
    dia = data.getDate()
  }
  if((data.getMonth()+1).toString().length == 1){
    mes = "0" + (data.getMonth()+1)
  } else {
    mes = (data.getMonth()+1)
  }
  return dia + "/" + mes + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes();
}