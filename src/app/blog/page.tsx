import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Blog de Recuperación de Cartera | Estrategias de Cobranza para Empresas en Colombia",

  description:
    "Guías prácticas sobre recuperación de cartera, cobranza empresarial, facturas vencidas, acuerdos de pago y gestión de cartera para empresas en Colombia.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog",
  },

  keywords: [
    "recuperación de cartera",
    "gestión de cartera",
    "cobranza empresarial",
    "cartera vencida",
    "facturas vencidas",
    "clientes morosos",
    "acuerdos de pago",
    "flujo de caja",
    "empresas Colombia",
  ],

  openGraph: {
    title: "Blog de Recuperación de Cartera para Empresas | Cobrando Online",

    description:
      "Aprende cómo recuperar facturas vencidas, reducir la mora y mejorar el flujo de caja con estrategias de cobranza empresarial.",

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
      name: "Blog de recuperación de cartera y cobranza empresarial en Colombia",
      description:
        "Guías especializadas sobre recuperación de cartera, cobranza empresarial, gestión de cartera, acuerdos de pago, clientes morosos y estrategias para mejorar el flujo de caja de las empresas en Colombia.",
      url: `${baseUrl}/blog`,
      publisher: {
        "@type": "Organization",
        name: "Cobrando Online",
        url: "https://cobrandoonline.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cobrandoonline.com/logo.png",
        },
      },
      inLanguage: "es-CO",
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
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: baseUrl,
      name: "Cobrando Online",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
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
