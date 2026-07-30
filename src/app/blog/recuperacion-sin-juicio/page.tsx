import { Metadata } from "next";
import RecuperacionSinJuicio from "./RecuperacionSinJuicio";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera sin juicio en Colombia: cómo cobrar deudas sin demandar y recuperar más dinero",

  description:
    "Aprende cómo recuperar cartera sin procesos judiciales mediante negociación, acuerdos de pago, cobranza prejurídica y seguimiento estratégico para empresas en Colombia.",

  keywords: [
    "recuperación de cartera sin juicio",
    "recuperar cartera sin demandar",
    "recuperación extrajudicial de cartera",
    "cobranza extrajudicial Colombia",
    "cobranza prejurídica",
    "acuerdos de pago empresas",
    "negociación de cartera",
    "cómo recuperar deudas sin demanda",
    "gestión de cartera empresas",
    "recuperación de cartera Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/recuperacion-sin-juicio",
  },

  openGraph: {
    title:
      "Recuperación de cartera sin juicio: estrategias para cobrar deudas sin demandar",

    description:
      "Descubre cómo las empresas pueden recuperar cartera mediante negociación, acuerdos de pago y cobranza extrajudicial antes de acudir a un proceso judicial.",

    url: "https://cobrandoonline.com/blog/recuperacion-sin-juicio",

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
                "Recuperación de cartera sin juicio en Colombia: cómo recuperar deudas sin demandar",

              description:
                "Guía completa sobre recuperación extrajudicial de cartera, negociación de deudas y estrategias para recuperar pagos sin acudir inicialmente a procesos judiciales.",

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
                  "https://cobrandoonline.com/blog/recuperacion-sin-juicio",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la recuperación extrajudicial de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de estrategias de cobranza que buscan recuperar una deuda mediante negociación, seguimiento y acuerdos de pago sin acudir inicialmente a un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuáles son las ventajas de recuperar cartera sin demandar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite reducir costos, recuperar dinero en menor tiempo, preservar relaciones comerciales y disminuir el desgaste administrativo para las empresas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una empresa debería considerar otras alternativas de recuperación?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando las negociaciones, acuerdos de pago y gestiones de cobranza no generan resultados o el deudor deja de colaborar con el proceso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Los acuerdos de pago ayudan a recuperar cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Cuando se estructuran adecuadamente permiten incrementar la probabilidad de recaudo y facilitar el cumplimiento de las obligaciones pendientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas pueden beneficiarse de la recuperación extrajudicial de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Empresas de todos los sectores que venden productos o servicios a crédito y buscan mejorar su flujo de caja mediante procesos de cobranza organizados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionSinJuicio />
    </>
  );
}
