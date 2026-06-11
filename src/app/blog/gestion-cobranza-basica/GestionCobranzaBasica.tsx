"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function GestionCobranzaBasica() {
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
          Fundamentos de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Gestión de cobranza: conceptos básicos para recuperar cartera de forma
          eficiente
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La gestión de cobranza es el conjunto de actividades que realiza una
          empresa para recuperar los pagos pendientes de sus clientes. Una buena
          estrategia de cobranza permite mantener la liquidez, reducir la
          morosidad y mejorar la estabilidad financiera del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la gestión de cobranza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La gestión de cobranza comprende todos los procesos destinados a
          asegurar que los clientes paguen sus obligaciones dentro de los plazos
          establecidos. Incluye actividades preventivas, seguimiento de pagos,
          negociación y recuperación de cartera vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El objetivo principal es recuperar el dinero adeudado sin afectar la
          relación comercial con el cliente y evitando que las cuentas entren en
          procesos jurídicos más complejos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Importancia de una buena gestión de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas se enfocan en vender más, pero descuidan el cobro de
          sus facturas. Cuando esto ocurre, aumentan los niveles de mora y se
          generan problemas de flujo de caja que pueden afectar la operación del
          negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión de cobranza eficiente ayuda a mantener ingresos
          constantes, reducir riesgos financieros y mejorar la rentabilidad de
          la organización.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales etapas de la cobranza
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Cobranza preventiva antes del vencimiento.</li>
          <li>Recordatorios automáticos de pago.</li>
          <li>Seguimiento a facturas vencidas.</li>
          <li>Negociación y acuerdos de pago.</li>
          <li>Cobranza prejurídica.</li>
          <li>Proceso de cobro jurídico cuando sea necesario.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Herramientas utilizadas en la gestión de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente las empresas utilizan múltiples canales para gestionar sus
          cobros, incluyendo llamadas telefónicas, correos electrónicos,
          mensajes de WhatsApp, plataformas CRM y sistemas automatizados de
          seguimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La automatización permite aumentar la eficiencia operativa y reducir
          significativamente los tiempos de recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes en la gestión de cobranza
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No realizar seguimiento oportuno.</li>
          <li>Esperar demasiado para contactar al deudor.</li>
          <li>No documentar acuerdos de pago.</li>
          <li>Carecer de políticas claras de crédito.</li>
          <li>No medir indicadores de cartera.</li>
          <li>No segmentar clientes según nivel de riesgo.</li>
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
          La gestión de cobranza es un proceso fundamental para cualquier
          empresa que venda productos o servicios a crédito. Implementar buenas
          prácticas de seguimiento, negociación y recuperación permite reducir
          la cartera vencida y fortalecer la salud financiera de la
          organización.
        </motion.p>
      </motion.article>
    </main>
  );
}
