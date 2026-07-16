import { Metadata } from "next";
import RecordatoriosAutomaticosContent from "./RecordatoriosAutomaticosContent";

export const metadata: Metadata = {
  title:
    "Recordatorios automáticos de pago en Colombia: evita mora y mejora el recaudo empresarial",

  description:
    "Implementa recordatorios automáticos de pago en Colombia para reducir pagos atrasados, mejorar el flujo de caja y optimizar la gestión de cartera de tu empresa.",

  keywords: [
    "recordatorios automáticos de pago Colombia",
    "automatización de recordatorios de pago",
    "avisos automáticos de pago",
    "recordatorios de pago para empresas",
    "reducir cartera vencida",
    "gestión de cartera empresarial",
    "automatización de cobranza",
    "seguimiento automático de clientes",
    "cobros automáticos Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/como-funciona/recordatorios-de-pago",
  },

  openGraph: {
    title:
      "Recordatorios automáticos de pago: reduce mora y mejora el recaudo empresarial",

    description:
      "Descubre cómo automatizar avisos de pago, hacer seguimiento a clientes y reducir cartera vencida con procesos digitales.",

    url: "https://cobrandoonline.com/como-funciona/recordatorios-de-pago",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Recordatorios automáticos de pago en Colombia para empresas",

    description:
      "Automatiza avisos de pago y mejora la recuperación de cartera con una estrategia digital.",
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

              "@type": "WebPage",

              "@id":
                "https://cobrandoonline.com/como-funciona/recordatorios-de-pago#webpage",

              url: "https://cobrandoonline.com/como-funciona/recordatorios-de-pago",

              name: "Recordatorios automáticos de pago en Colombia: evita mora y mejora el recaudo empresarial",

              description:
                "Guía sobre cómo implementar recordatorios automáticos de pago para mejorar la gestión de cartera, reducir retrasos y optimizar procesos de cobro.",

              inLanguage: "es-CO",

              isPartOf: {
                "@type": "WebSite",

                "@id": "https://cobrandoonline.com/#website",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              about: {
                "@type": "Thing",

                name: "Recordatorios automáticos de pago y gestión de cartera empresarial",
              },

              publisher: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },
            },

            {
              "@context": "https://schema.org",

              "@type": "Article",

              "@id":
                "https://cobrandoonline.com/como-funciona/recordatorios-de-pago#article",

              headline:
                "Recordatorios automáticos de pago en Colombia: evita mora y mejora el recaudo empresarial",

              description:
                "Contenido educativo sobre automatización de avisos de pago, seguimiento de clientes y estrategias digitales para mejorar la recuperación de cartera.",

              articleSection: "Automatización de cartera empresarial",

              keywords: [
                "recordatorios de pago",

                "gestión de cartera",

                "automatización de cobranza",

                "seguimiento de clientes",
              ],

              author: {
                "@type": "Organization",

                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              mainEntityOfPage: {
                "@type": "WebPage",

                "@id":
                  "https://cobrandoonline.com/como-funciona/recordatorios-de-pago",
              },

              inLanguage: "es-CO",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              "@id":
                "https://cobrandoonline.com/como-funciona/recordatorios-de-pago#faq",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué son los recordatorios automáticos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los recordatorios automáticos de pago son mensajes programados que permiten avisar a clientes sobre próximas fechas de pago, obligaciones pendientes o vencimientos, ayudando a reducir retrasos y mejorar la gestión de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo ayudan los recordatorios automáticos a reducir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los recordatorios automáticos permiten contactar clientes oportunamente antes y después del vencimiento, aumentando la probabilidad de pago y disminuyendo los olvidos o retrasos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué tipos de recordatorios de pago puede enviar una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una empresa puede enviar recordatorios preventivos antes de la fecha límite, avisos el día del vencimiento, seguimientos posteriores y mensajes orientados a acuerdos de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Se pueden automatizar recordatorios de pago por WhatsApp?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. WhatsApp puede integrarse dentro de estrategias digitales de comunicación con clientes para enviar avisos, realizar seguimientos y facilitar procesos de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas deberían utilizar recordatorios automáticos de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Son especialmente útiles para empresas con muchos clientes, pagos recurrentes, cartera activa o procesos donde los retrasos afectan el flujo de caja.",
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
                "Plataforma digital para empresas que buscan mejorar la gestión de cartera, automatizar procesos de seguimiento y optimizar la recuperación de pagos.",

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
                "https://cobrandoonline.com/como-funciona/recordatorios-de-pago#service",

              name: "Automatización de recordatorios de pago para empresas",

              description:
                "Solución digital para apoyar la gestión de cartera mediante recordatorios automáticos, seguimiento de clientes y optimización de procesos de recaudo.",

              provider: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              areaServed: {
                "@type": "Country",

                name: "Colombia",
              },

              serviceType: "Automatización de gestión de cartera",
            },
          ]),
        }}
      />

      <RecordatoriosAutomaticosContent />
    </>
  );
}
