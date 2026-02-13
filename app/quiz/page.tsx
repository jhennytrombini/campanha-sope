// app/quiz/page.tsx
import Quiz from "../components/Quiz";

export default function QuizPage() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-start py-10 px-4 bg-[#C7B3F5]">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-purple-900 drop-shadow-sm">
          TESTE SEUS CONHECIMENTOS
        </h1>
        <p className="text-purple-800 font-medium mt-2">
          Especial de Aniversário: Suga & J-Hope 🐱🐿️
        </p>
      </div>

      <Quiz />
      
      <p className="mt-8 text-xs text-purple-700 italic max-w-md text-center">
        Compartilhe seu resultado com outros ARMYs e celebre conosco!
      </p>
    </div>
  );
}