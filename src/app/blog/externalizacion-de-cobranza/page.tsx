import { Metadata } from "next";
import ExternalizacionCobranzaContent from "./ExternalizacionCobranzaContent";

export const metadata: Metadata = {
  title:
    "Externalizar cobranza en Colombia: cuándo hacerlo y cómo recuperar más cartera",
  description:
    "Descubre cuándo externalizar la cobranza en Colombia, sus beneficios y cómo aumentar la recuperación de cartera de forma rápida y eficiente.",

  keywords: [
    "externalización de cobranza",
    "outsourcing cobranza Colombia",
    "recuperación de cartera empresas",
    "cobro prejuridico y juridico",
    "empresa de cobranza Colombia",
    "gestión de cartera tercerizada",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/externalizacion-de-cobranza",
  },

  openGraph: {
    title:
      "Externalizar cobranza en Colombia: aumenta tu recuperación de cartera",
    description:
      "Delega la cobranza a expertos y recupera más dinero en menos tiempo con estrategias profesionales.",
    url: "https://cobrandoonline.com/blog/externalizacion-de-cobranza",
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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Externalizar cobranza en Colombia: cuándo hacerlo y cómo recuperar más cartera",
              description:
                "Descubre cuándo externalizar la cobranza, sus beneficios y cómo mejorar la recuperación de cartera empresarial.",
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
                  "https://cobrandoonline.com/blog/externalizacion-de-cobranza",
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
                  name: "¿Cuándo conviene externalizar la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando la cartera vencida aumenta, no hay personal interno suficiente o los clientes no responden a la gestión de cobro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es mejor externalizar o cobrar internamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende del volumen de cartera. Cuando la mora es alta, externalizar suele ser más eficiente y rentable.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ExternalizacionCobranzaContent />
    </>
  );
}
