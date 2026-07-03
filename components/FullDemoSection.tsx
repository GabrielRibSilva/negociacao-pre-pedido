import { MediaPlaceholder } from "./MediaPlaceholder";

export function FullDemoSection() {
  return (
    <section id="demo" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Veja na prática
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Uma venda mais visual,
            <span className="block text-blue-600">sem mudar a rotina do vendedor.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            A demonstração completa deve mostrar que o módulo não é um novo processo complicado. É uma forma mais clara e comercial de conduzir a negociação.
          </p>
        </div>
        <MediaPlaceholder
          type="video"
          title="ANEXAR VÍDEO — Demonstração completa"
          description="Grave o fluxo desde o Lead até o Avançar para Pedido, mostrando a experiência como uma apresentação comercial para o vendedor."
          duration="3 a 5 minutos"
        />
      </div>
    </section>
  );
}
