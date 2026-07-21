import { Metadata } from "next";
import CicloRecuperacionCartera from "./CicloRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Ciclo de recuperación de cartera empresarial: etapas para cobrar más rápido",

  description:
    "Conoce las etapas del ciclo de recuperación de cartera empresarial: prevención, cobranza temprana, negociación, cobro prejurídico y jurídico para mejorar el recaudo.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",
  },

  openGraph: {
    title: "Ciclo de recuperación de cartera empresarial: guía paso a paso",

    description:
      "Aprende cómo funciona un proceso completo de recuperación de cartera y cómo mejorar los resultados de cobranza en empresas.",

    url: "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",

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
                "Ciclo de recuperación de cartera empresarial: etapas para mejorar el recaudo",

              description:
                "Guía completa sobre las fases de recuperación de cartera empresarial, desde la prevención hasta las acciones jurídicas.",

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
                  "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",
              },

              datePublished: "2026-06-11",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",

              keywords:
                "ciclo recuperación cartera, etapas cobranza empresarial, gestión de cartera empresarial, recuperación de cuentas por cobrar",
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es el ciclo de recuperación de cartera empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de etapas que una empresa implementa para recuperar sus cuentas por cobrar, iniciando con la prevención del riesgo de crédito y finalizando con acciones de cobro jurídico cuando son necesarias.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuáles son las etapas de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las principales etapas son evaluación del cliente, facturación y seguimiento preventivo, cobranza temprana, cobranza administrativa, negociación, cobro prejurídico y cobro jurídico.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante tener un ciclo organizado de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite actuar oportunamente sobre la mora, reducir cartera vencida, mejorar el flujo de caja y aumentar la recuperación de dinero pendiente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa debe pasar de cobranza administrativa a cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando las estrategias de contacto, negociación y acuerdos de pago no generan resultados y existen elementos suficientes para iniciar acciones legales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Se puede automatizar el ciclo de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Las empresas pueden utilizar herramientas tecnológicas para gestionar recordatorios, seguimiento de pagos, segmentación de clientes e indicadores de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CicloRecuperacionCartera />
    </>
  );
}
