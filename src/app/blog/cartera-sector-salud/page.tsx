import { Metadata } from "next";
import CarteraSectorSalud from "./CarteraSectorSalud";

export const metadata: Metadata = {
  title:
    "Cartera sector salud: cómo recuperar pagos, controlar glosas y mejorar recaudo en IPS",

  description:
    "Guía para IPS, clínicas y prestadores de salud sobre gestión de cartera, recuperación de pagos, control de glosas y estrategias para mejorar el recaudo.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-sector-salud",
  },

  openGraph: {
    title:
      "Cartera sector salud: estrategias para recuperar pagos y mejorar recaudo en IPS",

    description:
      "Conoce cómo las IPS y clínicas pueden gestionar cartera vencida, controlar glosas y mejorar sus procesos de recuperación de ingresos.",

    url: "https://cobrandoonline.com/blog/cartera-sector-salud",

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
                "Cartera sector salud: cómo recuperar pagos, controlar glosas y mejorar el recaudo en IPS y clínicas",

              description:
                "Guía especializada para instituciones de salud sobre gestión de cartera, recuperación de pagos pendientes, control de glosas y estrategias de recaudo.",

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
                "@id": "https://cobrandoonline.com/blog/cartera-sector-salud",
              },

              keywords:
                "cartera sector salud, cartera IPS, recuperación de cartera IPS, glosas salud, recaudo clínicas",

              articleSection: "Gestión de cartera empresarial",

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la cartera en el sector salud?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cartera en el sector salud corresponde a los valores pendientes de pago derivados de la prestación de servicios médicos entre IPS, clínicas, EPS y otras entidades relacionadas con el sistema de salud.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué las IPS tienen problemas de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las IPS pueden presentar problemas de cartera por retrasos en pagos, procesos de auditoría, glosas, devoluciones de facturas, diferencias contractuales y demoras administrativas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué son las glosas en la cartera del sector salud?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las glosas son objeciones realizadas sobre facturas de servicios de salud que pueden retrasar o impedir el pago mientras se realiza su revisión, conciliación o corrección.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar la recuperación de cartera en IPS y clínicas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La recuperación de cartera puede mejorar mediante seguimiento permanente, control de glosas, conciliaciones oportunas, organización documental y procesos estructurados de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a controlar la cartera en salud?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Algunos indicadores importantes son días de recaudo, porcentaje de cartera vencida, valor de glosas pendientes, antigüedad de cartera y porcentaje de recuperación mensual.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo una IPS debe iniciar acciones de recuperación especializada?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando las gestiones administrativas, conciliaciones y acuerdos de pago no permiten recuperar los recursos pendientes, puede ser necesario implementar estrategias especializadas de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraSectorSalud />
    </>
  );
}
