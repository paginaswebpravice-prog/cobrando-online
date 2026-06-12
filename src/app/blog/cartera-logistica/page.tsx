import { Metadata } from "next";
import CarteraLogistica from "./CarteraLogistica";

export const metadata: Metadata = {
  title:
    "Cartera en logística: cobranza para empresas de transporte y logística",
  description:
    "Aprende cómo gestionar la recuperación de cartera en empresas de transporte y logística para mejorar el flujo de caja.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-logistica",
  },

  openGraph: {
    title: "Cartera en logística: estrategias de cobranza para transporte",
    description:
      "Conoce las mejores prácticas para recuperar cartera en empresas de logística y transporte.",
    url: "https://cobrandoonline.com/blog/cartera-logistica",
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
                "Cartera en logística: cómo gestionar la cobranza en empresas de transporte y logística",
              description:
                "Guía sobre recuperación de cartera y cobranza para empresas del sector logístico.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-logistica",
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
                  name: "¿Por qué se generan retrasos en pagos en logística?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los retrasos suelen deberse a plazos de pago extensos, validaciones internas de los clientes y diferencias en la documentación de los servicios prestados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos ayudan a recuperar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Facturas, remisiones, órdenes de servicio, comprobantes de entrega y demás soportes relacionados con la prestación del servicio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera en logística?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento preventivo, automatización de recordatorios, validación documental y procesos de cobranza estructurados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraLogistica />
    </>
  );
}
