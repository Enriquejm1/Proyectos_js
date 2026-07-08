const riddles = [
  {
    question: "Se mira pero no se toca,¿Qué es?",
    answer: "espejo",
  },
  {
    question:
      "Blanco por dentro, verde por fuera.Si quieres te lo diga,espera. ¿Qué es?",
    answer: "pera",
  },
  {
    question: "¿Que tiene llaves pero no abre puertas?",
    answer: "piano",
  },
  {
    question:
      "¿Qué se encuentra una vez en un minuto, dos veces en un momento pero ninguno en cien años?",
    answer: "m.",
  },
  {
    question: "Redondo, redondo, barril sin fondo. ¿Qué es?",
    answer: "anillo.",
  },
  {
    question: "¿Qué es lo que sopla sin boca y vuela sin alas?",
    answer: "viento",
  },
  {
    question: "¿Qué es lo que desaparece cuando se lo nombra?",
    answer: "silencio",
  },
  {
    question: "Qué es lo que cuanto más grande es menos se ve.",
    answer: "oscuridad",
  },
  {
    question: "¿Cuál es el animal que siempre llega al final?",
    answer: "delfin",
  },
  {
    question: "Cuando envejeces un año, nos apagas y te aplauden.",
    answer: "velas",
  },
];

let currentRiddle;
let correctAnswer = 0;

function loadNewRiddle() {
  currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
  document.getElementById("riddle").innerText = currentRiddle.question;
}

document.addEventListener("DOMContentLoaded", function () {
  loadNewRiddle();
});

function checkAnswer() {
  const userA = document.getElementById("answer-input").value.toLowerCase();
  if (userA) {
    if (userA === currentRiddle.answer) {
      document.getElementById("result").innerText = "Bien";
      document.getElementById("result").style.color = "green";
      correctAnswer += 1;
      document.getElementById("correctoCount").innerText = correctAnswer;
     if(correctAnswer==riddles.length){
      document.getElementById("result").innerText =
      "Felicidades has tenido todas las respuestas correctas";
    document.getElementById("result").style.color = "green";    
     }
      loadNewRiddle();
    } else {
      document.getElementById("result").innerText =
        "Respues incorrecta, intentalo de nuevo";
      document.getElementById("result").style.color = "red";
    }
  } else {
    document.getElementById("result").innerText =
      "Ingresa tu respuesta primero";
    document.getElementById("result").style.color = "red";
  }
}
