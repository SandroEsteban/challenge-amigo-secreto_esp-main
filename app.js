// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre !== "") {
        amigos.push(nombre);
    } else {
        alert("Ingrese un valor correcto");
    }  
    console.log(amigos);
    limpiarCaja();
    actualizarListaDeAmigos();
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No existen amigos para sortear");
    } else {
        let numeroSorteo = Math.floor(Math.random()*amigos.length);
        nombreAmigoSecreto("h2", `Su amigo secreto es ${amigos[numeroSorteo]}`)
    }
    limpiarListaDeAmigos();
    frenoJuego();
    return;
}

function nombreAmigoSecreto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarListaDeAmigos() {
    let limpieza = document.getElementById("listaAmigos");
    limpieza.innerHTML = "";
}

function frenoJuego() {
    let botonReinicio = document.getElementById("reinicio")
    if (botonReinicio) {
        botonReinicio.disabled = true;
    } else {
        console.log("boton no encontrado");
    }
}

function nuevoJuego() {
    limpiarListaDeAmigos();
    nombreAmigoSecreto("h2", `Digite el nombre de sus amigos`);
    let botonReinicio = document.getElementById("reinicio")
    botonReinicio.disabled = false;
    amigos = [];
}

console.log(amigos);


