const container = document.querySelector(".container");

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    if (campoPesquisa == "") {
        section.innerHTML = "<p>O campo pesquisa está vazio.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e constrói o HTML dos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <div class="container">
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
            </div>`;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
