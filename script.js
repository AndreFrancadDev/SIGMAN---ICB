const SUPABASE_URL = "https://acuooxhmhjqgdkkkweao.supabase.co";
const SUPABASE_KEY = "sb_publishable_phzR-rs7jYvhvWoTbEYvHQ_SKof6h_z";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const formulario = document.getElementById("formChamado");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const setor = document.getElementById("setor").value.trim();
    const local = document.getElementById("local").value.trim();
    const contato = document.getElementById("contato").value.trim();
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value.trim();
    const arquivoInput = document.getElementById("arquivo");
    const arquivoSelecionado = arquivoInput.files[0];

    if (!nome || !setor || !local || !contato || !tipo || !descricao) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const chamado = {
        nome: nome,
        setor: setor,
        local: local,
        contato: contato,
        tipo: tipo,
        descricao: descricao,
        arquivo: arquivoSelecionado ? arquivoSelecionado.name : null,
        status: "Aberto"
    };

    const { error } = await supabaseClient
        .from("Chamados")
        .insert([chamado]);

    if (error) {
        console.error("Erro ao registrar chamado:", error);

        alert(
            "Não foi possível registrar sua solicitação neste momento. " +
            "Por favor, tente novamente mais tarde ou entre em contato com a Coordenação de Planejamento."
        );

        return;
    }

    alert(
        "Solicitação registrada com sucesso. " +
        "A Coordenação de Planejamento analisará a demanda e adotará as providências cabíveis."
    );

    formulario.reset();
});
