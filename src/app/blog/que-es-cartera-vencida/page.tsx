import { Metadata } from "next";
import QueEsCarteraVencida from "./QueEsCarteraVencida";

export const metadata: Metadata = {
  title: "¿Qué es la cartera vencida y cómo se clasifica? | Guía para empresas",

  description:
    "Aprende qué es la cartera vencida, cómo se clasifica según los días de mora y cuál es su impacto en la liquidez y salud financiera de las empresas.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/que-es-cartera-vencida",
  },

  openGraph: {
    title: "¿Qué es la cartera vencida y cómo se clasifica?",
    description:
      "Conoce qué es la cartera vencida, cómo se segmenta por días de mora y las mejores prácticas para reducirla.",
    url: "https://cobrandoonline.com/blog/que-es-cartera-vencida",
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
              headline: "¿Qué es la cartera vencida y cómo se clasifica?",
              description:
                "Guía para entender la clasificación de la cartera vencida y su impacto financiero.",
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
                "@id": "https://cobrandoonline.com/blog/que-es-cartera-vencida",
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
                  name: "¿Qué es la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de obligaciones que no fueron pagadas dentro del plazo acordado entre las partes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se clasifica la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Normalmente se clasifica por rangos de días de mora como 1-30, 31-60, 61-90, 91-180, 181-360 y más de 360 días.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante controlar la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque impacta directamente el flujo de caja, la liquidez y la estabilidad financiera de las empresas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <QueEsCarteraVencida />
    </>
  );
}
