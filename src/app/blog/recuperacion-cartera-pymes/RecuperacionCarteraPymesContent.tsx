"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraPymesContent() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Educativo
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Recuperación de cartera para PYMES
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Las pequeñas y medianas empresas en Colombia son más vulnerables a la
          mora debido a su limitada liquidez. Una adecuada recuperación de
          cartera permite proteger el flujo de caja y garantizar la estabilidad
          financiera del negocio.
        </motion.p>

        {/* ================= IMPACTO ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Por qué la mora afecta más a las PYMES?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          A diferencia de grandes empresas, las PYMES dependen directamente del
          flujo de caja para operar. Un retraso en pagos puede afectar su
          funcionamiento inmediato.
        </motion.p>

        <ul>
          {[
            "Menor capacidad de absorber pérdidas.",
            "Dependencia directa del flujo de caja.",
            "Dificultad para acceder a financiación.",
            "Mayor riesgo financiero.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* ================= ESTRATEGIAS ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Estrategias de recuperación de cartera para PYMES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Implementar estrategias de cobranza desde el inicio ayuda a prevenir
          la mora y mejorar la recuperación.
        </motion.p>

        <ul>
          {[
            "Definir políticas de crédito claras.",
            "Realizar seguimiento constante.",
            "Formalizar acuerdos por escrito.",
            "Iniciar cobro prejurídico oportunamente.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <strong>{item}</strong>
            </motion.li>
          ))}
        </ul>

        {/* ================= BENEFICIOS ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Beneficios de una gestión profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contar con apoyo especializado en recuperación de cartera permite a
          las PYMES enfocarse en su crecimiento mientras expertos gestionan el
          cobro de manera estratégica y eficiente.
        </motion.p>

        {/* ================= CONCLUSION ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          La recuperación de cartera en PYMES es clave para mantener la liquidez
          y evitar riesgos financieros. Implementar estrategias adecuadas y
          actuar a tiempo permite mejorar la estabilidad del negocio en
          Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
