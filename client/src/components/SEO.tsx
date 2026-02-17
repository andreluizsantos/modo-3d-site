import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export default function SEO({ title, description, path = "/", ogImage = "/images/hero-product.png" }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} — Modo 3D`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const baseUrl = window.location.origin;

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `${baseUrl}${path}`, true);
    setMeta("og:image", `${baseUrl}${ogImage}`, true);
    setMeta("og:locale", "pt_BR", true);
  }, [title, description, path, ogImage]);

  return null;
}
