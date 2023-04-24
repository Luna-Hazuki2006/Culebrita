let ancho = 17;
let largo = 15;
let manzanas = 0;

let culebra = {
    cabeza: "", 
    cola: [], 
    direccion: "e"
}

const direcciones = [
    "n", "s", "o", "e"
]

function teclear(evento) {
    switch (evento.code) {
        case "ArrowUp":
            culebra.direccion = direcciones[0]
            break;
        case "ArrowDown":
            culebra.direccion = direcciones[1]
            break;
        case "ArrowLeft":
            culebra.direccion = direcciones[2]
            break;
        case "ArrowRight":
            culebra.direccion = direcciones[3]
            break;
        default:
            break;
    }
    juego()
}

function LlenarTabla() {
    document.addEventListener("keydown", teclear)
    const tabla = document.getElementById("tabla")
    manzanas = 0
    let manzanar = document.getElementById("manzanas")
    manzanar.innerText = "Manzanas comidas: " + manzanas
    let interno = ""
    let id = ""
    let clase = ""
    let color = false
    for (let i = 1; i <= largo; i++) {
        interno += '<tr id="' + i + '">'
        for (let j = 1; j <= ancho; j++) {
            color = !color
            id = i + '-' + j
            clase = (color) ? "verde-claro" : "verde-oscuro"
            interno += '<td class="' + clase + '" id="' + id + '"></td>'
        }
        interno += '</tr>'
    }
    tabla.innerHTML = interno
    culebra.cabeza = "8-4"
    ubicarSerpiente()
    darManzanas()
}

function random(numero) {
    return Math.floor(Math.random() * numero) + 1
}

function darManzanas() {
    do {
        let i = random(largo)
        let j = random(ancho)
        let id = i + "-" + j
        let celda = document.getElementById(id)
        if (celda.innerText == "🐍") {
            continue
        }
        celda.innerText = "🍎"
        break
    } while (true);
}

function ubicarSerpiente() {
    let id = culebra.cabeza
    let celda = document.getElementById(id)
    celda.innerText = "🐍"
}

function juego() {
    let id = culebra.cabeza.split("-")
    switch (culebra.direccion) {
        case "e":
            id[1]++
            break;
        case "o":
            id[1]--
            break
        case "n":
            id[0]--
            break
        case "s":
            id[0]++
            break
        default:
            break;
    }
    culebra.cabeza = id[0] + "-" + id[1]
    let celda = document.getElementById(culebra.cabeza)
    if (celda) {
        if (celda.innerText == "🍎") {
            darManzanas()
            manzanas++
            let manzanar = document.getElementById("manzanas")
            manzanar.innerText = "Manzanas comidas: " + manzanas
        }
        celda.innerText = "🐍"
    } else {
        alert("¡Oh no! ¡Perdiste!")
        document.removeEventListener("keydown", teclear)
    }
}

LlenarTabla()
// juego()