import { Metadata } from "next";
import FlujoCajaCobranza from "./FlujoCajaCobranza";

export const metadata: Metadata = {
  title:
    "Cobranza y flujo de caja | Cómo la recuperación de cartera mejora la liquidez",
  description:
    "Descubre cómo una gestión eficiente de cobranza impacta positivamente el flujo de caja y la estabilidad financiera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/flujo-de-caja-cobranza",
  },

  openGraph: {
    title:
      "Cobranza y flujo de caja: la relación clave para la liquidez empresarial",
    description:
      "Aprende cómo la recuperación de cartera influye directamente en el flujo de caja y el crecimiento financiero de una empresa.",
    url: "https://cobrandoonline.com/blog/flujo-de-caja-cobranza",
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
              headline: "Cobranza y flujo de caja",
              description:
                "Cómo la cobranza impacta directamente el flujo de caja empresarial y la liquidez financiera.",
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
                "@id": "https://cobrandoonline.com/blog/flujo-de-caja-cobranza",
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
                  name: "¿Cómo afecta la cobranza al flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La recuperación oportuna de cartera permite que la empresa disponga de liquidez para cubrir gastos, inversiones y obligaciones financieras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué ocurre cuando una empresa tiene mucha cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La liquidez disminuye, aumentan los riesgos financieros y puede ser necesario recurrir a endeudamiento para sostener las operaciones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores ayudan a medir la gestión de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los más utilizados se encuentran el DSO, la rotación de cartera, el índice de morosidad y el porcentaje de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <FlujoCajaCobranza />
    </>
  );
}
