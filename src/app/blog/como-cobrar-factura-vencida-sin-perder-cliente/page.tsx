import { Metadata } from "next";
import CobrarFacturaVencida from "./CobrarFacturaVencida";

export const metadata: Metadata = {
  title: "¿Cómo cobrar una factura vencida sin perder al cliente en Colombia?",
  description:
    "Aprende estrategias efectivas para cobrar facturas vencidas en Colombia sin afectar la relación comercial con tus clientes.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",
  },

  openGraph: {
    title: "Cómo cobrar una factura vencida sin perder al cliente",
    description:
      "Conoce estrategias de cobranza efectivas para recuperar pagos pendientes sin afectar la relación comercial.",
    url: "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",
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
                "¿Cómo cobrar una factura vencida sin perder al cliente?",
              description:
                "Guía para cobrar facturas vencidas en Colombia manteniendo una buena relación comercial.",
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
                  "https://cobrandoonline.com/blog/como-cobrar-factura-vencida-sin-perder-cliente",
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
                  name: "¿Cómo cobrar una factura vencida sin perder al cliente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mejor forma es mantener una comunicación profesional, hacer seguimiento constante y negociar acuerdos de pago cuando sea necesario.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el cliente incumple acuerdos, evita responder o mantiene la deuda por largos periodos de tiempo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué errores se deben evitar en la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Esperar demasiado tiempo, usar mensajes agresivos y no documentar acuerdos son errores frecuentes en la recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobrarFacturaVencida />
    </>
  );
}
