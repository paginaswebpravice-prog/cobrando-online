import { Metadata } from "next";
import BuenasPracticasNegociarDeudores from "./BuenasPracticasNegociarDeudores";

export const metadata: Metadata = {
  title:
    "Cómo negociar con deudores en Colombia: 15 estrategias para lograr acuerdos de pago y recuperar cartera (Guía 2026)",

  description:
    "Aprende cómo negociar con deudores de forma efectiva, cerrar acuerdos de pago, reducir la morosidad y aumentar la recuperación de cartera con estrategias utilizadas por empresas en Colombia.",

  keywords: [
    "cómo negociar con deudores",
    "negociar con deudores",
    "acuerdos de pago",
    "recuperación de cartera",
    "cobranza empresarial",
    "gestión de cartera",
    "cómo cobrar una deuda",
    "negociación de cartera",
    "cobro administrativo",
    "cartera vencida",
    "morosidad",
    "cuentas por cobrar",
    "seguimiento de cartera",
    "recuperar cartera",
    "Cobrando Online",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",
  },

  openGraph: {
    title:
      "Cómo negociar con deudores y recuperar cartera sin perder la relación comercial",

    description:
      "Descubre las mejores estrategias para negociar con deudores, lograr acuerdos de pago efectivos y aumentar la recuperación de cartera empresarial.",

    url: "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo negociar con deudores y recuperar cartera de forma efectiva",

    description:
      "Guía completa para negociar con clientes morosos, reducir la mora y mejorar la recuperación de cartera.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Cómo negociar con deudores en Colombia: estrategias para lograr acuerdos de pago y recuperar cartera",

              alternativeHeadline:
                "Guía para negociar con clientes morosos y aumentar la recuperación de cartera",

              description:
                "Aprende cómo negociar con deudores de forma efectiva, establecer acuerdos de pago, reducir la morosidad y mejorar la recuperación de cartera mediante estrategias administrativas y de comunicación.",

              keywords: [
                "negociar con deudores",
                "cómo negociar con deudores",
                "acuerdo de pago",
                "recuperación de cartera",
                "gestión de cartera",
                "cuentas por cobrar",
                "cobranza administrativa",
                "clientes morosos",
                "seguimiento de cartera",
                "cartera vencida",
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
                "@id":
                  "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",
              },

              wordCount: 3400,

              articleSection: [
                "Recuperación de cartera",
                "Cobranza",
                "Acuerdos de pago",
                "Gestión financiera",
              ],

              inLanguage: "es-CO",

              datePublished: "2025-01-01",

              dateModified: "2026-01-01",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo negociar con un deudor sin afectar la relación comercial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La negociación debe realizarse mediante una comunicación respetuosa, presentando información clara sobre la deuda y ofreciendo alternativas de pago acordes con la capacidad financiera del cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer si un deudor no responde llamadas ni mensajes?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es recomendable utilizar diferentes canales de comunicación, documentar cada gestión realizada y mantener un seguimiento organizado antes de evaluar otras alternativas de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo hacer un acuerdo de pago efectivo?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un acuerdo de pago debe establecer claramente el valor adeudado, fechas de pago, cuotas, forma de pago y los compromisos asumidos por ambas partes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar una negociación con un cliente moroso?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo más recomendable es iniciar el contacto tan pronto se detecte el incumplimiento para aumentar las probabilidades de recuperación y evitar que la deuda continúe envejeciendo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué errores deben evitarse al negociar con deudores?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre los errores más comunes se encuentran retrasar el contacto, no escuchar al cliente, ofrecer acuerdos poco realistas y no realizar seguimiento a los compromisos adquiridos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo aumentar la recuperación de cartera mediante la negociación?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La recuperación mejora cuando la empresa segmenta a sus clientes, realiza seguimiento oportuno, documenta los acuerdos de pago y mantiene una comunicación constante durante todo el proceso.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <BuenasPracticasNegociarDeudores />
    </>
  );
}
