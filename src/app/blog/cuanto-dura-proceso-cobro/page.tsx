import { Metadata } from "next";
import CuantoDuraProcesoCobro from "./CuantoDuraProcesoCobro";

export const metadata: Metadata = {
  title:
    "¿Cuánto dura un proceso de cobro jurídico en Colombia? | Guía completa",
  description:
    "Conoce los tiempos promedio de un proceso de cobro jurídico en Colombia, las etapas más importantes y los factores que afectan su duración.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cuanto-dura-proceso-cobro",
  },

  openGraph: {
    title: "¿Cuánto dura un proceso de cobro jurídico en Colombia?",
    description:
      "Aprende cuánto puede tardar un proceso ejecutivo y qué factores influyen en la recuperación judicial de una deuda.",
    url: "https://cobrandoonline.com/blog/cuanto-dura-proceso-cobro",
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
                "¿Cuánto dura un proceso de cobro jurídico en Colombia?",
              description:
                "Guía sobre los tiempos y etapas de los procesos de cobro jurídico en Colombia.",
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
                  "https://cobrandoonline.com/blog/cuanto-dura-proceso-cobro",
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
                  name: "¿Cuánto dura un proceso ejecutivo en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del caso, puede tardar entre seis meses y dos años o más.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué factores afectan la duración del proceso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La complejidad del caso, la carga judicial, las notificaciones y la existencia de bienes embargables.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede recuperar una deuda antes de finalizar el proceso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. En muchos casos las partes pueden llegar a acuerdos de pago durante el trámite judicial.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CuantoDuraProcesoCobro />
    </>
  );
}
