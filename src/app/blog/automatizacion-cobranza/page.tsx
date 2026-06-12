import { Metadata } from "next";
import AutomatizacionCobranza from "./AutomatizacionCobranza";

export const metadata: Metadata = {
  title:
    "Automatización de cobranza: cómo optimizar la recuperación de cartera",
  description:
    "Aprende cómo automatizar procesos de cobranza para aumentar la eficiencia, reducir la morosidad y mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/automatizacion-cobranza",
  },

  openGraph: {
    title: "Automatización de cobranza para mejorar la recuperación de cartera",
    description:
      "Guía sobre automatización de procesos de cobranza, seguimiento de clientes y gestión eficiente de cartera.",
    url: "https://cobrandoonline.com/blog/automatizacion-cobranza",
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
                "Automatización de cobranza: cómo mejorar la recuperación de cartera",
              description:
                "Guía para implementar automatización en procesos de cobranza y optimizar la gestión de cartera.",
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
                  "https://cobrandoonline.com/blog/automatizacion-cobranza",
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
                  name: "¿Qué es la automatización de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el uso de tecnología para ejecutar tareas de cobranza de forma automática, reduciendo procesos manuales y mejorando la eficiencia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué procesos de cobranza pueden automatizarse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pueden automatizarse recordatorios de pago, correos electrónicos, mensajes de WhatsApp, seguimiento de acuerdos y generación de reportes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La automatización reemplaza a los asesores de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. La automatización complementa el trabajo humano permitiendo que los asesores se enfoquen en negociaciones y casos más complejos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AutomatizacionCobranza />
    </>
  );
}
