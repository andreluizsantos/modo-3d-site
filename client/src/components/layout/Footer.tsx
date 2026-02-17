import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-xl font-semibold tracking-tight" data-testid="text-footer-brand">
              Modo<span className="opacity-70">3D</span>
            </span>
            <p className="mt-3 text-sm leading-6 opacity-60" data-testid="text-footer-tagline">
              Design Essencial. Materializado.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-80">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/conceito">
                <span className="text-sm opacity-60 cursor-pointer" data-testid="link-footer-conceito">
                  Conceito
                </span>
              </Link>
              <Link href="/#colecao">
                <span className="text-sm opacity-60 cursor-pointer" data-testid="link-footer-produtos">
                  Produtos
                </span>
              </Link>
              <Link href="/contato">
                <span className="text-sm opacity-60 cursor-pointer" data-testid="link-footer-contato">
                  Contato
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-80">Confiança</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-60">
              <li data-testid="text-trust-shipping">Envio seguro para todo o Brasil</li>
              <li data-testid="text-trust-support">Suporte direto e humanizado</li>
              <li data-testid="text-trust-quality">Revisão de qualidade em cada peça</li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 opacity-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs opacity-40" data-testid="text-copyright">
            © {new Date().getFullYear()} Modo 3D. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-xs opacity-40 cursor-pointer" data-testid="link-terms">Termos de Uso</span>
            <span className="text-xs opacity-40 cursor-pointer" data-testid="link-privacy">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
