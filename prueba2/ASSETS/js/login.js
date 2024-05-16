// login.js

// Función para redirigir a prueba.html cuando se hace clic en el botón de inicio de sesión
function redirectToPrueba() {
    // Obtener los valores de los campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si los campos no están vacíos
    if (username.trim() !== "" && password.trim() !== "") {
        // Redirigir a prueba.html
        window.location.href = "/HTML/prueba.html";
    } else {
        // Mostrar mensaje de error si los campos están vacíos
        alert("Por favor, completa todos los campos.");
    }
}
