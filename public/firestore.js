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


/*#####################    Função executada para inserção de locais no dia 26/05
function carga2 (){
  const localDoacao = geofirestore.collection("localDoacao");
  localDoacao.add({
    nomeLocal: 'Banco de Sangue Paulista - Vila Nova Conceição',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.590063, -46.672961)
});
localDoacao.add({
    nomeLocal: 'Hospital Geral Pedreira',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.680972, -46.676464)
});
localDoacao.add({
    nomeLocal: 'Hospital Campo Limpo',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.649018, -46.749579)
});
localDoacao.add({
    nomeLocal: 'Banco de Sangue Unidade Einstein Morumbi',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.596405, -46.715751)
});
localDoacao.add({
    nomeLocal: 'Hospital Santa Paula - Hemocentro São Lucas - Unidade Vila Olimpia',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.605585, -46.675831)
});
localDoacao.add({
    nomeLocal: 'Banco De Sangue Do Hospital Do Servidor Publico Estadual',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.597489, -46.654629)
});
localDoacao.add({
    nomeLocal: 'Banco de Sangue de São Paulo',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.595571, -46.651450)
});
localDoacao.add({
    nomeLocal: 'Hemocentro Unifesp',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.595506, -46.644824)
});
localDoacao.add({
    nomeLocal: 'Hemocentro Cruz Azul',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.566404, -46.621661)
});
localDoacao.add({
    nomeLocal: 'Hospital Beneficência Portuguesa de São Paulo - Banco de Sangue',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.570087, -46.641871)
});
localDoacao.add({
    nomeLocal: 'Hemocentro São Lucas -  Unidade liberddde',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.558467, -46.634878)
});
localDoacao.add({
    nomeLocal: 'Sabará Hospital Infantil',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.549838, -46.659362)
});
localDoacao.add({
    nomeLocal: 'Hospital Nove de Julho',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.559415, -46.655226)
});
localDoacao.add({
    nomeLocal: 'Hospital Sírio Libanês',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.556913, -46.653985)
});
localDoacao.add({
    nomeLocal: 'Hospital Santa Catarina',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.569657, -46.645584)
});
localDoacao.add({
    nomeLocal: 'Hospital Oswaldo Cruz',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.568531, -46.643423)
});
localDoacao.add({
    nomeLocal: 'Hospital São luiz',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.590756, -46.703617)
});
localDoacao.add({
    nomeLocal: 'Hospital Edmundo Vasconcelos',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.595738, -46.653249)
});
localDoacao.add({
    nomeLocal: 'Banco de Sangue Paulista - Santo Amaro',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.655942, -46.705540)
});
localDoacao.add({
    nomeLocal: 'Hospital Geral de Guarulhos',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.449469, -46.495028)
});
localDoacao.add({
    nomeLocal: 'Centro de Hemofilia do Hospital das Clínicas da FMUSP',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.557763, -46.668959)
});
localDoacao.add({
    nomeLocal: 'Hospital São Paulo',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.597258, -46.643539)
});
localDoacao.add({
    nomeLocal: 'Hospital Brigadeiro',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.570494, -46.651341)
});
localDoacao.add({
    nomeLocal: 'Hemonúcleo da Santa Casa de São Paulo',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.543849, -46.649964)
});
localDoacao.add({
    nomeLocal: 'Centro de Hematologia de São Paulo',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.569522, -46.650506)
});
localDoacao.add({
    nomeLocal: 'Conjunto Hospitalar do Mandaqui - Pro Sangue',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.484589, -46.630398)
});
localDoacao.add({
    nomeLocal: 'Posto Dante Pazzanese - Pro Sangue',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.584822, -46.651795)
});
localDoacao.add({
    nomeLocal: 'Hospital Municipal Alípio Correa Neto',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.500519, -46.472723)
});
localDoacao.add({
    nomeLocal: 'Hospital IGESP',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.560918, -46.650295)
});
}*/