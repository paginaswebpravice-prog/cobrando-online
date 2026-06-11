import { Metadata } from "next";
import DocumentarAcuerdosPago from "./DocumentarAcuerdosPago";

export const metadata: Metadata = {
  title: "Cómo documentar acuerdos de pago correctamente | Guía para empresas",

  description:
    "Aprende cómo documentar acuerdos de pago de forma correcta para proteger la recuperación de cartera y fortalecer el respaldo legal.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/documentar-acuerdos-pago",
  },

  openGraph: {
    title: "Cómo documentar acuerdos de pago correctamente",
    description:
      "Guía práctica para crear acuerdos de pago con respaldo legal y reducir riesgos de incumplimiento.",
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
              headline: "Cómo documentar acuerdos de pago correctamente",
              description:
                "Guía sobre la importancia de documentar acuerdos de pago para fortalecer el respaldo legal y la recuperación de cartera.",
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
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
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
                    text: "Porque sirve como respaldo legal y evidencia de las condiciones pactadas entre acreedor y deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir identificación de las partes, valor de la deuda, plan de pagos, fechas, condiciones y firmas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Una firma electrónica tiene validez?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Siempre que permita demostrar la aceptación del acuerdo por parte del deudor y cumpla con los requisitos legales aplicables.",
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
