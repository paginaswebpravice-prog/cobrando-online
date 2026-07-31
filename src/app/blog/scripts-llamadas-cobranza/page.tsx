import { Metadata } from "next";
import ScriptsLlamadasCobranza from "./ScriptsLlamadasCobranza";

export const metadata: Metadata = {
  title:
    "Scripts de llamadas de cobranza: 12 ejemplos efectivos para recuperar cartera en Colombia (Guía 2026)",

  description:
    "Descubre scripts de llamadas de cobranza profesionales, ejemplos reales, guiones para clientes morosos, acuerdos de pago y seguimiento de cartera. Aprende cómo aumentar la recuperación de cuentas por cobrar sin afectar la relación comercial.",

  keywords: [
    "scripts de llamadas de cobranza",
    "script de cobranza",
    "guion de llamada de cobranza",
    "ejemplo llamada de cobranza",
    "llamadas de cobranza",
    "llamada para cobrar cartera",
    "recuperación de cartera",
    "guiones de cobranza",
    "cobranza telefónica",
    "cobranza empresarial",
    "cómo cobrar una deuda por teléfono",
    "seguimiento de cartera",
    "negociación de cartera",
    "cobranzas Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",
  },

  openGraph: {
    title:
      "12 Scripts de llamadas de cobranza para recuperar cartera sin perder clientes",

    description:
      "Utiliza estos ejemplos de llamadas de cobranza para mejorar la recuperación de cartera, negociar acuerdos de pago y reducir la mora empresarial.",

    url: "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Scripts de llamadas de cobranza: ejemplos para recuperar cartera",

    description:
      "Guiones profesionales para llamadas de cobranza preventiva, administrativa y prejurídica.",
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
                "Scripts de llamadas de cobranza: ejemplos efectivos para recuperar cartera empresarial",

              description:
                "Guía completa con scripts telefónicos para cobranza preventiva, administrativa y negociación de acuerdos de pago.",

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
                  "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",

              keywords:
                "scripts de cobranza, llamadas de cobranza, recuperación de cartera, guion de cobranza, acuerdos de pago",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es un script de llamadas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un guion estructurado que ayuda a los asesores de cobranza a conducir conversaciones claras, profesionales y orientadas a obtener compromisos de pago sin afectar la relación con el cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué utilizar scripts en las llamadas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permiten estandarizar la comunicación, reducir la improvisación, mejorar la experiencia del cliente y aumentar las probabilidades de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe contener un buen guion de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir saludo profesional, validación de identidad, explicación del motivo de la llamada, información de la obligación, escucha activa, negociación, confirmación del compromiso y cierre cordial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Los scripts sirven para cualquier tipo de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Los guiones pueden adaptarse a cobranza preventiva, administrativa, prejurídica y seguimiento de acuerdos de pago, dependiendo del nivel de mora y del perfil del cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar la efectividad de las llamadas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Preparando la información del cliente antes de llamar, utilizando un tono profesional, escuchando activamente, documentando cada gestión y realizando seguimiento oportuno a los compromisos adquiridos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ScriptsLlamadasCobranza />
    </>
  );
}
