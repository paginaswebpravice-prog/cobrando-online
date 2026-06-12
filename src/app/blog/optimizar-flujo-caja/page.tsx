import { Metadata } from "next";
import OptimizarFlujoCaja from "./OptimizarFlujoCaja";

export const metadata: Metadata = {
  title: "Cómo optimizar el flujo de caja y mejorar la liquidez empresarial",
  description:
    "Aprende estrategias para optimizar el flujo de caja, mejorar la liquidez y fortalecer la estabilidad financiera de tu empresa.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/optimizar-flujo-caja",
  },

  openGraph: {
    title: "Cómo optimizar el flujo de caja de una empresa",
    description:
      "Guía práctica para mejorar la liquidez empresarial mediante una gestión eficiente de cartera y recursos financieros.",
    url: "https://cobrandoonline.com/blog/optimizar-flujo-caja",
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
                "Cómo optimizar el flujo de caja y mejorar la liquidez empresarial",
              description:
                "Estrategias para fortalecer la liquidez y mantener la estabilidad financiera de una empresa.",
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
                "@id": "https://cobrandoonline.com/blog/optimizar-flujo-caja",
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
                  name: "¿Qué es el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el movimiento de dinero que entra y sale de una empresa durante un periodo determinado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante una adecuada gestión de cartera, control de gastos, proyecciones financieras y diversificación de ingresos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué afecta la cartera vencida al flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque retrasa la entrada de dinero esperado y reduce la liquidez disponible para operar normalmente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <OptimizarFlujoCaja />
    </>
  );
}
