import { Metadata } from "next";
import TiposDeRecuperacionDeCarteraContent from "./TiposDeRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "Tipos de recuperación de cartera en Colombia: Guía completa para cobrar más rápido en 2026 | Cobrando Online",

  description:
    "Descubre los tipos de recuperación de cartera en Colombia, cuándo aplicar la cobranza preventiva, administrativa (prejurídica) y jurídica, cómo reducir la mora y aumentar el recaudo empresarial mediante procesos y automatización.",

  keywords: [
    "tipos de recuperación de cartera",
    "recuperación de cartera Colombia",
    "cobranza preventiva",
    "cobranza administrativa",
    "cobranza prejurídica",
    "cobranza jurídica",
    "cómo recuperar cartera vencida",
    "etapas recuperación cartera",
    "proceso recuperación cartera",
    "recuperación de cartera empresarial",
    "gestión de cartera empresas",
    "cartera vencida Colombia",
    "disminuir cartera vencida",
    "software de cobranza",
    "automatización de cobranza",
    "seguimiento de cartera",
    "cobranza B2B",
    "recuperación de cartera B2B",
    "recaudo empresarial",
    "gestión de cobros",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
  },

  openGraph: {
    title:
      "Tipos de recuperación de cartera: cuándo aplicar cada etapa para recuperar más dinero",

    description:
      "Aprende las diferencias entre cobranza preventiva, administrativa y jurídica. Descubre cuál utilizar para reducir la mora y mejorar el flujo de caja de tu empresa.",

    url: "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://cobrandoonline.com/images/blog/tipos-recuperacion-cartera.webp",
        width: 1200,
        height: 630,
        alt: "Tipos de recuperación de cartera en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tipos de recuperación de cartera: guía para empresas colombianas",

    description:
      "Conoce cuándo utilizar la cobranza preventiva, administrativa y jurídica para recuperar cartera más rápido.",

    images: [
      "https://cobrandoonline.com/images/blog/tipos-recuperacion-cartera.webp",
    ],
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
                "Tipos de recuperación de cartera en Colombia: guía completa para empresas",

              alternativeHeadline:
                "Cómo elegir la mejor estrategia para recuperar cartera vencida",

              description:
                "Aprende cómo funcionan la recuperación preventiva, administrativa y jurídica, cuándo aplicar cada una y cómo aumentar el recaudo empresarial.",

              image:
                "https://cobrandoonline.com/images/blog/tipos-recuperacion-cartera.webp",

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
                "@id":
                  "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-08-03",

              inLanguage: "es-CO",

              wordCount: 5600,

              articleSection: [
                "Recuperación de cartera",
                "Cobranza empresarial",
                "Gestión financiera",
                "Automatización",
              ],

              keywords: [
                "tipos de recuperación de cartera",
                "cobranza preventiva",
                "cobranza administrativa",
                "cobranza jurídica",
                "cartera vencida",
              ],

              about: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cartera empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza preventiva",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza administrativa",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza jurídica",
                },
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Acuerdos de pago",
                },
                {
                  "@type": "Thing",
                  name: "Cartera vencida",
                },
                {
                  "@type": "Thing",
                  name: "Flujo de caja",
                },
                {
                  "@type": "Thing",
                  name: "Software de cobranza",
                },
                {
                  "@type": "Thing",
                  name: "Automatización de cartera",
                },
              ],
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", ".intro"],
              },
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
                  name: "Tipos de recuperación de cartera",
                  item: "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuáles son los tipos de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las empresas normalmente aplican tres etapas: recuperación preventiva, recuperación administrativa o prejurídica y recuperación jurídica. Cada una responde al nivel de mora del cliente y busca aumentar la probabilidad de recaudo con el menor costo posible.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué es la recuperación preventiva?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de acciones realizadas antes del vencimiento de la factura para recordar al cliente sus obligaciones, reducir olvidos y evitar que la cartera ingrese en mora.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué diferencia existe entre cobranza administrativa y cobranza jurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cobranza administrativa busca acuerdos y negociaciones sin acudir a un juez. La cobranza jurídica inicia cuando las gestiones anteriores no generan resultados y se requiere acudir a mecanismos legales para recuperar la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la etapa más efectiva para recuperar cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente la etapa preventiva ofrece los mejores resultados porque evita que la deuda aumente, reduce costos de cobranza y mejora la cultura de pago de los clientes.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo debe pasar una deuda a cobranza prejurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el cliente incumple los plazos inicialmente pactados y las acciones preventivas no logran normalizar el pago. En esta fase se intensifica la negociación antes de considerar acciones judiciales.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿En qué momento se recomienda iniciar una recuperación jurídica?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando existe incumplimiento reiterado, no hay voluntad de pago o se agotaron las alternativas administrativas disponibles según la política de recuperación de la empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Se pueden combinar las diferentes etapas de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. La mejor práctica consiste en implementar un proceso escalonado que inicie con acciones preventivas, continúe con gestión administrativa y únicamente avance hacia la recuperación jurídica cuando resulte estrictamente necesario.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten medir la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los indicadores más utilizados se encuentran el porcentaje de recuperación, DSO, rotación de cartera, cartera vencida, cumplimiento de acuerdos de pago y tiempo promedio de recaudo.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La automatización mejora la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Automatizar recordatorios, seguimientos, comunicaciones y reportes permite disminuir tareas manuales, mantener contacto constante con el cliente y aumentar la eficiencia operativa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo reducir la mora empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La combinación de políticas claras de crédito, seguimiento permanente, automatización de cobranza, segmentación de clientes e indicadores de gestión ayuda a disminuir significativamente la mora y mejorar el flujo de caja.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <TiposDeRecuperacionDeCarteraContent />
    </>
  );
}
