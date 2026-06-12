"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraEducacion() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sector Educativo
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cartera en educación: cómo recuperar pagos pendientes en colegios,
          universidades e instituciones educativas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          La recuperación de cartera en el sector educativo tiene
          características particulares debido a la relación permanente entre la
          institución y los estudiantes o acudientes. Una gestión adecuada
          permite reducir la morosidad sin afectar la continuidad académica ni
          la reputación de la entidad educativa.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Por qué se genera cartera vencida en instituciones educativas
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Las deudas suelen originarse por dificultades económicas de las
          familias, retrasos en pagos empresariales de convenios educativos,
          incumplimientos de acuerdos de pago o falta de seguimiento oportuno
          por parte de la institución.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Principales retos de la cobranza educativa
        </motion.h2>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>Mantener una buena relación con estudiantes y acudientes.</li>
          <li>Evitar la deserción por problemas financieros.</li>
          <li>Gestionar grandes volúmenes de pagos periódicos.</li>
          <li>Controlar acuerdos de pago y refinanciaciones.</li>
          <li>Reducir la mora acumulada entre periodos académicos.</li>
        </motion.ul>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Estrategias efectivas para recuperar cartera educativa
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Las mejores prácticas incluyen recordatorios automáticos, seguimiento
          preventivo antes del vencimiento, acuerdos de pago estructurados,
          comunicación clara con los responsables financieros y políticas
          internas de recaudo definidas desde el momento de la matrícula.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Importancia de la cobranza preventiva
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Una estrategia preventiva permite identificar riesgos de mora antes de
          que la deuda aumente. Los recordatorios oportunos y la atención
          temprana suelen generar mejores resultados que iniciar acciones cuando
          la cartera ya se encuentra altamente vencida.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en instituciones educativas requiere un
          equilibrio entre la sostenibilidad financiera y la relación con los
          estudiantes. Una gestión profesional de cobranza ayuda a mejorar la
          liquidez, reducir la morosidad y fortalecer la estabilidad económica
          de colegios, universidades y centros de formación.
        </motion.p>
      </motion.article>
    </main>
  );
}
