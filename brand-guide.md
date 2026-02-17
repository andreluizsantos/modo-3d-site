# Modo 3D — Guia de Identidade Visual

Documento de referência para manter a consistência visual e comunicativa do site institucional da Modo 3D. Todas as especificações foram verificadas diretamente no código-fonte.

---

## 1. Filosofia de Marca

**Conceito central:**
> "Design aqui não é estética: é estratégia pra facilitar vida e criar conexão."

**Posicionamento:**
- Produtos funcionais e inteligentes, pensados para pessoas
- O acabamento premium é consequência do processo, nunca o argumento principal de venda
- Cada produto nasce de uma necessidade real — função primeiro, forma como resultado

**Tagline:**
> Design Essencial. Materializado.

---

## 2. Paleta de Cores

Todas as cores são definidas como variáveis CSS em `client/src/index.css` no formato HSL (H S% L%) e referenciadas via Tailwind em `tailwind.config.ts`.

### 2.1 Cores da Marca (Brand)

| Nome          | Hex       | HSL               | Uso principal no código                |
|---------------|-----------|--------------------|-----------------------------------------|
| Brand 900     | `#222839` | 220 15% 15%       | `--foreground` (light), gradient do hero, footer |
| Brand 500     | `#3D6DA9` | 212 52% 42%       | `--ring` (focus), variante intermediária|
| Brand 700     | —         | 212 52% 32%       | `--primary` (botões e links)            |

### 2.2 Modo Claro — Tokens Utilizados na Interface (`:root` em `index.css`)

> Nota: o arquivo `index.css` define tokens adicionais do framework shadcn/ui (sidebar, popover, chart-1..5, shadow variants, button/badge outlines, border variants por componente) que estão disponíveis mas não são todos aplicados diretamente nos componentes customizados do site. A tabela abaixo lista apenas os tokens efetivamente utilizados na interface.

| Token CSS              | HSL             | Classe Tailwind         | Onde é usado                           |
|------------------------|-----------------|-------------------------|----------------------------------------|
| `--background`         | 0 0% 100%       | `bg-background`         | Fundo geral do site                   |
| `--foreground`         | 220 15% 15%     | `text-foreground`       | Texto principal, títulos               |
| `--border`             | 220 10% 90%     | `border-border`         | Bordas e divisores                     |
| `--card`               | 0 0% 98%        | `bg-card`               | Fundo de cards (Pillars, Collection, Contato) |
| `--card-foreground`    | 220 15% 15%     | `text-card-foreground`  | Texto dentro de cards                  |
| `--card-border`        | 0 0% 94%        | `border-card-border`    | Borda de cards                         |
| `--popover`            | 0 0% 94%        | `bg-popover`            | Menus e dropdowns                      |
| `--popover-foreground` | 220 15% 15%     | `text-popover-foreground`| Texto em popovers                     |
| `--popover-border`     | 0 0% 90%        | `border-popover-border` | Borda de popovers                      |
| `--primary`            | 212 52% 32%     | `bg-primary`, `text-primary` | Botões primários, ícones, links   |
| `--primary-foreground` | 0 0% 98%        | `text-primary-foreground`| Texto sobre botões primários          |
| `--secondary`          | 0 0% 90%        | `bg-secondary`          | Badges, botões secundários             |
| `--secondary-foreground`| 220 15% 15%    | `text-secondary-foreground`| Texto em elementos secundários      |
| `--muted`              | 0 0% 92%        | `bg-muted`              | Fundos sutis (seções alternadas usam `bg-muted/30`) |
| `--muted-foreground`   | 220 10% 35%     | `text-muted-foreground` | Parágrafos descritivos, texto secundário |
| `--accent`             | 212 15% 94%     | `bg-accent`             | Destaques sutis com tom azulado        |
| `--accent-foreground`  | 220 15% 15%     | `text-accent-foreground`| Texto sobre fundo accent               |
| `--destructive`        | 0 72% 38%       | `bg-destructive`        | Erros e alertas (toast variant)        |
| `--destructive-foreground`| 0 0% 98%     | `text-destructive-foreground`| Texto sobre erros                 |
| `--input`              | 220 15% 60%     | `border-input`          | Borda de inputs                        |
| `--ring`               | 212 52% 42%     | `ring-ring`             | Focus ring de acessibilidade           |

