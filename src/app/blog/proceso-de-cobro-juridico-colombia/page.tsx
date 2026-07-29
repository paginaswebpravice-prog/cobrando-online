import { Metadata } from "next";
import ProcesoCobroJuridicoContent from "./ProcesoCobroJuridicoContent";

export const metadata: Metadata = {
  title:
    "Proceso de cobro jurídico en Colombia (2026): etapas, demanda ejecutiva, embargos y tiempos reales",

  description:
    "Descubre cómo funciona el proceso de cobro jurídico en Colombia paso a paso. Conoce cuándo iniciar una demanda ejecutiva, cuánto tarda, qué documentos necesitas, cómo funcionan los embargos y cómo recuperar cartera vencida de forma legal.",

  keywords: [
    "proceso de cobro jurídico Colombia",
    "cobro jurídico Colombia",
    "demanda ejecutiva Colombia",
    "proceso ejecutivo de cobro",
    "cobro de cartera jurídica",
    "recuperación de cartera",
    "embargo por deuda Colombia",
    "embargo de cuentas bancarias",
    "embargo de bienes",
    "embargo de salario",
    "cómo cobrar una deuda legalmente",
    "demanda por pagaré",
    "demanda por factura",
    "proceso ejecutivo pagaré",
    "proceso ejecutivo factura electrónica",
    "recuperar cartera vencida",
    "cómo recuperar una deuda",
    "cobro judicial de deudas",
    "abogado para cobro de cartera",
    "cobro de obligaciones empresariales",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",
  },

  openGraph: {
    title:
      "Proceso de cobro jurídico en Colombia: guía completa, etapas, embargos y recuperación de cartera",

    description:
      "Aprende cómo recuperar una deuda mediante el cobro jurídico en Colombia. Conoce las etapas del proceso ejecutivo, tiempos aproximados, medidas cautelares, embargos y recomendaciones para empresas.",

    url: "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cobro jurídico en Colombia: proceso paso a paso para recuperar una deuda",

    description:
      "Guía práctica sobre demanda ejecutiva, embargos, tiempos del proceso y recuperación de cartera empresarial en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Proceso de cobro jurídico en Colombia: etapas, demanda ejecutiva, embargos y cómo recuperar una deuda",

              alternativeHeadline:
                "Guía completa sobre el proceso ejecutivo para recuperar cartera en Colombia",

              description:
                "Aprende cómo funciona el proceso de cobro jurídico en Colombia, cuáles son sus etapas, cuándo iniciar una demanda ejecutiva, cómo operan los embargos y qué hacer para recuperar cartera vencida antes de que la deuda prescriba.",

              keywords:
                "cobro jurídico Colombia, proceso ejecutivo, recuperación de cartera, embargo, demanda ejecutiva, cobro de deudas, proceso judicial, cartera vencida, pagaré, factura electrónica",

              articleSection: "Cobro Jurídico",

              wordCount: "4300",

              inLanguage: "es-CO",

              datePublished: "2025-01-01",

              dateModified: "2026-07-29",

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",
              },

              url: "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",

              about: [
                {
                  "@type": "Thing",
                  name: "Cobro jurídico",
                },
                {
                  "@type": "Thing",
                  name: "Proceso ejecutivo",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Embargos",
                },
                {
                  "@type": "Thing",
                  name: "Cobro de deudas",
                },
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Pagaré",
                },
                {
                  "@type": "Thing",
                  name: "Factura electrónica",
                },
                {
                  "@type": "Thing",
                  name: "Letra de cambio",
                },
                {
                  "@type": "Thing",
                  name: "Mandamiento de pago",
                },
                {
                  "@type": "Thing",
                  name: "Medidas cautelares",
                },
                {
                  "@type": "Thing",
                  name: "Embargo de cuentas bancarias",
                },
                {
                  "@type": "Thing",
                  name: "Embargo de bienes",
                },
                {
                  "@type": "Thing",
                  name: "Proceso ejecutivo singular",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera empresarial",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el cobro jurídico en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El cobro jurídico es el procedimiento legal mediante el cual un acreedor busca recuperar una deuda cuando el deudor no paga de forma voluntaria. Generalmente inicia con una demanda ejecutiva respaldada por un título ejecutivo como un pagaré, una factura, una letra de cambio o un contrato que preste mérito ejecutivo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo conviene iniciar un proceso de cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Normalmente se recomienda iniciar un cobro jurídico cuando las gestiones de cobranza preventiva y prejurídica no generan resultados, existe una obligación clara y exigible, y aún no han vencido los términos de prescripción de la deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tarda un proceso de cobro jurídico en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La duración depende del despacho judicial, la complejidad del caso, la ubicación de bienes del deudor y las actuaciones procesales. Algunos procesos pueden resolverse en varios meses, mientras que otros pueden tardar más tiempo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos sirven para iniciar una demanda ejecutiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los documentos más utilizados se encuentran pagarés, facturas electrónicas que presten mérito ejecutivo, letras de cambio, contratos, actas de conciliación, reconocimientos de deuda y otros títulos ejecutivos previstos por la legislación colombiana.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué bienes pueden ser embargados durante un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del caso y de la autorización judicial, pueden embargarse cuentas bancarias, vehículos, inmuebles, derechos patrimoniales, salarios dentro de los límites legales y otros bienes del deudor susceptibles de embargo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede recuperar una deuda sin llegar al embargo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Muchos procesos terminan mediante acuerdos de pago, conciliaciones o pagos voluntarios antes de que sea necesario ejecutar medidas cautelares como el embargo de bienes o cuentas bancarias.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué sucede si el deudor no tiene bienes para embargar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Si el deudor no posee bienes identificables o embargables, la recuperación puede resultar más compleja. Por ello es recomendable realizar análisis patrimoniales y actuar oportunamente antes de que transcurra demasiado tiempo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué diferencia existe entre cobro prejurídico y cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El cobro prejurídico comprende las gestiones de negociación, recordatorios, llamadas, correos electrónicos y acuerdos de pago antes de acudir a un juez. El cobro jurídico inicia cuando se presenta una demanda para obtener el pago mediante un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es posible interrumpir la prescripción de una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Dependiendo del caso, la prescripción puede interrumpirse mediante actuaciones previstas por la ley, como la presentación de la demanda judicial o el reconocimiento de la obligación por parte del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo aumentar la probabilidad de recuperar una cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las empresas obtienen mejores resultados cuando implementan políticas de crédito, realizan seguimiento permanente a la cartera, utilizan procesos de cobranza preventiva y, cuando es necesario, inician oportunamente el cobro jurídico antes de que la obligación prescriba.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ProcesoCobroJuridicoContent />
    </>
  );
}
