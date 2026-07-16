import { Metadata } from "next";
import RecuperarCarteraContent from "./RecuperarCarteraContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera vencida en Colombia | Cobro prejurídico y jurídico para empresas",

  description:
    "¿Tu empresa tiene clientes morosos o facturas vencidas? Recupera cartera en Colombia mediante cobro prejurídico, negociación y cobro jurídico. Solicita asesoría especializada.",

  keywords: [
    "recuperación de cartera",
    "recuperar cartera vencida",
    "recuperación de cartera Colombia",
    "empresa de cobranza",
    "empresa de recuperación de cartera",
    "cobro prejurídico",
    "cobro jurídico",
    "gestión de cartera",
    "cobranza empresarial",
    "recuperación de deudas",
    "recuperar facturas vencidas",
    "clientes morosos",
    "cartera vencida Bogotá",
    "servicio de cobranza",
    "empresa de cobro de cartera",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/soluciones/recuperar-cartera-vencida",
  },

  openGraph: {
    title:
      "Recuperación de cartera vencida en Colombia para empresas | Cobrando Online",

    description:
      "Recupera facturas vencidas y deudas comerciales mediante cobro prejurídico y jurídico. Ayudamos a empresas de toda Colombia a mejorar su flujo de caja.",

    url: "https://cobrandoonline.com/soluciones/recuperar-cartera-vencida",

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
              name: "Servicio de recuperación de cartera vencida",

              serviceType: "Recuperación de cartera",

              description:
                "Servicio especializado en recuperación de cartera vencida mediante cobro prejurídico, negociación y cobro jurídico para empresas en Colombia.",

              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },

              provider: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },

              url: "https://cobrandoonline.com/soluciones/recuperar-cartera-vencida",
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
                  name: "Soluciones",
                  item: "https://cobrandoonline.com/soluciones",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Recuperar cartera vencida",
                  item: "https://cobrandoonline.com/soluciones/recuperar-cartera-vencida",
                },
              ],
            },
          ]),
        }}
      />

      <RecuperarCarteraContent />
    </>
  );
}
