"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdosPago() {
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
          Negociación
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Acuerdos de pago con deudores: recupera tu dinero sin demandar en
          Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los acuerdos de pago son una de las herramientas más utilizadas en la
          recuperación de cartera, ya que permiten que el deudor pague la deuda
          en cuotas sin necesidad de iniciar un proceso judicial. Sin embargo,
          estos acuerdos deben realizarse correctamente para que tengan validez
          y realmente garanticen el pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es un acuerdo de pago y cómo funciona en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un acuerdo de pago es un documento en el que el deudor se compromete a
          pagar una deuda en un plazo determinado o en varias cuotas. Este
          acuerdo debe quedar por escrito y firmado por el deudor para que tenga
          validez legal.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo hacer un acuerdo de pago para recuperar cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El acuerdo de pago se recomienda cuando el deudor reconoce la deuda
          pero no tiene el dinero para pagarla en un solo pago. En estos casos,
          negociar cuotas puede ser la mejor opción para recuperar la cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué debe incluir un acuerdo de pago para que sea válido
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Nombre del deudor y del acreedor.</li>
          <li>Valor total de la deuda.</li>
          <li>Número de cuotas.</li>
          <li>Valor de cada cuota.</li>
          <li>Fechas de pago.</li>
          <li>Intereses de mora si aplica.</li>
          <li>Consecuencias por incumplimiento.</li>
          <li>Firma del deudor.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo usar acuerdos de pago para evitar procesos judiciales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los acuerdos de pago son una herramienta muy efectiva para la
          recuperación de cartera, siempre que se realicen por escrito y con
          condiciones claras. Un buen acuerdo de pago puede evitar procesos
          judiciales y facilitar la recuperación del dinero.
        </motion.p>
      </motion.article>
    </main>
  );
}
