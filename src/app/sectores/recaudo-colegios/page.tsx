import { Metadata } from "next";
import RecaudoColegiosContent from "./RecaudoColegiosContent";

export const metadata: Metadata = {
  title:
    "Cómo recuperar pensiones atrasadas en colegios (rápido) | Recaudo educativo en Colombia",
  description:
    "¿Tu colegio tiene mora en pensiones? Recupera cartera vencida en Colombia con estrategias efectivas de cobranza educativa y mejora tu flujo de caja.",

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
    title:
      "Recupera pensiones atrasadas en colegios | Más recaudo y liquidez en Colombia",
    description:
      "Estrategias profesionales para recuperar cartera educativa, reducir mora y mejorar el flujo de caja en colegios en Colombia.",
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
              headline: "Cómo recuperar cartera en colegios en Colombia",
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
