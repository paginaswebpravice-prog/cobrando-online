"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraPymes() {
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
          Recuperación de Cartera para Empresas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Recuperación de cartera para PYMES: guía completa en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La cartera vencida es uno de los problemas financieros más frecuentes
          en las pequeñas y medianas empresas. Cuando los clientes no pagan a
          tiempo, la liquidez disminuye, se afectan las operaciones y aumenta el
          riesgo financiero del negocio. Por eso, implementar estrategias de
          recuperación de cartera es fundamental para mantener la estabilidad y
          el crecimiento de una PYME en Colombia.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es la recuperación de cartera y por qué es importante para las
          PYMES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera consiste en gestionar el cobro de facturas,
          obligaciones o deudas pendientes para evitar pérdidas económicas y
          mejorar el flujo de caja de la empresa. En las PYMES, recuperar pagos
          atrasados es especialmente importante porque suelen tener menos margen
          financiero que las grandes compañías.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir la mora y mejorar el flujo de caja en una PYME
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Definir políticas claras de crédito y pago.</li>
          <li>Hacer seguimiento constante a las facturas.</li>
          <li>Enviar recordatorios antes del vencimiento.</li>
          <li>Documentar acuerdos y compromisos de pago.</li>
          <li>Actuar rápidamente ante los primeros días de mora.</li>
          <li>Negociar acuerdos de pago cuando sea necesario.</li>
          <li>Externalizar la cobranza en casos complejos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores comunes en la recuperación de cartera de pequeñas empresas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas PYMES esperan demasiado tiempo antes de iniciar la cobranza o
          no cuentan con procesos claros de seguimiento. También es frecuente no
          documentar correctamente las deudas o confiar únicamente en acuerdos
          verbales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos errores aumentan el riesgo de perder dinero y dificultan iniciar
          procesos legales de recuperación más adelante.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo una PYME debería acudir a cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando el cliente incumple acuerdos, evita responder o la deuda lleva
          varios meses vencida, puede ser necesario iniciar un proceso de cobro
          prejurídico o jurídico. Esto ayuda a proteger los intereses de la
          empresa y aumentar las probabilidades de recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo mejorar la recuperación de cartera en una PYME
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una buena gestión de cartera permite que las pequeñas y medianas
          empresas reduzcan la mora, mejoren su liquidez y protejan su
          estabilidad financiera. Actuar rápido, hacer seguimiento constante y
          documentar correctamente las deudas son claves para recuperar cartera
          de forma efectiva en Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
