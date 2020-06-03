
  //===================Métodos de carga no banco de dados===================
  //
  /*localDoacao.add({
        nomeLocal: <string> 'Nome do Local',
        idBanco: <reference> collection/document | <null>,
        detalheLocal: <reference> collection/document | <null>,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        coordinates: new firebase.firestore.GeoPoint(<number> latitude, <number> longitude)
    });*/
  //
  //
  //
  /*localDoacao.doc("hCXhE4i7qHqnXA8yP3vJ").collection("detalheLocal").add({
        enderecoLocal: 'R. Iguatinga, 382\nSanto Amaro, 04744-040',
        horarioFuncionamento: ,
        telefone: ,
        email: ,
        site: ,
        redeSocial: ,
        tipoAgendamento: ,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });*/
  //
  //
  //
  //

//#############################   Utilizar as funções abaixo para criar usuário/autenticar
// const email = '';
// const senha = '';
// firebase.auth().signInWithEmailAndPassword(email, senha).then(function(){
//     let user = firebase.auth().currentUser;
//     console.log(user.uid);
// }).catch(function(error) {
//     console.log(error);
//     if (error.code == 'auth/user-not-found'){
//         if(confirm("Será feito um cadastro para o e-mail " + email + " com a senha " + senha)){
//             // Cadastra usuario
//             firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(){
//                 firebase.auth().onAuthStateChanged(function(user) {
//                     console.log(user.uid)
//                 });
//             }).catch(function(error) {
//                 console.log(error);
//             });
//         }
//     } else {
//         console.log(error);
//     }
// });

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

