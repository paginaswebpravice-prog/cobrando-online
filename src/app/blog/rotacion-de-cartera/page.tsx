import { Metadata } from "next";
import RotacionCartera from "./RotacionCartera";

export const metadata: Metadata = {
  title:
    "Rotación de cartera: qué es, cómo calcularla y mejorar el recaudo de cuentas por cobrar (Guía 2026)",

  description:
    "Aprende qué es la rotación de cartera, cómo calcular este indicador financiero, interpretar sus resultados y aplicar estrategias para acelerar la recuperación de cuentas por cobrar y mejorar el flujo de caja.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/rotacion-de-cartera",
  },

  openGraph: {
    title:
      "Rotación de cartera: fórmula, ejemplos y estrategias para mejorar la recuperación de cuentas por cobrar",

    description:
      "Descubre cómo calcular la rotación de cartera, interpretar este KPI financiero y optimizar la gestión de cobranza para mejorar la liquidez empresarial.",

    url: "https://cobrandoonline.com/blog/rotacion-de-cartera",

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
                "Rotación de cartera: qué es, cómo calcularla y mejorar la recuperación de cuentas por cobrar",

              description:
                "Guía completa para entender la rotación de cartera, calcular este indicador financiero, interpretar sus resultados y optimizar la gestión de cobranza empresarial.",

              keywords: [
                "rotación de cartera",
                "cómo calcular la rotación de cartera",
                "indicador de cartera",
                "rotación de cuentas por cobrar",
                "kpi de cartera",
                "recuperación de cartera",
                "gestión de cartera",
                "cuentas por cobrar",
                "periodo promedio de cobro",
                "indicadores financieros",
              ],

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
                "@id": "https://cobrandoonline.com/blog/rotacion-de-cartera",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La rotación de cartera es un indicador financiero que muestra cuántas veces una empresa recupera sus cuentas por cobrar durante un período determinado. Se utiliza para medir la eficiencia de la gestión de cobranza y la velocidad con la que las ventas a crédito se convierten nuevamente en efectivo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se calcula la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente se calcula dividiendo las ventas a crédito del período entre el promedio de cuentas por cobrar. El resultado indica el número de veces que la cartera se recuperó durante ese período.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué significa tener una rotación de cartera alta?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una rotación alta suele indicar que la empresa recupera rápidamente el dinero de sus clientes, lo que favorece la liquidez y reduce el riesgo de cartera vencida.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué significa una rotación de cartera baja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una rotación baja puede evidenciar demoras en los pagos, procesos de cobranza poco eficientes, políticas de crédito inadecuadas o incremento de la cartera vencida.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto debe calcularse la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Muchas empresas realizan este cálculo mensualmente, trimestralmente y anualmente para identificar tendencias y evaluar el comportamiento de sus cuentas por cobrar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito claras, seguimiento permanente a las facturas, automatización de recordatorios, segmentación de clientes por riesgo y procesos de cobranza preventivos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores deben analizarse junto con la rotación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es recomendable revisar simultáneamente el DSO, el índice de morosidad, la antigüedad de cartera, el porcentaje de recuperación y el porcentaje de cartera vencida para obtener una visión financiera más completa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RotacionCartera />
    </>
  );
}
