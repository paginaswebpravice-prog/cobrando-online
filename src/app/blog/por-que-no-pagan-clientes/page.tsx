import { Metadata } from "next";
import PorQueNoPaganClientes from "./PorQueNoPaganClientes";

export const metadata: Metadata = {
  title:
    "¿Por qué los clientes no pagan? 12 causas de la mora y cómo reducir la cartera vencida",

  description:
    "Descubre por qué los clientes no pagan a tiempo, cuáles son las principales causas de la mora y qué estrategias ayudan a reducir la cartera vencida y mejorar el recaudo empresarial.",

  keywords: [
    "por qué los clientes no pagan",
    "clientes no pagan",
    "causas de la mora",
    "por qué un cliente no paga",
    "cartera vencida",
    "cómo reducir la cartera vencida",
    "gestión de cartera",
    "recuperación de cartera",
    "cobranza preventiva",
    "clientes morosos",
    "incumplimiento de pagos",
    "mora empresarial",
    "recaudo de cartera",
    "cobranzas empresas Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",
  },

  openGraph: {
    title:
      "¿Por qué los clientes no pagan? Conoce las causas y cómo reducir la mora",

    description:
      "Aprende por qué algunos clientes incumplen sus pagos y descubre estrategias para disminuir la cartera vencida y mejorar la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "¿Por qué los clientes no pagan? Causas de la mora y cómo prevenirla",

    description:
      "Identifica las razones más comunes del incumplimiento de pagos y conoce estrategias para recuperar cartera más rápido.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "Finanzas",

  authors: [
    {
      name: "Cobrando Online",
    },
  ],
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
                "¿Por qué los clientes no pagan? 12 causas de la mora y cómo reducir la cartera vencida",

              alternativeHeadline:
                "Razones por las que los clientes dejan de pagar y estrategias para prevenir el incumplimiento",

              description:
                "Guía completa para entender por qué los clientes no pagan, cómo identificar las causas de la mora y qué hacer para recuperar la cartera vencida.",

              keywords:
                "por qué los clientes no pagan, clientes morosos, cartera vencida, recuperación de cartera, cobranza preventiva",

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
                  "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-29",

              inLanguage: "es-CO",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Por qué los clientes no pagan sus deudas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las causas más frecuentes son problemas de liquidez, desacuerdos comerciales, falta de seguimiento, errores de facturación, priorización de otras obligaciones y una evaluación crediticia insuficiente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La mejor estrategia combina evaluación de riesgo, políticas claras de crédito, cobranza preventiva, recordatorios automáticos y seguimiento permanente a los clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer cuando un cliente deja de pagar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es recomendable contactar al cliente desde los primeros días de mora, identificar la causa del incumplimiento, negociar acuerdos de pago cuando sea necesario y escalar la gestión a cobranza prejurídica si no existe respuesta.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo identificar clientes con alto riesgo de mora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Analizando su historial de pagos, comportamiento financiero, nivel de endeudamiento, referencias comerciales y cumplimiento de obligaciones anteriores.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante la cobranza preventiva?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite disminuir el porcentaje de cartera vencida mediante recordatorios oportunos, seguimiento constante y comunicación con el cliente antes del vencimiento de la obligación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PorQueNoPaganClientes />
    </>
  );
}
