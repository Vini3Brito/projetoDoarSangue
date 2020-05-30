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
  //  •  carregaLocaisPorTipo(<latLng> centro, <Number> distancia, <Number> tipo);
  //
  //    centro: Coordenadas do ponto central de busca no formato latLng do Leaflet;
  //    distancia: Raio em km utilizado na busca a partir do centro;.
  //    tipo: Tipo sanguíneo utilizado para consulta
  //      1: A+
  //      2: B+
  //      3: O+
  //      4: AB+
  //      5: A-
  //      6: B-
  //      7: O-
  //      8: AB-
  //
  //  -> Retorna Array do objeto local:
  //    local{
  //      idLocal: <hash>,
  //      nomeLocal: <string>,
  //      coordenadas: <latLng>,
  //      nivelEstoque: <number> (1-Crítico / 2-Alerta / 3-Estável)
  //    }
  //
  //--------------------------------------------------------------------------------
  //
  //  •  carregaDetalhesLocal(<hash> idLocal);
  //
  //    idLocal: Hash identificadora do local para consulta;
  //
  //  -> Retorna objeto detalhe:
  //    detalhe{
  //      enderecoLocal: <string>,
  //      horarioFuncionamento: <string>,       (Caso o dado exista no banco)
  //      telefone: <string>,                   (Caso o dado exista no banco)
  //      email: <string>,                      (Caso o dado exista no banco)
  //      site: <string>,                       (Caso o dado exista no banco)
  //      redeSocial: <string>,                 (Caso o dado exista no banco)
  //      tipoAgendamento: <string>,
  //      dataAtualizacao: <date>
  //    }
  //
  //
  //  •  carregaDetalhesBanco(<hash> idLocal);
  //
  //    idLocal: Hash identificadora do local para consulta;
  //
  //  -> Retorna objeto banco:
  //    banco{
  //      nomeBanco: <string>,
  //      nivelApos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelBpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelOpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelABpos: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelAneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelBneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelOneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      nivelABneg: <number>,      (1-Crítico / 2-Alerta / 3-Estável)
  //      dataAtualizacao: <date>
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

async function carregaLocaisPorTipo(centro, distancia, tipo){
    const localDoacao = geofirestore.collection("localDoacao");
    const bancoSangue = db.collection("bancoSangue");
    const locais = [];
    await localDoacao.near({
        center: new firebase.firestore.GeoPoint(centro.lat, centro.lng),
        radius: distancia
    }).get().then(async function(res){
        await res.forEach(async function(doc){
            let local = new Object();
            local.idLocal = doc.id;
            local.nomeLocal = doc.data().nomeLocal;
            local.coordenadas = L.latLng(doc.data().coordinates.latitude, doc.data().coordinates.longitude);
            if(doc.data().idBanco != null){
                local.idBanco = doc.data().idBanco.id;
            } else {
                local.idBanco = null;
            }
            locais.push(local);
        });
        //Por conta da função forEach não suportar async/await foi usado um for para consulta ao banco de sangue.
        for (const local in locais){
            if(locais[local].idBanco != null){
                await bancoSangue.doc(locais[local].idBanco).collection("nivelEstoque")
                .orderBy("dataAtualizacao", "desc")
                .limit(1).get().then(doc=>{
                    doc.forEach(res=>{
                        switch (tipo){
                            case 1:
                                locais[local].nivelEstoque = res.data().nivelApos;
                                break;
                            case 2:
                                locais[local].nivelEstoque = res.data().nivelBpos;
                                break;
                            case 3:
                                locais[local].nivelEstoque = res.data().nivelOpos;
                                break;
                            case 4:
                                locais[local].nivelEstoque = res.data().nivelABpos;
                                break;
                            case 5:
                                locais[local].nivelEstoque = res.data().nivelAneg;
                                break;
                            case 6:
                                locais[local].nivelEstoque = res.data().nivelBneg;
                                break;
                            case 7:
                                locais[local].nivelEstoque = res.data().nivelOneg;
                                break;
                            case 8:
                                locais[local].nivelEstoque = res.data().nivelABneg;
                                break;
                        }
                    });
                }).catch(function(error){
                    console.log(error);
                });
            }
        }
    }).catch(function(error){
        console.log(error);
    });
    return locais;
}

async function carregaDetalhesLocal(idLocal){
    const detalheLocal = db.collection("localDoacao").doc(idLocal).collection("detalheLocal");
    const detalhe = new Object();
    await detalheLocal.orderBy("dataAtualizacao", "desc").limit(1).get().then(doc=>{
        doc.forEach(res =>{
            detalhe.enderecoLocal = res.data().enderecoLocal;
            if(res.data().horarioFuncionamento != null){
                detalhe.horarioFuncionamento = res.data().horarioFuncionamento;
            }
            if(res.data().telefone != null){
                detalhe.telefone = res.data().telefone
            }
            if(res.data().email != null){
                detalhe.email = res.data().email;
            }
            if(res.data().site != null){
                detalhe.site = res.data().site;
            }
            if(res.data().redeSocial != null){
                detalhe.redeSocial = res.data().redeSocial;
            }
            detalhe.tipoAgendamento = res.data().tipoAgendamento;
            detalhe.dataAtualizacao = res.data().dataAtualizacao.toDate();
        });
    }).catch(function(error){
        console.log(error);
    });
    return detalhe;
}

async function carregaDetalhesBanco(idLocal){
    const localDoacao = db.collection("localDoacao").doc(idLocal);
    const estoque = new Object();
    await localDoacao.get().then(async function (res) {
        if(res.data().d.idBanco != null){
            await res.data().d.idBanco.get().then(async function (banco){
                await banco.ref.collection("nivelEstoque").orderBy("dataAtualizacao", "desc").limit(1)
                .get().then(doc=>{
                    doc.forEach(res =>{
                        estoque.nomeBanco = banco.id;
                        estoque.nivelApos = res.data().nivelApos;
                        estoque.nivelBpos = res.data().nivelBpos;
                        estoque.nivelOpos = res.data().nivelOpos;
                        estoque.nivelABpos = res.data().nivelABpos;
                        estoque.nivelAneg = res.data().nivelAneg;
                        estoque.nivelBneg = res.data().nivelBneg;
                        estoque.nivelOneg = res.data().nivelOneg;
                        estoque.nivelABneg = res.data().nivelABneg;
                        estoque.dataAtualizacao = res.data().dataAtualizacao.toDate();
                    });
                });
            })
        }
    }).catch(function(error){
        console.log(error);
    });
    return estoque;
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
localDoacao.add({
    nomeLocal: 'CTA/SP',
    idBanco: null,
    detalheLocal: null,
    dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    coordinates: new firebase.firestore.GeoPoint(-23.534208, -46.686974)
});
}*/