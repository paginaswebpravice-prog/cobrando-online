import { Metadata } from "next";
import CobroOrdinarioVsEjecutivo from "./CobroOrdinarioVsEjecutivo";

export const metadata: Metadata = {
  title:
    "Cobro ordinario vs ejecutivo en Colombia: diferencias y cuál conviene",
  description:
    "Aprende las diferencias entre el cobro ordinario y el proceso ejecutivo en Colombia, sus requisitos, ventajas y cuándo utilizar cada uno.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",
  },

  openGraph: {
    title:
      "Cobro ordinario vs ejecutivo: cuál es mejor para recuperar una deuda",
    description:
      "Conoce cuándo utilizar un proceso ordinario o ejecutivo y cómo afectan la recuperación de cartera en Colombia.",
    url: "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",
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
              headline: "Cobro ordinario vs ejecutivo en Colombia",
              description:
                "Diferencias entre los procesos ordinarios y ejecutivos para la recuperación judicial de deudas.",
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
                  "https://cobrandoonline.com/blog/cobro-ordinario-vs-ejecutivo",
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
                  name: "¿Qué es un proceso ejecutivo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un proceso judicial utilizado para cobrar deudas respaldadas por un título ejecutivo válido.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es un proceso ordinario?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un proceso judicial donde primero debe demostrarse la existencia de la deuda antes de exigir su pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál proceso suele ser más rápido?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente el proceso ejecutivo es más rápido porque permite reclamar directamente una obligación documentada.",
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
