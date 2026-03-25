"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Script from "next/script";

function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      {/* ================= SEO SCHEMA ================= */}
      <Script
        id="seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Cobrando Online",
            url: "https://www.cobrandoonline.com",
            description:
              "Recuperación de cartera en Colombia y Bogotá. Especialistas en cobro prejurídico, cobro jurídico, procesos ejecutivos y recuperación de cartera vencida para empresas.",
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressCountry: "CO",
            },
            serviceType: [
              "Recuperación de cartera",
              "Cobro prejurídico",
              "Cobro jurídico",
              "Proceso ejecutivo",
            ],
          }),
        }}
      />

      <div className={styles.container}>
        {/* ================= COLUMNA IZQUIERDA ================= */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>
            Recuperación de cartera en Colombia y Bogotá
          </span>

          <h1 id="hero-title" className={styles.title}>
            Recuperación de cartera en Colombia{" "}
            <span>cobro prejurídico y jurídico</span>
          </h1>

          <p className={styles.description}>
            Somos especialistas en recuperación de cartera vencida en Colombia y
            Bogotá. Gestionamos cobro prejurídico, cobro jurídico y procesos
            ejecutivos para empresas que necesitan recuperar deudas y mejorar su
            flujo de caja.
          </p>

          <a
            href="/contactanos"
            className={styles.button}
            title="Recuperación de cartera en Colombia"
          >
            Solicitar evaluación de cartera
          </a>
        </motion.div>

        {/* ================= COLUMNA DERECHA ================= */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className={styles.successWrapper}>
            <h2 className={styles.successTitle}>
              Resultados en recuperación de cartera en Colombia
            </h2>

            <div className={styles.successCard}>
              <h3>Recuperación de cartera sector salud</h3>
              <p>Monto gestionado: $48.000.000</p>
              <p>Antigüedad: 2 años</p>
              <span className={styles.highlight}>
                82% recuperado en etapa prejurídica
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Proceso ejecutivo judicial en Colombia</h3>
              <p>Monto gestionado: $120.000.000</p>
              <span className={styles.highlight}>
                Embargo efectivo y recuperación de cartera
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Cobro prejurídico Bogotá</h3>
              <span className={styles.highlight}>
                Recuperación total sin proceso jurídico
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
