const SUPABASE_URL = "https://acuooxhmhjqgdkkkweao.supabase.co";
const SUPABASE_KEY = "sb_publishable_phzR-rs7jYvhvWoTbEYvHQ_SKof6h_z";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const formulario = document.getElementById("formChamado");

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const setor = document.getElementById("setor").value;
    const local = document.getElementById("local").value;
    const contato = document.getElementById("contato").value;
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;

    if (
        !nome ||
        !setor ||
        !local ||
        !contato ||
        !tipo ||
        !descricao
    ) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const chamado = {
        nome,
        setor,
        local,
        contato,
        tipo,
        descricao,
        status: "Aberto"
    };

    const { error } = await supabaseClient
        .from("chamados")
        .insert([chamado]);

    if (error) {
        console.error(error);

        alert(
            "Erro ao registrar chamado. Verifique a configuração do Supabase."
        );

        return;
    }

    alert("Chamado aberto com sucesso!");

    formulario.reset();

});
