import { Metadata } from "next";
import PsicologiaCobranza from "./PsicologiaCobranza";

export const metadata: Metadata = {
  title:
    "Psicología de la cobranza efectiva | Cómo influir positivamente en la decisión de pago",
  description:
    "Aprende cómo la comunicación, la empatía y la negociación influyen en la recuperación de cartera y la decisión de pago de los clientes.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/psicologia-de-cobranza",
  },

  openGraph: {
    title: "Psicología de la cobranza efectiva y recuperación de cartera",
    description:
      "Descubre cómo aplicar principios psicológicos para mejorar la comunicación y aumentar la recuperación de cartera.",
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
              headline: "Psicología de la cobranza efectiva",
              description:
                "Cómo la comunicación influye en la decisión de pago del cliente y mejora la recuperación de cartera.",
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
              dateModified: "2026-01-01",
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
                    text: "Es la aplicación de principios de comunicación, comportamiento humano y negociación para aumentar la probabilidad de recuperación de una deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante la empatía en la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite comprender la situación del cliente, facilitar acuerdos y mejorar la disposición para cumplir con el pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo influye la comunicación en la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una comunicación clara, profesional y respetuosa mejora la relación con el cliente y aumenta las probabilidades de pago.",
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
