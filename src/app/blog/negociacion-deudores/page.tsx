import { Metadata } from "next";
import NegociacionDeudores from "./NegociacionDeudores";

export const metadata: Metadata = {
  title:
    "Cómo negociar con deudores en Colombia: 15 estrategias para recuperar cartera sin perder clientes | Guía 2026",

  description:
    "Aprende cómo negociar con deudores en Colombia utilizando técnicas de cobranza, acuerdos de pago y estrategias de negociación que ayudan a recuperar cartera, disminuir la mora y mejorar el flujo de caja empresarial.",

  keywords: [
    "negociar con deudores",
    "negociación de deudores",
    "negociación de cartera",
    "cómo negociar una deuda",
    "recuperación de cartera",
    "estrategias de cobranza",
    "acuerdos de pago",
    "cartera vencida",
    "cobranza empresarial",
    "clientes morosos",
    "gestión de cartera",
    "seguimiento de cartera",
    "recaudo empresarial",
    "reducción de mora",
    "cobrando online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/negociacion-deudores",
  },

  openGraph: {
    title:
      "Cómo negociar con deudores y recuperar cartera sin afectar la relación comercial",

    description:
      "Descubre estrategias profesionales para negociar con clientes morosos, cerrar acuerdos de pago efectivos y aumentar el recaudo de tu empresa.",

    url: "https://cobrandoonline.com/blog/negociacion-deudores",

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
                "Cómo negociar con deudores en Colombia y recuperar cartera de manera efectiva",

              description:
                "Guía completa para negociar con clientes morosos, estructurar acuerdos de pago y mejorar la recuperación de cartera empresarial.",

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
                "@id": "https://cobrandoonline.com/blog/negociacion-deudores",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-28",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Por qué es recomendable negociar antes de iniciar acciones judiciales?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque una negociación bien estructurada puede permitir recuperar la cartera en menor tiempo, reducir costos administrativos y conservar la relación comercial con el cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe contener un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir la identificación de las partes, el valor adeudado, número de cuotas, fechas de pago, forma de pago, condiciones por incumplimiento y evidencia de aceptación del deudor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Conviene ofrecer descuentos para recuperar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Depende del análisis financiero de cada caso. Algunas empresas utilizan descuentos controlados para acelerar el recaudo y reducir el riesgo de una mora prolongada.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo aumentar la probabilidad de que un cliente cumpla un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Definiendo cuotas realistas, realizando seguimiento periódico, manteniendo una comunicación constante y documentando claramente los compromisos adquiridos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La negociación ayuda a reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Una estrategia de negociación profesional puede incrementar el recaudo, disminuir los días de mora y mejorar el flujo de caja empresarial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo debe iniciarse la negociación con un cliente moroso?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es iniciar el contacto desde los primeros días de mora, antes de que la deuda aumente y las probabilidades de recuperación disminuyan.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <NegociacionDeudores />
    </>
  );
}
