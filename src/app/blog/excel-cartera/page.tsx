import { Metadata } from "next";
import ExcelCartera from "./ExcelCartera";

export const metadata: Metadata = {
  title:
    "Plantilla de cartera en Excel: Dashboard para controlar cuentas por cobrar y cartera vencida (Guía 2026)",

  description:
    "Descubre cómo crear una plantilla de cartera en Excel con indicadores, gráficos y dashboards para controlar cuentas por cobrar, reducir la cartera vencida y mejorar el flujo de caja de tu empresa.",

  keywords: [
    "plantilla cartera excel",
    "excel cartera",
    "dashboard cartera excel",
    "control de cartera excel",
    "cuentas por cobrar excel",
    "plantilla cuentas por cobrar excel",
    "cartera vencida excel",
    "dashboard cuentas por cobrar",
    "indicadores cartera excel",
    "seguimiento cartera excel",
    "control cuentas por cobrar",
    "gestión cartera excel",
    "dashboard financiero excel",
    "plantilla cobranza excel",
    "control financiero excel",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/excel-cartera",
  },

  openGraph: {
    title:
      "Plantilla de cartera en Excel: Dashboard para controlar cuentas por cobrar",

    description:
      "Aprende cómo crear un Dashboard de cartera en Excel con indicadores financieros, gráficos y seguimiento de clientes morosos para mejorar la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/excel-cartera",

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
                "Plantilla de cartera en Excel: Dashboard para controlar cuentas por cobrar y cartera vencida",

              alternativeHeadline:
                "Cómo crear un Dashboard de cartera en Excel paso a paso",

              description:
                "Guía completa para crear una plantilla de cartera en Excel con indicadores financieros, gráficos, tablas dinámicas y herramientas para controlar cuentas por cobrar.",

              keywords: [
                "plantilla cartera excel",
                "dashboard cartera excel",
                "control cartera excel",
                "cuentas por cobrar excel",
                "dashboard financiero excel",
                "cartera vencida excel",
                "seguimiento cartera",
                "gestión de cartera",
              ],

              articleSection: "Gestión de Cartera",

              wordCount: "4300",

              inLanguage: "es",

              datePublished: "2025-01-01",

              dateModified: "2026-07-24",

              mainEntityOfPage: {
                "@type": "WebPage",

                "@id": "https://cobrandoonline.com/blog/excel-cartera",
              },

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              about: {
                "@type": "Thing",
                name: "Dashboard de cartera en Excel",
              },
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es una plantilla de cartera en Excel?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un archivo diseñado para controlar cuentas por cobrar, registrar pagos, calcular días de mora y visualizar indicadores financieros mediante tablas y gráficos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores debe tener un Dashboard de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir cartera corriente, cartera vencida, porcentaje de recuperación, DSO, índice de morosidad, rotación de cartera y valor total pendiente por cobrar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Excel sirve para administrar cuentas por cobrar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Muchas pequeñas y medianas empresas utilizan Excel para controlar facturas, registrar pagos y hacer seguimiento a clientes morosos antes de migrar a un software especializado.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo conviene migrar de Excel a un software de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el volumen de clientes, facturas y procesos de cobranza supera la capacidad de administración manual o se requiere automatización.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué gráficos ayudan a controlar mejor la cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los más utilizados son antigüedad de cartera, evolución mensual de recaudo, cartera por cliente, índice de morosidad y recuperación mensual.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la cartera vencida usando Excel?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Actualizando diariamente la información, realizando seguimiento a clientes morosos y utilizando indicadores que permitan priorizar las gestiones de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué funciones de Excel son útiles para gestionar cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "BUSCARX, SI, SUMAR.SI.CONJUNTO, CONTAR.SI.CONJUNTO, tablas dinámicas, gráficos dinámicos y formato condicional son algunas de las funciones más utilizadas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre una plantilla y un Dashboard de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La plantilla almacena la información de clientes y facturas, mientras que el Dashboard resume esa información mediante indicadores y gráficos para facilitar la toma de decisiones.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ExcelCartera />
    </>
  );
}
