'use client'

export default function CampanhaDoacao() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#C7B3F5' }}
    >
      <section className="max-w-xl bg-[#EFE9FF] rounded-3xl p-10 text-center shadow-xl">
  
  <h1 className="text-3xl font-bold mb-4 text-purple-800">
    Campanha de Doação de Sangue
  </h1>

  <p className="text-purple-700 mb-8 leading-relaxed">
    Doar sangue é um ato de amor que salva vidas.
    Esta campanha tem como objetivo incentivar a doação e reunir informações
    dos participantes para acompanhamento da ação.
    <br /><br />
    Se você pode doar, participe. Se não pode, compartilhe. 💉❤️
  </p>

  <a
    href="https://docs.google.com/forms/d/1i6FgBNwhKmRpVEzDz28W5JqgSQarAy70skZiZnePuE0/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-purple-700 hover:bg-purple-800 transition-colors px-10 py-4 rounded-2xl font-semibold text-lg text-white shadow-lg"
  >
    Participar da Campanha
  </a>

</section>
    </main>
  )
}
