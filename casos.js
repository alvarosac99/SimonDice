function quitarPuntuacion(caso) {
    var botones = document.getElementsByClassName('puntuacion');
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = caso;
    }
}

function desactivarBotones(caso) {
    var botones = document.getElementsByClassName('boton');
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = caso;
    }
}