"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RotacionCartera() {
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
          Rotación de cartera: cómo medir la eficiencia en la recuperación de
          cuentas por cobrar
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La rotación de cartera es uno de los indicadores financieros más
          importantes para evaluar qué tan eficiente es una empresa recuperando
          el dinero de sus ventas a crédito. Este KPI permite conocer cuántas
          veces la cartera se convierte en efectivo durante un período
          determinado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera mide la velocidad con la que una empresa cobra
          las cuentas pendientes de sus clientes. Un indicador alto suele
          significar una recuperación eficiente, mientras que un valor bajo
          puede reflejar problemas de cobranza o excesivos plazos de crédito.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo se calcula la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La fórmula más utilizada consiste en dividir las ventas a crédito
          realizadas durante el período entre el promedio de cuentas por cobrar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Rotación de cartera = Ventas a crédito ÷ Promedio de cuentas por
            cobrar
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El resultado indica cuántas veces la empresa recuperó su cartera
          durante el período analizado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si una empresa registra ventas a crédito por $1.200 millones durante
          el año y mantiene un promedio de cuentas por cobrar de $200 millones,
          su rotación de cartera será de 6 veces al año.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esto significa que, en promedio, la empresa recuperó completamente su
          cartera seis veces durante ese período.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante este indicador?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera permite evaluar la calidad de la gestión de
          cobranza y detectar posibles riesgos de liquidez. También ayuda a
          identificar oportunidades para optimizar procesos de recaudo y mejorar
          el flujo de caja.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Permite medir la eficiencia del recaudo.</li>
          <li>Ayuda a controlar la cartera vencida.</li>
          <li>Facilita la planeación financiera.</li>
          <li>Mejora la liquidez empresarial.</li>
          <li>Permite evaluar políticas de crédito.</li>
          <li>Reduce riesgos financieros.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo mejorar la rotación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para aumentar la rotación de cartera es recomendable fortalecer los
          procesos de cobranza preventiva, automatizar recordatorios de pago,
          segmentar clientes según riesgo y realizar seguimiento oportuno a las
          facturas vencidas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También es importante revisar periódicamente las condiciones de
          crédito otorgadas para evitar acumulación excesiva de cuentas por
          cobrar.
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
          La rotación de cartera es un indicador fundamental para conocer la
          eficiencia de la recuperación de cuentas por cobrar. Monitorear este
          KPI ayuda a mejorar la liquidez, reducir riesgos financieros y tomar
          mejores decisiones sobre crédito y cobranza.
        </motion.p>
      </motion.article>
    </main>
  );
}
