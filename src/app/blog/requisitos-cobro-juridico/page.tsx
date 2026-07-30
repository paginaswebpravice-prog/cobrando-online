import { Metadata } from "next";
import RequisitosCobroJuridico from "./RequisitosCobroJuridico";

export const metadata: Metadata = {
  title:
    "Requisitos para iniciar un cobro jurídico en Colombia (Guía 2026): documentos, títulos ejecutivos y cuándo demandar",

  description:
    "Conoce cuáles son los requisitos para iniciar un cobro jurídico en Colombia, qué documentos sirven como título ejecutivo, cuándo demandar una deuda y qué aspectos revisar antes de iniciar un proceso judicial de recuperación de cartera.",

  keywords: [
    "requisitos cobro jurídico",
    "cómo iniciar cobro jurídico",
    "documentos para cobro jurídico",
    "qué se necesita para cobrar una deuda judicialmente",
    "título ejecutivo Colombia",
    "facturas para demanda ejecutiva",
    "pagaré cobro jurídico",
    "requisitos demanda ejecutiva Colombia",
    "cobro jurídico empresas",
    "recuperación de cartera jurídica",
    "proceso ejecutivo Colombia",
    "cómo demandar una deuda",
    "documentos para recuperar cartera",
    "cobro jurídico de facturas",
    "cartera vencida empresas",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/requisitos-cobro-juridico",
  },

  openGraph: {
    title:
      "Requisitos para iniciar un cobro jurídico en Colombia | Documentos, títulos ejecutivos y pasos",

    description:
      "Descubre qué documentos necesitas para iniciar un cobro jurídico, cuándo procede una demanda ejecutiva y qué aspectos debes verificar antes de acudir a la vía judicial.",

    url: "https://cobrandoonline.com/blog/requisitos-cobro-juridico",

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
                "Requisitos para iniciar un cobro jurídico en Colombia: documentos, títulos ejecutivos y condiciones",

              description:
                "Guía completa sobre los requisitos legales para iniciar un cobro jurídico en Colombia, los documentos que respaldan una obligación y cuándo es recomendable acudir a un proceso judicial.",

              image:
                "https://cobrandoonline.com/images/blog/requisitos-cobro-juridico.webp",

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
                  "https://cobrandoonline.com/blog/requisitos-cobro-juridico",
              },

              keywords:
                "requisitos cobro jurídico, documentos para demanda ejecutiva, título ejecutivo, recuperación de cartera",

              datePublished: "2026-01-01",

              dateModified: "2026-07-30",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué se necesita para iniciar un cobro jurídico en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es necesario contar con una obligación clara, expresa y exigible, además de documentos que acrediten la deuda como pagarés, facturas electrónicas con mérito ejecutivo, contratos, acuerdos de pago, actas de conciliación u otros títulos ejecutivos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es obligatorio tener un pagaré para demandar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. Dependiendo del caso, pueden utilizarse otros documentos con fuerza ejecutiva como contratos, facturas electrónicas, acuerdos de pago incumplidos, actas de conciliación o sentencias judiciales.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es recomendable intentar un cobro prejurídico antes de demandar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. En muchos casos un proceso de cobranza prejurídica permite recuperar la deuda mediante negociación, acuerdos de pago o reestructuración de obligaciones, evitando los costos y tiempos de un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo conviene iniciar un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente cuando el deudor incumple reiteradamente sus obligaciones, no responde a las gestiones de cobro, incumple acuerdos de pago o existe riesgo de perder la posibilidad de recuperar la cartera por el paso del tiempo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas suelen utilizar el cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Empresas comerciales, PYMES, IPS, clínicas, constructoras, proveedores, distribuidores, compañías de servicios y organizaciones que administran cuentas por cobrar utilizan el cobro jurídico cuando las gestiones extrajudiciales no producen resultados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RequisitosCobroJuridico />
    </>
  );
}
