import { Metadata } from "next";
import RecuperacionCarteraPymesContent from "./RecuperacionCarteraPymesContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para PYMES en Colombia (Guía 2026): estrategias para cobrar más rápido y reducir la mora",

  description:
    "Descubre cómo hacer una recuperación de cartera efectiva para PYMES en Colombia. Aprende estrategias de cobranza, gestión prejurídica, cobro jurídico y buenas prácticas para reducir la cartera vencida y mejorar el flujo de caja.",

  keywords: [
    "recuperación de cartera pymes",
    "recuperacion de cartera para pequeñas empresas",
    "cobro de cartera pymes Colombia",
    "gestión de cartera pymes",
    "cartera vencida pymes",
    "cómo recuperar cartera vencida",
    "estrategias de cobranza para pymes",
    "cobranza empresarial Colombia",
    "flujo de caja pymes",
    "recuperación de cartera empresarial",
    "gestión de cobranza Colombia",
    "cobro prejurídico pymes",
    "cobro jurídico empresas",
    "reducir mora empresas",
    "empresa de recuperación de cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",
  },

  openGraph: {
    title:
      "Recuperación de cartera para PYMES en Colombia: cómo cobrar más rápido y reducir la mora",

    description:
      "Aprende cómo las pequeñas y medianas empresas pueden recuperar cartera vencida, mejorar su liquidez y disminuir la morosidad mediante estrategias profesionales de cobranza.",

    url: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",

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
      {/* ================= SCHEMA SEO ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Recuperación de cartera para PYMES en Colombia: estrategias para reducir la mora y mejorar el flujo de caja",

              description:
                "Guía completa sobre recuperación de cartera para pequeñas y medianas empresas en Colombia, incluyendo estrategias preventivas, cobro prejurídico, cobro jurídico e indicadores financieros.",

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
                  "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la recuperación de cartera para una PYME?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de estrategias preventivas, administrativas, prejurídicas y jurídicas que permiten recuperar cuentas por cobrar pendientes y mejorar el flujo de caja de una pequeña o mediana empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué la cartera vencida afecta más a las pequeñas empresas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque las PYMES dependen en mayor medida del flujo de caja diario para pagar proveedores, nómina, impuestos y continuar operando, por lo que los retrasos en los pagos generan un impacto financiero inmediato.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo debe iniciar una PYME la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es comenzar desde los primeros días de mora mediante recordatorios y seguimiento preventivo, evitando que la deuda aumente su antigüedad y disminuyan las probabilidades de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios obtiene una PYME con una buena gestión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Reduce la morosidad, mejora la liquidez, disminuye el riesgo financiero, fortalece el flujo de caja y permite destinar más recursos al crecimiento del negocio.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraPymesContent />
    </>
  );
}
