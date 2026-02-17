import { motion } from "framer-motion";

export default function Precision() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/images/texture-detail.png"
              alt="Detalhe de acabamento premium com iluminação lateral"
              className="w-full rounded-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
              data-testid="text-precision-headline"
            >
              Não vendemos plástico.
              <br />
              Vendemos precisão.
            </h2>
            <p
              className="mt-6 text-base leading-7 text-muted-foreground"
              data-testid="text-precision-body"
            >
              O mercado associa impressão 3D a protótipos toscos e superfícies ásperas.
              Nós usamos a tecnologia como ferramenta — não como identidade.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              O que importa é o resultado: um produto que resolve algo real na sua vida,
              com acabamento que você sente na mão e reconhece no uso diário.
              Cada peça passa por revisão manual antes de chegar até você.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
