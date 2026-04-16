import { Metadata } from "next";
import SeguimientoCarteraContent from "./SeguimientoCarteraContent";

export const metadata: Metadata = {
  title:
    "Seguimiento de cartera en Colombia | Control y trazabilidad en tiempo real",
  description:
    "Seguimiento de cartera en Colombia con acceso en línea, control total y trazabilidad completa en cada etapa del proceso de cobro. Mejora tu recaudo.",
  keywords: [
    "seguimiento de cartera Colombia",
    "control de cartera",
    "gestión de cobros",
    "trazabilidad cartera",
    "recuperar cartera seguimiento",
  ],
  alternates: {
    canonical: "https://cobrandoonline.com/servicios/seguimiento-de-cartera",
  },
  openGraph: {
    title:
      "Seguimiento de cartera en Colombia | Control y trazabilidad en tiempo real",
    description:
      "Visualiza el estado de tu cartera en tiempo real en Colombia con seguimiento estructurado, control total y trazabilidad completa.",
    url: "https://cobrandoonline.com/servicios/seguimiento-de-cartera",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
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
              "@type": "Article",
              headline:
                "Seguimiento de cartera en Colombia con control en tiempo real",
              description:
                "Sistema de seguimiento de cartera con trazabilidad completa, control y acceso en línea para empresas en Colombia.",
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
                  "https://cobrandoonline.com/servicios/seguimiento-de-cartera",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el seguimiento de cartera en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el control y trazabilidad de cada proceso de cobro para saber en qué estado está cada deuda en tiempo real.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante el seguimiento de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite tener control total del recaudo, evitar pérdidas y tomar decisiones informadas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoCarteraContent />
    </>
  );
}
