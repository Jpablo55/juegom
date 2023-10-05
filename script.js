document.addEventListener("DOMContentLoaded", function(){
    //tomarDatos();
    mostrarDatos();
    mostrarVentanaJugador();
})

//variables globales 
const d = document;
let imagenes = [
    { nombre: "Rollo de canela", url: "imagenes/1 (1).png" },
    { nombre: "Pastel", url: "imagenes/1 (2).png" },
    { nombre: "Churros", url: "imagenes/1 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/1 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/1 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/1 (6).png" },
    { nombre: "Rollo de canela", url: "imagenes/1 (1).png" },
    { nombre: "Pastel", url: "imagenes/1 (2).png" },
    { nombre: "Churros", url: "imagenes/1 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/1 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/1 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/1 (6).png" }
];
let imagenes2 = [
    { nombre: "Rollo de canela", url: "imagenes/2 (1).png" },
    { nombre: "Pastel", url: "imagenes/2 (2).png" },
    { nombre: "Churros", url: "imagenes/2 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/2 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/2 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/2 (6).png" },
    { nombre: "Rollo de canela", url: "imagenes/2 (1).png" },
    { nombre: "Pastel", url: "imagenes/2 (2).png" },
    { nombre: "Churros", url: "imagenes/2 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/2 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/2 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/2 (6).png" }
]
let imagenes3 = [
    { nombre: "Rollo de canela", url: "imagenes/3 (1).png" },
    { nombre: "Pastel", url: "imagenes/3 (2).png" },
    { nombre: "Churros", url: "imagenes/3 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/3 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/3 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/3 (6).png" },
    { nombre: "Rollo de canela", url: "imagenes/3 (1).png" },
    { nombre: "Pastel", url: "imagenes/3 (2).png" },
    { nombre: "Churros", url: "imagenes/3 (3).png" },
    { nombre: "Profiteroles", url: "imagenes/3 (4).png" },
    { nombre: "Cupcakes", url: "imagenes/3 (5).png" },
    { nombre: "Brazo de reina", url: "imagenes/3 (6).png" }
]
let tablero = d.querySelector(".tablero");
let posImg = [];
let nombreImg = [];
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel")
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let botonIniciar = d.querySelector(".btn-iniciar");
let tiempoTranscurrido;
let estoyJugando = false;
let sonidoAdivinar = new Audio("sonidos/succes.mp3");
let sonidoFallar = new Audio("sonidos/failed.mp3");
let sonidoPerder = new Audio("sonidos/lose.mp3");
let sonidoSeleccionar = new Audio("sonidos/select.mp3");
let sonidoNivel = new Audio("sonidos/level_up.mp3");
let sonidoFondo = new Audio("sonidos/fondo.m4a");
let imgNivel;




botonIniciar.addEventListener("click", function () {
    mostrarNivel.textContent = nivel;
    sonidoFondo.play();
    if (estoyJugando == false && nivel == 1) {
        estoyJugando = true;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5);
    } else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5);
    } else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        agregarImg();
        tiempoDeJuego();
        imgNivel.sort(() => Math.random() - 0.5);
    }

}
)
//El jugador pierde por tiempo
function tiempoDeJuego() {
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 0) {
            sonidoPerder.play();
            sonidoFondo.pause()


            clearInterval(tiempoTranscurrido);
            alert("Game over");
            setTimeout(() => {
                location.reload();
            }, 4000)
            tomarDatos()
        }
    }, 1000);
}

//funcion agregar imagenes al tablero de juego
function agregarImg() {

    if (nivel == 1) {
        imgNivel = imagenes;

    } else if (nivel == 2) {
        imgNivel = imagenes2;
 
    } else if(nivel == 3){
        imgNivel = imagenes3;
    }
    for (let x = 0; x < imgNivel.length; x++) {
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class", "col-3")
        img.setAttribute("class", "img-fluid alto-img")
        img.setAttribute("src", "imagenes/Censored.png");
        img.setAttribute("id", x)
        img.addEventListener("click", mostrarImg)
        div.appendChild(img);
        tablero.appendChild(div);
    }
}

