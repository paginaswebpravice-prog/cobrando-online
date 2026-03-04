"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function VentajasTercerizarRecuperacionDeCartera() {
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
          Ventajas de tercerizar la recuperación de cartera
        </motion.h1>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          La tercerización de la recuperación de cartera permite a las empresas
          mejorar sus índices de recaudo, optimizar recursos internos y contar
          con respaldo jurídico especializado.
        </motion.p>

        {/* SECTION 1 */}
        <motion.h2
          initial={{ opacity: 0, x: -50, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué tercerizar la gestión de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Muchas empresas intentan manejar la cartera vencida internamente, pero
          esto puede generar desgaste administrativo y baja efectividad en el
          recaudo.
        </motion.p>

        <ul>
          {[
            {
              title: "Ahorro de tiempo y recursos:",
              text: " el equipo interno puede enfocarse en actividades estratégicas.",
            },
            {
              title: "Mayor efectividad:",
              text: " profesionales especializados aplican técnicas probadas.",
            },
            {
              title: "Respaldo jurídico:",
              text: " acompañamiento legal en caso de acciones formales.",
            },
            {
              title: "Mejor manejo de relaciones comerciales:",
              text: " gestión estructurada que reduce conflictos.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <motion.strong
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.strong>
              {item.text}
            </motion.li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <motion.h2
          initial={{ opacity: 0, x: -50, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Reducción del riesgo financiero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Una empresa especializada implementa procesos preventivos,
          administrativos y jurídicos según el nivel de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          La intervención oportuna evita la prescripción de la deuda y fortalece
          la cultura de pago.
        </motion.p>

        {/* SECTION 3 */}
        <motion.h2
          initial={{ opacity: 0, x: -50, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Profesionalización del proceso de cobro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tercerizar no significa perder control, sino profesionalizar la
          gestión mediante experiencia y metodología estructurada.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Esto se traduce en mayor liquidez, mejor flujo de caja y estabilidad
          financiera.
        </motion.p>
      </motion.article>
    </main>
  );
}
