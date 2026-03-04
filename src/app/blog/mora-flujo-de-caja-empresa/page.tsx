"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function MoraFlujoDeCajaEmpresa() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cómo afecta la mora al flujo de caja de una empresa?",
    description:
      "Descubre cómo la mora y la cartera vencida impactan el flujo de caja, la liquidez y la estabilidad financiera de una empresa.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/mora-flujo-de-caja-empresa`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-mora-flujo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ================= HEADER ================= */}

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>Finanzas</span>

          <h1>¿Cómo afecta la mora al flujo de caja de una empresa?</h1>

          <p className={styles.intro}>
            La mora en el pago de obligaciones impacta directamente el flujo de
            caja y la estabilidad financiera de una empresa. Cuando la cartera
            vencida aumenta, la liquidez disminuye y la capacidad operativa se
            ve comprometida.
          </p>
        </motion.header>

        {/* ================= SECCIÓN 1 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            ¿Qué es la mora y por qué afecta la liquidez?
          </motion.h2>

          <p>
            La mora ocurre cuando un cliente no cumple con sus obligaciones en
            la fecha acordada. Esto genera un desbalance entre los ingresos
            proyectados y el dinero realmente disponible, afectando el capital
            de trabajo.
          </p>
        </motion.section>

        {/* ================= SECCIÓN IMPACTOS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Impactos principales de la mora en el flujo de caja
          </motion.h2>

          <ul className={styles.animatedList}>
            {[
              "Menor capacidad de inversión.",
              "Dificultad para pagar proveedores.",
              "Riesgo financiero creciente.",
              "Pérdida de estabilidad operativa.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* ================= SECCIÓN CONSECUENCIAS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Consecuencias a largo plazo
          </motion.h2>

          <p>
            Si la mora se mantiene en el tiempo, la empresa puede enfrentar
            problemas de solvencia, deterioro en indicadores financieros y
            pérdida de confianza por parte de proveedores y entidades
            financieras.
          </p>
        </motion.section>

        {/* ================= SECCIÓN SOLUCIÓN ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            ¿Cómo reducir el impacto de la mora?
          </motion.h2>

          <p>
            Implementar políticas claras de crédito, realizar seguimiento
            oportuno y contar con una estrategia efectiva de recuperación de
            cartera son acciones clave para proteger el flujo de caja.
          </p>
        </motion.section>

        {/* ================= FAQ ================= */}

        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Preguntas frecuentes</h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>¿La cartera vencida siempre afecta el flujo de caja?</h3>
            <p>
              Sí, porque representa ingresos proyectados que aún no han sido
              recibidos efectivamente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>¿Cuándo la mora se convierte en un riesgo financiero?</h3>
            <p>
              Cuando el nivel de cartera vencida supera la capacidad operativa
              de la empresa para cubrir sus obligaciones.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
