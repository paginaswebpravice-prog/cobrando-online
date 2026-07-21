import { Metadata } from "next";
import ClientesNoPagan from "./ClientesNoPagan";

export const metadata: Metadata = {
  title:
    "Cliente no paga: qué hacer para recuperar una deuda empresarial en Colombia",

  description:
    "Guía para empresas que tienen clientes morosos: conoce qué hacer cuando un cliente no paga, cómo cobrar una deuda y cuándo iniciar acciones legales.",

  keywords: [
    "cliente no paga",
    "qué hacer cuando un cliente no paga",
    "clientes morosos Colombia",
    "recuperar deuda empresarial",
    "cobrar una deuda comercial",
    "recuperación de cartera empresarial",
    "cobranza para empresas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
  },

  openGraph: {
    title: "Cliente no paga: cómo recuperar una deuda empresarial en Colombia",

    description:
      "Conoce los pasos para recuperar dinero de clientes morosos, documentos necesarios y cuándo acudir a un proceso de cobro.",

    url: "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  robots: {
    index: true,

    follow: true,
  },
  authors: [
    {
      name: "Cobrando Online",
    },
  ],
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
                "Clientes que no pagan: pasos para recuperar dinero y cobrar deudas en Colombia",

              description:
                "Guía para empresas que necesitan recuperar dinero de clientes morosos, cobrar facturas pendientes y mejorar sus procesos de recuperación de cartera.",

              image:
                "https://cobrandoonline.com/images/blog/clientes-que-no-pagan.jpg",

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cobrandoonline.com/logo.png",
                },
              },

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",

              articleSection: "Recuperación de cartera",

              keywords: [
                "clientes que no pagan",
                "recuperación de cartera empresarial",
                "cobrar facturas pendientes",
                "clientes morosos",
                "cartera vencida empresarial",
              ],

              about: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Clientes morosos",
                },
              ],
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
                  name: "Clientes que no pagan: cómo recuperar dinero",

                  item: "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué hacer si un cliente no paga una deuda empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando un cliente no paga, lo recomendable es verificar los soportes de la obligación, realizar seguimiento oportuno, establecer comunicaciones formales y aplicar estrategias de cobranza antes de escalar el caso a procesos jurídicos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo cobrar una factura vencida a un cliente en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Para cobrar una factura vencida es importante contactar al cliente, confirmar la obligación pendiente, documentar los compromisos de pago y realizar una gestión organizada de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué documentos necesito para recuperar dinero de un cliente moroso?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los documentos más utilizados son facturas electrónicas, contratos, órdenes de compra, comprobantes de entrega, pagarés, acuerdos de pago y comunicaciones donde se evidencie la existencia de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa debe iniciar un cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El cobro jurídico puede evaluarse cuando las gestiones administrativas y acuerdos de pago no logran resultados, especialmente cuando existe documentación suficiente para respaldar la deuda.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo evitar que los clientes se conviertan en morosos?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las empresas pueden reducir la mora mediante políticas claras de crédito, validación de clientes, seguimiento preventivo, recordatorios de pago y procesos organizados de gestión de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ClientesNoPagan />
    </>
  );
}
