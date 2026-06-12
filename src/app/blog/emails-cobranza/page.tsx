import { Metadata } from "next";
import EmailsCobranza from "./EmailsCobranza";

export const metadata: Metadata = {
  title: "Emails de cobranza efectivos: plantillas para recuperar cartera",
  description:
    "Plantillas de emails de cobranza para recordar pagos, negociar acuerdos y mejorar la recuperación de cartera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/emails-cobranza",
  },

  openGraph: {
    title: "Emails de cobranza efectivos para recuperar cartera",
    description:
      "Ejemplos y plantillas de correos electrónicos para gestión de cobranza y recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/emails-cobranza",
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
              headline: "Emails de cobranza efectivos para recuperar cartera",
              description:
                "Plantillas y ejemplos de correos para mejorar la recuperación de cartera empresarial.",
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
                "@id": "https://cobrandoonline.com/blog/emails-cobranza",
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
                  name: "¿Cómo redactar un email de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir información clara sobre la obligación, fecha de vencimiento, valor pendiente y un tono profesional orientado a la solución.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los emails ayudan a recuperar cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Permiten documentar las gestiones de cobro, enviar soportes y mantener comunicación constante con los clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué asunto debe tener un correo de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe ser claro y específico, indicando que existe una factura pendiente o un recordatorio de pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EmailsCobranza />
    </>
  );
}
