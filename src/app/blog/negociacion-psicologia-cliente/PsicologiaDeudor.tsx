"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PsicologiaDeudor() {
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
          Psicología y Negociación
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Psicología del deudor: cómo entender su comportamiento para mejorar la
          recuperación de cartera
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La recuperación de cartera no depende únicamente de documentos,
          llamadas o procesos jurídicos. Comprender la psicología del deudor
          permite identificar sus motivaciones, objeciones y comportamiento
          frente al pago, aumentando significativamente las probabilidades de
          éxito en la gestión de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante entender al deudor?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cada cliente tiene razones diferentes para retrasar sus pagos. Algunos
          enfrentan problemas financieros temporales, mientras que otros
          simplemente priorizan otras obligaciones. Identificar la causa real de
          la mora permite diseñar estrategias de negociación más efectivas y
          personalizadas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tipos de deudores más comunes
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Deudor con dificultades económicas reales.</li>
          <li>Deudor olvidadizo o desorganizado.</li>
          <li>Deudor inconforme con el producto o servicio.</li>
          <li>Deudor estratégico que retrasa pagos intencionalmente.</li>
          <li>Deudor que enfrenta problemas personales o empresariales.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores psicológicos que influyen en el pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La percepción de urgencia, la confianza en la empresa, el miedo a las
          consecuencias legales y la facilidad de pago son factores que influyen
          directamente en la decisión del deudor. Una comunicación adecuada
          puede aumentar el compromiso y acelerar la recuperación del dinero.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo utilizar la psicología para negociar mejor
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Escuchar antes de proponer soluciones.</li>
          <li>Mostrar empatía sin perder firmeza.</li>
          <li>Presentar opciones de pago realistas.</li>
          <li>Generar sentido de responsabilidad.</li>
          <li>Mantener una comunicación respetuosa y profesional.</li>
          <li>Evitar confrontaciones innecesarias.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes al tratar con deudores
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Presionar excesivamente, utilizar amenazas, ignorar las circunstancias
          del cliente o mantener una comunicación agresiva puede generar rechazo
          y dificultar aún más la recuperación de la cartera.
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
          Comprender la psicología del deudor permite mejorar la comunicación,
          fortalecer la negociación y aumentar las tasas de recuperación. Una
          estrategia centrada en las personas suele ser más efectiva que una
          gestión basada únicamente en la presión o las acciones legales.
        </motion.p>
      </motion.article>
    </main>
  );
}
