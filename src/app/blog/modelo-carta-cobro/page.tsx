import { Metadata } from "next";
import ModeloCartaCobro from "./ModeloCartaCobro";

export const metadata: Metadata = {
  title:
    "Modelo de carta de cobro para empresas: formatos y ejemplos para recuperar cartera",

  description:
    "Conoce modelos de carta de cobro para empresas, ejemplos de cobranza preventiva, cartera vencida y comunicaciones para recuperar pagos pendientes.",

  keywords: [
    "modelo carta de cobro",
    "modelo carta de cobro Colombia",
    "formato carta de cobro",
    "carta de cobro para clientes morosos",
    "ejemplo carta de cobranza",
    "carta para recuperar cartera",
    "formatos de cobranza empresarial",
    "gestión de cartera empresarial",
  ],

  authors: [
    {
      name: "Cobrando Online",
    },
  ],

  category: "Cobranza empresarial",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/modelo-carta-cobro",
  },

  openGraph: {
    title:
      "Modelo de carta de cobro para empresas: ejemplos listos para gestionar cartera",

    description:
      "Aprende cómo redactar cartas de cobro profesionales para clientes morosos y mejorar la recuperación de cartera empresarial.",

    url: "https://cobrandoonline.com/blog/modelo-carta-cobro",

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
                "Modelo de carta de cobro para empresas: formatos y ejemplos de cobranza",

              description:
                "Guía práctica con modelos de carta de cobro para gestionar clientes morosos, cartera vencida y procesos de recuperación empresarial.",

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
                "@id": "https://cobrandoonline.com/blog/modelo-carta-cobro",
              },

              about: [
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
              ],

              datePublished: "2026-01-01",

              dateModified: "2026-01-01",

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es una carta de cobro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una comunicación formal utilizada para informar y solicitar el pago de obligaciones pendientes a clientes o deudores.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir una carta de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir datos del cliente, valor adeudado, fecha de vencimiento, información de contacto y una solicitud clara de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Las cartas de cobro tienen validez como soporte?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Las cartas ayudan a documentar las gestiones realizadas y pueden servir como evidencia dentro de procesos de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de carta de cobro debe enviar una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Depende del estado de la cartera. Puede utilizarse una carta preventiva antes del vencimiento, una carta de mora temprana o una comunicación formal para cartera vencida.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Una carta de cobro ayuda a recuperar cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Una comunicación clara y oportuna permite recordar obligaciones pendientes, generar evidencia de gestión y facilitar acuerdos de pago con clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe evitar una carta de cobranza empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe evitar amenazas, información incorrecta, lenguaje agresivo o mensajes que deterioren la relación comercial con el cliente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ModeloCartaCobro />
    </>
  );
}
