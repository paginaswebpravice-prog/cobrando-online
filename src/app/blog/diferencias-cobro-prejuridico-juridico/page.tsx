import { Metadata } from "next";
import DiferenciasCobroPrejuridicoJuridicoContent from "./DiferenciasCobroPrejuridicoJuridicoContent";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico vs. cobro jurídico en Colombia: diferencias, ventajas y cuándo usar cada uno | Guía 2026",

  description:
    "Descubre las diferencias entre el cobro prejurídico y el cobro jurídico en Colombia. Aprende cuándo utilizar cada estrategia, cómo recuperar cartera más rápido y cuándo pasar de la negociación a la vía judicial.",

  keywords: [
    "cobro prejurídico",
    "cobro jurídico",
    "diferencias cobro prejurídico y jurídico",
    "cobro prejuridico Colombia",
    "cobro juridico Colombia",
    "recuperación de cartera",
    "gestión de cartera",
    "cobranza empresarial",
    "proceso ejecutivo Colombia",
    "cobro de cartera empresas",
    "cartera vencida",
    "negociación de cartera",
    "cobranza extrajudicial",
    "cobro judicial empresas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",
  },

  openGraph: {
    title:
      "Cobro prejurídico vs. cobro jurídico: diferencias, ventajas y cuál conviene según el tipo de deuda",

    description:
      "Conoce cuándo utilizar el cobro prejurídico y cuándo iniciar un cobro jurídico. Aprende cómo aumentar la recuperación de cartera empresarial en Colombia.",

    url: "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",

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
                "Cobro prejurídico vs. cobro jurídico en Colombia: diferencias, ventajas y cuándo utilizar cada uno",

              description:
                "Guía completa para entender las diferencias entre el cobro prejurídico y el cobro jurídico, sus ventajas, tiempos, costos y el momento adecuado para utilizar cada estrategia de recuperación de cartera.",

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
                  "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",
              },

              articleSection: "Recuperación de Cartera",

              keywords:
                "Cobro prejurídico, Cobro jurídico, Recuperación de cartera, Gestión de cartera, Cobranza empresarial",

              wordCount: 4200,

              inLanguage: "es-CO",

              datePublished: "2025-01-01",

              dateModified: "2026-07-23",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué diferencia existe entre el cobro prejurídico y el cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El cobro prejurídico busca recuperar la deuda mediante negociación y requerimientos sin acudir a un juez. El cobro jurídico inicia un proceso judicial para exigir el pago cuando la negociación no produce resultados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Siempre debe iniciarse el cobro prejurídico antes del cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En la mayoría de los casos sí, porque permite solucionar el incumplimiento mediante acuerdos voluntarios y reducir costos antes de acudir a la vía judicial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo es recomendable iniciar un cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el deudor incumple los acuerdos de pago, ignora las comunicaciones o existe riesgo de prescripción de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué etapa permite recuperar una deuda más rápido?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente el cobro prejurídico permite obtener resultados más rápidos cuando el deudor tiene intención de pagar y existe disposición para negociar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué ventajas tiene combinar el cobro prejurídico con el cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite agotar primero las alternativas de negociación y, cuando estas fracasan, continuar con acciones judiciales que incrementen las probabilidades de recuperación de la cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué tipo de empresas deberían implementar ambas estrategias?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier empresa que otorgue crédito comercial, maneje cuentas por cobrar o administre cartera vencida puede beneficiarse de una estrategia integral que combine cobro preventivo, prejurídico y jurídico.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DiferenciasCobroPrejuridicoJuridicoContent />
    </>
  );
}
