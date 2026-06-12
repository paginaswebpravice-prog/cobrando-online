"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ExcelCartera() {
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
          Plantillas Financieras
        </motion.span>

        <h1>Dashboard de cartera en Excel para controlar cuentas por cobrar</h1>

        <p className={styles.intro}>
          Un dashboard de cartera en Excel permite visualizar de forma rápida el
          estado de las cuentas por cobrar, identificar clientes en mora y
          analizar indicadores clave para la toma de decisiones financieras.
          Aunque existen plataformas especializadas, Excel continúa siendo una
          de las herramientas más utilizadas por empresas de todos los tamaños.
        </p>

        <h2>¿Qué es un dashboard de cartera en Excel?</h2>

        <p>
          Es una plantilla que reúne información financiera relacionada con la
          cartera de clientes mediante tablas, gráficos e indicadores. Su
          objetivo es facilitar el seguimiento de pagos pendientes y medir la
          efectividad de la gestión de cobranza.
        </p>

        <p>
          Un dashboard bien diseñado permite analizar grandes volúmenes de datos
          de manera sencilla y detectar riesgos financieros oportunamente.
        </p>

        <h2>Beneficios de controlar la cartera en Excel</h2>

        <ul>
          <li>Centraliza la información financiera.</li>
          <li>Facilita el análisis de indicadores.</li>
          <li>Permite identificar clientes morosos.</li>
          <li>Mejora la toma de decisiones.</li>
          <li>Reduce el riesgo financiero.</li>
          <li>Ayuda a planificar acciones de cobranza.</li>
        </ul>

        <h2>Información que debe contener la plantilla</h2>

        <ul>
          <li>Nombre del cliente.</li>
          <li>Número de factura.</li>
          <li>Fecha de emisión.</li>
          <li>Fecha de vencimiento.</li>
          <li>Valor facturado.</li>
          <li>Saldo pendiente.</li>
          <li>Días de mora.</li>
          <li>Estado de la obligación.</li>
        </ul>

        <h2>Indicadores clave del dashboard</h2>

        <p>
          Los indicadores permiten medir el desempeño de la gestión de cartera y
          detectar oportunidades de mejora.
        </p>

        <ul>
          <li>Cartera total pendiente.</li>
          <li>Cartera vencida.</li>
          <li>Índice de morosidad.</li>
          <li>Porcentaje de recuperación.</li>
          <li>DSO (Días Promedio de Cobro).</li>
          <li>Rotación de cartera.</li>
          <li>Valor recuperado por período.</li>
        </ul>

        <h2>Gráficos recomendados</h2>

        <ul>
          <li>Distribución por antigüedad de cartera.</li>
          <li>Evolución mensual de recuperación.</li>
          <li>Cartera por cliente.</li>
          <li>Comparativo de cartera corriente y vencida.</li>
          <li>Tendencia de morosidad.</li>
        </ul>

        <h2>Cómo construir un dashboard en Excel</h2>

        <ol>
          <li>Consolidar la base de datos de clientes.</li>
          <li>Organizar las cuentas por cobrar.</li>
          <li>Crear tablas dinámicas.</li>
          <li>Definir indicadores financieros.</li>
          <li>Diseñar gráficos interactivos.</li>
          <li>Actualizar periódicamente la información.</li>
        </ol>

        <h2>Errores frecuentes</h2>

        <ul>
          <li>No actualizar la información.</li>
          <li>Utilizar demasiados indicadores.</li>
          <li>No validar la calidad de los datos.</li>
          <li>Diseñar gráficos difíciles de interpretar.</li>
          <li>No segmentar clientes por riesgo.</li>
        </ul>

        <h2>¿Cuándo migrar a un software especializado?</h2>

        <p>
          Cuando el volumen de clientes aumenta considerablemente, los procesos
          de cobranza se vuelven más complejos o se requiere automatización, es
          recomendable evaluar herramientas especializadas para gestión de
          cartera.
        </p>

        <h2>Conclusión</h2>

        <p>
          Un dashboard de cartera en Excel es una excelente alternativa para
          controlar cuentas por cobrar, analizar indicadores financieros y
          mejorar la recuperación de cartera. Con una estructura adecuada, puede
          convertirse en una herramienta clave para la gestión financiera de la
          empresa.
        </p>
      </motion.article>
    </main>
  );
}
