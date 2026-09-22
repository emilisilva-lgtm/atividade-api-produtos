async function carregarDados() {

    const url = "https://ominous-barnacle-pgjjwj4vgv5cr569-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produtos = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = "";

    produtos.forEach(produto => {

        listaProdutos.innerHTML += `
            <div class="card">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <h2>${produto.nome}</h2>

                <p>Categoria: ${produto.categoria}</p>

                <p class="preco">
                    Preço: R$ ${produto.preco}
                </p>

            </div>
        `;

    });
}

carregarDados();