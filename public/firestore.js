const firebaseConfig = {
    apiKey: "AIzaSyBN9cI5pbKOqoxmRyfJf_CPNKoh-HZdBC8",
    authDomain: "projetodoarsangue.firebaseapp.com",
    databaseURL: "https://projetodoarsangue.firebaseio.com",
    projectId: "projetodoarsangue",
    storageBucket: "projetodoarsangue.appspot.com",
    messagingSenderId: "659741387357",
    appId: "1:659741387357:web:9af7017fa62adead45fbb4",
    measurementId: "G-GMZ95B6JNX"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  const geofirestore = new GeoFirestore(db);

  //======================Métodos de consulta ao banco de dados======================
  //
  //  •  carregaLocais(<latLng> centro, <Number> distancia);
  //
  //    centro: Coordenadas do ponto central de busca no formato latLng do Leaflet;
  //    distancia: Raio em km utilizado na busca a partir do centro.
  //
  //  Retorna Array do objeto local:
  //    local{
  //      nomeLocal: <string>,
  //      coordenadas: <latLng>
  //    }
  //

async function localDoacao(centro, distancia){
  const localDoacao = geofirestore.collection("localDoacao");
  const locais = [];
  await localDoacao.near({
      center: new firebase.firestore.GeoPoint(centro.lat, centro.lng),
      radius: distancia
  }).get().then(function(res){
      res.forEach(function(doc){
        let nome = doc.data().nomeLocal;
        let latlng = L.latLng(doc.data().coordinates.latitude, doc.data().coordinates.longitude);
        let local = new Object({nomeLocal: nome, coordenadas: latlng});
        locais.push(local);
      });
  }).catch(function(error){
      console.log(error);
  });
  return locais;
}

function apontaLocais(locais) {
  console.log(locais)
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
}

  //===================Métodos de carga no banco de dados===================
  //
  //
  //localDoacao.add({
  //  nomeLocal: <string> 'Nome do Local',
  //  idBanco: <reference> collection/document | <null>,
  //  detalheLocal: <reference> collection/document | <null>,
  //  dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
  //  coordinates: new firebase.firestore.GeoPoint(<number> latitude, <number> longitude)
  //});
  //
  //

  /*#####################   Função já executada para teste de locais no dia 23/05
function cargaDeTeste (){
  const localDoacao = geofirestore.collection("localDoacao");
  localDoacao.doc().add({
      nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
      idBanco: null,
      detalheLocal: null,
      dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
      coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
  });
  localDoacao.doc("").add({
      nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
      idBanco: null,
      detalheLocal: null,
      dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
      coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
  })
}*/