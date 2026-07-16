import { Metadata } from "next";
import RecaudoPymesContent from "./RecaudoPymesContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para PYMES en Colombia | Reduce la mora y mejora tu flujo de caja",

  description:
    "¿Tu PYME tiene clientes que no pagan? Recupera cartera vencida, mejora el flujo de caja y reduce la mora con estrategias profesionales de cobranza prejurídica y seguimiento de pagos en Colombia.",

  keywords: [
    "recuperación de cartera pymes",
    "recuperar cartera vencida colombia",
    "cobranza para pymes",
    "gestión de cartera colombia",
    "clientes morosos pymes",
    "reducir mora empresas",
    "seguimiento de cartera",
    "recuperar facturas vencidas",
    "cobro prejurídico colombia",
    "mejorar flujo de caja pyme",
    "empresa que recupera cartera",
    "recuperación de cartera comercial",
    "cobranzas para pequeñas empresas",
    "servicio de recaudo empresarial",
    "cobranza efectiva colombia",
    "recuperar pagos atrasados",
    "cartera morosa empresas",
    "externalizar cobranza",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/sectores/recaudo-pymes",
  },

  openGraph: {
    title:
      "Recuperación de cartera para PYMES | Recupera pagos atrasados y mejora tu liquidez",

    description:
      "Disminuye la cartera vencida de tu empresa mediante procesos profesionales de cobranza, seguimiento y negociación. Recupera ingresos sin deteriorar la relación con tus clientes.",

    url: "https://cobrandoonline.com/sectores/recaudo-pymes",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Clientes que no pagan? Recupera la cartera de tu PYME en Colombia",

    description:
      "Reduce la mora, mejora el flujo de caja y recupera pagos pendientes con estrategias profesionales de cobranza.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "Recuperación de Cartera",

  authors: [
    {
      name: "Cobrando Online",
    },
  ],
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      headline:
        "Cómo recuperar cartera en PYMES y mejorar el flujo de caja en Colombia",
      description:
        "Guía sobre cómo las PYMES pueden mejorar su flujo de caja mediante una gestión efectiva de cartera.",
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
        "@id": "https://cobrandoonline.com/sectores/recaudo-pymes",
      },
      datePublished: "2025-01-01",
      dateModified: "2026-01-01",
      inLanguage: "es",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#service",
      name: "Recuperación de cartera para PYMES en Colombia",
      alternateName: "Servicio de cobranza para pequeñas y medianas empresas",
      url: "https://cobrandoonline.com/sectores/recaudo-pymes",
      image: "https://cobrandoonline.com/logo.png",
      logo: "https://cobrandoonline.com/logo.png",

      description:
        "Servicio especializado en recuperación de cartera para pequeñas y medianas empresas en Colombia. Ayudamos a reducir la mora, recuperar facturas vencidas, negociar acuerdos de pago y mejorar el flujo de caja mediante procesos profesionales de cobranza prejurídica.",

      telephone: "+57 3234372766",

      email: "info@cobrandoonline.com",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
      },

      provider: {
        "@type": "Organization",
        name: "Cobrando Online",
        url: "https://cobrandoonline.com",
        logo: "https://cobrandoonline.com/logo.png",
      },

      serviceType: [
        "Recuperación de cartera",
        "Cobranza prejurídica",
        "Gestión de cartera",
        "Cobranza empresarial",
        "Recuperación de facturas vencidas",
        "Seguimiento de cartera",
        "Negociación de pagos",
        "Reducción de mora empresarial",
      ],

      audience: {
        "@type": "BusinessAudience",
        audienceType: "Pequeñas y medianas empresas",
      },

      knowsAbout: [
        "Cobranza empresarial",
        "Recuperación de cartera",
        "Flujo de caja",
        "Facturas vencidas",
        "Clientes morosos",
        "Cobro prejurídico",
        "Negociación de pagos",
        "Recaudo empresarial",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios para PYMES",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Recuperación de cartera vencida",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cobranza prejurídica",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Seguimiento de facturas pendientes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Negociación de acuerdos de pago",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Externalización del proceso de cobranza",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#breadcrumb",

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
          name: "Recuperación de cartera para PYMES",
          item: "https://cobrandoonline.com/sectores/recaudo-pymes",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#webpage",

      url: "https://cobrandoonline.com/sectores/recaudo-pymes",

      name: "Recuperación de cartera para PYMES en Colombia",

      headline:
        "Recuperación de cartera para PYMES: reduce la mora y mejora el flujo de caja",

      description:
        "Conoce cómo una estrategia profesional de recuperación de cartera ayuda a las pequeñas y medianas empresas en Colombia a disminuir la mora, recuperar pagos pendientes y fortalecer su flujo de caja sin afectar la relación con sus clientes.",

      inLanguage: "es-CO",

      isPartOf: {
        "@type": "WebSite",
        "@id": "https://cobrandoonline.com/#website",
        name: "Cobrando Online",
        url: "https://cobrandoonline.com",
      },

      about: {
        "@type": "Thing",
        name: "Recuperación de cartera para pequeñas y medianas empresas",
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://cobrandoonline.com/logo.png",
      },

      publisher: {
        "@type": "Organization",
        "@id": "https://cobrandoonline.com/#organization",
        name: "Cobrando Online",
        url: "https://cobrandoonline.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cobrandoonline.com/logo.png",
        },
      },

      mainEntity: {
        "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#service",
      },

      speakable: {
        "@type": "SpeakableSpecification",
        xpath: ["/html/head/title", "/html/body//h1", "/html/body//h2"],
      },

      datePublished: "2025-01-01",

      dateModified: "2026-07-16",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo recuperar cartera vencida en una PYME?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La recuperación de cartera comienza con un diagnóstico de las cuentas por cobrar, la clasificación de los clientes según el nivel de mora y la implementación de una estrategia de cobranza que incluya seguimiento, negociación y acuerdos de pago antes de considerar acciones legales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hacer cuando un cliente no paga una factura?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lo recomendable es contactar al cliente de manera formal, verificar las razones del incumplimiento, enviar recordatorios de pago y proponer acuerdos que permitan recuperar la obligación sin afectar la relación comercial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo disminuir la cartera vencida en una pequeña empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es importante implementar políticas claras de crédito, realizar seguimiento permanente a las cuentas por cobrar, automatizar recordatorios y aplicar procesos de cobranza desde los primeros días de mora.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo una PYME debería iniciar un proceso de cobranza?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lo ideal es iniciar el seguimiento desde el primer incumplimiento en la fecha de pago. Actuar rápidamente aumenta las probabilidades de recuperar la cartera y evita que la deuda continúe creciendo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué beneficios tiene externalizar la cobranza para una PYME?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Permite ahorrar tiempo, mejorar los índices de recuperación, reducir la carga administrativa y mantener un seguimiento profesional de los clientes con pagos pendientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo mejorar el flujo de caja mediante la recuperación de cartera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recuperar oportunamente las cuentas por cobrar incrementa la liquidez, facilita el cumplimiento de obligaciones financieras y permite reinvertir recursos en el crecimiento de la empresa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tipos de empresas pueden utilizar un servicio de recuperación de cartera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cualquier PYME que venda productos o servicios a crédito puede beneficiarse de una estrategia profesional de cobranza, independientemente del sector económico al que pertenezca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si un cliente continúa sin pagar después de varios requerimientos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuando la gestión de cobranza no genera resultados, pueden evaluarse alternativas adicionales de recuperación, siempre procurando agotar primero las etapas de negociación y cobro prejurídico.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo evitar que la cartera vuelva a crecer en una PYME?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La mejor estrategia consiste en definir políticas de crédito, realizar seguimiento continuo, establecer condiciones claras de pago y mantener comunicación permanente con los clientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuáles son las principales causas de la cartera vencida en las PYMES?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las causas más frecuentes son la falta de seguimiento a las cuentas por cobrar, procesos de crédito poco definidos, ausencia de recordatorios de pago y clientes con dificultades financieras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es posible recuperar facturas con varios meses de mora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Aunque entre más antigua sea la deuda mayor puede ser la dificultad de recuperación, una estrategia profesional de negociación y seguimiento aumenta las probabilidades de obtener el pago.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por qué una buena gestión de cartera mejora la competitividad de una PYME?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una empresa con mejor flujo de caja puede invertir, cumplir sus obligaciones, aprovechar oportunidades comerciales y crecer de manera sostenible sin depender de financiación adicional.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id":
        "https://cobrandoonline.com/sectores/recaudo-pymes#recovery-service",

      name: "Servicio de recuperación de cartera para PYMES",

      description:
        "Servicio especializado para pequeñas y medianas empresas que buscan recuperar cartera vencida, reducir la mora, mejorar el flujo de caja y optimizar la gestión de cuentas por cobrar mediante procesos profesionales de cobranza.",

      serviceType: "Recuperación de cartera empresarial",

      category: "Cobranza Empresarial",

      provider: {
        "@id": "https://cobrandoonline.com/#organization",
      },

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      audience: {
        "@type": "BusinessAudience",
        audienceType: "Pequeñas y medianas empresas",
      },

      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://cobrandoonline.com/sectores/recaudo-pymes",
        serviceSmsNumber: "+573234372766",
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de recuperación de cartera para PYMES",

        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico de cartera vencida",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cobranza preventiva",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cobranza prejurídica",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Negociación de acuerdos de pago",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Seguimiento de facturas pendientes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Clasificación de clientes morosos",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Externalización del proceso de cobranza",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Optimización del flujo de caja",
            },
          },
        ],
      },

      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "COP",
        url: "https://cobrandoonline.com/sectores/recaudo-pymes",
      },

      mainEntityOfPage: {
        "@id": "https://cobrandoonline.com/sectores/recaudo-pymes#webpage",
      },
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

      <RecaudoPymesContent />
    </>
  );
}
