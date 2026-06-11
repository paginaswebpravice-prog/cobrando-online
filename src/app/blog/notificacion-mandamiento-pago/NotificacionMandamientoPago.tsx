"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function NotificacionMandamientoPago() {
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
          Cobro Jurídico
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Notificación y mandamiento de pago: primeras etapas del cobro jurídico
          en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cuando un acreedor inicia un proceso ejecutivo para recuperar una
          deuda, una de las primeras actuaciones del juez es emitir el
          mandamiento de pago. Posteriormente, este debe ser notificado al
          deudor para que tenga conocimiento formal de la demanda y pueda
          ejercer su derecho de defensa. Estas etapas son fundamentales para el
          desarrollo del proceso de cobro jurídico.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es el mandamiento de pago?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El mandamiento de pago es una orden emitida por el juez mediante la
          cual se le exige al deudor cumplir con el pago de la obligación
          reclamada por el acreedor. Para que sea expedido, el demandante debe
          presentar documentos que acrediten claramente la existencia de la
          deuda, como facturas, pagarés, letras de cambio o contratos con mérito
          ejecutivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una vez el juez verifica que se cumplen los requisitos legales,
          autoriza el inicio formal del proceso y ordena que el deudor sea
          requerido para pagar.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante la notificación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La notificación tiene como objetivo informar oficialmente al deudor
          que existe una demanda en su contra. Sin esta actuación procesal no es
          posible avanzar válidamente en la mayoría de las etapas del proceso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, garantiza el derecho constitucional al debido proceso,
          permitiendo que el demandado conozca las pretensiones del acreedor y
          presente las defensas que considere pertinentes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Formas de notificación en Colombia
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Notificación personal.</li>
          <li>Notificación por aviso.</li>
          <li>Notificación electrónica cuando aplica.</li>
          <li>Notificación a través de apoderados autorizados.</li>
          <li>Otros mecanismos permitidos por la ley procesal.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El mecanismo utilizado dependerá de las circunstancias del caso y de
          la información disponible sobre el deudor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué ocurre después de la notificación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una vez notificado, el deudor dispone de un plazo legal para pagar la
          obligación o presentar excepciones frente a la demanda. Si no realiza
          ninguna actuación, el proceso puede continuar y el acreedor podrá
          solicitar medidas para intentar recuperar la deuda.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchos casos, esta etapa también abre la posibilidad de negociar
          acuerdos de pago antes de que el proceso avance hacia actuaciones más
          complejas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Consecuencias de ignorar un mandamiento de pago
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Posibilidad de continuar el proceso sin oposición.</li>
          <li>Solicitud de medidas cautelares por parte del acreedor.</li>
          <li>Embargos sobre bienes o cuentas bancarias.</li>
          <li>Incremento de intereses y costos procesales.</li>
          <li>Mayor dificultad para negociar condiciones favorables.</li>
        </motion.ul>

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
          La notificación y el mandamiento de pago representan el inicio formal
          de un proceso ejecutivo de cobro. Comprender estas etapas permite a
          acreedores y deudores conocer sus derechos, obligaciones y opciones de
          actuación dentro del procedimiento judicial colombiano.
        </motion.p>
      </motion.article>
    </main>
  );
}
