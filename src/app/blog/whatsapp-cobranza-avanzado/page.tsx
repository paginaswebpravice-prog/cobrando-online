import { Metadata } from "next";
import WhatsappCobranzaAvanzado from "./WhatsappCobranzaAvanzado";

export const metadata: Metadata = {
  title: "Cobranza por WhatsApp avanzada: estrategias para mejorar el recaudo",
  description:
    "Aprende cómo utilizar WhatsApp de forma avanzada para recuperar cartera, automatizar seguimientos y mejorar la gestión de cobranza.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/whatsapp-cobranza-avanzado",
  },

  openGraph: {
    title: "Cobranza por WhatsApp avanzada para empresas",
    description:
      "Estrategias digitales para automatizar procesos de cobranza y mejorar la recuperación de cartera mediante WhatsApp.",
    url: "https://cobrandoonline.com/blog/whatsapp-cobranza-avanzado",
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
                "Cobranza por WhatsApp avanzada: estrategias para mejorar el recaudo",
              description:
                "Guía para implementar estrategias avanzadas de cobranza mediante WhatsApp y automatización.",
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
                  "https://cobrandoonline.com/blog/whatsapp-cobranza-avanzado",
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
                  name: "¿WhatsApp sirve para cobrar clientes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. WhatsApp es uno de los canales más efectivos para recordar pagos, realizar seguimientos y negociar acuerdos con clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede automatizar la cobranza por WhatsApp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Existen herramientas que permiten programar recordatorios, secuencias de mensajes y seguimientos automáticos según el estado de la cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué ventajas tiene WhatsApp frente al correo electrónico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "WhatsApp suele tener mayores tasas de apertura, respuestas más rápidas y una comunicación más directa con los clientes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <WhatsappCobranzaAvanzado />
    </>
  );
}
