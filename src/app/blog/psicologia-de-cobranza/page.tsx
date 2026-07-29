import { Metadata } from "next";
import PsicologiaCobranza from "./PsicologiaCobranza";

export const metadata: Metadata = {
  title:
    "Psicología de la cobranza efectiva (2026): 10 técnicas para recuperar cartera sin perder clientes",

  description:
    "Aprende cómo aplicar la psicología de la cobranza para aumentar el recaudo de cartera. Descubre técnicas de comunicación, negociación y persuasión que ayudan a lograr más pagos sin afectar la relación con tus clientes.",

  keywords: [
    "psicología de la cobranza",
    "cobranza efectiva",
    "cómo cobrar clientes",
    "técnicas de cobranza",
    "recuperación de cartera",
    "gestión de cartera",
    "negociación de deudas",
    "comunicación en cobranza",
    "persuasión en cobranza",
    "cómo recuperar cartera vencida",
    "seguimiento de cartera",
    "cobranza empresarial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/psicologia-de-cobranza",
  },

  openGraph: {
    title:
      "Psicología de la cobranza: cómo lograr que más clientes paguen sin generar conflictos",

    description:
      "Descubre las estrategias psicológicas utilizadas por las empresas para mejorar la recuperación de cartera mediante comunicación efectiva, empatía y negociación.",

    url: "https://cobrandoonline.com/blog/psicologia-de-cobranza",

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
                "Psicología de la cobranza efectiva: cómo influir positivamente en la decisión de pago del cliente",

              description:
                "Guía completa sobre psicología aplicada a la cobranza, comunicación efectiva, negociación y recuperación de cartera empresarial.",

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
                "@id": "https://cobrandoonline.com/blog/psicologia-de-cobranza",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-29",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la psicología de la cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La psicología de la cobranza consiste en aplicar principios de comunicación, comportamiento humano y negociación para aumentar la probabilidad de que un cliente cumpla oportunamente con sus obligaciones de pago sin deteriorar la relación comercial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué algunos clientes no pagan aunque tengan dinero?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En muchos casos el retraso no obedece únicamente a problemas económicos. Factores como la falta de seguimiento, baja percepción de urgencia, prioridades financieras diferentes o una comunicación inadecuada también influyen en la decisión de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo influye la empatía durante una gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La empatía permite comprender la situación del cliente, generar confianza y facilitar acuerdos de pago realistas, aumentando las probabilidades de recuperación de la cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué tipo de comunicación mejora la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una comunicación clara, profesional, respetuosa y constante suele obtener mejores resultados que los mensajes agresivos o amenazantes, ya que favorece la negociación y mantiene una relación comercial positiva.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La psicología de la cobranza ayuda a reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Aplicar estrategias psicológicas durante la comunicación con los clientes puede incrementar el recaudo, mejorar el cumplimiento de acuerdos y disminuir los niveles de morosidad dentro de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PsicologiaCobranza />
    </>
  );
}
