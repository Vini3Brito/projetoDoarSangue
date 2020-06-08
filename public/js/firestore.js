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

  //======================Método de consulta ao banco de dados======================
  //
  //  •  carregaLocais(<latLng> centro, <Number> distancia);
  //  •  carregaLocaisPorTipo(<latLng> centro, <Number> distancia, <Number> tipo);
  //  •  carregaDetalhesLocal(<hash> idLocal);
  //  •  carregaDetalhesBanco(<hash> idLocal);
  //
  //========================Detalhe dos métodos de consulta=========================
  //
  //  •  carregaLocais(<latLng> centro, <Number> distancia);
  //
  //    centro: Coordenadas do ponto central de busca no formato latLng do Leaflet;
  //    distancia: Raio em km utilizado na busca a partir do centro.
  //
  //  -> Retorna Array do objeto local:
  //    local{
  //      idLocal: <hash>,
  //      nomeLocal: <string>,
  //      coordenadas: <latLng>
  //    }
  //
  //--------------------------------------------------------------------------------
  //
  //  •  novocarregaLocais(<latLng> centro, <Number> distancia);
  //
  //    centro: Coordenadas do ponto central de busca no formato latLng do Leaflet;
  //    distancia: Raio em km utilizado na busca a partir do centro.
  //    tipo: Tipo sanguíneo utilizado para consulta
  //
  //  -> Retorna Array do objeto local:
  //    local{
  //      idLocal: <hash>,
  //      nomeLocal: <string>,
  //      coordenadas: <latLng>,
  //      detalheLocal{
  //        enderecoLocal: <string>,
  //        horarioFuncionamento: <string>,       (Caso o dado exista no banco)
  //        telefone: <string>,                   (Caso o dado exista no banco)
  //        email: <string>,                      (Caso o dado exista no banco)
  //        site: <string>,                       (Caso o dado exista no banco)
  //        redeSocial: <string>,                 (Caso o dado exista no banco)
  //        tipoAgendamento: <string>,            (1-Não tem / 2-On-line / 3-Telefone / 4-Presencial)
  //        dataAtualizacao: <date>
  //      },
  //      banco{
  //        nomeBanco: <string>,
  //        nivelApos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelBpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelOpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelABpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelAneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelBneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelOneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        nivelABneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //        dataAtualizacao: <date>
  //      }
  //      nivelEstoque: <number> (1-Crítico / 2-Alerta / 3-Estável)
  //    }
  //
  //--------------------------------------------------------------------------------

  async function carregaLocais(centro, distancia){
  const localDoacao = geofirestore.collection("localDoacao");
  const locais = [];
  await localDoacao.near({
      center: new firebase.firestore.GeoPoint(centro.lat, centro.lng),
      radius: distancia
  }).get().then(function(res){
    res.forEach(function(doc){
        let local = new Object();
        local.idLocal = doc.id;
        local.nomeLocal = doc.data().nomeLocal;
        local.coordenadas = L.latLng(doc.data().coordinates.latitude, doc.data().coordinates.longitude);
        if(doc.data().idBanco != null){
            local.idBanco = doc.data().idBanco.id;
        }
        locais.push(local);
    });
  }).catch(function(error){
      console.log(error);
  });
  return locais;
}

async function novocarregaLocais(centro, distancia){
    const localColeta = geofirestore.collection("localColeta");
    const locais = [];
    await localColeta.near({
        center: new firebase.firestore.GeoPoint(centro.lat, centro.lng),
        radius: distancia
    }).get().then(function(res){
        res.forEach(function(doc){
            let local = new Object();
            local.idLocal = doc.id;
            local.nomeLocal = doc.data().nomeLocal;
            local.coordenadas = L.latLng(doc.data().coordinates.latitude, doc.data().coordinates.longitude);
            local.detalheLocal = doc.data().detalheLocal;
            local.banco = doc.data().banco;
            locais.push(local);
        });
    }).catch(function(error){
        let codigo = error.code;
        if(codigo == "deadline-exceeded"){
            alert("Ocorreu um erro de carregamento, por favor atualize a página.");
        } else if (codigo == "data-loss" || codigo == "internal"){
            alert("Ocorreu um erro interno, por gentileza entrar em contato com os proprietários do portal.");
        } else {
            alert("Ocorreu um erro na página, por favor tente novamente mais tarde.");
        }
    });
    return locais;
}