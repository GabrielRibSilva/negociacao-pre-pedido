import { MediaPlaceholder } from "./MediaPlaceholder";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            A nova tela de negociação
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Uma tela feita para vender,
            <span className="block text-blue-600">não apenas preencher.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-500">
            O cliente visualiza o veículo, acompanha os itens escolhidos e entende melhor o valor total da compra. Tudo isso sem tirar o vendedor do fluxo conhecido do MobiGestor.
          </p>
        </div>
        <MediaPlaceholder
          type="image"
          title="ANEXAR IMAGEM — Tela completa do Módulo Negociação"
          description="Use uma captura ampla da tela mostrando o veículo, as categorias inferiores e o resumo financeiro no lado direito."
        />
      </div>
    </section>
  );
}
