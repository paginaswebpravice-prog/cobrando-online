import { Metadata } from "next";
import SeguimientoRecuperacionCartera from "./SeguimientoRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Importancia del seguimiento en la recuperación de cartera en Colombia",
  description:
    "Descubre por qué el seguimiento es clave en la recuperación de cartera en Colombia y cómo mejora la tasa de recaudo y el flujo de caja.",

  keywords: [
    "seguimiento cartera Colombia",
    "recuperacion de cartera seguimiento",
    "cobranza efectiva Colombia",
    "gestión de cartera vencida",
    "mejorar recaudo empresas",
    "flujo de caja empresas Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
  },

  openGraph: {
    title:
      "Importancia del seguimiento en la recuperación de cartera en Colombia",
    description:
      "El seguimiento constante es clave para mejorar la recuperación de cartera y reducir la mora en empresas.",
    url: "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
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
              headline:
                "Importancia del seguimiento en la recuperación de cartera en Colombia",
              description:
                "El seguimiento en la recuperación de cartera mejora la tasa de recaudo y reduce la mora en empresas.",
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
                  "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
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
                  name: "¿Por qué es importante el seguimiento en la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque aumenta la probabilidad de pago, reduce la mora y mejora la liquidez de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se debe hacer seguimiento a un cliente moroso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Antes del vencimiento con recordatorios y después del vencimiento con gestión constante hasta el pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoRecuperacionCartera />
    </>
  );
}
