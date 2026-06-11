"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QueEsCarteraVencida() {
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
          Fundamentos de Cartera
        </motion.span>

        <h1>¿Qué es la cartera vencida y cómo se clasifica?</h1>

        <p className={styles.intro}>
          La cartera vencida representa las obligaciones que no han sido pagadas
          dentro de los plazos acordados entre una empresa y sus clientes. Es
          uno de los principales indicadores de riesgo financiero y afecta
          directamente la liquidez, la rentabilidad y la capacidad de
          crecimiento de cualquier organización.
        </p>

        <h2>¿Qué significa tener cartera vencida?</h2>

        <p>
          Una cartera se considera vencida cuando una factura, pagaré,
          obligación comercial o cualquier cuenta por cobrar supera la fecha de
          vencimiento sin que el pago haya sido realizado.
        </p>

        <p>
          Aunque una deuda tenga pocos días de retraso, ya empieza a generar
          riesgo para la empresa. A medida que aumenta el tiempo de mora,
          disminuyen las probabilidades de recuperación y aumentan los costos de
          cobranza.
        </p>

        <h2>¿Cómo se clasifica la cartera vencida?</h2>

        <p>
          La clasificación puede variar según la empresa, pero normalmente se
          divide de acuerdo con los días de mora:
        </p>

        <ul>
          <li>1 a 30 días de mora.</li>
          <li>31 a 60 días de mora.</li>
          <li>61 a 90 días de mora.</li>
          <li>91 a 180 días de mora.</li>
          <li>181 a 360 días de mora.</li>
          <li>Más de 360 días de mora.</li>
        </ul>

        <p>
          Esta segmentación permite definir estrategias de cobranza diferentes
          para cada grupo de clientes y optimizar los esfuerzos de recuperación.
        </p>

        <h2>¿Por qué la cartera vencida afecta a las empresas?</h2>

        <p>
          Cuando una empresa no logra recaudar oportunamente sus cuentas por
          cobrar, dispone de menos recursos para operar. Esto puede afectar el
          pago de proveedores, nómina, impuestos e inversiones futuras.
        </p>

        <p>
          Además, una alta concentración de cartera vencida puede obligar a las
          empresas a recurrir a créditos bancarios o financiamiento externo para
          mantener sus operaciones.
        </p>

        <h2>¿Cómo reducir el crecimiento de la cartera vencida?</h2>

        <ul>
          <li>Realizar análisis de riesgo antes de otorgar crédito.</li>
          <li>Definir políticas claras de pago.</li>
          <li>Enviar recordatorios antes del vencimiento.</li>
          <li>Implementar seguimiento constante a los clientes.</li>
          <li>Actuar rápidamente ante los primeros días de mora.</li>
          <li>Contar con procesos de cobranza estructurados.</li>
        </ul>

        <h2>¿Cuándo una cartera vencida se vuelve crítica?</h2>

        <p>
          Generalmente, cuando supera los 90 días de mora, las probabilidades de
          recuperación empiezan a disminuir significativamente. Por esta razón,
          muchas empresas intensifican las acciones de cobranza preventiva y
          prejurídica antes de llegar a ese punto.
        </p>

        <h2>Conclusión</h2>

        <p>
          La cartera vencida es uno de los principales retos financieros para
          las empresas. Comprender cómo se clasifica y actuar oportunamente
          permite reducir riesgos, mejorar el flujo de caja y aumentar las
          probabilidades de recuperación de las obligaciones pendientes.
        </p>
      </motion.article>
    </main>
  );
}
