import { Metadata } from "next";
import SecuenciasCobranza from "./SecuenciasCobranza";

export const metadata: Metadata = {
  title:
    "Secuencias de cobranza: cómo automatizar la recuperación de cartera y reducir la morosidad (Guía 2026)",

  description:
    "Aprende cómo crear secuencias automáticas de cobranza paso a paso. Descubre flujos de recuperación de cartera, ejemplos, canales, KPIs y estrategias para disminuir la morosidad empresarial.",

  keywords: [
    "secuencias de cobranza",
    "secuencias automáticas de cobranza",
    "automatización de cobranza",
    "flujo de cobranza",
    "proceso de cobranza",
    "recuperación de cartera",
    "automatización de cartera",
    "software de cobranza",
    "seguimiento de cartera",
    "gestión de cartera",
    "recordatorios de pago",
    "cobranza empresarial",
    "CRM cobranza",
    "WhatsApp cobranza",
    "software gestión cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/secuencias-cobranza",
  },

  openGraph: {
    title:
      "Secuencias de cobranza: automatiza la recuperación de cartera y mejora el recaudo",

    description:
      "Guía completa para implementar secuencias automáticas de cobranza, reducir la mora y aumentar la recuperación de cartera mediante procesos inteligentes.",

    url: "https://cobrandoonline.com/blog/secuencias-cobranza",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/blog/secuencias-cobranza.jpg",
        width: 1200,
        height: 630,
        alt: "Secuencias automáticas de cobranza para empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Secuencias automáticas de cobranza: guía completa para empresas",

    description:
      "Implementa flujos automáticos de cobranza y aumenta la recuperación de cartera mediante procesos inteligentes.",

    images: ["/blog/secuencias-cobranza.jpg"],
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
                "Secuencias automáticas de cobranza: ejemplos, flujos y estrategias para recuperar cartera",

              alternativeHeadline:
                "Cómo crear secuencias de cobranza automatizadas para reducir la morosidad",

              description:
                "Guía completa para diseñar secuencias automáticas de cobranza mediante correos electrónicos, WhatsApp, SMS y llamadas telefónicas para mejorar la recuperación de cartera empresarial.",

              image: "https://cobrandoonline.com/blog/secuencias-cobranza.jpg",

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cobrandoonline.com/logo.png",
                },
              },

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://cobrandoonline.com/blog/secuencias-cobranza",
              },

              url: "https://cobrandoonline.com/blog/secuencias-cobranza",

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es-CO",

              articleSection: "Recuperación de cartera",

              keywords:
                "secuencias de cobranza, automatización de cobranza, flujo de cobranza, recuperación de cartera, software de cobranza, CRM cobranza, WhatsApp cobranza",

              about: [
                {
                  "@type": "Thing",
                  name: "Automatización de cobranza",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
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

                  name: "Secuencias automáticas de cobranza",

                  item: "https://cobrandoonline.com/blog/secuencias-cobranza",
                },
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "Cobrando Online",

              url: "https://cobrandoonline.com",

              logo: "https://cobrandoonline.com/logo.png",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué son las secuencias automáticas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Son flujos automatizados que ejecutan recordatorios, correos electrónicos, mensajes de WhatsApp, llamadas y tareas de seguimiento según el comportamiento de pago del cliente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios ofrecen las secuencias automáticas de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permiten disminuir la cartera vencida, reducir tareas manuales, mejorar el seguimiento de clientes y aumentar la recuperación de pagos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué canales pueden incluirse en una secuencia de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es posible combinar correos electrónicos, WhatsApp Business, SMS, llamadas telefónicas, CRM, software de cartera y notificaciones internas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se diseña una secuencia automática de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Se construye definiendo políticas de crédito, segmentación de clientes, tiempos de seguimiento, canales de comunicación y reglas automáticas según el nivel de mora.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas deberían automatizar su cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier organización que venda a crédito puede beneficiarse, especialmente IPS, clínicas, constructoras, distribuidores, empresas B2B e industrias con alto volumen de facturación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Las secuencias automáticas reemplazan al asesor de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. Automatizan tareas repetitivas, mientras que los asesores intervienen en negociaciones complejas, acuerdos de pago y casos especiales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo medir la efectividad de una secuencia de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mediante indicadores como porcentaje de recuperación, disminución de cartera vencida, tiempo promedio de recaudo, cumplimiento de acuerdos y tasa de respuesta de los clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Las secuencias automáticas ayudan a reducir la morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Al mantener un seguimiento constante y oportuno, aumentan las probabilidades de pago y reducen significativamente los niveles de mora.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SecuenciasCobranza />
    </>
  );
}
