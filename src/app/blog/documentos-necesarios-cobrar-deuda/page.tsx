import { Metadata } from "next";
import DocumentosNecesariosCobrarDeudaContent from "./DocumentosNecesariosCobrarDeudaContent";

export const metadata: Metadata = {
  title: "Documentos necesarios para cobrar una deuda en Colombia",
  description:
    "Descubre cuáles son los documentos necesarios para cobrar una deuda en Colombia y cómo respaldar un proceso de recuperación de cartera de forma efectiva.",

  keywords: [
    "documentos para cobrar deuda",
    "cobro de cartera Colombia",
    "titulo ejecutivo Colombia",
    "factura electronica cobrar deuda",
    "pagaré Colombia",
    "recuperacion de cartera documentos",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",
  },

  openGraph: {
    title: "Documentos necesarios para cobrar una deuda",
    description:
      "Conoce qué documentos necesitas para recuperar una deuda y respaldar un proceso jurídico en Colombia.",
    url: "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",
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
              headline: "Documentos necesarios para cobrar una deuda",
              description:
                "Conoce cuáles son los documentos necesarios para cobrar una deuda de manera efectiva y respaldar un proceso de recuperación de cartera.",
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
                  "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",
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
                  name: "¿Es obligatorio tener un pagaré para cobrar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No siempre, pero facilita significativamente el proceso jurídico al constituir un título ejecutivo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Una factura electrónica sirve para demandar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos casos sí, siempre que cumpla los requisitos legales establecidos en Colombia.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DocumentosNecesariosCobrarDeudaContent />
    </>
  );
}
