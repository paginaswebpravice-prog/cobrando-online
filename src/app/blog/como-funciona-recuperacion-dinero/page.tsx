import { Metadata } from "next";
import ComoFuncionaRecuperacionDinero from "./ComoFuncionaRecuperacionDinero";

export const metadata: Metadata = {
  title:
    "Cómo funciona realmente la recuperación de dinero | Guía completa para empresas",

  description:
    "Conoce cómo funciona la recuperación de dinero en empresas, las etapas del proceso de cobranza y las estrategias para recuperar cartera vencida.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-funciona-recuperacion-dinero",
  },

  openGraph: {
    title: "Cómo funciona realmente la recuperación de dinero",
    description:
      "Aprende cómo las empresas recuperan dinero mediante procesos de cobranza, negociación y gestión jurídica.",
    url: "https://cobrandoonline.com/blog/como-funciona-recuperacion-dinero",
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
              headline: "Cómo funciona realmente la recuperación de dinero",
              description:
                "Guía completa sobre recuperación de dinero y gestión de cartera empresarial.",
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
                  "https://cobrandoonline.com/blog/como-funciona-recuperacion-dinero",
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
                  name: "¿Qué es la recuperación de dinero?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el proceso mediante el cual una empresa gestiona el cobro de obligaciones pendientes para recuperar recursos financieros.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las etapas de recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incluyen identificación de cuentas vencidas, cobranza preventiva, negociación, seguimiento y cobro jurídico si es necesario.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante recuperar dinero rápidamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque mejora la liquidez, reduce el riesgo financiero y fortalece el flujo de caja de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ComoFuncionaRecuperacionDinero />
    </>
  );
}
