import { Metadata } from "next";
import CarteraServicios from "./CarteraServicios";

export const metadata: Metadata = {
  title: "Cartera en empresas de servicios: gestión y recuperación de pagos",
  description:
    "Aprende cómo gestionar la cartera en empresas de servicios profesionales y mejorar la recuperación de pagos pendientes.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-servicios",
  },

  openGraph: {
    title:
      "Cartera en empresas de servicios: estrategias de cobranza efectivas",
    description:
      "Conoce cómo reducir la morosidad y mejorar el flujo de caja mediante una adecuada gestión de cartera en empresas de servicios.",
    url: "https://cobrandoonline.com/blog/cartera-servicios",
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
                "Cartera en empresas de servicios: gestión y recuperación de pagos",
              description:
                "Guía para mejorar la gestión de cartera y la recuperación de pagos en empresas de servicios profesionales.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-servicios",
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
                  name: "¿Por qué es importante la gestión de cartera en empresas de servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque estas empresas suelen prestar el servicio antes de recibir el pago, por lo que la liquidez depende directamente de una cobranza eficiente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera vencida en empresas de servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante contratos claros, seguimiento preventivo, facturación oportuna y estrategias de cobranza estructuradas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos ayudan a recuperar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Contratos, órdenes de servicio, actas de entrega, correos de aceptación y facturas emitidas correctamente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraServicios />
    </>
  );
}