/*########################### Função executada dia 03/06 para inserção de informações de locais
function carga3(){
    const localDoacao = db.collection("localDoacao");
    localDoacao.doc("hCXhE4i7qHqnXA8yP3vJ").collection("detalheLocal").add({
        enderecoLocal: 'R. Iguatinga, 382\nSanto Amaro, 04744-040',
        horarioFuncionamento: 'De segunda a sabado, das 8 às 16h30\nFechado aos domingos',
        telefone: '(11) 3048-8969',
        site: 'https://www.bancodesanguepaulista.com.br/',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("Io3CAcQ7tQMF6Zx0HBaR").collection("detalheLocal").add({
        enderecoLocal: 'R. Dr. Alceu de Campos Rodrigues, 46\n Vila Nova Conceiçao - 04544-000',
        horarioFuncionamento: 'De segunda a sabado, das 8 às 16h30\nFechado aos domingos',
        telefone: '(11) 3048-8950',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("kArNPVliYUmaGt9Q09Ia").collection("detalheLocal").add({
        enderecoLocal: 'Avenida Albert Einstein, 627\nBloco E - 3º andar - Morumbi,05652-900',
        horarioFuncionamento: 'De segunda a sexta-feira, das 8 às 19h\nAos sábados, das 8 às 14h\nFechado aos domingos',
        telefone: '(11) 2151-1233',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("E18O20sOAXudGpju5VMw").collection("detalheLocal").add({
        enderecoLocal: 'Av. Brigadeiro Luís Antônio, 2533\nJardim Paulista, 01401-002',
        horarioFuncionamento: 'De segunda a sexta-feira, das 8 às 17h\nAos sábados, das 8 às 16h\nFechado aos domingos',
        telefone: '(11) 3373-2000',
        site: 'http://www.bssp.com.br/',
        tipoAgendamento: 2,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("vjOHOAcJjBHIgpsFZJfs").collection("detalheLocal").add({
        enderecoLocal: 'R. Borges Lagoa, 1450\nVila Clementino, 04038-905',
        horarioFuncionamento: 'De segunda a sabado, das 8 às 12h\nFechado aos domingos',
        telefone: ' (11) 5080-4435',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("8NY5OthFIareAfa1e8qk").collection("detalheLocal").add({
        enderecoLocal: 'Av. Enéas Carvalho de Aguiar, 155\n1º andar - Cerqueira Cesar, 05403-000',
        horarioFuncionamento: 'De segunda a sexta-feira, das 7 às 18h\nSábados, feriados e emendas de feriado, das 8 às 17h\nFechado aos Domingos',
        telefone: '(11) 4573-7800',
        email: 'faleconosco@prosangue.sp.gov.br',
        site: 'http://prosangue.sp.gov.br/home/Default.html',
        tipoAgendamento: 2,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("09FJtndlPOPnC21TJoaA").collection("detalheLocal").add({
        enderecoLocal: 'R. Voluntários da Pátria, 422\nMandaqui, 02401-400',
        horarioFuncionamento: 'De segunda a sexta das 8 às 16h30\nFechado aos sabados e domingos',
        telefone: '(11) 4573-7800',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("ost04Z2YKClwr1LkyrB1").collection("detalheLocal").add({
        enderecoLocal: ' Av. Dr. Dante Pazzanese, 500\nVila Mariana, 04012-180',
        horarioFuncionamento: 'De segunda a sexta das 8 às 13h00\nFechado aos sabados e domingos',
        telefone: '(11) 4573-7800',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("LlG42nUN3pY64wrqf1vi").collection("detalheLocal").add({
        enderecoLocal: ' R. Líbero Badaró, 144\nCentro Histórico de São Paulo,01008-001',
        horarioFuncionamento: 'De segunda a sexta-feira, das 8 às 19h\nFechado aos sábados edomingos',
        telefone: '(11) 3241-2224',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("lZ6mUjJ2NYlNFWh16zLM").collection("detalheLocal").add({
        enderecoLocal: 'Av. Lins de Vasconcelos, 356\nCambuci, 01538-900',
        horarioFuncionamento: 'De segunda a sexta das 8 às 13h00\nFechado aos sabados e domingos',
        telefone: '(11) 3348-4000',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("AZtAgxU1ngxcPuZx6kTY").collection("detalheLocal").add({
        enderecoLocal: 'R. Dr. Diogo de Faria, 824\n - Vila Clementino, 04037-002',
        horarioFuncionamento: 'De segunda a sabado, das 8 às 17h30\nFechado aos domingos',
        telefone: '(11) 5576-4240',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("VIALlHX16uHzAdb1jEa6").collection("detalheLocal").add({
        enderecoLocal: 'Rua Barão de Iguape, 212\n2º Andar - Liberdade, 01507-000',
        horarioFuncionamento: 'De segunda a sexta das 8 às 17h00\nFechado aos sabados e domingos',
        telefone: '(11) 3660-6044',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("lIQdIjgeJZwjrjFFXEGG").collection("detalheLocal").add({
        enderecoLocal: ' R. Marquês de Itu, 579\n - Vila Buarque01223-001',
        horarioFuncionamento: 'De segunda a sexta-feira, das 7 às 18h\nAos sábados, das 8 às 15h\nFechado aos domingos',
        telefone: '(11) 2176-7258',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("9FPHEJHBO8hzH22KpBpw").collection("detalheLocal").add({
        enderecoLocal: 'R. João Julião, 331\n- Bela Vista\n 01323-020',
        horarioFuncionamento: 'De segunda a sexta-feira, das 7 às 18h\nAos sábados, das 8 às 15h\nFechado aos domingos',
        telefone: ' (11) 3286-7372',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("gXIaSjzkZ6DZzzLI3I0w").collection("detalheLocal").add({
        enderecoLocal: 'Rua Pedro de Toledo, 1800\n Vila Clementino, 04039-000',
        horarioFuncionamento: 'De segunda a sexta-feira, das 9 às 16h\nAos sábados, das 8 às 16h\nFechado aos domingos',
        telefone: '(11) 4573-8249',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("725O2TNPywKzKdAzlLRS").collection("detalheLocal").add({
        enderecoLocal: 'R. Maestro Cardim, 1041\n Bela Vista, 01323-130',
        horarioFuncionamento: 'De segunda a sexta-feira, das 8 às 16h\nAos sábados, das 7 às 14h\nFechado aos domingos',
        telefone: '(11) 3505-1000',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("cW0LbZ8NPMCh2RUJYUi4").collection("detalheLocal").add({
        enderecoLocal: 'Estrada de Itapecerica 1742\n Campo Limpo,05835-005',
        horarioFuncionamento: 'De segunda a sexta-feira, das 8 às 16h\nAos sábados, das 7 às 14h\nFechado aos domingos',
        telefone: '(11) 3394-7460',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("sjvk2RYVVL8yU8X5lFYj").collection("detalheLocal").add({
        enderecoLocal: 'lameda dos Lírios, 300\nParque Cecap, 07190-012',
        horarioFuncionamento: 'De segunda a sexta-feira, das 9 às 16h\nAos sábados, das 8 às 16h\nFechado aos domingos',
        telefone: '(11) 3466-1350',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("2TeuymEZZTgNKi2jpA3O").collection("detalheLocal").add({
        enderecoLocal: ' R. João Francisco de Moura, 251 \nVila Campo Grande, 04455-170',
        horarioFuncionamento: 'De segunda a sabado, das 8 às 17h30\nFechado aos domingos',
        telefone: '(11) 5613-5900',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("gimhnBw2GK8ZlkPVoZ4k").collection("detalheLocal").add({
        enderecoLocal: 'R. Silvia, 276\n Bela Vista 01331-010',
        horarioFuncionamento: 'segunda a sexta-feira, das 8h às 11h30\nou aos sábados, das 8h às 12h\fechado aos domingos',
        telefone: '(11) 3147-6330',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("VZjDIU3aOmc7O8qIhoLq").collection("detalheLocal").add({
        enderecoLocal: 'Alameda Rodrigo de Brum, 1989\nVila Paranagua,  03807-230',
        horarioFuncionamento: ' Segunda à sábado, das 8 às 13 horas\nFechado aos domingos',
        telefone: '(11) 2297-0022',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("9krl2wRJLiVjO0CPwDkq").collection("detalheLocal").add({
        enderecoLocal: 'Rua Peixoto Gomide, 625\nCerqueira Cesar CEP: 01409-902',
        horarioFuncionamento: 'De segunda a sabado das 8 às 17h00\nFechado aos sabados e domingos',
        telefone: '(11) 3285-2922',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("KYffVWo03Q66c5rR8y4O").collection("detalheLocal").add({
        enderecoLocal: 'venida Paulista, 200\n - Bela Vista - Cep 01310-000',
        horarioFuncionamento: 'segunda a sexta-feira, das 8h às 18h\n, e aos sábados, das 8h às 15h.',
        telefone: '(11) 3016-4133',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("I73bYUpCophsfFynhd5H").collection("detalheLocal").add({
        enderecoLocal: 'Av. Santo Amaro, 2468\n Vila Olímpia, 04556-100',
        horarioFuncionamento: 'De segunda a sexta das 8 às 16h00\nFechado aos sabados e domingos',
        telefone: '(11) 3660-5972',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("X2ncE6LRavoCdEHJYujm").collection("detalheLocal").add({
        enderecoLocal: 'Rua Michel Ouchana, 94\n Jaçanã 02276-140',
        horarioFuncionamento: 'Segunda a Sexta das 08h00 as 11h0\n Fechado sabados e domingo',
        telefone: '(11) 3466-1000',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("FMYqa05KAULpLZpt0o5p").collection("detalheLocal").add({
        enderecoLocal: ' Rua Dona Adma Jafet, 91\n Bela Vista,  01308-050',
        horarioFuncionamento: 'segunda a sábado, das 7h às 16h\nFechado aos domingos',
        telefone: '(11) 3394-5260',
        tipoAgendamento: 1,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
localDoacao.doc("bRNIoOEGs5nMAa76qpSb").collection("detalheLocal").add({
        enderecoLocal: 'Av. Angélica, 1987\n - Consolação, 01227-200',
        horarioFuncionamento: 'segunda a sábado, das 8h às 16h\nFechado aos domingos',
        telefone: '(11) 3355-3870',
        tipoAgendamento: 4,
        dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
    });
}*/

