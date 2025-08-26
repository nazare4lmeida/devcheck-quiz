const FORM_ID = "1FAIpQLSdGlPosYvYxYGk5IC9EV_gxQhTgjz9rXRqN5V9mMhPShU4-JA";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// Perguntas do Quiz, com as devidas categorias
const perguntas = [
    {
        categoria: "Lógica de Programação",
        pergunta: "O que é um 'algoritmo'?",
        opcoes: [
            { texto: "Uma sequência de passos para resolver um problema.", correta: true, explicacao: "Correto. Um algoritmo é um conjunto finito de instruções bem definidas e não ambíguas para resolver um problema específico ou realizar uma tarefa." },
            { texto: "Um tipo de variável em JavaScript.", correta: false, explicacao: "Incorreto. Variáveis em JavaScript são usadas para armazenar dados. A resposta correta é: uma sequência de passos para resolver um problema." },
            { texto: "Uma forma de erro de sintaxe.", correta: false, explicacao: "Incorreto. Erros de sintaxe ocorrem quando o código não segue as regras da linguagem. A resposta correta é: uma sequência de passos para resolver um problema." }
        ]
    },
    {
        categoria: "Lógica de Programação",
        pergunta: "Qual é o objetivo de um laço de repetição (`for` ou `while`)?",
        opcoes: [
            { texto: "Armazenar dados permanentemente.", correta: false, explicacao: "Incorreto. Para armazenamento permanente de dados, geralmente usamos bancos de dados ou arquivos. A resposta correta é: executar um bloco de código repetidamente." },
            { texto: "Executar um bloco de código repetidamente.", correta: true, explicacao: "Correto. Laços de repetição são estruturas de controle que permitem executar um bloco de código múltiplas vezes até que uma condição seja satisfeita." },
            { texto: "Dividir o código em várias partes.", correta: false, explicacao: "Incorreto. Para dividir o código em partes menores e reutilizáveis, usamos funções. A resposta correta é: executar um bloco de código repetidamente." }
        ]
    },
    {
        categoria: "Fundamentos de Computação",
        pergunta: "O que é a 'CPU'?",
        opcoes: [
            { texto: "A memória principal de um computador.", correta: false, explicacao: "A memória principal é a RAM, que armazena dados que estão sendo usados pelo computador. A resposta correta é: A Unidade Central de Processamento, o 'cérebro' do computador." },
            { texto: "A Unidade Central de Processamento, o 'cérebro' do computador.", correta: true, explicacao: "A CPU é responsável por executar a maioria dos cálculos e operações do sistema." },
            { texto: "Um local para guardar arquivos de texto.", correta: false, explicacao: "Incorreto. Arquivos são geralmente armazenados em dispositivos de armazenamento secundário, como HDDs ou SSDs. A resposta correta é: A Unidade Central de Processamento, o 'cérebro' do computador." }
        ]
    },
    {
        categoria: "Fundamentos de Computação",
        pergunta: "Qual a diferença entre 'software' e 'hardware'?",
        opcoes: [
            { texto: "Software é a parte física (tangível) e hardware a parte lógica.", correta: false, explicacao: "Incorreto. Hardware se refere aos componentes físicos do computador. A resposta correta é: Software é a parte lógica (programas) e hardware a parte física (componentes)." },
            { texto: "Software é a parte lógica (programas) e hardware a parte física (componentes).", correta: true, explicacao: "Correto. Software inclui todos os programas e dados que o computador executa." },
            { texto: "Não há diferença, são sinônimos.", correta: false, explicacao: "Incorreto. Software e hardware são componentes distintos de um sistema de computador. A resposta correta é: Software é a parte lógica (programas) e hardware a parte física (componentes)." }
        ]
    },
    {
        categoria: "Ferramentas de Programação",
        pergunta: "Para que serve o 'Git'?",
        opcoes: [
            { texto: "É uma linguagem de programação para criar sites.", correta: false, explicacao: "Incorreto. Git não é uma linguagem de programação, mas sim um sistema de controle de versões. A resposta correta é: uma ferramenta para controlar o histórico de versões do código." },
            { texto: "É uma ferramenta para controlar o histórico de versões do código.", correta: true, explicacao: "Correto. Git permite rastrear as mudanças feitas no código ao longo do tempo, facilitando a colaboração e a reversão de alterações." },
            { texto: "É um editor de código para desenvolvedores.", correta: false, explicacao: "Incorreto. Editores de código, como o VSCode, são usados para escrever o código. A resposta correta é: uma ferramenta para controlar o histórico de versões do código." }
        ]
    },
    {
        categoria: "Linguagem JavaScript",
        pergunta: "Qual a principal função do JavaScript em um site?",
        opcoes: [
            { texto: "Dar estilo e aparência aos elementos da página.", correta: false, explicacao: "Incorreto. Estilos são aplicados com CSS (Cascading Style Sheets). A resposta correta é: adicionar interatividade, como animações e validações de formulário." },
            { texto: "Criar a estrutura básica e o conteúdo da página.", correta: false, explicacao: "Incorreto. A estrutura e o conteúdo são definidos com HTML (HyperText Markup Language). A resposta correta é: adicionar interatividade, como animações e validações de formulário." },
            { texto: "Adicionar interatividade, como animações e validações de formulário.", correta: true, explicacao: "Correto. JavaScript é uma linguagem de script que permite tornar as páginas web dinâmicas e interativas." }
        ]
    },
    {
        categoria: "Linguagem JavaScript",
        pergunta: "O que é uma 'variável' em programação?",
        opcoes: [
            { texto: "Um tipo de erro de programação.", correta: false, explicacao: "Incorreto. Erros de programação são problemas que impedem o código de funcionar corretamente. A resposta correta é: Espaços nomeados na memória do computador que armazenam valores." },
            { texto: "Espaços nomeados na memória do computador que armazenam valores.", correta: true, explicacao: "Correto. Variáveis são usadas para guardar valores que podem ser usados e modificados durante a execução do programa." },
            { texto: "Um comando para dividir o código em várias funções.", correta: false, explicacao: "Incorreto. Funções são blocos de código reutilizáveis. A resposta correta é: Espaços nomeados na memória do computador que armazenam valores." }
        ]
    },
    {
        categoria: "Linguagem JavaScript",
        pergunta: "Em JavaScript, o que faz a função `document.getElementById()`?",
        opcoes: [
            { texto: "Cria um novo elemento HTML.", correta: false, explicacao: "Incorreto. Para criar novos elementos, usamos métodos como `document.createElement()`. A resposta correta é: seleciona um elemento HTML pelo seu ID único." },
            { texto: "Busca um elemento HTML no documento pelo seu nome.", correta: false, explicacao: "Incorreto. Elementos podem ter atributos 'name', mas `getElementById` busca por 'id'. A resposta correta é: seleciona um elemento HTML pelo seu ID único." },
            { texto: "Seleciona um elemento HTML pelo seu ID único.", correta: true, explicacao: "Correto. Cada elemento HTML pode ter um ID único que permite acessá-lo diretamente via JavaScript." }
        ]
    },
    {
        categoria: "Linguagem JavaScript",
        pergunta: "Qual a diferença entre `let` e `const`?",
        opcoes: [
            { texto: "`let` é para variáveis que podem mudar de valor e `const` para valores fixos.", correta: true, explicacao: "Correto. `let` permite a reatribuição de valor, enquanto `const` cria uma referência constante a um valor." },
            { texto: "`let` é para números e `const` para textos.", correta: false, explicacao: "Incorreto. Tanto `let` quanto `const` podem ser usados para diferentes tipos de dados. A resposta correta é: `let` é para variáveis que podem mudar de valor e `const` para valores fixos." },
            { texto: "Não há diferença funcional entre eles.", correta: false, explicacao: "Incorreto. `let` e `const` têm diferenças importantes em relação à reatribuição e escopo. A resposta correta é: `let` é para variáveis que podem mudar de valor e `const` para valores fixos." }
        ]
    },
    {
        categoria: "Linguagem JavaScript",
        pergunta: "O que é uma 'promessa' (`Promise`) em JavaScript?",
        opcoes: [
            { texto: "É uma forma de lidar com operações síncronas.", correta: false, explicacao: "Incorreto. Promessas são usadas para lidar com operações assíncronas. A resposta correta é: um objeto que representa a conclusão ou a falha de uma operação assíncrona." },
            { texto: "É um erro que pode acontecer durante a execução do código.", correta: false, explicacao: "Incorreto. Promessas são usadas para representar o resultado (sucesso ou falha) de uma operação assíncrona. A resposta correta é: um objeto que representa a conclusão ou a falha de uma operação assíncrona." },
            { texto: "Um objeto que representa a conclusão ou a falha de uma operação assíncrona.", correta: true, explicacao: "Correto. Uma Promessa pode estar em um dos três estados: pendente, resolvida (com um valor) ou rejeitada (com um motivo)." }
        ]
    }
];

