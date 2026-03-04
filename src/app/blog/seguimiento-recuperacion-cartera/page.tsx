"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function SeguimientoRecuperacionCartera() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 60 }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Importancia del seguimiento en la recuperación de cartera
        </motion.h1>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          El seguimiento constante en la recuperación de cartera es uno de los
          factores más determinantes para aumentar la tasa de recaudo y evitar
          nuevos incumplimientos. Una gestión sin control periódico reduce
          significativamente la probabilidad de éxito.
        </motion.p>

        {/* SECTION 1 */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué el seguimiento es clave?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Muchas empresas cometen el error de considerar que la gestión termina
          cuando el deudor responde o firma un acuerdo de pago. Sin embargo, la
          recuperación no finaliza hasta que se recibe el pago efectivo.
        </motion.p>

        <ul>
          {[
            "Evita el incumplimiento de acuerdos pactados.",
            "Permite detectar riesgos tempranos.",
            "Mejora la tasa de recuperación.",
            "Fortalece la cultura de pago del cliente.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Seguimiento antes y después del vencimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Una estrategia profesional incluye recordatorios preventivos antes del
          vencimiento y controles posteriores cuando existe mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          El contacto periódico demuestra organización y seriedad, lo cual
          incrementa la presión psicológica positiva para el cumplimiento.
        </motion.p>

        {/* SECTION 3 */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Seguimiento en acuerdos de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cuando se firma un acuerdo de pago, es fundamental establecer fechas
          claras, recordatorios programados y control del cumplimiento de cada
          cuota.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Un sistema estructurado de seguimiento reduce riesgos y aumenta la
          probabilidad de recuperación total de la obligación.
        </motion.p>
      </motion.article>
    </main>
  );
}
