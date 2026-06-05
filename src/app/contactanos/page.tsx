// page.tsx o Contacto.tsx
import Script from "next/script";
import ContactoContent from "./ContactoContent";

export const metadata = {
  title:
    "Contacto | Recuperación de Cartera y Cobro Jurídico en Bogotá Colombia",
  description:
    "Contacta expertos en recuperación de cartera, cobro prejurídico y cobro jurídico en Bogotá y toda Colombia. Ayudamos a empresas, clínicas, IPS y PYMES a recuperar cartera vencida.",
  keywords: [
    "recuperación de cartera Colombia",
    "cobro jurídico Bogotá",
    "cobranza empresarial Colombia",
    "recuperar cartera vencida",
    "abogados de cobranza Bogotá",
    "cobro prejurídico Colombia",
    "recuperación de cartera IPS",
    "cobro de facturas vencidas",
    "empresa de cobranza Bogotá",
    "gestión de cartera Colombia",
  ],
  alternates: {
    canonical: "https://cobrandoonline.com/contactanos",
  },
  openGraph: {
    title: "Contacto | Recuperación de Cartera y Cobro Jurídico en Colombia",
    description:
      "Asesoría profesional para recuperación de cartera, cobro prejurídico y jurídico en Bogotá y toda Colombia.",
    url: "https://cobrandoonline.com/contactanos",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <>
      <ContactoContent />

      {/* CONTACT PAGE SCHEMA */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Cobrando Online",
            url: "https://cobrandoonline.com/contactanos",
            description:
              "Página de contacto para servicios de recuperación de cartera, cobro jurídico y cobranza empresarial en Bogotá y Colombia.",
            inLanguage: "es",
            mainEntity: {
              "@type": "Organization",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
              logo: "https://cobrandoonline.com/logo.png",
              telephone: "+57 323 437 2766",
              email: "info.pravice@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 98 # 22 - 64 Oficina 716",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Colombia",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  telephone: "+57 323 437 2766",
                  areaServed: "CO",
                  availableLanguage: ["Spanish"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+57 323 437 2766",
                  areaServed: "CO",
                  availableLanguage: ["Spanish"],
                },
              ],
            },
          }),
        }}
      />

      {/* LOCAL BUSINESS SCHEMA */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Cobrando Online",
            image: "https://cobrandoonline.com/logo.png",
            url: "https://cobrandoonline.com",
            telephone: "+57 323 437 2766",
            email: "info.pravice@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle 98 # 22 - 64 Oficina 716",
              addressLocality: "Bogotá",
              addressRegion: "Bogotá DC",
              postalCode: "110221",
              addressCountry: "CO",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 4.6845,
              longitude: -74.0568,
            },
            openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
            areaServed: [
              "Bogotá",
              "Medellín",
              "Cali",
              "Barranquilla",
              "Colombia",
            ],
            priceRange: "$$",
            description:
              "Servicios de recuperación de cartera, cobro prejurídico y cobro jurídico para empresas en Bogotá y Colombia.",
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema-contacto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué servicios de recuperación de cartera ofrecen en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofrecemos recuperación de cartera, cobro prejurídico, cobro jurídico, acuerdos de pago y gestión de cobranza para empresas en Bogotá y toda Colombia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Atienden empresas fuera de Bogotá?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Atendemos empresas, clínicas, IPS y negocios en diferentes ciudades de Colombia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo contactar a Cobrando Online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Puedes contactarnos vía WhatsApp, llamada telefónica o correo electrónico para recibir asesoría sobre recuperación de cartera.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
