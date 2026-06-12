import { Metadata } from "next";
import CrmCobranza from "./CrmCobranza";

export const metadata: Metadata = {
  title: "Uso de CRM en cobranza: cómo gestionar y automatizar la cartera",
  description:
    "Descubre cómo un CRM ayuda a automatizar procesos de cobranza, mejorar el seguimiento de clientes y aumentar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/crm-cobranza",
  },

  openGraph: {
    title: "CRM para cobranza: gestión eficiente de cartera empresarial",
    description:
      "Aprende cómo utilizar un CRM para optimizar la recuperación de cartera y automatizar procesos de cobranza.",
    url: "https://cobrandoonline.com/blog/crm-cobranza",
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
                "Uso de CRM en cobranza: cómo mejorar la gestión de cartera",
              description:
                "Guía para utilizar CRM en procesos de recuperación de cartera y automatización de cobranza.",
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
                "@id": "https://cobrandoonline.com/blog/crm-cobranza",
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
                  name: "¿Qué es un CRM para cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una herramienta que permite centralizar información de clientes, automatizar seguimientos y gestionar procesos de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué beneficios ofrece un CRM en cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite automatizar tareas, mejorar el seguimiento de clientes, controlar vencimientos y generar indicadores de gestión.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un CRM ayuda a reducir la morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Al mejorar el seguimiento, automatizar recordatorios y facilitar la gestión de cartera, contribuye a disminuir los niveles de mora.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CrmCobranza />
    </>
  );
}
