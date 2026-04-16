import { Metadata } from "next";
import ProcesoCobroJuridicoContent from "./ProcesoCobroJuridicoContent";

export const metadata: Metadata = {
  title: "Proceso de cobro jurídico en Colombia: etapas, tiempos y requisitos",
  description:
    "Conoce el proceso de cobro jurídico en Colombia, sus etapas, tiempos y cómo recuperar deudas mediante demanda ejecutiva y embargos.",

  keywords: [
    "cobro juridico Colombia",
    "proceso ejecutivo Colombia",
    "demanda cobro de deudas",
    "embargos Colombia",
    "recuperacion de cartera juridica",
    "abogados cobro de cartera",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",
  },

  openGraph: {
    title: "Proceso de cobro jurídico en Colombia paso a paso",
    description:
      "Aprende cómo funciona el cobro jurídico en Colombia, desde la demanda hasta el embargo de bienes.",
    url: "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",
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
              headline: "Proceso de cobro jurídico en Colombia",
              description:
                "Conoce las etapas del proceso de cobro jurídico en Colombia, desde la demanda hasta el embargo y recuperación de la deuda.",
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
                  "https://cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia",
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
                  name: "¿Cuánto tarda un cobro jurídico en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puede tardar desde varios meses hasta algunos años dependiendo del juzgado, el tipo de proceso y las acciones del deudor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos se necesitan para iniciar cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente se requieren pagarés, facturas, contratos, letras de cambio o cualquier documento que respalde la deuda.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ProcesoCobroJuridicoContent />
    </>
  );
}
