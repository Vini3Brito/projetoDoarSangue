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
  //      tipoAgendamento: <string>,            (1-Não tem / 2-On-line / 3-Telefone / 4-Presencial)
  //      dataAtualizacao: <date>
  //    }
  //
  //--------------------------------------------------------------------------------
  //
  //  •  carregaDetalhesBanco(<hash> idBanco);
  //
  //    idBanco: Nome identificador do banco de sangue para consulta;
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
                            case "1":
                                locais[local].nivelEstoque = res.data().nivelApos;
                                break;
                            case "2":
                                locais[local].nivelEstoque = res.data().nivelBpos;
                                break;
                            case "3":
                                locais[local].nivelEstoque = res.data().nivelOpos;
                                break;
                            case "4":
                                locais[local].nivelEstoque = res.data().nivelABpos;
                                break;
                            case "5":
                                locais[local].nivelEstoque = res.data().nivelAneg;
                                break;
                            case "6":
                                locais[local].nivelEstoque = res.data().nivelBneg;
                                break;
                            case "7":
                                locais[local].nivelEstoque = res.data().nivelOneg;
                                break;
                            case "8":
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

async function carregaDetalhesBanco(idBanco){
    const bancoSangue = db.collection("bancoSangue").doc(idBanco).collection("nivelEstoque");
    const estoque = new Object();
    await bancoSangue.orderBy("dataAtualizacao", "desc").limit(1).get().then(doc=>{
        doc.forEach(res =>{
            estoque.nomeBanco = idBanco;
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
    }).catch(function(error){
        console.log(error);
    });
    return estoque;
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
        console.log(error);
    });
    return locais;
}