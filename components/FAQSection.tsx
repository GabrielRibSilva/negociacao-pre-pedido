import {
  ChevronRight
} from "lucide-react";

const faq = [

  {
    q:"O fluxo antigo será removido?",
    a:"Não. O fluxo padrão continua exatamente igual. O Módulo Negociação é uma nova experiência para realizar a venda junto ao cliente."
  },

  {
    q:"Sou obrigado a utilizar o módulo?",
    a:"Não. O uso é opcional. Você pode continuar utilizando o fluxo tradicional normalmente."
  },

  {
    q:"A PDS é preenchida automaticamente?",
    a:"Não completamente. O veículo e os itens escolhidos seguem para o Pedido de Venda. O vendedor continua informando formas de pagamento, dados do cliente, documentos e assinatura."
  },

  {
    q:"O financiamento mudou?",
    a:"Não. O processo permanece o mesmo. A diferença é que agora a simulação acontece dentro da experiência da negociação."
  },

  {
    q:"O seguro mudou?",
    a:"Não. Apenas foi integrado na tela da negociação para facilitar a apresentação ao cliente."
  },

  {
    q:"A avaliação do usado mudou?",
    a:"Não. Ela continua sendo enviada para análise normalmente."
  }

]

export function FAQSection(){

    return(

<section
id="faq"
className="bg-slate-50 py-28"
>

<div className="mx-auto max-w-5xl px-6">

<div className="text-center mb-20">

<p className="text-blue-600 uppercase font-bold tracking-[0.2em] text-xs">

Perguntas Frequentes

</p>

<h2 className="mt-5 text-5xl font-black">

Ainda ficou alguma dúvida?

</h2>

</div>

<div className="space-y-6">

{

faq.map(item=>(

<div

key={item.q}

className="rounded-3xl bg-white border border-slate-200 p-8"

>

<div className="flex items-center justify-between">

<h3 className="font-black text-xl">

{item.q}

</h3>

<ChevronRight/>

</div>

<p className="mt-5 leading-8 text-slate-500">

{item.a}

</p>

</div>

))

}

</div>

</div>

</section>

    )

}