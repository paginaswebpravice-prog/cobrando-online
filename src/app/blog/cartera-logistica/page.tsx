import { Metadata } from "next";
import CarteraLogistica from "./CarteraLogistica";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en empresas de logística y transporte | Estrategias para reducir la mora (Guía 2026)",

  description:
    "Aprende cómo recuperar cartera en empresas de logística, transporte y distribución. Descubre estrategias para reducir la morosidad, acelerar el recaudo y mejorar el flujo de caja.",

  keywords: [
    "recuperación de cartera logística",
    "cartera empresas de transporte",
    "cobranza logística",
    "gestión de cartera transporte",
    "recuperación de cartera transporte",
    "cartera operadores logísticos",
    "cobranza empresas de logística",
    "cartera última milla",
    "flujo de caja logística",
    "gestión de cobranza B2B",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-logistica",
  },

  openGraph: {
    title:
      "Recuperación de cartera en logística: cómo reducir la morosidad y mejorar el recaudo",

    description:
      "Descubre cómo las empresas de transporte y logística optimizan la recuperación de cartera mediante seguimiento preventivo, automatización y procesos eficientes.",

    url: "https://cobrandoonline.com/blog/cartera-logistica",

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
                "Recuperación de cartera en empresas de logística y transporte: estrategias para reducir la morosidad",

              description:
                "Guía completa para mejorar la recuperación de cartera en empresas de logística, transporte, distribución y operadores logísticos mediante procesos preventivos, automatización y seguimiento.",

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
                "@id": "https://cobrandoonline.com/blog/cartera-logistica",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Por qué aumenta la cartera vencida en empresas de logística?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cartera vencida suele aumentar por plazos de pago prolongados, diferencias en la facturación, retrasos en la validación de documentos y demoras en los procesos internos de aprobación de los clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué documentos ayudan a recuperar una factura de transporte?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Facturas electrónicas, órdenes de servicio, remisiones, manifiestos de carga, comprobantes de entrega, órdenes de compra y soportes de aceptación del servicio facilitan el proceso de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la morosidad en empresas de transporte?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando cobranza preventiva, seguimiento permanente, automatización de recordatorios, validación documental y acuerdos de pago oportunos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué automatizar la recuperación de cartera logística?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite reducir tiempos de gestión, disminuir errores operativos y mantener comunicación constante con los clientes durante todo el proceso de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores permiten medir la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los indicadores más utilizados son porcentaje de recuperación, índice de morosidad, DSO, cumplimiento de acuerdos de pago y tiempo promedio de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios tiene una buena gestión de cartera en logística?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mejor flujo de caja, mayor liquidez, reducción de costos financieros, mejor planificación operativa y fortalecimiento de las relaciones comerciales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraLogistica />
    </>
  );
}
