const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const btnlogin = document.querySelector("#SignInBtn")

const login = () => {
    let user = inputUser.value
    let password = inputPassword.value

    let localUser = localStorage.getItem("user")
    let localPassword = localStorage.getItem("password")

    if(user == localUser && password == localPassword){
        localStorage.setItem("status", "true")
        window.location.href ='../../pages/home.html'
        alert("login efetuado com sucesso")
        return
    }
    alert("Usuário ou Senha Incorreta")

}

const loginAuto = () =>{
    let status = localStorage.getItem("status")

    if(status == "true"){
        window.location.href = "../../pages/home.html"
    }
}

loginAuto()

btnlogin.addEventListener("click", login)