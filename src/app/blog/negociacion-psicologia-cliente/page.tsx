import { Metadata } from "next";
import PsicologiaDeudor from "./PsicologiaDeudor";

export const metadata: Metadata = {
  title:
    "Psicología del deudor: cómo entender su comportamiento para recuperar cartera | Guía 2026",

  description:
    "Descubre cómo la psicología del deudor influye en la cobranza. Aprende técnicas de comunicación, negociación y comportamiento para recuperar cartera de forma más efectiva.",

  keywords: [
    "psicología del deudor",
    "comportamiento del deudor",
    "cómo negociar con deudores",
    "psicología cobranza",
    "negociación de cartera",
    "recuperación de cartera",
    "clientes morosos",
    "gestión de cobranza",
    "cobranza empresarial",
    "cartera vencida Colombia",
    "negociación clientes morosos",
    "inteligencia emocional cobranza",
    "técnicas de recuperación de cartera",
    "cobro preventivo",
    "estrategias de cobranza",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/negociacion-psicologia-cliente",
  },

  openGraph: {
    title:
      "Psicología del deudor: las claves para negociar mejor y recuperar cartera",

    description:
      "Aprende por qué algunos clientes dejan de pagar, cómo influye su comportamiento y qué estrategias aumentan la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/negociacion-psicologia-cliente",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Psicología del deudor: estrategias para recuperar cartera con mayor éxito",

    description:
      "Descubre cómo comprender el comportamiento del cliente mejora la negociación y aumenta el recaudo.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
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
                "Psicología del deudor: cómo entender su comportamiento para mejorar la recuperación de cartera",

              description:
                "Guía completa sobre comportamiento del deudor, negociación, comunicación y estrategias para aumentar la recuperación de cartera.",

              keywords:
                "psicología del deudor, negociación de cartera, comportamiento del cliente moroso, recuperación de cartera",

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
                  "https://cobrandoonline.com/blog/negociacion-psicologia-cliente",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-28",

              inLanguage: "es",

              articleSection: "Recuperación de cartera",

              wordCount: "4700",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la psicología del deudor?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el estudio del comportamiento, las emociones y las motivaciones que influyen en la decisión de una persona o empresa para pagar una obligación pendiente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué algunos clientes dejan de pagar aunque tengan capacidad económica?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las razones pueden incluir prioridades financieras, falta de seguimiento, problemas de comunicación, desacuerdos comerciales o una baja percepción de urgencia frente a la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo influye la psicología en la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Comprender el comportamiento del cliente permite adaptar el lenguaje, las estrategias de negociación y las alternativas de pago para incrementar la probabilidad de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La empatía mejora los resultados de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Una comunicación empática y profesional facilita el diálogo, fortalece la confianza y favorece acuerdos de pago sostenibles.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es recomendable personalizar cada negociación?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Cada cliente tiene circunstancias diferentes, por lo que adaptar la negociación suele generar mejores resultados que utilizar mensajes genéricos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué errores psicológicos afectan una negociación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las amenazas, la falta de escucha, la presión excesiva, la comunicación agresiva y la ausencia de alternativas de pago suelen reducir las probabilidades de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Comprender el comportamiento del deudor evita procesos jurídicos?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En muchos casos sí, porque facilita acuerdos tempranos que permiten recuperar la cartera antes de acudir a mecanismos de cobro más complejos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PsicologiaDeudor />
    </>
  );
}
