function validateForm() {
    var email = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
  

    if (email === "" || password === "") {
      alert("Please enter both username and password.");
      return false; 
    }
  

    if (email.length < 4) {
      alert("Username must be at least 4 characters long.");
      return false; 
    }
  

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    return true;
  }