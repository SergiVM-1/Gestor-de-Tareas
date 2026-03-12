// --- 1. GESTIÓN DE SESIÓN Y BIENVENIDA ---
let nombre = localStorage.getItem("usuario");

if (nombre === null) {
    const regex = /\d/; 
    let nombreIntroducido; 

    do {
        nombreIntroducido = prompt("Bienvenido. Por favor, introduce tu nombre");
        if (nombreIntroducido === null || nombreIntroducido.trim() === "" || regex.test(nombreIntroducido)) {
            alert("Nombre no válido (no debe contener números ni estar vacío)");
        } else {
            nombre = nombreIntroducido.trim();
            break;
        }   
    } while (true);
    localStorage.setItem("usuario", nombre);
}

console.log("Sesión iniciada por: " + nombre);

const cajaSaludo = document.getElementById("bienvenida");
if (cajaSaludo) {
    cajaSaludo.textContent = `¡Hola, ${nombre}!`;
}

const botonEliminar = document.getElementById("eliminar");
if (botonEliminar) {
    botonEliminar.addEventListener("click", function() {
        localStorage.removeItem("usuario");
        location.reload();
    });
}


// --- 2. RELOJ DIGITAL ---
const timeDisplay = document.getElementById('reloj');

function actualizarReloj(){
    if (!timeDisplay) return; // Si no hay elemento reloj, no hace nada

    const realTime = new Date();
    let hora = realTime.getHours().toString().padStart(2, '0');
    let minutos = realTime.getMinutes().toString().padStart(2, '0');
    let segundos = realTime.getSeconds().toString().padStart(2, '0');

    timeDisplay.textContent = `${hora}:${minutos}:${segundos}`;
}

if (timeDisplay) {
    setInterval(actualizarReloj, 1000);
    actualizarReloj(); // Ejecución inmediata inicial
}


// --- 3. GENERADOR DE FRASES ---
const botonFrases = document.getElementById('frases');
const tituloFrase = document.getElementById('frase');

const frases = [ 
    ['Motivación','No cuentes los días, haz que los días cuenten'],
    ['Alegría','La felicidad no es una meta, es el camino'],
    ['Melancolía','La memoria es el único lugar donde podemos volver a vernos'],
    ['Gratitud','Gracias a la vida por todo lo que me da y por lo que me enseña'],
    ['Sabiduría','Saber que no sabes nada es el principio de saber algo']
];

function randonSentence(){
    if (!tituloFrase) return;
    const indice = Math.floor(Math.random() * frases.length);
    const seleccionada = frases[indice];
    tituloFrase.textContent = `Categoria: ${seleccionada[0]}. ${seleccionada[1]}`;
}

if (botonFrases) {
    botonFrases.addEventListener('click', randonSentence);
}


// --- 4. MODO OSCURO (LOCALSTORAGE) ---
const btnToggle = document.getElementById("toggle-dark");
const modoGuardado = localStorage.getItem("dark-mode-active");

if (modoGuardado === "true") {
    document.body.classList.add("dark-mode");
}

if (btnToggle) {
    btnToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const estaEnModoOscuro = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode-active", estaEnModoOscuro);
    });
}


// --- 5. TAMAÑO DE PANTALLA ---
const displayTamanio = document.getElementById("tamanioPantalla") || document.getElementById("tamaniopantalla");

function mostrarTamanio() {
    let alto = window.innerHeight;
    let ancho = window.innerWidth;
    if (displayTamanio) {
        displayTamanio.textContent = `Tamaño: ${ancho}px x ${alto}px`;
    }
}

window.addEventListener("resize", mostrarTamanio);
mostrarTamanio(); // Carga inicial


// --- 6. GESTOR DE TAREAS (NODOS DINÁMICOS) ---
const botonAniadir = document.getElementById("aniadir");
const listaTareas = document.getElementById("listaTareas");
const entradaTexto = document.getElementById("texto");

function procesarTarea() {
    const contenido = entradaTexto.value;

    if (contenido.trim() === "") {
        alert("Por favor, escribe algo en el textarea");
        return; 
    }

    const nuevoLi = document.createElement("li");
    const parrafo = document.createElement("p");
    parrafo.textContent = contenido; 

    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Eliminar";

    nuevoLi.appendChild(parrafo);
    nuevoLi.appendChild(nuevoBoton);
    listaTareas.appendChild(nuevoLi);

    entradaTexto.value = ""; 

    nuevoLi.addEventListener("click", () => {
        console.log("Tarea seleccionada: " + parrafo.textContent);
    });

    nuevoBoton.addEventListener("click", (e) => {
        e.stopPropagation();
        nuevoLi.remove();
        console.log("Nodo eliminado");
    });
}

if (botonAniadir && entradaTexto) {
    botonAniadir.addEventListener("click", procesarTarea);
    entradaTexto.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            procesarTarea();
        }
    });
}