const homepageSection = document.getElementById("homepage");
const iniciarQuizBtn = document.getElementById("iniciar-quiz");
const cadastroSection = document.getElementById("cadastro");
const cadastroForm = document.getElementById("cadastro-form");
const quizSection = document.getElementById("quiz");
const questoesContainer = document.getElementById("questoes-container");
const proximaQuestaoBtn = document.getElementById("proxima-questao");
const resultadoSection = document.getElementById("resultado");
const nivelResultadoFinal = document.getElementById("nivel-resultado-final");
const analiseFinal = document.getElementById("analise-final");
const voltarHomepageBtn = document.getElementById("voltar-homepage");

let pontuacao = 0;
let indiceQuestaoAtual = 0;
let nomeUsuario = "";
let emailUsuario = "";
let respostasUsuario = [];
let quizConcluido = sessionStorage.getItem("quizConcluido") === "true";
let resultadoQuiz = JSON.parse(sessionStorage.getItem("resultadoQuiz")) || null;

// Função para mostrar uma seção e esconder as outras
function mostrarSeccao(seccao) {
    document
        .querySelectorAll(".quiz-section")
        .forEach((sec) => sec.classList.remove("active"));
    document.getElementById(seccao).classList.add("active");
}

// Exibir o resultado na homepage se o quiz já foi concluído
if (quizConcluido && resultadoQuiz) {
    homepageSection.innerHTML = `
        <h1>DevCheck - Nível Dev</h1>
        <p>Você já completou o quiz!</p>
        <div id="nivel-resultado-homepage"><strong>Seu Nível:</strong> ${resultadoQuiz.nivel}</div>
        <p id="pontuacao-final-homepage">Você acertou ${resultadoQuiz.pontuacao} de ${perguntas.length} perguntas.</p>
        <button id="ver-feedback-btn">Ver seu Desempenho</button>
    `;
    const verFeedbackBtn = document.getElementById("ver-feedback-btn");
    verFeedbackBtn.addEventListener("click", () => {
        exibirResultado(resultadoQuiz);
    });
    mostrarSeccao("homepage");
} else {
    mostrarSeccao("homepage");
}

