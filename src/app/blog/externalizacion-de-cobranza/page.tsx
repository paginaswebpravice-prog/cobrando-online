import { Metadata } from "next";
import ExternalizacionCobranzaContent from "./ExternalizacionCobranzaContent";

export const metadata: Metadata = {
  title:
    "Externalización de cobranza en Colombia: cuándo conviene y beneficios",
  description:
    "Descubre cuándo externalizar la cobranza en Colombia, sus ventajas y cómo mejorar la recuperación de cartera empresarial.",

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
    title: "Externalización de cobranza: cuándo conviene",
    description:
      "Delegar la cobranza puede mejorar la recuperación de cartera y reducir costos operativos en tu empresa.",
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
              headline: "Externalización de cobranza: cuándo conviene",
              description:
                "Delegar la cobranza a expertos puede mejorar la recuperación de cartera y reducir costos administrativos.",
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
