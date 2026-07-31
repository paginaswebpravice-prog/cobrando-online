import { Metadata } from "next";
import SeguimientoRecuperacionCartera from "./SeguimientoRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Seguimiento de recuperación de cartera: 15 estrategias para cobrar más rápido | Cobrando Online",

  description:
    "Aprende cómo hacer seguimiento a la recuperación de cartera, reducir la mora, aumentar el recaudo y mejorar el flujo de caja con procesos y herramientas efectivas.",

  keywords: [
    "seguimiento recuperación de cartera",
    "seguimiento cartera",
    "cómo recuperar cartera vencida",
    "gestión de cartera empresas",
    "seguimiento cobranza",
    "automatización de cartera",
    "control de cartera vencida",
    "recuperación de cartera empresarial",
    "software seguimiento cartera",
    "recaudo empresas Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
  },

  openGraph: {
    title:
      "Seguimiento de recuperación de cartera: cómo cobrar más rápido y reducir la mora",

    description:
      "Descubre cómo las empresas aumentan el recaudo mediante estrategias de seguimiento, automatización y control de cartera.",

    url: "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",

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
              headline:
                "Seguimiento de recuperación de cartera: estrategias para aumentar el recaudo y reducir la mora",

              description:
                "Guía completa para realizar seguimiento a clientes, acuerdos de pago y cartera vencida mediante procesos, indicadores y automatización.",

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
                  "https://cobrandoonline.com/blog/seguimiento-recuperacion-cartera",
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
                  name: "¿Por qué es importante el seguimiento en la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque aumenta la probabilidad de pago, reduce la mora y mejora la liquidez de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se debe hacer seguimiento a un cliente moroso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Antes del vencimiento con recordatorios y después del vencimiento con gestión constante hasta el pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cada cuánto debe hacerse seguimiento a una cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende de la política de crédito de cada empresa, pero lo recomendable es realizar contactos periódicos desde antes del vencimiento y mantener una frecuencia constante mientras exista saldo pendiente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten medir el seguimiento de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los principales son porcentaje de recuperación, DSO, rotación de cartera, cartera vencida, cumplimiento de acuerdos de pago y tiempo promedio de recaudo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede automatizar el seguimiento de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Actualmente existen plataformas que permiten programar recordatorios, registrar comunicaciones, generar alertas y controlar automáticamente el estado de cada obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué errores deben evitarse durante el seguimiento de clientes morosos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No documentar las comunicaciones, contactar demasiado tarde al cliente, no confirmar acuerdos de pago y utilizar procesos diferentes para cada asesor.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <SeguimientoRecuperacionCartera />
    </>
  );
}
