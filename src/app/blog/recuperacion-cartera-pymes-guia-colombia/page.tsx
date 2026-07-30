import { Metadata } from "next";
import RecuperacionCarteraPymes from "./RecuperacionCarteraPymes";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para PYMES en Colombia: estrategias para reducir la mora y mejorar el flujo de caja (Guía 2026)",

  description:
    "Descubre cómo recuperar cartera vencida en pequeñas y medianas empresas, reducir la mora, mejorar el flujo de caja e implementar estrategias efectivas de cobranza preventiva, prejurídica y jurídica en Colombia.",

  keywords: [
    "recuperación de cartera PYMES",
    "recuperación de cartera pequeñas empresas",
    "cobranza para PYMES",
    "gestión de cartera PYMES",
    "cartera vencida pequeñas empresas",
    "cómo recuperar cartera vencida",
    "flujo de caja PYMES",
    "estrategias de cobranza Colombia",
    "reducción de mora empresas",
    "empresa de cobranza Colombia",
    "cobro prejurídico PYMES",
    "cobro jurídico empresas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
  },

  openGraph: {
    title:
      "Recuperación de cartera para PYMES: guía completa para cobrar más rápido y reducir la mora",

    description:
      "Aprende cómo las PYMES pueden recuperar cartera vencida, reducir la morosidad y fortalecer su liquidez mediante estrategias profesionales de cobranza.",

    url: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",

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
                "Recuperación de cartera para PYMES en Colombia: guía completa para reducir la mora",

              description:
                "Guía práctica para pequeñas y medianas empresas sobre recuperación de cartera, cobranza preventiva, negociación, cobro prejurídico y mejora del flujo de caja.",

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
                  "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
              },

              image:
                "https://cobrandoonline.com/images/blog/recuperacion-cartera-pymes-guia-colombia.webp",

              datePublished: "2025-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",

              keywords: [
                "recuperación de cartera PYMES",
                "cobranza para pequeñas empresas",
                "recuperación de cartera Colombia",
                "flujo de caja",
                "gestión de cartera",
                "cartera vencida",
                "mora empresarial",
              ],
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

                  name: "Recuperación de cartera para PYMES",

                  item: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
                },
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la recuperación de cartera para PYMES?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de estrategias administrativas, preventivas, prejurídicas y jurídicas que permiten a una pequeña o mediana empresa recuperar facturas, cuentas por cobrar y obligaciones pendientes para mejorar su flujo de caja.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la mora en una pequeña empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito, seguimiento permanente, recordatorios automáticos, acuerdos de pago y procesos oportunos de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un cobro prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando las gestiones de cobranza preventiva no generan resultados y el cliente comienza a incumplir reiteradamente sus obligaciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo acudir a un cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el deudor incumple acuerdos de pago, evita responder o la deuda continúa aumentando pese a las gestiones realizadas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué la recuperación de cartera mejora el flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite convertir cuentas por cobrar en recursos disponibles para pagar proveedores, nómina, impuestos e invertir en el crecimiento de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraPymes />
    </>
  );
}
