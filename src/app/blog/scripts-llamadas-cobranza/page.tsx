import { Metadata } from "next";
import ScriptsLlamadasCobranza from "./ScriptsLlamadasCobranza";

export const metadata: Metadata = {
  title: "Scripts de llamadas de cobranza: ejemplos y guiones efectivos",
  description:
    "Guiones de llamadas de cobranza para recuperación de cartera, negociación de pagos y seguimiento de clientes morosos.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",
  },

  openGraph: {
    title: "Scripts de llamadas de cobranza para recuperar cartera",
    description:
      "Ejemplos de guiones telefónicos para mejorar la recuperación de cartera y la negociación con clientes.",
    url: "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",
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
                "Scripts de llamadas de cobranza para recuperar cartera",
              description:
                "Plantillas y ejemplos de llamadas telefónicas para recuperación de cartera empresarial.",
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
                  "https://cobrandoonline.com/blog/scripts-llamadas-cobranza",
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
                  name: "¿Qué es un script de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una guía estructurada que ayuda a los asesores a conducir llamadas de recuperación de cartera de manera profesional y efectiva.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué utilizar guiones de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permiten estandarizar procesos, mejorar la comunicación y aumentar las probabilidades de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir una llamada de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir identificación del cliente, información de la deuda, escucha activa, propuesta de solución y confirmación de compromisos de pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ScriptsLlamadasCobranza />
    </>
  );
}
