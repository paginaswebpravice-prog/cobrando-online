"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RiesgoCartera() {
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
          Finanzas y Cartera
        </motion.span>

        <h1>
          Riesgo de cartera: cómo evaluar el riesgo financiero de tus clientes
        </h1>

        <p className={styles.intro}>
          El riesgo de cartera representa la probabilidad de que una empresa no
          logre recuperar total o parcialmente las cuentas por cobrar generadas
          por ventas a crédito. Evaluar este riesgo permite tomar mejores
          decisiones comerciales, proteger la liquidez y reducir pérdidas
          financieras.
        </p>

        <h2>¿Qué es el riesgo de cartera?</h2>

        <p>
          El riesgo de cartera es el nivel de incertidumbre asociado al pago de
          las obligaciones por parte de los clientes. A medida que aumenta la
          mora o disminuye la capacidad de pago del deudor, también aumenta la
          probabilidad de incumplimiento.
        </p>

        <p>
          Todas las empresas que venden a crédito están expuestas a este riesgo,
          independientemente de su tamaño o sector económico.
        </p>

        <h2>¿Por qué es importante medir el riesgo de cartera?</h2>

        <p>
          La evaluación permanente de la cartera permite anticipar problemas de
          liquidez y tomar acciones preventivas antes de que las cuentas se
          conviertan en pérdidas.
        </p>

        <ul>
          <li>Reducir la cartera vencida.</li>
          <li>Identificar clientes de alto riesgo.</li>
          <li>Mejorar la toma de decisiones comerciales.</li>
          <li>Proteger el flujo de caja.</li>
          <li>Disminuir pérdidas por incobrabilidad.</li>
        </ul>

        <h2>Factores que influyen en el riesgo de cartera</h2>

        <p>
          Existen diversos elementos que pueden aumentar o disminuir el riesgo
          asociado a las cuentas por cobrar.
        </p>

        <ul>
          <li>Historial de pagos del cliente.</li>
          <li>Capacidad financiera.</li>
          <li>Nivel de endeudamiento.</li>
          <li>Antigüedad de la relación comercial.</li>
          <li>Condiciones económicas del sector.</li>
          <li>Tiempo de mora acumulado.</li>
          <li>Concentración de cartera en pocos clientes.</li>
        </ul>

        <h2>Indicadores para medir el riesgo de cartera</h2>

        <p>
          Las empresas suelen utilizar indicadores financieros para monitorear
          el comportamiento de sus cuentas por cobrar y detectar señales de
          alerta temprana.
        </p>

        <ul>
          <li>Porcentaje de cartera vencida.</li>
          <li>Índice de morosidad.</li>
          <li>DSO (Days Sales Outstanding).</li>
          <li>Rotación de cartera.</li>
          <li>Antigüedad de cartera.</li>
          <li>Porcentaje de recuperación.</li>
        </ul>

        <h2>Cómo reducir el riesgo de cartera</h2>

        <p>
          La mejor estrategia consiste en combinar acciones preventivas con una
          gestión activa de cobranza. Cuanto antes se detecten posibles
          incumplimientos, mayores serán las probabilidades de recuperación.
        </p>

        <ul>
          <li>Realizar análisis crediticio antes de vender.</li>
          <li>Definir políticas claras de crédito.</li>
          <li>Monitorear permanentemente la cartera.</li>
          <li>Implementar recordatorios de pago.</li>
          <li>Negociar acuerdos oportunamente.</li>
          <li>Aplicar estrategias de cobranza escalonadas.</li>
        </ul>

        <h2>Errores comunes al evaluar el riesgo</h2>

        <ul>
          <li>Otorgar crédito sin análisis previo.</li>
          <li>Depender de pocos clientes grandes.</li>
          <li>No monitorear indicadores financieros.</li>
          <li>Esperar demasiado para iniciar la cobranza.</li>
          <li>No actualizar la información financiera del cliente.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          El riesgo de cartera es un factor crítico para la estabilidad
          financiera de cualquier empresa. Medirlo adecuadamente permite
          identificar amenazas, mejorar la recuperación de cartera y tomar
          decisiones más seguras al otorgar crédito. Una gestión preventiva
          reduce significativamente la probabilidad de pérdidas económicas.
        </p>
      </motion.article>
    </main>
  );
}
