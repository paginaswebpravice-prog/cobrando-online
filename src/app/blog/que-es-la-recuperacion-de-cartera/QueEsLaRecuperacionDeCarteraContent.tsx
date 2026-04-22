"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaRecuperacionDeCarteraContent() {
  return (
    <main className={styles.articleContainer}>
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
          <span className={styles.category}>Educativo</span>

          <h1>
            ¿Qué es la recuperación de cartera en Colombia y cómo funciona paso
            a paso?
          </h1>

          <p className={styles.intro}>
            La recuperación de cartera es el proceso mediante el cual una
            empresa gestiona el cobro de obligaciones pendientes de pago con el
            objetivo de reducir la morosidad, mejorar su liquidez y proteger su
            estabilidad financiera en Colombia.
          </p>
        </motion.header>

        {/* ================= IMPORTANCIA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Por qué la recuperación de cartera es clave para la liquidez de tu
            empresa?
          </h2>

          <p>
            Una gestión adecuada de la cartera vencida permite mantener el
            equilibrio financiero del negocio y evitar problemas de flujo de
            caja.
          </p>

          <ul>
            {[
              "Mejora el flujo de caja y la liquidez.",
              "Reduce pérdidas financieras.",
              "Evita la prescripción de la deuda.",
              "Fortalece la estabilidad del negocio.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* ================= PROCESO ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Cómo funciona el proceso de recuperación de cartera en Colombia?
          </h2>

          <p>
            El proceso de cobro en Colombia suele dividirse en varias etapas:
          </p>

          <h3>1. Gestión preventiva</h3>
          <p>
            Incluye recordatorios antes del vencimiento y seguimiento temprano
            al cliente.
          </p>

          <h3>2. Gestión prejurídica</h3>
          <p>
            Se realizan contactos formales, negociaciones y acuerdos de pago sin
            acudir a la vía judicial.
          </p>

          <h3>3. Gestión jurídica</h3>
          <p>
            Cuando no hay voluntad de pago, se inicia un proceso legal para
            recuperar la deuda.
          </p>
        </motion.section>

        {/* ================= ESTRATEGIA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Cuándo implementar una estrategia de recuperación de cartera
            efectiva?
          </h2>

          <p>
            Lo ideal es establecer políticas claras de crédito y cobranza desde
            el inicio de la relación comercial, evitando que las deudas se
            conviertan en cartera vencida.
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
          <h2>Preguntas frecuentes sobre recuperación de cartera</h2>

          <h3>¿La recuperación de cartera solo aplica a grandes empresas?</h3>
          <p>
            No. Empresas de todos los tamaños necesitan gestionar su cartera
            para mantener estabilidad financiera.
          </p>

          <h3>¿Qué pasa si no se gestiona la cartera vencida?</h3>
          <p>
            Puede afectar el flujo de caja, generar pérdidas y aumentar el
            riesgo financiero del negocio.
          </p>
        </motion.section>
      </motion.article>
    </main>
  );
}
