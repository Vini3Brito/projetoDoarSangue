function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("executar_questionario").style.display = "block";
    document.getElementById("button_informacao").style.display = "none";
    document.getElementById("img_questionario").style.display = "none";
    document.getElementById("img_questionarioo").style.display = "none";
    document.getElementById("balao_questionario").style.display = "none";
    document.getElementById("balao").style.display = "none";
    
}
function close_modal(){
    document.getElementById("button_informacao").style.display = "block";
    document.getElementById("img_questionario").style.display = "block";
    document.getElementById("img_questionarioo").style.display = "block";
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("balao").style.display = "none";
}
    
function timer_balao () {
    setTimeout(function() {
        document.getElementById('balao').style.display = "none";;
        }, 4000);
      }
function apresentar_balao(){
    document.getElementById("balao_questionario").style.display = "block";
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


