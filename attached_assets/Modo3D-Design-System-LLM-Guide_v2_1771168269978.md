# Modo3D — Design System & Marketing UI Guide (for LLMs)

**Purpose:** guide Claude/Codex/Gemini to build the **Modo3D marketing website + product landing pages** focused on conversion and sales, using **Next.js + Tailwind CSS + shadcn/ui**.

---

## 0) Execution rules (mandatory)

1. **Use shadcn/ui as the foundation** (Button, Card, Badge, Tabs, Accordion, Dialog, Sheet, Toast, Tooltip, Separator, Input, Textarea, Select).
2. **No custom CSS** beyond Tailwind utilities, except global design tokens (CSS variables) and edge cases.
3. **Componentize by section:** each landing-page section becomes a component (`/components/sections/...`).
4. **Consistency > creativity:** minimalist layouts, generous whitespace, clean typography.
5. **Direct copy:** no hype. Always **benefit + proof + clear instruction**.

---

## 1) Brand essence (to drive UI and copy)

- **Brand:** Modo3D  
- **Tagline:** “Essential Design” *(from the logo: “Design Essencial”)*  
- **Personality:** calm, precise, minimalist, confident.  
- **Promise:** premium aesthetics + real utility + a consistent experience from click to daily use.  
- **Voice (copy):** short, objective sentences. Avoid vague superlatives (“amazing”, “perfect”).

### Recommended vocabulary
**Use:** precision, finish, essential, consistent, made-to-fit, built to last.  
**Avoid:** “cheap”, “insane deal”, “best ever”, exaggerated claims.

---

## 2) Design tokens (single source of truth)

> Tokens extracted from the logo to keep visual consistency.

### 2.1 Color palette

**Brand**
- `--brand-900` (strong text / headings): `#222839`
- `--brand-500` (accent / CTA / links): `#3D6DA9`

**Neutrals**
- `--neutral-50` (base background): `#FFFFFF`
- `--neutral-100` (subtle surface): `#F7F8FA` *(default for long-page surfaces)*
- `--neutral-200` (light border): `#DDE0E5`
- `--neutral-500` (secondary text): `#7B7F8A`
- `--neutral-700` (icons / mid text): `#494D5C`

**Feedback**
- Success / Warning / Destructive: use shadcn defaults (e.g., emerald/amber/red) to avoid palette drift.

> Rule: **do not invent new brand colors**. Use neutrals + brand-500/brand-900.

### 2.2 Typography

- Recommended font: **Inter** (fallback: system-ui)
- Hierarchy (Tailwind):
  - H1: `text-4xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--brand-900))]`
  - H2: `text-3xl md:text-4xl font-semibold tracking-tight text-[rgb(var(--brand-900))]`
  - H3: `text-xl md:text-2xl font-semibold text-[rgb(var(--brand-900))]`
  - Body: `text-base leading-7 text-[rgb(var(--neutral-700))]`
  - Small: `text-sm leading-6 text-[rgb(var(--neutral-500))]`

### 2.3 Spacing, radius, shadow, motion

- Container: `max-w-6xl mx-auto px-6`
- Sections: `py-16 md:py-24`
- Gaps: `gap-6 md:gap-10`
- Radius: shadcn `--radius`, prefer **8–12px**
- Shadow: minimal (e.g., `shadow-sm` on cards)
- Motion: subtle only (150–220ms), `ease-out`. Avoid flashy animations.

---

## 3) Technical implementation (Next + Tailwind + shadcn)

### 3.1 Suggested folder structure

```
/app
  /(marketing)
    page.tsx                  // home
    /product/[slug]/page.tsx  // product landing
    /about/page.tsx
    /contact/page.tsx
/components
  /sections
    Hero.tsx
    SocialProof.tsx
    Benefits.tsx
    ProductGallery.tsx
    Specs.tsx
    HowItWorks.tsx
    FAQ.tsx
    FinalCTA.tsx
  /ui                          // shadcn components
/lib
  seo.ts
  analytics.ts
  products.ts
```

### 3.2 CSS variables (globals.css)

Create tokens in `:root` and map them into Tailwind/shadcn usage.

Minimum example:

```css
:root {
  --brand-900: 34 40 57;      /* #222839 */
  --brand-500: 61 109 169;    /* #3D6DA9 */
  --neutral-200: 221 224 229; /* #DDE0E5 */
  --neutral-700: 73 77 92;    /* #494D5C */
  --neutral-500: 123 127 138; /* #7B7F8A */
}
```

### 3.3 Tailwind usage rules

- Prefer utility classes.
- Use `text-[rgb(var(--brand-900))]`, `bg-[rgb(var(--brand-500))]` for brand colors.
- Light borders: `border border-[rgb(var(--neutral-200))]`.
- Links: `text-[rgb(var(--brand-500))] underline-offset-4 hover:underline`.

---

## 4) Layout system (page patterns)

### 4.1 Grid and composition

