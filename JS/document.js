function verificarInicioSesion() {
    
    var nombreUsuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;

    
    
    if (nombreUsuario === "a.clemente" && contraseña === "123456789") {
      alert("Inicio de sesión exitoso"); 
    

    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  }
  

  document.getElementById("btnIniciarSesion").addEventListener("click", verificarInicioSesion);
  