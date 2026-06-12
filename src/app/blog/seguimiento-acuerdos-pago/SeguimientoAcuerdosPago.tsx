"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function SeguimientoAcuerdosPago() {
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
          Gestión de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Seguimiento de acuerdos de pago: cómo asegurar el cumplimiento y
          recuperar la cartera de forma efectiva
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Firmar un acuerdo de pago es apenas el primer paso para recuperar una
          deuda. El verdadero éxito de una estrategia de recuperación de cartera
          depende de realizar un seguimiento constante que permita verificar el
          cumplimiento de los compromisos adquiridos y actuar rápidamente ante
          cualquier incumplimiento.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante hacer seguimiento?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas cometen el error de asumir que una vez firmado el
          acuerdo el problema está resuelto. Sin embargo, sin un control
          adecuado, es común que los deudores incumplan las fechas pactadas o
          retrasen nuevamente los pagos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El seguimiento permite detectar riesgos tempranamente y aumentar la
          probabilidad de recuperación del dinero antes de que la deuda vuelva a
          deteriorarse.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Acciones recomendadas para el seguimiento
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Registrar todas las fechas de pago comprometidas.</li>
          <li>Enviar recordatorios antes de cada vencimiento.</li>
          <li>Confirmar la recepción de cada pago realizado.</li>
          <li>Actualizar el saldo pendiente después de cada abono.</li>
          <li>Documentar todas las comunicaciones con el deudor.</li>
          <li>Escalar rápidamente ante retrasos o incumplimientos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Herramientas que facilitan el control de acuerdos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Actualmente existen herramientas tecnológicas que permiten automatizar
          recordatorios por correo electrónico, SMS o WhatsApp. También es
          posible utilizar software de cartera y CRM para monitorear los pagos,
          generar alertas y mantener trazabilidad completa de cada acuerdo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Qué hacer cuando el deudor incumple
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando se presenta un incumplimiento, lo recomendable es contactar al
          deudor inmediatamente para identificar la causa del retraso. Si la
          situación persiste, la empresa puede renegociar las condiciones o
          activar las acciones previstas en el acuerdo, incluyendo procesos de
          cobro prejurídico o jurídico.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Beneficios de un seguimiento adecuado
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Mayor porcentaje de recuperación.</li>
          <li>Reducción de incumplimientos.</li>
          <li>Mejor control de la cartera.</li>
          <li>Mayor liquidez para la empresa.</li>
          <li>Disminución de costos judiciales.</li>
          <li>Mejor relación con los clientes.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El seguimiento de acuerdos de pago es una etapa fundamental dentro de
          cualquier estrategia de recuperación de cartera. Un control adecuado,
          apoyado en procesos claros y herramientas tecnológicas, aumenta
          significativamente las probabilidades de cumplimiento y recuperación
          efectiva de las deudas.
        </motion.p>
      </motion.article>
    </main>
  );
}
