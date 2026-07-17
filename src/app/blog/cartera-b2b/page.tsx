import { Metadata } from "next";
import CarteraB2B from "./CarteraB2B";

export const metadata: Metadata = {
  title:
    "Cobranza B2B: gestión de cartera empresarial, estrategias y recuperación de pagos",

  description:
    "Conoce cómo funciona la cobranza B2B, cómo gestionar cuentas por cobrar entre empresas y qué estrategias ayudan a mejorar la recuperación de pagos empresariales.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-b2b",
  },

  openGraph: {
    title: "Cobranza B2B: guía para gestionar cartera entre empresas",

    description:
      "Aprende estrategias de cobranza B2B, control de cartera empresarial y buenas prácticas para recuperar pagos sin afectar relaciones comerciales.",

    url: "https://cobrandoonline.com/blog/cartera-b2b",

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
                "Cobranza B2B: estrategias para gestionar cartera entre empresas y mejorar pagos",

              description:
                "Guía empresarial sobre cobranza B2B, gestión de cuentas por cobrar, prevención de mora y estrategias para mejorar la recuperación de pagos.",

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
                "@id": "https://cobrandoonline.com/blog/cartera-b2b",
              },

              articleSection: "Gestión empresarial de cartera",

              keywords: [
                "cobranza B2B",
                "cartera empresarial",
                "cuentas por cobrar entre empresas",
                "gestión de cartera B2B",
                "recuperación de pagos empresariales",
                "estrategias de cobranza empresarial",
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

                  name: "¿Qué es la cobranza B2B?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cobranza B2B es el proceso de gestionar y recuperar pagos pendientes entre empresas que mantienen relaciones comerciales mediante facturación a crédito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre cobranza B2B y cobranza tradicional?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cobranza B2B involucra operaciones entre empresas, normalmente con facturas de mayor valor, procesos administrativos más complejos y relaciones comerciales de largo plazo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar la gestión de cartera B2B?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una empresa puede mejorar su gestión de cartera B2B mediante seguimiento preventivo, políticas claras de crédito, automatización de recordatorios y análisis constante de indicadores financieros.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores sirven para medir la cobranza B2B?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Algunos indicadores importantes son el DSO, porcentaje de recuperación, antigüedad de cartera vencida y tiempo promedio de recaudo.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "WebPage",

              name: "Cobranza B2B: gestión de cartera entre empresas",

              url: "https://cobrandoonline.com/blog/cartera-b2b",

              description:
                "Guía para empresas sobre cobranza B2B, recuperación de pagos y gestión de cuentas por cobrar.",
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
                  name: "Cobranza B2B",
                  item: "https://cobrandoonline.com/blog/cartera-b2b",
                },
              ],
            },
          ]),
        }}
      />

      <CarteraB2B />
    </>
  );
}
