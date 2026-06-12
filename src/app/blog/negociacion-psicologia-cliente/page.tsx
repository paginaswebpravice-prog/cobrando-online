import { Metadata } from "next";
import PsicologiaDeudor from "./PsicologiaDeudor";

export const metadata: Metadata = {
  title:
    "Psicología del deudor: cómo entender su comportamiento para recuperar cartera",
  description:
    "Aprende cómo la psicología del deudor influye en la cobranza y descubre estrategias para mejorar la negociación y recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/negociacion-psicologia-cliente",
  },

  openGraph: {
    title: "Psicología del deudor y recuperación de cartera",
    description:
      "Entiende el comportamiento de los deudores y mejora tus procesos de negociación y cobranza.",
    url: "https://cobrandoonline.com/blog/negociacion-psicologia-cliente",
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
                "Psicología del deudor: cómo entender su comportamiento para recuperar cartera",
              description:
                "Guía sobre los factores psicológicos que influyen en el pago de las deudas y cómo aplicarlos en la negociación.",
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
              dateModified: "2026-01-01",
              inLanguage: "es",
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
                    text: "Es el análisis de los comportamientos, motivaciones y factores emocionales que influyen en la decisión de pago de una deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante en la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite adaptar la comunicación y las estrategias de negociación para aumentar la probabilidad de recuperación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La empatía mejora la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Escuchar al cliente y comprender su situación suele facilitar acuerdos de pago y mejorar los resultados.",
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
