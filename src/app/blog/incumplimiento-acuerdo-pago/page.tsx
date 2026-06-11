import { Metadata } from "next";
import IncumplimientoAcuerdoPago from "./IncumplimientoAcuerdoPago";

export const metadata: Metadata = {
  title:
    "Qué hacer si incumplen un acuerdo de pago | Recuperación de cartera en Colombia",

  description:
    "Conoce qué hacer cuando un deudor incumple un acuerdo de pago y cuáles son las acciones legales y preventivas para recuperar la deuda.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",
  },

  openGraph: {
    title: "Qué hacer si incumplen un acuerdo de pago",
    description:
      "Guía práctica sobre las acciones a seguir cuando un deudor incumple un acuerdo de pago.",
    url: "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",
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
              headline: "Qué hacer si incumplen un acuerdo de pago",
              description:
                "Acciones legales y preventivas para actuar frente al incumplimiento de acuerdos de pago.",
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
                  "https://cobrandoonline.com/blog/incumplimiento-acuerdo-pago",
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
                  name: "¿Qué pasa si un deudor incumple un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La empresa puede iniciar nuevas acciones de cobro, aplicar cláusulas pactadas o incluso acudir a procesos judiciales según el caso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede renegociar un acuerdo incumplido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Si existe voluntad de pago, las partes pueden acordar nuevas condiciones siempre que queden documentadas por escrito.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es importante conservar el acuerdo firmado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. El acuerdo firmado constituye una prueba importante para respaldar futuras acciones de recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IncumplimientoAcuerdoPago />
    </>
  );
}
