function fnLimparCampos() {
    document.getElementById("form-login").reset()
}

function fnFazerLogin() {

}

let btn_login = document.getElementById("btn-login")
btn_login.addEventListener("click", function () {
    console.log("oi")
    fnFazerLogin()
})

function fnFazerLogin(){
    let formDados = {
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value
    }
fetch('http://localhost:3001/login/',{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(formDados)
})
.then(resposta => resposta.status)
.then((dados) => {
    fnLimparCampos()
    if(dados == 200){
        console.log("acesso a págima ADMIN")
    }else if(dados == 401){
        console.log("usuário ou senha inválido")
    }else{
        console.log("Algum erro aconteceu, tente mais tarde!")
    }
})
.catch(erro => console.log(erro.message))
}
