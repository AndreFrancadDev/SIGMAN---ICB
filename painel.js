const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

const tbody = document.querySelector("tbody");

chamados.forEach(chamado => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${chamado.nome}</td>
        <td>${chamado.setor}</td>
        <td>${chamado.local}</td>
        <td>${chamado.tipo}</td>
        <td>${chamado.status}</td>
    `;

    tbody.appendChild(linha);

});
