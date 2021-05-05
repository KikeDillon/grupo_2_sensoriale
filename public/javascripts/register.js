window.addEventListener ("load", function(){

	const formRegister = document.getElementById ('formRegister');
	const inputs = document.querySelectorAll ('#formRegister input');

	const expresiones = {
		usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombreyapellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos. 3 a 40 dígitos.
		password: /^.{6,18}$/, // 6 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	let bordes = document.querySelectorAll('.inputForm');

	let errorIconFN = document.getElementById('errorIconFN');
	let errorIconLN = document.getElementById('errorIconLN');
	let errorIconE = document.getElementById('errorIconE');
	let errorIconP = document.getElementById('errorIconP');
	let errorIconPC = document.getElementById('errorIconPC');
	
	let errorIconos = [errorIconFN, errorIconLN, errorIconE, errorIconP, errorIconPC];

	const inputFirstname = document.getElementById('inputFirstname');
	const inputLastname = document.getElementById('inputLastname');
	const inputEmail = document.getElementById('inputEmail');
	const inputPassword = document.getElementById('inputPassword');
	const inputPasswordConfirm = document.getElementById('inputPasswordConfirm');

	let inputsFormulario = [inputFirstname, inputLastname, inputEmail, inputPassword, inputPasswordConfirm];

	const firstnameP = document.getElementById ('firstnameP');
	const lastnameP = document.getElementById ('lastnameP');
	const emailP = document.getElementById ('emailP');
	const passwordP = document.getElementById ('passwordP');
	const confirmpasswordP = document.getElementById ('confirmpasswordP');

	// SE LE DA ESTILO A TODOS LOS BORDES DE LOS INPUTS DEL FORMULARIO

	bordes.forEach (function(borde) {
		return borde.classList.add ('borderNormal');
	})

	const validarFormulario = (e) => {
		switch (e.target.name) {
			case "firstname":
				validacionInputs(e.target.value, inputFirstname, (expresiones.nombreyapellido.test(e.target.value)), errorIconFN, firstnameP);
			break;
			case "lastname":
				validacionInputs(e.target.value, inputLastname, (expresiones.nombreyapellido.test(e.target.value)), errorIconLN, lastnameP);
			break;
			case "email":
				validacionInputs(e.target.value, inputEmail, (expresiones.correo.test(e.target.value)), errorIconE, emailP);
			break;
			case "password":
				validacionInputs(e.target.value, inputPassword, (expresiones.password.test(e.target.value)), errorIconP, passwordP);
				passwordCompare();
			break;
			case "confirmpassword":
//				validacionInputs(e.target.value, inputPasswordConfirm, (expresiones.password.test(e.target.value)), errorIconPC);
				passwordCompare();
			break;
		}	
	}

	// CAPTURO LOS ENVENTOS DE KEYIP Y BLUR DENTRO DE LOS INPUTS -> 
	// POR CADA CLICK VOY A LA FUNCIÓN VALIDAR FORMULARIO 

	inputs.forEach(input => {
		input.addEventListener ('keyup', validarFormulario);
		input.addEventListener ('blur', validarFormulario);
	});

	// CAPTURO EL EVENTO RESET Y BORRO LOS ESTILOS 

	formRegister.addEventListener ('reset', function(){

		inputsFormulario.forEach (function(inputFormulario) {
			inputFormulario.classList.remove('borderOk');
			inputFormulario.classList.remove('borderError');
			inputFormulario.classList.add('borderNormal');
		})
		errorIconos.forEach (function(errorIcono){
			errorIcono.style.opacity = "0";
		})
	})

	// CAPTURO EL EVENTO SUBMIT Y LO EVITO 

	formRegister.addEventListener ('submit', function (e){
		e.preventDefault();

	})

	// FUNCION QUE VALIDA LOS CAMPOS //

	let validacionInputs = function (target, inputClass, expresionTest, errorIcon, p){
		if ((target) == ""){
			inputClass.classList.remove('borderOk');
			inputClass.classList.remove('borderError');
			inputClass.classList.add('borderNormal');
			errorIcon.style.opacity = "0";
			p.style.opacity = "0";
		}else if (expresionTest){
			inputClass.classList.remove('borderNormal');
			inputClass.classList.remove('borderError');
			inputClass.classList.add('borderOk');
			errorIcon.style.opacity = "1";
			errorIcon.style.color = "rgb(42, 219, 42)";
			errorIcon.classList.remove('fa-times-circle');
			errorIcon.classList.add('fa-check-circle');
			p.style.opacity = "0";
		}else{
			inputClass.classList.remove('borderOk');
			inputClass.classList.remove('borderNormal');
			inputClass.classList.add('borderError');
			errorIcon.style.opacity = "1";
			errorIcon.style.color = "rgb(255, 99,71)";
			errorIcon.classList.remove('fa-check-circle');
			errorIcon.classList.add('fa-times-circle');
			p.style.opacity = "1";
		}	
	}

	// COMPARACIÓN DE CONTRASEÑAS, SOLO CUANDO LA CONFIRMACIÓN SE ESTÁ COMPLETANDO

	let passwordCompare = function () {
		if (inputPasswordConfirm.value !== ""){ 
			if (inputPassword.value !== inputPasswordConfirm.value){
				inputPasswordConfirm.classList.remove('borderOk');
				inputPasswordConfirm.classList.remove('borderNormal');
				inputPasswordConfirm.classList.add('borderError');
				errorIconPC.style.opacity = "1";
				errorIconPC.style.color = "rgb(255, 99,71)";
				errorIconPC.classList.remove('fa-check-circle');
				errorIconPC.classList.add('fa-times-circle');
				confirmpasswordP.style.opacity = "1";
			}else { 
				inputPasswordConfirm.classList.remove('borderNormal');
				inputPasswordConfirm.classList.remove('borderError');
				inputPasswordConfirm.classList.add('borderOk');
				errorIconPC.style.opacity = "1";
				errorIconPC.style.color = "rgb(42, 219, 42)";
				errorIconPC.classList.remove('fa-times-circle');
				errorIconPC.classList.add('fa-check-circle');
				confirmpasswordP.style.opacity = "0";
			} 
		} else {
			inputPasswordConfirm.classList.remove('borderOk');
			inputPasswordConfirm.classList.remove('borderError');
			inputPasswordConfirm.classList.add('borderNormal');
			errorIconPC.style.opacity = "0";
			confirmpasswordP.style.opacity = "0";
		}
	}

})



