import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToCollection = () => {
    const el = document.getElementById("colecao");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-product.png"
          alt="Produto Modo 3D com acabamento premium em ambiente minimalista"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#222839]/90 via-[#222839]/70 to-[#222839]/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight"
            data-testid="text-hero-headline"
          >
            Design aqui não é estética.
            <br />
            É estratégia pra facilitar
            <br />
            vida e criar conexão.
          </h1>

          <p
            className="mt-6 text-base md:text-lg leading-7 text-white/70 max-w-lg"
            data-testid="text-hero-subhead"
          >
            Cada produto nasce de uma necessidade real. Pensamos na função primeiro, 
            projetamos com inteligência e entregamos com cuidado. 
            O resultado é algo que funciona — e que faz sentido na sua rotina.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={scrollToCollection}
              data-testid="button-hero-cta"
              className="bg-white text-[#222839] border-white/20"
            >
              Conheça a Coleção
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToCollection}
              data-testid="button-hero-secondary"
              className="border-white/30 text-white backdrop-blur-sm bg-white/5"
            >
              Como funciona
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 flex-wrap text-sm text-white/50">
            <span data-testid="text-trust-1">Produção sob medida</span>
            <span className="hidden sm:inline opacity-30">—</span>
            <span data-testid="text-trust-2">Revisão em cada peça</span>
            <span className="hidden sm:inline opacity-30">—</span>
            <span data-testid="text-trust-3">Envio para todo o Brasil</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-white/30" />
      </motion.div>
    </section>
  );
}
