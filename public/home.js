

function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("executar_questionario").style.display = "block";
    document.getElementById("button_informacao").style.opacity = "0.2";
    document.getElementById("img_questionario").style.opacity = "0.2";
    document.getElementById("img_questionarioo").style.opacity = "0.2";
    document.getElementById("balao_questionario").style.opacity = "0.2";
    document.getElementById("balao").style.opacity = "0.2";
    
}
function close_modal(){
    document.getElementById("button_informacao").style.opacity = "1";
    document.getElementById("img_questionario").style.opacity = "1";
    document.getElementById("img_questionarioo").style.opacity = "1";
    document.getElementById("balao_questionario").style.opacity = "1";
    document.getElementById("balao").style.opacity = "1";
}
    
function timer_balao () {
    setTimeout(function() {
        document.getElementById('balao').style.display = "none";;
        }, 4000);
      }
function fechar_balao(){
    document.getElementById("balao_questionario").style.display = "none";
    document.getElementById("iframe").style.display = "block";
}
function aparecer_texto(){
    document.getElementById("balao").style.display = "block"
}
function reset(){
    document.getElementById("balao").style.display = "none"
}


