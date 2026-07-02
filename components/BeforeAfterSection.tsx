import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  Monitor,
  Users,
  Zap,
} from "lucide-react";

const before = [
  "Abrir diversas telas durante a negociação",
  "Cliente aguardando enquanto o vendedor preenche informações",
  "Acessórios apresentados apenas no final da venda",
  "Necessidade de alternar entre módulos",
  "Pouca interação visual com o cliente",
];

const after = [
  "Tudo acontece em uma única experiência",
  "Cliente acompanha toda a negociação",
  "Valor atualizado em tempo real",
  "Venda construída lado a lado",
  "Fluxo padrão apenas para formalização",
];

export function BeforeAfterSection() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Comparativo
          </p>

          <h2 className="text-5xl font-black tracking-tight text-slate-950">
            Antes × Agora
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            O fluxo comercial continua o mesmo.
            O que muda é a forma como a negociação acontece.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr]">

          <div className="rounded-3xl border border-red-200 bg-white p-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Monitor size={28}/>
              </div>

              <h3 className="text-3xl font-black">
                Antes
              </h3>

            </div>

            <div className="space-y-5">

              {before.map(item=>(
                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <MousePointerClick
                    className="mt-1 text-red-500"
                    size={18}
                  />

                  <span className="leading-7 text-slate-600">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          <div className="hidden items-center justify-center lg:flex">

            <ArrowRight
              size={60}
              className="text-blue-500"
            />

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-10 text-white shadow-2xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

                <Zap size={28}/>

              </div>

              <h3 className="text-3xl font-black">
                Agora
              </h3>

            </div>

            <div className="space-y-5">

              {after.map(item=>(
                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <CheckCircle2
                    className="mt-1"
                    size={18}
                  />

                  <span className="leading-7">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">

              <div className="flex items-center gap-3">

                <Users size={20}/>

                <strong>
                  O cliente participa da construção da venda.
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}