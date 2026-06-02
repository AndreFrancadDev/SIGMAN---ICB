
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const chamado = {
        nome: document.getElementById("nome").value,
        setor: document.getElementById("setor").value,
        local: document.getElementById("local").value,
        contato: document.getElementById("contato").value,
        tipo: document.getElementById("tipo").value,
        descricao: document.getElementById("descricao").value,
        status: "Aberto",
        data: new Date().toLocaleString("pt-BR")
    };

    if (
        chamado.nome === "" ||
        chamado.setor === "" ||
        chamado.local === "" ||
        chamado.contato === "" ||
        chamado.tipo === "" ||
        chamado.descricao === ""
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    chamados.push(chamado);

    localStorage.setItem("chamados", JSON.stringify(chamados));

    alert("Chamado aberto com sucesso!");

    formulario.reset();
});
