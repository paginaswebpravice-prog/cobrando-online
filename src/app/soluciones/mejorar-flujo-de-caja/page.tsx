import { Metadata } from "next";
import MejorarFlujoCajaContent from "./MejorarFlujoCajaContent";

export const metadata: Metadata = {
  title:
    "Mejorar flujo de caja en Colombia | Aumenta liquidez y control financiero",
  description:
    "Aprende cómo mejorar el flujo de caja de tu empresa en Colombia con estrategias de cobro, control de cartera y optimización financiera.",

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
      "Mejorar flujo de caja en Colombia | Aumenta liquidez y control financiero",
    description:
      "Optimiza la liquidez de tu empresa en Colombia con estrategias profesionales de recaudo y control de cartera.",
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
              headline: "Mejorar flujo de caja en Colombia",
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
