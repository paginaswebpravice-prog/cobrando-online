"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function EstrategiasCobranzaContent() {
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
          Estrategia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Estrategias de cobranza efectiva para empresas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La cobranza efectiva es fundamental para mantener la liquidez de una
          empresa y reducir la cartera vencida. Aplicar estrategias adecuadas de
          cobranza permite recuperar el dinero más rápido, mejorar el flujo de
          caja y reducir el riesgo financiero del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante una buena estrategia de cobranza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas tienen problemas financieros no porque vendan poco,
          sino porque no cobran a tiempo. Una buena estrategia de cobranza
          permite reducir la mora, mejorar la recuperación de cartera y mantener
          la estabilidad financiera de la empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales estrategias de cobranza efectiva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen diferentes estrategias que las empresas pueden implementar
          para mejorar la recuperación de cartera y reducir la morosidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Establecer políticas de crédito claras.</li>
          <li>Enviar recordatorios antes del vencimiento de la factura.</li>
          <li>Contactar al cliente inmediatamente entre en mora.</li>
          <li>Ofrecer acuerdos de pago.</li>
          <li>Cobrar intereses de mora.</li>
          <li>Realizar seguimiento constante.</li>
          <li>Iniciar cobro prejurídico a tiempo.</li>
          <li>Iniciar cobro jurídico cuando sea necesario.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Políticas de crédito y cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una de las estrategias más importantes es definir políticas de
          crédito, plazos de pago, intereses de mora y procedimientos de
          cobranza. Esto permite que los clientes conozcan las condiciones desde
          el inicio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Seguimiento de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El seguimiento constante es una de las estrategias más efectivas de
          cobranza. Muchas deudas se recuperan simplemente porque la empresa
          realiza llamadas, envía correos y mantiene contacto con el cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cobro prejurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando el cliente no paga después de varios recordatorios, se debe
          iniciar el cobro prejurídico mediante cartas formales de cobro y
          negociaciones de pago antes de iniciar un proceso judicial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el deudor no paga en la etapa prejurídica, se puede iniciar un
          proceso judicial para recuperar la deuda mediante embargos o acuerdos
          de pago dentro del proceso.
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
          Implementar estrategias de cobranza efectiva permite a las empresas
          recuperar cartera más rápido, reducir la morosidad y mejorar su flujo
          de caja. La clave está en realizar seguimiento constante, iniciar el
          cobro a tiempo y aplicar estrategias administrativas, prejurídicas y
          jurídicas.
        </motion.p>
      </motion.article>
    </main>
  );
}
