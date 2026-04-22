import { Metadata } from "next";
import BuenasPracticasNegociarDeudores from "./BuenasPracticasNegociarDeudores";

export const metadata: Metadata = {
  title:
    "Cómo negociar con deudores en Colombia y lograr acuerdos de pago efectivos",
  description:
    "Aprende las mejores prácticas para negociar con deudores en Colombia. Logra acuerdos de pago efectivos, reduce la mora y recupera tu dinero más rápido.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",
  },

  openGraph: {
    title: "Cómo negociar con deudores y recuperar cartera en Colombia",
    description:
      "Guía práctica para negociar con deudores, lograr acuerdos efectivos y mejorar la recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",
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
                "Cómo negociar con deudores en Colombia y lograr acuerdos de pago",
              description:
                "Guía para negociar con deudores y mejorar la recuperación de cartera en Colombia.",
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
                  "https://cobrandoonline.com/blog/buenas-practicas-negociar-deudores",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué hacer si el deudor no responde?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda insistir por diferentes canales y documentar cada intento antes de escalar el caso a cobro jurídico.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo pasar a cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando no existe voluntad de pago o se incumplen los acuerdos establecidos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <BuenasPracticasNegociarDeudores />
    </>
  );
}
