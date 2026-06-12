"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IndiceMorosidad() {
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

        <h1>Índice de morosidad: cómo calcularlo y qué significa</h1>

        <p className={styles.intro}>
          El índice de morosidad es uno de los indicadores más importantes para
          evaluar la calidad de la cartera de una empresa. Permite conocer qué
          porcentaje de las cuentas por cobrar se encuentra vencido y representa
          un riesgo para la liquidez y estabilidad financiera.
        </p>

        <h2>¿Qué es el índice de morosidad?</h2>

        <p>
          Es un indicador financiero que mide la proporción de cartera vencida
          respecto al total de la cartera por cobrar. Cuanto mayor sea este
          porcentaje, mayor será el riesgo financiero asociado al recaudo.
        </p>

        <p>
          Este indicador es utilizado por empresas, entidades financieras,
          departamentos de cartera y áreas contables para monitorear la salud de
          sus cuentas por cobrar.
        </p>

        <h2>¿Cómo se calcula?</h2>

        <p>La fórmula más utilizada es:</p>

        <p>
          <strong>
            Índice de Morosidad = (Cartera Vencida / Cartera Total) × 100
          </strong>
        </p>

        <h2>Ejemplo práctico</h2>

        <p>Supongamos que una empresa tiene:</p>

        <ul>
          <li>Cartera total: $500.000.000</li>
          <li>Cartera vencida: $75.000.000</li>
        </ul>

        <p>Aplicando la fórmula:</p>

        <p>
          <strong>(75.000.000 / 500.000.000) × 100 = 15%</strong>
        </p>

        <p>Esto significa que el 15% de la cartera presenta mora.</p>

        <h2>¿Qué se considera un buen índice?</h2>

        <p>
          No existe un valor universal, ya que depende del sector económico, las
          políticas de crédito y el perfil de los clientes.
        </p>

        <ul>
          <li>Menor al 5%: riesgo bajo.</li>
          <li>Entre 5% y 10%: nivel controlado.</li>
          <li>Entre 10% y 20%: requiere seguimiento.</li>
          <li>Superior al 20%: riesgo elevado.</li>
        </ul>

        <h2>¿Por qué es importante medir la morosidad?</h2>

        <ul>
          <li>Permite identificar riesgos financieros.</li>
          <li>Facilita la toma de decisiones.</li>
          <li>Mejora la planeación del flujo de caja.</li>
          <li>Ayuda a evaluar políticas de crédito.</li>
          <li>Permite medir la efectividad de la cobranza.</li>
        </ul>

        <h2>Factores que aumentan la morosidad</h2>

        <ul>
          <li>Procesos de crédito poco rigurosos.</li>
          <li>Seguimiento insuficiente a clientes.</li>
          <li>Falta de políticas de cobranza.</li>
          <li>Dificultades económicas de los clientes.</li>
          <li>Errores administrativos y de facturación.</li>
        </ul>

        <h2>Cómo reducir el índice de morosidad</h2>

        <ul>
          <li>Implementar controles de crédito.</li>
          <li>Automatizar recordatorios de pago.</li>
          <li>Realizar seguimiento preventivo.</li>
          <li>Negociar acuerdos oportunamente.</li>
          <li>Monitorear indicadores de cartera.</li>
        </ul>

        <h2>Indicadores relacionados</h2>

        <ul>
          <li>DSO (Días de Venta Pendientes de Cobro).</li>
          <li>Rotación de cartera.</li>
          <li>Antigüedad de cartera.</li>
          <li>Porcentaje de recuperación.</li>
          <li>Riesgo de cartera.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          El índice de morosidad es un indicador fundamental para evaluar la
          calidad de la cartera y detectar riesgos financieros de manera
          temprana. Su monitoreo constante permite tomar decisiones oportunas,
          mejorar la recuperación de cartera y proteger la liquidez de la
          empresa.
        </p>
      </motion.article>
    </main>
  );
}
