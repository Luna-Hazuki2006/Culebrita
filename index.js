let ancho = 17;
let largo = 15;

let culebra = {
    cabeza: "", 
    cola: [], 
    direccion: "e"
}

const direcciones = [
    "n", "s", "o", "e"
]

document.addEventListener("keydown", function(evento) {
    switch (evento.code) {
        case "ArrowUp":
            alert("vas arriba")
            culebra.direccion = direcciones[0]
            break;
        case "ArrowDown":
            alert('vas abajo')
            culebra.direccion = direcciones[1]
            break;
        case "ArrowLeft":
            alert('vas a la izquierda')
            culebra.direccion = direcciones[2]
            break;
        case "ArrowRight":
            alert("vas a la derecha")
            culebra.direccion = direcciones[3]
            break;
        default:
            break;
    }
    juego()
})

function Llenar_tabla() {
    const tabla = document.getElementById("tabla")
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
    let i = random(largo)
    let j = random(ancho)
    let id = i + "-" + j
    let celda = document.getElementById(id)
    celda.innerText = "🍎"
}

function ubicarSerpiente() {
    let id = culebra.cabeza
    let celda = document.getElementById(id)
    celda.innerText = "🐍"
}

function juego() {
    let id = culebra.cabeza.split("-")
    do {
        id = culebra.cabeza.split("-")
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
            celda.innerText = "🐍"
        } else break
    } while (id[0] <= largo && id[0] >= 1 && id[1] <= ancho && id[1] >= 1);
    alert("se acabó")
}

Llenar_tabla()
// juego()