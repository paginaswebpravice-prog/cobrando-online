import { Metadata } from "next";
import DocumentarAcuerdosPago from "./DocumentarAcuerdosPago";

export const metadata: Metadata = {
  title:
    "Cómo documentar un acuerdo de pago en Colombia | Guía para recuperar cartera (2026)",

  description:
    "Aprende cómo documentar un acuerdo de pago correctamente en Colombia. Descubre qué debe incluir, cómo darle respaldo legal, errores frecuentes y cómo aumentar la recuperación de cartera.",

  keywords: [
    "cómo documentar un acuerdo de pago",
    "acuerdo de pago Colombia",
    "formato acuerdo de pago",
    "modelo acuerdo de pago",
    "documento acuerdo de pago",
    "acuerdo de pago empresa cliente",
    "acuerdo de pago cartera vencida",
    "acuerdo de pago clientes morosos",
    "cómo hacer un acuerdo de pago",
    "recuperación de cartera",
    "cobranza empresarial",
    "cobro prejurídico",
    "acuerdo de pago con deudor",
    "acuerdo de pago persona jurídica",
    "acuerdo de pago ejemplo",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/documentar-acuerdos-pago",
  },

  openGraph: {
    title:
      "Cómo documentar un acuerdo de pago en Colombia y proteger la recuperación de cartera",

    description:
      "Conoce qué debe contener un acuerdo de pago, cómo darle mayor respaldo jurídico y qué errores evitar para recuperar deudas de forma más efectiva.",

    url: "https://cobrandoonline.com/blog/documentar-acuerdos-pago",

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
                "Cómo documentar un acuerdo de pago en Colombia para recuperar cartera",

              description:
                "Guía completa para documentar acuerdos de pago correctamente, fortalecer el respaldo legal de las obligaciones y aumentar la recuperación de cartera empresarial.",

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
                  "https://cobrandoonline.com/blog/documentar-acuerdos-pago",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-23",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Por qué es importante documentar un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite dejar evidencia de la obligación, las condiciones pactadas y facilita futuras acciones de cobro prejurídico o jurídico en caso de incumplimiento.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe contener un acuerdo de pago en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir identificación de las partes, valor de la deuda, cronograma de pagos, fechas, forma de pago, consecuencias del incumplimiento y aceptación de ambas partes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un acuerdo firmado por WhatsApp tiene validez?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso, los mensajes de WhatsApp pueden servir como evidencia dentro de un proceso, especialmente cuando permiten demostrar la aceptación de las condiciones pactadas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer si el deudor incumple el acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Se recomienda iniciar nuevamente la gestión de cobro y, cuando corresponda, evaluar acciones de cobro prejurídico o jurídico con base en la documentación disponible.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Se puede modificar un acuerdo de pago después de firmado?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí, siempre que ambas partes acepten las nuevas condiciones y estas queden documentadas por escrito.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DocumentarAcuerdosPago />
    </>
  );
}
