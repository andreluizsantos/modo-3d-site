import { useState, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Conceito", href: "/conceito" },
  { label: "Produtos", href: "/", hash: "colecao" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [location, setLocation] = useLocation();
  const [open, setOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const handleNavClick = useCallback((item: typeof navItems[0]) => {
    setOpen(false);
    if (item.hash) {
      if (location === "/") {
        scrollToSection(item.hash);
      } else {
        setLocation("/");
        setTimeout(() => scrollToSection(item.hash!), 300);
      }
    }
  }, [location, setLocation, scrollToSection]);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 h-16">
        <Link href="/" data-testid="link-home">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Modo<span className="text-primary">3D</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navItems.map((item) => (
            item.hash ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-150 bg-transparent border-none cursor-pointer ${
                  location === "/" ? "text-muted-foreground" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                <span
                  className={`text-sm font-medium transition-colors duration-150 ${
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="default"
            data-testid="button-header-cta"
            onClick={() => handleNavClick({ label: "Produtos", href: "/", hash: "colecao" })}
          >
            Conheça a Coleção
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                item.hash ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-base font-medium text-muted-foreground bg-transparent border-none cursor-pointer text-left"
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    <span
                      className={`text-base font-medium ${
                        location === item.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              ))}
              <Button
                className="w-full mt-4"
                data-testid="button-mobile-cta"
                onClick={() => handleNavClick({ label: "Produtos", href: "/", hash: "colecao" })}
              >
                Conheça a Coleção
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
