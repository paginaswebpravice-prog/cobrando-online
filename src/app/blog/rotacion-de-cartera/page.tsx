import { Metadata } from "next";
import RotacionCartera from "./RotacionCartera";

export const metadata: Metadata = {
  title: "Rotación de cartera: qué es, cómo calcularla y por qué es importante",
  description:
    "Aprende qué es la rotación de cartera, cómo calcular este indicador financiero y cómo mejorar la recuperación de cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/rotacion-de-cartera",
  },

  openGraph: {
    title:
      "Rotación de cartera: indicador clave para medir la eficiencia de cobranza",
    description:
      "Conoce cómo calcular la rotación de cartera y optimizar la recuperación de cuentas por cobrar.",
    url: "https://cobrandoonline.com/blog/rotacion-de-cartera",
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
                "Rotación de cartera: cómo medir la eficiencia en la recuperación de cuentas por cobrar",
              description:
                "Guía completa sobre la rotación de cartera y su importancia en la gestión financiera empresarial.",
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
                "@id": "https://cobrandoonline.com/blog/rotacion-de-cartera",
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
                  name: "¿Qué es la rotación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un indicador que mide cuántas veces una empresa recupera sus cuentas por cobrar durante un período determinado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se calcula la rotación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se calcula dividiendo las ventas a crédito entre el promedio de cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante medir la rotación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite evaluar la eficiencia de la cobranza, mejorar la liquidez y controlar la cartera vencida.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RotacionCartera />
    </>
  );
}
