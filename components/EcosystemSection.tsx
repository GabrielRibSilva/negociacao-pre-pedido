import {
  Car,
  DollarSign,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const items = [
  {
    icon: Car,
    title: "Veículo",
    text: "Apresente o carro escolhido com fotos e informações visuais.",
  },
  {
    icon: Gift,
    title: "Pacotes",
    text: "Ofereça combinações já cadastradas de acessórios, serviços e embelezamento.",
  },
  {
    icon: Wrench,
    title: "Acessórios",
    text: "Inclua itens individuais compatíveis com o veículo de interesse.",
  },
  {
    icon: Sparkles,
    title: "Embelezamento",
    text: "Mostre películas, proteções e itens que valorizam a experiência do cliente.",
  },
  {
    icon: DollarSign,
    title: "Financiamento",
    text: "Faça simulações rápidas ou envie para análise da equipe de F&I.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro",
    text: "Apresente opções de seguro e dê mais clareza para a decisão do cliente.",
  },
  {
    icon: Star,
    title: "Avaliação",
    text: "Solicite a avaliação do usado e leve a negociação para a banca quando necessário.",
  },
];

export function EcosystemSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Ecossistema completo
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Tudo que participa da venda, conectado.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            As funcionalidades já conhecidas do MobiGestor agora aparecem em
            uma experiência mais visual e mais adequada para o momento da
            negociação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <item.icon size={28} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>

              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-blue-600">
                  Anexar vídeo
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Grave 10 a 15 segundos demonstrando esta etapa na tela.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}