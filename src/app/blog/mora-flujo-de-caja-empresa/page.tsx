import { Metadata } from "next";
import MoraFlujoDeCajaEmpresaContent from "./MoraFlujoDeCajaEmpresaContent";

export const metadata: Metadata = {
  title: "¿Cómo afecta la mora al flujo de caja de una empresa en Colombia?",
  description:
    "Descubre cómo la mora y la cartera vencida afectan el flujo de caja, la liquidez y la estabilidad financiera de las empresas en Colombia.",

  keywords: [
    "mora flujo de caja",
    "cartera vencida Colombia",
    "liquidez empresas Colombia",
    "impacto mora empresas",
    "problemas financieros empresas",
    "cobro de cartera Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
  },

  openGraph: {
    title: "¿Cómo afecta la mora al flujo de caja de una empresa?",
    description:
      "Conoce cómo la cartera vencida impacta la liquidez y estabilidad financiera de tu empresa.",
    url: "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
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
              headline: "¿Cómo afecta la mora al flujo de caja de una empresa?",
              description:
                "Descubre cómo la mora impacta la liquidez, el flujo de caja y la estabilidad financiera de las empresas.",
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
                  "https://cobrandoonline.com/blog/mora-flujo-de-caja-empresa",
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
                  name: "¿La cartera vencida afecta el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, porque representa ingresos que aún no han sido recibidos por la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo la mora se convierte en un riesgo financiero?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el nivel de cartera vencida supera la capacidad de la empresa para cubrir sus obligaciones.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MoraFlujoDeCajaEmpresaContent />
    </>
  );
}
