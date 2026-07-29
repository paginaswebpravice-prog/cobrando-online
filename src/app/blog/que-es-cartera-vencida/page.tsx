import { Metadata } from "next";
import QueEsCarteraVencida from "./QueEsCarteraVencida";

export const metadata: Metadata = {
  title:
    "¿Qué es la cartera vencida? Cómo se clasifica, calcularla y reducirla en empresas (Guía 2026)",

  description:
    "Descubre qué es la cartera vencida, cómo se clasifica por días de mora, cómo calcular su porcentaje, cuáles son sus causas y las mejores estrategias para reducirla en tu empresa.",

  keywords: [
    "qué es cartera vencida",
    "cartera vencida",
    "cartera morosa",
    "clasificación cartera vencida",
    "cómo calcular cartera vencida",
    "porcentaje cartera vencida",
    "gestión de cartera vencida",
    "administración de cartera",
    "indicadores de cartera",
    "reducción cartera vencida",
    "cartera empresas",
    "control cartera vencida",
    "cuentas por cobrar",
    "mora clientes",
    "cartera comercial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/que-es-cartera-vencida",
  },

  openGraph: {
    title:
      "¿Qué es la cartera vencida? Cómo reducir la mora y proteger el flujo de caja",

    description:
      "Aprende cómo clasificar la cartera vencida, medir su impacto financiero y aplicar estrategias para reducir la mora en tu empresa.",

    url: "https://cobrandoonline.com/blog/que-es-cartera-vencida",

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
                "¿Qué es la cartera vencida? Cómo se clasifica y cómo reducirla en una empresa",

              description:
                "Guía completa para entender qué es la cartera vencida, cómo medirla, cuáles son sus causas y qué estrategias permiten disminuirla antes de afectar la liquidez del negocio.",

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
                "@id": "https://cobrandoonline.com/blog/que-es-cartera-vencida",
              },

              datePublished: "2026-06-11",

              dateModified: "2026-07-29",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cartera vencida corresponde al conjunto de cuentas por cobrar que superaron la fecha de vencimiento acordada sin que el cliente haya realizado el pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se clasifica la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Normalmente se clasifica según los días de mora, por ejemplo: 1 a 30, 31 a 60, 61 a 90, 91 a 180, 181 a 360 y más de 360 días.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo calcular el porcentaje de cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Se divide el valor de la cartera vencida entre el total de la cartera por cobrar y posteriormente se multiplica por cien para obtener el porcentaje.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué aumenta la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las causas más comunes son políticas de crédito deficientes, seguimiento insuficiente, problemas financieros del cliente, errores de facturación y ausencia de procesos de cobranza preventiva.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la cartera vencida en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Aplicando políticas de crédito, seguimiento permanente, recordatorios oportunos, evaluación del riesgo de clientes y procesos estructurados de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué controlar la cartera vencida es importante?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque impacta directamente el flujo de caja, la liquidez, la rentabilidad y la capacidad de crecimiento de cualquier empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <QueEsCarteraVencida />
    </>
  );
}
