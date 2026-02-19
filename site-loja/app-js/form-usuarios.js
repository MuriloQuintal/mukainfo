
function fnAlterarFoto() {
    if (foto.value != '') {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('${foto.value}')`
    } else {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }
    console.log(foto.value)
}

function fnLimparCampos() {
    document.getElementById("form-usuarios").reset()
}

function fnCadastrarUsuario() {

    let formDados = {
        usuario:document.getElementById("usuario").value,
        senha:document.getElementById("senha").value,
        nome:document.getElementById("nome").value,
        sobrenome:document.getElementById("sobrenome").value,
        cidade:document.getElementById("cidade").value,
        estado:document.getElementById("estado").value,        
        permissao:document.getElementById("permissao").value
        
    }
    
    console.dir(formDados)

    fetch('http://localhost:3001/usuarios/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(formDados)
})
.then(resposta => resposta.status)
.then((dados)=>{
    fnLimparCampos()

    console.log(dados)
})
.catch(erro => console.log(erro.message))
}
let btn_salvar = document.getElementById("btn-salvar-usuario")

btn_salvar.addEventListener("click", function () {
    fnCadastrarUsuario()
})