// Evento para ir da homepage para o cadastro
iniciarQuizBtn.addEventListener("click", () => {
    mostrarSeccao("cadastro");
});

// Evento de envio do formulário de cadastro
cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nomeUsuario = document.getElementById("nome").value;
    emailUsuario = document.getElementById("email").value;
    mostrarSeccao("quiz");
    exibirQuestao();
});

// Função para exibir uma questão específica
function exibirQuestao() {
    const questao = perguntas[indiceQuestaoAtual];
    questoesContainer.innerHTML = `
        <div class="questao">
            <h3>${indiceQuestaoAtual + 1}. ${questao.pergunta}</h3>
            <div class="opcoes">
                ${questao.opcoes
                    .map(
                        (opcao, index) => `
                    <label>
                        <input type="radio" name="opcao" value="${opcao.texto}" data-correta="${opcao.correta}">
                        <span>${opcao.texto}</span>
                    </label>
                `
                    )
                    .join("")}
            </div>
        </div>
        <div id="feedback-questao"></div>
    `;

    document.querySelectorAll('input[name="opcao"]').forEach((input) => {
        input.addEventListener(
            "click",
            () => {
                handleResposta(input);
            },
            { once: true }
        );
    });
}

// Função para tratar a resposta do usuário
function handleResposta(inputSelecionado) {
    const opcaoSelecionada = inputSelecionado.value;
    const questao = perguntas[indiceQuestaoAtual];
    const opcao = questao.opcoes.find((o) => o.texto === opcaoSelecionada);
    const feedbackQuestaoDiv = document.getElementById("feedback-questao");

    const respostaCorreta = opcao.correta;
    if (respostaCorreta) {
        pontuacao++;
    }

    respostasUsuario.push({
        pergunta: questao.pergunta,
        categoria: questao.categoria,
        correta: respostaCorreta,
        explicacao: opcao.explicacao,
    });

    feedbackQuestaoDiv.className = `feedback-questao ${
        respostaCorreta ? "correta" : "incorreta"
    }`;
    feedbackQuestaoDiv.innerHTML = `
        <p><strong>Resposta ${
            respostaCorreta ? "Correta!" : "Incorreta."
        }</strong></p>
        <p>${opcao.explicacao}</p>
    `;

    // Const para aplicar a classe de cor na opção selecionada
    const labelSelecionada = inputSelecionado.parentElement;
    labelSelecionada.classList.add(respostaCorreta ? "correta" : "incorreta");

    document.querySelectorAll('input[name="opcao"]').forEach((input) => {
        input.disabled = true;
    });

    proximaQuestaoBtn.style.display = "block";
}

