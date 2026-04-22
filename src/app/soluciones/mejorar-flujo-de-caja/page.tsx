import { Metadata } from "next";
import MejorarFlujoCajaContent from "./MejorarFlujoCajaContent";

export const metadata: Metadata = {
  title:
    "¿Problemas de liquidez? Mejora tu flujo de caja en Colombia rápido y efectivo",
  description:
    "Aprende cómo mejorar el flujo de caja de tu empresa en Colombia con estrategias reales de cobro, control de cartera y aumento de liquidez.",

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
      "¿Cómo mejorar el flujo de caja en Colombia? Aumenta tu liquidez hoy",
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
              "@type": "Article",
              headline:
                "¿Cómo mejorar el flujo de caja en Colombia y aumentar la liquidez?",
              description:
                "Estrategias para mejorar liquidez y flujo de caja en empresas en Colombia mediante gestión de cartera y recaudo eficiente.",
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
                  "https://cobrandoonline.com/servicios/mejorar-flujo-de-caja",
              },
              inLanguage: "es",
            },
          ]),
        }}
      />

      <MejorarFlujoCajaContent />
    </>
  );
}
