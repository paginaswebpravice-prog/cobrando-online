import { Metadata } from "next";
import ModeloCartaCobro from "./ModeloCartaCobro";

export const metadata: Metadata = {
  title: "Modelos de carta de cobro: ejemplos para recuperación de cartera",
  description:
    "Descubre diferentes modelos de carta de cobro para recordar pagos, gestionar cartera vencida y mejorar la recuperación de cartera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/modelo-carta-cobro",
  },

  openGraph: {
    title: "Modelos de carta de cobro para empresas",
    description:
      "Formatos y ejemplos de cartas de cobranza para gestionar cuentas por cobrar de manera profesional.",
    url: "https://cobrandoonline.com/blog/modelo-carta-cobro",
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
                "Modelos de carta de cobro para recuperación de cartera",
              description:
                "Ejemplos y formatos de cartas de cobro para empresas y procesos de recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/modelo-carta-cobro",
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
                  name: "¿Qué es una carta de cobro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una comunicación formal utilizada para informar y solicitar el pago de obligaciones pendientes a clientes o deudores.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir una carta de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir datos del cliente, valor adeudado, fecha de vencimiento, información de contacto y una solicitud clara de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Las cartas de cobro tienen validez como soporte?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Las cartas ayudan a documentar las gestiones realizadas y pueden servir como evidencia dentro de procesos de recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ModeloCartaCobro />
    </>
  );
}
