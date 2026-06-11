import { Metadata } from "next";
import CobrarSinPerderCliente from "./CobrarSinPerderCliente";

export const metadata: Metadata = {
  title:
    "Cómo cobrar sin perder clientes | Estrategias de cobranza y fidelización",

  description:
    "Aprende cómo recuperar cartera sin afectar la relación comercial con tus clientes mediante estrategias efectivas de negociación y cobranza.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobrar-sin-perder-cliente",
  },

  openGraph: {
    title: "Cómo cobrar sin perder clientes",
    description:
      "Descubre estrategias para recuperar cartera manteniendo relaciones comerciales sólidas y sostenibles.",
    url: "https://cobrandoonline.com/blog/cobrar-sin-perder-cliente",
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
              headline: "Cómo cobrar sin perder clientes",
              description:
                "Guía para recuperar cartera manteniendo relaciones comerciales sanas y sostenibles.",
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
                  "https://cobrandoonline.com/blog/cobrar-sin-perder-cliente",
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
                  name: "¿Es posible cobrar una deuda sin afectar la relación con el cliente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una comunicación profesional, acuerdos razonables y seguimiento oportuno permiten recuperar cartera sin deteriorar la relación comercial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué hacer cuando un cliente tiene problemas de liquidez?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se pueden ofrecer alternativas como acuerdos de pago, cuotas o ampliación de plazos para facilitar el cumplimiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se debe iniciar una gestión más formal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el cliente incumple reiteradamente o no responde a los intentos de negociación y cobranza amistosa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobrarSinPerderCliente />
    </>
  );
}
