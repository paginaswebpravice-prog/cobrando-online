import { Metadata } from "next";
import SeguimientoAcuerdosPago from "./SeguimientoAcuerdosPago";

export const metadata: Metadata = {
  title:
    "Seguimiento de acuerdos de pago: cómo asegurar el cumplimiento de las deudas",
  description:
    "Aprende cómo realizar seguimiento a acuerdos de pago para aumentar la recuperación de cartera y reducir incumplimientos.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
  },

  openGraph: {
    title:
      "Seguimiento de acuerdos de pago para mejorar la recuperación de cartera",
    description:
      "Conoce las mejores prácticas para controlar acuerdos de pago y asegurar el cumplimiento de las obligaciones.",
    url: "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
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
                "Seguimiento de acuerdos de pago para recuperar cartera de manera efectiva",
              description:
                "Guía para monitorear acuerdos de pago y aumentar el cumplimiento de las obligaciones.",
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
                  "https://cobrandoonline.com/blog/seguimiento-acuerdos-pago",
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
                  name: "¿Por qué es importante hacer seguimiento a un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite verificar el cumplimiento de los compromisos adquiridos y actuar rápidamente ante incumplimientos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué herramientas pueden utilizarse para el seguimiento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CRM, software de cartera, correos automáticos, SMS y recordatorios por WhatsApp.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué hacer si el deudor incumple el acuerdo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se debe contactar al deudor, evaluar alternativas de negociación y considerar acciones prejurídicas o jurídicas si es necesario.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoAcuerdosPago />
    </>
  );
}
