import { Metadata } from "next";
import ReducirMorosidadEmpresa from "./ReducirMorosidadEmpresa";

export const metadata: Metadata = {
  title:
    "Cómo reducir la morosidad en empresas | Estrategias para disminuir cartera vencida",
  description:
    "Conoce las mejores estrategias preventivas y correctivas para reducir la morosidad empresarial y mejorar el flujo de caja.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/reducir-morosidad-empresa",
  },

  openGraph: {
    title:
      "Cómo reducir la morosidad en empresas y mejorar la recuperación de cartera",
    description:
      "Aprende cómo disminuir la morosidad empresarial mediante estrategias de prevención, seguimiento y cobranza efectiva.",
    url: "https://cobrandoonline.com/blog/reducir-morosidad-empresa",
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
              headline: "Cómo reducir la morosidad en empresas",
              description:
                "Guía para disminuir la morosidad empresarial mediante estrategias de crédito y cobranza.",
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
                  "https://cobrandoonline.com/blog/reducir-morosidad-empresa",
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
                  name: "¿Qué es la morosidad empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el incumplimiento de pago por parte de un cliente después de vencido el plazo acordado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la morosidad en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante evaluación crediticia, seguimiento oportuno, automatización de cobranza y acuerdos de pago efectivos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante controlar la morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque afecta directamente la liquidez, el flujo de caja y la estabilidad financiera de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReducirMorosidadEmpresa />
    </>
  );
}
