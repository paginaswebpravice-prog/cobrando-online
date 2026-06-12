"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraRetail() {
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
          Sector Retail
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cartera en retail: estrategias de recuperación de cartera en comercio
          y empresas del sector retail
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Las empresas del sector retail enfrentan importantes desafíos en la
          gestión de cartera debido al alto volumen de clientes, ventas a
          crédito, financiamiento de productos y operaciones comerciales de gran
          escala. Una estrategia adecuada de cobranza permite reducir la mora y
          proteger la rentabilidad del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Qué es la cartera en el sector retail
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La cartera en retail corresponde a las obligaciones pendientes de pago
          derivadas de ventas realizadas a crédito, financiamiento de compras,
          convenios empresariales o programas de fidelización que incluyen
          facilidades de pago para los clientes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales causas de cartera vencida en retail
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Incremento de ventas financiadas sin análisis adecuado.</li>
          <li>Falta de seguimiento oportuno a pagos vencidos.</li>
          <li>Clientes con sobreendeudamiento.</li>
          <li>Procesos manuales de cobranza poco eficientes.</li>
          <li>Ausencia de segmentación de clientes según riesgo.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estrategias efectivas para recuperar cartera en retail
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La automatización de recordatorios, segmentación de clientes, campañas
          de cobranza por canales digitales, acuerdos de pago y monitoreo
          permanente de indicadores son algunas de las estrategias más
          utilizadas para mejorar la recuperación de cartera en el sector.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Importancia de la cobranza preventiva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contactar al cliente antes del vencimiento de sus obligaciones ayuda a
          reducir significativamente la morosidad. Los procesos preventivos son
          más económicos y suelen generar mejores resultados que las acciones
          correctivas cuando la deuda ya presenta largos periodos de atraso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cómo medir el desempeño de la cartera retail
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Indicadores como porcentaje de cartera vencida, tasa de recuperación,
          rotación de cartera, antigüedad de saldos y días promedio de recaudo
          permiten evaluar la efectividad de las estrategias implementadas y
          detectar oportunidades de mejora.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una gestión eficiente de cartera en retail permite mantener la
          liquidez, disminuir pérdidas por mora y fortalecer la estabilidad
          financiera del negocio. La combinación de tecnología, seguimiento
          oportuno y procesos estructurados es clave para maximizar los niveles
          de recuperación.
        </motion.p>
      </motion.article>
    </main>
  );
}
