import { Metadata } from "next";
import MensajesWhatsappCobranza from "./MensajesWhatsappCobranza";

export const metadata: Metadata = {
  title:
    "15 Mensajes de WhatsApp para Cobrar Clientes (Plantillas 2026) | Ejemplos Profesionales",

  description:
    "Descubre 15 mensajes de WhatsApp para cobrar clientes sin sonar agresivo. Copia plantillas listas para usar, ejemplos de recordatorios de pago, acuerdos de pago y recuperación de cartera en Colombia.",

  keywords: [
    "mensajes de whatsapp para cobrar clientes",
    "mensaje para cobrar una deuda por whatsapp",
    "mensajes de cobranza por whatsapp",
    "plantillas de cobranza por whatsapp",
    "cómo cobrar por whatsapp",
    "ejemplos de mensajes de cobro",
    "recordatorio de pago whatsapp",
    "mensaje para clientes morosos",
    "mensaje amable para cobrar",
    "mensajes de recuperación de cartera",
    "cobranza por whatsapp colombia",
    "cobrar clientes por whatsapp",
    "plantillas whatsapp cobranza",
    "recordatorio de factura vencida",
    "gestión de cartera whatsapp",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
  },

  openGraph: {
    title:
      "15 Mensajes de WhatsApp para Cobrar Clientes sin Perder la Relación Comercial",

    description:
      "Utiliza ejemplos profesionales de mensajes de WhatsApp para cobrar clientes, recordar pagos, negociar acuerdos y recuperar cartera de forma efectiva.",

    url: "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "15 Mensajes de WhatsApp para Cobrar Clientes | Plantillas Profesionales",

    description:
      "Plantillas listas para copiar, recordatorios de pago y ejemplos para recuperar cartera mediante WhatsApp.",
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
      {/* ===========================
            SEO SCHEMA
      ============================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",

              "@type": "BlogPosting",

              headline:
                "15 Mensajes de WhatsApp para Cobrar Clientes sin Sonar Agresivo",

              alternativeHeadline:
                "Plantillas profesionales para cobrar clientes por WhatsApp",

              description:
                "Guía completa con mensajes de WhatsApp para cobrar clientes, ejemplos de recordatorios de pago, acuerdos de pago y seguimiento de cartera.",

              image:
                "https://cobrandoonline.com/images/blog/mensajes-whatsapp-cobrar-clientes.webp",

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
                  "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
              },

              keywords: [
                "mensajes whatsapp cobrar clientes",
                "cobranza por whatsapp",
                "recordatorio de pago",
                "mensajes de cobro",
                "plantillas de cobranza",
              ],

              articleSection: "Gestión de Cartera",

              wordCount: "5200",

              inLanguage: "es-CO",

              datePublished: "2025-01-01",

              dateModified: "2026-07-28",
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

                  name: "Mensajes de WhatsApp para Cobrar Clientes",

                  item: "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
                },
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Es legal cobrar clientes por WhatsApp en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Es posible utilizar WhatsApp como canal de cobranza siempre que se respeten los derechos del cliente, la normativa sobre protección de datos personales y se mantenga una comunicación profesional.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe incluir un mensaje de cobranza por WhatsApp?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir el nombre del cliente, el número de la factura o la obligación, el valor pendiente, la fecha de vencimiento y un llamado claro para realizar el pago o comunicarse con la empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuántos mensajes de cobranza es recomendable enviar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es realizar un seguimiento progresivo y respetuoso, evitando enviar múltiples mensajes el mismo día para no afectar la relación comercial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es el mejor horario para enviar mensajes de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente funcionan mejor los horarios laborales, especialmente durante la mañana y primeras horas de la tarde.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿WhatsApp mejora la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Debido a sus altas tasas de apertura y lectura, WhatsApp es uno de los canales más efectivos para enviar recordatorios de pago y hacer seguimiento a compromisos adquiridos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué errores deben evitarse al cobrar por WhatsApp?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Se deben evitar amenazas, lenguaje ofensivo, mensajes excesivos, información poco clara y comunicaciones fuera de horarios adecuados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Sirven las plantillas para automatizar la cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Las plantillas permiten mantener una comunicación uniforme, ahorrar tiempo y mejorar la eficiencia de la gestión de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo pasar de WhatsApp a un cobro prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando después de varios seguimientos y acuerdos incumplidos el cliente continúa sin responder o sin realizar el pago, puede ser recomendable iniciar un proceso de cobro prejurídico.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MensajesWhatsappCobranza />
    </>
  );
}
