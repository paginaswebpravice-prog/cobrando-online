import { Metadata } from "next";
import CobranzaPorEtapas from "./CobranzaPorEtapas";

export const metadata: Metadata = {
  title:
    "Cobranza por etapas: modelo estratégico para recuperar cartera vencida",

  description:
    "Conoce cómo implementar una estrategia de cobranza por etapas en empresas: prevención, mora temprana, cobranza administrativa, acuerdos de pago y cobro jurídico.",

  keywords: [
    "cobranza por etapas",
    "estrategia de cobranza empresarial",
    "modelo de recuperación de cartera",
    "fases de cobranza",
    "gestión de cartera empresarial",
    "cobranza preventiva",
    "cobranza administrativa",
    "recuperación de cartera vencida",
    "proceso de cobro empresarial",
    "control de cartera Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobranza-por-etapas",
  },

  openGraph: {
    title:
      "Cobranza por etapas: cómo organizar un proceso efectivo de recuperación de cartera",

    description:
      "Aprende cómo dividir la gestión de cobro según el nivel de mora para mejorar la recuperación de cartera y proteger el flujo de caja empresarial.",

    url: "https://cobrandoonline.com/blog/cobranza-por-etapas",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://cobrandoonline.com/images/blog/cobranza-por-etapas.jpg",
        width: 1200,
        height: 630,
        alt: "Estrategia de cobranza por etapas para recuperación de cartera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cobranza por etapas: estrategia para recuperar cartera vencida",

    description:
      "Modelo práctico para organizar procesos de cobranza según niveles de mora y mejorar el recaudo empresarial.",
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
                "Cobranza por etapas: cómo estructurar un proceso efectivo para recuperar cartera",

              alternativeHeadline:
                "Modelo de cobranza empresarial dividido por fases según el nivel de mora",

              description:
                "Guía práctica para implementar una estrategia de cobranza por etapas, desde la prevención de mora hasta la recuperación jurídica de cartera empresarial.",

              keywords:
                "cobranza por etapas, estrategia de cobranza empresarial, recuperación de cartera, cobranza preventiva, cobranza administrativa, cobro jurídico",

              articleSection: "Gestión de cartera empresarial",

              about: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Procesos de cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Gestión financiera empresarial",
                },
              ],

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
                "@id": "https://cobrandoonline.com/blog/cobranza-por-etapas",
              },

              image:
                "https://cobrandoonline.com/images/blog/cobranza-por-etapas.jpg",

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es una estrategia de cobranza por etapas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un modelo de gestión de cartera que divide el proceso de cobro en diferentes fases según el comportamiento del cliente y el tiempo de mora, permitiendo aplicar acciones específicas para aumentar la recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuáles son las etapas de un proceso de cobranza empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las etapas más utilizadas son cobranza preventiva, mora temprana, cobranza administrativa, negociación de acuerdos de pago, mora avanzada y cobro jurídico cuando las gestiones anteriores no generan resultados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre cobranza preventiva y cobranza jurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cobranza preventiva busca evitar el incumplimiento antes o durante los primeros días de vencimiento, mientras que la cobranza jurídica se utiliza cuando la deuda requiere acciones legales para intentar recuperar los recursos pendientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué dividir la cartera por etapas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Segmentar la cartera permite priorizar casos, utilizar mejor los recursos del equipo de cobranza, identificar riesgos y aplicar estrategias diferentes según la probabilidad de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa debe pasar una deuda a cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente cuando las acciones preventivas, administrativas y de negociación no logran obtener el pago, existe soporte documental suficiente y se requiere evaluar alternativas legales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobranzaPorEtapas />
    </>
  );
}
