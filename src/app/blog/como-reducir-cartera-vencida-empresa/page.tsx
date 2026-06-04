import { Metadata } from "next";
import ReducirCarteraVencidaEmpresa from "./ReducirCarteraVencidaEmpresa";

export const metadata: Metadata = {
  title: "¿Cómo reducir la cartera vencida en una empresa? | Guía financiera",
  description:
    "Aprende estrategias efectivas para reducir la cartera vencida, mejorar el flujo de caja y proteger la liquidez de tu empresa en Colombia.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",
  },

  openGraph: {
    title: "¿Cómo reducir la cartera vencida en una empresa?",
    description:
      "Conoce estrategias de seguimiento y cobranza para disminuir la mora y mejorar la estabilidad financiera de tu empresa.",
    url: "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",
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
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "¿Cómo reducir la cartera vencida en una empresa?",
              description:
                "Guía para disminuir la mora empresarial y mejorar la recuperación de cartera en Colombia.",
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
                  "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué causa la cartera vencida en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La falta de seguimiento, políticas débiles de crédito y retrasos en cobranza son causas frecuentes de cartera vencida.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la mora empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando seguimiento constante, automatización y estrategias preventivas de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante controlar la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque la mora afecta directamente la liquidez y estabilidad financiera de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReducirCarteraVencidaEmpresa />
    </>
  );
}
