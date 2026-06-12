import { Metadata } from "next";
import DsoDiasCartera from "./DsoDiasCartera";

export const metadata: Metadata = {
  title:
    "DSO: días de cartera promedio y cómo calcular este indicador financiero",
  description:
    "Aprende qué es el DSO, cómo calcular los días de cartera promedio y por qué es un KPI clave para la gestión financiera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dso-dias-cartera",
  },

  openGraph: {
    title: "DSO: indicador de días de cartera promedio",
    description:
      "Conoce cómo calcular el DSO y mejorar la eficiencia de la recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/dso-dias-cartera",
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
                "DSO: días de cartera promedio y cómo medir la eficiencia de cobranza",
              description:
                "Guía para entender, calcular y optimizar el indicador DSO en la gestión de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/dso-dias-cartera",
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
                  name: "¿Qué significa DSO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "DSO significa Days Sales Outstanding y mide el tiempo promedio que tarda una empresa en cobrar sus ventas a crédito.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se calcula el DSO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se calcula dividiendo las cuentas por cobrar entre las ventas a crédito y multiplicando el resultado por el número de días del período analizado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un DSO alto es malo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente sí, porque indica que la empresa tarda más tiempo en recuperar el dinero de sus ventas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DsoDiasCartera />
    </>
  );
}
