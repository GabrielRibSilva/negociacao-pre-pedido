import { MediaPlaceholder } from "./MediaPlaceholder";

export function ExperienceSection() {
  return (
    <section id="funcionalidades" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Conheça a experiência
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Tudo em uma única tela.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            O Módulo Negociação reúne as principais etapas da venda em uma
            experiência visual, simples e interativa para ser usada durante o
            atendimento ao cliente.
          </p>
        </div>

        <MediaPlaceholder
          type="image"
          title="ANEXAR IMAGEM — Tela completa do Módulo Negociação"
          description="Insira uma captura da tela inteira do módulo, mostrando o veículo em destaque, as categorias inferiores e o painel financeiro no lado direito."
        />
      </div>
    </section>
  );
}