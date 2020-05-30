function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("executar_questionario").style.display = "block";
    document.getElementById("button_informacao").style.display = "none";
    document.getElementById("img_questionario").style.display = "none";
    document.getElementById("img_questionario").style.opacity = "1";
    document.getElementById("img_questionarioo").style.display = "none";
    document.getElementById("balao_questionario").style.display = "none";
    document.getElementById("balao").style.display = "none";
}

function close_modal(){
    document.getElementById("button_informacao").style.display = "block";
    document.getElementById("img_questionario").style.display = "block";
    document.getElementById("img_questionarioo").style.display = "none";
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("balao_questionario").style.opacity = "1";
    document.getElementById("balao_questionario").style.visibility = "visible";
    document.getElementById("balao").style.display = "none";
}
    
function timer_balao () {
    setTimeout(function(){
        document.getElementById('balao').style.opacity = "1";
        document.getElementById('balao').style.visibility = "visible";
    }, 1000);
    setTimeout(function() {
        document.getElementById('balao').style.opacity = "0";
        document.getElementById('balao').style.visibility = "hidden";
    }, 4000);
}
function apresentar_balao(){
    document.getElementById("balao_questionario").style.opacity = "1";
    document.getElementById("balao_questionario").style.visibility = "visible";
}
function fechar_balao(){
    document.getElementById("balao_questionario").style.opacity = "0";
    document.getElementById("balao_questionario").style.visibility = "hidden";
}
function aparecer_texto(){
    document.getElementById('balao').style.opacity = "1";
    document.getElementById('balao').style.visibility = "visible";
}
function reset(){
    document.getElementById('balao').style.opacity = "0";
    document.getElementById('balao').style.visibility = "hidden";
}


