import { Metadata } from "next";
import RecaudoInmobiliariasContent from "./RecaudoInmobiliariasContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para inmobiliarias en Colombia | Cobranza de arriendos",
  description:
    "Recupera cartera vencida en inmobiliarias en Colombia. Gestiona el cobro de arriendos atrasados, reduce la morosidad y mejora tu flujo de caja con estrategias profesionales.",

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
    title: "Recuperación de cartera para inmobiliarias en Colombia",
    description:
      "Estrategias profesionales para el cobro de arriendos y recuperación de cartera inmobiliaria en Colombia.",
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
      headline: "Recuperación de cartera para inmobiliarias en Colombia",
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
