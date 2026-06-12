import { Metadata } from "next";
import ExcelCartera from "./ExcelCartera";

export const metadata: Metadata = {
  title: "Dashboard de cartera en Excel: plantilla para control financiero",
  description:
    "Aprende cómo crear un dashboard de cartera en Excel para controlar cuentas por cobrar, analizar indicadores y mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/excel-cartera",
  },

  openGraph: {
    title: "Dashboard de cartera en Excel para cuentas por cobrar",
    description:
      "Guía para crear plantillas de cartera en Excel con indicadores financieros y gráficos de cobranza.",
    url: "https://cobrandoonline.com/blog/excel-cartera",
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
                "Dashboard de cartera en Excel para controlar cuentas por cobrar",
              description:
                "Guía para crear dashboards de cartera en Excel y mejorar la gestión financiera empresarial.",
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
                "@id": "https://cobrandoonline.com/blog/excel-cartera",
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
                  name: "¿Qué es un dashboard de cartera en Excel?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una plantilla que permite visualizar indicadores, gráficos y datos relacionados con las cuentas por cobrar de una empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores debe incluir un dashboard de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir cartera vencida, cartera corriente, DSO, porcentaje de recuperación, índice de morosidad y rotación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Excel sirve para gestionar cartera empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Excel es una herramienta ampliamente utilizada para controlar cuentas por cobrar y analizar indicadores financieros, especialmente en pequeñas y medianas empresas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ExcelCartera />
    </>
  );
}
