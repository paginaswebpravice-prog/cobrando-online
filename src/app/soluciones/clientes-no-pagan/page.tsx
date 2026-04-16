import { Metadata } from "next";
import ClientesNoPaganContent from "./ClientesNoPaganContent";

export const metadata: Metadata = {
  title:
    "Clientes que no pagan en Colombia | Cómo recuperar deudas efectivamente",
  description:
    "¿Tienes clientes que no pagan? Recupera tu dinero en Colombia con estrategias de cobro profesional, negociación y acciones legales efectivas.",
  keywords: [
    "clientes que no pagan",
    "recuperar deudas Colombia",
    "cobro de cartera Bogotá",
    "deudores morosos",
    "cobrar clientes",
  ],
  alternates: {
    canonical: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
  },
  openGraph: {
    title:
      "Clientes que no pagan en Colombia | Recuperación de cartera profesional",
    description:
      "Recupera tu dinero de clientes morosos en Colombia con estrategias de cobro estructurado, negociación y acciones legales.",
    url: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
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
                "Clientes que no pagan en Colombia | Recuperación de cartera",
              description:
                "Estrategias profesionales para recuperar deudas de clientes morosos en Colombia mediante cobranza estructurada y legal.",
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
                  "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué hacer con clientes que no pagan en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aplicar estrategias de cobro estructurado, negociación o acciones legales según el caso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se pueden recuperar deudas de clientes morosos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, mediante gestión profesional de cartera, seguimiento y procesos prejurídicos o jurídicos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ClientesNoPaganContent />
    </>
  );
}
