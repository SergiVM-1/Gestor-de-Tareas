const btnToggle = document.getElementById("toggle-dark");
const body = document.body;
//Miramos si ya se ha guardado en la sesión el modo oscuro
const modoGuardado = localStorage.getItem("dark-mode-active");

//Si estaba guardado, aplicamos la clase de inmediato
if (modoGuardado === "true") {
    body.classList.add("dark-mode");
}

//Creamos un evento en el boton para cambiar el modo de claro a oscuro y viceversa
btnToggle.addEventListener("click", () => {
    //toggle() añade la clase si no está, y la quita si está
    body.classList.toggle("dark-mode");
    const estaEnModoOscuro = body.classList.contains("dark-mode");
    
    //Guardamos "true" o "false" en localStorage
    localStorage.setItem("dark-mode-active", estaEnModoOscuro);
});

const tamanioPantalla = document.getElementById("tamaniopantalla");

window.addEventListener("resize", function() {
    console.log("Has cambiado el tamaño de la ventana");
    
    let alto = 

    let ancho = window.innerWidth;
    console.log("El ancho actual es: " + ancho + "px");
});