import { Metadata } from "next";
import CarteraPymes from "./CarteraPymes";

export const metadata: Metadata = {
  title:
    "Cartera en PYMES: estrategias de cobranza para pequeñas y medianas empresas",
  description:
    "Aprende cómo gestionar la cartera en PYMES, reducir la morosidad y mejorar el flujo de caja mediante estrategias efectivas de cobranza.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-pymes",
  },

  openGraph: {
    title:
      "Cartera en PYMES: cómo mejorar la recuperación de cartera empresarial",
    description:
      "Conoce estrategias de cobranza adaptadas a pequeñas y medianas empresas para reducir riesgos y mejorar la liquidez.",
    url: "https://cobrandoonline.com/blog/cartera-pymes",
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
                "Cartera en PYMES: estrategias de cobranza para pequeñas y medianas empresas",
              description:
                "Guía para gestionar cartera y reducir la morosidad en pequeñas y medianas empresas.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-pymes",
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
                  name: "¿Por qué la cartera es importante para una PYME?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque los pagos pendientes afectan directamente la liquidez y la capacidad operativa de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera vencida en una PYME?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando políticas de crédito, seguimiento preventivo y estrategias efectivas de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué herramientas ayudan a gestionar la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los sistemas CRM, plataformas de cobranza y herramientas de automatización permiten mejorar el control y seguimiento de los pagos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraPymes />
    </>
  );
}
