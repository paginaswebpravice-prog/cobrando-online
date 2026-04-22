import { Metadata } from "next";
import RecordatoriosAutomaticosContent from "./RecordatoriosAutomaticosContent";

export const metadata: Metadata = {
  title:
    "Recordatorios automáticos de pago en Colombia para cobrar más rápido (y reducir mora)",
  description:
    "Automatiza recordatorios de pago en Colombia y cobra más rápido. Reduce la cartera vencida, mejora el recaudo y optimiza tu flujo de caja con cobros automáticos.",

  keywords: [
    "recordatorios de pago automáticos Colombia",
    "automatización de cobros",
    "cartera vencida Colombia",
    "gestión de cartera automática",
    "cobranza automatizada empresas",
    "recordatorios de pago WhatsApp",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/servicios/recordatorios-automaticos-pago",
  },

  openGraph: {
    title:
      "Recordatorios automáticos de pago en Colombia para cobrar más rápido",
    description:
      "Automatiza tus cobros, reduce la mora y mejora tu flujo de caja con recordatorios automáticos de pago en Colombia.",
    url: "https://cobrandoonline.com/servicios/recordatorios-automaticos-pago",
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
  return <RecordatoriosAutomaticosContent />;
}
