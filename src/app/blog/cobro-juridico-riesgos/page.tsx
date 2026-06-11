import { Metadata } from "next";
import CobroJuridicoRiesgos from "./CobroJuridicoRiesgos";

export const metadata: Metadata = {
  title:
    "Riesgos del cobro jurídico en Colombia: lo que debes evaluar antes de demandar",
  description:
    "Conoce los principales riesgos del cobro jurídico en Colombia, incluyendo costos, tiempos judiciales y posibilidades reales de recuperación.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobro-juridico-riesgos",
  },

  openGraph: {
    title: "Riesgos del cobro jurídico: análisis para empresas en Colombia",
    description:
      "Descubre los riesgos legales, financieros y operativos de iniciar un proceso de cobro jurídico.",
    url: "https://cobrandoonline.com/blog/cobro-juridico-riesgos",
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
              headline: "Riesgos del cobro jurídico en Colombia",
              description:
                "Guía sobre los riesgos que deben evaluarse antes de iniciar un proceso judicial de recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/cobro-juridico-riesgos",
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
                  name: "¿Existe riesgo de no recuperar la deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Puede ocurrir cuando el deudor no posee bienes o recursos que permitan ejecutar el cobro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El cobro jurídico genera costos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Puede implicar honorarios, gastos procesales y costos asociados a la gestión judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se pueden reducir los riesgos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante una adecuada documentación, análisis de solvencia y una estrategia jurídica bien estructurada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroJuridicoRiesgos />
    </>
  );
}
