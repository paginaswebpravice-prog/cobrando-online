import { Metadata } from "next";
import CalcularComisionRecuperacionCartera from "./CalcularComisionRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Cómo calcular la comisión por recuperación de cartera en Colombia | Guía 2026",

  description:
    "Aprende cómo calcular la comisión por recuperación de cartera en Colombia, qué factores influyen, cómo funcionan los porcentajes por resultados y qué modelo puede ser más conveniente para tu empresa.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",
  },

  openGraph: {
    title:
      "Cómo calcular la comisión por recuperación de cartera: porcentajes, modelos y factores",

    description:
      "Conoce cómo se calcula la comisión por recuperación de cartera, cuándo se cobra sobre resultados y qué aspectos influyen en el porcentaje aplicado.",

    url: "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",

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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Cómo calcular la comisión por recuperación de cartera en Colombia: porcentajes, factores y modelos de cobro",

              description:
                "Guía completa para calcular la comisión por recuperación de cartera. Descubre qué factores influyen en el porcentaje de comisión, cómo funcionan los modelos por resultados y qué aspectos evaluar antes de contratar un servicio de cobranza.",

              keywords: [
                "comisión recuperación de cartera",
                "cómo calcular comisión recuperación cartera",
                "porcentaje recuperación cartera",
                "comisión por cobranza",
                "cobranza por resultados",
                "honorarios recuperación cartera",
                "gestión de cartera",
                "recuperación de cartera empresarial",
                "outsourcing de cobranza",
                "comisión por recaudo",
              ],

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
                  "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-17",

              inLanguage: "es",

              articleSection: "Recuperación de Cartera",

              wordCount: "2500",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo se calcula la comisión por recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente la comisión se calcula como un porcentaje sobre el valor efectivamente recuperado. El porcentaje puede variar según la antigüedad de la deuda, el monto, la complejidad del caso y la etapa en la que se encuentre la gestión de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La comisión por recuperación de cartera siempre es la misma?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Cada empresa puede definir diferentes esquemas de comisión dependiendo del nivel de dificultad de la recuperación, el volumen de cartera asignado, la antigüedad de las obligaciones y el modelo de prestación del servicio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué significa cobrar por resultados en recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un modelo en el que la remuneración depende del dinero efectivamente recuperado. En este esquema, la comisión normalmente se liquida únicamente sobre los valores que ingresan como recaudo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué factores influyen en el porcentaje de comisión?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Influyen factores como la antigüedad de la cartera, el monto adeudado, el número de deudores, la documentación disponible, el nivel de dificultad del recaudo y la etapa en la que inicia la gestión de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo elegir un modelo de comisión para recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable evaluar el porcentaje ofrecido, el alcance del servicio, la experiencia del equipo de cobranza, la tecnología utilizada para el seguimiento y la transparencia en la medición de resultados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué muchas empresas prefieren contratar recuperación de cartera por comisión?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque este modelo suele alinear los intereses entre el cliente y el gestor de cobranza, optimizando los costos y enfocando los esfuerzos en obtener una mayor recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CalcularComisionRecuperacionCartera />
    </>
  );
}
