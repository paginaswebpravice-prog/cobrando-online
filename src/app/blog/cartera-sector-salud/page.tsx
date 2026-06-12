import { Metadata } from "next";
import CarteraSectorSalud from "./CarteraSectorSalud";

export const metadata: Metadata = {
  title: "Cartera en sector salud: recuperación de cartera para IPS y clínicas",
  description:
    "Conoce las mejores estrategias de recuperación de cartera para IPS, clínicas y entidades del sector salud en Colombia.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-sector-salud",
  },

  openGraph: {
    title: "Cartera en sector salud: cómo mejorar el recaudo en IPS y clínicas",
    description:
      "Aprende a gestionar cartera vencida, glosas y procesos de recuperación en el sector salud.",
    url: "https://cobrandoonline.com/blog/cartera-sector-salud",
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
                "Cartera en sector salud: estrategias para recuperar pagos en IPS y clínicas",
              description:
                "Guía sobre recuperación de cartera, glosas y recaudo en instituciones del sector salud.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-sector-salud",
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
                  name: "¿Qué es la cartera en el sector salud?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Corresponde a los valores pendientes de pago entre EPS, IPS, clínicas y demás entidades relacionadas con la prestación de servicios de salud.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué son las glosas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son objeciones realizadas sobre una factura o cuenta médica que pueden retrasar o afectar su pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera en salud?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento continuo, conciliaciones, control de glosas, automatización y procesos de cobranza estructurados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraSectorSalud />
    </>
  );
}
