import { Metadata } from "next";
import EmbargosEnColombia from "./EmbargosEnColombia";

export const metadata: Metadata = {
  title:
    "Embargos en Colombia: qué se puede embargar, qué bienes no y cómo funciona un embargo por deudas | Guía 2026",

  description:
    "Aprende qué es un embargo en Colombia, qué bienes pueden embargarse, cuáles son inembargables, cómo funciona el embargo de cuentas bancarias, salarios, inmuebles y cuánto puede tardar un proceso de cobro.",

  keywords: [
    "embargos en Colombia",
    "qué es un embargo",
    "embargo de cuentas bancarias",
    "embargo de salario",
    "embargo de bienes",
    "embargo por deudas",
    "bienes embargables",
    "bienes inembargables",
    "embargo de inmueble",
    "embargo de vehículo",
    "embargo judicial",
    "cómo funciona un embargo",
    "proceso de embargo Colombia",
    "recuperación de cartera",
    "cobro jurídico",
    "embargo de cuentas",
    "embargo por factura",
    "embargo ejecutivo",
    "cobranza empresarial",
    "gestión de cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/embargos-en-colombia",
  },

  openGraph: {
    title:
      "Embargos en Colombia: qué bienes pueden embargarse y cómo funciona el proceso",

    description:
      "Descubre cómo funciona un embargo en Colombia, qué bienes pueden ser embargados, cuáles están protegidos por la ley y cómo esta medida ayuda a recuperar una deuda.",

    url: "https://cobrandoonline.com/blog/embargos-en-colombia",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Embargos en Colombia: guía completa sobre bienes embargables y recuperación de deudas",

    description:
      "Conoce qué bienes pueden embargarse, cuáles son inembargables y cómo funciona el embargo dentro de un proceso de recuperación de cartera.",
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
                "Embargos en Colombia: qué se puede embargar, qué bienes están protegidos y cómo funciona el proceso",

              description:
                "Guía completa para entender el embargo en Colombia, el embargo de cuentas bancarias, salarios, inmuebles, vehículos y demás bienes dentro de un proceso de recuperación de cartera.",

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

                "@id": "https://cobrandoonline.com/blog/embargos-en-colombia",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-24",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es un embargo en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es una medida cautelar ordenada por un juez para inmovilizar bienes, cuentas bancarias o ingresos del deudor con el fin de garantizar el pago de una obligación dentro de un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué bienes pueden ser embargados?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso pueden embargarse cuentas bancarias, inmuebles, vehículos, acciones, derechos patrimoniales, cuentas por cobrar y otros bienes con valor económico que pertenezcan al deudor.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Se puede embargar una cuenta bancaria?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Siempre que exista una orden judicial, la entidad financiera puede inmovilizar los recursos hasta el monto autorizado dentro del proceso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Todo el salario puede ser embargado?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. La legislación colombiana establece límites para proteger parte del salario y garantizar el mínimo vital del trabajador.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuánto demora un embargo en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El tiempo depende del tipo de proceso judicial, la localización de los bienes, la respuesta de las entidades involucradas y la complejidad del caso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué bienes no pueden ser embargados?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Existen bienes protegidos por la ley como determinados porcentajes del salario, algunas pensiones, ciertos subsidios y otros bienes expresamente declarados inembargables.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EmbargosEnColombia />
    </>
  );
}
