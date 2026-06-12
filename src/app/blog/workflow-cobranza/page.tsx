import { Metadata } from "next";
import WorkflowCobranza from "./WorkflowCobranza";

export const metadata: Metadata = {
  title:
    "Workflow de cobranza automatizado: diseño y automatización de cartera",
  description:
    "Aprende cómo crear un workflow de cobranza automatizado para mejorar la recuperación de cartera y optimizar la gestión financiera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/workflow-cobranza",
  },

  openGraph: {
    title: "Workflow de cobranza automatizado para empresas",
    description:
      "Diseña flujos automatizados de cobranza para mejorar el seguimiento de clientes y reducir la morosidad.",
    url: "https://cobrandoonline.com/blog/workflow-cobranza",
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
                "Workflow de cobranza automatizado: cómo diseñar un proceso eficiente",
              description:
                "Guía para implementar workflows de cobranza automatizados y optimizar la recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/workflow-cobranza",
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
                  name: "¿Qué es un workflow de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un flujo de trabajo que automatiza tareas, comunicaciones y seguimientos dentro del proceso de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los beneficios de automatizar la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite reducir tareas manuales, mejorar el seguimiento de clientes, aumentar la productividad y mejorar la recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué herramientas permiten crear workflows de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRM, software de cartera, plataformas de automatización, ERP empresariales y herramientas de mensajería automatizada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <WorkflowCobranza />
    </>
  );
}
