import { Metadata } from "next";
import RiesgoCrediticio from "./RiesgoCrediticio";

export const metadata: Metadata = {
  title:
    "Qué es el riesgo crediticio en empresas y cómo reducirlo | Cobrando Online",

  description:
    "Aprende qué es el riesgo crediticio, cómo evaluar clientes antes de otorgar crédito y qué estrategias ayudan a reducir la morosidad empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",
  },

  openGraph: {
    title:
      "Riesgo crediticio en empresas: cómo evaluar clientes y evitar pérdidas",
    description:
      "Conoce qué es el riesgo crediticio y cómo proteger tu empresa mediante una correcta evaluación financiera de clientes.",
    url: "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",
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
                "Qué es el riesgo crediticio en empresas y cómo reducirlo",
              description:
                "Guía para entender el riesgo crediticio y evaluar clientes antes de otorgar crédito.",
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
                  "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-06-11",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el riesgo crediticio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la probabilidad de que una persona o empresa incumpla el pago de una obligación financiera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante evaluar el riesgo crediticio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite reducir la morosidad y tomar decisiones más seguras al otorgar crédito.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se reduce el riesgo crediticio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante análisis financieros, verificación de antecedentes y seguimiento constante de la cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RiesgoCrediticio />
    </>
  );
}
