"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DsoDiasCartera() {
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
          Finanzas y KPIs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          DSO: días de cartera promedio y cómo medir la eficiencia de cobranza
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El DSO (Days Sales Outstanding) o días de cartera promedio es uno de
          los indicadores financieros más importantes para evaluar la gestión de
          cartera de una empresa. Este KPI permite conocer cuánto tiempo tarda
          una organización en recuperar el dinero de sus ventas a crédito.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es el DSO?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El DSO es un indicador que mide el número promedio de días que una
          empresa tarda en cobrar sus facturas después de realizar una venta.
          Cuanto menor sea el resultado, más eficiente será la recuperación de
          cartera y mejor será el flujo de caja del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Fórmula para calcular el DSO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La fórmula más utilizada es:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            DSO = (Cuentas por cobrar ÷ Ventas a crédito) × Número de días
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por ejemplo, si una empresa tiene $100 millones en cuentas por cobrar
          y ventas a crédito por $300 millones durante un período de 90 días, el
          DSO sería de 30 días aproximadamente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante medir el DSO?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador permite identificar problemas en los procesos de
          cobranza y anticipar riesgos de liquidez. Cuando el DSO aumenta de
          manera constante, puede ser una señal de retrasos en los pagos,
          políticas de crédito inadecuadas o deficiencias en la gestión de
          cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de controlar el DSO
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Mejora el flujo de caja.</li>
          <li>Reduce la cartera vencida.</li>
          <li>Facilita la toma de decisiones financieras.</li>
          <li>Permite evaluar la efectividad de la cobranza.</li>
          <li>Ayuda a optimizar políticas de crédito.</li>
          <li>Disminuye la necesidad de financiamiento externo.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir los días de cartera promedio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para disminuir el DSO es recomendable implementar recordatorios
          preventivos de pago, automatizar procesos de cobranza, realizar
          seguimiento oportuno a las facturas vencidas y revisar periódicamente
          las políticas de crédito de los clientes.
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
          El DSO es uno de los indicadores más utilizados para medir la salud
          financiera de la cartera. Monitorearlo de forma constante permite
          detectar oportunidades de mejora, acelerar el recaudo y fortalecer la
          liquidez de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
