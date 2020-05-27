

function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "block";}
    
function timer_balao () {
    setTimeout(function() {
        document.getElementById('balao').style.display = "none";;
        }, 4000);
      }
function fechar_balao(){
    document.getElementById("balao_questionario").style.display = "none";
}