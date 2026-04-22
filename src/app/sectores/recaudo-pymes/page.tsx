import { Metadata } from "next";
import RecaudoPymesContent from "./RecaudoPymesContent";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera en PYMES en Colombia y mejorar el flujo de caja rápido",

  description:
    "Aprende cómo recuperar cartera vencida en PYMES en Colombia, reducir la mora y mejorar el flujo de caja con estrategias efectivas de cobranza.",

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
    title: "Recupera cartera en tu PYME y mejora el flujo de caja en Colombia",
    description:
      "Estrategias efectivas para reducir la mora y aumentar el recaudo en pequeñas y medianas empresas en Colombia.",
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
        "Cómo recuperar cartera en PYMES y mejorar el flujo de caja en Colombia",
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
