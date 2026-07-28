import { Metadata } from "next";
import NotificacionMandamientoPago from "./NotificacionMandamientoPago";

export const metadata: Metadata = {
  title:
    "Mandamiento de pago en Colombia: qué es, cómo se notifica y qué sucede después (Guía 2026)",

  description:
    "Aprende qué es un mandamiento de pago, cómo funciona la notificación judicial, qué ocurre después y cómo impacta la recuperación de cartera de una empresa en Colombia.",

  keywords: [
    "mandamiento de pago",
    "qué es un mandamiento de pago",
    "notificación mandamiento de pago",
    "mandamiento de pago Colombia",
    "proceso ejecutivo Colombia",
    "cobro jurídico empresas",
    "recuperación de cartera",
    "cartera vencida",
    "proceso de cobro",
    "título ejecutivo",
    "cobro ejecutivo",
    "notificación judicial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",
  },

  openGraph: {
    title:
      "Mandamiento de pago en Colombia: cómo funciona la notificación y qué sigue",

    description:
      "Guía práctica para empresas sobre el mandamiento de pago, la notificación judicial y las etapas iniciales del cobro jurídico.",

    url: "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",

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
                "Mandamiento de pago en Colombia: qué es, cómo funciona la notificación y qué ocurre después",

              description:
                "Guía práctica para empresas sobre el mandamiento de pago, la notificación judicial y las primeras etapas del cobro jurídico para la recuperación de cartera.",

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
                  "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",
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

                  name: "¿Qué es un mandamiento de pago en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es una decisión emitida por un juez dentro de un proceso ejecutivo mediante la cual se ordena al deudor cumplir una obligación respaldada por un título ejecutivo válido.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se notifica un mandamiento de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La notificación puede realizarse por diferentes mecanismos autorizados por la legislación procesal colombiana, garantizando el derecho de defensa del deudor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué ocurre después de la notificación del mandamiento de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El deudor puede pagar la obligación, presentar las excepciones que considere procedentes o permitir que el proceso continúe hacia las siguientes etapas del cobro ejecutivo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿El mandamiento de pago significa que habrá embargo inmediato?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No necesariamente. El desarrollo del proceso dependerá de las actuaciones procesales, de la respuesta del deudor y de las decisiones adoptadas por el juez conforme a la ley.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo pueden las empresas reducir la necesidad de llegar a un mandamiento de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito, seguimiento oportuno de cartera, negociación preventiva y procesos de cobranza estructurados antes de acudir al cobro judicial.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <NotificacionMandamientoPago />
    </>
  );
}
