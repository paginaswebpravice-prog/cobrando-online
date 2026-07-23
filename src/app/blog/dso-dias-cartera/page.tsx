import { Metadata } from "next";
import DsoDiasCartera from "./DsoDiasCartera";

export const metadata: Metadata = {
  title:
    "¿Qué es el DSO (Days Sales Outstanding)? Cómo calcular los días de cartera promedio y reducir la mora | Guía 2026",

  description:
    "Aprende qué es el DSO o Days Sales Outstanding, cómo calcular los días de cartera promedio, interpretar este KPI financiero y aplicar estrategias para reducir la mora y mejorar el flujo de caja de tu empresa.",

  keywords: [
    "DSO",
    "Days Sales Outstanding",
    "qué es DSO",
    "cómo calcular DSO",
    "días de cartera promedio",
    "indicador DSO",
    "KPI cartera",
    "indicador recuperación cartera",
    "rotación de cartera",
    "flujo de caja empresas",
    "gestión de cartera Colombia",
    "cobranza empresarial",
    "indicadores financieros cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dso-dias-cartera",
  },

  openGraph: {
    title:
      "DSO (Days Sales Outstanding): qué es, cómo calcularlo y cómo reducir los días de cartera",

    description:
      "Descubre cómo calcular el DSO, interpretar este indicador financiero y mejorar la recuperación de cartera para fortalecer el flujo de caja de tu empresa.",

    url: "https://cobrandoonline.com/blog/dso-dias-cartera",

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
                "¿Qué es el DSO (Days Sales Outstanding)? Cómo calcular los días de cartera promedio y mejorar la recuperación de cartera",

              description:
                "Guía completa para entender el DSO, calcular los días promedio de cobro, interpretar este indicador financiero y reducir la cartera vencida.",

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

                "@id": "https://cobrandoonline.com/blog/dso-dias-cartera",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-23",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué significa DSO?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "DSO significa Days Sales Outstanding y representa el número promedio de días que una empresa tarda en recuperar el dinero de las ventas realizadas a crédito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se calcula el DSO?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El DSO se obtiene dividiendo las cuentas por cobrar entre las ventas a crédito del período y multiplicando el resultado por el número de días analizados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indica un DSO alto?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un DSO elevado generalmente indica que la empresa tarda demasiado tiempo en recuperar sus cuentas por cobrar, lo que puede afectar el flujo de caja.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es un buen DSO?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No existe un valor único para todas las empresas. Un buen DSO dependerá del sector económico, las políticas de crédito y los plazos de pago otorgados a los clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir los días de cartera promedio?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito claras, seguimiento oportuno a la cartera, recordatorios automáticos, acuerdos de pago y procesos eficientes de recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DsoDiasCartera />
    </>
  );
}
