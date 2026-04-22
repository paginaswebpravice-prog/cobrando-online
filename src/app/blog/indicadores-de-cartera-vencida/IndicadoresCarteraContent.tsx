"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function IndicadoresCarteraContent() {
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Finanzas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Indicadores de cartera vencida en Colombia: las métricas clave que
          debes controlar para reducir la mora
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los indicadores de cartera vencida permiten a las empresas medir el
          nivel de mora, el riesgo financiero y la efectividad de la gestión de
          cobranza. Conocer estos indicadores ayuda a tomar decisiones y mejorar
          la recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué son los indicadores de cartera y por qué son clave en tu empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los indicadores de cartera son métricas financieras que permiten
          analizar el comportamiento de los clientes frente a los pagos,
          identificar el nivel de mora y medir la eficiencia del proceso de
          cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales indicadores de cartera vencida que debes medir en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen varios indicadores que las empresas deben monitorear para
          controlar la cartera y reducir el riesgo de pérdidas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Índice de cartera vencida: cómo medir el nivel real de mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador muestra qué porcentaje de la cartera total se encuentra
          vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Se calcula dividiendo la cartera vencida entre la cartera total y
          multiplicando por 100.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Rotación de cartera: cuánto tiempo tardan tus clientes en pagar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera mide el tiempo promedio que tardan los clientes
          en pagar sus facturas. Entre menor sea el tiempo, mejor será el flujo
          de caja de la empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Edad de cartera: identifica deudas críticas antes de perderlas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador clasifica las deudas según el tiempo de mora, por
          ejemplo: 30 días, 60 días, 90 días o más de 120 días.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Índice de recaudo: mide qué tan efectiva es tu cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador mide qué porcentaje de la cartera se logra recuperar en
          un período determinado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué estos indicadores son clave para reducir la cartera vencida?
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Permiten medir el riesgo financiero.</li>
          <li>Ayudan a mejorar las políticas de crédito.</li>
          <li>Permiten evaluar la gestión de cobranza.</li>
          <li>Mejoran la toma de decisiones.</li>
          <li>Ayudan a reducir la cartera vencida.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo usar los indicadores de cartera para mejorar tu flujo
          de caja
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Controlar los indicadores de cartera vencida es fundamental para la
          salud financiera de cualquier empresa. Medir la mora, la rotación de
          cartera y el índice de recaudo permite mejorar la gestión de cobranza
          y reducir el riesgo de pérdidas.
        </motion.p>
      </motion.article>
    </main>
  );
}
