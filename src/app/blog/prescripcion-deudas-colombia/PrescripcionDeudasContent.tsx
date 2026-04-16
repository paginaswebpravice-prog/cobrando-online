"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PrescripcionDeudasContent() {
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
          Legal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Prescripción de deudas en Colombia: tiempos y cómo evitarla
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          En Colombia, las deudas no se pueden cobrar indefinidamente. Si pasa
          cierto tiempo sin iniciar acciones legales, el derecho a cobrar puede
          perderse. Conocer los tiempos de prescripción es clave para evitar
          pérdidas económicas en empresas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la prescripción de una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La prescripción es una figura legal mediante la cual se extingue el
          derecho de cobrar una deuda cuando ha pasado un tiempo determinado sin
          que el acreedor inicie un proceso judicial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tiempos de prescripción de deudas en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dependiendo del tipo de obligación, los tiempos de prescripción pueden
          variar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pagarés: 3 años</li>
          <li>Letras de cambio: 3 años</li>
          <li>Facturas: 3 años</li>
          <li>Contratos en general: 5 años</li>
          <li>Sentencias judiciales: 5 años</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Desde cuándo se cuenta la prescripción?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El tiempo empieza a contar desde que la obligación se hace exigible,
          es decir, desde la fecha en que el deudor debía pagar y no lo hizo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo evitar la prescripción de una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para evitar la prescripción, es fundamental iniciar el cobro jurídico
          antes de que se cumpla el plazo. También puede interrumpirse si el
          deudor reconoce la deuda o realiza pagos parciales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Interrupción de la prescripción
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Presentación de demanda judicial.</li>
          <li>Firma de acuerdos de pago.</li>
          <li>Abonos a la deuda.</li>
          <li>Reconocimiento escrito de la obligación.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Importancia de iniciar el cobro a tiempo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas en Colombia pierden dinero por no gestionar la cartera
          a tiempo. Actuar rápido aumenta la probabilidad de recuperación y
          evita que la deuda prescriba.
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
          La prescripción de deudas depende del tiempo y del tipo de obligación.
          Por eso, una gestión de cobro oportuna es clave para proteger el flujo
          de caja y evitar pérdidas financieras.
        </motion.p>
      </motion.article>
    </main>
  );
}
