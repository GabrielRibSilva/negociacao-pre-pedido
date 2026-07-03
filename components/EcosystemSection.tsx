import { Car, DollarSign, Gift, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";

const items = [
  { icon: Car, title: "Veículo", text: "O carro fica em destaque durante toda a conversa." },
  { icon: Gift, title: "Pacotes", text: "Combinações prontas para apresentar valor rapidamente." },
  { icon: Wrench, title: "Acessórios", text: "Itens compatíveis exibidos de forma simples e visual." },
  { icon: Sparkles, title: "Embelezamento", text: "Películas, proteções e opções que ajudam o cliente a imaginar o carro pronto." },
  { icon: DollarSign, title: "Financiamento", text: "Simulações e análise de F&I dentro da experiência." },
  { icon: ShieldCheck, title: "Seguro", text: "Cotação e demonstração de planos sem sair da negociação." },
  { icon: Star, title: "Avaliação", text: "Prévia e solicitação de avaliação do usado do cliente." },
];

export function EcosystemSection() {
  return (
    <section id="funcionalidades" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Tudo em um só ambiente
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            O que o vendedor já usa,
            <span className="block text-blue-600">agora mais visual.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            As funcionalidades não deixam de existir no fluxo padrão. Elas ganham uma apresentação mais comercial para apoiar a conversa com o cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <item.icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
