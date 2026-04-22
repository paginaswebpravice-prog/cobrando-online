import { Metadata } from "next";
import AcuerdosPago from "./AcuerdosPago";

export const metadata: Metadata = {
  title:
    "Acuerdos de pago con deudores en Colombia: evita demandas y recupera tu dinero",
  description:
    "Aprende cómo hacer acuerdos de pago con deudores en Colombia de forma legal y efectiva. Evita procesos judiciales y recupera tu dinero más rápido.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
  },

  openGraph: {
    title: "Acuerdos de pago en Colombia: cómo recuperar deudas sin demandar",
    description:
      "Guía práctica para crear acuerdos de pago efectivos en Colombia y recuperar cartera sin procesos judiciales.",
    url: "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
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
      {/* SCHEMA AVANZADO SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Acuerdos de pago con deudores en Colombia para recuperar dinero sin demandar",
              description:
                "Guía sobre acuerdos de pago para recuperar cartera en Colombia sin procesos judiciales.",
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
                  "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
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
                  name: "¿Qué es un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un documento donde el deudor se compromete a pagar una deuda en cuotas o en un plazo determinado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es obligatorio firmar un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, para que tenga validez legal debe estar firmado por el deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un acuerdo de pago evita un proceso judicial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, en muchos casos permite recuperar la cartera sin necesidad de demandar.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AcuerdosPago />
    </>
  );
}
