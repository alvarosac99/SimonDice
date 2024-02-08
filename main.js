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

}

function clic(event) {
    var id = event.target.id;
    var boton = event.target;
    switch (id) {
        case "verde":
            boton.style.backgroundColor = "hsla(120, 100%, 50%, 1)";
            jugar(id);
            apagar(id);
            break;
        case "rojo":
            boton.style.backgroundColor = "hsla(0, 100%, 50%, 1)";
            apagar(id);
            break;
        case "amarillo":
            boton.style.backgroundColor = "hsla(60, 100%, 50%, 1)";
            apagar(id);
            break;
        case "azul":
            boton.style.backgroundColor = "hsla(240, 100%, 50%, 1)";
            apagar(id);
            break;
    }
}

var array = [];

function IA() {
    var valor = Math.floor(Math.random() * 4) + 1;
    switch (valor) {
        case 1:
            array.push("verde");
            break;
        case 2:
            array.push("rojo");
            break;
        case 3:
            array.push("amarillo");
            break;
        case 4:
            array.push("azul");
            break;
        default:
            break;
    }
}

async function juego() {
    IA();
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
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
        apagar(array[i]);
        await delay(500);
    }
}

function jugar() {

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

