import { CheckCircle, PlayCircle } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <span className="mb-8 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
            Lançamento MobiGestor
          </span>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            O carro vai para a mesa.
            <span className="block text-blue-600">A negociação fica mais visual.</span>
          </h1>
          <p className="mt-6 text-xl font-semibold leading-8 text-slate-800">
            Uma nova experiência para conduzir a venda ao lado do cliente, com mais clareza, impacto visual e agilidade.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-500">
            O fluxo comercial continua o mesmo. A novidade é que agora o vendedor conta com uma tela pensada para apresentar o veículo, agregar valor, simular cenários e construir a negociação de forma mais envolvente.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experiencia" className="rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">
              Conhecer novidade
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-blue-600 transition hover:bg-blue-50">
              <PlayCircle size={18} />
              Ver demonstração
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <CheckCircle size={20} className="text-blue-600" />
            O vendedor continua fazendo o que já faz. Agora, com uma experiência mais visual.
          </div>
        </div>
        <MediaPlaceholder
          type="video"
          title="ANEXAR VÍDEO — Vídeo de lançamento"
          description="Grave uma apresentação curta mostrando o módulo em uso: abertura pelo Lead, escolha do veículo, seleção de itens e resumo lateral atualizando."
          duration="1 a 2 minutos"
        />
      </div>
    </section>
  );
}
