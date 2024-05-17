function redirectToPrueba() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username.trim() !== "" && password.trim() !== "") {

        window.location.href = "/HTML/prueba.html";
    } else {

        alert("Por favor, completa todos los campos.");
    }
}
