
//Validación e-mail

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Validación Contraseña

function validar_contrasena(contrasena) { 
    if (contrasena.length < 8 || /\s/.test(contrasena) || /[0-9]/.test(contrasena)==false || /[A-Z]/.test(contrasena)==false) {
        return false;
    } else { 
        return true;
    }
}

//funcion solo letras

function solo_letras(nombre_apellido) { 
    if (/\d/.test(nombre_apellido) || /\W/.test(nombre_apellido)){
        return true;
    } else { 
        return false;
    }
}
//Formulario Acceso Usuario hecha en JQuery

//Formulario de Registro

const form1 = document.getElementById('FormId');

function validacionRegistro() { 
    	var acumErrores = 0;
	
	form1.classList.remove('is-invalid');

	var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');
    var inputPasswordRep = document.getElementById('inputPasswordRep');
    var inputProvince = document.getElementById('inputProvince');
    var inputCity = document.getElementById('inputCity');
    var inputZip = document.getElementById('inputZip');
    var gridCheck = document.getElementById('gridCheck');
    var inputName = document.getElementById('inputName');
    var inputApellido = document.getElementById('inputApellido');

            //Nombre
    if (inputName.value == "") {
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Este campo es obligatorio";
        acumErrores++;
    }else if(solo_letras(inputName.value)) { 
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "No se pueden usar numeros, ni carácteres especiales";
        acumErrores++;
    }
        

            //Apellido
    
    if (inputApellido.value == "") {
        inputApellido.classList.add("is-invalid");
        document.getElementById("errorApellido").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if(solo_letras(inputApellido.value)) { 
        inputApellido.classList.add("is-invalid");
        document.getElementById("errorApellido").textContent = "No se pueden usar numeros, ni carácteres especiales";
        acumErrores++;
    };
            //Email

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El formato del e-mail es incorrecto";
		acumErrores ++;
    }
    
            //Contraseña

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_contrasena(inputPassword.value)) { 
        inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El formato del la contraseña es incorrecto";
		acumErrores ++;
    }

            //Repetición Contraseña

     if (inputPasswordRep.value == "") {
        inputPasswordRep.classList.add("is-invalid");
        document.getElementById("errorPasswordRep").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (inputPasswordRep.value !== inputPassword.value) { 
        inputPasswordRep.classList.add("is-invalid");
		document.getElementById("errorPasswordRep").textContent = "La contraseña no coincide con la original";
		acumErrores ++;
    }

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Escoge la provincia";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta indicar la ciutat";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.value.length != 5) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Formato del código posta incorrecto";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
};


form1.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

//Formulario de Contacto

const form2 = document.getElementById('contactoId');

function countChars(obj){
    var maxLength = 500;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Has excedido el límite de ' + maxLength + ' carácteres</span>';
        return true;
    }else{
        document.getElementById("charNum").innerHTML = 'Te quedan ' + charRemain + ' carácteres';
        return false;
    }
};

function Contactar() {
    var acumErrores = 0;
	
    form2.classList.remove('is-invalid');
    
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');
    
    if (nombre.value == "") {
        nombre.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "Este campo es obligatorio";
        acumErrores++;
    }else if(solo_letras(nombre.value)) { 
        nombre.classList.add("is-invalid");
        document.getElementById("errorNombre").textContent = "No se pueden usar numeros, ni carácteres especiales";
        acumErrores++;
    };

    if (apellido.value == "") {
        apellido.classList.add("is-invalid");
        document.getElementById("errorApellido1").textContent = "Este campo es obligatorio";
        acumErrores++;
    }else if(solo_letras(apellido.value)) { 
        apellido.classList.add("is-invalid");
        document.getElementById("errorApellido1").textContent = "No se pueden usar numeros, ni carácteres especiales";
        acumErrores++;
    };


    if (correo.value == "") {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreo").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(correo.value)) {
        correo.classList.add("is-invalid");
        document.getElementById("errorCorreo").textContent = "El formato del e-mail es incorrecto";
        acumErrores++;
    }

    if (mensaje.value == "") {
        mensaje.classList.add("is-invalid");
        document.getElementById("errorMensaje").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (countChars(mensaje) == true) {
        mensaje.classList.add("is-invalid");
        acumErrores++;
    }

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
};

form2.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);
