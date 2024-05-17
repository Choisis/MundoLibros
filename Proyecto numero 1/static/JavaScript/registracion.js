
// Obtener referencias a los elementos del formulario
const nombreInput = document.getElementById('firstName');
const apellidoInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const birthdateInput = document.getElementById('birthdate');
const countrySelect = document.getElementById('country');
const tycInput = document.getElementById('terms');
const erroresDiv = document.getElementById('errores');
const formulario = document.getElementById('formRegistracion');

// Expresión regular para validar el correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mensajes de error
const ERROR_NOMBRE_VACIO = "El Nombre no puede estar vacío.";
const ERROR_APELLIDO_VACIO = "El Apellido no puede estar vacío.";
const ERROR_EMAIL_VACIO = "El Email no puede estar vacío.";
const ERROR_PASSWORD_VACIO = "La contraseña no puede estar vacío.";
const ERROR_BIRTHDATE_VACIO = "La fecha de Nacimiento no puede estar vacío.";
const ERROR_BIRTHDATE_INVALIDO="La fecha de Nacimiento no puede se mayor a la actual.";
const ERROR_EMAIL_INVALIDO = "Por favor, introduce un correo electrónico válido.";
const ERROR_PAIS_VACIO = "Debe seleccionar un pais de origen";
const ERROR_TYC_VACIO = "Debe aceptar los Terminos y condiciones";
const ERROR_PASSWORD_INVALIDO = "La pass debe superar los 8 caractere";

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellido =apellidoInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const birthdate = birthdateInput.value.trim();
    const country = countrySelect.value.trim();
    /*const terms = tycInput.value.trim();*/



    const errores = [];

    if (!nombre) {
        errores.push(ERROR_NOMBRE_VACIO);
    }

    if (!apellido) {
        errores.push(ERROR_APELLIDO_VACIO);
    }

    if (!email) {
        errores.push(ERROR_EMAIL_VACIO);
    } else if (!emailRegex.test(email)) {
        errores.push(ERROR_EMAIL_INVALIDO);
    }

    if (!password) {
        errores.push(ERROR_PASSWORD_VACIO);
    } else if (password.length < 8){
        
        errores.push(ERROR_PASSWORD_INVALIDO);
    }

    if (!birthdate) {
        errores.push(ERROR_BIRTHDATE_VACIO);
    }else if(Date.parse(birthdate)>Date.now()){
        errores.push(ERROR_BIRTHDATE_INVALIDO);
    }

    if (!country) {
        errores.push(ERROR_PAIS_VACIO);
    } 

    if (terms.checked) {
        terms.value = 'true';
    } else {
        terms.value = 'false';
        errores.push(ERROR_TYC_VACIO);
    }

    if (errores.length > 0) {
        erroresDiv.innerText = errores.join("\n");
    } else {
        erroresDiv.innerText = "";

        // Aquí puedes enviar los datos del formulario al servidor
        const datos = {
            nombre,
            apellido,
            email,
            password,
            birthdate,
            country,
            terms,
        };

        console.log(datos);
    }
}

// Agregar evento de submit al formulario
formulario.addEventListener('submit', validarFormulario);

