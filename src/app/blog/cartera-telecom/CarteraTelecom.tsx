"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraTelecom() {
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
          Sector Telecomunicaciones
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera en telecomunicaciones: estrategias de cobranza para reducir la
          morosidad y mejorar el recaudo
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Las empresas de telecomunicaciones administran grandes volúmenes de
          clientes y facturación mensual. Debido a la naturaleza recurrente de
          los servicios, la gestión de cartera se convierte en un proceso clave
          para garantizar liquidez, mantener la operación y reducir los índices
          de mora.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué la cartera es tan importante en telecomunicaciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los operadores de telecomunicaciones dependen de pagos periódicos por
          servicios de internet, telefonía, televisión y soluciones
          corporativas. Cuando aumentan los retrasos en los pagos, el impacto
          puede reflejarse rápidamente en los ingresos y en la rentabilidad de
          la operación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales causas de mora en clientes de telecomunicaciones
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Olvido de fechas de pago.</li>
          <li>Dificultades económicas temporales.</li>
          <li>Inconformidad con el servicio prestado.</li>
          <li>Facturación acumulada.</li>
          <li>Cambios de residencia o contacto.</li>
          <li>Procesos de cancelación incompletos.</li>
          <li>Falta de seguimiento oportuno.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias efectivas de cobranza en telecomunicaciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en este sector suele apoyarse en
          automatización, segmentación de clientes y campañas de comunicación
          multicanal. Los recordatorios preventivos y los acuerdos de pago
          suelen generar mejores resultados que esperar a que la deuda alcance
          altos niveles de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También es recomendable clasificar los clientes según antigüedad de la
          deuda, valor pendiente y comportamiento histórico de pago para aplicar
          estrategias diferenciadas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tecnología y automatización en la gestión de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El uso de herramientas digitales permite automatizar recordatorios por
          WhatsApp, SMS, correo electrónico y llamadas programadas. Esto reduce
          costos operativos y mejora la tasa de recuperación de cartera.
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
          La cartera en telecomunicaciones requiere procesos de cobranza ágiles,
          automatizados y orientados al cliente. Una gestión adecuada permite
          disminuir la morosidad, aumentar la recuperación y mantener una
          operación financiera saludable en un mercado altamente competitivo.
        </motion.p>
      </motion.article>
    </main>
  );
}
