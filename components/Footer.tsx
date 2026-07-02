import {
ArrowRight
} from "lucide-react";

export function Footer(){

return(

<footer className="bg-slate-950">

<div className="mx-auto max-w-7xl px-6 py-28">

<div className="rounded-[40px] bg-gradient-to-br from-blue-600 to-blue-700 p-16 text-center shadow-2xl">

<p className="uppercase tracking-[0.25em] text-sm font-bold text-blue-100">

Nova experiência

</p>

<h2 className="mx-auto mt-6 max-w-4xl text-6xl font-black leading-tight text-white">

O cliente já escolhe o carro pelos olhos.

Agora a negociação acompanha essa experiência.

</h2>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

O Módulo Negociação foi criado para aproximar vendedor e cliente durante toda a venda, reduzindo burocracias e tornando a experiência mais visual, transparente e eficiente.

</p>

<button
className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-blue-700 transition hover:scale-105"
>

Conhecer a experiência

<ArrowRight/>

</button>

</div>

<div className="mt-20 border-t border-white/10 pt-10 text-center text-slate-500">

© 2026 MobiGestor • Grupo Saga

</div>

</div>

</footer>

)

}