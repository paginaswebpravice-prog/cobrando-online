"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IndicadoresBasicosCartera() {
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
          Finanzas y Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Indicadores básicos de cartera que debes conocer
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Medir correctamente la cartera es fundamental para conocer la salud
          financiera de una empresa. Los indicadores de cartera permiten evaluar
          la eficiencia de la gestión de cobranza, identificar riesgos de mora y
          tomar decisiones oportunas para mejorar el flujo de caja.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué son los indicadores de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Son métricas utilizadas para analizar el comportamiento de las cuentas
          por cobrar. Estos indicadores ayudan a determinar si los clientes
          están pagando dentro de los plazos establecidos y si la empresa está
          recuperando su dinero de manera eficiente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un seguimiento constante permite detectar problemas antes de que se
          conviertan en riesgos financieros importantes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Índice de cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador muestra qué porcentaje de la cartera total se encuentra
          vencida. Mientras menor sea este valor, mejor será la situación
          financiera de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un crecimiento constante del indicador puede reflejar fallas en las
          políticas de crédito o en los procesos de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Días promedio de cobro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También conocido como período promedio de recaudo, permite conocer
          cuánto tiempo tarda la empresa en recuperar el dinero de sus ventas a
          crédito.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un plazo excesivamente alto puede afectar la liquidez y limitar la
          capacidad operativa de la organización.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rotación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera mide cuántas veces la empresa recupera sus
          cuentas por cobrar durante un período determinado. Una rotación alta
          generalmente indica una gestión eficiente y una recuperación rápida de
          los recursos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antigüedad de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este análisis clasifica las cuentas por cobrar según los días de mora,
          permitiendo identificar cuáles representan un mayor riesgo de pérdida.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Cartera vigente.</li>
          <li>Cartera de 1 a 30 días.</li>
          <li>Cartera de 31 a 60 días.</li>
          <li>Cartera de 61 a 90 días.</li>
          <li>Cartera superior a 90 días.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tasa de recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador mide qué porcentaje de las deudas gestionadas logra ser
          efectivamente recuperado. Es una de las métricas más importantes para
          evaluar el desempeño de los equipos de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una tasa alta suele reflejar procesos de seguimiento efectivos y una
          adecuada gestión de clientes morosos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante medir estos indicadores?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los indicadores permiten identificar tendencias, anticipar problemas
          de liquidez, mejorar la toma de decisiones y optimizar las estrategias
          de recuperación de cartera. Sin métricas claras resulta difícil saber
          si la gestión de cobro está siendo realmente efectiva.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los indicadores de cartera son herramientas esenciales para cualquier
          empresa que otorgue crédito o gestione cuentas por cobrar. Medir la
          cartera vencida, la rotación, la antigüedad y la tasa de recuperación
          permite fortalecer la gestión financiera y reducir los riesgos de
          morosidad.
        </motion.p>
      </motion.article>
    </main>
  );
}
