$(document).ready(function () {
      $.validator.addMethod('contrasena', function (value, element) {
            return this.optional(element) || /\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value);
        }, 'La contraseña debe contener letras minusculas, al menos una mayúscula y un número');
    
    
    $('#btn_usuario').on("click", function () {

        $('#usuarioId').validate({
            //Clases asignadas para el error y cuando son validas
            errorClass: "error-class",
            validClass: "valid-class",
            rules:
            {
                inputEmail1: { required: true, email: true, minlength: 8, maxlength: 30 },
                inputPassword1: { required: true, contrasena: true, minlength: 8, maxlength: 15 }
                   
            },
            messages:
            {
                inputEmail1: { required: 'Este campo es obligatorio', email: 'El formato es incorrecto', minlength: 'Debe contener como mínimo 8 carácteres', maxlength: 'Puede contener un máximo de 30 carácteres' },
                inputPassword1: { required: 'Este campo es obligatorio', minlength: 'Debes usar mínimo 8 carácteres', maxlength: 'Puedes usar un máximo de 15 carácteres' }
            }

        });

    });

});

