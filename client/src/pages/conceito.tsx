import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Target, Users, Layers } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Função primeiro",
    description:
      "Todo produto começa com uma pergunta: que problema isso resolve? Se a resposta não for clara, não produzimos. Estética sem propósito é decoração — e decoração não é o que fazemos.",
  },
  {
    icon: Users,
    title: "Feito para pessoas reais",
    description:
      "Projetamos para rotinas reais, não para catálogos. Cada ângulo, encaixe e proporção vem de como as pessoas realmente usam as coisas no dia a dia.",
  },
  {
    icon: Layers,
    title: "Cuidado como consequência",
    description:
      "Quando o projeto é inteligente, o acabamento acompanha. Não perseguimos perfeição estética — perseguimos coerência. O resultado é um produto que funciona e que você sente que foi feito com atenção.",
  },
];

export default function Conceito() {
  return (
    <main>
      <SEO
        title="Conceito"
        description="Na Modo 3D, design é estratégia para simplificar a vida e criar conexões genuínas entre pessoas e objetos. Conheça nossa filosofia."
        path="/conceito"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
              data-testid="text-conceito-headline"
            >
              Design é estratégia.
              <br />
              Não estética.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-7 text-muted-foreground max-w-lg">
              Na Modo 3D, design é a ferramenta que usamos para simplificar a vida
              e criar conexões genuínas entre pessoas e objetos.
              Cada decisão de projeto existe para resolver algo — nunca para enfeitar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src="/images/product-lifestyle.png"
                alt="Produtos Modo 3D em ambiente real de trabalho"
                className="w-full rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                O problema vem antes
                <br />
                da solução.
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                A maioria dos produtos nasce de uma ideia — a gente prefere começar
                de uma frustração. Um cabo que cai, um objeto que não cabe,
                uma rotina que poderia ser mais simples.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Quando a necessidade é real, o produto faz sentido.
                E quando faz sentido, cria conexão. É isso que buscamos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              O que nos guia.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full" data-testid={`card-value-${i}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 mb-4">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Tecnologia é meio.
                <br />
                Não fim.
              </h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Usamos impressão 3D como ferramenta de produção, não como identidade.
                O que importa é a precisão do encaixe, a suavidade da superfície,
                a inteligência da forma.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                A tecnologia nos permite iterar, ajustar e personalizar.
                Mas quem define a qualidade é o projeto — e quem valida é quem usa.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <img
                src="/images/texture-detail.png"
                alt="Detalhe de acabamento mostrando precisão"
                className="w-full rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Quer saber mais?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Conte pra gente o que você precisa resolver.
              Talvez a gente já tenha a solução — ou possa criar uma.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contato">
                <Button size="lg" data-testid="button-conceito-contact">
                  Fale com a gente
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" data-testid="button-conceito-collection">
                  Ver a Coleção
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
