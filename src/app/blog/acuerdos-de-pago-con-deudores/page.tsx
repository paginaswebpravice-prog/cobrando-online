import { Metadata } from "next";
import AcuerdosPago from "./AcuerdosPago";

export const metadata: Metadata = {
  title:
    "Acuerdos de pago con deudores en Colombia: cómo recuperar cartera sin ir a juicio | Cobrando Online",

  description:
    "Aprende cómo hacer acuerdos de pago efectivos con deudores en Colombia para recuperar cartera vencida, negociar cuotas, reducir la mora y mejorar el flujo de caja sin acudir inmediatamente a procesos judiciales.",

  keywords: [
    "acuerdos de pago con deudores",
    "acuerdo de pago Colombia",
    "cómo hacer un acuerdo de pago",
    "modelo de acuerdo de pago",
    "recuperación de cartera",
    "recuperar cartera sin demandar",
    "negociación de deudas",
    "negociación con deudores",
    "cobro prejurídico",
    "cobranza empresarial",
    "cartera vencida Colombia",
    "gestión de cartera",
    "recuperación de cartera Colombia",
    "acuerdo de pago empresas",
    "acuerdo de pago clientes morosos",
    "cómo cobrar una deuda",
    "recuperar dinero de clientes",
    "estrategias de cobranza",
    "seguimiento de cartera",
    "Cobrando Online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
  },

  openGraph: {
    title:
      "Acuerdos de pago con deudores: cómo recuperar cartera sin ir a juicio",

    description:
      "Descubre cómo negociar acuerdos de pago efectivos, recuperar cartera vencida y aumentar el recaudo mediante estrategias profesionales de cobranza.",

    url: "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cómo hacer acuerdos de pago efectivos y recuperar cartera en Colombia",

    description:
      "Guía completa para negociar acuerdos de pago con deudores, reducir la mora y recuperar cartera sin acudir inmediatamente a procesos judiciales.",
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
              "@type": "Organization",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
              logo: "https://cobrandoonline.com/logo.png",
              description:
                "Especialistas en recuperación de cartera, cobranza prejurídica, negociación de deudas y acuerdos de pago para empresas en Colombia.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-323-437-2766",
                contactType: "customer service",
                areaServed: "CO",
                availableLanguage: "Spanish",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
              inLanguage: "es-CO",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://cobrandoonline.com/blog?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un acuerdo de pago con un deudor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un compromiso escrito mediante el cual el deudor acepta pagar una obligación en una o varias cuotas dentro de un plazo determinado. Este documento permite organizar el pago de la deuda y reducir el riesgo de incumplimiento cuando se establecen condiciones claras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un acuerdo de pago tiene validez legal en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Siempre que el acuerdo sea elaborado correctamente, identifique a las partes, describa la deuda y sea firmado por el deudor, constituye un documento con valor probatorio que puede respaldar futuras acciones de cobro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo conviene ofrecer un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable cuando el deudor reconoce la obligación, manifiesta intención de pagar y requiere un plazo adicional o un plan de cuotas para cumplir con el compromiso adquirido.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo de pago para evitar problemas futuros?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe contener la identificación de las partes, el valor total de la deuda, fechas de pago, número de cuotas, forma de pago, intereses cuando correspondan, consecuencias por incumplimiento y la firma del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si el deudor incumple el acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Si el deudor incumple las condiciones pactadas, el acreedor puede iniciar nuevas gestiones de recuperación de cartera y, dependiendo del documento firmado y del caso concreto, evaluar otras alternativas para exigir el cumplimiento de la obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es mejor negociar un acuerdo de pago que demandar al deudor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos casos sí, porque permite recuperar el dinero en menor tiempo, reducir costos de recuperación y conservar la relación comercial cuando existe voluntad de pago por parte del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede hacer un acuerdo de pago por cuotas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Es una de las modalidades más utilizadas, ya que facilita que el deudor cumpla con la obligación mediante pagos periódicos previamente definidos entre las partes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo aumentar la probabilidad de que un deudor cumpla un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es importante establecer fechas claras, realizar seguimiento constante, enviar recordatorios antes de cada vencimiento y mantener una comunicación profesional durante toda la negociación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué beneficios tiene un acuerdo de pago para una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite recuperar liquidez, reducir la cartera vencida, mejorar el flujo de caja, disminuir costos de recuperación y fortalecer la relación con clientes que presentan dificultades temporales de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los acuerdos de pago sirven para cualquier tipo de deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente pueden utilizarse para obligaciones comerciales, prestación de servicios, facturas pendientes y otras deudas donde exista disposición de las partes para negociar una forma de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda en negociarse un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende de la disposición del deudor y de la complejidad del caso. En muchos escenarios la negociación puede realizarse en pocos días cuando existe comunicación efectiva entre las partes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo puede ayudar Cobrando Online en la negociación de acuerdos de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cobrando Online acompaña el proceso de recuperación de cartera mediante estrategias de negociación, seguimiento profesional a deudores y estructuración de acuerdos de pago orientados a aumentar la recuperación sin afectar la relación comercial.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://cobrandoonline.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://cobrandoonline.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Acuerdos de pago con deudores",
                  item: "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/acuerdos-de-pago-con-deudores",
              },
              headline:
                "Cómo hacer acuerdos de pago con deudores en Colombia y recuperar cartera sin demandar",
              alternativeHeadline:
                "Guía para negociar acuerdos de pago efectivos con clientes morosos",
              description:
                "Aprende cómo elaborar acuerdos de pago efectivos, negociar con deudores y recuperar cartera en Colombia mediante estrategias de cobranza profesional.",
              image: ["https://cobrandoonline.com/og-image.jpg"],
              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cobrandoonline.com/logo.png",
                },
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es-CO",
              articleSection: "Recuperación de Cartera",
              keywords: [
                "acuerdos de pago",
                "acuerdos de pago con deudores",
                "recuperación de cartera",
                "cobranza prejurídica",
                "clientes morosos",
                "negociación de deudas",
                "cómo recuperar cartera",
                "cobranza empresarial",
                "gestión de cartera",
                "acuerdo de pago Colombia",
              ],
              about: {
                "@type": "Thing",
                name: "Acuerdos de pago y recuperación de cartera",
              },
              isPartOf: {
                "@type": "Blog",
                name: "Blog Cobrando Online",
                url: "https://cobrandoonline.com/blog",
              },
            },
          ]),
        }}
      />

      <AcuerdosPago />
    </>
  );
}
