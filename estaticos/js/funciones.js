const body = document.querySelector("body");
const titulo = document.querySelector("h1");

function cambiarColor(codigo){ //codigo --> #fabada
    body.style.backgroundColor = codigo;
    titulo.style.color = "white";
    titulo.style.textShadow = "2px 2px 0 black"
    titulo.innerHTML = codigo;
}
