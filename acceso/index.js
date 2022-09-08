const form = document.getElementById("form");
const inputPassword = document.getElementById("password");
const phoneInput = document.getElementById("telefono");

const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("usuario");

const debounce = (fn, delay = 500) => {

    let timeoutId;
    return (...args) => {

            if (timeoutId) {

                clearTimeout(timeoutId)
            }
    

    else {

        timeoutId = setTimeout(() => {

            fn.apply(null, args);
        }, delay);
        
    };
    };
};

const passwordSegura = (password) => {

    // const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mayusRegex = /(?=.*[A-Z]).*/;
    const minusRegex = /(?=.*[a-z]).*/;
    const numeroRegex = /\d/;
    const caracteresEspecialesRegex = /[@$!%*?&¡(){}]/;
    const limiteRegex = /(?=.{8,})/;


    const objetoPassword = {

        mayuscula: {

            error: !mayusRegex.test(password),
            message: "La contraseña debe tener una mayúscula"
        },

        minuscula: {

            error: !minusRegex.test(password),
            message: "La contraseña debe tener una minúscula"
        },

        numeros: {

            error: !numeroRegex.test(password),
            message: "La contraseña debe tener un número"
        },

        caracterEspecial: {

            error: !caracteresEspecialesRegex.test(password),
            message: "La contraseña debe un caracter especial (@$!%*?&¡(){})"
        },


        limite: {

            error: !limiteRegex.test(password),
            message: "La contraseña debe tener al menos 8 caracteres"
        },


    }

    const contraseñaValida = Object.keys(objetoPassword).map(key => objetoPassword[key]).every(objeto => !objeto.error);
    const mensajesError = Object.keys(objetoPassword).map(key => objetoPassword[key]).filter(objeto => objeto.error).map(objetoEntero => objetoEntero.message);
    console.log(contraseñaValida);
    console.log(mensajesError);

    return {

        isValid: contraseñaValida,
        errores: mensajesError,
    }
}

const mostrarError = (input, mensaje) => {

    const formField = input.parentElement;
   
    
    input.classList.remove("success");
    formField.classList.add("error");
    
    
    
    
    const campoError = formField.querySelector("small");
    campoError.textContent = mensaje;
}

const mostrarExito = (input, mensaje) => {
    const formField = input.parentElement;
    
    formField.classList.remove("error");
    input.classList.add("success");
    
    
    
    
    

    const campoError = formField.querySelector("small");
    campoError.textContent = "";
    
}
const estaVacio = (valor) => {

    valor === "" ? false : false
}
const checkPassword = () => {


   
    let valid = false;
    const password = inputPassword.value.trim();
    const contrasenaValidaChequeo = passwordSegura(password);

    if (estaVacio(password)) {

        mostrarError(inputPassword, "La contraseña es obligatoria");
    }

    else if(!contrasenaValidaChequeo.isValid) {

        mostrarError(inputPassword, contrasenaValidaChequeo.errores.join(" / "));

        }

    else {

        mostrarExito(inputPassword);
        valid = true ;
    }

    return valid;
} 

const isPhoneValid = (phone) => {

    const phoneRegEx = /^[0-9]{10}$/;
    console.log(phone);
    return phoneRegEx.test(phone);
}


const checkPhone = () => {

    let valid = false;
    const phoneValue = phoneInput.value.trim();

    if (!isPhoneValid(phoneValue)) {

        mostrarError(phoneInput, "El teléfono debe tener 10 dígitos");
    }

    else {

        mostrarExito(phoneInput);
        valid = true;
    }

    return valid;

}
const isEmailValid = (email) => {

    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegEx.test(email);

}

const checkEmail = () => {

    let valid = false;
    const emailValue = emailInput.value.trim();

    if(estaVacio(emailValue)) {

        mostrarError(emailInput, "Este campo es requerido");
    } 

    else if(!isEmailValid(emailValue)) {
        mostrarError(emailInput, "El mail no es válido");

    }

    else {

        mostrarExito(emailInput);
        valid = true;
    }

    return valid;
}
 

const isBetween = (length, min, max) => length < min || length > max ? false : true;
const checkUsername = () => {

    let valid = false;  
    const min = 3;
    const max = 25;
    const username = usernameInput.value.trim();

    if (estaVacio(username)) {

        mostrarError(usernameInput, "Este campo es requerido")
    }

    else if (!isBetween(username.length, min, max)) {

        mostrarError(usernameInput, `El usuario debe tener entre ${min} y ${max} caracteres`)

    }

    else {

        mostrarExito(usernameInput);
        valid = true;
    }

    return valid;
}

form.addEventListener("input", debounce((e) => {

    switch (e.target.id) {

        case "usuario":
            checkUsername();
            break;

        case "email":
            checkEmail();
            break;

        case "password":
            checkPassword();
            break;

        case "telefono":
            checkPhone();
            break;

    }


}))

form.addEventListener("submit", (e) => {

e.preventDefault();
let isUsernameValid = checkUsername();
let isEmailValid = checkEmail();
let isPasswordValid = checkPassword();
let isPhoneValid = checkPhone();

console.log({isUsernameValid});
console.log({isEmailValid});
console.log({isPasswordValid});
console.log({isPhoneValid});

})