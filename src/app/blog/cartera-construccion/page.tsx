import { Metadata } from "next";
import CarteraConstruccion from "./CarteraConstruccion";

export const metadata: Metadata = {
  title: "Cartera en construcción: gestión de cobros en obras y proyectos",
  description:
    "Aprende cómo gestionar cartera vencida en empresas constructoras, contratistas y proyectos de infraestructura.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-construccion",
  },

  openGraph: {
    title: "Cartera en construcción: estrategias de recuperación y cobranza",
    description:
      "Guía para mejorar la gestión de cartera y recuperación de pagos en el sector construcción.",
    url: "https://cobrandoonline.com/blog/cartera-construccion",
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
                "Cartera en construcción: cómo gestionar cobros en obras y proyectos de infraestructura",
              description:
                "Guía para optimizar la recuperación de cartera en constructoras y empresas de obras civiles.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-construccion",
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
                  name: "¿Por qué es importante gestionar la cartera en construcción?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque los proyectos suelen involucrar pagos de alto valor y plazos extensos que impactan directamente la liquidez de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las causas más comunes de mora en construcción?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Retrasos en actas de obra, problemas de flujo de caja, disputas contractuales y demoras administrativas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo debe iniciarse una gestión jurídica?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando los intentos de negociación y recuperación administrativa no logran obtener el pago de la obligación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraConstruccion />
    </>
  );
}
