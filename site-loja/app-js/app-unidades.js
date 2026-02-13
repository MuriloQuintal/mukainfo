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
                         <p class="card-text">${unidade.email}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">${unidade.endereco}</span>
                                    <div>
                                     <p class="h6">Latitude${unidade.latitude}</p>
                                    <p class="h6">Longitude${unidade.longitude}</p>
                                    </div>
                        </div>
                    </div>
                     <div class="map">MAPA
                     </div>
                 </div>
                   
            </div>
    `
    document.querySelector(".unidades").innerHTML += cartao
}
 fnCarregarDados()