### 2.3 Modo Escuro — Tokens Principais (`.dark` em `index.css`)

| Token CSS              | HSL             | Diferença vs. Light Mode               |
|------------------------|-----------------|----------------------------------------|
| `--background`         | 220 15% 8%      | Fundo escuro profundo                  |
| `--foreground`         | 0 0% 95%        | Texto claro                            |
| `--card`               | 220 15% 10%     | Card ligeiramente mais claro que fundo |
| `--card-border`        | 220 10% 14%     | Borda sutil                            |
| `--muted`              | 220 10% 16%     | Fundo sutil elevado                    |
| `--muted-foreground`   | 220 8% 65%      | Texto secundário mais claro            |
| `--primary`            | 212 52% 32%     | Mesma cor que light mode               |
| `--secondary`          | 220 10% 18%     | Botões secundários escuros             |
| `--accent`             | 212 12% 16%     | Destaque sutil azulado                 |
| `--border`             | 220 10% 18%     | Bordas sutis                           |
| `--input`              | 220 15% 35%     | Borda de inputs mais clara             |

### 2.4 Cores Especiais do Hero (`Hero.tsx`)

O hero usa sobreposição com gradiente sobre a imagem de fundo:

```css
background: linear-gradient(to right, #222839/90%, #222839/70%, #222839/40%)
```

Classes Tailwind aplicadas:
```
bg-gradient-to-r from-[#222839]/90 via-[#222839]/70 to-[#222839]/40
```

| Elemento               | Classe                                           |
|------------------------|---------------------------------------------------|
| Texto headline         | `text-white`                                      |
| Subtexto               | `text-white/70`                                   |
| Trust signals          | `text-white/50`                                   |
| Botão primário         | `bg-white text-[#222839] border-white/20`         |
| Botão secundário       | `border-white/30 text-white bg-white/5 backdrop-blur-sm` |

### 2.5 Cores do Footer (`Footer.tsx`)

O footer inverte o esquema padrão:

