import { Metadata } from "next";
import RecaudoColegiosContent from "./RecaudoColegiosContent";

export const metadata: Metadata = {
  title:
    "¿Tu colegio tiene pensiones atrasadas? Recupera cartera y mejora el flujo de caja",
  description:
    "Recupera pensiones escolares vencidas con una estrategia profesional de recaudo para colegios en Colombia. Reduce la mora, mejora el flujo de caja, aumenta el recaudo y fortalece la estabilidad financiera de tu institución.",

  keywords: [
    "recaudo colegios",
    "recaudo de cartera colegios",
    "recuperación cartera colegios",
    "cobranza colegios privados",
    "pensiones escolares vencidas",
    "cobro de pensiones",
    "cartera educativa",
    "gestión de cartera educativa",
    "reducción de mora colegios",
    "mejorar recaudo colegio",
    "cartera vencida colegios",
    "colegios con alta mora",
    "recuperar cartera educativa",
    "flujo de caja colegios",
    "cobranza educativa Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/sectores/recaudo-colegios",
  },

  openGraph: {
    title:
      "Recuperación de cartera para colegios | Reduce la mora y mejora el recaudo",

    description:
      "Ayudamos a colegios privados en Colombia a recuperar pensiones atrasadas mediante estrategias profesionales de recaudo, seguimiento y gestión de cartera educativa.",
    url: "https://cobrandoonline.com/sectores/recaudo-colegios",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Cobrando Online",

  category: "Recuperación de cartera",

  creator: "Cobrando Online",

  publisher: "Cobrando Online",

  metadataBase: new URL("https://cobrandoonline.com"),

  formatDetection: {
    telephone: true,
    email: true,
  },

  referrer: "origin-when-cross-origin",

  twitter: {
    card: "summary_large_image",
    title:
      "Recuperación de cartera para colegios en Colombia | Reduce la mora escolar",
    description:
      "Ayudamos a colegios privados a recuperar pensiones vencidas, reducir la cartera morosa y mejorar el flujo de caja mediante estrategias de cobranza profesional.",
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Cómo recuperar cartera en colegios en Colombia",
              description:
                "Estrategias profesionales para recuperación de cartera educativa y mejora del flujo de caja en colegios en Colombia.",
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
                "@id": "https://cobrandoonline.com/sectores/recaudo-colegios",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo cobrar pensiones atrasadas en colegios en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento, acuerdos de pago, gestión prejurídica o procesos legales si es necesario.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede cobrar cartera sin afectar la relación con los padres?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, usando estrategias de comunicación respetuosa y gestión profesional de cobranza.",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "¿Cómo recuperar pensiones atrasadas en un colegio privado en Colombia?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "La recuperación de pensiones atrasadas puede realizarse mediante seguimiento preventivo, recordatorios de pago, acuerdos de pago personalizados, gestión prejurídica y, cuando sea necesario, procesos jurídicos de cobro.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Cómo disminuir la cartera vencida de un colegio?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Es recomendable implementar políticas claras de recaudo, segmentar la cartera por antigüedad, automatizar recordatorios de pago y realizar seguimiento permanente a los padres de familia.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Qué hacer cuando los padres de familia no pagan las pensiones escolares?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Lo primero es realizar una gestión de cobranza amigable y documentada. Si no existe respuesta, pueden negociarse acuerdos de pago y posteriormente iniciar procesos de cobro prejurídico o jurídico.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Es posible recuperar cartera sin afectar la relación con los padres de familia?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí. Una estrategia profesional de cobranza busca mantener una comunicación respetuosa, ofrecer alternativas de pago y preservar la relación entre la institución educativa y las familias.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Cuándo conviene iniciar un proceso jurídico para cobrar pensiones atrasadas?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cuando los intentos de negociación no generan resultados, existe incumplimiento reiterado o el valor adeudado representa un riesgo importante para la estabilidad financiera del colegio.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Cuáles son las principales causas de la mora en colegios privados?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Las causas más frecuentes son dificultades económicas de los padres, ausencia de seguimiento, procesos manuales de cobranza, falta de políticas de crédito y comunicación tardía.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Cómo mejorar el flujo de caja de un colegio mediante la recuperación de cartera?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Al reducir la mora y acelerar el recaudo de las pensiones escolares, el colegio obtiene mayor liquidez para cumplir con nómina, proveedores, infraestructura e inversión académica.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Qué beneficios obtiene un colegio al implementar una estrategia profesional de cobranza?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Permite disminuir la cartera vencida, aumentar el recaudo, reducir la carga administrativa, mejorar el flujo de caja y fortalecer la estabilidad financiera de la institución.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿La recuperación de cartera educativa aplica para jardines infantiles y colegios privados?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí. Las estrategias de recuperación pueden adaptarse tanto a jardines infantiles como a colegios privados, instituciones técnicas y centros educativos.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Por qué contratar un servicio especializado de recuperación de cartera para colegios?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Porque permite aumentar el porcentaje de recaudo, reducir la mora, optimizar el trabajo administrativo y aplicar estrategias profesionales que mejoran la liquidez sin afectar la reputación institucional.",
                      },
                    },
                  ],
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://cobrandoonline.com/sectores/recaudo-colegios",
              url: "https://cobrandoonline.com/sectores/recaudo-colegios",
              name: "Recuperación de cartera para colegios en Colombia",
              description:
                "Servicio especializado para recuperar pensiones atrasadas y disminuir la cartera vencida en colegios privados.",
              inLanguage: "es-CO",
              isPartOf: {
                "@type": "WebSite",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
              logo: "https://cobrandoonline.com/logo.png",
              areaServed: "CO",
              sameAs: [],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Recuperación de cartera para colegios",
              name: "Servicio de cobranza para colegios en Colombia",
              provider: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Colegios privados",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
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
                  name: "Sectores",
                  item: "https://cobrandoonline.com/sectores",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Recaudo para colegios",
                  item: "https://cobrandoonline.com/sectores/recaudo-colegios",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", "h2"],
              },
            },
          ]),
        }}
      />

      <RecaudoColegiosContent />
    </>
  );
}
