import { Metadata } from "next";
import ReestructuracionDeuda from "./ReestructuracionDeuda";

export const metadata: Metadata = {
  title:
    "Reestructuración de deudas empresariales en Colombia: cómo renegociar obligaciones y recuperar cartera sin demanda",

  description:
    "Aprende cómo funciona la reestructuración de deudas empresariales en Colombia, cuándo conviene renegociar obligaciones, crear acuerdos de pago y recuperar cartera sin acudir inicialmente a procesos judiciales.",

  keywords: [
    "reestructuración de deudas",
    "reestructuración de deudas empresariales",
    "reestructuración de cartera",
    "renegociar deudas",
    "renegociación de obligaciones",
    "acuerdo de pago empresas",
    "acuerdo de pago cartera",
    "recuperación de cartera",
    "recuperación extrajudicial",
    "cobro prejurídico",
    "refinanciación de deuda",
    "reestructuración financiera empresas",
    "negociación de cartera vencida",
    "cómo recuperar cartera sin demanda",
    "planes de pago empresas",
    "gestión de cartera empresarial",
    "cobranzas Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/reestructuracion-deuda",
  },

  openGraph: {
    title:
      "Reestructuración de deudas empresariales: guía para recuperar cartera sin procesos judiciales",

    description:
      "Descubre cuándo conviene renegociar una deuda, cómo estructurar acuerdos de pago efectivos y aumentar la recuperación de cartera mediante estrategias extrajudiciales.",

    url: "https://cobrandoonline.com/blog/reestructuracion-deuda",

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
                "Reestructuración de deudas empresariales en Colombia: cómo renegociar obligaciones y recuperar cartera",

              description:
                "Guía completa sobre reestructuración de deudas empresariales, acuerdos de pago, refinanciación de obligaciones y recuperación de cartera sin acudir inicialmente a procesos judiciales.",

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

                "@id": "https://cobrandoonline.com/blog/reestructuracion-deuda",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la reestructuración de una deuda empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es la renegociación de las condiciones originales de una obligación para facilitar su pago mediante nuevos plazos, cuotas, intereses o acuerdos entre acreedor y deudor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo conviene reestructurar una deuda en lugar de demandar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el deudor mantiene comunicación, reconoce la obligación y tiene capacidad de pago futura, la reestructuración suele ofrecer mejores resultados que iniciar inmediatamente un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios tiene un acuerdo de pago para recuperar cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite aumentar la probabilidad de recuperación, disminuir costos administrativos, conservar relaciones comerciales y mejorar el flujo de caja de la empresa acreedora.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe contener un acuerdo de reestructuración de deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir el valor total de la obligación, cronograma de pagos, fechas de vencimiento, condiciones de incumplimiento, intereses pactados y la aceptación expresa de ambas partes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La reestructuración elimina la obligación de pagar la deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. La obligación continúa vigente, pero se modifican las condiciones de pago para facilitar su cumplimiento y aumentar las posibilidades de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué sucede si el deudor incumple el nuevo acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El acreedor puede retomar las gestiones de cobranza, iniciar nuevas negociaciones o evaluar mecanismos jurídicos según las condiciones pactadas y la documentación existente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReestructuracionDeuda />
    </>
  );
}
