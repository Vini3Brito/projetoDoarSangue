

function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("executar_questionario").style.display = "block";
}
    
function timer_balao () {
    setTimeout(function() {
        document.getElementById('balao').style.display = "none";;
        }, 4000);
      }
function fechar_balao(){
    document.getElementById("balao_questionario").style.display = "none";
}
function aparecer_texto(){
    document.getElementById("balao").style.display = "block"
}
function reset(){
    document.getElementById("balao").style.display = "none"
}


