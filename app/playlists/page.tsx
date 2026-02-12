import Image from "next/image";

const playlists = [
  {
    nome: "SOPE",
    imagem: "/sope.jpg",
    link: "https://open.spotify.com/playlist/5Rh4Cb1M8kqmUk2UzezP4K?si=OMIJeK25Q0uD2-rLUbTbiA",
  },
  {
    nome: "Yoongi",
    imagem: "/yoongi.jpg",
    link: "https://open.spotify.com/playlist/08sKxZzkbpEGojhPh7ZaYD?si=2pfTE5AYTACiH0VykcoBYA",
  },
  {
    nome: "J-Hope",
    imagem: "/jhope.jpg",
    link: "https://open.spotify.com/playlist/1XmgY7yhtaFTnTlnlpyjwt?si=hghm3E4fRv2j3PCMip01vQ",
  },
];

export default function Playlists() {
  return (
    <main className="min-h-screen px-8 py-16">

      {/* Título + Texto */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Playlists Oficiais 🎵💜
        </h1>

        <p className="text-lg text-gray-600">
          Escute, compartilhe e fortaleça nossa campanha através das
          playlists oficiais. Cada stream ajuda a ampliar o alcance
          e mostrar a força do nosso fandom 💜
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {playlists.map((playlist) => (
          <div
            key={playlist.nome}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
          >
            <div className="relative w-60 h-60 mb-4">
              <Image
                src={playlist.imagem}
                alt={playlist.nome}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h2 className="text-xl font-semibold mb-3">
              {playlist.nome}
            </h2>

            <a
              href={playlist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1DB954] text-white px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              🎵 Ouvir no Spotify
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}
