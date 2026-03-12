const boton = document.getElementById("aniadir");
const lista = document.getElementById("listaTareas");
const entradaTexto = document.getElementById("texto"); // Cambié el nombre para mayor claridad

boton.addEventListener("click", function() {
    // 1. CAPTURAR EL VALOR: Leemos lo que hay escrito en el textarea en este momento
    const contenido = entradaTexto.value;

    // Validación opcional: para que no añada tareas vacías
    if (contenido.trim() === "") {
        alert("Por favor, escribe algo en el textarea");
        return; // Sale de la función y no crea el li
    }

    const nuevoLi = document.createElement("li");
    const parrafo = document.createElement("p");
    
    // 2. ASIGNAR EL VALOR: Usamos el contenido que capturamos arriba
    parrafo.textContent = contenido; 

    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Eliminar";

    nuevoLi.appendChild(parrafo);
    nuevoLi.appendChild(nuevoBoton);
    lista.appendChild(nuevoLi);

    // 3. LIMPIAR EL TEXTAREA (Opcional pero recomendado)
    entradaTexto.value = ""; 

    // Eventos de log y borrado (esto ya lo tenías perfecto)
    nuevoLi.addEventListener("click", function() {
        console.log("Tarea: " + parrafo.textContent);
    });

    nuevoBoton.addEventListener("click", function(e) {
        e.stopPropagation();
        nuevoLi.remove();
        console.log("Nodo eliminado");
    });
});