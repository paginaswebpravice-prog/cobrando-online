import { Metadata } from "next";
import VentajasTercerizarRecuperacionDeCarteraContent from "./VentajasTercerizarRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "Ventajas de tercerizar la recuperación de cartera en Colombia | Cobranza eficiente",
  description:
    "Descubre las ventajas de tercerizar la recuperación de cartera en Colombia: mayor recaudo, reducción de riesgos y profesionalización del cobro.",

  keywords: [
    "tercerizar recuperacion de cartera",
    "outsourcing cobranza Colombia",
    "recuperacion de cartera empresas",
    "cobro de cartera externo",
    "gestion de cartera especializada",
    "reduccion mora empresas Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/ventajas-tercerizar-recuperacion-cartera",
  },

  openGraph: {
    title: "Ventajas de tercerizar la recuperación de cartera",
    description:
      "Conoce por qué tercerizar la gestión de cartera mejora el recaudo y reduce el riesgo financiero.",
    url: "https://cobrandoonline.com/blog/ventajas-tercerizar-recuperacion-cartera",
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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Ventajas de tercerizar la recuperación de cartera",
              description:
                "Conoce las ventajas de tercerizar la gestión de cartera para mejorar el recaudo y reducir riesgos financieros.",
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
                  "https://cobrandoonline.com/blog/ventajas-tercerizar-recuperacion-cartera",
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
                  name: "¿Por qué tercerizar la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque mejora la eficiencia del recaudo, reduce costos internos y permite contar con expertos en cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se pierde control al tercerizar la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, la empresa mantiene control mientras un equipo especializado gestiona el cobro de forma estructurada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <VentajasTercerizarRecuperacionDeCarteraContent />
    </>
  );
}
