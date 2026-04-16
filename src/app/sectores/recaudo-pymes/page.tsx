import { Metadata } from "next";
import RecaudoPymesContent from "./RecaudoPymesContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para PYMES en Colombia | Mejora tu flujo de caja",
  description:
    "Recupera cartera vencida en PYMES en Colombia. Reduce la mora, mejora el flujo de caja y optimiza tu gestión de cobro con estrategias efectivas.",

  keywords: [
    "recuperación de cartera pymes Colombia",
    "cartera vencida pymes",
    "cobranza pymes Colombia",
    "gestión de cartera pequeñas empresas",
    "flujo de caja pymes",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-colombia",
  },

  openGraph: {
    title:
      "Recuperación de cartera para PYMES en Colombia | Mejora tu flujo de caja",
    description:
      "Estrategias efectivas para recuperar cartera vencida en PYMES en Colombia.",
    url: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-colombia",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Recuperación de cartera para pequeñas y medianas empresas en Colombia",
      description:
        "Guía sobre cómo las PYMES pueden mejorar su flujo de caja mediante una gestión efectiva de cartera.",
      author: {
        "@type": "Organization",
        name: "Cobrando Online",
      },
      publisher: {
        "@type": "Organization",
        name: "Cobrando Online",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-colombia",
      },
      datePublished: "2025-01-01",
      dateModified: "2026-01-01",
      inLanguage: "es",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <RecaudoPymesContent />
    </>
  );
}
