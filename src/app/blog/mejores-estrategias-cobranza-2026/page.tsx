import { Metadata } from "next";
import EstrategiasCobranza2026 from "./EstrategiasCobranza2026";

export const metadata: Metadata = {
  title:
    "Estrategias de cobranza empresarial 2026: reduce mora y recupera cartera",

  description:
    "Descubre las mejores estrategias de cobranza empresarial en 2026 para reducir clientes morosos, optimizar procesos de cobro y recuperar cartera vencida.",

  keywords: [
    "estrategias de cobranza empresarial",
    "estrategias de cobranza 2026",
    "cobranza efectiva para empresas",
    "cómo recuperar cartera vencida",
    "gestión de cartera empresarial",
    "reducir morosidad empresarial",
    "automatización de cobranza",
    "procesos de recuperación de cartera",
    "mejorar flujo de caja empresas",
    "seguimiento de cartera vencida",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
  },

  openGraph: {
    title:
      "Estrategias de cobranza empresarial 2026 para recuperar cartera vencida",

    description:
      "Conoce cómo las empresas pueden reducir la mora mediante automatización, segmentación de clientes y nuevas estrategias de recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Estrategias de cobranza empresarial 2026",

    description:
      "Aprende cómo mejorar la recuperación de cartera y reducir clientes morosos con estrategias modernas de cobranza.",
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
            /* ===========================
   ARTICLE SCHEMA
=========================== */

            {
              "@context": "https://schema.org",

              "@type": "BlogPosting",

              headline:
                "Estrategias de cobranza empresarial 2026: cómo reducir mora y recuperar cartera",

              description:
                "Guía práctica para empresas que buscan mejorar sus procesos de cobranza, reducir clientes morosos y aumentar la recuperación de cartera.",

              image:
                "https://cobrandoonline.com/images/blog/estrategias-cobranza-2026.jpg",

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
                  "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-01-01",

              articleSection: "Estrategias de cobranza empresarial",

              inLanguage: "es-CO",
            },

            /* ===========================
   BREADCRUMB
=========================== */

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

                  name: "Estrategias de cobranza empresarial 2026",

                  item: "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
                },
              ],
            },

            /* ===========================
   FAQ SCHEMA
=========================== */

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cuáles son las mejores estrategias de cobranza empresarial en 2026?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las estrategias más efectivas incluyen automatización de procesos, segmentación de clientes, seguimiento preventivo, análisis de indicadores y acciones diferenciadas según el nivel de mora.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la morosidad de clientes en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Para reducir la morosidad es importante implementar políticas claras de crédito, realizar seguimiento oportuno, identificar clientes de riesgo y establecer procesos organizados de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar la recuperación de cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La recuperación de cartera mejora cuando las empresas combinan tecnología, seguimiento constante, acuerdos de pago documentados y análisis del comportamiento de sus clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa debe escalar una deuda a cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una empresa puede evaluar el cobro jurídico cuando las gestiones administrativas y prejurídicas no generan resultados y cuenta con documentos que soportan la obligación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EstrategiasCobranza2026 />
    </>
  );
}
