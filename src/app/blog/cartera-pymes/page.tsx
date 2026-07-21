import { Metadata } from "next";
import CarteraPymes from "./CarteraPymes";

export const metadata: Metadata = {
  metadataBase: new URL("https://cobrandoonline.com"),

  title:
    "Cartera en PYMES: cómo reducir la cartera vencida y recuperar pagos más rápido (Guía 2026)",

  description:
    "Aprende cómo gestionar la cartera en PYMES con estrategias para reducir la morosidad, recuperar pagos pendientes, mejorar el flujo de caja y aumentar la liquidez de tu empresa sin afectar la relación con tus clientes.",

  keywords: [
    "cartera pymes",
    "cartera en pymes",
    "gestión de cartera pymes",
    "recuperación de cartera pymes",
    "cobranza para pymes",
    "cartera vencida pymes",
    "cuentas por cobrar pymes",
    "flujo de caja pymes",
    "morosidad empresas",
    "cobranza empresarial",
    "cobro prejurídico",
    "recuperación de cartera colombia",
    "gestión de cuentas por cobrar",
    "cartera empresarial",
    "software de cobranza",
    "software cartera",
    "seguimiento de cartera",
    "acuerdos de pago",
    "control de cartera",
    "cobrando online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-pymes",
  },

  authors: [
    {
      name: "Cobrando Online",
      url: "https://cobrandoonline.com",
    },
  ],

  category: "Recuperación de Cartera",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    locale: "es_CO",
    url: "https://cobrandoonline.com/blog/cartera-pymes",
    siteName: "Cobrando Online",

    title:
      "Cartera en PYMES: cómo recuperar pagos pendientes y reducir la morosidad",

    description:
      "Descubre cómo las pequeñas y medianas empresas pueden mejorar la recuperación de cartera, reducir la mora y fortalecer su flujo de caja mediante procesos de cobranza efectivos.",

    images: [
      {
        url: "/images/blog/cartera-pymes.webp",
        width: 1200,
        height: 630,
        alt: "Gestión y recuperación de cartera para PYMES en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cartera en PYMES: estrategias para recuperar cartera y mejorar la liquidez",

    description:
      "Guía completa sobre gestión de cartera para pequeñas y medianas empresas en Colombia.",

    images: ["/images/blog/cartera-pymes.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              "@id": "https://cobrandoonline.com/blog/cartera-pymes#article",

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://cobrandoonline.com/blog/cartera-pymes",
              },

              headline:
                "Cartera en PYMES: cómo reducir la cartera vencida y recuperar pagos más rápido",

              alternativeHeadline:
                "Guía para gestionar la cartera y mejorar el flujo de caja en pequeñas y medianas empresas",

              description:
                "Aprende cómo administrar la cartera en PYMES mediante estrategias de prevención, seguimiento, negociación y recuperación para disminuir la morosidad y fortalecer la liquidez empresarial.",

              image: [
                "https://cobrandoonline.com/images/blog/cartera-pymes.webp",
              ],

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },

              publisher: {
                "@type": "Organization",

                name: "Cobrando Online",

                url: "https://cobrandoonline.com",

                logo: {
                  "@type": "ImageObject",

                  url: "https://cobrandoonline.com/logo.png",
                },
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",

              isAccessibleForFree: true,

              articleSection: [
                "Recuperación de Cartera",
                "Cobranza Empresarial",
                "PYMES",
                "Finanzas Empresariales",
              ],

              keywords: [
                "cartera pymes",
                "recuperación de cartera",
                "cartera vencida",
                "gestión de cartera",
                "cobranza empresarial",
                "cuentas por cobrar",
                "flujo de caja",
                "morosidad",
                "acuerdos de pago",
                "cobro prejurídico",
                "seguimiento de cartera",
                "pequeñas empresas",
                "medianas empresas",
              ],

              wordCount: "3200",

              about: [
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "Cartera vencida",
                },
                {
                  "@type": "Thing",
                  name: "PYMES",
                },
              ],

              mentions: [
                {
                  "@type": "Thing",
                  name: "Flujo de caja",
                },
                {
                  "@type": "Thing",
                  name: "Liquidez",
                },
                {
                  "@type": "Thing",
                  name: "Acuerdo de pago",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza preventiva",
                },
                {
                  "@type": "Thing",
                  name: "Cobro prejurídico",
                },
                {
                  "@type": "Thing",
                  name: "Cobro jurídico",
                },
                {
                  "@type": "Thing",
                  name: "Cuentas por cobrar",
                },
              ],

              audience: {
                "@type": "Audience",

                audienceType:
                  "Empresarios, PYMES, gerentes financieros, directores administrativos y responsables de cartera",
              },

              educationalUse: "Información empresarial",

              learningResourceType: "Guía",

              speakable: {
                "@type": "SpeakableSpecification",

                cssSelector: [".intro", "h1", "h2"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              "@id": "https://cobrandoonline.com/blog/cartera-pymes#breadcrumb",

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
                  name: "Blog",
                  item: "https://cobrandoonline.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Recuperación de Cartera",
                  item: "https://cobrandoonline.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Cartera en PYMES",
                  item: "https://cobrandoonline.com/blog/cartera-pymes",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",

              "@id": "https://cobrandoonline.com/blog/cartera-pymes#webpage",

              url: "https://cobrandoonline.com/blog/cartera-pymes",

              name: "Cartera en PYMES: cómo reducir la cartera vencida y recuperar pagos más rápido",

              headline: "Recuperación de cartera para PYMES en Colombia",

              description:
                "Guía completa sobre gestión de cartera para pequeñas y medianas empresas. Aprende cómo reducir la morosidad, mejorar el flujo de caja y aumentar la recuperación de cuentas por cobrar.",

              inLanguage: "es-CO",

              isPartOf: {
                "@type": "WebSite",

                "@id": "https://cobrandoonline.com/#website",
              },

              about: [
                {
                  "@type": "Thing",
                  name: "Recuperación de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Gestión de cartera",
                },
                {
                  "@type": "Thing",
                  name: "Cobranza empresarial",
                },
                {
                  "@type": "Thing",
                  name: "PYMES",
                },
                {
                  "@type": "Thing",
                  name: "Cartera vencida",
                },
              ],

              primaryImageOfPage: {
                "@type": "ImageObject",

                url: "https://cobrandoonline.com/images/blog/cartera-pymes.webp",

                width: 1200,

                height: 630,
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              breadcrumb: {
                "@id":
                  "https://cobrandoonline.com/blog/cartera-pymes#breadcrumb",
              },

              publisher: {
                "@id": "https://cobrandoonline.com/#organization",
              },

              mainEntity: {
                "@id": "https://cobrandoonline.com/blog/cartera-pymes#article",
              },

              significantLink: [
                "https://cobrandoonline.com/",
                "https://cobrandoonline.com/blog",
                "https://cobrandoonline.com/servicios",
              ],

              potentialAction: {
                "@type": "ReadAction",

                target: "https://cobrandoonline.com/blog/cartera-pymes",
              },
            },
          ]),
        }}
      />

      <CarteraPymes />
    </>
  );
}
