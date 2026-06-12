import { Metadata } from "next";
import RecuperacionSinJuicio from "./RecuperacionSinJuicio";

export const metadata: Metadata = {
  title:
    "Recuperación sin procesos judiciales: alternativas para recuperar cartera",
  description:
    "Descubre estrategias efectivas para recuperar cartera sin acudir a procesos judiciales mediante negociación y acuerdos de pago.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/recuperacion-sin-juicio",
  },

  openGraph: {
    title: "Cómo recuperar cartera sin procesos judiciales",
    description:
      "Conoce las mejores alternativas extrajudiciales para recuperar deudas de manera rápida y eficiente.",
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
                "Recuperación sin procesos judiciales para empresas en Colombia",
              description:
                "Guía sobre alternativas extrajudiciales para recuperar cartera y reducir la morosidad.",
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
              dateModified: "2026-01-01",
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
                    text: "Es el conjunto de acciones de cobro realizadas sin acudir a procesos judiciales o demandas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué ventajas tiene recuperar cartera sin demandar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite reducir costos, ahorrar tiempo y mantener mejores relaciones comerciales con los clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se debe considerar un proceso judicial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando no existe voluntad de pago, se incumplen acuerdos o el deudor evita toda comunicación.",
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
