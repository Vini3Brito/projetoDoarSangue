L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Projeto Doar Sangue - Amigos do Tezinho Inc. - Univesidade Anhembi Morumbi',
    maxZoom: 20,
    minZoom: 4,
    id: 'lucasbassi/ck9vq4yzz01rq1imp48eqymsd',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNiYXNzaSIsImEiOiJjazl2bzkxcXgwMHVmM2tyenIxZGc0aGNiIn0.lD4f_HJLoF1URO0V3PGu_Q'
}).addTo(mymap);
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.prototype.options.iconUrl = 'marcador.png'
L.Icon.Default.prototype.options.iconSize = [30.5, 50]



function apontaLocais(locais) {
    locais.forEach(function(item){
      L.marker(item.coordenadas).addTo(mymap)
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