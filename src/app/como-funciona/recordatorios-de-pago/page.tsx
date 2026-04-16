import { Metadata } from "next";
import RecordatoriosAutomaticosContent from "./RecordatoriosAutomaticosContent";

export const metadata: Metadata = {
  title:
    "Recordatorios automáticos de pago en Colombia | Reduce cartera vencida",
  description:
    "Implementa recordatorios automáticos de pago y reduce la cartera vencida. Automatiza el cobro y mejora tu flujo de caja en Colombia.",

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
      "Recordatorios automáticos de pago en Colombia | Reduce cartera vencida",
    description:
      "Automatiza tus cobros con recordatorios automáticos y mejora la recuperación de cartera en Colombia.",
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
