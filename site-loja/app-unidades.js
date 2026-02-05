function fnCarregarDados(){
    fetch('http://localhost:3001/unidades/',{method:'GET'})
    .then(response => response.json())
    .then((unidades)=>{
        unidades.forEach(unidade => {
            fnMontarCardProduto(unidade)
        });
    })
    .catch(erro => console.log(erro.message))
}

function fnMontarCardProduto(unidade){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                    <img src="${unidade.foto}"
                        class="card-img-top" alt="${unidade.nome_da_loja}">
                    <div class="card-body">
                        <h5 class="card-title">${unidade.nome_da_loja}</h5>
                        <p class="card-text">${unidade.telefone}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">R$ ${unidade.endereco}</span>
                            <div>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <small class="text-muted">(${unidade.telefone})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".unidades").innerHTML += cartao
}
 fnCarregarDados()