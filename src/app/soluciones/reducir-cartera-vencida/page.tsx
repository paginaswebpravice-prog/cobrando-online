import { Metadata } from "next";
import ReducirCarteraMorosaContent from "./ReducirCarteraMorosaContent";

export const metadata: Metadata = {
  title:
    "Reduce la cartera morosa de tu empresa | Recupera más dinero y mejora tu liquidez",
  description:
    "¿Tu empresa tiene demasiada cartera vencida? Descubre cómo reducir la cartera morosa, aumentar el recaudo, recuperar clientes morosos y mejorar el flujo de caja con estrategias efectivas en Colombia.",

  keywords: [
    "reducir cartera morosa",
    "cómo reducir cartera morosa",
    "cartera vencida",
    "disminuir cartera vencida",
    "reducir mora",
    "clientes morosos",
    "recuperar cartera",
    "gestión de cartera",
    "gestión de cobranza",
    "recuperar liquidez",
    "mejorar recaudo",
    "cobro empresarial",
    "cobro prejurídico",
    "cuentas por cobrar",
    "control cartera",
    "flujo de caja empresa",
    "empresa con cartera morosa",
    "morosidad clientes",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/reducir-cartera-morosa",
  },

  openGraph: {
    title: "Reduce la cartera morosa y mejora el flujo de caja de tu empresa",

    description:
      "Conoce estrategias para disminuir la cartera vencida, recuperar pagos pendientes y aumentar el recaudo sin afectar la relación con tus clientes.",

    url: "https://cobrandoonline.com/servicios/reducir-cartera-morosa",
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
              serviceType: "Reducción de cartera morosa",
              name: "Servicio para reducir cartera morosa en empresas de Colombia",
              description:
                "Ayudamos a las empresas colombianas a reducir la cartera vencida mediante estrategias de cobranza preventiva, prejurídica y jurídica para mejorar el flujo de caja.",
              provider: {
                "@type": "Organization",
                "@id": "https://cobrandoonline.com/#organization",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Empresas",
              },
              category: "Gestión de cartera",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "0",
                priceCurrency: "COP",
              },
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
                  name: "Servicios",
                  item: "https://cobrandoonline.com/servicios",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Reducir cartera morosa",
                  item: "https://cobrandoonline.com/servicios/reducir-cartera-morosa",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://cobrandoonline.com/#organization",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
              logo: "https://cobrandoonline.com/logo.png",
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-323-437-2766",
                contactType: "customer service",
                areaServed: "CO",
                availableLanguage: "Spanish",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera morosa en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mejor forma es implementar políticas de crédito, seguimiento permanente, gestión preventiva, negociación con clientes y procesos de cobranza especializados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué porcentaje de cartera vencida es saludable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende del sector económico, pero entre menor sea el porcentaje de cartera vencida, mayor será la liquidez y estabilidad financiera de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar el recaudo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento oportuno, recordatorios automáticos, negociación, gestión profesional y acciones jurídicas cuando sean necesarias.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La cartera morosa afecta el flujo de caja?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una cartera vencida alta reduce la liquidez, limita el crecimiento de la empresa y aumenta el riesgo financiero.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Cómo reducir la cartera morosa en Colombia y mejorar el flujo de caja",
              description:
                "Guía completa para disminuir la cartera vencida, aumentar el recaudo y mejorar la liquidez empresarial.",
              image: "https://cobrandoonline.com/og/reducir-cartera-morosa.jpg",
              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cobrandoonline.com/logo.png",
                },
              },
              inLanguage: "es-CO",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/servicios/reducir-cartera-morosa",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://cobrandoonline.com",
              name: "Cobrando Online",
              inLanguage: "es-CO",
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
            },
          ]),
        }}
      />

      <ReducirCarteraMorosaContent />
    </>
  );
}
