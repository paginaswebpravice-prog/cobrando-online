import { Metadata } from "next";
import MensajesWhatsappCobranza from "./MensajesWhatsappCobranza";

export const metadata: Metadata = {
  title: "Mensajes de WhatsApp para cobrar clientes: ejemplos y plantillas",
  description:
    "Ejemplos de mensajes de WhatsApp para cobranza, recordatorios de pago y recuperación de cartera de manera profesional.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/mensajes-whatsapp-cobranza",
  },

  openGraph: {
    title: "Mensajes de WhatsApp para cobrar clientes de forma efectiva",
    description:
      "Plantillas y ejemplos de mensajes para cobranza por WhatsApp y recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/mensajes-whatsapp-cobranza",
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
                "Mensajes de WhatsApp para cobrar clientes de forma profesional",
              description:
                "Ejemplos de mensajes de cobranza por WhatsApp para mejorar la recuperación de cartera.",
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
                  "https://cobrandoonline.com/blog/mensajes-whatsapp-cobranza",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Es legal cobrar por WhatsApp en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Las empresas pueden utilizar WhatsApp para realizar gestiones de cobranza respetando la normativa de protección de datos y los derechos del consumidor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un mensaje de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe identificar la obligación pendiente, indicar el valor adeudado y mantener un tono profesional y respetuoso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿WhatsApp funciona para recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Es uno de los canales con mejores tasas de lectura y respuesta para recordatorios de pago y seguimiento de acuerdos.",
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
