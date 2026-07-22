import { Metadata } from "next";
import ComoRecuperarCarteraContent from "./ComoRecuperarCarteraContent";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera vencida en Colombia: guía completa para empresas (2026)",

  description:
    "Descubre cómo recuperar cartera vencida en Colombia paso a paso. Aprende estrategias de cobranza preventiva, prejurídica y jurídica para mejorar el flujo de caja, reducir la mora y aumentar el recaudo empresarial.",

  keywords: [
    "cómo recuperar cartera vencida",
    "recuperar cartera vencida",
    "recuperación de cartera",
    "recuperación de cartera empresas",
    "gestión de cartera",
    "gestión de cartera vencida",
    "recuperación de cuentas por cobrar",
    "cómo cobrar cartera vencida",
    "cobranza empresarial",
    "cobro de cartera",
    "cobro prejurídico",
    "cobro jurídico",
    "estrategias de cobranza",
    "cuentas por cobrar",
    "disminuir cartera vencida",
    "flujo de caja empresas",
    "mora empresarial",
    "software de cartera",
    "cartera empresarial",
    "empresas de cobranza Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera vencida en Colombia: guía completa para empresas",

    description:
      "Aprende las mejores estrategias para recuperar cartera vencida, mejorar la liquidez de tu empresa y reducir la mora con procesos de cobranza efectivos.",

    url: "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo recuperar cartera vencida en Colombia (Guía 2026)",

    description:
      "Conoce cómo reducir la cartera vencida y recuperar cuentas por cobrar mediante estrategias de cobranza empresarial.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
                "Cómo recuperar cartera vencida en Colombia: guía completa para empresas",

              description:
                "Guía paso a paso para recuperar cartera vencida mediante estrategias preventivas, prejurídicas y jurídicas enfocadas en empresas.",

              image:
                "https://cobrandoonline.com/images/blog/como-recuperar-cartera-vencida.webp",

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
                  "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-22",

              inLanguage: "es-CO",

              articleSection: "Recuperación de Cartera",

              keywords:
                "recuperación de cartera, cartera vencida, cuentas por cobrar, cobranza empresarial",

              about: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cuentas por cobrar",
                },
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
                  name: "Cómo recuperar cartera vencida",
                  item: "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
                },
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo recuperar cartera vencida de forma efectiva?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La recuperación de cartera debe comenzar con una estrategia preventiva, continuar con una gestión prejurídica estructurada y, cuando sea necesario, escalar a procesos jurídicos para aumentar las probabilidades de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un cobro prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es iniciar la gestión prejurídica desde los primeros días de mora para evitar que la deuda aumente su riesgo de incumplimiento.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer cuando el cliente incumple un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe realizarse seguimiento inmediato, documentar el incumplimiento y evaluar si corresponde avanzar hacia una recuperación jurídica según las condiciones de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo disminuir la cartera vencida en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas claras de crédito, seguimiento permanente, automatización de recordatorios y procesos estructurados de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué la cartera vencida afecta el flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque reduce la disponibilidad de efectivo para cubrir obligaciones, invertir y mantener la operación normal de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ComoRecuperarCarteraContent />
    </>
  );
}
