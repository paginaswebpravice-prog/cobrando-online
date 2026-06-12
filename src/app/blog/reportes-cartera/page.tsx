import { Metadata } from "next";
import ReportesCartera from "./ReportesCartera";

export const metadata: Metadata = {
  title: "Reportes de cartera: cómo estructurar informes efectivos de cobranza",
  description:
    "Aprende cómo elaborar reportes de cartera claros y efectivos para mejorar la gestión de cobranza y controlar las cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/reportes-cartera",
  },

  openGraph: {
    title: "Reportes de cartera: guía para una mejor gestión financiera",
    description:
      "Conoce cómo estructurar reportes de cartera para controlar la mora y optimizar la recuperación de cuentas por cobrar.",
    url: "https://cobrandoonline.com/blog/reportes-cartera",
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
                "Reportes de cartera: cómo estructurar informes efectivos de cobranza",
              description:
                "Guía para crear reportes de cartera claros, útiles y orientados a la toma de decisiones.",
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
                "@id": "https://cobrandoonline.com/blog/reportes-cartera",
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
                  name: "¿Qué es un reporte de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un informe que muestra el estado de las cuentas por cobrar, los saldos pendientes y los niveles de mora de una empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué información debe contener un reporte de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir clientes, saldos pendientes, fechas de vencimiento, días de mora, estado de cobranza y observaciones relevantes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué son importantes los reportes de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permiten controlar la cartera, identificar riesgos financieros y mejorar la toma de decisiones relacionadas con la cobranza.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReportesCartera />
    </>
  );
}
