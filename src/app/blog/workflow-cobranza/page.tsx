import { Metadata } from "next";
import WorkflowCobranza from "./WorkflowCobranza";

export const metadata: Metadata = {
  title:
    "Workflow de cobranza automatizado: cómo diseñar un proceso para recuperar más cartera | Guía 2026",

  description:
    "Aprende cómo crear un workflow de cobranza automatizado para empresas en Colombia. Descubre las etapas, herramientas, indicadores y estrategias para reducir la cartera vencida, automatizar seguimientos y aumentar el recaudo.",

  keywords: [
    "workflow de cobranza",
    "workflow de cobranza automatizado",
    "workflow recuperación de cartera",
    "automatización de cobranza",
    "automatización recuperación de cartera",
    "flujo de cobranza",
    "flujo de recuperación de cartera",
    "software de cobranza",
    "software recuperación cartera",
    "CRM cobranza",
    "automatización cartera empresas",
    "gestión automatizada de cartera",
    "seguimiento automatizado cartera",
    "workflow cartera vencida",
    "proceso de cobranza automatizado",
    "gestión de cartera Colombia",
    "recuperación de cartera empresas",
    "automatización financiera",
    "cobranza empresarial",
    "software cartera Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/workflow-cobranza",
  },

  openGraph: {
    title:
      "Workflow de cobranza automatizado: reduce la mora y mejora el recaudo empresarial",

    description:
      "Descubre cómo diseñar un workflow de cobranza automatizado para mejorar el seguimiento de clientes, reducir la mora y optimizar la recuperación de cartera.",

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
      {/* ======================= SCHEMA SEO ======================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",

              "@type": "BlogPosting",

              headline:
                "Workflow de cobranza automatizado: cómo diseñar un proceso eficiente para recuperar más cartera",

              alternativeHeadline:
                "Guía para automatizar la recuperación de cartera mediante workflows inteligentes",

              description:
                "Aprende cómo diseñar un workflow de cobranza automatizado para optimizar el seguimiento de clientes, reducir la cartera vencida y aumentar el recaudo empresarial.",

              image:
                "https://cobrandoonline.com/images/blog/workflow-cobranza.webp",

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

              datePublished: "2025-01-01",

              dateModified: "2026-01-01",

              inLanguage: "es-CO",

              wordCount: 4800,

              about: [
                "Workflow de cobranza",
                "Automatización de cartera",
                "Recuperación de cartera",
                "Software de cobranza",
                "Gestión financiera empresarial",
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Workflow automatizado",
                },
                {
                  "@type": "Thing",
                  name: "CRM",
                },
                {
                  "@type": "Thing",
                  name: "ERP",
                },
                {
                  "@type": "Thing",
                  name: "WhatsApp Business",
                },
                {
                  "@type": "Thing",
                  name: "Software de recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Indicadores de cartera",
                },
              ],
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

                    text: "Es un flujo de trabajo automatizado que organiza todas las actividades relacionadas con la recuperación de cartera, desde los recordatorios preventivos hasta el cierre de la obligación o el escalamiento hacia procesos especializados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué automatizar un proceso de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque reduce tareas manuales, mejora el seguimiento de clientes, disminuye errores operativos, aumenta la productividad del equipo y mejora el porcentaje de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué herramientas permiten implementar un workflow de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "CRM, ERP, software especializado de recuperación de cartera, plataformas de automatización, WhatsApp Business API y herramientas de correo electrónico automatizado.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre un workflow manual y uno automatizado?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En un proceso manual cada gestor controla las actividades de forma individual. En un workflow automatizado las tareas, recordatorios, seguimientos y asignaciones se ejecutan automáticamente según reglas previamente definidas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores permiten medir un workflow de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los principales indicadores son porcentaje de recuperación, DSO, rotación de cartera, tiempo promedio de recaudo, cumplimiento de acuerdos de pago, productividad por gestor y reducción de cartera vencida.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un workflow automatizado reemplaza al equipo de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. Automatiza tareas repetitivas y administrativas para que el equipo de cobranza pueda concentrarse en negociaciones complejas, acuerdos de pago y casos estratégicos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas deberían implementar un workflow de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es especialmente útil para empresas con ventas a crédito, IPS, constructoras, distribuidores, empresas B2B, instituciones educativas y organizaciones que administran un alto volumen de cuentas por cobrar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo ayuda un workflow a reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Al automatizar recordatorios, seguimientos, acuerdos de pago y escalamientos, el workflow evita olvidos, mejora la comunicación con el cliente y aumenta la probabilidad de recaudo oportuno.",
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
