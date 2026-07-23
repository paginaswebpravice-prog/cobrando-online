import { Metadata } from "next";
import CuandoIniciarProcesoDeCobroContent from "./CuandoIniciarProcesoDeCobroContent";

export const metadata: Metadata = {
  title:
    "¿Cuándo iniciar un proceso de cobro de cartera en Colombia? Guía 2026 para recuperar más y perder menos dinero",

  description:
    "Descubre cuándo iniciar el cobro de cartera en Colombia, cuántos días de mora esperar, cuándo pasar al cobro prejurídico o jurídico y cómo aumentar la recuperación de cartera empresarial.",

  keywords: [
    "cuando iniciar cobro de cartera",
    "cuando iniciar proceso de cobro",
    "cuando cobrar una factura vencida",
    "cuando iniciar cobro juridico",
    "cuando iniciar cobro prejuridico",
    "recuperacion de cartera colombia",
    "dias de mora para cobrar",
    "proceso de cobranza empresas",
    "gestion de cartera colombia",
    "cobro de cartera empresas",
    "cobranza empresarial",
    "cartera vencida colombia",
    "como recuperar cartera",
    "prescripcion de deudas colombia",
    "seguimiento de cartera",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",
  },

  openGraph: {
    title:
      "¿Cuándo iniciar un proceso de cobro de cartera? La guía que toda empresa debería conocer",

    description:
      "Conoce el momento ideal para iniciar un proceso de cobro, evitar que la deuda envejezca y aumentar significativamente la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",

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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "¿Cuándo iniciar un proceso de cobro de cartera en Colombia? Guía para recuperar más dinero y reducir la mora",

              description:
                "Aprende cuándo iniciar una gestión de cobro, cuándo pasar al cobro prejurídico o jurídico y cuáles son los errores que reducen la recuperación de cartera en las empresas colombianas.",

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
                  "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",
              },

              keywords: [
                "cuando iniciar cobro de cartera",
                "cobro prejuridico",
                "cobro juridico",
                "cartera vencida",
                "gestion de cartera",
                "seguimiento de cartera",
                "recuperacion de cartera",
                "cobranza empresarial",
              ],

              datePublished: "2025-01-01",

              dateModified: "2026-07-23",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un proceso de cobro de cartera en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es iniciar la gestión de cobro inmediatamente después del vencimiento de la factura. Entre más rápido se contacte al cliente, mayores serán las probabilidades de recuperar el dinero.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuántos días de mora justifican iniciar una gestión formal de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Muchas empresas intensifican el seguimiento a partir de los primeros 30 días de mora, aunque el momento exacto depende de las políticas de crédito y del comportamiento del cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es recomendable esperar varios meses antes de cobrar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. Esperar demasiado disminuye la probabilidad de recuperación, deteriora el flujo de caja y puede aumentar el riesgo de prescripción de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo pasar del cobro preventivo al cobro prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el cliente incumple reiteradamente los compromisos de pago, deja de responder o supera los tiempos definidos por la política de cobranza de la empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Después de agotar las gestiones preventivas y prejurídicas sin obtener resultados satisfactorios, siempre evaluando previamente la viabilidad jurídica y económica del proceso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué disminuye la recuperación cuando aumenta la mora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las deudas antiguas presentan menor probabilidad de recaudo debido al deterioro financiero del deudor, pérdida de contacto y mayor complejidad para negociar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo definir el momento adecuado para escalar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mediante políticas internas que establezcan tiempos máximos de mora, número de contactos realizados, incumplimientos y criterios objetivos para cambiar de etapa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios tiene iniciar el cobro oportunamente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite mejorar la liquidez, aumentar la recuperación de cartera, disminuir el envejecimiento de las cuentas por cobrar y reducir la necesidad de procesos judiciales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CuandoIniciarProcesoDeCobroContent />
    </>
  );
}
