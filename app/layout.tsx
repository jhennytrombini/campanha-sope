import "./globals.css";

export const metadata = {
  title: "SOPE | Campanha Solidária",
  description: "Campanha solidária em homenagem a SUGA e J-Hope",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col text-white bg-[#D8C8FF]">

        {/* Header */}
        <header className="w-full bg-[#C7B3F5]">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-bold tracking-wide text-purple-900"></span>

            <div className="flex gap-6 text-sm text-purple-900">
              <a href="/" className="hover:underline">Home</a>
              <a href="/doacao" className="hover:underline">Doação de Sangue</a>
              <a href="/playlists" className="hover:underline">Playlists</a>
              <a href="/cronograma" className="hover:underline">Cronograma</a>
            </div>
          </nav>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 w-full bg-[#C7B3F5]">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full text-center text-sm p-4 border-t border-purple-300 bg-[#C7B3F5] text-purple-900">
          &copy; 2025 Desenvolvido por{" "}
          <span className="font-semibold">Army in Action</span>.<br />
          <span className="italic">
            Projeto independente, não associado à HYBE ou BTS.
          </span>
        </footer>

      </body>
    </html>
  );
}
