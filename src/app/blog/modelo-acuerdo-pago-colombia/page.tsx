import { Metadata } from "next";
import ModeloAcuerdoPagoColombia from "./ModeloAcuerdoPagoColombia";

export const metadata: Metadata = {
  title:
    "Modelo de acuerdo de pago empresarial en Colombia: formato para recuperar cartera",

  description:
    "Conoce cómo elaborar un acuerdo de pago empresarial en Colombia para recuperar cartera vencida, definir compromisos y mejorar la gestión de cobro.",

  keywords: [
    "modelo acuerdo de pago Colombia",
    "formato acuerdo de pago",
    "acuerdo de pago empresarial",
    "plantilla acuerdo de pago clientes morosos",
    "acuerdo de pago cartera vencida",
    "documento acuerdo de pago",
    "recuperación de cartera empresarial",
    "gestión de cartera empresas",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
  },

  openGraph: {
    title:
      "Modelo de acuerdo de pago empresarial en Colombia para recuperar cartera",

    description:
      "Aprende qué debe incluir un acuerdo de pago con clientes morosos y cómo utilizarlo para mejorar la recuperación de cartera empresarial.",

    url: "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Modelo de acuerdo de pago empresarial en Colombia",

    description:
      "Formato práctico para estructurar acuerdos de pago y recuperar cartera vencida.",
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
BLOG POSTING
=========================== */

            {
              "@context": "https://schema.org",

              "@type": "BlogPosting",

              headline:
                "Modelo de acuerdo de pago empresarial en Colombia: formato para recuperar cartera",

              description:
                "Guía práctica para empresas que necesitan estructurar acuerdos de pago con clientes morosos y mejorar sus procesos de recuperación de cartera.",

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
                  "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
              },

              articleSection: "Gestión de cartera empresarial",

              datePublished: "2026-01-01",

              dateModified: "2026-01-01",

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

                  name: "Modelo de acuerdo de pago empresarial",

                  item: "https://cobrandoonline.com/blog/modelo-acuerdo-pago-colombia",
                },
              ],
            },

            /* ===========================
FAQ
=========================== */

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es un acuerdo de pago empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un documento mediante el cual una empresa y su cliente establecen condiciones para cancelar una obligación pendiente, definiendo valores, fechas y compromisos de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué debe incluir un formato de acuerdo de pago?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un acuerdo de pago debe incluir identificación de las partes, valor de la deuda, fechas de pago, número de cuotas, condiciones de incumplimiento y aceptación del compromiso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un acuerdo de pago ayuda a recuperar cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Permite organizar la recuperación de cartera, establecer compromisos claros y facilitar el seguimiento a clientes con obligaciones pendientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo utilizar un acuerdo de pago con un cliente moroso?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Puede utilizarse cuando el cliente reconoce la deuda pero necesita una alternativa para realizar el pago mediante cuotas o fechas definidas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ModeloAcuerdoPagoColombia />
    </>
  );
}
