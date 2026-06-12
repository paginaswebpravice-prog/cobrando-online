import { Metadata } from "next";
import CarteraTecnologia from "./CarteraTecnologia";

export const metadata: Metadata = {
  title:
    "Cartera en empresas tecnológicas: gestión de cartera para SaaS y tecnología",
  description:
    "Aprende cómo gestionar la recuperación de cartera en empresas SaaS, software y tecnología para mejorar la liquidez y reducir la mora.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-tecnologia",
  },

  openGraph: {
    title:
      "Cartera en empresas tecnológicas: estrategias de cobranza para SaaS",
    description:
      "Conoce cómo reducir la cartera vencida y optimizar la recuperación de pagos en empresas tecnológicas.",
    url: "https://cobrandoonline.com/blog/cartera-tecnologia",
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
                "Cartera en empresas tecnológicas: gestión de cartera en empresas SaaS y tecnología",
              description:
                "Guía sobre recuperación de cartera y gestión de cobranza en compañías tecnológicas.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-tecnologia",
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
                  name: "¿Qué es la cartera en empresas tecnológicas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Corresponde a los pagos pendientes derivados de suscripciones, licencias, desarrollos de software, consultorías y otros servicios tecnológicos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la mora en empresas SaaS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante automatización de cobros, recordatorios de pago, facturación eficiente y monitoreo constante de los clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores son importantes para medir la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "DSO, porcentaje de cartera vencida, tasa de recuperación, renovación de clientes y cumplimiento de pagos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraTecnologia />
    </>
  );
}
