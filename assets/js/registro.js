const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#SignInBtn")


const cadastrarUsuario = () =>{
    let user = inputUser.value
    let password = inputPassword.value
    let confirmPassword = inputConfirmPassword.value

    if(password == confirmPassword && user.trim() !=""){
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = '../../index.html'
        alert("Cadastro finalizado com Suceso!")
        return;
    }
    alert("Falha no Cadastro!")

    }


btnRegister.addEventListener("click", cadastrarUsuario)