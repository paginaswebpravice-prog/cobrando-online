import { Metadata } from "next";
import SeguimientoAcuerdosPago from "./SeguimientoAcuerdosPago";

export const metadata: Metadata = {
  title:
    "Seguimiento de acuerdos de pago: cómo garantizar el cumplimiento y recuperar más cartera (Guía 2026)",

  description:
    "Aprende cómo realizar un seguimiento efectivo de acuerdos de pago, reducir incumplimientos, automatizar recordatorios y aumentar la recuperación de cartera empresarial.",

  keywords: [
    "seguimiento de acuerdos de pago",
    "control de acuerdos de pago",
    "cumplimiento de acuerdos de pago",
    "seguimiento cartera",
    "gestión de cartera",
    "acuerdos de pago",
    "recuperación de cartera",
    "software de cartera",
    "recordatorios de pago",
    "automatización de cobranza",
    "seguimiento de deudores",
    "cobranza empresarial",
    "CRM cobranza",
    "seguimiento cuentas por cobrar",
    "KPIs cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
  },

  openGraph: {
    title:
      "Seguimiento de acuerdos de pago: aumenta el cumplimiento y reduce la cartera vencida",

    description:
      "Descubre cómo controlar acuerdos de pago mediante procesos, indicadores y automatización para mejorar la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/blog/seguimiento-acuerdos-pago.jpg",
        width: 1200,
        height: 630,
        alt: "Seguimiento de acuerdos de pago",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Seguimiento de acuerdos de pago | Guía para recuperar cartera",

    description:
      "Implementa un proceso efectivo para controlar acuerdos de pago y aumentar la recuperación de cartera.",

    images: ["/blog/seguimiento-acuerdos-pago.jpg"],
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
                "Seguimiento de acuerdos de pago: cómo garantizar el cumplimiento y recuperar más cartera",

              alternativeHeadline:
                "Guía para controlar acuerdos de pago y reducir el incumplimiento empresarial",

              description:
                "Aprende cómo realizar un seguimiento efectivo a los acuerdos de pago, automatizar recordatorios, medir indicadores y aumentar la recuperación de cartera.",

              image:
                "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago.jpg",

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
                "@id":
                  "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
              },

              url: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es-CO",

              articleSection: "Gestión de cartera",

              keywords:
                "seguimiento acuerdos de pago, recuperación de cartera, cobranza empresarial, cartera vencida, cuentas por cobrar, control de acuerdos",

              about: [
                {
                  "@type": "Thing",
                  name: "Seguimiento de acuerdos de pago",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
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
                  name: "Seguimiento de acuerdos de pago",
                  item: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
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

                  name: "¿Por qué es importante hacer seguimiento a un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permite verificar el cumplimiento de los compromisos adquiridos, detectar retrasos oportunamente y aumentar la recuperación de cartera antes de que la deuda vuelva a deteriorarse.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué herramientas ayudan a controlar acuerdos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los CRM, software de cartera, plataformas de automatización, correos electrónicos, WhatsApp Business, SMS y calendarios de seguimiento permiten controlar fechas de pago y enviar recordatorios automáticos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué hacer cuando un cliente incumple un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es contactar inmediatamente al cliente, identificar la causa del incumplimiento, renegociar cuando sea viable y escalar el proceso de cobranza si persiste el retraso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto debe hacerse seguimiento a un acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es recomendable realizar seguimiento antes de cada vencimiento, confirmar cada pago recibido y monitorear diariamente los compromisos próximos a vencer.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo aumentar el cumplimiento de los acuerdos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mediante recordatorios automáticos, comunicación permanente, actualización del estado de la deuda, seguimiento personalizado y procesos claros de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores permiten medir el éxito de los acuerdos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre los principales indicadores se encuentran el porcentaje de cumplimiento, porcentaje de recuperación, reincidencia de mora, tiempo promedio de recaudo y acuerdos incumplidos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Puede automatizarse el seguimiento de acuerdos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Actualmente existen soluciones tecnológicas que automatizan recordatorios, alertas, tareas de seguimiento y comunicaciones para disminuir la morosidad.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios obtiene una empresa con un buen seguimiento?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mejora la liquidez, reduce la cartera vencida, aumenta el porcentaje de recuperación, disminuye costos operativos y fortalece la relación con los clientes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoAcuerdosPago />
    </>
  );
}
