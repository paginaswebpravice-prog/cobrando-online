import { Metadata } from "next";
import RecaudoFreelancersContent from "./RecaudoFreelancersContent";

export const metadata: Metadata = {
  title:
    "Cobrar clientes como freelancer en Colombia | Recuperar pagos atrasados",
  description:
    "¿Clientes que no pagan? Recupera pagos atrasados como freelancer en Colombia con estrategias profesionales de cobro.",

  keywords: [
    "cobrar clientes freelancer Colombia",
    "freelancers pagos atrasados",
    "clientes morosos freelancer",
    "recuperar dinero freelancer",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobrar-clientes-freelancer",
  },

  openGraph: {
    title: "Cobrar clientes como freelancer en Colombia",
    description:
      "Recupera pagos atrasados como freelancer sin conflictos y de forma profesional.",
    url: "https://cobrandoonline.com/blog/cobrar-clientes-freelancer",
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
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Cobrar clientes como freelancer en Colombia",
      description:
        "Guía para freelancers sobre cómo recuperar pagos atrasados.",
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
        "@id": "https://cobrandoonline.com/blog/cobrar-clientes-freelancer",
      },
      datePublished: "2025-01-01",
      dateModified: "2026-01-01",
      inLanguage: "es",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <RecaudoFreelancersContent />
    </>
  );
}
