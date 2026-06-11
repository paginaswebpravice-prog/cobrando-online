import { Metadata } from "next";
import ModeloAcuerdoPagoColombia from "./ModeloAcuerdoPagoColombia";

export const metadata: Metadata = {
  title:
    "Modelo de acuerdo de pago en Colombia | Formato práctico para cobrar deudas",

  description:
    "Descarga y conoce un modelo de acuerdo de pago en Colombia. Aprende qué debe incluir un acuerdo para recuperar cartera de forma organizada.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
  },

  openGraph: {
    title: "Modelo de acuerdo de pago en Colombia",
    description:
      "Guía práctica para elaborar acuerdos de pago efectivos y recuperar cartera sin procesos judiciales.",
    url: "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
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
              headline: "Modelo de acuerdo de pago en Colombia",
              description:
                "Formato práctico para estructurar acuerdos de pago y facilitar la recuperación de cartera.",
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
                  "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
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
                  name: "¿Qué es un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un documento mediante el cual el deudor reconoce una obligación y se compromete a cancelarla bajo condiciones previamente acordadas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir identificación de las partes, valor adeudado, fechas de pago, cuotas acordadas y condiciones por incumplimiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un acuerdo de pago tiene validez legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que exista evidencia de aceptación por parte del deudor y se cumplan los requisitos legales aplicables.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ModeloAcuerdoPagoColombia />
    </>
  );
}
