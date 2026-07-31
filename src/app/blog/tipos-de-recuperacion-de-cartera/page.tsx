import { Metadata } from "next";
import TiposDeRecuperacionDeCarteraContent from "./TiposDeRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "Tipos de recuperación de cartera en Colombia (Preventiva, Prejurídica y Jurídica) | Guía 2026",

  description:
    "Conoce los tipos de recuperación de cartera en Colombia, cuándo aplicar la cobranza preventiva, administrativa (prejurídica) y jurídica, y cómo aumentar el recaudo reduciendo la mora empresarial.",

  keywords: [
    "tipos de recuperación de cartera",
    "recuperación de cartera Colombia",
    "cobranza preventiva",
    "cobranza administrativa",
    "cobranza prejurídica",
    "cobranza jurídica",
    "proceso de recuperación de cartera",
    "gestión de cartera empresarial",
    "recuperación de cartera empresas",
    "cómo recuperar cartera vencida",
    "etapas recuperación cartera",
    "cartera morosa Colombia",
    "software de cobranza",
    "seguimiento de cartera",
    "cobranza B2B",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
  },

  openGraph: {
    title:
      "Tipos de recuperación de cartera en Colombia: preventiva, prejurídica y jurídica",

    description:
      "Aprende cuál es el momento adecuado para aplicar cada etapa de recuperación de cartera y cómo mejorar el recaudo empresarial.",

    url: "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",

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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Tipos de recuperación de cartera en Colombia: preventiva, administrativa y jurídica",

              alternativeHeadline:
                "Guía completa sobre las etapas de recuperación de cartera para empresas",

              description:
                "Descubre cómo funcionan la recuperación preventiva, administrativa (prejurídica) y jurídica, cuándo aplicar cada una y cómo reducir la mora empresarial.",

              image:
                "https://cobrandoonline.com/images/blog/tipos-recuperacion-cartera.webp",

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
                  "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-01-01",

              inLanguage: "es-CO",

              wordCount: 3400,

              about: [
                "Recuperación de cartera",
                "Cobranza preventiva",
                "Cobranza administrativa",
                "Cobranza jurídica",
                "Gestión de cartera empresarial",
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Cobranza preventiva",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza prejurídica",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza jurídica",
                },
                {
                  "@type": "Thing",
                  name: "Acuerdos de pago",
                },
                {
                  "@type": "Thing",
                  name: "Cartera vencida",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuáles son los tipos de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La recuperación de cartera normalmente se divide en cobranza preventiva, cobranza administrativa o prejurídica y cobranza jurídica. Cada etapa responde al nivel de mora y al comportamiento del deudor.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué es la recuperación preventiva?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de acciones realizadas antes del vencimiento de la factura para evitar que la obligación entre en mora mediante recordatorios, seguimiento y comunicación oportuna.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué diferencia existe entre cobranza administrativa y jurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cobranza administrativa busca recuperar la deuda mediante negociación y acuerdos sin acudir a procesos judiciales. La recuperación jurídica implica iniciar acciones legales cuando el incumplimiento persiste.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la etapa más efectiva para recuperar cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La etapa preventiva suele ofrecer los mejores resultados porque evita que la deuda aumente y reduce significativamente la probabilidad de mora.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un proceso jurídico de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente cuando se agotaron las gestiones preventivas y administrativas, el deudor incumple acuerdos de pago o existe una negativa reiterada para cancelar la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Las empresas pueden combinar las tres etapas de recuperación?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Lo recomendable es implementar un proceso escalonado que inicie con cobranza preventiva, continúe con gestión administrativa y, únicamente cuando sea necesario, avance hacia la recuperación jurídica.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <TiposDeRecuperacionDeCarteraContent />
    </>
  );
}