/*##################### Update executado dia 02/06 para apontar todos para 1 banco de sangue só
function carga4 (){
    const localDoacao = geofirestore.collection("localDoacao");
localDoacao.doc("hCXhE4i7qHqnXA8yP3vJ").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("Io3CAcQ7tQMF6Zx0HBaR").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("kArNPVliYUmaGt9Q09Ia").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("E18O20sOAXudGpju5VMw").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("vjOHOAcJjBHIgpsFZJfs").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("8NY5OthFIareAfa1e8qk").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("09FJtndlPOPnC21TJoaA").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("ost04Z2YKClwr1LkyrB1").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("LlG42nUN3pY64wrqf1vi").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("lZ6mUjJ2NYlNFWh16zLM").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("AZtAgxU1ngxcPuZx6kTY").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("VIALlHX16uHzAdb1jEa6").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("lIQdIjgeJZwjrjFFXEGG").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("9FPHEJHBO8hzH22KpBpw").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("gXIaSjzkZ6DZzzLI3I0w").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("725O2TNPywKzKdAzlLRS").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("cW0LbZ8NPMCh2RUJYUi4").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("sjvk2RYVVL8yU8X5lFYj").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("2TeuymEZZTgNKi2jpA3O").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("gimhnBw2GK8ZlkPVoZ4k").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("VZjDIU3aOmc7O8qIhoLq").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("9krl2wRJLiVjO0CPwDkq").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("KYffVWo03Q66c5rR8y4O").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("I73bYUpCophsfFynhd5H").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("X2ncE6LRavoCdEHJYujm").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("FMYqa05KAULpLZpt0o5p").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });
localDoacao.doc("bRNIoOEGs5nMAa76qpSb").update({
        idBanco: '/bancoSangue/Banco de Sangue de São Paulo'
    });

}*/

