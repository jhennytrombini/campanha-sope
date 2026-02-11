export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center">

      <div className="mb-10">
        <img
          src="/sope-home.jpg"
          alt="SUGA e J-Hope"
          className="max-w-sm w-full rounded-2xl shadow-lg mx-auto"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
        Celebrando SUGA & J-Hope
      </h1>

      <p className="max-w-2xl text-purple-900 text-lg leading-relaxed">
        Celebramos a vida, a arte e o impacto de dois artistas que transformaram
        música em conforto, força e esperança.
        <br /><br />
        Esta campanha nasce como um gesto de amor, solidariedade e gratidão.
        Que possamos honrar SUGA e J-Hope espalhando cuidado, consciência e
        empatia por meio de ações que salvam vidas.
      </p>

    </section>
  );
}
