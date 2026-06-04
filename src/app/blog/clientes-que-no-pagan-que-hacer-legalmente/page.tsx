import { Metadata } from "next";
import ClientesNoPagan from "./ClientesNoPagan";

export const metadata: Metadata = {
  title:
    "Clientes que no pagan en Colombia: qué hacer legalmente para recuperar tu dinero",
  description:
    "Aprende qué hacer cuando un cliente no paga una deuda en Colombia y conoce las estrategias legales para recuperar cartera vencida.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
  },

  openGraph: {
    title:
      "Clientes que no pagan: cómo recuperar deudas legalmente en Colombia",
    description:
      "Descubre cómo actuar frente a clientes morosos y qué acciones legales puedes aplicar para recuperar tu dinero.",
    url: "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
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
                "Clientes que no pagan: qué hacer legalmente en Colombia",
              description:
                "Guía para recuperar dinero de clientes morosos y aplicar estrategias legales de cobranza en Colombia.",
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
                  "https://cobrandoonline.com/blog/clientes-que-no-pagan-que-hacer-legalmente",
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
                  name: "¿Qué hacer si un cliente no quiere pagar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda iniciar un proceso de cobro prejurídico y documentar todas las comunicaciones antes de acudir a una demanda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos sirven para cobrar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Facturas, contratos, pagarés, correos y comprobantes de entrega ayudan a demostrar la existencia de la deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el cliente incumple reiteradamente los acuerdos o ignora los requerimientos de pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ClientesNoPagan />
    </>
  );
}
