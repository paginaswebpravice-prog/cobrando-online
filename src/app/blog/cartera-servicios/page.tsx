import { Metadata } from "next";
import CarteraServicios from "./CarteraServicios";

export const metadata: Metadata = {
  title:
    "Gestión de cartera en empresas de servicios: estrategias para recuperar pagos y reducir la morosidad | Guía 2026",

  description:
    "Descubre cómo gestionar la cartera en empresas de servicios, reducir la cartera vencida, mejorar el flujo de caja y recuperar pagos pendientes mediante estrategias preventivas, automatización y procesos eficientes de cobranza.",

  keywords: [
    "cartera empresas de servicios",
    "gestión de cartera",
    "recuperación de cartera",
    "recuperación de pagos",
    "cuentas por cobrar",
    "cartera vencida",
    "cobranza empresas de servicios",
    "cobranza preventiva",
    "software de cartera",
    "automatización de cobranza",
    "flujo de caja",
    "gestión de cuentas por cobrar",
    "morosidad empresarial",
    "Cobrando Online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-servicios",
  },

  openGraph: {
    title:
      "Cómo gestionar la cartera en empresas de servicios y recuperar pagos más rápido",

    description:
      "Aprende estrategias para disminuir la cartera vencida, mejorar el recaudo y optimizar el flujo de caja en empresas de servicios.",

    url: "https://cobrandoonline.com/blog/cartera-servicios",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Gestión de cartera en empresas de servicios | Guía completa",

    description:
      "Conoce cómo reducir la morosidad y mejorar la recuperación de pagos mediante procesos modernos de gestión de cartera.",
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
                "Gestión de cartera en empresas de servicios: cómo recuperar pagos y reducir la cartera vencida",

              description:
                "Guía completa para optimizar la gestión de cartera en empresas de servicios mediante procesos preventivos, automatización y estrategias de recuperación de pagos.",

              keywords: [
                "gestión de cartera",
                "cartera empresas de servicios",
                "recuperación de cartera",
                "cuentas por cobrar",
                "cartera vencida",
                "recuperación de pagos",
              ],

              wordCount: "3200",

              articleSection: "Gestión de Cartera",

              about: [
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cuentas por cobrar",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
              ],
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
                "@id": "https://cobrandoonline.com/blog/cartera-servicios",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-06-12",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",

              "@type": "HowTo",

              name: "Cómo mejorar la gestión de cartera en una empresa de servicios",

              description:
                "Proceso recomendado para disminuir la cartera vencida y recuperar pagos pendientes.",

              step: [
                {
                  "@type": "HowToStep",
                  name: "Evaluar el riesgo del cliente",
                },

                {
                  "@type": "HowToStep",
                  name: "Definir políticas de crédito",
                },

                {
                  "@type": "HowToStep",
                  name: "Emitir la factura oportunamente",
                },

                {
                  "@type": "HowToStep",
                  name: "Realizar seguimiento preventivo",
                },

                {
                  "@type": "HowToStep",
                  name: "Automatizar recordatorios",
                },

                {
                  "@type": "HowToStep",
                  name: "Negociar acuerdos de pago",
                },

                {
                  "@type": "HowToStep",
                  name: "Escalar a cobro prejurídico cuando corresponda",
                },
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "ItemList",

              name: "Buenas prácticas para gestionar cartera en empresas de servicios",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Implementar políticas de crédito",
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Automatizar recordatorios de pago",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Monitorear indicadores de cartera",
                },

                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Negociar acuerdos de pago",
                },

                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Documentar correctamente cada servicio",
                },
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "DefinedTerm",

              name: "Gestión de cartera",

              description:
                "Conjunto de procesos utilizados para administrar, controlar y recuperar las cuentas por cobrar de una empresa.",

              inDefinedTermSet: "https://cobrandoonline.com/blog",
            },
            {
              "@context": "https://schema.org",

              "@type": "WebPage",

              name: "Gestión de cartera en empresas de servicios",

              description:
                "Guía especializada sobre administración de cuentas por cobrar y recuperación de pagos en empresas de servicios.",

              url: "https://cobrandoonline.com/blog/cartera-servicios",

              primaryImageOfPage: "https://cobrandoonline.com/logo.png",

              inLanguage: "es-CO",
            },
          ]),
        }}
      />

      <CarteraServicios />
    </>
  );
}
