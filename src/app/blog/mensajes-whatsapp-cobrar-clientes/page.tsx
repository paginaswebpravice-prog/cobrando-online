import { Metadata } from "next";
import MensajesWhatsappCobranza from "./MensajesWhatsappCobranza";

export const metadata: Metadata = {
  title: "7 mensajes de WhatsApp para cobrar clientes sin sonar agresivo",
  description:
    "Conoce ejemplos de mensajes efectivos y profesionales para cobrar clientes por WhatsApp y recuperar cartera sin afectar la relación comercial.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
  },

  openGraph: {
    title: "Mensajes de WhatsApp para cobrar clientes de forma profesional",
    description:
      "Aprende cómo cobrar clientes por WhatsApp con mensajes efectivos, profesionales y no agresivos.",
    url: "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
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
                "7 mensajes de WhatsApp para cobrar clientes sin sonar agresivo",
              description:
                "Guía con ejemplos de mensajes para recuperar cartera y cobrar clientes por WhatsApp.",
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
                  "https://cobrandoonline.com/blog/mensajes-whatsapp-cobrar-clientes",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Es legal cobrar clientes por WhatsApp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que la comunicación sea respetuosa, profesional y no vulnere los derechos del cliente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo cobrar por WhatsApp sin sonar agresivo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Usando mensajes claros, amables y profesionales que busquen solucionar el pago sin generar conflictos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué hacer si el cliente no responde los mensajes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda realizar seguimiento progresivo y, si no hay respuesta, evaluar un proceso de cobro prejurídico.",
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
