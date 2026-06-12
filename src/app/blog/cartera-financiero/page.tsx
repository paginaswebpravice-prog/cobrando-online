import { Metadata } from "next";
import CarteraFinanciero from "./CarteraFinanciero";

export const metadata: Metadata = {
  title:
    "Cartera en sector financiero: recuperación y administración de cartera",
  description:
    "Conoce cómo las entidades financieras gestionan y recuperan cartera para reducir la morosidad y mejorar su rentabilidad.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-financiero",
  },

  openGraph: {
    title: "Cartera en sector financiero: gestión y recuperación eficiente",
    description:
      "Aprende cómo bancos, cooperativas y entidades financieras administran y recuperan cartera para mantener su liquidez.",
    url: "https://cobrandoonline.com/blog/cartera-financiero",
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
                "Cartera en sector financiero: recuperación y administración de cartera",
              description:
                "Guía sobre gestión y recuperación de cartera en entidades financieras.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-financiero",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-06-12",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera en el sector financiero?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de créditos, préstamos y obligaciones que los clientes tienen con una entidad financiera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite mantener la liquidez, reducir pérdidas y mejorar la rentabilidad de la entidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se reduce la morosidad financiera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante análisis de riesgo, seguimiento continuo, automatización de cobranza y procesos efectivos de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraFinanciero />
    </>
  );
}
