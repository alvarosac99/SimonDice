async function apagar(id) {

    await delay(250);
    switch (id) {
        case "verde":
            document.getElementById('verde').style.backgroundColor = "hsl(120, 100%, 25%)";
            break;
        case "rojo":
            document.getElementById('rojo').style.backgroundColor = "hsl(0, 100%, 25%)";
            break;
        case "amarillo":
            document.getElementById('amarillo').style.backgroundColor = "hsl(60, 100%, 25%)";
            break;
        case "azul":
            document.getElementById('azul').style.backgroundColor = "hsl(240, 100%, 25%)";
    }

}

const plantilla = [
    ["verde", "rojo"],
    ["amarillo", "azul"]
]

function mostrarJuego() {
    
    var resultado = document.getElementById("juego");
    resultado.innerHTML = "";

    for (let i = 0; i < plantilla.length; i++) {
        for (let j = 0; j < plantilla[i].length; j++) {
            resultado.innerHTML += '<button onclick="clic(event)" class="boton' + '" id="' + plantilla[i][j] + '"' + '</button>';
        }
        resultado.innerHTML += "<br>";
    }
    desactivarBotones(true);
}

function clic(event) {
    var id = event.target.id;
    var boton = event.target;
    switch (id) {
        case "verde":
            boton.style.backgroundColor = "hsla(120, 100%, 50%, 1)";
            break;
        case "rojo":
            boton.style.backgroundColor = "hsla(0, 100%, 50%, 1)";
            break;
        case "amarillo":
            boton.style.backgroundColor = "hsla(60, 100%, 50%, 1)";
            break;
        case "azul":
            boton.style.backgroundColor = "hsla(240, 100%, 50%, 1)";
            break;
    }
    apagar(id);
    jugar(id);
}

var maquina = [];
var jugador = [];

function IA() {
    var valor = Math.floor(Math.random() * 4) + 1;
    switch (valor) {
        case 1:
            maquina.push("verde");
            break;
        case 2:
            maquina.push("rojo");
            break;
        case 3:
            maquina.push("amarillo");
            break;
        case 4:
            maquina.push("azul");
            break;
        default:
            break;
    }
}

async function juego() {
    await delay(1000);
    IA();
    desactivarBotones(true);
    for (let i = 0; i < maquina.length; i++) {
        switch (maquina[i]) {
            case "verde":
                document.getElementById('verde').style.backgroundColor = "hsl(120, 100%, 50%)";
                break;
            case "rojo":
                document.getElementById('rojo').style.backgroundColor = "hsl(0, 100%, 50%)";
                break;
            case "amarillo":
                document.getElementById('amarillo').style.backgroundColor = "hsl(60, 100%, 50%)";
                break;
            case "azul":
                document.getElementById('azul').style.backgroundColor = "hsl(240, 100%, 50%)";
        }
        apagar(maquina[i]);
        await delay(500);
    }
    jugador = [];
    desactivarBotones(false);
}

function jugar(id) {

    switch (id) {
        case "verde":
            jugador.push("verde");
            break;
        case "rojo":
            jugador.push("rojo");
            break;
        case "amarillo":
            jugador.push("amarillo");
            break;
        case "azul":
            jugador.push("azul");
            break;
    }
    comprobar();
}

function comprobar() {
    for (let i = 0; i < jugador.length; i++) {
        if (jugador[i] != maquina[i]) {
            alert("perdiste");
            maquina = [];
        }
    }
    if (jugador.length == maquina.length) {
        juego();
        desactivarBotones(true);
    }
}

function desactivarBotones(caso) {
    var botones = document.getElementsByClassName('boton');
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = caso;
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

