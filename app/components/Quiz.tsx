"use client";
import { useState } from 'react';
import { quizData } from '../constants/quizData';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === quizData[currentStep].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentStep(currentStep + 1);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
  };

  // --- TELA DE RESULTADO (CARD FINAL) ---
  if (currentStep >= quizData.length) {
    return (
      <div className="max-w-md mx-auto my-10 animate-in fade-in zoom-in duration-500">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-300">
          
          {/* Foto de Fundo (Certifique-se de ter a imagem em /public/sope-result.jpg) */}
          <div className="relative h-64 w-full bg-purple-900">
            <img 
              src="/sope-result.jpg" 
              alt="Suga e J-Hope" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest shadow-lg uppercase">
                SOPE Certified
              </span>
            </div>
          </div>

          <div className="p-8 text-center bg-white">
            <h2 className="text-3xl font-black text-purple-900 mb-2 uppercase italic">
              {score === quizData.length ? "ARMY Master! ✨" : "Parabéns! 💜"}
            </h2>
            
            <p className="text-purple-700 font-medium mb-6">
              Você acertou <span className="text-2xl font-bold">{score}</span> de {quizData.length} questões.
            </p>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mb-6">
              <p className="text-sm text-purple-800 leading-relaxed italic">
                {score >= 7 
                  ? "Incrível! Você realmente conhece a alma do SOPE. Yoongi e Hobi estariam orgulhosos!" 
                  : "Muito bom! Continue acompanhando essa dupla dinâmica para saber tudo sobre eles."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  const text = `Acertei ${score}/${quizData.length} no Quiz do SOPE! 🐱🐿️ Vem testar seus conhecimentos também!`;
                  navigator.clipboard.writeText(text);
                  alert("Resultado copiado! 💜");
                }}
                className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                📋 Copiar Resultado
              </button>
              
              <button 
                onClick={() => window.location.reload()} 
                className="w-full py-3 border-2 border-purple-200 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all active:scale-95"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuiz = quizData[currentStep];

  // --- TELA DAS PERGUNTAS ---
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-[#D8C8FF] rounded-2xl shadow-xl border border-purple-300">
      <div className="w-full bg-purple-200 h-2 rounded-full mb-6 overflow-hidden">
        <div 
          className="bg-purple-600 h-2 transition-all duration-500" 
          style={{ width: `${((currentStep + 1) / quizData.length) * 100}%` }}
        ></div>
      </div>

      <div className="mb-2 text-xs font-bold text-purple-700 uppercase tracking-widest">
        Pergunta {currentStep + 1} de {quizData.length}
      </div>

      <h2 className="text-xl font-bold text-purple-900 mb-6 leading-tight">
        {currentQuiz.question}
      </h2>

      <div className="space-y-3">
        {currentQuiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all font-medium flex justify-between items-center ${
              isAnswered
                ? index === currentQuiz.correct
                  ? "border-green-500 bg-green-100 text-green-800"
                  : selectedOption === index
                  ? "border-red-400 bg-red-100 text-red-800"
                  : "border-transparent opacity-50 text-purple-400"
                : "border-purple-200 bg-white/60 text-purple-900 hover:border-purple-400 hover:bg-white"
            }`}
          >
            {option}
            {isAnswered && index === currentQuiz.correct && <span>✨</span>}
          </button>
        ))}
      </div>

      <div className="mt-8 min-h-[120px] flex flex-col justify-center text-center">
        {!isAnswered && (
          <div>
            {!showHint ? (
              <button 
                onClick={() => setShowHint(true)}
                className="text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center justify-center gap-2 mx-auto transition-colors"
              >
                💡 Ver dica do ARMY
              </button>
            ) : (
              <div className="p-3 bg-white/40 text-purple-800 text-sm rounded-md italic border border-purple-200 animate-in fade-in slide-in-from-top-1">
                Dica: {currentQuiz.hint}
              </div>
            )}
          </div>
        )}

        {isAnswered && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className={`p-4 rounded-lg border shadow-sm ${selectedOption === currentQuiz.correct ? "bg-green-100 border-green-200" : "bg-purple-100 border-purple-200"}`}>
              <p className="text-sm font-bold text-purple-900 mb-1">
                {selectedOption === currentQuiz.correct ? "Incrível! ✨" : "Poxa, quase lá! 💜"}
              </p>
              <p className="text-sm text-purple-800 leading-relaxed">{currentQuiz.rationale}</p>
            </div>
            <button 
              onClick={nextQuestion}
              className="mt-4 w-full py-4 bg-purple-800 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
            >
              {currentStep + 1 === quizData.length ? "Ver Resultado Final" : "Próxima Pergunta →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}