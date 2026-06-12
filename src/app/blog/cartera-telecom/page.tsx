import { Metadata } from "next";
import CarteraTelecom from "./CarteraTelecom";

export const metadata: Metadata = {
  title:
    "Cartera en telecomunicaciones: estrategias de cobranza y recuperación",
  description:
    "Aprende cómo gestionar la cartera en telecomunicaciones, reducir la morosidad y optimizar los procesos de cobranza.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-telecom",
  },

  openGraph: {
    title:
      "Cartera en telecomunicaciones: cómo mejorar la recuperación de pagos",
    description:
      "Estrategias para administrar cartera y reducir la mora en empresas de telecomunicaciones.",
    url: "https://cobrandoonline.com/blog/cartera-telecom",
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
                "Cartera en telecomunicaciones: estrategias de cobranza y recuperación",
              description:
                "Guía para gestionar cartera y reducir la morosidad en empresas de telecomunicaciones.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-telecom",
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
                  name: "¿Por qué es importante la cartera en telecomunicaciones?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque los servicios suelen facturarse periódicamente y la mora afecta directamente el flujo de caja y la rentabilidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué herramientas ayudan a recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los sistemas de automatización, recordatorios por WhatsApp, correo electrónico y segmentación de clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la morosidad en telecomunicaciones?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando estrategias preventivas, seguimiento constante y acuerdos de pago oportunos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraTelecom />
    </>
  );
}
