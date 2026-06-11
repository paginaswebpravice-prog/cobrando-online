import { Metadata } from "next";
import AumentarRecuperacionCartera from "./AumentarRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Cómo aumentar la recuperación de cartera | Estrategias efectivas de cobranza",

  description:
    "Conoce las mejores estrategias para aumentar la recuperación de cartera, reducir la morosidad y mejorar el flujo de caja empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/aumentar-recuperacion-cartera",
  },

  openGraph: {
    title: "Cómo aumentar la recuperación de cartera empresarial",
    description:
      "Aprende estrategias avanzadas para maximizar la recuperación de cartera y mejorar la liquidez de tu empresa.",
    url: "https://cobrandoonline.com/blog/aumentar-recuperacion-cartera",
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
              headline: "Cómo aumentar la recuperación de cartera empresarial",
              description:
                "Estrategias avanzadas para incrementar la recuperación de cartera y reducir la morosidad.",
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
                  "https://cobrandoonline.com/blog/aumentar-recuperacion-cartera",
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
                  name: "¿Cómo aumentar la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante procesos de cobranza estructurados, seguimiento oportuno, negociación efectiva y herramientas tecnológicas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La tecnología ayuda a recuperar más cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Los sistemas de gestión permiten automatizar procesos, priorizar cuentas y mejorar la eficiencia del recaudo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se debe iniciar el cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando las acciones administrativas y las negociaciones no logran recuperar la deuda y existe viabilidad legal para hacerlo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AumentarRecuperacionCartera />
    </>
  );
}
