import { Metadata } from "next";
import PrescripcionDeudasContent from "./PrescripcionDeudasContent";

export const metadata: Metadata = {
  title:
    "Prescripción de deudas en Colombia: tiempos y cómo evitar perder el dinero",
  description:
    "Conoce los tiempos de prescripción de deudas en Colombia, cómo se calculan y cómo evitar perder el derecho a cobrar.",

  keywords: [
    "prescripción de deudas Colombia",
    "cuánto dura una deuda Colombia",
    "tiempo prescripción pagaré Colombia",
    "cobro de cartera Colombia",
    "deudas prescriben Colombia",
    "recuperación de cartera legal",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",
  },

  openGraph: {
    title: "Prescripción de deudas en Colombia",
    description:
      "Descubre los tiempos legales de prescripción de deudas y cómo evitar perder el derecho a cobrar.",
    url: "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",
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
              headline: "Prescripción de deudas en Colombia",
              description:
                "Conoce los tiempos de prescripción de deudas y cómo evitar perder el derecho a cobrar.",
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
                  "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",
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
                  name: "¿Cuándo prescribe una deuda en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende del tipo de obligación, pero puede ser de 3 a 5 años en la mayoría de los casos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo evitar que una deuda prescriba?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Iniciando un proceso judicial o logrando que el deudor reconozca la deuda antes de que se cumpla el plazo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PrescripcionDeudasContent />
    </>
  );
}