| Elemento        | Classe                    | Efeito                         |
|-----------------|---------------------------|--------------------------------|
| Fundo           | `bg-foreground`           | Usa a cor Brand 900 (#222839)  |
| Texto base      | `text-background`         | Branco                         |
| Texto secundário| `opacity-60`              | Branco com 60% de opacidade    |
| Texto terciário | `opacity-40`              | Branco com 40% de opacidade    |
| Separador       | `opacity-10`              | Linha quase invisível          |

### 2.6 Sistema de Elevação (`index.css`)

| Token            | Light Mode           | Dark Mode             | Uso                          |
|------------------|----------------------|-----------------------|-------------------------------|
| `--elevate-1`    | `rgba(0,0,0, .03)`  | `rgba(255,255,255, .04)` | Hover sutil (hover-elevate) |
| `--elevate-2`    | `rgba(0,0,0, .08)`  | `rgba(255,255,255, .09)` | Press/toggle (active-elevate-2) |

---

## 3. Tipografia

### 3.1 Fonte Principal

Definida em `index.css` como `--font-sans` e referenciada em `tailwind.config.ts` via `fontFamily.sans`:

```
Font: Inter
Fallback: sans-serif
Declaração CSS: --font-sans: 'Inter', sans-serif
```

Fontes adicionais declaradas (não utilizadas no site):
- `--font-serif: Georgia, serif`
- `--font-mono: Menlo, monospace`

### 3.2 Escala Tipográfica (verificada nos componentes)

| Elemento                     | Arquivo de referência     | Mobile               | Desktop              | Peso         | Extras            |
|------------------------------|---------------------------|----------------------|----------------------|--------------|-------------------|
| H1 hero                     | `Hero.tsx`                | `text-3xl` (1.875rem)| `text-5xl` (3rem)    | `font-semibold` | `tracking-tight leading-tight` |
| H1 páginas internas          | `conceito.tsx`, `contato.tsx` | `text-4xl` (2.25rem) | `text-5xl` (3rem) | `font-semibold` | `tracking-tight leading-tight` |
| H2 seções                   | `Precision.tsx`, etc.     | `text-3xl` (1.875rem)| `text-4xl` (2.25rem) | `font-semibold` | `tracking-tight` |
| H3 cards / steps             | `Pillars.tsx`, `Process.tsx` | `text-lg` (1.125rem) | `text-lg` (1.125rem) | `font-semibold` | — |
| H4 subtítulos footer         | `Footer.tsx`              | `text-sm` (0.875rem) | `text-sm` (0.875rem) | `font-semibold` | `opacity-80` |
| Body parágrafos              | todos                     | `text-base` (1rem)   | `text-base` (1rem)   | normal (400) | `leading-7`      |
| Body small (cards)           | `Pillars.tsx`, `Collection.tsx` | `text-sm` (0.875rem) | `text-sm` (0.875rem) | normal (400) | `leading-6` |
| Step number                  | `Process.tsx`             | `text-xs` (0.75rem)  | `text-xs` (0.75rem)  | `font-semibold` | `tracking-wider uppercase text-primary/60` |
| Evidência em cards           | `Pillars.tsx`             | `text-xs` (0.75rem)  | `text-xs` (0.75rem)  | `font-medium`  | `text-primary/80` |
| Tagline de produto           | `Collection.tsx`          | `text-sm` (0.875rem) | `text-sm` (0.875rem) | `font-medium`  | `text-primary`    |
| Nav links                   | `Header.tsx`              | `text-sm` (0.875rem) | `text-sm` (0.875rem) | `font-medium`  | —                 |
| Logo                         | `Header.tsx`              | `text-xl` (1.25rem)  | `text-xl` (1.25rem)  | `font-semibold` | `tracking-tight` |
| Copyright                    | `Footer.tsx`              | `text-xs` (0.75rem)  | `text-xs` (0.75rem)  | normal (400) | `opacity-40`      |

### 3.3 Hierarquia de Cor do Texto

| Nível      | Classe Tailwind           | Onde é aplicado                          |
|------------|---------------------------|------------------------------------------|
| Primário   | `text-foreground`         | Headlines, títulos, nomes de produto     |
| Secundário | `text-muted-foreground`   | Parágrafos descritivos, subtextos        |
| Destaque   | `text-primary`            | Taglines de produto, ícones              |
| Destaque sutil | `text-primary/80`     | Evidências em cards de pilar             |
| Destaque fraco | `text-primary/60`     | Numeração de steps do processo           |

---

## 4. Espaçamento

### 4.1 Layout Geral (verificado em todos os componentes de seção)

| Propriedade          | Classe Tailwind             | Valor                        |
|----------------------|-----------------------------|-------------------------------|
| Largura máxima       | `max-w-6xl`                 | 72rem (1152px)                |
| Padding lateral      | `px-6`                      | 1.5rem (24px)                 |
| Unidade base         | `--spacing`                 | 0.25rem (4px)                 |

### 4.2 Padding Vertical de Seções (verificado por componente)

| Seção                | Mobile       | Desktop       | Arquivo                |
|----------------------|--------------|---------------|------------------------|
| Hero                 | `py-24` (6rem)| `py-32` (8rem)| `Hero.tsx`             |
| Precision            | `py-16` (4rem)| `py-24` (6rem)| `Precision.tsx`        |
| Pillars              | `py-16` (4rem)| `py-24` (6rem)| `Pillars.tsx`          |
| Process              | `py-16` (4rem)| `py-24` (6rem)| `Process.tsx`          |
| Collection           | `py-16` (4rem)| `py-24` (6rem)| `Collection.tsx`       |
| Arrival              | `py-16` (4rem)| `py-24` (6rem)| `Arrival.tsx`          |
| FinalCTA             | `py-16` (4rem)| `py-24` (6rem)| `FinalCTA.tsx`         |
| Footer               | `py-16` (4rem)| `py-16` (4rem)| `Footer.tsx`           |
| Conceito (página)    | `py-16` (4rem)| `py-24` (6rem)| `conceito.tsx`         |
| Contato (página)     | `py-16` (4rem)| `py-24` (6rem)| `contato.tsx`          |

### 4.3 Espaçamentos Internos (verificados nos componentes)

| Relação                         | Classe     | Valor      | Onde                                  |
|---------------------------------|------------|------------|---------------------------------------|
| Headline → parágrafo (seções)   | `mt-6`     | 1.5rem     | Hero, Precision, Process, Arrival, Contato, Conceito |
| Headline → subtítulo (seções centradas) | `mt-4` | 1rem   | Pillars, Collection, Precision (2o parágrafo) |
| Parágrafo → botões              | `mt-10`    | 2.5rem     | Hero, FinalCTA, Conceito              |
| Parágrafo → imagem              | `mt-8`     | 2rem       | Process (imagem da coluna esq.)       |
| Título seção → grid de cards    | `mb-12/16` | 3rem/4rem  | Pillars, Collection                   |
| Gap entre cards (grid 3-col)    | `gap-6/8`  | 1.5rem/2rem| Pillars, Collection                   |
| Gap 2 colunas                   | `gap-10/16`| 2.5rem/4rem| Precision, Process, Arrival, Contato  |
| Gap steps do processo           | `gap-8`    | 2rem       | Process.tsx                           |
| Gap itens de step               | `gap-5`    | 1.25rem    | Process.tsx                           |
| Gap itens de nav desktop        | `gap-8`    | 2rem       | Header.tsx                            |
| Gap entre botões                | `gap-4`    | 1rem       | Hero, FinalCTA                        |
| Gap formulário campos           | `gap-5`    | 1.25rem    | contato.tsx (no `<form>`)             |
| Padding card conteúdo           | `p-5`      | 1.25rem    | Collection.tsx                        |
| Padding card formulário         | `pt-6`     | 1.5rem     | contato.tsx (`<CardContent>`)         |
| Gap bullet list                 | `gap-3`    | 0.75rem    | Arrival.tsx, Footer.tsx               |

---

## 5. Bordas e Arredondamento

Definido em `tailwind.config.ts`:

| Token        | Valor              | Pixels |
|--------------|--------------------|--------|
| `--radius`   | `.5rem`            | 8px    |
| `rounded-lg` | `.5625rem`         | 9px    |
| `rounded-md` | `.375rem`          | 6px    |
| `rounded-sm` | `.1875rem`         | 3px    |

Uso no site:
- Cards: arredondamento padrão do componente shadcn (usa `--radius`)
- Imagens: `rounded-md` (Precision, Process, Arrival)
- Containers de ícone: `rounded-md` (Pillars, Process, Contato)
- Bullet points da Arrival: `rounded-full` (circulares, 1.5x1.5)

---

## 6. Componentes Visuais

### 6.1 Header (`Header.tsx`)

| Propriedade       | Valor                                    |
|--------------------|------------------------------------------|
| Posição            | `sticky top-0 z-[9999]`                 |
| Fundo              | `bg-background/80 backdrop-blur-md`     |
| Borda               | `border-b border-border/50`             |
| Altura             | `h-16` (4rem)                            |
| Container          | `max-w-6xl mx-auto px-6`                |
| Logo               | "Modo" em `text-foreground` + "3D" em `text-primary` |
| CTA desktop        | `<Button size="default">` — "Conheça a Coleção" |
| Menu mobile        | `<Sheet>` com `<SheetContent side="right" className="w-72 pt-12">` |
| Trigger mobile     | `<Button size="icon" variant="ghost">` com ícone `Menu` |

### 6.2 Cards de Produto (`Collection.tsx`)

| Propriedade         | Valor                                           |
|----------------------|--------------------------------------------------|
| Componente           | shadcn `<Card>`                                 |
| Container imagem     | `overflow-hidden rounded-t-md`                  |
| Proporção imagem     | `aspect-[4/3] object-cover`                     |
| Hover imagem         | `scale-[1.02]` com `transition-transform duration-300` |
| Badge (tag)          | `<Badge variant="secondary">` em `absolute top-3 left-3` |
| Padding conteúdo     | `p-5` (1.25rem)                                 |
| Nome produto         | `text-lg font-semibold text-foreground`          |
| Tagline              | `text-sm font-medium text-primary mt-1`          |
| Descrição            | `text-sm leading-6 text-muted-foreground`        |
| Botão ação           | `<Button variant="ghost" className="mt-4 w-fit px-0 text-primary gap-2">` com ícone `ArrowRight` |

### 6.3 Cards de Pilar (`Pillars.tsx`)

| Propriedade        | Valor                                           |
|---------------------|--------------------------------------------------|
| Componente          | shadcn `<Card>` com `h-full`                    |
| Container ícone     | `w-10 h-10 rounded-md bg-primary/10`            |
| Ícone               | `h-5 w-5 text-primary`                          |
| Título              | `text-lg font-semibold text-foreground`          |
| Descrição           | `text-sm leading-6 text-muted-foreground`        |
| Evidência           | `text-xs font-medium text-primary/80 mt-3`      |

### 6.4 Steps do Processo (`Process.tsx`)

| Propriedade        | Valor                                           |
|---------------------|--------------------------------------------------|
| Layout              | Flex row com `gap-5`                            |
| Container ícone     | `w-12 h-12 rounded-md bg-primary/10`            |
| Ícone               | `h-5 w-5 text-primary`                          |
| Número              | `text-xs font-semibold text-primary/60 tracking-wider uppercase` |
| Título              | `text-lg font-semibold text-foreground mt-1`     |
| Descrição           | `text-sm leading-6 text-muted-foreground mt-2`  |
| Coluna esquerda     | `md:sticky md:top-24` (fixa durante scroll)     |

### 6.5 Formulário de Contato (`contato.tsx`)

| Propriedade        | Valor                                           |
|---------------------|--------------------------------------------------|
| Container           | shadcn `<Card>` com `<CardContent className="pt-6">` |
| Sistema de form     | shadcn `<Form>` + `<FormField>` + `<FormControl>` |
| Validação           | `zodResolver` com `insertContactSchema.extend()` |
| Campos              | `<Input>` (nome, email) + `<Textarea className="resize-none min-h-[120px]">` (context) |
| Gap entre campos    | `gap-5` (1.25rem) no `<form className="flex flex-col gap-5">` |
| Botão submit        | `<Button type="submit" size="lg" className="gap-2">` com ícone `Send` |
| Estado loading      | `disabled={mutation.isPending}`, texto muda para "Enviando..." |
| Labels              | "Nome", "E-mail", "Como podemos ajudar?"        |

### 6.6 Bullet List (`Arrival.tsx`)

| Propriedade        | Valor                                           |
|---------------------|--------------------------------------------------|
| Marcador            | `w-1.5 h-1.5 rounded-full bg-primary mt-2`     |
| Texto               | `text-sm leading-6 text-muted-foreground`       |
| Gap entre itens     | `gap-3` (0.75rem)                               |

### 6.7 Botões — Variantes Utilizadas

| Variante / Contexto        | Props / Classes                                   | Onde                   |
|-----------------------------|---------------------------------------------------|------------------------|
| Primário padrão             | `<Button size="default">`                         | Header CTA             |
| Primário grande             | `<Button size="lg">`                              | FinalCTA, Contato      |
| Outline grande              | `<Button variant="outline" size="lg">`            | FinalCTA               |
| Ghost sem padding           | `<Button variant="ghost" className="px-0 text-primary">` | Collection cards |
| Icon ghost                  | `<Button size="icon" variant="ghost">`            | Header mobile          |
| Hero primário (custom)      | `<Button size="lg" className="bg-white text-[#222839] border-white/20">` | Hero.tsx    |
| Hero secundário (custom)    | `<Button variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm bg-white/5">` | Hero.tsx |

---

## 7. Animações e Transições

### 7.1 Framer Motion — Padrões de Entrada (verificados por componente)

| Padrão                | Configuração                            | Arquivos                       |
|-----------------------|-----------------------------------------|---------------------------------|
| Fade-in + slide up    | `opacity: 0→1, y: 20→0`                | Hero, Conceito, Contato         |
| Fade-in + slide up sutil | `opacity: 0→1, y: 12→0`             | Pillars header, FinalCTA, Process header |
| Fade-in + slide up (cards) | `opacity: 0→1, y: 16→0`            | Pillars items, Collection items, Process steps |
| Fade-in lateral esq.  | `opacity: 0→1, x: -20→0`              | Precision (imagem), Arrival (texto) |
| Fade-in lateral dir.  | `opacity: 0→1, x: 20→0`               | Precision (texto), Arrival (imagem) |

### 7.2 Timing

| Contexto             | Duração  | Delay   | Stagger          | Arquivo           |
|----------------------|----------|---------|-------------------|-------------------|
| Hero                 | 0.6s     | —       | —                 | Hero.tsx          |
| Seções (texto)       | 0.5s     | —       | —                 | Precision, Arrival|
| Seções (com delay)   | 0.5s     | 0.1s    | —                 | Precision, Arrival, Contato |
| Headers de seção     | 0.45s    | —       | —                 | Pillars, FinalCTA, Process |
| Cards / Steps        | 0.45s    | —       | 0.12s (Pillars, Collection), 0.15s (Process) | — |
| Easing               | `easeOut`| —       | —                 | Todos             |
| Viewport trigger     | `once: true` | — | —                 | Todos (exceto Hero que usa `animate`) |

### 7.3 Animação Contínua

| Elemento      | Tipo                | Configuração                           | Arquivo   |
|---------------|---------------------|-----------------------------------------|-----------|
| Seta do hero  | Bounce vertical     | `y: [0, 8, 0]`, duração 2s, repeat: Infinity, easeInOut | Hero.tsx |

### 7.4 Transições CSS

| Elemento            | Classe Tailwind                          | Arquivo        |
|---------------------|------------------------------------------|----------------|
| Links de navegação  | `transition-colors duration-150`         | Header.tsx     |
| Imagens de produto  | `transition-transform duration-300`      | Collection.tsx |

---

## 8. Grids e Layouts Responsivos

### 8.1 Breakpoint Principal

O site usa `md:` (768px) como breakpoint principal. Mobile-first por padrão.

### 8.2 Grids por Seção (verificados nos componentes)

| Seção              | Mobile          | Desktop                       | Arquivo          |
|--------------------|-----------------|--------------------------------|------------------|
| Precision          | 1 coluna        | 2 colunas (`md:grid-cols-2`)  | Precision.tsx    |
| Pillars            | 1 coluna        | 3 colunas (`md:grid-cols-3`)  | Pillars.tsx      |
| Process            | 1 coluna        | 2 colunas (`md:grid-cols-2`)  | Process.tsx      |
| Collection         | 1 coluna        | 3 colunas (`md:grid-cols-3`)  | Collection.tsx   |
| Arrival            | 1 coluna        | 2 colunas (`md:grid-cols-2`)  | Arrival.tsx      |
| Contato            | 1 coluna        | 2 colunas (`md:grid-cols-2`)  | contato.tsx      |
| Footer             | 1 coluna        | 3 colunas (`md:grid-cols-3`)  | Footer.tsx       |
| Conceito (valores) | 1 coluna        | 3 colunas (`md:grid-cols-3`)  | conceito.tsx     |

### 8.3 Alternância de Fundo entre Seções

As seções alternam entre dois fundos para criar ritmo visual:

| Fundo               | Classe           | Seções                                |
|----------------------|------------------|---------------------------------------|
| Branco               | `bg-background`  | Precision, Process, Arrival, Conceito, Contato |
| Cinza sutil          | `bg-muted/30`    | Pillars, Collection, FinalCTA         |

---

## 9. Imagens

### 9.1 Inventário Completo (verificado nos componentes)

| Arquivo                        | Uso                              | Componente        | Classe de exibição             |
|--------------------------------|----------------------------------|--------------------|-------------------------------|
| `/images/hero-product.png`     | Hero fundo (full-bleed)          | Hero.tsx           | `w-full h-full object-cover`  |
| `/images/texture-detail.png`   | Detalhe de acabamento            | Precision.tsx      | `w-full rounded-md`           |
| `/images/haptic-experience.png`| Interação tátil com produto      | Process.tsx        | `w-full rounded-md`           |
| `/images/packaging.png`        | Embalagem do produto             | Arrival.tsx        | `w-full rounded-md`           |
| `/images/product-lifestyle.png`| Card "Organizador de Mesa"       | Collection.tsx     | `aspect-[4/3] object-cover`   |
| `/images/product-stand.png`    | Card "Suporte Celular"           | Collection.tsx     | `aspect-[4/3] object-cover`   |
| `/images/product-cable.png`    | Card "Organizador de Cabos"      | Collection.tsx     | `aspect-[4/3] object-cover`   |
| `/images/collection.png`       | Disponível (não referenciado)    | —                  | —                             |

### 9.2 Padrões de Tratamento

- **Cards de produto**: `aspect-[4/3] object-cover` com hover `scale-[1.02]`
- **Hero**: `w-full h-full object-cover` com gradient overlay escuro
- **Imagens de seção**: `w-full rounded-md` sem hover
- **Alt text**: sempre descritivo em português brasileiro

---

## 10. Iconografia

### Biblioteca: `lucide-react`

### Inventário Completo (verificado por componente)

| Ícone           | Componente       | Contexto                              |
|-----------------|------------------|----------------------------------------|
| `ArrowDown`     | Hero.tsx         | Indicador de scroll (bounce animation)|
| `ArrowRight`    | Collection.tsx   | "Ver detalhes" nos cards de produto   |
| `Minimize2`     | Pillars.tsx      | Pilar "Reduz fricção no uso diário"   |
| `LayoutGrid`    | Pillars.tsx      | Pilar "Cria ordem sem esforço"        |
| `Eye`           | Pillars.tsx      | Pilar "Integra-se ao seu espaço"      |
| `Lightbulb`     | Process.tsx      | Step 01 "Entender a necessidade real" |
| `Puzzle`        | Process.tsx      | Step 02 "Pensar a solução inteligente"|
| `Wrench`        | Process.tsx      | Step 03 "Executar com cuidado"        |
| `Mail`          | contato.tsx      | Informação de contato (e-mail)        |
| `MessageSquare` | contato.tsx      | Tempo de resposta                     |
| `Send`          | contato.tsx      | Botão de envio do formulário          |
| `Menu`          | Header.tsx       | Menu mobile (hamburger)               |
| `Target`        | conceito.tsx     | Valor "Intenção clara"                |
| `Users`         | conceito.tsx     | Valor "Pensado para pessoas"          |
| `Layers`        | conceito.tsx     | Valor "Processo honesto"              |

### Padrões de Tamanho

| Contexto            | Tamanho do ícone | Container                                |
|---------------------|------------------|-------------------------------------------|
| Pilares             | `h-5 w-5`       | `w-10 h-10 rounded-md bg-primary/10`     |
| Steps do processo   | `h-5 w-5`       | `w-12 h-12 rounded-md bg-primary/10`     |
| Info de contato     | `h-5 w-5`       | `w-10 h-10 rounded-md bg-primary/10`     |
| Dentro de botões    | `h-4 w-4`       | —                                         |
| Seta do hero        | `h-5 w-5`       | —                                         |
| Menu mobile         | `h-5 w-5`       | `<Button size="icon">`                    |

---

## 11. Tom de Voz e Copywriting

### 11.1 Princípios

| Princípio       | Descrição                                                    |
|-----------------|---------------------------------------------------------------|
| Calmo           | Sem exclamações, sem urgência artificial                     |
| Preciso         | Frases curtas e diretas, sem rodeios                         |
| Funcional       | Fala sobre o que o produto resolve, não sobre specs técnicas |
| Honesto         | Sem superlativos ("o melhor", "revolucionário", "incrível")  |
| Pessoal         | Fala como uma pessoa, não como uma corporação                |

### 11.2 Exemplos Reais do Site

**Headlines (curtas, afirmativas):**
- "Design aqui não é estética. É estratégia pra facilitar vida e criar conexão."
- "Não vendemos plástico. Vendemos precisão."
- "A forma segue a função."
- "Pensado para pessoas. Não para prateleiras."
- "O ritual de chegada."
- "Design Essencial. Materializado."
- "Vamos conversar."
- "Design é estratégia."

**Taglines de produto (diretas, funcionais):**
- "Ordem sem pensar."
- "O ângulo certo, sem ajuste."
- "Cabos sob controle."

**Parágrafos (tom pessoal, sem jargão):**
- "Conte o que você precisa resolver. Pode ser uma dúvida sobre um produto, uma ideia de uso ou algo que você gostaria que existisse. A gente responde de forma direta e pessoal."
- "Cada detalhe é pensado pra eliminar pequenos incômodos. Sem improvisação, sem gambiarra — só o que funciona de verdade na rotina."
- "Nosso processo começa onde importa: na vida de quem vai usar."

**Microcopy (confiança discreta):**
- "Produção sob medida"
- "Revisão em cada peça"
- "Envio para todo o Brasil"
- "Se não atender à sua necessidade, a gente resolve junto."
- "Suporte direto e humanizado"

### 11.3 Palavras Proibidas

Evitar sempre: incrível, revolucionário, o melhor, exclusivo, luxo, premium (como argumento de venda), inovador, disruptivo, cutting-edge, state-of-the-art, perfeito, único.

---

## 12. SEO

### Implementação (`client/src/components/SEO.tsx`)

O componente `<SEO>` usa `useEffect` para definir dinamicamente:

```
document.title = "{Página} — Modo 3D"
```

Meta tags gerenciadas:
- `<meta name="description" content="...">`
- `<meta property="og:title" content="...">`
- `<meta property="og:description" content="...">`
- `<meta property="og:type" content="website">`
- `<meta property="og:url" content="{origin}{path}">`
- `<meta property="og:image" content="{origin}/images/hero-product.png">`
- `<meta property="og:locale" content="pt_BR">`

### Títulos por Página

| Página   | Title                          | Arquivo      |
|----------|--------------------------------|--------------|
| Home     | Design Essencial — Modo 3D     | home.tsx     |
| Conceito | Conceito — Modo 3D             | conceito.tsx |
| Contato  | Contato — Modo 3D              | contato.tsx  |

---

## 13. Tecnologias e Dependências Visuais

| Tecnologia          | Uso no site                           |
|---------------------|----------------------------------------|
| React + Vite        | SPA com hot reload                    |
| Tailwind CSS        | Sistema de design via utility classes |
| shadcn/ui           | Card, Button, Badge, Form, Sheet, Input, Textarea, Separator, Tooltip |
| Framer Motion       | Animações de entrada e scroll-triggered |
| Lucide React        | Iconografia (15 ícones utilizados)    |
| Inter (Google Fonts)| Tipografia única do site              |
| wouter              | Roteamento SPA (/, /conceito, /contato) |
| react-hook-form     | Gerenciamento do formulário de contato |
| zod + drizzle-zod   | Validação de schema do formulário     |
| @tanstack/react-query | Mutations do formulário             |

---

*Última atualização: 15 de fevereiro de 2026*
*Fonte: código-fonte do repositório Modo 3D*
