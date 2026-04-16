import { Metadata } from "next";
import RecuperacionCarteraPymesContent from "./RecuperacionCarteraPymesContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para PYMES en Colombia: estrategias efectivas",
  description:
    "Aprende cómo hacer recuperación de cartera para PYMES en Colombia, reducir la mora y mejorar el flujo de caja con estrategias efectivas.",

  keywords: [
    "recuperacion de cartera pymes",
    "cobro de cartera pymes Colombia",
    "cartera vencida pymes",
    "estrategias de cobranza pymes",
    "gestion de cartera pequeñas empresas",
    "reducir mora empresas Colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",
  },

  openGraph: {
    title: "Recuperación de cartera para PYMES en Colombia",
    description:
      "Descubre cómo las PYMES pueden mejorar su liquidez con una gestión efectiva de recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",
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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Recuperación de cartera para PYMES",
              description:
                "Conoce cómo las PYMES en Colombia pueden gestionar la recuperación de cartera para mejorar su liquidez y reducir la mora.",
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
                  "https://cobrandoonline.com/blog/recuperacion-cartera-pymes",
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
                  name: "¿Por qué la mora afecta más a las PYMES?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque dependen más del flujo de caja diario y tienen menor capacidad financiera para absorber retrasos en los pagos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera en una PYME?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando políticas de crédito claras, seguimiento constante y estrategias de cobro prejurídico oportunas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraPymesContent />
    </>
  );
}