/*##################### Update executado dia 02/06 para apontar todos para 1 banco de sangue só
function carga5 (){
    const localDoacao = geofirestore.collection("localDoacao");
    const bssp = db.collection("bancoSangue").doc("Banco de Sangue de São Paulo");
localDoacao.doc("hCXhE4i7qHqnXA8yP3vJ").update({
        idBanco: bssp
    });
localDoacao.doc("Io3CAcQ7tQMF6Zx0HBaR").update({
        idBanco: bssp
    });
localDoacao.doc("kArNPVliYUmaGt9Q09Ia").update({
        idBanco: bssp
    });
localDoacao.doc("E18O20sOAXudGpju5VMw").update({
        idBanco: bssp
    });
localDoacao.doc("vjOHOAcJjBHIgpsFZJfs").update({
        idBanco: bssp
    });
localDoacao.doc("8NY5OthFIareAfa1e8qk").update({
        idBanco: bssp
    });
localDoacao.doc("09FJtndlPOPnC21TJoaA").update({
        idBanco: bssp
    });
localDoacao.doc("ost04Z2YKClwr1LkyrB1").update({
        idBanco: bssp
    });
localDoacao.doc("LlG42nUN3pY64wrqf1vi").update({
        idBanco: bssp
    });
localDoacao.doc("lZ6mUjJ2NYlNFWh16zLM").update({
        idBanco: bssp
    });
localDoacao.doc("AZtAgxU1ngxcPuZx6kTY").update({
        idBanco: bssp
    });
localDoacao.doc("VIALlHX16uHzAdb1jEa6").update({
        idBanco: bssp
    });
localDoacao.doc("lIQdIjgeJZwjrjFFXEGG").update({
        idBanco: bssp
    });
localDoacao.doc("9FPHEJHBO8hzH22KpBpw").update({
        idBanco: bssp
    });
localDoacao.doc("gXIaSjzkZ6DZzzLI3I0w").update({
        idBanco: bssp
    });
localDoacao.doc("725O2TNPywKzKdAzlLRS").update({
        idBanco: bssp
    });
localDoacao.doc("cW0LbZ8NPMCh2RUJYUi4").update({
        idBanco: bssp
    });
localDoacao.doc("sjvk2RYVVL8yU8X5lFYj").update({
        idBanco: bssp
    });
localDoacao.doc("2TeuymEZZTgNKi2jpA3O").update({
        idBanco: bssp
    });
localDoacao.doc("gimhnBw2GK8ZlkPVoZ4k").update({
        idBanco: bssp
    });
localDoacao.doc("VZjDIU3aOmc7O8qIhoLq").update({
        idBanco: bssp
    });
localDoacao.doc("9krl2wRJLiVjO0CPwDkq").update({
        idBanco: bssp
    });
localDoacao.doc("KYffVWo03Q66c5rR8y4O").update({
        idBanco: bssp
    });
localDoacao.doc("I73bYUpCophsfFynhd5H").update({
        idBanco: bssp
    });
localDoacao.doc("X2ncE6LRavoCdEHJYujm").update({
        idBanco: bssp
    });
localDoacao.doc("FMYqa05KAULpLZpt0o5p").update({
        idBanco: bssp
    });
localDoacao.doc("bRNIoOEGs5nMAa76qpSb").update({
        idBanco: bssp
    });

}*/

/*############# Inserção do dia 03/06 de 100 locais para testar novo modelo de dados
function cargaDeTeste (){
    const localColeta = geofirestore.collection("localColeta");
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
    localColeta.doc().set({
        nomeLocal: 'Instituto Dante Pazzanese de Cardiologia',
        detalheLocal:{
            enderecoLocal: 'Instituto Dante',
            horarioFuncionamento: 'Instituto Dante',
            telefone: 'Instituto Dante',
            email: 'Instituto Dante',
            site: 'Instituto Dante',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.58477, -46.651791)
    });
    localColeta.doc().set({
        nomeLocal: 'Fundação Pró-Sangue Hemocentro de São Paulo',
        detalheLocal:{
            enderecoLocal: 'Fundação Pró-Sangue',
            horarioFuncionamento: 'Fundação Pró-Sangue',
            telefone: 'Fundação Pró-Sangue',
            email: 'Fundação Pró-Sangue',
            site: 'Fundação Pró-Sangue',
            tipoAgendamento: '1',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp(),
        },
        banco:{
            nomeBanco: 'Banco de Sangue de São Paulo',
            nivelApos: '3',
            nivelBpos: '2',
            nivelOpos: '1',
            nivelABpos: '2',
            nivelAneg: '3',
            nivelBneg: '2',
            nivelOneg: '1',
            nivelABneg: '2',
            dataAtualizacao: firebase.firestore.FieldValue.serverTimestamp()
        },
        coordinates: new firebase.firestore.GeoPoint(-23.55777, -46.668824)
    });
}*/