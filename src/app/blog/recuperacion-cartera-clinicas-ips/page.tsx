import { Metadata } from "next";
import RecuperacionCarteraClinicasIPS from "./RecuperacionCarteraClinicasIPS";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para IPS y clínicas en Colombia (2026): cómo cobrar deudas de EPS y mejorar el flujo de caja",

  description:
    "Descubre cómo recuperar cartera en IPS, clínicas y hospitales en Colombia. Aprende estrategias para cobrar facturas vencidas, reducir glosas, negociar con EPS y decidir cuándo iniciar cobro jurídico.",

  keywords: [
    "recuperación de cartera IPS",
    "recuperación de cartera clínicas",
    "cobro cartera EPS",
    "cobranza sector salud Colombia",
    "cartera vencida IPS",
    "cartera hospitales",
    "cómo recuperar cartera EPS",
    "glosas EPS",
    "cobro jurídico IPS",
    "gestión de cartera sector salud",
    "facturas vencidas EPS",
    "liquidez IPS",
    "recuperación cartera hospitales",
    "servicio recuperación de cartera IPS",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera en IPS y clínicas: estrategias para reducir la mora y mejorar la liquidez",

    description:
      "Guía práctica para IPS, clínicas y hospitales que necesitan recuperar cartera vencida, disminuir glosas y fortalecer su flujo de caja.",

    url: "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
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
                "Recuperación de cartera para IPS y clínicas en Colombia: estrategias para cobrar cuentas pendientes y mejorar la liquidez",

              description:
                "Aprende cómo recuperar cartera en clínicas, hospitales e IPS mediante procesos preventivos, prejurídicos y jurídicos para disminuir la mora.",

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
                "@id":
                  "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
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
                  name: "¿Por qué las IPS acumulan cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las principales causas son retrasos en los pagos de EPS, glosas, devoluciones, diferencias en auditorías médicas, procesos administrativos extensos y falta de seguimiento permanente.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera en el sector salud?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable implementar seguimiento permanente, conciliación de glosas, negociación temprana, indicadores de cartera, automatización de cobranza y, cuando sea necesario, iniciar cobro jurídico.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico contra una EPS o deudor?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando las gestiones preventivas y prejurídicas no generan resultados y existe riesgo de prescripción o pérdida de la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La recuperación de cartera mejora el flujo de caja de una IPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Recuperar cuentas pendientes permite aumentar la liquidez, cumplir obligaciones financieras y reducir la dependencia de créditos externos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraClinicasIPS />
    </>
  );
}
