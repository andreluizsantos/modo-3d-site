import { motion } from "framer-motion";

export default function Arrival() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
              data-testid="text-arrival-headline"
            >
              O ritual de chegada.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              A experiência começa antes do primeiro uso.
              Cada produto chega em embalagem pensada com o mesmo cuidado do que está dentro dela.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex items-start gap-3" data-testid="text-arrival-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm leading-6 text-muted-foreground">
                  Caixa rígida com acabamento limpo
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-arrival-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm leading-6 text-muted-foreground">
                  Encaixe preciso para proteção no transporte
                </span>
              </li>
              <li className="flex items-start gap-3" data-testid="text-arrival-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm leading-6 text-muted-foreground">
                  Guia de uso rápido incluso
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <img
              src="/images/packaging.png"
              alt="Embalagem premium Modo 3D com encaixe preciso"
              className="w-full rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
