"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CobrarFacturaVencida() {
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
          Estrategias de Cobranza
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Cómo cobrar una factura vencida sin perder al cliente en Colombia?
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cobrar una factura vencida puede convertirse en una situación incómoda
          para cualquier empresa. Muchas veces existe el temor de afectar la
          relación comercial con el cliente o incluso perder futuras ventas. Sin
          embargo, aplicar estrategias de cobranza adecuadas permite recuperar
          el dinero pendiente sin generar conflictos innecesarios.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo cobrar una factura vencida de forma profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El primer paso es mantener una comunicación clara, profesional y
          respetuosa. En muchos casos, los retrasos en pagos se deben a
          problemas administrativos, olvidos o dificultades temporales de
          liquidez.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por eso se recomienda evitar mensajes agresivos o amenazas desde el
          inicio. Una buena gestión de cobranza busca recuperar el dinero y al
          mismo tiempo conservar la relación comercial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias efectivas para cobrar clientes morosos sin afectar la
          relación comercial
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Enviar recordatorios amigables antes del vencimiento.</li>
          <li>Hacer seguimiento inmediato después de la mora.</li>
          <li>Usar correos y mensajes profesionales.</li>
          <li>Escuchar las razones del retraso.</li>
          <li>Negociar acuerdos de pago cuando sea necesario.</li>
          <li>Documentar todas las conversaciones.</li>
          <li>Escalar el caso progresivamente si no hay respuesta.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo pasar de una cobranza amistosa a un cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el cliente evita responder, incumple acuerdos de pago o mantiene la
          deuda durante mucho tiempo, puede ser necesario iniciar un proceso de
          cobro prejurídico o jurídico. Lo importante es agotar primero las vías
          de negociación antes de acudir a acciones legales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores comunes al cobrar una factura vencida
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No realizar seguimiento oportuno.</li>
          <li>Esperar demasiado tiempo para cobrar.</li>
          <li>Enviar mensajes agresivos.</li>
          <li>No documentar acuerdos.</li>
          <li>No tener soportes de la deuda.</li>
          <li>Descuidar la comunicación con el cliente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo recuperar pagos pendientes sin perder clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recuperar una factura vencida no significa necesariamente perder al
          cliente. Una cobranza profesional, estratégica y bien documentada
          permite aumentar las probabilidades de pago mientras se mantiene una
          relación comercial sana y sostenible.
        </motion.p>
      </motion.article>
    </main>
  );
}
