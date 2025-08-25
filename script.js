const FORM_ID = "1FAIpQLSdGlPosYvYxYGk5IC9EV_gxQhTgjz9rXRqN5V9mMhPShU4-JA";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// Perguntas do Quiz, agora com categorias
const perguntas = [
  {
    categoria: "Lógica de Programação",
    pergunta: "O que é um 'algoritmo'?",
    opcoes: [
      {
        texto: "Uma sequência de passos para resolver um problema.",
        correta: true,
        explicacao:
          "Um algoritmo é um conjunto finito de instruções bem definidas e não ambíguas para resolver um problema específico ou realizar uma tarefa.",
      },
      {
        texto: "Um tipo de variável em JavaScript.",
        correta: false,
        explicacao:
          "Variáveis em JavaScript são usadas para armazenar dados, não para definir sequências de passos.",
      },
      {
        texto: "Uma forma de erro de sintaxe.",
        correta: false,
        explicacao:
          "Erros de sintaxe ocorrem quando o código não segue as regras da linguagem.",
      },
    ],
  },
  {
    categoria: "Lógica de Programação",
    pergunta: "Qual é o objetivo de um laço de repetição (`for` ou `while`)?",
    opcoes: [
      {
        texto: "Armazenar dados permanentemente.",
        correta: false,
        explicacao:
          "Para armazenamento permanente de dados, geralmente usamos bancos de dados ou arquivos.",
      },
      {
        texto: "Executar um bloco de código repetidamente.",
        correta: true,
        explicacao:
          "Laços de repetição são estruturas de controle que permitem executar um bloco de código múltiplas vezes até que uma condição seja satisfeita.",
      },
      {
        texto: "Dividir o código em várias partes.",
        correta: false,
        explicacao:
          "Para dividir o código em partes menores e reutilizáveis, usamos funções.",
      },
    ],
  },
  {
    categoria: "Fundamentos de Computação",
    pergunta: "O que é a 'CPU'?",
    opcoes: [
      {
        texto: "A memória principal de um computador.",
        correta: false,
        explicacao:
          "A memória principal (RAM) armazena dados que estão sendo usados pelo computador.",
      },
      {
        texto: "A Unidade Central de Processamento, o 'cérebro' do computador.",
        correta: true,
        explicacao:
          "A CPU é responsável por executar a maioria dos cálculos e operações do sistema.",
      },
      {
        texto: "Um local para guardar arquivos de texto.",
        correta: false,
        explicacao:
          "Arquivos são geralmente armazenados em dispositivos de armazenamento secundário, como HDDs ou SSDs.",
      },
    ],
  },
  {
    categoria: "Fundamentos de Computação",
    pergunta: "Qual a diferença entre 'software' e 'hardware'?",
    opcoes: [
      {
        texto:
          "Software é a parte física (tangível) e hardware a parte lógica.",
        correta: false,
        explicacao: "Hardware se refere aos componentes físicos do computador.",
      },
      {
        texto:
          "Software é a parte lógica (programas) e hardware a parte física (componentes).",
        correta: true,
        explicacao:
          "Software inclui todos os programas e dados que o computador executa.",
      },
      {
        texto: "Não há diferença, são sinônimos.",
        correta: false,
        explicacao:
          "Software e hardware são componentes distintos de um sistema de computador.",
      },
    ],
  },
  {
    categoria: "Ferramentas de Programação",
    pergunta: "Para que serve o 'Git'?",
    opcoes: [
      {
        texto: "É uma linguagem de programação para criar sites.",
        correta: false,
        explicacao:
          "Git não é uma linguagem de programação, mas sim um sistema de controle de versões.",
      },
      {
        texto:
          "É uma ferramenta para controlar o histórico de versões do código.",
        correta: true,
        explicacao:
          "Git permite rastrear as mudanças feitas no código ao longo do tempo, facilitando a colaboração e a reversão de alterações.",
      },
      {
        texto: "É um editor de código para desenvolvedores.",
        correta: false,
        explicacao:
          "Editores de código, como VSCode, são usados para escrever o código.",
      },
    ],
  },
  {
    categoria: "Linguagem JavaScript",
    pergunta: "Qual a principal função do JavaScript em um site?",
    opcoes: [
      {
        texto: "Dar estilo e aparência aos elementos da página.",
        correta: false,
        explicacao: "Estilos são aplicados com CSS (Cascading Style Sheets).",
      },
      {
        texto: "Criar a estrutura básica e o conteúdo da página.",
        correta: false,
        explicacao:
          "A estrutura e o conteúdo são definidos com HTML (HyperText Markup Language).",
      },
      {
        texto:
          "Adicionar interatividade, como animações e validações de formulário.",
        correta: true,
        explicacao:
          "JavaScript é uma linguagem de script que permite tornar as páginas web dinâmicas e interativas.",
      },
    ],
  },
  {
    categoria: "Linguagem JavaScript",
    pergunta: "O que é uma 'variável' em programação?",
    opcoes: [
      {
        texto: "Um tipo de erro de programação.",
        correta: false,
        explicacao:
          "Erros de programação são problemas que impedem o código de funcionar corretamente.",
      },
      {
        texto:
          "Um espaço na memória do computador para armazenar dados temporariamente.",
        correta: true,
        explicacao:
          "Variáveis são usadas para guardar valores que podem ser usados e modificados durante a execução do programa.",
      },
      {
        texto: "Um comando para dividir o código em várias funções.",
        correta: false,
        explicacao: "Funções são blocos de código reutilizáveis.",
      },
    ],
  },
  {
    categoria: "Linguagem JavaScript",
    pergunta: "Em JavaScript, o que faz a função `document.getElementById()`?",
    opcoes: [
      {
        texto: "Cria um novo elemento HTML.",
        correta: false,
        explicacao:
          "Para criar novos elementos, usamos métodos como `document.createElement()`.",
      },
      {
        texto: "Busca um elemento HTML no documento pelo seu nome.",
        correta: false,
        explicacao:
          "Elementos podem ter atributos 'name', mas `getElementById` busca por 'id'.",
      },
      {
        texto: "Seleciona um elemento HTML pelo seu ID único.",
        correta: true,
        explicacao:
          "Cada elemento HTML pode ter um ID único que permite acessá-lo diretamente via JavaScript.",
      },
    ],
  },
  {
    categoria: "Linguagem JavaScript",
    pergunta: "Qual a diferença entre `let` e `const`?",
    opcoes: [
      {
        texto:
          "`let` é para variáveis que podem mudar de valor e `const` para valores fixos.",
        correta: true,
        explicacao:
          "`let` permite a reatribuição de valor, enquanto `const` cria uma referência constante a um valor.",
      },
      {
        texto: "`let` é para números e `const` para textos.",
        correta: false,
        explicacao:
          "Tanto `let` quanto `const` podem ser usados para diferentes tipos de dados.",
      },
      {
        texto: "Não há diferença funcional entre eles.",
        correta: false,
        explicacao:
          "`let` e `const` têm diferenças importantes em relação à reatribuição e escopo.",
      },
    ],
  },
  {
    categoria: "Linguagem JavaScript",
    pergunta: "O que é uma 'promessa' (`Promise`) em JavaScript?",
    opcoes: [
      {
        texto: "É uma forma de lidar com operações síncronas.",
        correta: false,
        explicacao:
          "Promessas são usadas para lidar com operações assíncronas.",
      },
      {
        texto: "É um erro que pode acontecer durante a execução do código.",
        correta: false,
        explicacao:
          "Promessas são usadas para representar o resultado (sucesso ou falha) de uma operação assíncrona.",
      },
      {
        texto:
          "Um objeto que representa a conclusão ou a falha de uma operação assíncrona.",
        correta: true,
        explicacao:
          "Uma Promessa pode estar em um dos três estados: pendente, resolvida (com um valor) ou rejeitada (com um motivo).",
      },
    ],
  },
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
      "Você está no início da sua jornada! Foque em construir uma base sólida em lógica e fundamentos. Isso é crucial para qualquer caminho na programação.";
  } else if (resultadoData.pontuacao >= 5 && resultadoData.pontuacao <= 7) {
    nivel = "Intermediário";
    feedbackNivel =
      "Você tem um bom entendimento intermediário. Demonstrou familiaridade com conceitos-chave e ferramentas. O próximo passo é se aprofundar em temas mais complexos.";
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
    if (percentual > 70) {
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
                : "Nenhum ponto forte identificado."
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
