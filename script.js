
const groups = [
  {
    id: "peito",
    name: "Peito",
    desc: "Supinos, crucifixos e flexões",
    time: "~40 min",
    warmup: "Aqueça primeiro: 5 min de mobilidade + 2 séries leves de supino antes de começar.",
    exercises: [
      {
        name: "Supino Guilhotina com Halteres",
        tip: "Deitado no banco, segure os halteres com as mãos afastadas e desça-os em direção à parte superior do peito, mantendo os cotovelos abertos. Empurre os halteres para cima até quase estender os braços.",
        sets: "4", reps: "8–10", rest: "90 s"
      },
      {
        name: "Flexão com Déficit e Pausa de 3 Segundos",
        tip: "Faça a flexão com as mãos apoiadas em suportes elevados, permitindo maior amplitude de movimento. Desça até alongar o peitoral, mantenha a posição por 3 segundos e retorne à posição inicial.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Crucifixo inclinado com Halteres",
        tip: "Deitado no banco, abra os braços lateralmente com os cotovelos levemente flexionados. Realize apenas a metade inferior do movimento, concentrando-se no alongamento do peitoral.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Supino Inclinado com Halteres",
        tip: "Deitado em um banco inclinado, segure os halteres na altura do peito e empurre-os para cima até quase estender os braços. Trabalha principalmente a porção superior do peitoral.",
        sets: "3", reps: "12–15", rest: "60 s"
      }, 
      {
        name: "Supino 45 no smith",
        tip: "Deitado no banco inclinado a 45°, segure a barra com as mãos afastadas na largura dos ombros. Desça a barra em direção à parte superior do peito e empurre-a para cima até quase estender os braços.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
       {
        name: "Cross over ",
        tip: "De frente para a polia alta, segure os puxadores com as mãos e leve-os à frente do corpo, cruzando-os levemente. Retorne controladamente à posição inicial.",
        sets: "3", reps: "12–15", rest: "60 s"
      }
    ]
  },
  {
    id: "triceps",
    name: "Tríceps",
    desc: "Extensões e empurradas",
    time: "~25 min",
    warmup: "Aqueça primeiro: 2 séries leves de tríceps na polia.",
    exercises: [
      {
        name: "Extensão de Tríceps na Polia Alta Acima da Cabeça",
        tip: "De costas para a polia, segure a corda com as duas mãos acima da cabeça. Estenda os cotovelos para frente, afastando as mãos da cabeça, e retorne lentamente à posição inicial.",
        sets: "3", reps: "10–12", rest: "60 s"
      },
      {
        name: "Extensão de Tríceps Unilateral na Polia",
        tip: "Segure o puxador com uma das mãos e mantenha o cotovelo próximo ao corpo. Estenda o braço para baixo até contrair o tríceps. Retorne controladamente e repita com o outro braço.",
        sets: "3", reps: "10–12", rest: "60 s"
      },
      {
        name: "Tríceps na Polia com Barra V",
        tip: "Segure a barra V na polia alta, mantenha os cotovelos junto ao tronco e empurre a barra para baixo até estender os braços. Retorne lentamente sem movimentar excessivamente os cotovelos.",
        sets: "3", reps: "10–12", rest: "60 s"
      }
    ]
  },
  {
    id: "biceps",
    name: "Bíceps",
    desc: "Roscas e flexões de cotovelo",
    time: "~25 min",
    warmup: "Aqueça primeiro: 2 séries leves de rosca com halteres.",
    exercises: [
      {
        name: "Rosca Scott",
        tip: "Apoie os braços no banco Scott e segure a barra ou os halteres com as palmas das mãos voltadas para cima. Flexione os cotovelos levando o peso em direção aos ombros e retorne lentamente à posição inicial.",
        sets: "3", reps: "10–12", rest: "60 s"
      },
      {
        name: "Rosca Bayesiana na Polia",
        tip: "Posicione-se de costas para a polia baixa, segurando o puxador com uma das mãos. Mantenha o braço levemente atrás do corpo e flexione o cotovelo, levando a mão em direção ao ombro. Retorne controladamente.",
        sets: "3", reps: "10–12", rest: "60 s"
      },
      {
        name: "Rosca Martelo",
        tip: "Segure os halteres com as palmas das mãos voltadas uma para a outra. Flexione os cotovelos levando os halteres em direção aos ombros, mantendo os punhos neutros. Retorne lentamente à posição inicial.",
        sets: "3", reps: "10–12", rest: "60 s"
      }
    ]
  },
  {
    id: "ombro",
    name: "Ombros",
    desc: "Desenvolvimento e elevações",
    time: "~30 min",
    warmup: "Aqueça primeiro: 5 min de rotações de ombro com elástico.",
    exercises: [
      {
        name: "Desenvolvimento de Ombros com Halteres",
        tip: "Sentado ou em pé, segure os halteres na altura dos ombros. Empurre-os para cima até quase estender os braços. Retorne lentamente à posição inicial.",
        sets: "4", reps: "8–10", rest: "90 s"
      },
      {
        name: "Elevação Frontal na Polia",
        tip: "De frente para a polia baixa, segure o puxador com uma ou duas mãos. Eleve os braços à frente do corpo até a altura dos ombros e retorne lentamente.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Elevação Lateral na Polia",
        tip: "Posicione-se ao lado da polia baixa e segure o puxador com a mão oposta. Eleve o braço lateralmente até a altura do ombro, mantendo o cotovelo levemente flexionado. Retorne controladamente.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Crucifixo Inverso na Polia",
        tip: "Posicione-se de frente para a polia, segurando os puxadores cruzados. Abra os braços lateralmente, levando as mãos para trás até contrair a parte posterior dos ombros. Retorne lentamente à posição inicial.",
        sets: "3", reps: "12–15", rest: "60 s"
      }
    ]
  },
  {
    id: "perna",
    name: "Pernas",
    desc: "Quadríceps, posteriores, glúteos e panturrilhas",
    time: "~50 min",
    warmup: "Aqueça primeiro: 5 min de bicicleta + 2 séries leves de agachamento.",
    exercises: [
      {
        name: "Cadeira Abdutora",
        tip: "Sente-se na máquina abdutora, posicione as pernas contra os apoios e afaste os joelhos, vencendo a resistência. Retorne lentamente à posição inicial. Trabalha principalmente os glúteos, especialmente o glúteo médio.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Mesa Flexora ",
        tip: "Deite-se na máquina, posicione os tornozelos sob os apoios e flexione os joelhos, levando os calcanhares em direção aos glúteos. Retorne controladamente. Trabalha os músculos posteriores da coxa.",
        sets: "3", reps: "10–12", rest: "60 s"
      },
      {
        name: "Cadeira Extensora ",
        tip: "Sente-se na máquina e posicione os tornozelos atrás dos apoios. Estenda os joelhos até quase esticar completamente as pernas e retorne lentamente. Trabalha o quadríceps.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Agachamento no Smith ",
        tip: "Posicione a barra sobre os ombros, mantenha os pés afastados na largura dos ombros e flexione os joelhos e quadris para descer. Empurre o chão com os pés para retornar à posição inicial.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Levantamento Terra Romeno com Halteres ",
        tip: "Segure os halteres à frente das coxas. Flexione levemente os joelhos e leve o quadril para trás, descendo os pesos próximos às pernas. Retorne à posição inicial contraindo os glúteos e posteriores da coxa.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Levantamento Terra Romeno ",
        tip: "Segure a barra com as mãos afastadas na largura dos ombros. Mantenha os joelhos levemente flexionados e leve o quadril para trás, descendo a barra próxima às pernas. Retorne estendendo o quadril.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Elevação de Panturrilha em Pé",
        tip: "Posicione os ombros sob os apoios da máquina e fique na ponta dos pés, elevando os calcanhares o máximo possível. Desça lentamente até alongar as panturrilhas.",
        sets: "4", reps: "12–15", rest: "45 s"
      }
    ]
  },
  {
    id: "costas",
    name: "Costas",
    desc: "Puxadas, remadas e trapézio",
    time: "~40 min",
    warmup: "Aqueça primeiro: 5 min de remo leve + 2 séries leves de puxada.",
    exercises: [
      {
        name: "Remada Sentada com Pegada Aberta ",
        tip: "Sente-se na máquina ou polia baixa, segure a barra com as mãos afastadas e puxe em direção ao abdômen ou peito, mantendo os cotovelos abertos. Retorne lentamente. Trabalha principalmente a região média das costas.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Face Pull na Polia ",
        tip: "Na polia alta com corda, puxe em direção ao rosto, mantendo os cotovelos elevados e afastados. Retorne controladamente. Trabalha a parte posterior dos ombros e a musculatura superior das costas.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Puxada Alta na Polia ",
        tip: "Sente-se na máquina, segure a barra com as mãos afastadas e puxe em direção à parte superior do peito. Retorne lentamente, estendendo os braços. Trabalha principalmente o latíssimo do dorso.",
        sets: "3", reps: "10–12", rest: "90 s"
      },
      {
        name: "Remada Sentada na Polia ",
        tip: "Sente-se com as pernas levemente flexionadas e segure o puxador. Puxe em direção ao abdômen, mantendo as costas retas e os cotovelos próximos ao corpo. Retorne controladamente.",
        sets: "3", reps: "10–12", rest: "75 s"
      },
      {
        name: "Barra Fixa ",
        tip: "Pendure-se na barra com as palmas das mãos voltadas para frente e as mãos afastadas na largura dos ombros. Puxe o corpo até o queixo ultrapassar a barra e desça lentamente até estender os braços.",
        sets: "3", reps: "Até a falha técnica", rest: "90 s"
      },
      {
        name: "Encolhimento com Peito Apoiado ",
        tip: "Apoie o peito em um banco inclinado e segure os halteres com os braços estendidos. Eleve os ombros em direção às orelhas, contraindo o trapézio. Desça lentamente.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Crucifixo Inverso Unilateral ",
        tip: "Segure um halter ou puxador com uma das mãos e incline levemente o tronco. Abra o braço lateralmente, mantendo o cotovelo levemente flexionado. Retorne controladamente. Trabalha a parte posterior dos ombros.",
        sets: "3", reps: "12–15", rest: "60 s"
      },
      {
        name: "Pullover ",
        tip: "Deitado em um banco, segure um halter com as duas mãos acima do peito. Leve o peso para trás da cabeça, mantendo os cotovelos levemente flexionados. Retorne à posição inicial. Trabalha principalmente o latíssimo do dorso e também envolve o peitoral.",
        sets: "3", reps: "10–12", rest: "60 s"
      }
    ]
  }
];






const icons = {
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>',
  toggle: '<svg viewBox="0 0 10 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M1.500 5h7"/><path class="v" d="M5 1.500v7"/></svg>',
};

const accordion = document.getElementById("accordion");
document.getElementById("groupCount").textContent = `${groups.length} grupos musculares`;

function renderItem(g, open) {
  const rows = g.exercises.map((e) => `
    <div class="row">
      <div><div class="ex__name">${e.name}</div><div class="ex__tip">${e.tip}</div></div>
      <span class="num">${e.sets}</span>
      <span class="num">${e.reps}</span>
      <span class="num">${e.rest}</span>
    </div>`).join("");

  return `
  <article class="item${open ? " is-open" : ""}" data-id="${g.id}">
    <button class="item__head" aria-expanded="${open}" aria-controls="panel-${g.id}" id="head-${g.id}">
      <span class="item__name">${g.name}</span>
      <span class="badge">Treino aberto</span>
      <span class="item__desc">${g.desc}</span>
      <span class="item__count">${g.exercises.length} exercícios</span>
      <span class="item__time">${icons.clock}${g.time}</span>
      <span class="toggle">${icons.toggle}</span>
    </button>
    <div class="panel" id="panel-${g.id}" role="region" aria-labelledby="head-${g.id}">
      <div class="panel__clip">
        <div class="panel__body">
          <div class="warmup">${icons.pulse}<span>${g.warmup}</span></div>
          <div class="table">
            <div class="row row--head"><span>Exercício</span><span>Séries</span><span>Repetições</span><span>Descanso</span></div>
            ${rows}
          </div>
          <p class="note">${icons.info}<span>Use uma carga que permita terminar cada série com boa técnica. Descanse o tempo indicado entre as séries.</span></p>
        </div>
      </div>
    </div>
  </article>`;
}

accordion.innerHTML = groups.map((g) => renderItem(g, false)).join("");
// One group open at a time; clicking the open one closes it.
accordion.addEventListener("click", (event) => {
  const head = event.target.closest(".item__head");
  if (!head) return;
  const item = head.closest(".item");
  const willOpen = !item.classList.contains("is-open");

  accordion.querySelectorAll(".item").forEach((el) => {
    el.classList.remove("is-open");
    el.querySelector(".item__head").setAttribute("aria-expanded", "false");
  });

  if (willOpen) {
    item.classList.add("is-open");
    head.setAttribute("aria-expanded", "true");
  }
});
