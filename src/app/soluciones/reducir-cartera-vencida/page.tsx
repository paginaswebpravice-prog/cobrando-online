import { Metadata } from "next";
import ReducirCarteraMorosaContent from "./ReducirCarteraMorosaContent";

export const metadata: Metadata = {
  title:
    "Cómo reducir cartera morosa en Colombia (rápido) | Mejora tu flujo de caja hoy",
  description:
    "¿Alta cartera morosa? Reduce deudas y mejora tu flujo de caja en Colombia con estrategias efectivas de cobro, prevención y gestión financiera.",

  keywords: [
    "reducir cartera morosa",
    "cartera vencida Colombia",
    "gestión de cartera",
    "cobro de deudas",
    "mejorar flujo de caja",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/servicios/reducir-cartera-morosa",
  },

  openGraph: {
    title: "Reducir cartera morosa en Colombia rápido | Más recaudo y liquidez",
    description:
      "Estrategias probadas para reducir cartera morosa, aumentar recaudo y mejorar flujo de caja en empresas en Colombia.",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Reducción de cartera morosa en Colombia",
            description:
              "Servicio especializado en reducción de cartera morosa mediante estrategias de cobro, prevención y gestión financiera.",
            areaServed: "Colombia",
            provider: {
              "@type": "Organization",
              name: "Cobrando Online",
            },
          }),
        }}
      />

      <ReducirCarteraMorosaContent />
    </>
  );
}
