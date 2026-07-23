import { Metadata } from "next";
import CrmCobranza from "./CrmCobranza";

export const metadata: Metadata = {
  title:
    "CRM para Cobranza: Cómo Automatizar la Gestión de Cartera y Recuperar Más Pagos (Guía 2026)",

  description:
    "Descubre cómo un CRM para cobranza ayuda a automatizar el seguimiento de clientes, reducir la cartera vencida, mejorar el flujo de caja y aumentar la recuperación de pagos en empresas colombianas.",

  keywords: [
    "CRM cobranza",
    "CRM para cobranza",
    "CRM recuperación de cartera",
    "software de cobranza",
    "software gestión de cartera",
    "CRM cartera vencida",
    "automatización de cobranza",
    "seguimiento de cartera",
    "CRM empresas Colombia",
    "CRM para cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/crm-cobranza",
  },

  openGraph: {
    title:
      "CRM para Cobranza: Automatiza la Recuperación de Cartera y Reduce la Mora",

    description:
      "Aprende cómo implementar un CRM para cobranza, automatizar procesos de cartera y mejorar los indicadores financieros de tu empresa.",

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
                "CRM para Cobranza: Cómo Automatizar la Gestión de Cartera y Recuperar Más Pagos",

              description:
                "Guía completa para implementar un CRM en procesos de cobranza, automatizar el seguimiento de clientes, reducir la cartera vencida y mejorar los indicadores de recuperación.",

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

                    text: "Es un software que permite centralizar la información de clientes, automatizar recordatorios de pago, registrar gestiones de cobranza y controlar el estado de las cuentas por cobrar desde una única plataforma.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo ayuda un CRM a recuperar cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un CRM mejora el seguimiento de clientes, automatiza comunicaciones, organiza acuerdos de pago, genera alertas y facilita la priorización de las cuentas con mayor riesgo de mora.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas deberían implementar un CRM para cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier empresa que otorgue crédito o maneje cuentas por cobrar puede beneficiarse de un CRM, especialmente compañías B2B, IPS, constructoras, distribuidores y empresas de servicios.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre un CRM comercial y un CRM para cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mientras un CRM comercial se enfoca en ventas y oportunidades de negocio, un CRM para cobranza incorpora herramientas para administrar cartera, controlar vencimientos, automatizar cobros y medir indicadores financieros.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un CRM puede integrarse con un ERP o software contable?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Muchos CRM permiten integraciones con ERP, sistemas de facturación y software contable para sincronizar información financiera y optimizar la gestión de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un CRM ayuda a reducir la morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Al automatizar recordatorios, organizar seguimientos y facilitar la toma de decisiones, un CRM contribuye a disminuir los niveles de mora y aumentar la recuperación de cartera.",
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
