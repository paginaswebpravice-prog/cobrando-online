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
            "@type": "ProfessionalService",
            name: "Cobrando Online",
            url: "https://cobrandoonline.com",
            description:
              "Empresa especializada en gestión de cobranza y recuperación de cartera para empresas en Colombia. Recuperamos cuentas por cobrar mediante cobranza preventiva, prejurídica, jurídica y procesos ejecutivos cuando son necesarios.",
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
              "Gestión de cobranza",
              "Recuperación de cartera empresarial",
              "Cobranza prejurídica",
              "Cobranza jurídica",
              "Proceso ejecutivo",
              "Recuperación de cuentas por cobrar",
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
            Gestión de cobranza y recuperación de cartera para empresas
          </span>

          <h1 id="hero-title" className={styles.title}>
            Recupere su cartera vencida con una{" "}
            <span>gestión de cobranza efectiva</span>
          </h1>

          <p className={styles.description}>
            En Cobrando Online ayudamos a empresas en Colombia a recuperar
            facturas vencidas, disminuir la cartera morosa y mejorar el flujo de
            caja mediante estrategias de cobranza preventiva, cobro prejurídico,
            negociación extrajudicial y recuperación judicial cuando el caso lo
            requiere.
          </p>

          <a
            href="/contactanos"
            className={styles.button}
            title="Solicitar diagnóstico gratuito de cartera"
          >
            Solicitar diagnóstico gratuito
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
              Casos de éxito en recuperación de cartera empresarial
            </h2>

            <div className={styles.successCard}>
              <h3>Empresa del sector salud</h3>

              <p>Cartera gestionada: $48.000.000</p>

              <p>Antigüedad de la deuda: 2 años</p>

              <span className={styles.highlight}>
                82 % recuperado mediante cobranza prejurídica
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Empresa del sector comercial</h3>

              <p>Cartera gestionada: $120.000.000</p>

              <span className={styles.highlight}>
                Recuperación mediante proceso ejecutivo y medidas cautelares
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Cobranza extrajudicial</h3>

              <span className={styles.highlight}>
                Recuperación total sin necesidad de iniciar un proceso judicial
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
