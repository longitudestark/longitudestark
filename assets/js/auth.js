// Inicializa o seletor de países (intl-tel-input)
const phoneInput = document.querySelector("#signupTel");
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "br", // Bandeira do Brasil fixa
    separateDialCode: true, // Deixa o +55 separado do número
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Aplica a máscara (19) 99999-9999 conforme o usuário digita
$(document).ready(function () {
    $('#signupTel').mask('(00) 00000-0000');
});

// 1. Configurações de Conexão (Mantendo as suas)
const SUPABASE_URL = 'https://vqmpgnmqeevvkjtyildc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_UsmSqz-XY1yaVREmBzQ78A_TMwZ38T5';

const meuSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Variáveis de controle
const form = document.getElementById('signupForm');
let dadosTemporarios = {}; // Guarda os dados enquanto o usuário confirma
const modalElemento = document.getElementById('confirmModal');
const modalBootstrap = new bootstrap.Modal(modalElemento);

// 3. EVENTO 1: Quando clica no botão do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio imediato

    // Coleta os dados para validação visual
    dadosTemporarios = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        tel: `+${iti.getSelectedCountryData().dialCode} ${document.getElementById('signupTel').value}`,
        cidade: document.getElementById('signupCity').value,
        interesse: document.getElementById('signupInterest').value,
        modalidade: document.getElementById('signupModality').value,
        renda: document.getElementById('signupIncome').value,
        estadocivil: document.getElementById('signupStatus').value
    };

    // Monta o resumo que aparece dentro do modal
    const resumoHtml = `
        <div style="line-height: 1.8;">
            <p><strong>Nome:</strong> ${dadosTemporarios.name}</p>
            <p><strong>E-mail:</strong> ${dadosTemporarios.email}</p>
            <p><strong>Telefone:</strong> ${dadosTemporarios.tel}</p>
            <p><strong>Cidade:</strong> ${dadosTemporarios.cidade}</p>
            <p><strong>Interesse:</strong> ${dadosTemporarios.interesse}</p>
            <p><strong>Modalidade:</strong> ${dadosTemporarios.modalidade}</p>
            <p><strong>Renda:</strong> ${dadosTemporarios.renda}</p>
            <p><strong>Estado Civil:</strong> ${dadosTemporarios.estadocivil}</p>
        </div>
    `;

    document.getElementById('modalDadosBody').innerHTML = resumoHtml;

    // Abre o modal de confirmação
    modalBootstrap.show();
});

// 4. EVENTO 2: Quando clica em "Confirmar" dentro do Modal
document.getElementById('btnConfirmarFinal').addEventListener('click', async () => {
    const btn = document.getElementById('btnConfirmarFinal');

    // Feedback visual de carregamento
    const textoOriginal = btn.innerText;
    btn.innerText = "Enviando...";
    btn.disabled = true;

    try {
        // Envio definitivo para o seu Table Editor no Supabase
        const { error } = await meuSupabase
            .from('lead')
            .insert([dadosTemporarios]);

        if (error) throw error;

        // Se deu certo:
        alert("Excelente! Seus dados foram cadastrados com sucesso.");
        modalBootstrap.hide();
        form.reset(); // Limpa o formulário lá no fundo

    } catch (err) {
        alert("Ops, algo deu errado: " + err.message);
        console.error("Erro Supabase:", err);
    } finally {
        // Restaura o botão
        btn.innerText = textoOriginal;
        btn.disabled = false;
    }
});