import { Metadata } from "next";
import RecaudoEmpresasContent from "./RecaudoEmpresasContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera empresarial en Colombia | Recupera clientes morosos más rápido",
  description:
    "Recupera cartera vencida de empresas en Colombia mediante estrategias de cobranza preventiva, prejurídica y de seguimiento. Reduce la mora, mejora el flujo de caja y aumenta el recaudo sin afectar la relación con tus clientes.",

  keywords: [
    "recuperación de cartera empresas",
    "empresa de cobranza",
    "servicio de cobranza empresarial",
    "gestión de cartera",
    "recaudo empresarial",
    "clientes morosos",
    "cartera comercial",
    "cobranza B2B",
    "cobranza empresarial Colombia",
    "flujo de caja",
    "recuperar cartera vencida",
    "cómo recuperar cartera empresarial",
    "servicios de recaudo",
    "empresa de recuperación de cartera",
    "administración de cartera",
    "mora empresarial",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/sectores/recaudo-de-empresas",
  },

  openGraph: {
    title:
      "Recuperación de cartera para empresas en Colombia | Más recaudo, menos mora",
    description:
      "Aumenta el recaudo de tu empresa en Colombia con estrategias profesionales de cobranza y recuperación de cartera.",
    url: "https://cobrandoonline.com/sectores/recaudo-de-empresas",
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
              headline:
                "Recuperación de cartera para empresas en Colombia | Aumenta tu recaudo",
              description:
                "Estrategias profesionales de cobranza para empresas en Colombia que permiten aumentar recaudo y mejorar el flujo de caja.",
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
                  "https://cobrandoonline.com/sectores/recaudo-de-empresas",
              },
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué las empresas tienen problemas de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por falta de seguimiento, procesos de cobranza débiles o retrasos constantes en pagos de clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar el recaudo en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando procesos estructurados de cobranza, seguimiento y estrategias prejurídicas y jurídicas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo recuperar cartera vencida en empresas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La recuperación de cartera debe comenzar con seguimiento preventivo, comunicaciones oportunas, negociación de acuerdos de pago y, cuando sea necesario, gestión prejurídica o jurídica.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué empresas necesitan un servicio de recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Empresas B2B, distribuidores, proveedores, industrias, comercializadoras, empresas de servicios y cualquier organización que otorgue crédito a sus clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera vencida en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando políticas de crédito, seguimiento permanente, indicadores de recaudo, automatización y estrategias de cobranza escalonadas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué beneficios tiene tercerizar la gestión de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite aumentar el recaudo, reducir la mora, optimizar recursos internos y mejorar el flujo de caja sin incrementar la carga administrativa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipos de cartera pueden recuperarse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cartera corriente, cartera vencida, cartera castigada, cuentas por cobrar comerciales y obligaciones empresariales pendientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar el proceso de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lo recomendable es iniciar el seguimiento desde el primer incumplimiento para aumentar las probabilidades de recuperación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar el flujo de caja mediante la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Al recuperar cuentas por cobrar se incrementa la liquidez disponible para operar, invertir y cumplir obligaciones financieras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten medir el recaudo empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los principales indicadores están el DSO, porcentaje de recuperación, antigüedad de cartera, índice de mora y rotación de cartera.",
                  },
                },
              ],
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
                  name: "Sectores",
                  item: "https://cobrandoonline.com/sectores",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Recaudo de empresas",
                  item: "https://cobrandoonline.com/sectores/recaudo-de-empresas",
                },
              ],
            },
            {
              "@type": "WebPage",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", "h2", ".description"],
              },
            },
          ]),
        }}
      />

      <RecaudoEmpresasContent />
    </>
  );
}
