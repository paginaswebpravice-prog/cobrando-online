"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ProvisionCartera() {
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
          Finanzas e Indicadores
        </motion.span>

        <h1>Provisión de cartera: qué es y cómo calcularla</h1>

        <p className={styles.intro}>
          La provisión de cartera es un mecanismo contable que permite reconocer
          el riesgo de no recuperar determinadas cuentas por cobrar. Su objetivo
          es reflejar de manera más realista la situación financiera de una
          empresa y anticipar posibles pérdidas derivadas de clientes que
          incumplen sus obligaciones.
        </p>

        <h2>¿Qué es la provisión de cartera?</h2>

        <p>
          Es una estimación contable que se realiza sobre las cuentas por cobrar
          cuando existe la posibilidad de que algunos clientes no paguen total o
          parcialmente sus obligaciones.
        </p>

        <p>
          En lugar de esperar a que la pérdida ocurra, la empresa reconoce de
          forma anticipada el riesgo financiero asociado a la cartera.
        </p>

        <h2>¿Por qué es importante?</h2>

        <ul>
          <li>Refleja una situación financiera más realista.</li>
          <li>Reduce el riesgo de sobrevalorar activos.</li>
          <li>Facilita la toma de decisiones financieras.</li>
          <li>Permite identificar clientes de alto riesgo.</li>
          <li>Contribuye a la planeación financiera.</li>
        </ul>

        <h2>¿Cuándo se debe provisionar una cartera?</h2>

        <p>
          Generalmente cuando existen señales de deterioro o dificultades de
          recuperación que aumentan la probabilidad de incumplimiento.
        </p>

        <ul>
          <li>Altos niveles de mora.</li>
          <li>Incumplimiento reiterado de acuerdos.</li>
          <li>Procesos judiciales en curso.</li>
          <li>Problemas financieros del deudor.</li>
          <li>Antigüedad elevada de la obligación.</li>
        </ul>

        <h2>Métodos para calcular provisiones</h2>

        <p>
          Las empresas pueden utilizar diferentes metodologías según su tamaño,
          sector y políticas contables.
        </p>

        <ul>
          <li>Porcentaje fijo sobre cartera vencida.</li>
          <li>Provisión por rangos de antigüedad.</li>
          <li>Modelo de pérdida esperada.</li>
          <li>Análisis individual de clientes.</li>
        </ul>

        <h2>Ejemplo práctico</h2>

        <p>
          Supongamos que una empresa tiene una cartera vencida de $100.000.000 y
          estima que el 8% presenta riesgo de incobrabilidad.
        </p>

        <p>
          <strong>Provisión = $100.000.000 × 8% = $8.000.000</strong>
        </p>

        <p>
          En este caso, la empresa registraría una provisión de ocho millones de
          pesos para cubrir posibles pérdidas futuras.
        </p>

        <h2>Provisión por antigüedad de cartera</h2>

        <p>
          Una práctica común consiste en asignar porcentajes de provisión según
          los días de mora.
        </p>

        <ul>
          <li>0 a 30 días: riesgo bajo.</li>
          <li>31 a 60 días: riesgo moderado.</li>
          <li>61 a 90 días: riesgo medio.</li>
          <li>Más de 90 días: riesgo alto.</li>
        </ul>

        <h2>Relación entre provisión y riesgo de cartera</h2>

        <p>
          Cuanto mayor sea la cartera vencida y el riesgo de incumplimiento,
          mayor será la provisión requerida. Por esta razón, ambos indicadores
          deben analizarse de forma conjunta.
        </p>

        <h2>Errores frecuentes</h2>

        <ul>
          <li>No actualizar periódicamente las provisiones.</li>
          <li>Ignorar señales de deterioro financiero.</li>
          <li>Subestimar el riesgo de ciertos clientes.</li>
          <li>No segmentar la cartera por antigüedad.</li>
          <li>Basar decisiones únicamente en intuición.</li>
        </ul>

        <h2>Indicadores relacionados</h2>

        <ul>
          <li>Índice de morosidad.</li>
          <li>Antigüedad de cartera.</li>
          <li>DSO.</li>
          <li>Rotación de cartera.</li>
          <li>Riesgo de cartera.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          La provisión de cartera es una herramienta fundamental para gestionar
          riesgos financieros y proteger la estabilidad económica de la empresa.
          Una adecuada estimación permite anticipar pérdidas, mejorar la toma de
          decisiones y mantener estados financieros más confiables.
        </p>
      </motion.article>
    </main>
  );
}
