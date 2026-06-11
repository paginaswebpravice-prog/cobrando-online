import { Metadata } from "next";
import ImpactoCarteraVencidaEmpresa from "./ImpactoCarteraVencidaEmpresa";

export const metadata: Metadata = {
  title:
    "Impacto de la cartera vencida en las empresas | Liquidez, flujo de caja y crecimiento",

  description:
    "Descubre cómo la cartera vencida afecta la liquidez, el flujo de caja, la rentabilidad y el crecimiento de las empresas.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",
  },

  openGraph: {
    title: "Impacto de la cartera vencida en las empresas",
    description:
      "Conoce las consecuencias financieras de una cartera vencida elevada y cómo reducir sus efectos en la organización.",
    url: "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",
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
              headline: "Impacto de la cartera vencida en las empresas",
              description:
                "Artículo sobre los efectos financieros y operativos de la cartera vencida en las organizaciones.",
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
                  "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",
              },
              datePublished: "2026-06-11",
              dateModified: "2026-06-11",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo afecta la cartera vencida el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Reduce los ingresos disponibles para cubrir gastos operativos y obligaciones financieras de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La cartera vencida afecta la rentabilidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Incrementa costos de cobranza, genera provisiones contables y disminuye la rentabilidad del negocio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir el impacto de la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante políticas de crédito, seguimiento oportuno, automatización de cobranza y estrategias efectivas de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ImpactoCarteraVencidaEmpresa />
    </>
  );
}
