import { Metadata } from "next";
import ComoNegociarSinPerderClientes from "./ComoNegociarSinPerderClientes";

export const metadata: Metadata = {
  title: "Cómo negociar deudas sin perder clientes | Estrategias de cobranza",

  description:
    "Aprende a negociar deudas de manera efectiva sin afectar la relación comercial con tus clientes y mejora la recuperación de cartera.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-negociar-deudas-sin-perder-cliente",
  },

  openGraph: {
    title: "Cómo negociar deudas sin perder clientes",
    description:
      "Estrategias para recuperar cartera manteniendo relaciones comerciales sólidas y duraderas.",
    url: "https://cobrandoonline.com/blog/como-negociar-deudas-sin-perder-cliente",
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
              headline: "Cómo negociar deudas sin perder clientes",
              description:
                "Guía práctica para negociar obligaciones pendientes sin afectar la relación comercial.",
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
                  "https://cobrandoonline.com/blog/como-negociar-deudas-sin-perder-cliente",
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
                  name: "¿Cómo negociar una deuda sin afectar la relación comercial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante una comunicación profesional, acuerdos realistas y seguimiento constante de los compromisos adquiridos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es recomendable ofrecer acuerdos de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los acuerdos de pago suelen facilitar la recuperación de cartera cuando el cliente tiene dificultades temporales de liquidez.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir el valor adeudado, fechas de pago, cuotas acordadas, condiciones de incumplimiento y aceptación formal del cliente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ComoNegociarSinPerderClientes />
    </>
  );
}
