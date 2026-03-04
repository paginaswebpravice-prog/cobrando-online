"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function DiferenciasCobroPrejuridicoJuridico() {
  const baseUrl = "https://www.cobrandoonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Diferencias entre cobro prejurídico y cobro jurídico",
    description:
      "Conoce las diferencias entre cobro prejurídico y cobro jurídico, cuándo aplicar cada uno y cómo impactan en la recuperación de cartera.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/diferencias-cobro-prejuridico-juridico`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-prejuridico-juridico"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>Legal</span>
          <h1>Diferencias entre cobro prejurídico y cobro jurídico</h1>

          <p className={styles.intro}>
            En los procesos de recuperación de cartera existen diferentes etapas
            según el nivel de mora y la disposición del deudor. Conocer la
            diferencia entre cobro prejurídico y cobro jurídico permite aplicar
            la estrategia adecuada y aumentar la probabilidad de recuperación.
          </p>
        </motion.header>

        {/* ================= SECCIÓN PREJURÍDICO ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué es el cobro prejurídico?</h2>

          <p>
            El cobro prejurídico es la etapa en la que se busca llegar a un
            acuerdo voluntario con el deudor sin iniciar una demanda formal.
          </p>

          <p>
            Su objetivo principal es recuperar la deuda de manera ágil, evitando
            costos judiciales y manteniendo la relación comercial.
          </p>

          <ul className={styles.animatedList}>
            {[
              "Contacto telefónico o por correo electrónico.",
              "Propuestas de acuerdos de pago.",
              "Recordatorios formales de obligación pendiente.",
              "Seguimiento constante.",
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

        {/* ================= SECCIÓN JURÍDICO ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué es el cobro jurídico?</h2>

          <p>
            El cobro jurídico implica iniciar acciones legales formales ante un
            juez con el fin de exigir el pago de la obligación.
          </p>

          <p>
            En esta fase intervienen abogados y el proceso puede incluir
            demandas ejecutivas, embargos u otras medidas permitidas por la ley.
          </p>

          <ul className={styles.animatedList}>
            {[
              "Presentación de demanda judicial.",
              "Intervención de un juez.",
              "Posibles medidas cautelares como embargos.",
              "Costos legales asociados.",
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

        {/* ================= DIFERENCIAS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Principales diferencias</h2>

          <p>
            La diferencia principal radica en el nivel de formalidad y presión
            legal.
          </p>

          <ul className={styles.animatedList}>
            {[
              "Formalidad: extrajudicial vs judicial.",
              "Costos: el proceso jurídico implica gastos adicionales.",
              "Tiempo: el jurídico suele ser más prolongado.",
              "Impacto comercial: el proceso judicial puede deteriorar la relación.",
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
            <h3>¿Siempre se debe iniciar con cobro prejurídico?</h3>
            <p>
              En la mayoría de los casos sí, ya que permite intentar una
              solución amistosa antes de acudir a la vía judicial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>¿Cuándo conviene pasar a cobro jurídico?</h3>
            <p>
              Cuando el deudor no responde, incumple acuerdos o existe riesgo de
              prescripción de la deuda.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
