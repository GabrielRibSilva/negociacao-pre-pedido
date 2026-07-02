export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-3xl font-black tracking-[-0.08em] text-slate-950">
          mobi
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-slate-600 md:flex">
          <a href="#experiencia" className="transition hover:text-blue-600">
            Experiência
          </a>
          <a href="#funcionalidades" className="transition hover:text-blue-600">
            Funcionalidades
          </a>
          <a href="#formalizacao" className="transition hover:text-blue-600">
            Fluxo padrão
          </a>
          <a href="#faq" className="transition hover:text-blue-600">
            Dúvidas
          </a>
        </nav>

        <a
          href="#demo"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Ver demonstração
        </a>
      </div>
    </header>
  );
}