// Mostrar imagenes
function mostrarImg() {
    let imgID = this.getAttribute("id");
    // alert("posicion img: " + imgID);
    this.setAttribute("src", imgNivel[imgID].url);
    posImg.push(imgID);
    nombreImg.push(imgNivel[imgID].nombre)
    sonidoSeleccionar.play();
    // comparar las imagenes
    if (nombreImg.length == 2) {
        setTimeout(compararImg, 300);
    }
}
function compararImg() {
    let todasImg = d.querySelectorAll(".tablero div img")
    if (nombreImg[0] == nombreImg[1]) {
        if (posImg[0] != posImg[1]) {
            
            todasImg[posImg[0]].setAttribute("src", "imagenes/Check.png");
            todasImg[posImg[1]].setAttribute("src", "imagenes/Check.png");
            todasImg[posImg[0]].removeEventListener("click", mostrarImg);
            todasImg[posImg[1]].removeEventListener("click", mostrarImg);
            aciertos++
            mostrarAciertos.textContent = aciertos;
            sonidoAdivinar.play();
        } else {
            alert("debes escoger otra imagen");
            todasImg[posImg[0]].setAttribute("src", "imagenes/Censored.png")
            intentos++
            mostrarIntentos.textContent = intentos;
            sonidoFallar.play();
        }


    } else {
        //alert("Las imagenes no coinciden");
        todasImg[posImg[0]].setAttribute("src", "imagenes/Censored.png");
        todasImg[posImg[1]].setAttribute("src", "imagenes/Censored.png");
        intentos++
        mostrarIntentos.textContent = intentos;
        sonidoFallar.play();

    }
    nombreImg = [];
    posImg = [];
    //Si gana el jugador
    if (aciertos === 6 && nivel == 1) {
        sonidoNivel.play()
        sonidoFondo.pause()
        alert("¡Ganaste! Pasaste de nivel");
        nivel++
        mostrarNivel.textContent = nivel;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        clearInterval(tiempoTranscurrido);
        quitarImagenes();
        estoyJugando = false;

    } else if (aciertos == 6 && nivel == 2) {
        alert("¡Ganaste! Pasaste de nivel");
        nivel++
        sonidoFondo.pause()
        mostrarNivel.textContent = nivel;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        tiempo = 30;
        mostrarTiempo.textContent = tiempo;
        clearInterval(tiempoTranscurrido);
        quitarImagenes();
        
        estoyJugando = false;

    }
    else if (aciertos == 6 && nivel == 3) {
        alert("¡Ganaste! Completaste el juego");
        tomarDatos();
        location.reload();

    }

}
function quitarImagenes() {
    let todasImg = d.querySelectorAll(".tablero div");
    todasImg.forEach((img) => {
        img.remove();
    })
}
// funcion para mostrar el nombre del jugador 
function mostrarVentanaJugador(){
    let mostrarModal = document.querySelector(".modalNombre");
    let cerrarModal = document.querySelectorAll(".cerrar");
    mostrarModal.classList.add(".show");
    mostrarModal.style.display = "block";
    for(let index = 0; index < cerrarModal.length; index++)
    cerrarModal[index].addEventListener("click",function(){
        mostrarModal.classList.remove(".show");
        mostrarModal.style.display = "none";
    })
    namePlayer();
}
// funcion tomar nombre del jugador 
function namePlayer(){
    let mostrarJugador = document.querySelector(".jugador");
    let btn_registrar = document.querySelector(".btn-registrar")
  btn_registrar.addEventListener("click", function(){
    let jugadorN = document.querySelector(".nombreJ");
    mostrarJugador.textContent = jugadorN.value;
    mostrarModal.classList.remove(".show");
})
}





