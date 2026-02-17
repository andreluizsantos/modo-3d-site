import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "organizador-mesa",
    name: "Organizador de Mesa",
    tagline: "Ordem sem pensar.",
    description: "Mantém canetas, cabos e acessórios no lugar certo. Encaixe modular que cresce com sua necessidade.",
    image: "/images/product-lifestyle.png",
    tag: "Mais vendido",
  },
  {
    id: "suporte-celular",
    name: "Suporte Celular",
    tagline: "O ângulo certo, sem ajuste.",
    description: "Posição ergonômica para videochamadas e leitura. Encaixe seguro, sem riscar o aparelho.",
    image: "/images/product-stand.png",
    tag: "Novo",
  },
  {
    id: "organizador-cabos",
    name: "Organizador de Cabos",
    tagline: "Cabos sob controle.",
    description: "Fixa na borda da mesa e mantém cada cabo acessível. Sem nó, sem queda, sem improviso.",
    image: "/images/product-cable.png",
    tag: null,
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

export default function Collection() {
  return (
    <section id="colecao" className="py-16 md:py-24 bg-muted/30">
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
            data-testid="text-collection-headline"
          >
            A coleção.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
            Cada produto resolve um problema específico. Sem exagero, sem acessório inútil.
            Escolha o que faz sentido pra sua rotina.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product, i) => (
            <motion.div key={product.id} variants={item}>
              <Card
                className="group overflow-visible h-full flex flex-col"
                data-testid={`card-product-${product.id}`}
              >
                <div className="relative overflow-hidden rounded-t-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs">
                        {product.tag}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`text-product-name-${product.id}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">{product.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">
                    {product.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 w-fit px-0 text-primary gap-2"
                    data-testid={`button-product-${product.id}`}
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
