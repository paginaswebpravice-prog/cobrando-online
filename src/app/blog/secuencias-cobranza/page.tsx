import { Metadata } from "next";
import SecuenciasCobranza from "./SecuenciasCobranza";

export const metadata: Metadata = {
  title: "Secuencias automáticas de cobranza: flujos para recuperar cartera",
  description:
    "Aprende cómo diseñar secuencias automáticas de cobranza para reducir la morosidad y mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/secuencias-cobranza",
  },

  openGraph: {
    title: "Secuencias automáticas de cobranza para empresas",
    description:
      "Guía práctica para implementar flujos automatizados de cobranza y seguimiento de clientes.",
    url: "https://cobrandoonline.com/blog/secuencias-cobranza",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Secuencias automáticas de cobranza: cómo recuperar cartera de forma eficiente",
              description:
                "Guía para implementar secuencias automáticas de cobranza y optimizar la recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/secuencias-cobranza",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué son las secuencias automáticas de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son flujos programados de comunicación y seguimiento que permiten gestionar automáticamente el cobro de cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué canales pueden incluirse en una secuencia de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Correos electrónicos, WhatsApp, SMS, llamadas telefónicas y alertas internas dentro de sistemas CRM o software de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Las secuencias automáticas ayudan a reducir la morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Permiten realizar seguimientos oportunos y constantes que aumentan la probabilidad de pago y reducen los niveles de mora.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SecuenciasCobranza />
    </>
  );
}
