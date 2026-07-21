import { Metadata } from "next";
import CarteraEducacion from "./CarteraEducacion";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en colegios y universidades | Cómo reducir la morosidad educativa",

  description:
    "Aprende cómo recuperar cartera en colegios, universidades e instituciones educativas mediante estrategias preventivas, acuerdos de pago, automatización y seguimiento oportuno para reducir la morosidad.",

  keywords: [
    "recuperación de cartera educativa",
    "cartera colegios",
    "cartera universidades",
    "cobranza instituciones educativas",
    "morosidad colegios",
    "recuperación cartera colegios privados",
    "gestión de cartera educativa",
    "recaudo matrículas",
    "cobranza educativa Colombia",
    "cartera sector educación",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-educacion",
  },

  openGraph: {
    title:
      "Recuperación de cartera en colegios y universidades: estrategias para reducir la morosidad",

    description:
      "Descubre cómo mejorar el recaudo en instituciones educativas mediante procesos preventivos, acuerdos de pago y gestión profesional de cartera.",

    url: "https://cobrandoonline.com/blog/cartera-educacion",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cómo recuperar cartera en colegios y universidades sin afectar la relación con estudiantes",

    description:
      "Guía práctica para instituciones educativas que buscan disminuir la cartera vencida y mejorar su flujo de caja.",
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
                "Recuperación de cartera en colegios y universidades: estrategias para reducir la morosidad educativa",

              description:
                "Guía completa para gestionar la recuperación de cartera en instituciones educativas. Aprende cómo reducir la mora, mejorar el recaudo de matrículas, implementar acuerdos de pago y optimizar la gestión administrativa.",

              keywords: [
                "recuperación de cartera educativa",
                "cartera colegios",
                "cartera universidades",
                "cobranza educativa",
                "instituciones educativas",
                "recaudo de matrículas",
                "morosidad educativa",
                "gestión de cartera",
                "acuerdos de pago",
                "cobranza administrativa",
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
                "@id": "https://cobrandoonline.com/blog/cartera-educacion",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es",

              articleSection: "Recuperación de Cartera",

              wordCount: "3400",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué aumenta la cartera vencida en colegios y universidades?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cartera vencida suele originarse por dificultades económicas de las familias, falta de seguimiento oportuno, incumplimiento de acuerdos de pago y ausencia de procesos preventivos de cobranza.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo reducir la morosidad en instituciones educativas?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando recordatorios automáticos, políticas claras de recaudo, acuerdos de pago, seguimiento permanente y una gestión preventiva desde el proceso de matrícula.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué estrategias ayudan a recuperar cartera educativa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las estrategias más efectivas incluyen segmentar la cartera, automatizar comunicaciones, negociar acuerdos de pago, realizar seguimiento constante y medir indicadores de recaudo.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La cobranza preventiva mejora el recaudo de matrículas?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Contactar oportunamente a estudiantes o acudientes antes del vencimiento disminuye significativamente la mora y mejora el porcentaje de recuperación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo funcionan los acuerdos de pago en instituciones educativas?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permiten que el responsable financiero pague la obligación en cuotas previamente definidas, facilitando la recuperación de cartera y disminuyendo el riesgo de incumplimiento.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores deben medir los responsables de cartera educativa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable medir porcentaje de recuperación, antigüedad de cartera, nivel de morosidad, cumplimiento de acuerdos de pago y tiempo promedio de recaudo.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La automatización ayuda a recuperar cartera educativa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Automatizar recordatorios, correos electrónicos, mensajes de WhatsApp y reportes permite mejorar la productividad y aumentar la recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué es importante una buena gestión de cartera en el sector educativo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque mejora el flujo de caja de la institución, facilita la planeación financiera, reduce la morosidad y permite mantener la sostenibilidad de colegios, universidades y centros de formación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraEducacion />
    </>
  );
}
