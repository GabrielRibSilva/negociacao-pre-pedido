import { PlayCircle } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function FullDemoSection() {
  return (
    <section
      id="demo"
      className="bg-white py-28"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Demonstração completa
          </p>

          <h2 className="text-5xl font-black tracking-tight text-slate-950">
            Veja uma negociação acontecendo.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            A melhor forma de entender o módulo é acompanhando uma venda do
            começo ao fim.

          </p>

        </div>

        <MediaPlaceholder
          type="video"
          title="ANEXAR VÍDEO — Fluxo completo"
          description="Gravar desde a abertura do Lead até o clique em Avançar para Pedido, mostrando todo o processo sem cortes."
          duration="5 minutos"
        />

        <div className="mt-10 flex items-center justify-center gap-3 text-blue-600">

          <PlayCircle/>

          <span className="font-semibold">
            Demonstração completa do fluxo
          </span>

        </div>

      </div>

    </section>
  );
}