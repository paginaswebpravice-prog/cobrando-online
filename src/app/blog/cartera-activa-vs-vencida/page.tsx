import { Metadata } from "next";
import CarteraActivaVsVencida from "./CarteraActivaVsVencida";

export const metadata: Metadata = {
  title:
    "Cartera activa vs cartera vencida: diferencias y ejemplos | Cobrando Online",

  description:
    "Conoce las diferencias entre cartera activa y cartera vencida, cómo impactan la liquidez empresarial y qué hacer para mantener una cartera saludable.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",
  },

  openGraph: {
    title: "Cartera activa vs cartera vencida: diferencias clave",
    description:
      "Aprende qué distingue a la cartera activa de la cartera vencida y cómo influyen en la gestión financiera empresarial.",
    url: "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Cartera activa vs cartera vencida: diferencias y su impacto en las empresas",
              description:
                "Guía completa para entender la diferencia entre cartera activa y cartera vencida.",
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
                  "https://cobrandoonline.com/blog/cartera-activa-vs-vencida",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera activa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de cuentas por cobrar que aún se encuentran dentro del plazo de pago acordado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son las obligaciones que ya superaron la fecha límite de pago y presentan mora.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante controlar la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque una cartera vencida elevada puede afectar la liquidez, incrementar riesgos financieros y reducir la rentabilidad de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraActivaVsVencida />
    </>
  );
}
