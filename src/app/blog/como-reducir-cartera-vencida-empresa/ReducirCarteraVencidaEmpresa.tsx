"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ReducirCarteraVencidaEmpresa() {
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
          Finanzas Empresariales
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Cómo reducir la cartera vencida en una empresa?
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La cartera vencida puede afectar seriamente la estabilidad financiera
          de una empresa. Cuando los clientes no pagan a tiempo, el flujo de
          caja disminuye, aumentan los problemas operativos y se limita la
          capacidad de crecimiento del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Implementar estrategias de seguimiento, prevención y cobranza permite
          reducir la mora y mejorar la liquidez empresarial. Una buena gestión
          de cartera es clave para proteger la sostenibilidad financiera de la
          empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué aumenta la cartera vencida en las empresas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas presentan altos niveles de mora debido a políticas de
          crédito débiles, falta de seguimiento a facturas pendientes o ausencia
          de controles financieros adecuados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También es común que las empresas permitan retrasos prolongados antes
          de iniciar acciones de cobranza, lo que reduce las probabilidades de
          recuperar el dinero.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias efectivas para reducir la cartera vencida
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Definir políticas claras de crédito y pago.</li>
          <li>Validar antecedentes financieros de los clientes.</li>
          <li>Enviar recordatorios antes del vencimiento.</li>
          <li>Automatizar procesos de seguimiento.</li>
          <li>Clasificar la cartera según antigüedad.</li>
          <li>Negociar acuerdos de pago oportunamente.</li>
          <li>Iniciar cobro prejurídico de manera temprana.</li>
          <li>Medir indicadores de mora constantemente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo mejorar el seguimiento de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El seguimiento constante es fundamental para reducir la mora. Las
          empresas deben realizar contactos periódicos, verificar fechas de pago
          y documentar cada gestión realizada con los clientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un sistema organizado de seguimiento permite detectar riesgos
          tempranamente y tomar decisiones antes de que las deudas aumenten.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo iniciar acciones de cobranza más fuertes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando un cliente incumple repetidamente o supera varios meses de
          mora, es recomendable iniciar procesos de cobranza prejurídica o
          jurídica para evitar la pérdida de la deuda.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actuar oportunamente aumenta las probabilidades de recuperación y
          evita que la obligación prescriba con el tiempo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo proteger el flujo de caja empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reducir la cartera vencida requiere procesos claros, seguimiento
          permanente y estrategias preventivas de cobranza. Las empresas que
          gestionan correctamente su cartera logran mejorar la liquidez,
          disminuir riesgos financieros y fortalecer su crecimiento en el largo
          plazo.
        </motion.p>
      </motion.article>
    </main>
  );
}