- Home/landings: stacked sections, comfortable max width.
- Cards: always `Card` from shadcn, light border + minimal shadow.
- Images: neutral background, close-ups of finish, include scale/dimensions when relevant.

### 4.2 Header and navigation

- Optional sticky header (if used: subtle blur).
- Header CTA: “View products” or “Buy now” (context dependent).

### 4.3 Footer

- Minimal: brand, contact, policies, socials.
- Always include trust microcopy (shipping, support, returns) aligned with real policy.

---

## 5) Core components (UI + behavior)

### 5.1 Button (shadcn)

**Required variants**
- Primary CTA: brand-500 background, white text
- Secondary: outline with `neutral-200` border
- Ghost: secondary actions (e.g., “See details”)

**Rules**
- 1 primary CTA per section (max 2 on screen).
- CTA microcopy should be action-oriented:
  - “Buy now”
  - “See sizes & versions”
  - “Talk to support”

### 5.2 Card

Use for: benefits, testimonials, specs, kits.
- `CardHeader` with short title
- `CardContent` with objective bullets (max 3–5)

### 5.3 Accordion (FAQ)

- 6–10 questions max per landing.
- Answers should be short and direct. Link to a full manual when needed.

### 5.4 Tabs (Specs)

Use when the product has variations (size/color/kit).
Each tab must include: dimensions, material, compatibility, what’s in the box.

### 5.5 Forms (conversion)

- Lead capture: **name + email** (minimum).
- Purchases: prefer external checkout where applicable.
- Errors: short, human, helpful.

---

## 6) Copy system (ready-to-use templates)

### 6.1 Hero (template)

**Headline:** outcome + essential design  
**Subhead:** how it delivers + brief proof  
**Bullets:** 3 bullets (material / finish / use)  
**CTA:** Buy / View product  
**Trust element:** rating, delivery count, feedback, or “made-to-order with review”

Example (customize per product):
- H1: “Organization that looks premium.”
- Sub: “Consistent finish, made-to-fit, ready for daily use.”
- Bullets:
  - “Secure fit and alignment”
  - “Clean finish, no improvisation”
  - “Quick-start guide included”

### 6.2 Benefits (3–5)

Format: **benefit** + **evidence**
- “More order with less bulk — modular and scalable”
- “Clean look — minimalist lines and typography”
- “Low friction — clear instructions and easy replacement”

### 6.3 “What’s in the box”

Always include: item, accessories, guide, variations.

### 6.4 Risk reversal (trust)

- “If it doesn’t fit your use case, we’ll help you sort it out.”
*(avoid aggressive promises; align with real policy)*

---

## 7) Product landing page (high-conversion structure)

**Recommended order (do not reorder without a reason):**
1. Hero (image + CTA)
2. Social proof (reviews / numbers / proof)
3. Benefits (3–5 cards)
4. Gallery (details + real use)
5. Specs (tabs by variation)
6. How it works (3 steps: choose → produce → use)
7. FAQ (accordion)
8. Final CTA (summary + CTA + trust)

### 7.1 “How it works” (3 steps)

- Choose version (size/color/kit)
- Production + review
- Shipping + essential guide

---

## 8) Accessibility & quality (mandatory)

- High contrast for text (brand-900 on light backgrounds).
- Buttons and controls with comfortable sizing.
- Inputs with visible labels (do not rely only on placeholders).
- Images with useful `alt` text.
- Keyboard navigation supported in shadcn components.

---

## 9) SEO & performance (production minimum)

- Per-page `metadata` (Next App Router).
- Product-specific title and description.
- OpenGraph image per product.
- Use `next/image` for all images.
- Avoid unnecessary JS on marketing pages.

---

## 10) Instrumentation (conversion events)

Define and emit events:
- `view_product`
- `click_primary_cta`
- `start_checkout`
- `lead_submit`
- `faq_expand`

> Prefer a small wrapper in `/lib/analytics.ts` to plug GA4/Meta later.

---

## 11) Final checklist (before publishing)

- [ ] 1 primary CTA per section
- [ ] Direct copy (no hype)
- [ ] Visual proof (finish close-ups + dimensions)
- [ ] FAQ covers material, use, shipping, compatibility
- [ ] Performance OK (optimized images)
- [ ] Analytics events wired

---



---

## 13) Baseline consistency with **modo3d.com.br** (canonical brand site)

This section encodes the *existing* site’s core messaging patterns so LLMs keep the same tone, hierarchy, and UX decisions when generating new pages.

### 13.1 Canonical headline patterns (keep the rhythm)

Use **short, sentence-like headings** with a period, often split into two lines:

- Pattern A (two-part manifesto):
  - `Essential Design.`  
    `Materialized.`
- Pattern B (contrast statement):
  - `We don’t sell plastic.`  
    `We sell precision.`
- Pattern C (principle statement):
  - `Form follows function.`
- Pattern D (experience statement):
  - `The arrival ritual.`

