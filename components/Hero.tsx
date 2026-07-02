import { CheckCircle, PlayCircle } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <span className="mb-8 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
            Novidade no MobiGestor
          </span>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            O carro vai para a mesa.
            <span className="block text-blue-600">
              A venda acontece com o cliente.
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-slate-800">
            Uma nova experiência de negociação para apresentar, montar e
            conduzir a venda de forma visual dentro do MobiGestor.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-500">
            Veículo, pacotes, acessórios, embelezamento, serviços,
            financiamento, seguro e avaliação em uma única tela interativa,
            feita para apoiar o vendedor e melhorar a experiência do cliente na
            loja.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Conhecer experiência
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-blue-600 transition hover:bg-blue-50"
            >
              <PlayCircle size={18} />
              Ver na prática
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <CheckCircle size={20} className="text-blue-600" />
            Integrado ao fluxo padrão do MobiGestor
          </div>
        </div>

        <MediaPlaceholder
          type="video"
          title="ANEXAR VÍDEO — Demonstração completa"
          description="Grave o fluxo completo em tela cheia: abrir o Lead, clicar em Negociação, selecionar o veículo, adicionar itens, mostrar o resumo financeiro e clicar em Avançar para Pedido."
          duration="2 minutos"
        />
      </div>
    </section>
  );
}