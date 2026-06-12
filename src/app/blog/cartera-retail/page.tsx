import { Metadata } from "next";
import CarteraRetail from "./CarteraRetail";

export const metadata: Metadata = {
  title: "Cartera en retail: recuperación de cartera en comercio y tiendas",
  description:
    "Conoce las mejores estrategias para recuperar cartera en empresas de retail, comercio y ventas a crédito.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-retail",
  },

  openGraph: {
    title: "Cartera en retail: estrategias efectivas de cobranza para comercio",
    description:
      "Aprende cómo reducir la morosidad y mejorar la recuperación de cartera en el sector retail.",
    url: "https://cobrandoonline.com/blog/cartera-retail",
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
                "Cartera en retail: estrategias de recuperación de cartera en comercio y retail",
              description:
                "Guía para mejorar la recuperación de cartera en empresas del sector retail y comercio.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-retail",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-06-12",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera en retail?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de obligaciones pendientes derivadas de ventas a crédito, financiamiento de compras y otros mecanismos de pago diferido utilizados por empresas del sector retail.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera vencida en retail?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante cobranza preventiva, automatización de recordatorios, segmentación de clientes y seguimiento constante de los pagos pendientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores se utilizan para medir la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los más comunes son porcentaje de mora, tasa de recuperación, antigüedad de cartera, rotación y días promedio de recaudo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraRetail />
    </>
  );
}
