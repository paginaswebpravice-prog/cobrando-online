"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AnalisisAntiguedadCartera() {
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
          Antigüedad de cartera: cómo clasificar y analizar cuentas por cobrar
        </h1>

        <p className={styles.intro}>
          El análisis de antigüedad de cartera es una herramienta financiera que
          permite clasificar las cuentas por cobrar según el tiempo de mora.
          Gracias a este indicador, las empresas pueden identificar riesgos,
          priorizar gestiones de cobro y tomar decisiones para proteger su flujo
          de caja.
        </p>

        <h2>¿Qué es la antigüedad de cartera?</h2>

        <p>
          La antigüedad de cartera consiste en organizar las cuentas por cobrar
          de acuerdo con los días transcurridos desde su vencimiento. Esta
          clasificación permite conocer qué porcentaje de la cartera está al día
          y qué parte presenta niveles de mora crecientes.
        </p>

        <p>
          Es una de las métricas más utilizadas por áreas financieras, contables
          y de recuperación de cartera para medir el riesgo de incobrabilidad.
        </p>

        <h2>¿Por qué es importante analizar la antigüedad de cartera?</h2>

        <p>
          Una cartera envejecida representa un mayor riesgo para la liquidez de
          la empresa. Mientras más tiempo permanece una deuda sin pago, menores
          suelen ser las probabilidades de recuperación.
        </p>

        <ul>
          <li>Identificar clientes con mayor riesgo.</li>
          <li>Priorizar acciones de cobranza.</li>
          <li>Reducir pérdidas por incobrabilidad.</li>
          <li>Mejorar la planeación financiera.</li>
          <li>Optimizar el flujo de caja.</li>
        </ul>

        <h2>Clasificación común de la cartera por antigüedad</h2>

        <p>
          Aunque cada organización puede definir sus propios rangos, una
          clasificación frecuente es:
        </p>

        <ul>
          <li>0 a 30 días: cartera corriente.</li>
          <li>31 a 60 días: mora temprana.</li>
          <li>61 a 90 días: mora intermedia.</li>
          <li>91 a 180 días: mora avanzada.</li>
          <li>Más de 180 días: alto riesgo de recuperación.</li>
        </ul>

        <p>
          Esta segmentación permite diseñar estrategias específicas para cada
          grupo de clientes.
        </p>

        <h2>Cómo utilizar la antigüedad de cartera en la cobranza</h2>

        <p>
          El análisis de antigüedad debe utilizarse como base para planificar
          campañas de recuperación. Los clientes con mora reciente pueden
          gestionarse mediante recordatorios y acuerdos de pago, mientras que
          las cuentas con mora prolongada pueden requerir cobro prejurídico o
          jurídico.
        </p>

        <p>
          La información también ayuda a definir prioridades y asignar recursos
          de manera más eficiente.
        </p>

        <h2>Errores comunes al analizar la antigüedad de cartera</h2>

        <ul>
          <li>No actualizar periódicamente la información.</li>
          <li>Analizar únicamente el valor total de la cartera.</li>
          <li>No segmentar clientes por nivel de riesgo.</li>
          <li>Retrasar acciones de cobranza.</li>
          <li>No medir tendencias históricas.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          El análisis de antigüedad de cartera permite conocer la calidad de las
          cuentas por cobrar y anticipar riesgos financieros. Una correcta
          clasificación por días de mora facilita la toma de decisiones,
          fortalece la gestión de cobranza y mejora la recuperación de cartera
          empresarial.
        </p>
      </motion.article>
    </main>
  );
}
