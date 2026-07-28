import { Metadata } from "next";
import MoraEnColombiaExplicacion from "./MoraEnColombiaExplicacion";

export const metadata: Metadata = {
  title:
    "Mora en Colombia: qué es, cómo se calcula y consecuencias para empresas (Guía 2026)",

  description:
    "Conoce qué es la mora en Colombia, cuándo una obligación entra en mora, cómo calcular los días de retraso, los intereses moratorios y cómo afecta la recuperación de cartera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
  },

  openGraph: {
    title:
      "Mora en Colombia: qué significa, cómo funciona y cómo gestionarla en empresas",

    description:
      "Guía práctica sobre la mora en Colombia: cálculo, intereses, consecuencias financieras y recomendaciones para gestionar clientes morosos.",

    url: "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",

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
                "Mora en Colombia: qué es, cómo se calcula y consecuencias para empresas",

              description:
                "Guía completa sobre la mora en Colombia, sus efectos financieros, cálculo de intereses y estrategias para gestionar obligaciones vencidas.",

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
                  "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
              },

              image: "https://cobrandoonline.com/images/blog/mora-colombia.jpg",

              datePublished: "2026-01-01",

              dateModified: "2026-01-01",

              inLanguage: "es-CO",

              keywords: [
                "mora en Colombia",
                "qué es la mora",
                "intereses moratorios Colombia",
                "cartera vencida empresarial",
                "gestión de cartera",
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
                  name: "Mora en Colombia",
                  item: "https://cobrandoonline.com/blog/mora-en-colombia-explicacion",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la mora en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La mora ocurre cuando una persona o empresa no cumple el pago de una obligación dentro del plazo establecido. Desde ese momento pueden generarse consecuencias económicas y procesos de gestión de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una deuda entra en mora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una obligación entra en mora cuando llega la fecha límite de pago y el deudor no realiza el cumplimiento acordado.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se calculan los días de mora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los días de mora se calculan contando el tiempo transcurrido desde el vencimiento de la obligación hasta la fecha efectiva de pago o recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La mora genera intereses?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Dependiendo de la obligación y las condiciones pactadas pueden generarse intereses moratorios conforme a las normas aplicables.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué puede hacer una empresa cuando un cliente entra en mora?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La empresa puede iniciar seguimiento preventivo, establecer comunicación con el cliente, negociar alternativas de pago y aplicar estrategias de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre deuda y cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una deuda representa una obligación pendiente, mientras que la cartera vencida corresponde a obligaciones cuyo plazo de pago ya terminó y no fueron canceladas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MoraEnColombiaExplicacion />
    </>
  );
}
