import {
  Car,
  CheckCircle,
  FileText,
  Handshake,
  MousePointerClick,
  ShoppingCart,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Lead aberto",
    text: "O vendedor acessa o Lead dentro do MobiGestor.",
  },
  {
    icon: MousePointerClick,
    title: "Clique em Negociação",
    text: "O botão aparece no canto superior direito da tela do Lead.",
  },
  {
    icon: Car,
    title: "Escolha do veículo",
    text: "Selecione o veículo de interesse ou adicione um modelo do estoque.",
  },
  {
    icon: ShoppingCart,
    title: "Venda construída",
    text: "Pacotes, acessórios, serviços, financiamento, seguro e avaliação são apresentados.",
  },
  {
    icon: Handshake,
    title: "Cliente decide",
    text: "O cliente acompanha o valor e entende o impacto de cada escolha.",
  },
  {
    icon: CheckCircle,
    title: "Avançar para Pedido",
    text: "O fluxo segue para a formalização padrão do MobiGestor.",
  },
];

export function TimelineSection() {
  return (
    <section id="experiencia" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Jornada da negociação
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Do Lead ao Pedido de Venda.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            A nova experiência não substitui o fluxo padrão. Ela antecipa a
            negociação, deixando a formalização para o momento certo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <step.icon size={28} strokeWidth={1.8} />
                </div>

                <span className="text-5xl font-black text-slate-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}