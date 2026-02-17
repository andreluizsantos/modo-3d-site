import Hero from "@/components/sections/Hero";
import Precision from "@/components/sections/Precision";
import Pillars from "@/components/sections/Pillars";
import Process from "@/components/sections/Process";
import Collection from "@/components/sections/Collection";
import Arrival from "@/components/sections/Arrival";
import FinalCTA from "@/components/sections/FinalCTA";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <main>
      <SEO
        title="Design Essencial"
        description="Design que facilita a vida e cria conexão. Produtos funcionais e inteligentes, pensados para pessoas. Feitos sob medida, revisados um a um."
        path="/"
      />
      <Hero />
      <Precision />
      <Pillars />
      <Process />
      <Collection />
      <Arrival />
      <FinalCTA />
    </main>
  );
}
