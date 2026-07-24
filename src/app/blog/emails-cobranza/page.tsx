import { Metadata } from "next";
import EmailsCobranza from "./EmailsCobranza";

export const metadata: Metadata = {
  title:
    "Emails de cobranza efectivos: 8 plantillas de correo para cobrar facturas y recuperar cartera | Guía 2026",

  description:
    "Descubre ejemplos y plantillas de emails de cobranza para recordar pagos, cobrar facturas vencidas, negociar acuerdos de pago y mejorar la recuperación de cartera sin afectar la relación con tus clientes.",

  keywords: [
    "emails de cobranza",
    "correo de cobranza",
    "correo para cobrar una deuda",
    "correo para cobrar una factura",
    "plantillas de cobranza",
    "modelo correo cobranza",
    "ejemplo email cobranza",
    "recordatorio de pago",
    "correo factura vencida",
    "correo acuerdo de pago",
    "seguimiento de cobranza",
    "email recuperación cartera",
    "gestión de cartera",
    "recuperación de cartera",
    "cobranza empresarial",
    "cobranza B2B",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/emails-cobranza",
  },

  openGraph: {
    title:
      "Emails de cobranza efectivos: ejemplos, plantillas y modelos para recuperar cartera",

    description:
      "Aprende cómo redactar correos de cobranza profesionales con ejemplos reales para recordar pagos, negociar acuerdos y reducir la cartera vencida.",

    url: "https://cobrandoonline.com/blog/emails-cobranza",

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
                "Emails de cobranza efectivos: ejemplos, plantillas y modelos para cobrar facturas pendientes y recuperar cartera",

              alternativeHeadline:
                "Cómo redactar correos de cobranza profesionales para aumentar el recaudo de cartera",

              description:
                "Guía completa con ejemplos de emails de cobranza, modelos de correo para facturas vencidas, recordatorios de pago, seguimiento de clientes y acuerdos de pago para empresas en Colombia.",

              keywords:
                "emails de cobranza, correo de cobranza, plantillas de cobranza, correo factura vencida, correo acuerdo de pago, recuperación de cartera, gestión de cartera, recordatorio de pago",

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
                "@id": "https://cobrandoonline.com/blog/emails-cobranza",
              },

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
                  name: "Emails de cobranza",
                },
              ],

              audience: {
                "@type": "Audience",
                audienceType:
                  "Empresas, gerentes financieros, auxiliares de cartera, coordinadores de crédito y cobranza",
              },

              inLanguage: "es",

              datePublished: "2026-01-01",

              dateModified: "2026-07-24",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo redactar un email de cobranza efectivo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un email de cobranza debe incluir un asunto claro, la identificación del cliente, el número de factura, el valor pendiente, la fecha de vencimiento, los medios de pago disponibles y un llamado respetuoso para regularizar la obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los emails de cobranza ayudan a recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los correos electrónicos permiten mantener una comunicación profesional con el cliente, dejar evidencia de las gestiones realizadas, enviar soportes y aumentar las probabilidades de recaudo mediante recordatorios oportunos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué asunto debe tener un correo de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El asunto debe ser corto, claro y específico. Algunos ejemplos son: 'Recordatorio de pago de factura', 'Factura pendiente de pago' o 'Seguimiento a su obligación pendiente'.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo enviar un correo de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lo recomendable es enviar un recordatorio antes del vencimiento, otro el mismo día del vencimiento y realizar seguimientos periódicos mientras exista saldo pendiente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué información debe contener un email de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir el nombre del cliente, número de factura, valor pendiente, fecha de vencimiento, canales de pago, datos de contacto y una invitación cordial para regularizar la obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es recomendable automatizar los emails de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Automatizar los recordatorios permite reducir tareas manuales, mantener una comunicación constante y disminuir los retrasos en los pagos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los correos de cobranza sirven como evidencia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los correos electrónicos hacen parte del historial de comunicaciones y pueden servir como soporte del proceso de recuperación de cartera junto con otros documentos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se pueden combinar los emails con otros canales de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una estrategia de recuperación de cartera suele combinar correos electrónicos, llamadas telefónicas, WhatsApp, SMS y seguimiento comercial para incrementar la efectividad del recaudo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EmailsCobranza />
    </>
  );
}
