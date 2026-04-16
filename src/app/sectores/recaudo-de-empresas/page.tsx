import { Metadata } from "next";
import RecaudoEmpresasContent from "./RecaudoEmpresasContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para empresas en Colombia | Cobranza empresarial profesional",
  description:
    "Recuperación de cartera para empresas en Colombia. Mejora el flujo de caja, reduce la mora y aumenta el recaudo con estrategias profesionales de cobranza.",

  keywords: [
    "recuperacion de cartera empresas Colombia",
    "cobranza empresarial Colombia",
    "cartera vencida empresas",
    "recaudo de cartera Colombia",
    "gestion de cartera empresas",
    "flujo de caja empresas Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/servicios/recuperacion-cartera-empresas",
  },

  openGraph: {
    title: "Recuperación de cartera para empresas en Colombia",
    description:
      "Estrategias profesionales para recuperación de cartera empresarial en Colombia.",
    url: "https://cobrandoonline.com/servicios/recuperacion-cartera-empresas",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Recuperación de cartera para empresas en Colombia",
              description:
                "Estrategias de cobranza y recuperación de cartera para empresas en Colombia para mejorar liquidez y flujo de caja.",
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
                  "https://cobrandoonline.com/servicios/recuperacion-cartera-empresas",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué las empresas tienen problemas de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por falta de seguimiento, procesos de cobranza débiles o retrasos constantes en pagos de clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar el recaudo en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando procesos estructurados de cobranza, seguimiento y estrategias prejurídicas y jurídicas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecaudoEmpresasContent />
    </>
  );
}
