import { Metadata } from "next";
import RecaudoColegiosContent from "./RecaudoColegiosContent";

export const metadata: Metadata = {
  title:
    "Recaudo de cartera para colegios en Colombia | Cobranza educativa profesional",
  description:
    "Recupera cartera vencida en colegios en Colombia. Gestiona pensiones atrasadas, mejora el flujo de caja y optimiza el recaudo con estrategias profesionales.",

  keywords: [
    "recaudo de cartera colegios Colombia",
    "cobro de pensiones atrasadas",
    "cartera vencida colegios",
    "cobranza educativa Colombia",
    "recuperacion de cartera colegios",
    "mora en colegios Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/servicios/recaudo-de-cartera-colegios",
  },

  openGraph: {
    title: "Recaudo de cartera para colegios en Colombia | Cobranza educativa",
    description:
      "Recupera pensiones atrasadas en colegios en Colombia con estrategias profesionales de recaudo y gestión de cartera.",
    url: "https://cobrandoonline.com/servicios/recaudo-de-cartera-colegios",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Recaudo de cartera para colegios en Colombia",
              description:
                "Estrategias profesionales para recuperación de cartera educativa y mejora del flujo de caja en colegios en Colombia.",
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
                  "https://cobrandoonline.com/servicios/recaudo-de-cartera-colegios",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo cobrar pensiones atrasadas en colegios en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento, acuerdos de pago, gestión prejurídica o procesos legales si es necesario.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede cobrar cartera sin afectar la relación con los padres?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, usando estrategias de comunicación respetuosa y gestión profesional de cobranza.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecaudoColegiosContent />
    </>
  );
}
