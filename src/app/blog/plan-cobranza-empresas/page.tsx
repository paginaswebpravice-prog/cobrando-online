import { Metadata } from "next";
import PlanCobranzaEmpresas from "./PlanCobranzaEmpresas";

export const metadata: Metadata = {
  title:
    "Plan de cobranza para empresas: cómo crear una estrategia efectiva de recuperación de cartera (Guía 2026)",

  description:
    "Aprende cómo diseñar un plan de cobranza para empresas paso a paso. Descubre estrategias, indicadores, cronogramas y acciones para reducir la cartera vencida y mejorar el flujo de caja.",

  keywords: [
    "plan de cobranza",
    "plan de cobranza para empresas",
    "plan de cobranza mensual",
    "estrategia de cobranza",
    "proceso de cobranza",
    "cronograma de cobranza",
    "recuperación de cartera",
    "gestión de cartera",
    "indicadores de cobranza",
    "cartera vencida",
    "cobranza empresarial",
    "flujo de caja",
    "software de cobranza",
    "Cobrando Online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/plan-cobranza-empresas",
  },

  openGraph: {
    title:
      "Plan de cobranza para empresas: guía para recuperar cartera y mejorar el flujo de caja",

    description:
      "Descubre cómo crear un plan de cobranza eficiente, definir indicadores, automatizar seguimientos y recuperar cartera sin afectar la relación con tus clientes.",

    url: "https://cobrandoonline.com/blog/plan-cobranza-empresas",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Plan de cobranza para empresas: guía completa 2026",

    description:
      "Aprende a estructurar un plan de cobranza efectivo para reducir la morosidad y aumentar la recuperación de cartera.",
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
                "Plan de cobranza para empresas: cómo crear una estrategia efectiva de recuperación de cartera",

              alternativeHeadline:
                "Guía para elaborar un plan de cobranza mensual y reducir la cartera vencida",

              description:
                "Aprende paso a paso cómo diseñar un plan de cobranza empresarial con indicadores, cronogramas, segmentación de clientes y estrategias para mejorar el recaudo.",

              keywords: [
                "plan de cobranza",
                "plan de cobranza mensual",
                "estrategia de cobranza",
                "recuperación de cartera",
                "gestión de cartera",
                "indicadores de cobranza",
                "flujo de caja",
                "cartera vencida",
              ],

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
                "@id": "https://cobrandoonline.com/blog/plan-cobranza-empresas",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-28",

              inLanguage: "es",

              wordCount: "2800",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un plan de cobranza para empresas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es una estrategia organizada que define las acciones, responsables, cronogramas e indicadores para recuperar oportunamente las cuentas por cobrar y disminuir la cartera vencida.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo hacer un plan de cobranza efectivo?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir segmentación de clientes, políticas de crédito, cronograma de seguimiento, canales de comunicación, indicadores de recuperación y protocolos para escalar los casos críticos.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cada cuánto debe actualizarse un plan de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es revisarlo mensualmente para ajustar prioridades, evaluar resultados y corregir estrategias según el comportamiento de la cartera.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores debe medir un plan de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre los principales indicadores se encuentran el porcentaje de recuperación, DSO, rotación de cartera, acuerdos de pago cumplidos, cartera vencida y recaudo mensual.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo ayuda un software de cobranza al plan mensual?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite automatizar recordatorios, segmentar clientes, generar reportes, programar seguimientos y controlar toda la gestión de cartera desde una única plataforma.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PlanCobranzaEmpresas />
    </>
  );
}
