import { Metadata } from "next";
import RecaudoFreelancersContent from "./RecaudoFreelancersContent";

export const metadata: Metadata = {
  title:
    "Cómo cobrar clientes como freelancer en Colombia | Recupera pagos atrasados hoy",
  description:
    "¿Clientes que no pagan? Aprende cómo cobrar y recuperar pagos atrasados como freelancer en Colombia sin conflictos y de forma profesional.",

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
    title:
      "Cómo cobrar clientes como freelancer en Colombia | Recupera tu dinero hoy",
    description:
      "Guía práctica para freelancers: cobra clientes morosos y recupera pagos atrasados sin afectar tu reputación.",
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
      headline:
        "Cómo cobrar clientes como freelancer en Colombia y recuperar pagos atrasados",
      description:
        "Guía práctica para freelancers sobre cómo cobrar clientes morosos y recuperar pagos pendientes en Colombia.",
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
