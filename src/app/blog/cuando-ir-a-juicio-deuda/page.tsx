import { Metadata } from "next";
import CuandoIrAJuicioDeuda from "./CuandoIrAJuicioDeuda";

export const metadata: Metadata = {
  title: "Cuándo vale la pena ir a juicio por una deuda en Colombia",
  description:
    "Aprende cuándo es conveniente iniciar un proceso judicial para recuperar una deuda y qué factores deben analizarse antes de demandar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cuando-ir-a-juicio-deuda",
  },

  openGraph: {
    title: "¿Cuándo vale la pena demandar una deuda?",
    description:
      "Guía para analizar si un proceso judicial de cobro es realmente conveniente.",
    url: "https://cobrandoonline.com/blog/cuando-ir-a-juicio-deuda",
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
                "Cuándo vale la pena ir a juicio para recuperar una deuda",
              description:
                "Análisis de los factores que determinan cuándo iniciar un proceso judicial de cobro.",
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
                  "https://cobrandoonline.com/blog/cuando-ir-a-juicio-deuda",
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
                  name: "¿Siempre es recomendable demandar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. La decisión debe tomarse considerando el valor de la deuda, los costos del proceso y la capacidad de pago del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué factores deben analizarse antes de iniciar un proceso judicial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se deben evaluar documentos de respaldo, patrimonio del deudor, costos estimados y probabilidad de recuperación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puede negociarse una deuda antes de demandar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. De hecho, muchas empresas intentan acuerdos de pago y cobro prejurídico antes de acudir a los tribunales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CuandoIrAJuicioDeuda />
    </>
  );
}
