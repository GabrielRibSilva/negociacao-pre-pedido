import { Clock, MousePointerClick, UserRound } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

const problems = [
  {
    icon: Clock,
    title: "A conversa perde ritmo",
    text: "Durante a negociação, o vendedor precisa alternar entre etapas e telas, enquanto o cliente aguarda.",
  },
  {
    icon: MousePointerClick,
    title: "Muitos cliques na frente do cliente",
    text: "Itens importantes acabam sendo registrados depois, e nem sempre são apresentados no momento ideal da venda.",
  },
  {
    icon: UserRound,
    title: "O cliente não visualiza a compra",
    text: "Acessórios, serviços e simulações ficam menos tangíveis quando aparecem apenas como preenchimento de proposta.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Por que criamos
            </p>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              O problema não era vender.
              <span className="block text-blue-600">Era preencher.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Uma negociação de veículos acontece na conversa. Mas, no fluxo
              tradicional, o vendedor muitas vezes precisa interromper essa
              conversa para registrar informações, abrir etapas e montar a
              proposta.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-500">
              O Módulo Negociação nasce para inverter essa lógica: primeiro a
              venda é construída com o cliente, depois a formalização segue pelo
              fluxo padrão do MobiGestor.
            </p>
          </div>

          <MediaPlaceholder
            type="video"
            title="ANEXAR VÍDEO — Acessando o módulo"
            description="Grave apenas o início do fluxo: abrir o Lead, mostrar o botão Negociação no canto superior direito, selecionar o veículo de interesse ou adicionar um veículo do estoque."
            duration="30 segundos"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <item.icon size={28} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}