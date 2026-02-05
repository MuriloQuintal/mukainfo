// 1. Variável global para controle de IDs
let contadorMapa = 0;

function fnCarregarDados(){
    fetch('http://localhost:3001/unidades/', {method:'GET'})
    .then(response => response.json())
    .then((unidades) => {
        // Limpa o container antes de carregar (opcional, evita duplicatas)
        document.querySelector(".unidades").innerHTML = "";
        
        unidades.forEach(unidade => {
            fnMontarCardProduto(unidade);
        });
    })
    .catch(erro => console.log(erro.message))
}

function fnMontarCardProduto(unidade){
    // Incrementa o contador para criar um ID único para este mapa
    contadorMapa++;
    let idMapa = `mapa-id-${contadorMapa}`;

    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
            <div class="card h-100">
                <img src="${unidade.foto}" class="card-img-top" alt="${unidade.nome_da_loja}">
                <div class="card-body">
                    <h5 class="card-title">${unidade.nome_da_loja}</h5>
                    <p class="card-text mb-1">${unidade.telefone}</p>
                    <p class="card-text">${unidade.email}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h6 mb-0">${unidade.endereco}</span>
                        <div class="text-muted" style="font-size: 0.8rem;">
                            <p class="mb-0">Lat: ${unidade.latitude}</p>
                            <p class="mb-0">Long: ${unidade.longitude}</p>
                        </div>
                    </div>
                </div>
                <div id="${idMapa}" style="height: 200px; width: 100%;"></div>
            </div>
        </div>
    `;

    document.querySelector(".unidades").innerHTML += cartao;

    // IMPORTANTE: O mapa só pode ser renderizado APÓS o HTML estar na página
    setTimeout(() => {
        renderizarMapa(idMapa, unidade.latitude, unidade.longitude, unidade.nome_da_loja);
    }, 100);
}

function renderizarMapa(id, lat, lng, nome) {
    // Inicializa o mapa no ID específico
    const map = L.map(id).setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Adiciona o marcador da loja
    L.marker([lat, lng]).addTo(map)
        .bindPopup(nome);
}

fnCarregarDados();