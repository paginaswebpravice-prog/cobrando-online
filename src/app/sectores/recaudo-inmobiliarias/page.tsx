import { Metadata } from "next";
import RecaudoInmobiliariasContent from "./RecaudoInmobiliariasContent";

export const metadata: Metadata = {
  title:
    "Cobro de arriendos y recuperación de cartera inmobiliaria en Colombia | Reduce mora y mejora flujo de caja",

  description:
    "Recupera arriendos atrasados en Colombia y reduce la mora en inmobiliarias con estrategias profesionales de cobranza. Mejora tu flujo de caja y aumenta el recaudo.",

  keywords: [
    "recuperación de cartera inmobiliarias Colombia",
    "cobro de arriendos Colombia",
    "cartera vencida inmobiliarias",
    "gestión de arrendamientos mora",
    "cobranza inmobiliaria Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-inmobiliarias-colombia",
  },

  openGraph: {
    title:
      "Cobro de arriendos en Colombia | Recupera cartera inmobiliaria y reduce la mora",
    description:
      "Estrategias efectivas para recuperar arriendos atrasados y mejorar el flujo de caja en inmobiliarias en Colombia.",
    url: "https://cobrandoonline.com/blog/recuperacion-cartera-inmobiliarias-colombia",
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
        "Cómo recuperar arriendos atrasados y reducir la mora en inmobiliarias en Colombia",
      description:
        "Guía sobre gestión de cartera vencida y cobro de arriendos en inmobiliarias en Colombia.",
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
          "https://cobrandoonline.com/blog/recuperacion-cartera-inmobiliarias-colombia",
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

      <RecaudoInmobiliariasContent />
    </>
  );
}
