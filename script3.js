const boton = document.getElementById("aniadir");
const lista = document.getElementById("listaTareas");
const entradaTexto = document.getElementById("texto");

// --- 1. FUNCIÓN MAESTRA (La que hace el trabajo) ---
function procesarTarea() {
    const contenido = entradaTexto.value;

    // Validación: que no esté vacío
    if (contenido.trim() === "") {
        alert("Por favor, escribe algo en el textarea");
        return; 
    }

    // Creación de elementos
    const nuevoLi = document.createElement("li");
    const parrafo = document.createElement("p");
    parrafo.textContent = contenido; 

    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Eliminar";

    // Construcción del nodo
    nuevoLi.appendChild(parrafo);
    nuevoLi.appendChild(nuevoBoton);
    lista.appendChild(nuevoLi);

    // Limpieza del campo
    entradaTexto.value = ""; 

    // Evento para el log (clic en la tarea)
    nuevoLi.addEventListener("click", function() {
        console.log("Tarea: " + parrafo.textContent);
    });

    // Evento para eliminar (clic en el botón de borrar)
    nuevoBoton.addEventListener("click", function(e) {
        e.stopPropagation();
        nuevoLi.remove();
        console.log("Nodo eliminado");
    });
}

// --- 2. LOS "ESCUCHADORES" DE EVENTOS ---

// Escuchar el clic en el botón
boton.addEventListener("click", procesarTarea);

// Escuchar la tecla Enter en el input/textarea
entradaTexto.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Evita el salto de línea o recarga
        procesarTarea();    // Ejecuta la función maestra
    }
});