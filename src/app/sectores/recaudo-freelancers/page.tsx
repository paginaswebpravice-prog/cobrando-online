import { Metadata } from "next";
import RecaudoFreelancersContent from "./RecaudoFreelancersContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para freelancers en Colombia | Cobra clientes morosos más rápido",

  description:
    "¿Eres freelancer y tienes clientes que no pagan? Recupera pagos atrasados, mejora tu flujo de caja y reduce la mora con estrategias profesionales de cobranza, seguimiento y negociación en Colombia.",

  keywords: [
    "recuperación de cartera freelancers",
    "cobranza para freelancers",
    "clientes morosos freelancer",
    "clientes que no pagan",
    "cómo cobrar clientes",
    "cómo recuperar pagos atrasados",
    "cómo cobrar una factura",
    "recuperar dinero freelancer",
    "cobrar facturas freelancer",
    "gestión de cobranza",
    "seguimiento de cartera",
    "recuperación de pagos",
    "recaudo para trabajadores independientes",
    "cobro prejurídico freelancers",
    "gestión de cartera freelancer Colombia",
    "recuperar pagos de clientes",
    "trabajador independiente cartera",
    "cobranza profesional Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/sectores/recaudo-freelancers",
  },

  openGraph: {
    title:
      "Recupera pagos atrasados de tus clientes | Cobranza para freelancers en Colombia",

    description:
      "Recupera clientes morosos, mejora el flujo de caja y cobra tus proyectos de manera profesional sin afectar la relación comercial.",

    url: "https://cobrandoonline.com/sectores/recaudo-freelancers",

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
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline:
        "Recuperación de cartera para freelancers en Colombia: cómo cobrar clientes morosos y recuperar pagos atrasados",

      description:
        "Conoce cómo recuperar pagos pendientes, reducir la mora y mejorar el recaudo de clientes siendo freelancer en Colombia mediante estrategias profesionales de cobranza.",

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
        "@id": "https://cobrandoonline.com/sectores/recaudo-freelancers",
      },

      inLanguage: "es",

      datePublished: "2025-01-01",

      dateModified: "2026-07-16",
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

          name: "Sectores",

          item: "https://cobrandoonline.com/sectores",
        },

        {
          "@type": "ListItem",

          position: 3,

          name: "Freelancers",

          item: "https://cobrandoonline.com/sectores/recaudo-freelancers",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué hacer cuando un cliente no paga un trabajo como freelancer?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Lo recomendable es iniciar un proceso de seguimiento organizado, enviar recordatorios formales, negociar acuerdos de pago y aplicar una estrategia profesional de cobranza antes de considerar otras alternativas.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo recuperar pagos atrasados de clientes en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La recuperación de pagos requiere identificar la deuda, realizar seguimiento constante, documentar las comunicaciones y negociar soluciones que permitan obtener el pago pendiente.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo evitar clientes morosos siendo freelancer?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Es recomendable utilizar contratos, solicitar anticipos, definir fechas de pago, emitir facturas oportunamente y realizar seguimiento permanente.",
          },
        },

        {
          "@type": "Question",

          name: "¿Puedo cobrar una factura vencida meses después?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Dependiendo del caso todavía es posible iniciar una estrategia de recuperación de cartera para obtener el pago.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué documentos ayudan a demostrar una deuda?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Contratos, cotizaciones aceptadas, órdenes de servicio, facturas, conversaciones, correos electrónicos y comprobantes pueden servir como soporte de la obligación.",
          },
        },

        {
          "@type": "Question",

          name: "¿Es recomendable contratar un servicio de cobranza para freelancers?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Cuando los intentos de cobro no generan resultados, una gestión profesional suele incrementar las probabilidades de recuperación y reducir el tiempo de mora.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo mejorar el flujo de caja siendo freelancer?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Implementando procesos de cobranza, seguimiento de cartera, control de facturas y acuerdos claros con cada cliente.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué tipos de freelancers pueden recuperar cartera?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Diseñadores, desarrolladores, consultores, arquitectos, fotógrafos, community managers, abogados independientes, traductores, copywriters y cualquier profesional que facture sus servicios.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <RecaudoFreelancersContent />
    </>
  );
}
