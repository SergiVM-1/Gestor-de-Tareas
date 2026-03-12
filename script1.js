//Capturamos el nombre y lo almacenamos en local
let nombre = localStorage.getItem("usuario");

if (nombre === null) {
   const regex = /\d/; //Es una expresión que detecta cualquien digito (0-9)
   let nombreIntroducido; 

   do {
    //Lo que escriba el usuario se va a guardar en la variable 
    nombreIntroducido = prompt("Bienvenido. Por favor, introduce tu nombre");
    //Comprobamos que el nombre sea valido
    if (nombreIntroducido === null || nombreIntroducido.trim() === "" || regex.test(nombreIntroducido)) {
        alert("Nombre no válido");
    } else {
        nombre = nombreIntroducido.trim();
        break;
    }   
   } while (true);
   //Guardamos el valor dado valido en localStorage
   localStorage.setItem("usuario", nombre);
}

console.log("Sesión iniciada por: " + nombre);
//En el elemento con id bienvenida del html se mostrará el mensaje de bienvenida con el nombre del usuario
const cajaSaludo = document.getElementById("bienvenida");
if (cajaSaludo) {
    cajaSaludo.textContent = `¡Hola, ${nombre}!`;
}
