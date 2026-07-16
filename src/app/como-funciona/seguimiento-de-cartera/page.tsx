import { Metadata } from "next";
import SeguimientoCarteraContent from "./SeguimientoCarteraContent";

export const metadata: Metadata = {
  title:
    "Seguimiento de cartera en Colombia: controla cobros y mejora el recaudo empresarial",

  description:
    "Realiza seguimiento de cartera en Colombia con control en línea, trazabilidad de gestiones y monitoreo del estado de cada cuenta para mejorar el recaudo empresarial.",

  keywords: [
    "seguimiento de cartera Colombia",

    "control de cartera empresarial",

    "seguimiento de cobros",

    "trazabilidad de cartera",

    "estado de cartera clientes",

    "gestión de cartera en línea",

    "monitoreo de cartera",

    "control cuentas por cobrar",

    "software seguimiento cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/seguimiento-de-cartera",
  },

  openGraph: {
    title:
      "Seguimiento de cartera en Colombia: controla cada cobro y mejora tu recaudo",

    description:
      "Visualiza avances, controla gestiones y conoce el estado de tu cartera con seguimiento estructurado para empresas.",

    url: "https://cobrandoonline.com/servicios/seguimiento-de-cartera",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Seguimiento de cartera empresarial en Colombia",

    description:
      "Controla el estado de tus cuentas por cobrar y mejora la gestión de cartera con seguimiento digital.",
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
                "https://cobrandoonline.com/servicios/seguimiento-de-cartera#webpage",

              url: "https://cobrandoonline.com/servicios/seguimiento-de-cartera",

              name: "Seguimiento de cartera en Colombia: controla cobros y mejora el recaudo empresarial",

              description:
                "Página informativa sobre seguimiento de cartera empresarial, control de gestiones, trazabilidad y monitoreo de cuentas pendientes.",

              inLanguage: "es-CO",

              isPartOf: {
                "@type": "WebSite",

                "@id": "https://cobrandoonline.com/#website",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              about: {
                "@type": "Thing",

                name: "Seguimiento digital de cartera empresarial",
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
                "https://cobrandoonline.com/servicios/seguimiento-de-cartera#article",

              headline:
                "Seguimiento de cartera en Colombia: controla cobros y mejora el recaudo empresarial",

              description:
                "Guía sobre seguimiento de cartera, trazabilidad de gestiones y control del estado de cuentas por cobrar para empresas.",

              articleSection: "Gestión empresarial de cartera",

              keywords: [
                "seguimiento de cartera",

                "control de cartera",

                "trazabilidad de cobros",

                "gestión de cuentas por cobrar",
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
                  "https://cobrandoonline.com/servicios/seguimiento-de-cartera",
              },

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              "@id":
                "https://cobrandoonline.com/servicios/seguimiento-de-cartera#faq",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es el seguimiento de cartera empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El seguimiento de cartera empresarial es el proceso de controlar, registrar y monitorear el estado de las cuentas pendientes, las gestiones realizadas y los avances de recuperación de cada obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante hacer seguimiento a la cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite conocer qué clientes tienen pagos pendientes, qué acciones se han realizado y qué oportunidades existen para mejorar el recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué información permite controlar un seguimiento de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite consultar estados de gestión, historial de contactos, avances de cobro, compromisos de pago y evolución de cada cuenta pendiente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre seguimiento de cartera y cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El seguimiento de cartera se enfoca en organizar, controlar y monitorear la gestión de cobro. El cobro jurídico corresponde a procesos legales cuando una obligación requiere acciones judiciales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Una empresa puede consultar el estado de su cartera en línea?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Las herramientas digitales permiten consultar información actualizada y tener mayor visibilidad sobre la gestión realizada.",
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
                "Plataforma digital para empresas que necesitan organizar procesos de cartera, consultar avances de gestión y mejorar el control de sus cuentas por cobrar.",

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
                "https://cobrandoonline.com/servicios/seguimiento-de-cartera#service",

              name: "Servicio de seguimiento de cartera empresarial",

              description:
                "Gestión estructurada de seguimiento de cartera mediante control de avances, trazabilidad de acciones y monitoreo del estado de cuentas pendientes.",

              provider: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",
              },

              areaServed: {
                "@type": "Country",

                name: "Colombia",
              },

              serviceType: "Seguimiento y control digital de cartera",
            },
          ]),
        }}
      />

      <SeguimientoCarteraContent />
    </>
  );
}
