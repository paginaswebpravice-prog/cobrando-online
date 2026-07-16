import { Metadata } from "next";
import RecaudoInmobiliariasContent from "./RecaudoInmobiliariasContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para inmobiliarias en Colombia | Cobro de arriendos vencidos y reducción de mora",

  description:
    "Reduce la mora en contratos de arrendamiento, recupera arriendos vencidos y mejora el flujo de caja de tu inmobiliaria con un servicio especializado de recuperación de cartera y cobranza profesional en Colombia.",

  keywords: [
    "recuperación de cartera inmobiliaria",
    "recuperación de cartera inmobiliaria Colombia",
    "cobro de arriendos",
    "cobro de arriendos vencidos",
    "recuperar arriendos atrasados",
    "cartera vencida inmobiliarias",
    "mora en arrendamientos",
    "gestión de cobranza inmobiliaria",
    "recaudo inmobiliario",
    "empresa de cobranza inmobiliaria",
    "cobranza de arrendamientos",
    "recuperar cánones de arrendamiento",
    "recuperación de cartera de arriendos",
    "seguimiento de cartera inmobiliaria",
    "disminuir mora inmobiliaria",
    "clientes morosos inmobiliarias",
    "cobro prejurídico inmobiliarias",
    "servicio de cobranza para inmobiliarias",
    "mejorar flujo de caja inmobiliaria",
    "recaudo de cartera inmobiliaria",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/sectores/recaudo-inmobiliarias",
  },

  category: "Recuperación de cartera",

  authors: [
    {
      name: "Cobrando Online",
    },
  ],

  creator: "Cobrando Online",

  publisher: "Cobrando Online",
  openGraph: {
    title:
      "¿Arriendos vencidos? Recupera la cartera de tu inmobiliaria más rápido",

    description:
      "Conoce cómo disminuir la mora, recuperar cánones de arrendamiento y aumentar el recaudo de tu inmobiliaria mediante procesos profesionales de cobranza.",

    url: "https://cobrandoonline.com/sectores/recaudo-inmobiliarias",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },
  twitter: {
    card: "summary_large_image",

    title: "Recuperación de cartera para inmobiliarias | Cobrando Online",

    description:
      "Recupera arriendos atrasados, reduce la mora y mejora el flujo de caja de tu inmobiliaria.",

    creator: "@cobrandoonline",
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-image-preview": "large",

      "max-video-preview": -1,

      "max-snippet": -1,
    },
  },
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",

      "@id": "https://cobrandoonline.com/#organization",

      name: "Cobrando Online",

      url: "https://cobrandoonline.com",

      logo: {
        "@type": "ImageObject",
        url: "https://cobrandoonline.com/logo.png",
      },

      description:
        "Empresa especializada en recuperación de cartera, cobranza prejurídica, recaudo empresarial y optimización del flujo de caja en Colombia.",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      sameAs: [],
    },
    {
      "@context": "https://schema.org",

      "@type": "Service",

      "@id":
        "https://cobrandoonline.com/sectores/recaudo-inmobiliarias#service",

      serviceType: "Recuperación de cartera para inmobiliarias",

      name: "Servicio de recuperación de cartera y cobro de arriendos para inmobiliarias",

      description:
        "Servicio especializado para recuperar cánones de arrendamiento vencidos, disminuir la mora y mejorar el recaudo de inmobiliarias mediante procesos de cobranza preventiva, administrativa y prejurídica.",

      provider: {
        "@id": "https://cobrandoonline.com/#organization",
      },

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      audience: {
        "@type": "BusinessAudience",
        audienceType: "Inmobiliarias",
      },

      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://cobrandoonline.com/sectores/recaudo-inmobiliarias",
      },
    },
    {
      "@context": "https://schema.org",

      "@type": "BlogPosting",

      "@id":
        "https://cobrandoonline.com/sectores/recaudo-inmobiliarias#article",

      headline:
        "Cómo recuperar cartera inmobiliaria y cobrar arriendos vencidos en Colombia",

      alternativeHeadline:
        "Guía para reducir la mora y recuperar cánones de arrendamiento",

      description:
        "Aprende cómo recuperar arriendos atrasados, disminuir la cartera vencida y optimizar el recaudo en inmobiliarias colombianas.",

      image: "https://cobrandoonline.com/images/recaudo-inmobiliarias.webp",

      author: {
        "@id": "https://cobrandoonline.com/#organization",
      },

      publisher: {
        "@id": "https://cobrandoonline.com/#organization",
      },

      mainEntityOfPage: {
        "@type": "WebPage",

        "@id": "https://cobrandoonline.com/sectores/recaudo-inmobiliarias",
      },

      keywords: [
        "recuperación de cartera inmobiliaria",
        "cobro de arriendos",
        "cartera vencida",
        "inmobiliarias",
        "cobranza",
        "arrendamientos",
      ],

      wordCount: "2500",

      inLanguage: "es-CO",

      datePublished: "2025-01-01",

      dateModified: "2026-01-01",
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

          name: "Recuperación de cartera para inmobiliarias",

          item: "https://cobrandoonline.com/sectores/recaudo-inmobiliarias",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo recuperar arriendos atrasados en una inmobiliaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El proceso comienza con la identificación de la cartera vencida, el contacto con el arrendatario, la negociación de acuerdos de pago y el seguimiento permanente. Si el incumplimiento continúa, pueden iniciarse las acciones correspondientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hacer cuando un inquilino deja de pagar el arriendo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable actuar rápidamente mediante una gestión de cobranza organizada, documentando todas las comunicaciones y buscando acuerdos antes de que la deuda aumente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo reducir la cartera vencida en una inmobiliaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Implementando políticas claras de recaudo, recordatorios automáticos, seguimiento periódico, acuerdos de pago y procesos de cobranza preventiva.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo puede permanecer un arriendo en mora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de cada contrato y del proceso de gestión realizado. Lo recomendable es iniciar el seguimiento desde el primer incumplimiento para evitar que la deuda siga creciendo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo mejorar el flujo de caja de una inmobiliaria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reduciendo los tiempos de recaudo, disminuyendo la cartera vencida y manteniendo una gestión permanente sobre los pagos pendientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ventajas tiene una cobranza especializada para inmobiliarias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Permite aumentar la recuperación de cartera, reducir la mora, mejorar el flujo de caja y conservar una comunicación profesional con los arrendatarios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo evitar que aumente la mora en contratos de arrendamiento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediante seguimiento continuo, recordatorios de pago, contacto oportuno con el arrendatario y procesos de cobranza preventiva antes de que la deuda se vuelva crítica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es posible recuperar varios meses de arriendo vencido?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Dependiendo de cada caso pueden negociarse acuerdos de pago o implementar estrategias de recuperación de cartera orientadas a normalizar la deuda.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tipo de inmobiliarias pueden utilizar un servicio de recuperación de cartera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empresas administradoras de inmuebles, inmobiliarias, constructoras con áreas de arrendamientos y administradores de propiedades que manejan cartera de cánones pendientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por qué es importante iniciar el cobro desde el primer mes de mora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Porque aumenta significativamente las probabilidades de recuperación, evita que la deuda siga creciendo y mejora la liquidez de la inmobiliaria.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona el recaudo para inmobiliarias de Cobrando Online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Analizamos la cartera, priorizamos los casos según su nivel de riesgo, implementamos estrategias de contacto y negociación y realizamos seguimiento permanente hasta lograr la recuperación de los pagos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué beneficios obtiene una inmobiliaria al disminuir su cartera vencida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mayor liquidez, mejor flujo de caja, reducción del riesgo financiero, incremento en la rentabilidad del portafolio y una administración más eficiente de los contratos de arrendamiento.",
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

      <RecaudoInmobiliariasContent />
    </>
  );
}
