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
  carregaLocais(localInicial, distanciaBusca).then(consulta => {
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
    locais.forEach(function(item){
      L.marker(item.coordenadas, {icon: iconePadrao}).addTo(mymap)
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
        });
      });
      return true
  }
  
  //==============================Teste dos métodos==============================
  //------Centro de Hematologia de São Paulo - Banco de Sangue de São Paulo------
  
// carregaDetalhesLocal("E18O20sOAXudGpju5VMw").then(resultado=>{         
//   console.log(resultado);
// });
// carregaDetalhesBanco("E18O20sOAXudGpju5VMw").then(resultado =>{
//   console.log(resultado);
// });