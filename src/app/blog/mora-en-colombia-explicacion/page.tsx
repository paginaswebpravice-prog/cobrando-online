import { Metadata } from "next";
import MoraEnColombiaExplicacion from "./MoraEnColombiaExplicacion";

export const metadata: Metadata = {
  title: "Qué es la mora en Colombia y cómo funciona | Guía completa",

  description:
    "Aprende qué es la mora en Colombia, cómo se generan los intereses moratorios, cuáles son sus consecuencias y cómo afecta a empresas y deudores.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
  },

  openGraph: {
    title: "Qué es la mora en Colombia y cómo funciona",
    description:
      "Conoce qué significa estar en mora, cómo se calcula y cuáles son sus consecuencias legales y financieras.",
    url: "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
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
              headline: "Qué es la mora en Colombia y cómo funciona",
              description:
                "Guía completa sobre la mora, sus efectos financieros y legales en Colombia.",
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
                  "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
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
                  name: "¿Qué es la mora?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mora ocurre cuando una persona o empresa incumple una obligación de pago después de la fecha acordada.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La mora genera intereses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Dependiendo del contrato y la normativa aplicable, pueden generarse intereses moratorios desde el vencimiento de la obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué consecuencias tiene estar en mora?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puede generar intereses, procesos de cobranza, afectaciones crediticias y acciones judiciales de cobro.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MoraEnColombiaExplicacion />
    </>
  );
}
