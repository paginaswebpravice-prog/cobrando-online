"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ComoFuncionaRecuperacionDinero() {
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
          Recuperación de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cómo funciona realmente la recuperación de dinero
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          La recuperación de dinero es el conjunto de acciones que realiza una
          empresa para cobrar facturas, obligaciones o cuentas pendientes de
          pago. Aunque muchas personas creen que únicamente consiste en llamar a
          los clientes morosos, en realidad es un proceso estructurado que busca
          recuperar recursos sin afectar la relación comercial y minimizando las
          pérdidas financieras.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Qué es la recuperación de dinero
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La recuperación de dinero comprende todas las actividades destinadas a
          obtener el pago de una deuda vencida. Puede aplicarse a empresas,
          profesionales independientes, instituciones educativas, clínicas,
          comercios y cualquier organización que venda productos o servicios a
          crédito.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          El objetivo principal es convertir cuentas por cobrar en efectivo,
          mejorando la liquidez y garantizando la continuidad de las operaciones
          de la empresa.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Etapas del proceso de recuperación
        </motion.h2>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>Identificación de cuentas vencidas.</li>
          <li>Recordatorios preventivos de pago.</li>
          <li>Gestión de cobranza telefónica o digital.</li>
          <li>Negociación de acuerdos de pago.</li>
          <li>Seguimiento al cumplimiento de compromisos.</li>
          <li>Gestión prejurídica.</li>
          <li>Cobro jurídico cuando es necesario.</li>
        </motion.ul>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Por qué es importante recuperar dinero rápidamente
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Mientras más tiempo permanezca una deuda sin ser gestionada, mayores
          son las probabilidades de incumplimiento definitivo. Además, la mora
          afecta el flujo de caja, dificulta el cumplimiento de obligaciones y
          limita la capacidad de crecimiento de la organización.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas suelen implementar procesos de cobranza
          estructurados que permitan actuar desde los primeros días de atraso.
        </motion.p>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Herramientas utilizadas en la recuperación de cartera
        </motion.h2>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>Correos electrónicos automatizados.</li>
          <li>Mensajes de WhatsApp.</li>
          <li>Llamadas de seguimiento.</li>
          <li>Software de gestión de cartera.</li>
          <li>Acuerdos de pago documentados.</li>
          <li>Procesos jurídicos de cobro.</li>
        </motion.ul>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La recuperación de dinero es un proceso estratégico que combina
          prevención, seguimiento, negociación y acciones legales cuando son
          necesarias. Implementar una metodología adecuada permite recuperar más
          cartera, mejorar la liquidez y reducir el riesgo financiero para la
          empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
