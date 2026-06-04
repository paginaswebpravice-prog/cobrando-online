"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ClientesNoPagan() {
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
          Cobro Jurídico
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Clientes que no pagan: qué hacer legalmente en Colombia para recuperar
          tu dinero
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uno de los problemas más frecuentes en las empresas es tener clientes
          que no pagan a tiempo o simplemente incumplen sus obligaciones. Esto
          afecta directamente el flujo de caja, genera problemas financieros y
          puede poner en riesgo la operación del negocio. Por eso es importante
          actuar rápidamente y aplicar estrategias legales efectivas para
          recuperar la cartera vencida.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué hacer cuando un cliente no paga una deuda en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo primero es verificar que la deuda esté correctamente soportada con
          documentos como contratos, facturas, pagarés, órdenes de servicio,
          correos o acuerdos firmados. Tener evidencia clara facilita cualquier
          proceso de cobranza o reclamación legal.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Después de validar la documentación, se recomienda iniciar un proceso
          de cobro prejurídico mediante llamadas, correos, mensajes formales o
          acuerdos de pago antes de acudir a una demanda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo recuperar dinero de clientes morosos sin perder tiempo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entre más tiempo pase, más difícil puede ser recuperar la deuda. Por
          eso es importante hacer seguimiento constante y actuar desde los
          primeros días de mora. Muchas empresas pierden dinero por esperar
          demasiado tiempo antes de iniciar la cobranza.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Contactar al cliente de forma inmediata.</li>
          <li>Documentar todas las comunicaciones.</li>
          <li>Enviar requerimientos de pago formales.</li>
          <li>Negociar acuerdos de pago por escrito.</li>
          <li>Escalar el caso a cobro jurídico si es necesario.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo iniciar un cobro jurídico contra un cliente que no paga
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el cliente ignora los requerimientos, incumple acuerdos o evita el
          pago de forma reiterada, puede ser necesario iniciar un proceso de
          cobro jurídico. Esto permite recuperar la deuda mediante acciones
          legales como demandas ejecutivas, embargos o conciliaciones.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué documentos ayudan a cobrar una deuda legalmente
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Facturas electrónicas.</li>
          <li>Contratos firmados.</li>
          <li>Pagarés.</li>
          <li>Órdenes de compra.</li>
          <li>Correos electrónicos.</li>
          <li>Mensajes de aceptación de deuda.</li>
          <li>Comprobantes de entrega.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo actuar frente a clientes que incumplen pagos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tener clientes que no pagan puede afectar seriamente la estabilidad de
          una empresa. Actuar rápidamente, documentar correctamente la deuda y
          aplicar estrategias legales adecuadas aumenta considerablemente las
          probabilidades de recuperar el dinero y evitar pérdidas mayores.
        </motion.p>
      </motion.article>
    </main>
  );
}
