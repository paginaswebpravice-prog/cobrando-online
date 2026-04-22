import { Metadata } from "next";
import CobroWhatsAppContent from "./CobroWhatsAppContent";

export const metadata: Metadata = {
  title:
    "Cómo cobrar por WhatsApp en Colombia y recuperar deudas rápido (Guía efectiva)",
  description:
    "Aprende cómo cobrar por WhatsApp en Colombia con mensajes efectivos y estrategias profesionales para recuperar deudas más rápido y aumentar tu recaudo.",

  keywords: [
    "cobro por whatsapp Colombia",
    "cómo cobrar deudas por whatsapp",
    "mensajes de cobro efectivos",
    "recuperación de cartera whatsapp",
    "estrategias de cobro Colombia",
    "cobranza por whatsapp empresas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/servicios/cobro-por-whatsapp-colombia",
  },

  openGraph: {
    title: "Cómo cobrar por WhatsApp en Colombia y recuperar deudas más rápido",
    description:
      "Estrategias, ejemplos de mensajes y técnicas profesionales para cobrar por WhatsApp y aumentar el recaudo en Colombia.",
    url: "https://cobrandoonline.com/servicios/cobro-por-whatsapp-colombia",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "webPage",
              headline:
                "Cómo cobrar por WhatsApp en Colombia y recuperar deudas",
              description:
                "Estrategias profesionales para cobrar deudas por WhatsApp y mejorar la recuperación de cartera en Colombia.",
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
                  "https://cobrandoonline.com/servicios/cobro-por-whatsapp-colombia",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo cobrar por WhatsApp sin perder clientes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Usando mensajes estructurados, tono profesional y estrategias de seguimiento sin ser invasivo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿WhatsApp es efectivo para cobrar deudas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, es uno de los canales con mayor tasa de lectura y permite negociación directa con clientes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroWhatsAppContent />
    </>
  );
}
