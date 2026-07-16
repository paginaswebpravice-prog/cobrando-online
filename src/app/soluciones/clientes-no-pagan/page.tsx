import { Metadata } from "next";
import ClientesNoPaganContent from "./ClientesNoPaganContent";

export const metadata: Metadata = {
  title:
    "¿Clientes no pagan sus facturas? Recupera tu dinero en Colombia | Cobrando Online",
  description:
    "¿Tus clientes no pagan a tiempo? Descubre cómo recuperar facturas vencidas mediante cobranza profesional, cobro prejurídico y estrategias efectivas para empresas en Colombia.",

  keywords: [
    "clientes que no pagan",
    "clientes morosos",
    "cliente no paga factura",
    "cómo cobrar una factura vencida",
    "recuperar cartera",
    "recuperar deudas Colombia",
    "cobro prejurídico",
    "cobro jurídico",
    "cobranza empresarial",
    "cartera vencida",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
  },

  openGraph: {
    title:
      "¿Tus clientes no pagan? Recupera facturas vencidas con expertos en cobranza",
    description:
      "Ayudamos a empresas en Colombia a recuperar facturas vencidas, reducir la mora y mejorar el flujo de caja mediante cobranza profesional.",
    url: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
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
              "@type": "WebPage",
              "@id":
                "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
              url: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
              name: "Clientes que no pagan en Colombia | Recuperación de cartera",
              description:
                "Soluciones para empresas con clientes morosos en Colombia mediante cobro prejurídico, recuperación de cartera y procesos jurídicos.",
              inLanguage: "es-CO",
              isPartOf: {
                "@type": "WebSite",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Recuperación de cartera para clientes que no pagan",
              description:
                "Servicio especializado para recuperar cartera vencida de clientes morosos en Colombia mediante negociación, cobro prejurídico y cobro jurídico.",
              provider: {
                "@type": "Organization",
                name: "Cobrando Online",
                url: "https://cobrandoonline.com",
                logo: "https://cobrandoonline.com/logo.png",
              },
              serviceType: [
                "Recuperación de cartera",
                "Cobro prejurídico",
                "Cobro jurídico",
                "Cobranza empresarial",
              ],
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Empresas, PYMES, IPS, clínicas y organizaciones",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "0",
                priceCurrency: "COP",
                description:
                  "Primera orientación para evaluar la estrategia de recuperación de cartera.",
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
                  name: "Clientes que no pagan",
                  item: "https://cobrandoonline.com/servicios/clientes-que-no-pagan",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué hacer cuando un cliente no paga una factura en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lo recomendable es iniciar una gestión de cobro organizada, documentar las comunicaciones, proponer acuerdos de pago y, cuando sea necesario, avanzar hacia un cobro prejurídico o jurídico.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es recomendable iniciar el cobro prejurídico tan pronto existan incumplimientos reiterados para aumentar las probabilidades de recuperación antes de acudir a un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Siempre es necesario demandar a un cliente moroso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Muchas obligaciones pueden recuperarse mediante negociación y gestión profesional de cartera sin necesidad de llegar a un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos ayudan a recuperar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Facturas, contratos, órdenes de compra, correos electrónicos, cuentas de cobro, pagarés y demás soportes que demuestren la existencia de la obligación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Atienden empresas de todo Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Cobrando Online presta servicios de recuperación de cartera para empresas en Bogotá y en cualquier ciudad de Colombia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de empresas pueden solicitar el servicio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabajamos con PYMES, empresas comerciales, constructoras, IPS, clínicas, proveedores y organizaciones que necesitan recuperar cartera vencida.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ClientesNoPaganContent />
    </>
  );
}
