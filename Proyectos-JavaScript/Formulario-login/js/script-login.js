const loginform = document.getElementById("login-form");
const successMessage = document.getElementById("success-message");

loginform.addEventListener("submit",
    function(e){
        e.preventDefault()
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(username==="Pedro"&&password==="universidadCurso21"){
            successMessage.style.display = "block";
            successMessage.textContent = "Login exitoso";
        }else{
            alert("Usuario o contraseña no valido");
        }
    }
)