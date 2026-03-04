"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function QueEsLaRecuperacionDeCartera() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la recuperación de cartera?",
    description:
      "Conoce qué es la recuperación de cartera, cómo funciona el proceso de cobro y por qué es clave para mejorar la liquidez y estabilidad financiera de una empresa.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/que-es-la-recuperacion-de-cartera`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-recuperacion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ================= HEADER ================= */}

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>Educativo</span>
          <h1>¿Qué es la recuperación de cartera?</h1>

          <p className={styles.intro}>
            La recuperación de cartera es el proceso mediante el cual una
            empresa gestiona el cobro de obligaciones pendientes de pago con el
            objetivo de reducir la morosidad, mejorar su liquidez y proteger su
            estabilidad financiera.
          </p>
        </motion.header>

        {/* ================= SECCION 1 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué es importante la recuperación de cartera?</h2>

          <p>
            Una gestión adecuada de la cartera vencida permite mantener el
            equilibrio financiero del negocio y evitar problemas de flujo de
            caja.
          </p>

          <ul>
            {[
              "Mejora el flujo de caja: permite contar con los recursos proyectados.",
              "Reduce pérdidas financieras: evita que las deudas se conviertan en cartera castigada.",
              "Evita la prescripción de la deuda: actuar a tiempo protege los derechos legales.",
              "Protege la estabilidad del negocio: fortalece la sostenibilidad financiera.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* ================= SECCION 2 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿En qué consiste el proceso de recuperación de cartera?</h2>

          <p>
            El proceso de cobro suele dividirse en diferentes etapas según el
            nivel de mora y la disposición del deudor.
          </p>

          <h3>1. Gestión preventiva</h3>
          <p>
            Incluye recordatorios antes del vencimiento y seguimiento temprano.
          </p>

          <h3>2. Gestión administrativa o prejurídica</h3>
          <p>
            Se realizan contactos formales y acuerdos de pago sin acudir a la
            vía judicial.
          </p>

          <h3>3. Gestión jurídica</h3>
          <p>Cuando no existe voluntad de pago, se inicia un proceso legal.</p>
        </motion.section>

        {/* ================= SECCION 3 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Cuándo implementar una estrategia de cobro?</h2>
          <p>
            Lo ideal es contar con políticas claras de crédito y cobranza desde
            el inicio de la relación comercial.
          </p>
        </motion.section>

        {/* ================= FAQ ================= */}

        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Preguntas frecuentes</h2>

          <h3>¿La recuperación de cartera solo aplica a grandes empresas?</h3>
          <p>
            No. Tanto pequeñas como medianas y grandes empresas necesitan una
            estrategia de gestión de cobro.
          </p>

          <h3>¿Qué pasa si no se gestiona la cartera vencida?</h3>
          <p>
            Puede afectar el flujo de caja y aumentar el riesgo de insolvencia.
          </p>
        </motion.section>
      </motion.article>
    </main>
  );
}
