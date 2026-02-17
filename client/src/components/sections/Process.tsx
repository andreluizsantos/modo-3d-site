import { motion } from "framer-motion";
import { Lightbulb, Puzzle, Wrench } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Entender a necessidade real",
    description:
      "Antes de desenhar qualquer coisa, ouvimos. Entendemos o problema, o contexto, a rotina. O ponto de partida é sempre a pessoa — nunca a tecnologia.",
  },
  {
    icon: Puzzle,
    number: "02",
    title: "Pensar a solução inteligente",
    description:
      "Projetamos com intenção. Cada dimensão, encaixe e ângulo existe por um motivo funcional. Design inteligente é aquele que você nem percebe — só usa.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Executar com cuidado",
    description:
      "A produção é consequência de um bom projeto. Quando a função está certa, o acabamento acompanha. Cada peça é revisada antes de sair — porque cuidado não é opcional.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:sticky md:top-24"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
              data-testid="text-process-headline"
            >
              Pensado para pessoas.
              <br />
              Não para prateleiras.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md">
              Nosso processo começa onde importa: na vida de quem vai usar.
              Produtos funcionais e inteligentes nascem de entender problemas reais — 
              e o acabamento é a consequência natural de um bom projeto.
            </p>

            <div className="mt-8">
              <img
                src="/images/haptic-experience.png"
                alt="Interação tátil com produto Modo 3D"
                className="w-full rounded-md"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex gap-5"
                data-testid={`step-process-${i}`}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary/60 tracking-wider uppercase">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
