import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Minimize2, LayoutGrid, Eye } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Minimize2,
    title: "Reduz fricção no uso diário",
    description:
      "Cada detalhe é pensado pra eliminar pequenos incômodos. Sem improvisação, sem gambiarra — só o que funciona de verdade na rotina.",
    evidence: "Encaixes precisos, montagem intuitiva",
  },
  {
    icon: LayoutGrid,
    title: "Cria ordem sem esforço",
    description:
      "Organização que acontece naturalmente. Produtos modulares que se adaptam ao seu espaço e crescem com suas necessidades.",
    evidence: "Modular e escalável",
  },
  {
    icon: Eye,
    title: "Integra-se ao seu espaço",
    description:
      "Objetos que não gritam por atenção. Completam o ambiente com linhas limpas e presença discreta — como deve ser.",
    evidence: "Design silencioso e coerente",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Pillars() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
            data-testid="text-pillars-headline"
          >
            A forma segue a função.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-xl mx-auto">
            Três princípios guiam cada produto que criamos.
            Não são slogans — são decisões de projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full" data-testid={`card-pillar-${i}`}>
                <CardHeader className="pb-2 flex flex-row items-center gap-3 flex-wrap">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {pillar.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-primary/80">
                    {pillar.evidence}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
