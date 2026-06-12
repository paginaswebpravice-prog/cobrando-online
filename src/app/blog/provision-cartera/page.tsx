import { Metadata } from "next";
import ProvisionCartera from "./ProvisionCartera";

export const metadata: Metadata = {
  title: "Provisión de cartera: qué es, para qué sirve y cómo calcularla",
  description:
    "Aprende qué es la provisión de cartera, cómo calcularla y cómo utilizarla para gestionar el riesgo financiero de las cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/provision-cartera",
  },

  openGraph: {
    title: "Provisión de cartera: guía completa para empresas",
    description:
      "Conoce cómo calcular provisiones de cartera y evaluar el riesgo financiero asociado a las cuentas por cobrar.",
    url: "https://cobrandoonline.com/blog/provision-cartera",
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
              headline: "Provisión de cartera: qué es y cómo calcularla",
              description:
                "Guía práctica para calcular provisiones de cartera y gestionar el riesgo financiero empresarial.",
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
                "@id": "https://cobrandoonline.com/blog/provision-cartera",
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
                  name: "¿Qué es una provisión de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una estimación contable que reconoce el riesgo de no recuperar total o parcialmente determinadas cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se calcula la provisión de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puede calcularse mediante porcentajes sobre cartera vencida, análisis por antigüedad o modelos de pérdida esperada según las políticas de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante provisionar la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite reflejar de forma más realista la situación financiera de la empresa y anticipar posibles pérdidas por incumplimiento de clientes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ProvisionCartera />
    </>
  );
}
