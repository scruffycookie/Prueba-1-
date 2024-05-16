document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var errorMessage = document.getElementById('error-message');

    // Limpiar mensaje de error previo
    errorMessage.textContent = '';

    // Verificar si todos los campos están completos
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    // Verificar si el correo electrónico es válido
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return;
    }

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }else {

        alert("Registro completo. Redirigiendo a iniciar sesión...");
    }

    // Si todas las validaciones pasan
    console.log('Registro exitoso');
    errorMessage.textContent = 'Registro exitoso';

    // Redirigir a la página de inicio de sesión después de una breve demora
    setTimeout(function() {
        window.location.href = 'Login.html';
    }, 2000); // Demora de 2 segundos para mostrar el mensaje de éxito
});
