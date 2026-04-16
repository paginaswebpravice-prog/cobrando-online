import { Metadata } from "next";
import TiposDeRecuperacionDeCarteraContent from "./TiposDeRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title: "Tipos de recuperación de cartera en Colombia: etapas y procesos",
  description:
    "Conoce los tipos de recuperación de cartera en Colombia: preventiva, administrativa y jurídica. Aprende cómo funciona cada etapa del cobro.",

  keywords: [
    "tipos de recuperacion de cartera",
    "cobro de cartera Colombia",
    "cartera vencida etapas",
    "cobranza preventiva administrativa juridica",
    "gestion de cartera empresas Colombia",
    "recuperacion de cartera empresas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
  },

  openGraph: {
    title: "Tipos de recuperación de cartera en Colombia",
    description:
      "Descubre las etapas de la recuperación de cartera: preventiva, administrativa y jurídica.",
    url: "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Tipos de recuperación de cartera",
              description:
                "Conoce las etapas de la recuperación de cartera: preventiva, administrativa y jurídica.",
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
                  "https://cobrandoonline.com/blog/tipos-de-recuperacion-de-cartera",
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
                  name: "¿Cuáles son los tipos de recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Preventiva, administrativa o prejurídica y jurídica.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la etapa más efectiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La preventiva, porque evita que la deuda entre en mora.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <TiposDeRecuperacionDeCarteraContent />
    </>
  );
}
