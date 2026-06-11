"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RiesgoCrediticio() {
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
          Finanzas y Gestión de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Qué es el riesgo crediticio en empresas y cómo reducirlo
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El riesgo crediticio es uno de los factores más importantes en la
          gestión financiera empresarial. Antes de vender a crédito o financiar
          servicios, las compañías deben evaluar la capacidad de pago de sus
          clientes para minimizar pérdidas y evitar el crecimiento de la cartera
          vencida.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es el riesgo crediticio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El riesgo crediticio es la probabilidad de que una persona o empresa
          incumpla el pago de una obligación financiera adquirida. Este riesgo
          existe cada vez que una organización concede crédito, permite pagos a
          plazo o entrega productos y servicios antes de recibir el dinero.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras mayor sea la incertidumbre sobre la capacidad de pago del
          cliente, mayor será el riesgo crediticio para la empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante evaluar el riesgo crediticio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una evaluación adecuada permite identificar clientes con alto riesgo
          de incumplimiento antes de otorgar crédito. Esto ayuda a proteger el
          flujo de caja, disminuir la morosidad y mejorar la rentabilidad de la
          organización.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, facilita la definición de políticas de crédito más seguras y
          ajustadas al perfil de cada cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que influyen en el riesgo crediticio
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Historial de pagos del cliente.</li>
          <li>Nivel de endeudamiento actual.</li>
          <li>Capacidad financiera y flujo de caja.</li>
          <li>Antigüedad de la empresa.</li>
          <li>Referencias comerciales.</li>
          <li>Comportamiento crediticio anterior.</li>
          <li>Condiciones económicas del sector.</li>
          <li>Situación jurídica o financiera del cliente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Consecuencias de un mal análisis crediticio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando una empresa concede crédito sin evaluar adecuadamente el
          riesgo, puede enfrentar incrementos significativos en la cartera
          vencida, pérdidas financieras, disminución de liquidez y mayores
          costos de recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En casos extremos, una alta concentración de clientes morosos puede
          afectar la estabilidad financiera y limitar las posibilidades de
          crecimiento del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir el riesgo crediticio en una empresa
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Solicitar documentación financiera actualizada.</li>
          <li>Verificar antecedentes comerciales.</li>
          <li>Definir límites de crédito por cliente.</li>
          <li>Implementar políticas claras de pago.</li>
          <li>Realizar seguimiento constante a la cartera.</li>
          <li>Actualizar periódicamente la evaluación del cliente.</li>
          <li>Diversificar la cartera de clientes.</li>
        </motion.ul>

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
          El riesgo crediticio es una variable fundamental en la gestión de
          cartera. Evaluarlo correctamente permite tomar decisiones más seguras,
          reducir la morosidad y proteger la salud financiera de la empresa.
          Implementar procesos de análisis crediticio sólidos es una inversión
          que contribuye al crecimiento sostenible del negocio.
        </motion.p>
      </motion.article>
    </main>
  );
}
