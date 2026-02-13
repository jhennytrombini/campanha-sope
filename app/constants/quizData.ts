export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  hint: string;
  rationale: string;
}

export const quizData: QuizQuestion[] = [
  {
    question: "Qual é o nome da 'unit' oficial formada por Suga e J-Hope?",
    options: ["YoonSeok", "SOPE", "Rap Line Duo", "HopeGi"],
    correct: 1,
    hint: "O nome combina o início do apelido de um com o final do nome do outro.",
    rationale: "SOPE (Suga + J-Hope) é a unit oficial que os dois criaram!"
  },
  {
    question: "Em qual cidade sul-coreana nasceu o J-Hope?",
    options: ["Daegu", "Busan", "Gwangju", "Seul"],
    correct: 2,
    hint: "Ele é conhecido como o 'Príncipe de Gwangju'.",
    rationale: "J-Hope orgulhosamente nasceu em Gwangju e cita a cidade em várias letras."
  },
  {
    question: "Qual nome artístico Suga usa para seus projetos solo?",
    options: ["Gloss", "Min PD", "Agust D", "Suga-nini"],
    correct: 2,
    hint: "É Suga ao contrário + DT (Daegu Town).",
    rationale: "Agust D é o alter ego de Yoongi para suas mixtapes solo."
  },
  {
    question: "Antes do BTS, J-Hope era de qual grupo de dança de rua?",
    options: ["Neuron", "Hope World", "Dance King", "Gwangju Crew"],
    correct: 0,
    hint: "O nome é uma referência a uma célula do sistema nervoso.",
    rationale: "Hoseok fazia parte do grupo de dança underground Neuron."
  },
  {
    question: "Qual esporte inspirou o nome artístico 'Suga'?",
    options: ["Futebol", "Basquete", "Beisebol", "Tênis"],
    correct: 1,
    hint: "Ele era armador (Shooting Guard) no colégio.",
    rationale: "As primeiras sílabas de 'Shooting Guard' em inglês soam como Suga."
  },
  {
    question: "Quem J-Hope conheceu primeiro ao entrar no dormitório?",
    options: ["RM", "Suga", "Jungkook", "Jin"],
    correct: 0,
    hint: "Foi o líder do grupo.",
    rationale: "RM foi o primeiro membro que J-Hope encontrou na empresa."
  },
  {
    question: "Suga produziu qual hit de 2017 para a artista Suran?",
    options: ["Eight", "Wine", "Halsey Interlude", "Song Request"],
    correct: 1,
    hint: "A música também é conhecida como 'If I Get Drunk Today'.",
    rationale: "Suga ganhou o prêmio de Hot Trend por produzir 'Wine'."
  },
  {
    question: "J-Hope foi o primeiro coreano a ser headliner em qual festival?",
    options: ["Coachella", "Lollapalooza", "Rock in Rio", "Glastonbury"],
    correct: 1,
    hint: "Aconteceu em Chicago e foi apelidado de 'Hobipalooza'.",
    rationale: "J-Hope fez história no palco principal do Lollapalooza em 2022."
  },
  {
    question: "Qual o 'Primeiro Amor' de Suga (tema de sua música solo)?",
    options: ["Violão", "Bateria", "Piano", "Flauta"],
    correct: 2,
    hint: "O instrumento aparece no vídeo de 'First Love'.",
    rationale: "O piano é o instrumento central na vida e narrativa de Yoongi."
  },
  {
    question: "Qual cor J-Hope mais associa à sua estética (e seu microfone)?",
    options: ["Verde", "Vermelho", "Azul", "Prateado"],
    correct: 0,
    hint: "É a cor da esperança.",
    rationale: "O verde é a cor oficial do microfone do J-Hope há muitos anos."
  }
];