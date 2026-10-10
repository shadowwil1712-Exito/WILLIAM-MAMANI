alert("Bienvenido a la página");

let formulario = document.getElementById("miFormContacto");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let provincia = document.getElementById("Provincia");
let carrera = document.getElementById("Carrera");
let terminos = document.getElementById("terminos");
let error = document.getElementById("mensajeResultado");

function enviarformulario() {
        
    let radioEstudiante = document.querySelector('input[name="tipo"]');
    let tipoSeleccionado = document.querySelector('input[name="tipo"]:checked');

    if (!tipoSeleccionado) {
        radioEstudiante.setCustomValidity("Selecciona una opción (Estudiante o Apoderado)");
    } else {
        radioEstudiante.setCustomValidity("");
    }

    if (nombre.value.trim() === "") {
        nombre.setCustomValidity("Ingresa tu nombre");
    } else {
        nombre.setCustomValidity("");
    }

    if (apellido.value.trim() === "") {
        apellido.setCustomValidity("Ingresa tu apellido");
    } else {
        apellido.setCustomValidity("");
    }

    if (edad.value === "") {
        edad.setCustomValidity("Ingresa tu edad");
    } else {
        edad.setCustomValidity("");
    }

    if (correo.value.trim() === "") {
        correo.setCustomValidity("Ingresa tu correo");
    } else {
        correo.setCustomValidity("");
    }

    if (telefono.value.trim() === "") {
        telefono.setCustomValidity("Ingresa tu teléfono");
    } else {
        telefono.setCustomValidity("");
    }

    if (provincia.value === "") {
        provincia.setCustomValidity("Selecciona tu Provincia");
    } else {
        provincia.setCustomValidity("");
    }

    if (carrera.value === "") {
        carrera.setCustomValidity("Selecciona una Carrera");
    } else {
        carrera.setCustomValidity("");
    }

    if (!terminos.checked) {
        terminos.setCustomValidity("Debes aceptar los términos");
    } else {
        terminos.setCustomValidity("");
    }

    if (!formulario.checkValidity()) {
        error.innerHTML = "Por favor, completa los campos marcados.";
        error.style.color = "red";
        
        formulario.reportValidity(); 
        return false; 
    }

    
    error.innerHTML = "¡Formulario llenado con éxito!";
    error.style.color = "blue";
    return true; 
   
}
