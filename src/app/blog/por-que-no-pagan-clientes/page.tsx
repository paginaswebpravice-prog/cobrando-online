import { Metadata } from "next";
import PorQueNoPaganClientes from "./PorQueNoPaganClientes";

export const metadata: Metadata = {
  title:
    "¿Por qué los clientes no pagan sus deudas? Causas y soluciones | Cobrando Online",

  description:
    "Descubre las principales razones por las que los clientes incumplen pagos y aprende estrategias para prevenir la mora y reducir la cartera vencida.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",
  },

  openGraph: {
    title: "¿Por qué los clientes no pagan sus deudas? Principales causas",
    description:
      "Analizamos los factores financieros y comerciales que generan mora en empresas y clientes.",
    url: "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",
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
                "¿Por qué los clientes no pagan sus deudas? Principales causas y soluciones",
              description:
                "Guía para comprender las causas de la mora y cómo prevenir el incumplimiento en pagos.",
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
                  "https://cobrandoonline.com/blog/por-que-no-pagan-clientes",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-06-11",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuál es la principal razón por la que los clientes no pagan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La causa más frecuente es la falta de liquidez o problemas financieros temporales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se puede prevenir la mora?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante evaluación crediticia, seguimiento constante y recordatorios oportunos de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La falta de seguimiento influye en los retrasos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Muchas deudas aumentan por ausencia de controles y procesos de cobranza preventiva.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PorQueNoPaganClientes />
    </>
  );
}
