import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center shadow-2xl md:p-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
            Nova Negociação Mobi
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            A venda continua sendo feita por pessoas. Agora, com uma experiência à altura.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            O Módulo Negociação aproxima vendedor e cliente, transforma a apresentação da venda e mantém a segurança do fluxo padrão do MobiGestor.
          </p>
          <a href="#demo" className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-blue-700 transition hover:scale-105">
            Ver demonstração
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 MobiGestor • Grupo Saga
        </div>
      </div>
    </footer>
  );
}
