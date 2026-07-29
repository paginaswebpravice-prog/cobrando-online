import { Metadata } from "next";
import ProvisionCartera from "./ProvisionCartera";

export const metadata: Metadata = {
  title:
    "Provisión de cartera en Colombia (2026): qué es, cómo calcularla, ejemplos y deterioro de cuentas por cobrar",

  description:
    "Aprende qué es la provisión de cartera, cómo calcularla paso a paso, ejemplos prácticos, métodos de provisión, deterioro de cuentas por cobrar, NIIF y estrategias para disminuir el riesgo de incobrabilidad en tu empresa.",

  keywords: [
    "provisión de cartera",
    "provision de cartera colombia",
    "qué es provisión de cartera",
    "cómo calcular provisión de cartera",
    "provisión cuentas por cobrar",
    "deterioro cartera",
    "deterioro cuentas por cobrar",
    "provisión contable cartera",
    "provisión de deudores",
    "cartera incobrable",
    "provisión cartera NIIF",
    "riesgo cartera",
    "gestión de cartera",
    "cartera vencida",
    "cobrando online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/provision-cartera",
  },

  openGraph: {
    title:
      "Provisión de cartera en Colombia: cómo calcularla, ejemplos y métodos contables",

    description:
      "Conoce cómo calcular la provisión de cartera, cuándo debe reconocerse, ejemplos prácticos y cómo reducir el riesgo de incobrabilidad en las cuentas por cobrar.",

    url: "https://cobrandoonline.com/blog/provision-cartera",

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
                "Provisión de cartera en Colombia: qué es, cómo calcularla y ejemplos prácticos",

              description:
                "Guía completa sobre provisión de cartera, deterioro de cuentas por cobrar, métodos de cálculo, ejemplos y buenas prácticas para empresas.",

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
                "@id": "https://cobrandoonline.com/blog/provision-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-29",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la provisión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La provisión de cartera es una estimación contable que reconoce las posibles pérdidas derivadas de clientes que podrían incumplir el pago de sus obligaciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se calcula la provisión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Puede calcularse mediante porcentajes sobre la cartera vencida, análisis por antigüedad de saldos, evaluación individual de clientes o modelos de pérdida esperada conforme a las políticas contables de cada empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué diferencia existe entre provisión de cartera y castigo de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La provisión reconoce un riesgo futuro de pérdida, mientras que el castigo elimina contablemente una cuenta cuando la recuperación resulta prácticamente imposible.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué es el deterioro de cuentas por cobrar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es la disminución del valor recuperable de una cuenta por cobrar debido al incremento del riesgo de incumplimiento del deudor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo debe reconocerse una provisión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe reconocerse cuando existan evidencias objetivas de riesgo de incobrabilidad, aumento de la mora o deterioro en la capacidad de pago del cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante provisionar las cuentas por cobrar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite presentar estados financieros más confiables, anticipar pérdidas potenciales y tomar mejores decisiones financieras.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la provisión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando procesos de evaluación crediticia, seguimiento permanente, cobranza preventiva y recuperación oportuna de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Todas las empresas deben calcular provisión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las empresas que manejan cuentas por cobrar normalmente deben evaluar periódicamente el riesgo de incobrabilidad conforme a sus políticas contables y la normativa aplicable.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ProvisionCartera />
    </>
  );
}
