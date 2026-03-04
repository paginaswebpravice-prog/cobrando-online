"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CalcularComisionRecuperacionCartera() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        {/* CATEGORÍA */}
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Educativo
        </motion.span>

        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Cómo se calcula la comisión en la recuperación de cartera?
        </motion.h1>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          La comisión en la recuperación de cartera no es un valor fijo ni único
          para todos los casos. Generalmente se establece como un porcentaje
          sobre el monto efectivamente recuperado, pero puede variar dependiendo
          de la etapa del proceso, la complejidad del caso y las características
          de la deuda.
        </motion.p>

        {/* BLOQUE 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Factores que determinan la comisión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Cada proceso de recuperación tiene particularidades que influyen en la
          estructura de honorarios. Por ello, la comisión se define con base en
          diferentes variables:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Etapa del proceso:</strong> preventiva, administrativa
            (prejurídica) o jurídica.
          </li>
          <li>
            <strong>Complejidad del caso:</strong> existencia de garantías,
            número de obligados o dificultades contractuales.
          </li>
          <li>
            <strong>Monto de la deuda:</strong> cuantía total a recuperar.
          </li>
          <li>
            <strong>Antigüedad de la obligación:</strong> el tiempo en mora
            puede aumentar el nivel de dificultad.
          </li>
        </motion.ul>

        {/* BLOQUE 2 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comisiones diferenciadas por etapa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          En algunos casos, el proceso puede iniciar en etapa preventiva o
          administrativa y posteriormente avanzar a una fase jurídica si no se
          logra acuerdo de pago. Cada etapa implica un nivel distinto de gestión
          y esfuerzo profesional.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Por esta razón, la comisión puede variar entre etapas o ajustarse
          según el momento en que se logre la recuperación.
        </motion.p>

        {/* BLOQUE 3 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Modelo basado en resultados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          En la mayoría de los esquemas de recuperación profesional, los
          honorarios se calculan sobre el valor efectivamente recuperado. Esto
          significa que el interés del gestor está alineado con el del acreedor:
          lograr el recaudo de manera eficiente y legal.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Antes de iniciar cualquier gestión, se establecen de forma clara las
          condiciones económicas aplicables al caso específico.
        </motion.p>
      </article>
    </main>
  );
}
