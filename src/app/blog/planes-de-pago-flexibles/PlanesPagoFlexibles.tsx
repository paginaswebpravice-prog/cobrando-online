"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PlanesPagoFlexibles() {
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
          Negociación de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Planes de pago flexibles: cómo recuperar cartera adaptándose a la
          capacidad del cliente
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Los planes de pago flexibles son una herramienta clave en la gestión
          de cobranza moderna. Permiten adaptar las condiciones de pago a la
          situación financiera del cliente, aumentando significativamente las
          probabilidades de recuperación de cartera sin necesidad de acudir a
          procesos judiciales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué son los planes de pago flexibles?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Son acuerdos mediante los cuales acreedor y deudor establecen nuevas
          condiciones para el pago de una obligación pendiente. El objetivo es
          facilitar el cumplimiento de la deuda mediante cuotas, plazos o
          esquemas ajustados a la capacidad real de pago del cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Beneficios para la recuperación de cartera
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Aumentan la probabilidad de pago.</li>
          <li>Reducen la morosidad acumulada.</li>
          <li>Evitan conflictos y procesos judiciales.</li>
          <li>Mejoran la relación con el cliente.</li>
          <li>Permiten recuperar dinero de forma gradual.</li>
          <li>Disminuyen costos de cobranza.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tipos de planes de pago flexibles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Dependiendo del caso, una empresa puede ofrecer cuotas fijas
          mensuales, pagos escalonados, periodos de gracia, pagos parciales
          iniciales o extensiones en los plazos de cumplimiento. La elección
          dependerá del perfil del deudor y del valor de la obligación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Recomendaciones para estructurar un plan efectivo
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Analizar la capacidad financiera del cliente.</li>
          <li>Definir fechas claras de pago.</li>
          <li>Formalizar el acuerdo por escrito.</li>
          <li>Establecer consecuencias por incumplimiento.</li>
          <li>Realizar seguimiento constante.</li>
          <li>Mantener una comunicación transparente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los planes de pago flexibles son una estrategia efectiva para
          recuperar cartera y reducir el riesgo de incumplimiento. Adaptar las
          condiciones de pago a la realidad financiera del cliente permite
          alcanzar acuerdos sostenibles que benefician tanto al acreedor como al
          deudor.
        </motion.p>
      </motion.article>
    </main>
  );
}
