import { Metadata } from "next";
import CartaCobroPrejuridicoContent from "./CartaCobroPrejuridicoContent";

export const metadata: Metadata = {
  title:
    "Carta de cobro prejurídico en Colombia: ejemplo, formato y cómo redactarla | Guía 2026",

  description:
    "Aprende cómo elaborar una carta de cobro prejurídico en Colombia. Incluye ejemplo, formato, estructura, recomendaciones y buenas prácticas para recuperar cartera antes de iniciar otras etapas de gestión.",

  keywords: [
    "carta de cobro prejurídico",
    "modelo carta de cobro",
    "ejemplo carta de cobro",
    "formato carta cobro prejurídico",
    "cobranza prejurídica",
    "cobro administrativo",
    "recuperación de cartera",
    "carta de cobranza",
    "gestión de cartera",
    "cartera vencida",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/carta-cobro-prejuridico",
  },

  openGraph: {
    title:
      "Carta de cobro prejurídico: ejemplo, formato y guía para recuperar cartera",

    description:
      "Descubre cómo redactar una carta de cobro prejurídico profesional, qué información incluir y cómo aumentar la probabilidad de pago mediante una gestión de cobranza organizada.",

    url: "https://cobrandoonline.com/blog/carta-cobro-prejuridico",

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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Carta de cobro prejurídico en Colombia: ejemplo, formato y cómo redactarla para recuperar cartera",

              description:
                "Guía completa sobre cómo elaborar una carta de cobro prejurídico en Colombia. Conoce qué debe incluir, cuándo enviarla, ejemplos prácticos y recomendaciones para mejorar la recuperación de cartera mediante una gestión administrativa organizada.",

              keywords: [
                "carta de cobro prejurídico",
                "modelo carta de cobro",
                "ejemplo carta de cobro",
                "formato carta de cobro",
                "carta de cobranza",
                "cobranza prejurídica",
                "recuperación de cartera",
                "cobro administrativo",
                "gestión de cartera",
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
                  "https://cobrandoonline.com/blog/carta-cobro-prejuridico",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-17",

              inLanguage: "es",

              articleSection: "Recuperación de Cartera",

              wordCount: "2800",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una comunicación formal dirigida al deudor para informarle sobre una obligación pendiente de pago e invitarlo a regularizar la deuda mediante un pago o un acuerdo, antes de avanzar a otras etapas de gestión de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se recomienda enviar una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente se envía cuando la deuda presenta mora y los recordatorios de pago, llamadas o comunicaciones iniciales no han generado una respuesta satisfactoria por parte del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué información debe contener una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe identificar al deudor, indicar el valor pendiente, la fecha de vencimiento, el plazo para realizar el pago, los canales de contacto y una invitación clara para llegar a un acuerdo de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Una carta de cobro prejurídico ayuda a recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una comunicación clara, respetuosa y enviada oportunamente puede aumentar la probabilidad de pago, facilitar negociaciones y reducir los tiempos de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede utilizar un modelo de carta de cobro para diferentes clientes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que el contenido se adapte a cada caso y refleje correctamente los datos del deudor, el valor de la obligación, las fechas relevantes y las condiciones de pago aplicables.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el objetivo principal de una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Su objetivo es promover el pago voluntario de la obligación, fortalecer la comunicación con el cliente y mejorar la recuperación de cartera mediante una gestión administrativa organizada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CartaCobroPrejuridicoContent />
    </>
  );
}
