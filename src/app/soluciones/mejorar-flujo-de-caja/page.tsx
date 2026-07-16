import { Metadata } from "next";
import MejorarFlujoCajaContent from "./MejorarFlujoCajaContent";

export const metadata: Metadata = {
  title:
    "Cómo mejorar el flujo de caja de tu empresa | Reduce la cartera vencida y aumenta la liquidez",
  description:
    "Descubre cómo mejorar el flujo de caja de tu empresa mediante estrategias de recuperación de cartera, reducción de la mora, control financiero y aumento de la liquidez. Soluciones para empresas en Colombia.",

  keywords: [
    "mejorar flujo de caja",
    "flujo de caja Colombia",
    "liquidez empresa",
    "gestión financiera",
    "reducir cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",
  },

  openGraph: {
    title:
      "Cómo mejorar el flujo de caja y recuperar la liquidez de tu empresa",
    description:
      "Optimiza la liquidez de tu empresa en Colombia con estrategias efectivas de recaudo y control financiero.",
    url: "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",

              name: "Servicio para mejorar el flujo de caja empresarial en Colombia",

              serviceType:
                "Optimización del flujo de caja y recuperación de cartera",

              description:
                "Ayudamos a empresas en Colombia a mejorar el flujo de caja mediante recuperación de cartera, estrategias de recaudo, reducción de la mora y optimización de la liquidez.",

              url: "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",

              provider: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },

              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },

              audience: {
                "@type": "BusinessAudience",
                audienceType: "Empresas",
              },

              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },

              keywords: [
                "mejorar flujo de caja",
                "flujo de caja empresarial",
                "liquidez empresa",
                "aumentar liquidez",
                "gestión de cartera",
                "recuperación de cartera",
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "WebPage",

              name: "Cómo mejorar el flujo de caja de una empresa en Colombia",

              url: "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",

              description:
                "Conoce cómo mejorar el flujo de caja mediante estrategias de recuperación de cartera, recaudo y optimización financiera.",

              inLanguage: "es-CO",

              datePublished: "2026-07-16",

              dateModified: "2026-07-16",

              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".title", ".description"],
              },
            },
            {
              "@context": "https://schema.org",

              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://cobrandoonline.com",
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Servicios",
                  item: "https://cobrandoonline.com/servicios",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mejorar flujo de caja",
                  item: "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",
                },
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "Cobrando Online",

              url: "https://cobrandoonline.com",

              logo: "https://cobrandoonline.com/logo.png",

              areaServed: "Colombia",

              knowsAbout: [
                "Recuperación de cartera",
                "Cobro prejurídico",
                "Cobranza empresarial",
                "Liquidez empresarial",
                "Flujo de caja",
                "Gestión financiera",
              ],
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo mejorar el flujo de caja de una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando estrategias de recuperación de cartera, seguimiento permanente a las cuentas por cobrar, reducción de la mora y políticas claras de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué causa problemas de flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los pagos atrasados de clientes, la cartera vencida, el exceso de gastos y la falta de control financiero son las principales causas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo aumentar la liquidez empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Recuperando cartera vencida, reduciendo los tiempos de cobro y optimizando la administración del capital de trabajo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿La recuperación de cartera mejora el flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Recuperar oportunamente las cuentas por cobrar permite disponer de efectivo para cubrir gastos, invertir y mantener la estabilidad financiera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MejorarFlujoCajaContent />
    </>
  );
}
