import { Metadata } from "next";
import RecuperarCarteraContent from "./RecuperarCarteraContent";

export const metadata: Metadata = {
  title: "Recuperar cartera vencida en Colombia | Cobro prejurídico y judicial",
  description:
    "Recupera cartera vencida en Colombia con estrategias profesionales de cobro prejurídico y judicial. Mejora tu flujo de caja y reduce la mora.",

  keywords: [
    "recuperar cartera Colombia",
    "cobro prejurídico Colombia",
    "cobranza judicial Colombia",
    "cartera vencida Bogotá",
    "recuperación de deudas Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/recuperar-cartera",
  },

  openGraph: {
    title:
      "Recuperar cartera vencida en Colombia | Cobro prejurídico y judicial",
    description:
      "Recupera deudas en Colombia con estrategias profesionales de cobro prejurídico y judicial. Mejora tu flujo de caja.",
    url: "https://cobrandoonline.com/servicios/recuperar-cartera",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Recuperación de cartera en Colombia",
            description:
              "Servicio de recuperación de cartera vencida en Colombia mediante cobro prejurídico y judicial.",
            areaServed: "Colombia",
            provider: {
              "@type": "Organization",
              name: "Cobrando Online",
            },
          }),
        }}
      />

      <RecuperarCarteraContent />
    </>
  );
}
