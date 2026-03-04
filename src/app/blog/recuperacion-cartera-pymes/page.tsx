"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraPymes() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* CATEGORY */}
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Educativo
        </motion.span>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Recuperación de cartera para PYMES
        </motion.h1>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Las pequeñas y medianas empresas son más vulnerables a la mora debido
          a su limitada liquidez. Una gestión adecuada de la recuperación de
          cartera permite proteger el flujo de caja y garantizar la estabilidad
          financiera.
        </motion.p>

        {/* SECTION 1 */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué la mora afecta más a las PYMES?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A diferencia de las grandes compañías, las PYMES dependen en mayor
          medida de su liquidez diaria para operar. Un retraso en los pagos
          puede impactar directamente la nómina, el pago a proveedores y la
          continuidad del negocio.
        </motion.p>

        <ul>
          {[
            "Menor capacidad de absorción de pérdidas.",
            "Dependencia directa del flujo de caja.",
            "Dificultad para acceder a financiación.",
            "Mayor riesgo de descapitalización.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Estrategias recomendadas para la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Implementar políticas claras desde el inicio de la relación comercial
          es fundamental para reducir riesgos y prevenir la mora.
        </motion.p>

        <ul>
          {[
            "Políticas claras de crédito.",
            "Seguimiento constante antes y después del vencimiento.",
            "Acuerdos por escrito en caso de negociación.",
            "Gestión prejurídica oportuna.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>{item}</strong>
            </motion.li>
          ))}
        </ul>

        {/* SECTION 3 */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Beneficios de una gestión profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contar con asesoría especializada en recuperación de cartera permite a
          las PYMES enfocarse en su actividad principal mientras expertos
          gestionan el proceso de cobro de forma estratégica y legal.
        </motion.p>
      </motion.article>
    </main>
  );
}
