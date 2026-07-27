import { Metadata } from "next";
import IndicadoresBasicosCartera from "./IndicadoresBasicosCartera";

export const metadata: Metadata = {
  title:
    "Indicadores de cartera: cuáles son, cómo calcularlos y mejorar la recuperación de cartera",

  description:
    "Aprende cuáles son los principales indicadores de cartera utilizados por las empresas para medir la eficiencia de la cobranza, reducir la cartera vencida, mejorar el flujo de caja y optimizar la recuperación de cuentas por cobrar.",

  keywords: [
    "indicadores de cartera",
    "indicadores de cartera vencida",
    "indicadores de cobranza",
    "KPIs de cartera",
    "KPIs de cobranza",
    "métricas de cartera",
    "cómo medir la cartera",
    "rotación de cartera",
    "días promedio de cobro",
    "DSO cartera",
    "tasa de recuperación de cartera",
    "índice de cartera vencida",
    "gestión de cartera",
    "gestión de cobranza",
    "recuperación de cartera",
    "flujo de caja",
    "cuentas por cobrar",
    "control de cartera empresarial",
    "indicadores financieros cartera",
    "cartera empresarial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
  },

  openGraph: {
    title:
      "Indicadores de cartera: guía completa para medir la gestión de cobranza",

    description:
      "Descubre cuáles son los indicadores más importantes para controlar la cartera vencida, mejorar el recaudo, medir el desempeño de la cobranza y fortalecer la liquidez de tu empresa.",

    url: "https://cobrandoonline.com/blog/indicadores-basicos-cartera",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Indicadores de cartera: cómo medir la eficiencia de la cobranza",
    description:
      "Conoce los indicadores más importantes para evaluar la recuperación de cartera y optimizar el flujo de caja empresarial.",
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
                "Indicadores de cartera: cuáles son, cómo calcularlos y mejorar la recuperación de cartera",

              alternativeHeadline:
                "KPIs de cartera para medir la eficiencia de la gestión de cobranza",

              description:
                "Guía completa sobre los principales indicadores de cartera, cómo interpretarlos y utilizarlos para mejorar la recuperación de cuentas por cobrar y la liquidez empresarial.",

              image:
                "https://cobrandoonline.com/images/blog/indicadores-basicos-cartera.webp",

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cobrandoonline.com/logo.png",
                },
              },

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-27",

              inLanguage: "es-CO",

              articleSection: "Gestión de Cartera",

              keywords: [
                "indicadores de cartera",
                "KPIs de cobranza",
                "rotación de cartera",
                "índice de cartera vencida",
                "DSO",
                "recuperación de cartera",
                "cuentas por cobrar",
                "flujo de caja",
              ],

              about: {
                "@type": "Thing",
                name: "Indicadores de cartera",
              },

              isAccessibleForFree: true,
            },

            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://cobrandoonline.com",
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://cobrandoonline.com/blog",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Indicadores básicos de cartera",
                  item: "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "Cobrando Online",

              url: "https://cobrandoonline.com",

              logo: "https://cobrandoonline.com/logo.png",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué son los indicadores de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Son métricas utilizadas para evaluar el comportamiento de las cuentas por cobrar, medir la eficiencia de la gestión de cobranza y detectar riesgos de morosidad antes de que afecten la liquidez de la empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es el indicador más importante de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Depende del objetivo de la empresa, aunque normalmente el índice de cartera vencida, el DSO y la tasa de recuperación son los indicadores más utilizados para controlar el desempeño de la cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué significa el índice de cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Representa el porcentaje de las cuentas por cobrar que ya superaron la fecha de vencimiento frente al total de la cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué es el DSO en cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El DSO o Days Sales Outstanding indica el número promedio de días que tarda una empresa en recaudar el dinero de sus ventas a crédito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante medir la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite conocer qué tan rápido la empresa convierte sus cuentas por cobrar en efectivo y detectar posibles problemas de liquidez.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto deben revisarse los indicadores de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es analizarlos mensualmente, aunque empresas con altos volúmenes de crédito suelen revisarlos semanalmente e incluso diariamente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Los indicadores ayudan a reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Permiten identificar tendencias de mora, priorizar clientes de mayor riesgo y tomar decisiones oportunas antes de que aumenten las pérdidas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas deberían medir estos indicadores?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier empresa que venda productos o servicios a crédito, independientemente de su tamaño o sector económico.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar los indicadores de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito, automatizando la gestión de cobranza, realizando seguimiento permanente y utilizando estrategias de recuperación especializadas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IndicadoresBasicosCartera />
    </>
  );
}
