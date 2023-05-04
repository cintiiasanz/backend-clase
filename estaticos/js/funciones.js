const body = document.querySelector("body");
const titulo = document.querySelector("h1");

function cambiarColor(codigo){ //codigo --> #fabada
    body.style.backgroundColor = codigo;
    titulo.style.color = "white";
    titulo.style.textShadow = "2px 2px 0 black"
    titulo.innerHTML = codigo;
}

function hexadecimal(r,g,b){
    let valores =[r,g,b];
	return `#${valores.map(n => {
		n=parseInt(n);
		return (n<16? "0":"") + n.toString(16);
	}).join("")}`;
}

fetch("https://api-lake-gamma.vercel.app/")
.then(respuesta => respuesta.json())
.then(({r,g,b} )=> {
    console.log(r,g,b)
    cambiarColor(hexadecimal(r,g,b));
});

