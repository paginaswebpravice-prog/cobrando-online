import { Metadata } from "next";
import ErroresAcuerdosPago from "./ErroresAcuerdosPago";

export const metadata: Metadata = {
  title:
    "Errores en acuerdos de pago: cómo evitarlos y recuperar cartera con éxito",
  description:
    "Conoce los errores más comunes en acuerdos de pago y aprende cómo estructurarlos correctamente para mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/errores-acuerdos-de-pago",
  },

  openGraph: {
    title: "Errores en acuerdos de pago y cómo evitarlos",
    description:
      "Aprende a estructurar acuerdos de pago efectivos para reducir incumplimientos y mejorar la recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/errores-acuerdos-de-pago",
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
                "Errores en acuerdos de pago: cómo evitarlos y recuperar cartera con éxito",
              description:
                "Guía práctica sobre los errores más frecuentes en acuerdos de pago y cómo prevenirlos.",
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
                  "https://cobrandoonline.com/blog/errores-acuerdos-de-pago",
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
                  name: "¿Es obligatorio dejar un acuerdo de pago por escrito?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Un acuerdo escrito facilita la prueba de los compromisos adquiridos y brinda mayor seguridad jurídica.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si el deudor incumple el acuerdo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La empresa puede activar nuevamente acciones de cobro, exigir intereses o iniciar procesos judiciales según corresponda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo aumentar las probabilidades de cumplimiento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Estableciendo cuotas realistas, fechas claras y realizando seguimiento constante al acuerdo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ErroresAcuerdosPago />
    </>
  );
}
