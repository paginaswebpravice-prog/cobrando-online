import { Metadata } from "next";
import NotificacionMandamientoPago from "./NotificacionMandamientoPago";

export const metadata: Metadata = {
  title: "Notificación y mandamiento de pago en Colombia: guía completa",
  description:
    "Aprende qué es el mandamiento de pago, cómo funciona la notificación judicial y cuáles son las primeras etapas de un proceso de cobro jurídico en Colombia.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",
  },

  openGraph: {
    title: "Notificación y mandamiento de pago en procesos de cobro jurídico",
    description:
      "Conoce cómo funcionan las primeras etapas de un proceso ejecutivo de cobro en Colombia.",
    url: "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",
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
              headline: "Notificación y mandamiento de pago en Colombia",
              description:
                "Guía sobre las primeras etapas de un proceso judicial de cobro de cartera.",
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
                  "https://cobrandoonline.com/blog/notificacion-mandamiento-pago",
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
                  name: "¿Qué es un mandamiento de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una orden emitida por un juez que exige al deudor pagar una obligación respaldada por un título ejecutivo válido.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es necesaria la notificación?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque garantiza que el deudor conozca la existencia del proceso y pueda ejercer su derecho de defensa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si el deudor ignora la notificación?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El proceso puede continuar y el acreedor podría solicitar medidas cautelares como embargos para intentar recuperar la deuda.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <NotificacionMandamientoPago />
    </>
  );
}