// Evento do botão "Próxima"
proximaQuestaoBtn.addEventListener("click", () => {
    indiceQuestaoAtual++;
    proximaQuestaoBtn.style.display = "none";

    if (indiceQuestaoAtual < perguntas.length) {
        exibirQuestao();
    } else {
        const resultadoFinal = {
            pontuacao,
            nivel: "",
            respostas: respostasUsuario,
        };
        exibirResultado(resultadoFinal);
    }
});

// Função para exibir o resultado e o feedback
function exibirResultado(resultadoData) {
    mostrarSeccao("resultado");

    let nivel = "";
    let feedbackNivel = "";
    const acertosPorCategoria = {};
    const totalPorCategoria = {};

    perguntas.forEach((p) => {
        if (!totalPorCategoria[p.categoria]) {
            totalPorCategoria[p.categoria] = 0;
            acertosPorCategoria[p.categoria] = 0;
        }
        totalPorCategoria[p.categoria]++;
    });

    resultadoData.respostas.forEach((res) => {
        if (res.correta) {
            acertosPorCategoria[res.categoria]++;
        }
    });

    if (resultadoData.pontuacao <= 4) {
        nivel = "Iniciante";
        feedbackNivel =
            "Você está no início da sua jornada! Foque em construir uma base sólida em lógica e fundamentos da computação. Isso é crucial para qualquer caminho na programação.";
    } else if (resultadoData.pontuacao >= 5 && resultadoData.pontuacao <= 7) {
        nivel = "Intermediário";
        feedbackNivel =
            "Você pode se considerar intermediário. Demonstrou familiaridade com conceitos-chave e ferramentas. O próximo passo é se aprofundar em temas mais complexos.";
    } else {
        nivel = "Expert";
        feedbackNivel =
            "Excelente! Você demonstrou um conhecimento sólido e abrangente. Está pronto para enfrentar desafios de alto nível e se destacar no mercado.";
    }

    let pontosFortes = [];
    let pontosMelhorar = [];
    for (const categoria in acertosPorCategoria) {
        const percentual =
            (acertosPorCategoria[categoria] / totalPorCategoria[categoria]) * 100;
        if (percentual > 60) {
            pontosFortes.push(categoria);
        } else {
            pontosMelhorar.push(categoria);
        }
    }

    let analiseHtml = `
        <div class="feedback-final-card">
            <p><strong>Pontuação:</strong> Você acertou ${
                resultadoData.pontuacao
            } de ${perguntas.length} perguntas.</p>
            <p>${feedbackNivel}</p>
            <p><strong>Seus pontos fortes:</strong> ${
                pontosFortes.length > 0
                    ? pontosFortes.join(", ")
                    : "Você sabe um pouco de tudo, então, não tem ainda um ponto forte."
            }</p>
            <p><strong>O que você pode fazer:</strong> ${
                pontosMelhorar.length > 0
                    ? `Reforce seus estudos em: <strong>${pontosMelhorar.join(
                        ", "
                    )}</strong>.`
                    : "Continue praticando e explorando novos conceitos para manter seu conhecimento atualizado."
            }</p>
        </div>
    `;

    nivelResultadoFinal.innerHTML = `<h3>Seu Nível: ${nivel}</h3>`;
    analiseFinal.innerHTML = analiseHtml;

    sessionStorage.setItem("quizConcluido", "true");
    sessionStorage.setItem(
        "resultadoQuiz",
        JSON.stringify({
            pontuacao: resultadoData.pontuacao,
            nivel,
            respostas: resultadoData.respostas,
        })
    );

    const params = new URLSearchParams();
    params.append("entry.1195497629", nomeUsuario);
    params.append("entry.1799645421", emailUsuario);
    params.append("entry.770493011", pontuacao);
    params.append("entry.1267423731", nivel);

    fetch(FORM_URL, {
        method: "POST",
        body: params,
        mode: "no-cors",
    })
        .then((response) => console.log("Dados enviados com sucesso!"))
        .catch((error) => console.error("Erro ao enviar dados:", error));
}

voltarHomepageBtn.addEventListener("click", () => {
    window.location.reload();
});