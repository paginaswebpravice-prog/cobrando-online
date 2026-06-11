import { Metadata } from "next";
import GestionCobranzaBasica from "./GestionCobranzaBasica";

export const metadata: Metadata = {
  title:
    "Gestión de cobranza: conceptos básicos para empresas | Cobrando Online",

  description:
    "Aprende qué es la gestión de cobranza, sus etapas principales, herramientas y buenas prácticas para recuperar cartera de forma eficiente.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/gestion-cobranza-basica",
  },

  openGraph: {
    title: "Gestión de cobranza: conceptos básicos para recuperar cartera",
    description:
      "Guía completa sobre gestión de cobranza empresarial, seguimiento de pagos y recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/gestion-cobranza-basica",
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
              headline: "Gestión de cobranza: conceptos básicos para empresas",
              description:
                "Guía sobre gestión de cobranza, recuperación de cartera y seguimiento de pagos.",
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
                  "https://cobrandoonline.com/blog/gestion-cobranza-basica",
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
                  name: "¿Qué es la gestión de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de actividades destinadas a recuperar pagos pendientes y controlar la cartera de clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante la gestión de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque ayuda a mantener la liquidez, reducir la morosidad y mejorar la estabilidad financiera de las empresas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las etapas de la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incluyen cobranza preventiva, seguimiento, negociación, acuerdos de pago, cobranza prejurídica y cobro jurídico.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <GestionCobranzaBasica />
    </>
  );
}
