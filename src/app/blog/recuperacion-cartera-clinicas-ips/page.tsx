import { Metadata } from "next";
import RecuperacionCarteraClinicasIPS from "./RecuperacionCarteraClinicasIPS";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para clínicas, IPS y sector salud en Colombia",
  description:
    "Conoce estrategias efectivas de recuperación de cartera para clínicas, IPS y empresas del sector salud en Colombia.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
  },

  openGraph: {
    title: "Recuperación de cartera para clínicas e IPS",
    description:
      "Aprende cómo clínicas e IPS pueden reducir la mora y mejorar su flujo de caja mediante estrategias de cobranza efectivas.",
    url: "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
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
                "Recuperación de cartera para clínicas, IPS y sector salud",
              description:
                "Guía sobre estrategias de cobranza y recuperación de cartera para clínicas e IPS en Colombia.",
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
                  "https://cobrandoonline.com/blog/recuperacion-cartera-clinicas-ips",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué las clínicas e IPS tienen altos niveles de cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las demoras en pagos, glosas, devoluciones y procesos administrativos complejos generan altos niveles de mora en el sector salud.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera en el sector salud?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando seguimiento constante, control de glosas, automatización y procesos de cobranza estructurados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando las gestiones administrativas y de negociación no generan resultados positivos y existe riesgo de pérdida de la deuda.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraClinicasIPS />
    </>
  );
}
