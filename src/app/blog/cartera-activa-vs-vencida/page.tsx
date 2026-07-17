import { Metadata } from "next";
import CarteraActivaVsVencida from "./CarteraActivaVsVencida";

export const metadata: Metadata = {
  title:
    "Cartera activa vs cartera vencida: diferencias, ejemplos y cómo gestionarlas",

  description:
    "Aprende la diferencia entre cartera activa y cartera vencida, ejemplos empresariales, riesgos financieros y estrategias para controlar las cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",
  },

  openGraph: {
    title: "Cartera activa vs cartera vencida: guía para empresas",

    description:
      "Conoce cómo identificar una cartera activa y una cartera vencida, sus diferencias y cómo mejorar la gestión de cuentas por cobrar.",

    url: "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",

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
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BlogPosting",

            headline:
              "Cartera activa vs cartera vencida: diferencias, ejemplos y gestión empresarial",

            description:
              "Guía empresarial para entender las diferencias entre cartera activa y cartera vencida, sus riesgos financieros y estrategias para mantener una cartera saludable.",

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
                "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",
            },

            articleSection: "Gestión empresarial de cartera",

            keywords: [
              "cartera activa",
              "cartera vencida",
              "gestión de cartera",
              "cuentas por cobrar",
              "control de cartera empresarial",
              "indicadores de cartera",
            ],

            datePublished: "2026-01-01",

            dateModified: "2026-01-01",

            inLanguage: "es",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "FAQPage",

            mainEntity: [
              {
                "@type": "Question",

                name: "¿Cuál es la diferencia entre cartera activa y cartera vencida?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text: "La cartera activa corresponde a cuentas por cobrar que todavía se encuentran dentro del plazo de pago establecido. La cartera vencida está conformada por obligaciones que superaron la fecha límite y presentan retraso en el pago.",
                },
              },

              {
                "@type": "Question",

                name: "¿Qué ejemplos existen de cartera activa y cartera vencida en una empresa?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text: "Una factura emitida con plazo vigente de pago corresponde a cartera activa. Cuando la fecha límite se supera sin recibir el pago, esa obligación pasa a considerarse cartera vencida.",
                },
              },

              {
                "@type": "Question",

                name: "¿Cómo evitar que una cartera activa se convierta en cartera vencida?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text: "Las empresas pueden prevenir la cartera vencida mediante seguimiento constante, recordatorios de pago, análisis del comportamiento de clientes y procesos organizados de gestión de cuentas por cobrar.",
                },
              },

              {
                "@type": "Question",

                name: "¿Qué indicadores ayudan a controlar una cartera empresarial?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text: "Algunos indicadores importantes son los días promedio de cartera, porcentaje de cartera vencida, recuperación de cartera y comportamiento histórico de pago.",
                },
              },
            ],
          }),
        }}
      />
      <CarteraActivaVsVencida />
    </>
  );
}
