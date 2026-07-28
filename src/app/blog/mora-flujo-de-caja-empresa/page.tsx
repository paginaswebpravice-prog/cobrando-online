import { Metadata } from "next";
import MoraFlujoDeCajaEmpresaContent from "./MoraFlujoDeCajaEmpresaContent";

export const metadata: Metadata = {
  title:
    "Cómo la mora afecta el flujo de caja de una empresa en Colombia | Guía 2026 para reducir la cartera vencida",

  description:
    "Descubre cómo la mora y la cartera vencida afectan el flujo de caja, la liquidez y el crecimiento de una empresa en Colombia. Aprende estrategias para reducir el riesgo financiero y mejorar la recuperación de cartera.",

  keywords: [
    "cómo la mora afecta el flujo de caja",
    "flujo de caja empresa",
    "cartera vencida Colombia",
    "liquidez empresarial",
    "problemas de liquidez empresas",
    "impacto de la mora",
    "mora empresarial",
    "gestión de cartera",
    "recuperación de cartera",
    "cobranza empresarial",
    "disminución del flujo de caja",
    "cartera morosa",
    "empresas con cartera vencida",
    "control de cartera",
    "indicadores de cartera",
    "reducción de mora",
    "cobro preventivo",
    "Cobrando Online",
  ],

  authors: [
    {
      name: "Cobrando Online",
    },
  ],

  creator: "Cobrando Online",

  publisher: "Cobrando Online",

  category: "Gestión de Cartera",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
  },

  openGraph: {
    title:
      "¿La mora está afectando el flujo de caja de tu empresa? Descubre cómo reducir el impacto",

    description:
      "Conoce cómo la cartera vencida afecta la liquidez empresarial, cuáles son los principales riesgos financieros y qué estrategias ayudan a recuperar cartera de forma más eficiente.",

    url: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/images/blog/mora-flujo-caja.webp",
        width: 1200,
        height: 630,
        alt: "Cómo la mora afecta el flujo de caja de una empresa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo la cartera vencida afecta el flujo de caja de una empresa",

    description:
      "Aprende por qué la mora reduce la liquidez empresarial y conoce estrategias para disminuir el riesgo financiero.",

    images: ["/images/blog/mora-flujo-caja.webp"],
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
};

export default function Page() {
  return (
    <>
      {/* ===========================
          SCHEMA SEO
      =========================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Cómo la mora afecta el flujo de caja de una empresa en Colombia y qué hacer para evitar problemas de liquidez",

              alternativeHeadline:
                "Impacto de la cartera vencida en la liquidez empresarial",

              description:
                "Guía completa sobre el impacto que tiene la mora y la cartera vencida sobre el flujo de caja, la liquidez, el capital de trabajo y la estabilidad financiera de las empresas colombianas.",

              image: [
                "https://cobrandoonline.com/images/blog/mora-flujo-caja.webp",
              ],

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
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
                  "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
              },

              url: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",

              datePublished: "2026-01-01",

              dateModified: "2026-07-28",

              inLanguage: "es-CO",

              articleSection: "Gestión de Cartera",

              keywords: [
                "flujo de caja",
                "mora empresarial",
                "cartera vencida",
                "liquidez",
                "recuperación de cartera",
                "cobranza empresarial",
                "capital de trabajo",
                "morosidad",
              ],

              wordCount: 2600,

              timeRequired: "PT13M",

              about: [
                {
                  "@type": "Thing",
                  name: "Flujo de caja",
                },
                {
                  "@type": "Thing",
                  name: "Liquidez empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Cartera vencida",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Capital de trabajo",
                },
                {
                  "@type": "Thing",
                  name: "Indicadores financieros",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
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
                  name: "Cómo la mora afecta el flujo de caja",
                  item: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo afecta la mora el flujo de caja de una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mora retrasa el ingreso de recursos esperados, disminuye la liquidez disponible y obliga a muchas empresas a utilizar financiación adicional para cubrir sus obligaciones.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La cartera vencida siempre genera problemas de liquidez?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando la cartera vencida representa un porcentaje importante de los ingresos esperados, puede afectar la liquidez y limitar la capacidad operativa de la empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo disminuir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando políticas de crédito, seguimiento preventivo, recordatorios automáticos, acuerdos de pago y procesos de recuperación oportunos.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué sectores presentan mayores riesgos de mora?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sectores como salud, construcción, distribución, transporte y servicios empresariales suelen manejar altos volúmenes de cuentas por cobrar y requieren controles permanentes.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten detectar problemas de liquidez?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El DSO, la rotación de cartera, el porcentaje de mora, el índice de recuperación y el flujo de caja operativo son algunos de los indicadores más utilizados.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre liquidez y flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La liquidez representa la capacidad para cumplir obligaciones de corto plazo, mientras que el flujo de caja refleja las entradas y salidas reales de dinero durante un periodo.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo ayuda una buena gestión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite reducir la morosidad, mejorar el recaudo, proteger el flujo de caja y disminuir el riesgo financiero de la empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué es importante actuar desde los primeros días de mora?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las probabilidades de recuperación disminuyen conforme aumenta la antigüedad de la deuda, por lo que un seguimiento temprano suele ofrecer mejores resultados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MoraFlujoDeCajaEmpresaContent />
    </>
  );
}
