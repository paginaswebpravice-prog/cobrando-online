import { Metadata } from "next";
import IncumplimientoAcuerdoPago from "./IncumplimientoAcuerdoPago";

export const metadata: Metadata = {
  title:
    "¿Qué hacer si incumplen un acuerdo de pago? Guía para recuperar la deuda | Cobrando Online",

  description:
    "Aprende qué hacer cuando un cliente incumple un acuerdo de pago. Conoce cómo actuar, cuándo renegociar, cuándo iniciar una cobranza prejurídica y cómo aumentar la recuperación de cartera.",

  keywords: [
    "incumplimiento acuerdo de pago",
    "qué hacer si incumplen un acuerdo de pago",
    "acuerdo de pago incumplido",
    "cliente incumple acuerdo de pago",
    "recuperación de cartera",
    "cobranza prejurídica",
    "cobro jurídico",
    "gestión de cobranza",
    "renegociar acuerdo de pago",
    "recuperar deuda",
    "acuerdo de pago Colombia",
    "cartera vencida",
    "seguimiento de cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",
  },

  openGraph: {
    title:
      "¿Qué hacer si un cliente incumple un acuerdo de pago? Guía paso a paso",

    description:
      "Descubre cómo actuar cuando un deudor incumple un acuerdo de pago, cuándo renegociar la obligación y cuándo iniciar una gestión de cobranza más especializada.",

    url: "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",

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
                "¿Qué hacer si un cliente incumple un acuerdo de pago? Guía para recuperar la deuda paso a paso",

              description:
                "Conoce cómo actuar cuando un acuerdo de pago es incumplido, cuándo renegociar la obligación, cuándo iniciar una cobranza prejurídica y qué acciones ayudan a recuperar la cartera de forma más eficiente.",

              keywords: [
                "incumplimiento acuerdo de pago",
                "cliente incumple acuerdo de pago",
                "recuperación de cartera",
                "gestión de cobranza",
                "acuerdo de pago",
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
                "@id":
                  "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-27",

              inLanguage: "es",

              about: [
                "Recuperación de cartera",
                "Gestión de cobranza",
                "Acuerdos de pago",
                "Cobranza prejurídica",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué pasa cuando un cliente incumple un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La empresa puede iniciar nuevas gestiones de cobranza, renegociar el acuerdo si existe voluntad de pago o avanzar hacia etapas de cobranza prejurídica o jurídica, dependiendo del caso.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Es posible renegociar un acuerdo de pago incumplido?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Cuando el deudor demuestra intención real de cumplir, las partes pueden firmar un nuevo acuerdo con condiciones diferentes y dejar constancia escrita de las modificaciones.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo conviene iniciar una cobranza prejurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente cuando el deudor incumple reiteradamente, deja de responder las comunicaciones o la negociación administrativa ya no ofrece resultados.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué documentos deben conservarse después del incumplimiento?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable conservar el acuerdo firmado, comprobantes de pago, correos electrónicos, mensajes, comunicaciones y cualquier evidencia relacionada con la negociación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Un acuerdo de pago firmado sirve como prueba?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Un acuerdo de pago firmado constituye un soporte importante dentro de la gestión de recuperación de cartera y puede respaldar actuaciones posteriores.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué errores deben evitarse después del incumplimiento?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Esperar demasiado tiempo para contactar al deudor, aceptar acuerdos verbales, no documentar las gestiones realizadas y dejar de hacer seguimiento constante.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo reducir el riesgo de nuevos incumplimientos?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Evaluando la capacidad de pago del cliente, estableciendo cuotas realistas, documentando correctamente los acuerdos y realizando seguimiento permanente.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué beneficios tiene actuar rápidamente ante un incumplimiento?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite aumentar las probabilidades de recuperación, reducir el envejecimiento de la cartera y evitar que la obligación evolucione hacia procesos de cobro más complejos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IncumplimientoAcuerdoPago />
    </>
  );
}
