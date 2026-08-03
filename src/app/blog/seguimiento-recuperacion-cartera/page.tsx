import { Metadata } from "next";
import SeguimientoRecuperacionCartera from "./SeguimientoRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Seguimiento de recuperación de cartera: 15 estrategias para cobrar más rápido en Colombia (Guía 2026)",

  description:
    "Aprende cómo hacer seguimiento a la recuperación de cartera con procesos, indicadores, automatización y mejores prácticas para reducir la mora y aumentar el recaudo empresarial.",

  keywords: [
    "seguimiento recuperación de cartera",
    "seguimiento de cartera",
    "seguimiento cartera vencida",
    "seguimiento cobranza",
    "seguimiento acuerdos de pago",
    "cómo recuperar cartera vencida",
    "recuperación de cartera empresas",
    "gestión de cartera Colombia",
    "control cartera vencida",
    "automatización cobranza",
    "software recuperación cartera",
    "flujo de caja empresas",
    "cobranza empresarial",
    "recaudo empresas Colombia",
    "seguimiento clientes morosos",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
  },

  openGraph: {
    title:
      "Seguimiento de recuperación de cartera: cómo aumentar el recaudo y reducir la mora",

    description:
      "Conoce las mejores estrategias para hacer seguimiento a clientes, controlar acuerdos de pago y mejorar la recuperación de cartera empresarial.",

    url: "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",

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
                "Seguimiento de recuperación de cartera: estrategias para aumentar el recaudo y reducir la mora",

              alternativeHeadline:
                "Cómo hacer seguimiento a la recuperación de cartera paso a paso",

              description:
                "Guía completa para implementar un proceso profesional de seguimiento de recuperación de cartera mediante indicadores, automatización, acuerdos de pago y mejores prácticas empresariales.",

              keywords:
                "seguimiento recuperación de cartera, seguimiento cartera, recuperación cartera empresas, seguimiento acuerdos pago, cartera vencida, recaudo empresarial",

              image:
                "https://cobrandoonline.com/images/blog/seguimiento-recuperacion-cartera.webp",

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
                  "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-08-03",

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el seguimiento de recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de actividades que permiten controlar permanentemente el estado de las cuentas por cobrar mediante llamadas, correos, recordatorios, acuerdos de pago e indicadores financieros.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué es importante realizar seguimiento a la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque incrementa la probabilidad de recaudo, reduce la mora y mejora el flujo de caja de la empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cada cuánto debe realizarse seguimiento a un cliente moroso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende de la política de crédito de cada empresa, aunque lo recomendable es mantener una frecuencia constante desde antes del vencimiento hasta el pago total.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten medir el seguimiento de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los principales son porcentaje de recuperación, DSO, rotación de cartera, cumplimiento de acuerdos de pago, cartera vencida y tiempo promedio de recaudo.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando procesos estandarizados, seguimiento permanente, automatización de recordatorios, indicadores financieros y una adecuada segmentación de clientes.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Se puede automatizar el seguimiento de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Existen plataformas que automatizan recordatorios, acuerdos de pago, alertas, comunicaciones y reportes de recuperación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué errores deben evitarse durante el seguimiento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No documentar las comunicaciones, contactar demasiado tarde al cliente, olvidar el seguimiento de acuerdos de pago y no medir indicadores.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre seguimiento preventivo y seguimiento correctivo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El preventivo busca evitar la mora antes del vencimiento; el correctivo actúa cuando la obligación ya presenta retrasos.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué herramientas ayudan a controlar la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Software especializado, CRM, ERP, automatizadores de correo electrónico, paneles de indicadores e integraciones con WhatsApp Business.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué el seguimiento mejora el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque acelera el recaudo de las cuentas por cobrar, reduce los tiempos de recuperación y mejora la liquidez empresarial.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoRecuperacionCartera />
    </>
  );
}
