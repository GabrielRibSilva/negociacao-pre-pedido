import {
  ArrowRight,
  Car,
  CheckCircle,
  CreditCard,
  FileSignature,
  FileText,
  FolderUp,
  UserRound,
  Wrench,
} from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

const automaticItems = [
  {
    icon: Car,
    title: "Veículo de interesse",
    text: "O veículo escolhido durante a negociação segue para o pedido.",
  },
  {
    icon: Wrench,
    title: "Itens selecionados",
    text: "Acessórios, pacotes e serviços escolhidos são levados para o fluxo padrão.",
  },
];

const manualItems = [
  {
    icon: CreditCard,
    title: "Formas de pagamento",
    text: "O vendedor informa como o cliente irá pagar, com tipos e valores.",
  },
  {
    icon: FileText,
    title: "Troco dos serviços cobrados",
    text: "Os valores de venda relacionados aos serviços cobrados continuam sendo lançados no fluxo.",
  },
  {
    icon: UserRound,
    title: "Dados do cliente",
    text: "O cadastro precisa ser completado para gerar corretamente a proposta.",
  },
  {
    icon: FileSignature,
    title: "Assinatura digital",
    text: "A proposta é enviada para assinatura, com registro por foto do cliente.",
  },
  {
    icon: FolderUp,
    title: "Documentos",
    text: "Os documentos necessários são anexados na proposta normalmente.",
  },
];

export function FormalizationSection() {
  return (
    <section id="formalizacao" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Venda primeiro. Formalize depois.
            </p>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              A negociação ajuda a vender.
              <span className="block text-blue-600">
                O fluxo padrão formaliza.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Ao clicar em <strong>Avançar para Pedido</strong>, o MobiGestor
              leva para o fluxo padrão as principais escolhas feitas durante a
              negociação, mas a PDS não vai totalmente preenchida.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-500">
              O vendedor continua responsável por informar pagamentos, valores,
              dados do cliente, documentos e assinatura, garantindo a segurança
              do processo comercial.
            </p>
          </div>

          <MediaPlaceholder
            type="video"
            title="ANEXAR VÍDEO — Avançar para Pedido"
            description="Grave o clique no botão Avançar para Pedido e mostre a entrada no fluxo padrão do MobiGestor com veículo e itens selecionados já carregados."
            duration="30 a 45 segundos"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                O que já segue do módulo
              </h3>
            </div>

            <div className="space-y-4">
              {automaticItems.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">
                O que o vendedor ainda preenche
              </h3>
            </div>

            <div className="space-y-4">
              {manualItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-white">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}