import { Metadata } from "next";
import CobrarFacturaVencida from "./CobrarFacturaVencida";

export const metadata: Metadata = {
  title:
    "Cómo cobrar una factura vencida sin perder al cliente: guía práctica para empresas (2026)",

  description:
    "Aprende cómo cobrar una factura vencida sin afectar la relación comercial. Descubre estrategias de cobranza preventiva, negociación, acuerdos de pago y cuándo iniciar un cobro jurídico en Colombia.",

  keywords: [
    "cómo cobrar una factura vencida",
    "cobrar factura vencida",
    "cómo recuperar una factura vencida",
    "factura vencida",
    "recuperar factura vencida",
    "cobranza de facturas",
    "facturas vencidas",
    "cómo cobrar clientes morosos",
    "gestión de cartera",
    "recuperación de cartera",
    "cobranza empresarial",
    "acuerdos de pago",
    "seguimiento de cartera",
    "cartera vencida",
    "cobro prejurídico",
    "cobro jurídico",
    "Cobrando Online",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",
  },

  openGraph: {
    title:
      "Cómo cobrar una factura vencida sin perder al cliente | Estrategias que sí funcionan",

    description:
      "Descubre cómo recuperar facturas vencidas manteniendo la relación comercial mediante estrategias de cobranza preventiva, negociación y seguimiento profesional.",

    url: "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",

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
                "Cómo cobrar una factura vencida sin perder al cliente: guía práctica para empresas",

              description:
                "Guía completa para recuperar facturas vencidas en Colombia sin afectar la relación comercial. Aprende estrategias de cobranza preventiva, negociación, acuerdos de pago y cuándo escalar a un cobro jurídico.",

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
                  "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-22",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo cobrar una factura vencida sin perder al cliente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo más recomendable es iniciar una cobranza preventiva y mantener una comunicación respetuosa. Si el cliente presenta dificultades de liquidez, pueden negociarse acuerdos de pago antes de considerar medidas prejurídicas o judiciales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuánto tiempo debo esperar para cobrar una factura vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo ideal es comenzar el seguimiento inmediatamente después del vencimiento de la factura. Entre más tiempo permanezca la deuda sin gestión, menores serán las probabilidades de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer cuando un cliente no responde los mensajes de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es recomendable documentar todas las gestiones realizadas, utilizar diferentes canales de comunicación y evaluar el paso hacia una cobranza prejurídica cuando no exista respuesta después de varios intentos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un cobro jurídico por una factura vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando la negociación ha fracasado, el cliente incumple los acuerdos de pago o la deuda representa un riesgo importante para la empresa, puede ser conveniente analizar la viabilidad de iniciar un proceso jurídico.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la morosidad de los clientes?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas claras de crédito, automatizando recordatorios de pago, realizando seguimiento permanente y segmentando los clientes según su comportamiento de pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobrarFacturaVencida />
    </>
  );
}
