import { Metadata } from "next";
import CobroOrdinarioVsEjecutivo from "./CobroOrdinarioVsEjecutivo";

export const metadata: Metadata = {
  title:
    "Proceso ejecutivo vs proceso ordinario en Colombia: diferencias, ventajas y cuál conviene para recuperar una deuda",

  description:
    "Descubre las diferencias entre el proceso ejecutivo y el proceso ordinario en Colombia. Aprende cuándo utilizar cada uno, qué documentos necesitas, cuánto pueden tardar y cuál ofrece mayores posibilidades para recuperar una deuda empresarial.",

  keywords: [
    "proceso ejecutivo Colombia",
    "proceso ordinario Colombia",
    "proceso ejecutivo vs ordinario",
    "cobro ejecutivo",
    "cobro ordinario",
    "proceso ejecutivo para empresas",
    "recuperación de cartera",
    "recuperación judicial de cartera",
    "cobro judicial empresas",
    "cómo recuperar una deuda",
    "título ejecutivo",
    "facturas como título ejecutivo",
    "proceso para cobrar una factura",
    "proceso ejecutivo empresas",
    "proceso ordinario empresas",
    "demanda ejecutiva Colombia",
    "cobro de cartera empresarial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",
  },

  openGraph: {
    title:
      "Proceso ejecutivo vs proceso ordinario: diferencias, ventajas y cuál elegir para recuperar una deuda",

    description:
      "Conoce cuándo conviene un proceso ejecutivo o un proceso ordinario para recuperar cartera empresarial. Guía práctica para empresas en Colombia.",

    url: "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Proceso ejecutivo vs proceso ordinario | Guía para empresas",

    description:
      "Aprende cuál proceso judicial conviene según el tipo de deuda y la documentación disponible.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
                "Proceso ejecutivo vs proceso ordinario en Colombia: diferencias, ventajas y cuál conviene para recuperar una deuda",

              alternativeHeadline:
                "Cómo elegir entre un proceso ejecutivo y un proceso ordinario para recuperar cartera empresarial",

              description:
                "Guía completa para empresas sobre las diferencias entre el proceso ejecutivo y el proceso ordinario en Colombia. Aprende cuándo utilizar cada uno, qué documentos necesitas, sus ventajas, riesgos y cuál ofrece mejores posibilidades para recuperar una deuda.",

              keywords:
                "proceso ejecutivo, proceso ordinario, recuperación de cartera, cobro judicial, título ejecutivo, cobro de facturas, empresas, Colombia",

              articleSection: "Cobro Jurídico",

              wordCount: "4800",

              inLanguage: "es-CO",

              datePublished: "2026-01-01",

              dateModified: "2026-07-22",

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

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",
              },

              image: {
                "@type": "ImageObject",
                url: "https://cobrandoonline.com/images/blog/cobro-ordinario-vs-ejecutivo.jpg",
              },

              about: [
                {
                  "@type": "Thing",
                  name: "Proceso Ejecutivo",
                },
                {
                  "@type": "Thing",
                  name: "Proceso Ordinario",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de Cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cobro Jurídico",
                },
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Título Ejecutivo",
                },
                {
                  "@type": "Thing",
                  name: "Facturas",
                },
                {
                  "@type": "Thing",
                  name: "Pagarés",
                },
                {
                  "@type": "Thing",
                  name: "Contratos",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre un proceso ejecutivo y un proceso ordinario en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La principal diferencia es que el proceso ejecutivo exige la existencia de un título ejecutivo que permita reclamar directamente el pago de una obligación. En el proceso ordinario primero debe demostrarse la existencia de la deuda antes de que el juez pueda ordenar su pago.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué documentos sirven como título ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los documentos que pueden prestar mérito ejecutivo se encuentran pagarés, letras de cambio, cheques, contratos que cumplan los requisitos legales, sentencias judiciales y algunas facturas electrónicas cuando cumplen las condiciones establecidas por la legislación colombiana.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo conviene iniciar un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente conviene cuando existe una obligación clara, expresa y exigible respaldada por un documento válido. Esto permite solicitar medidas cautelares desde etapas tempranas y aumentar las probabilidades de recuperar la cartera.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo es necesario acudir a un proceso ordinario?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El proceso ordinario suele utilizarse cuando no existe un título ejecutivo suficiente y es necesario demostrar judicialmente la existencia de la obligación mediante pruebas documentales, testimonios u otros medios probatorios.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué proceso suele ser más rápido?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En la mayoría de los casos el proceso ejecutivo suele ser más ágil porque la obligación ya está documentada y no requiere probar nuevamente la existencia de la deuda.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Se pueden embargar bienes en un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una de las principales ventajas del proceso ejecutivo es la posibilidad de solicitar medidas cautelares como embargos y secuestros de bienes para proteger la recuperación del crédito.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué pasa si el deudor no tiene bienes?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aunque exista una sentencia favorable, la recuperación puede verse limitada si el deudor no posee bienes embargables, cuentas bancarias o ingresos identificables que permitan hacer efectiva la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo saber cuál proceso es el más adecuado para recuperar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La decisión depende principalmente de la documentación disponible, del tipo de obligación, del valor adeudado y de la situación financiera del deudor. Un análisis previo permite escoger la estrategia de recuperación más eficiente.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Se puede evitar un proceso judicial mediante negociación?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. En muchos casos una gestión prejurídica profesional, acompañada de acuerdos de pago y seguimiento oportuno, permite recuperar la cartera sin necesidad de acudir a un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué errores cometen las empresas antes de iniciar un cobro judicial?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los errores más comunes son dejar pasar demasiado tiempo antes de actuar, no conservar la documentación adecuada, no verificar la solvencia del deudor y acudir directamente a la vía judicial sin realizar una gestión previa de cobranza.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroOrdinarioVsEjecutivo />
    </>
  );
}
