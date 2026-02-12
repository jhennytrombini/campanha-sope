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

export default function Playlist() {
  return (
    <main className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Playlists da Campanha 🎵💜
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {playlists.map((playlist) => (
          <div
            key={playlist.nome}
            className="bg-white text-black rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition"
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
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              🎵 Ouvir no Spotify
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
