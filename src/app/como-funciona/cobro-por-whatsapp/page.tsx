import { Metadata } from "next";
import CobroWhatsAppContent from "./CobroWhatsAppContent";

export const metadata: Metadata = {
  title:
    "Cobro por WhatsApp en Colombia: mensajes efectivos y estrategias para recuperar cartera empresarial",

  description:
    "Descubre cómo cobrar por WhatsApp en Colombia con mensajes efectivos, seguimiento organizado y estrategias digitales para recuperar cartera empresarial y aumentar pagos.",

  keywords: [
    "cobro por whatsapp Colombia",

    "cobro por whatsapp empresas",

    "mensajes efectivos de cobro",

    "mensajes de cobranza por whatsapp",

    "estrategias de cobranza digital",

    "recuperación de cartera empresarial",

    "cómo cobrar una deuda por whatsapp",

    "automatización de cobranza",

    "gestión de cartera Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp",
  },

  openGraph: {
    title:
      "Cobro por WhatsApp en Colombia: estrategias para recuperar cartera empresarial",

    description:
      "Aprende cómo usar WhatsApp para cobrar clientes, enviar mensajes efectivos y mejorar la recuperación de cartera con una estrategia profesional.",

    url: "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cobro por WhatsApp en Colombia: mensajes y estrategias para recuperar cartera",

    description:
      "Guía práctica para empresas que buscan mejorar su cobranza mediante WhatsApp.",
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

              "@type": "WebPage",

              "@id":
                "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp#webpage",

              url: "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp",

              name: "Cobro por WhatsApp en Colombia: mensajes efectivos y estrategias para recuperar cartera empresarial",

              description:
                "Guía para empresas sobre cómo implementar estrategias de cobro por WhatsApp, crear mensajes efectivos, hacer seguimiento y mejorar la recuperación de cartera.",

              inLanguage: "es-CO",

              isPartOf: {
                "@type": "WebSite",

                "@id": "https://cobrandoonline.com/#website",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              about: {
                "@type": "Thing",

                name: "Cobranza digital y recuperación de cartera empresarial",
              },

              publisher: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              mainEntity: {
                "@id":
                  "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp#article",
              },
            },

            {
              "@context": "https://schema.org",

              "@type": "Article",

              "@id":
                "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp#article",

              headline:
                "Cobro por WhatsApp en Colombia: mensajes efectivos y estrategias para recuperar cartera empresarial",

              description:
                "Conoce cómo utilizar WhatsApp como canal estratégico de cobranza empresarial mediante mensajes profesionales, seguimiento organizado y herramientas digitales.",

              mainEntityOfPage: {
                "@type": "WebPage",

                "@id":
                  "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp",
              },

              author: {
                "@type": "Organization",

                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              articleSection: "Gestión de cartera empresarial",

              keywords: [
                "cobro por whatsapp",
                "cobranza empresarial",
                "recuperación de cartera",
                "estrategias de cobro digital",
              ],

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              "@id":
                "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp#faq",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo cobrar por WhatsApp a clientes con pagos pendientes?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Para cobrar por WhatsApp a clientes con pagos pendientes es recomendable utilizar mensajes profesionales, validar la información de la obligación, realizar seguimiento organizado y ofrecer alternativas que faciliten el pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué mensaje enviar por WhatsApp para cobrar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un mensaje de cobro efectivo debe ser claro, respetuoso y orientado a generar una conversación. Debe informar la obligación pendiente, facilitar la comunicación y permitir encontrar una solución de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo cobrar por WhatsApp sin molestar al cliente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Para evitar molestias es importante utilizar una comunicación profesional, respetar horarios adecuados de contacto, evitar mensajes repetitivos y enfocarse en ayudar al cliente a encontrar una alternativa de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿WhatsApp ayuda a mejorar la recuperación de cartera empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. WhatsApp permite una comunicación directa con clientes, facilita el seguimiento de obligaciones pendientes y puede complementar una estrategia organizada de recuperación de cartera empresarial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo automatizar procesos de cobro por WhatsApp?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La automatización de cobros permite organizar clientes, programar seguimientos, administrar información de cartera y mejorar la productividad del equipo encargado del recaudo mediante herramientas digitales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre cobrar por WhatsApp y una cobranza tradicional?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El cobro por WhatsApp permite una comunicación más rápida y cercana con el cliente, mientras que una estrategia tradicional puede depender principalmente de llamadas, correos u otros canales con menor interacción inmediata.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "SoftwareApplication",

              "@id": "https://cobrandoonline.com/#software",

              name: "Cobrando Online",

              applicationCategory: "BusinessApplication",

              operatingSystem: "Web",

              description:
                "Plataforma digital para empresas que buscan organizar, gestionar y mejorar sus procesos de recuperación de cartera mediante herramientas tecnológicas.",

              url: "https://cobrandoonline.com",

              provider: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },
            },

            {
              "@context": "https://schema.org",

              "@type": "Service",

              "@id":
                "https://cobrandoonline.com/como-funciona/cobro-por-whatsapp#service",

              name: "Estrategias de cobro por WhatsApp para empresas",

              description:
                "Implementación de procesos digitales para mejorar la comunicación con clientes, realizar seguimiento y apoyar la recuperación de cartera empresarial mediante WhatsApp.",

              provider: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              areaServed: {
                "@type": "Country",

                name: "Colombia",
              },

              serviceType: "Gestión digital de cartera empresarial",
            },
          ]),
        }}
      />

      <CobroWhatsAppContent />
    </>
  );
}
