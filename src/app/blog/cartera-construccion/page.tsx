import { Metadata } from "next";
import CarteraConstruccion from "./CarteraConstruccion";

export const metadata: Metadata = {
  title:
    "Cartera en construcción: gestión de cobros, pagos pendientes y flujo de caja en obras",

  description:
    "Conoce cómo gestionar cartera en constructoras, controlar pagos pendientes en proyectos de obra y mejorar la recuperación de cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-construccion",
  },

  openGraph: {
    title: "Cartera en construcción: estrategias para recuperar pagos en obras",

    description:
      "Guía para constructoras y empresas de infraestructura sobre gestión de cartera, seguimiento de pagos y recuperación de cuentas pendientes.",

    url: "https://cobrandoonline.com/blog/cartera-construccion",

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
                "Cartera en construcción: estrategias para gestionar pagos pendientes en obras y proyectos",

              description:
                "Guía empresarial para constructoras sobre gestión de cartera, control de cuentas por cobrar y recuperación de pagos en proyectos de construcción.",

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
                "@id": "https://cobrandoonline.com/blog/cartera-construccion",
              },

              articleSection: "Gestión empresarial de cartera",

              keywords: [
                "cartera en construcción",
                "gestión de cartera en constructoras",
                "cobros en proyectos de construcción",
                "cuentas por cobrar constructoras",
                "recuperación de pagos en obras",
                "cartera vencida construcción",
              ],

              datePublished: "2026-01-01",

              dateModified: "2026-06-12",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la gestión de cartera en construcción?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La gestión de cartera en construcción es el conjunto de procesos utilizados para controlar, hacer seguimiento y recuperar pagos pendientes relacionados con obras, proyectos de infraestructura y servicios del sector constructor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué las constructoras suelen tener problemas de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las constructoras pueden enfrentar problemas de cartera debido a pagos por etapas, aprobación de actas de obra, procesos administrativos extensos, diferencias en facturación y retrasos en el flujo financiero de los proyectos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la cartera vencida en empresas de construcción?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Para reducir la cartera vencida es importante realizar seguimiento preventivo, controlar fechas de pago, mantener documentación organizada, monitorear clientes y establecer procesos claros de gestión de cobro.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a controlar la cartera de una constructora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Algunos indicadores útiles son días promedio de recaudo, antigüedad de cartera, porcentaje de cartera vencida, valor recuperado por periodo y rotación de cuentas por cobrar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar el seguimiento de pagos en proyectos de construcción?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El seguimiento puede mejorar mediante herramientas de gestión de cartera, alertas de vencimiento, control de facturas, comunicación periódica con clientes y análisis del comportamiento de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa constructora debe iniciar una gestión de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La gestión de recuperación debe iniciar desde las primeras señales de retraso en el pago, mediante acciones administrativas y de seguimiento antes de considerar otras alternativas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraConstruccion />
    </>
  );
}
