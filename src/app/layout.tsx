import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";

import TopBar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallAction from "@/components/CallAction";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cobrandoonline.com"),

  title: {
    default: "Cobrando Online | Recuperación de Cartera",
    template: "%s | Cobrando Online",
  },

  description:
    "Expertos en recuperación de cartera para empresas en Colombia. Gestión prejurídica y jurídica con resultados efectivos.",

  keywords: [
    "recuperación de cartera",
    "cobro jurídico",
    "cobro prejurídico",
    "cartera vencida",
    "gestión de cobros empresariales",
  ],

  authors: [{ name: "Cobrando Online" }],
  creator: "Cobrando Online",
  publisher: "Cobrando Online",

  openGraph: {
    title: "Cobrando Online | Recuperación de Cartera",
    description:
      "Recuperamos tu cartera de manera profesional, ágil y segura en Colombia.",
    url: "https://cobrandoonline.com/",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo-cobrando-online.jpg",
        width: 1200,
        height: 630,
        alt: "Cobrando Online - Recuperación de cartera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobrando Online",
    description: "Recuperación de cartera profesional en Colombia.",
    images: ["/logo-cobrando-online.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L28F1NQE0S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L28F1NQE0S', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body>
        {/* Schema estructurado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com/",
              logo: "https://cobrandoonline.com/logo-cobrando-online.jpg",
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              sameAs: [
                "https://www.facebook.com/praviceabogadosespecializados",
                "https://www.instagram.com/pravice_abogados/",
                "https://www.tiktok.com/@pravice_abogados",
              ],
            }),
          }}
        />

        <TopBar />
        <Header />
        {children}
        <CallAction />
        <Footer />
      </body>
    </html>
  );
}
