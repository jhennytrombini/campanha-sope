import "./globals.css";
import Link from "next/link";

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
      <body className="min-h-screen flex flex-col bg-[#D8C8FF] text-purple-900">

        {/* Header */}
        <header className="w-full bg-[#C7B3F5] shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-xs md:text-sm font-medium text-purple-900">
              
              <Link href="/" className="hover:underline">
                Home
              </Link>

              <Link href="/doacao" className="hover:underline">
                Doação de Sangue
              </Link>

              <Link href="/playlists" className="hover:underline">
                Playlists
              </Link>

              <Link href="/faca-parte" className="hover:underline">
                Faça Parte
              </Link>

            </div>
          </nav>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 w-full bg-[#C7B3F5]">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full text-center text-sm p-4 border-t border-purple-300 bg-[#C7B3F5]">
          &copy; 2026 Desenvolvido por{" "}
          <span className="font-semibold">Army in Action</span>.<br />
          <span className="italic">
            Projeto independente, não associado à HYBE ou BTS.
          </span>
        </footer>

      </body>
    </html>
  );
}
