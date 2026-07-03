import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { FeatureSection } from "@/components/FeatureSection";
import { FormalizationSection } from "@/components/FormalizationSection";
import { FullDemoSection } from "@/components/FullDemoSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <EcosystemSection />
        <FeatureSection
          eyebrow="Construção da venda"
          title="Monte a compra junto com o cliente."
          highlight="Sem quebrar o ritmo da negociação."
          description="Pacotes, acessórios, embelezamento, serviços, financiamento, seguro e avaliação ficam disponíveis em uma experiência visual para apoiar a conversa comercial. O vendedor apresenta, o cliente escolhe e a negociação evolui naturalmente."
          bullets={[
            "Apresente itens de forma mais clara",
            "Adicione opções durante a conversa",
            "Mostre possibilidades sem trocar de tela",
            "Facilite a decisão do cliente",
          ]}
          mediaType="video"
          mediaTitle="ANEXAR VÍDEO — Montando a negociação"
          mediaDescription="Grave a seleção de pacotes, acessórios, embelezamento e serviços, mostrando os itens sendo adicionados ao resumo lateral."
          duration="30 segundos"
        />
        <FeatureSection
          reverse
          eyebrow="Resumo financeiro"
          title="O valor acompanha cada escolha."
          highlight="Tudo fica claro em tempo real."
          description="Enquanto a negociação acontece, o painel lateral mostra o veículo, os itens adicionados, a entrada e o valor restante. O cliente entende o impacto de cada decisão antes de seguir para o pedido."
          bullets={[
            "Valor do veículo sempre visível",
            "Itens escolhidos organizados no resumo",
            "Entrada considerada na negociação",
            "Mais clareza para definir o pagamento",
          ]}
          mediaType="video"
          mediaTitle="ANEXAR VÍDEO — Valor atualizando"
          mediaDescription="Grave o painel lateral enquanto itens são adicionados e o valor total é atualizado."
          duration="20 segundos"
        />
        <FormalizationSection />
        <FullDemoSection />
      </main>
      <Footer />
    </>
  );
}
