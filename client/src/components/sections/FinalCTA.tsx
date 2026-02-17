import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
            data-testid="text-finalcta-headline"
          >
            Design Essencial.
            <br />
            Materializado.
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
            Produtos que facilitam a vida e criam conexão com o seu espaço.
            Feitos sob medida, revisados um a um, entregues com cuidado.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              data-testid="button-finalcta-primary"
              onClick={() => {
                const el = document.getElementById("colecao");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça a Coleção
            </Button>
            <Link href="/contato">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-finalcta-contact"
              >
                Fale com a gente
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Se não atender à sua necessidade, a gente resolve junto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
