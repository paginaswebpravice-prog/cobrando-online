"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function FormatoAcuerdoPagoWord() {
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
          Plantillas de Cobranza
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Formato de acuerdo de pago en Word [Gratis] para recuperar cartera en
          Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Un acuerdo de pago es una herramienta fundamental para recuperar
          cartera sin necesidad de iniciar un proceso judicial. Tener un formato
          claro y correctamente estructurado ayuda a documentar la deuda,
          establecer fechas de pago y reducir el riesgo de incumplimientos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es un acuerdo de pago y para qué sirve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un acuerdo de pago es un documento mediante el cual el deudor reconoce
          una obligación pendiente y se compromete a pagarla en determinadas
          fechas o cuotas. Este documento sirve como soporte legal y facilita la
          recuperación de cartera de forma amistosa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué debe incluir un formato de acuerdo de pago
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Nombre completo del acreedor y del deudor.</li>
          <li>Número de identificación de las partes.</li>
          <li>Valor total de la deuda.</li>
          <li>Fechas de pago acordadas.</li>
          <li>Valor de cada cuota.</li>
          <li>Intereses de mora si aplican.</li>
          <li>Consecuencias por incumplimiento.</li>
          <li>Firmas de las partes.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo básico de acuerdo de pago en Word
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El acuerdo debe especificar claramente el valor adeudado, las cuotas,
          las fechas de pago y las condiciones en caso de incumplimiento. Entre
          más detallado esté el documento, mayor seguridad jurídica tendrá el
          proceso de recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores comunes al hacer acuerdos de pago
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No dejar el acuerdo por escrito.</li>
          <li>No incluir fechas específicas de pago.</li>
          <li>No documentar el valor exacto de la deuda.</li>
          <li>Confiar únicamente en acuerdos verbales.</li>
          <li>No definir consecuencias por incumplimiento.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo usar correctamente un acuerdo de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un formato de acuerdo de pago bien estructurado ayuda a recuperar
          cartera de forma más organizada y segura. Además de facilitar el
          cobro, permite tener soporte legal en caso de futuros incumplimientos.
        </motion.p>
      </motion.article>
    </main>
  );
}