**Implementation notes**
- Prefer `<br />` line breaks in H1/H2 for controlled rhythm.
- Keep hero text width narrow: `max-w-2xl` (or less) for a “manifesto” feel.
- Use generous vertical spacing and avoid decorative elements.

### 13.2 Core narrative pillars (must appear across marketing)

1. **Precision over material**  
   Reframe “3D print” as a tool; the value is the finish and consistency.

2. **Haptic experience (touch-first)**  
   Position the product around *feel*: smooth surfaces, ergonomic contact points, refined edges.

3. **Zero-layer finish (finish system)**  
   A named finish standard that implies continuity, smoothness, and premium tactility.

4. **Integrated design (quiet objects)**  
   “Doesn’t shout for attention; completes your space.”  
   Visually: neutral scenes, minimal props, clean lines.

5. **Structural engineering (internal architecture)**  
   Beauty supported by robust internal structure—use diagrams only when they reinforce trust.

6. **Packaging as chapter one (“arrival ritual”)**  
   Packaging is part of the product narrative: rigid boxes, precise inserts, sustainable materials.

### 13.3 UX composition: minimal navigation + single primary CTA

**Top navigation (marketing):**
- Concept
- Products
- Contact

**Hero CTA:**
- Primary: “Explore the collection” (PT: “Conheça a Coleção”)
- Behavior: scroll/anchor to the product collection section

**Rules**
- Avoid multi-step funnels on the institutional site. Keep it calm and direct.
- Use 1 dominant CTA per viewport.
- Prefer “collection” framing (curated) instead of “catalog” framing (commodity).

### 13.4 Section templates aligned to the canonical site

#### A) Manifesto hero
- H1 (two lines, periods)
- Supporting paragraph: 2–3 short sentences
- Single CTA (scroll)

#### B) “Not plastic. Precision.”
- Short intro about the market misconception (“3D = rough prototypes”)
- Reframe: printer is the tool; the art is the finish
- One concrete proof point (e.g., manual post-processing / review process)

#### C) “Form follows function” + 3 pillars
Use 3 micro-sections (or cards), each with:
- Title (H3)
- 1 sentence outcome
- Optional 1 bullet evidence

Suggested trio (canonical):
- Zero-layer finish
- Integrated design
- Structural engineering

#### D) “Arrival ritual” (packaging)
- 1–2 short paragraphs, no hype
- 3 bullets: rigid box / precise inserts / sustainable materials
- Optional gallery: packaging close-ups

#### E) Minimal footer
- Links: Terms / Privacy / Contact / Corporate
- Small copyright line

### 13.5 Visual language rules (tactility-first)

**Photography**
- Always include at least one **macro/close-up** of the surface finish.
- Use raking light (side light) to reveal curvature without emphasizing print artifacts.
- Always include 1 image with scale (dimensions) when relevant.

**UI textures**
- Do not add skeuomorphic textures. Tactility is communicated via photography and copy, not UI decoration.

### 13.6 Copy rules from the canonical site (for consistency)

- Prefer 1–2 sentence paragraphs.
- Use contrasts and reframes (e.g., “not X; Y”).
- Avoid long feature lists in the institutional site—reserve detailed specs for product pages.
- Keep language calm, almost editorial.

**Approved PT phrases (when writing in Portuguese)**
- “Design Essencial. Materializado.”
- “Não vendemos plástico. Vendemos precisão.”
- “A forma segue a função.”
- “O ritual de chegada.”
- “Experiência háptica.”

**Approved EN equivalents (when writing in English)**
- “Essential Design. Materialized.”
- “We don’t sell plastic. We sell precision.”
- “Form follows function.”
- “The arrival ritual.”
- “Haptic experience.”

### 13.7 Landing pages vs. institutional pages (when to switch modes)

- **Institutional pages (modo3d.com.br tone):** manifesto, trust, brand narrative, curated collection.
- **Product landing pages (conversion tone):** clear outcomes, specs tabs, gallery, FAQ, buy CTA.

Rule: the **brand site** should feel like a premium editorial. The **landing page** can be more explicit about conversion—without losing restraint.

---


## 12) “Master prompt” for LLMs to implement pages

Copy/paste into Claude/Codex/Gemini:

> You will implement marketing pages for the Modo3D brand using Next.js (App Router), Tailwind CSS, and shadcn/ui.  
> Follow this project Design System: brand palette (#222839, #3D6DA9), minimalist layout with generous whitespace, Inter typography, standardized sections (Hero, SocialProof, Benefits, Gallery, Specs, HowItWorks, FAQ, FinalCTA).  
> Do not create custom CSS beyond global tokens. Use shadcn components.  
> Copy must be direct, no hype, with benefit + evidence.  
> Deliver componentized code in `/components/sections` and pages in `/app/(marketing)`.  
> Add SEO metadata and basic analytics event stubs.  
> Prioritize performance and accessibility.

---
