//Primero tenemos que capturar el botón y la lista del html
const boton = document.getElementById("aniadir");
const lista = document.getElementById("listaTareas");
//Creamos el evento para crear el nuevo elemento de la lista
boton.addEventListener("click", function() {
    //Básicamente asignamos a cada variable el elemento que debe crear dentro del html
    const nuevoLi = document.createElement("li");
    const parrafo = document.createElement("p");
    //Con el textContent le indicamos que mensaje inculira al ser creado
    parrafo.textContent = "Nueva tarea";
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Eliminar";
    //Aqui decimos que parrafo y boton seran creados como hijos del li ne orden  
    nuevoLi.appendChild(parrafo);
    nuevoLi.appendChild(nuevoBoton);
    //Al elemento ul que es listatareas se le crea de hijo li que tiene el resto de elementos dentro.
    lista.appendChild(nuevoLi);
    //Creamos un evento de click en el li que nos de la información de la tarea, es decir p
    //EL click solo funciona en el elemento li y se mostrara al clickar sobre el parrafo de texto
    nuevoLi.addEventListener("click", function() {
        console.log("Tarea: " + parrafo.textContent);
    });
    //Creamos un evento de click en el boton de eliminar del li, lo que hace que se detenga la propagación, y se elimine este nodo
    //El stopPropagation hace que no salte el mensaje del listener de nuevoLi aún habiendo eliminado la tarea
    nuevoBoton.addEventListener("click", function(e) {
        e.stopPropagation();
        nuevoLi.remove();
        console.log("Nodo eliminado");
    });
});

