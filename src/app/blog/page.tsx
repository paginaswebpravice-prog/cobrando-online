import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en Colombia: guías, estrategias y cómo cobrar deudas",
  description:
    "Aprende a recuperar cartera en Colombia: cobro jurídico, prejurídico, estrategias efectivas y cómo evitar perder dinero por deudas.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog",
  },

  openGraph: {
    title:
      "¿Cómo recuperar cartera en Colombia? Guías, estrategias y casos reales",
    description:
      "Contenido práctico sobre cobranza, deudas y recuperación de cartera para empresas y pymes en Colombia.",
    url: "https://cobrandoonline.com/blog",
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
  const baseUrl = "https://cobrandoonline.com";

  const blogItems = [
    "que-es-la-recuperacion-de-cartera",
    "como-recuperar-cartera-vencida",
    "tipos-de-recuperacion-de-cartera",
    "cuando-iniciar-proceso-de-cobro",
    "proceso-de-cobro-juridico-colombia",
    "diferencias-cobro-prejuridico-juridico",
    "prescripcion-deudas-colombia",
    "documentos-necesarios-cobrar-deuda",
    "errores-comunes-recuperacion-de-cartera",
    "estrategias-de-cobranza-efectiva",
    "buenas-practicas-negociar-deudores",
    "acuerdos-de-pago-con-deudores",
    "ventajas-tercerizar-recuperacion-de-cartera",
    "externalizacion-de-cobranza",
    "recuperacion-cartera-pymes",
    "mora-flujo-de-caja-empresa",
    "indicadores-de-cartera-vencida",
    "seguimiento-recuperacion-cartera",
    "carta-cobro-prejuridico",
    "calcular-comision-recuperacion-cartera",
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog de recuperación de cartera",
      description:
        "Artículos sobre cobranza, deudas, cobro jurídico y estrategias de recuperación de cartera en Colombia.",
      url: `${baseUrl}/blog`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: blogItems.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/blog/${slug}`,
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <BlogContent />
    </>
  );
}
