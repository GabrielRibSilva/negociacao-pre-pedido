import type { LucideIcon } from "lucide-react";
import { Car, CreditCard, FileSignature, FileText, FolderUp, UserRound, Wrench } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function FormalizationSection() {
  return (
    <section id="formalizacao" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Integração com o fluxo padrão
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Venda primeiro.
              <span className="block text-blue-600">Formalize depois.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              Depois que o cliente entende a compra e decide seguir, o vendedor clica em <strong>Avançar para Pedido</strong>.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-500">
              O veículo de interesse e os itens escolhidos seguem para o fluxo padrão. A partir daí, o vendedor completa pagamentos, dados do cliente, documentos e assinatura digital.
            </p>
          </div>
          <MediaPlaceholder
            type="video"
            title="ANEXAR VÍDEO — Avançar para Pedido"
            description="Mostre o clique em Avançar para Pedido e a continuidade no fluxo padrão do MobiGestor."
            duration="30 segundos"
          />
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">O que segue da negociação</h3>
            <div className="mt-6 space-y-4">
              <Item icon={Car} title="Veículo de interesse" />
              <Item icon={Wrench} title="Acessórios, pacotes e serviços escolhidos" />
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8">
            <h3 className="text-2xl font-black text-white">O que continua no fluxo padrão</h3>
            <div className="mt-6 space-y-4">
              <DarkItem icon={CreditCard} title="Tipos de pagamento e valores" />
              <DarkItem icon={FileText} title="Troco dos serviços cobrados" />
              <DarkItem icon={UserRound} title="Dados completos do cliente" />
              <DarkItem icon={FileSignature} title="Assinatura digital" />
              <DarkItem icon={FolderUp} title="Anexo dos documentos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
        <Icon size={22} />
      </div>
      <p className="font-bold text-slate-700">{title}</p>
    </div>
  );
}

function DarkItem({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
        <Icon size={22} />
      </div>
      <p className="font-bold text-white">{title}</p>
    </div>
  );
}
