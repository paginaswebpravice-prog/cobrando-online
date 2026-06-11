"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroOrdinarioVsEjecutivo() {
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
          Cobro ordinario vs ejecutivo: diferencias y cuál conviene para
          recuperar una deuda en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cuando una empresa decide iniciar acciones legales para recuperar una
          deuda, suele encontrarse con dos alternativas judiciales: el proceso
          ordinario y el proceso ejecutivo. Aunque ambos buscan el pago de una
          obligación, existen diferencias importantes en cuanto a requisitos,
          tiempos, costos y probabilidades de recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es un proceso ejecutivo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ejecutivo es un mecanismo judicial diseñado para cobrar una
          deuda cuando existe un documento que presta mérito ejecutivo. Esto
          significa que la obligación es clara, expresa y exigible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunos ejemplos son pagarés, letras de cambio, cheques, contratos
          firmados o facturas que cumplen los requisitos legales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es un proceso ordinario
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ordinario se utiliza cuando no existe un título ejecutivo
          suficiente para exigir directamente el pago de la obligación. En estos
          casos primero debe demostrarse la existencia de la deuda antes de que
          el juez ordene el pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Generalmente requiere una etapa probatoria más extensa y suele tardar
          más tiempo que un proceso ejecutivo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales diferencias entre cobro ordinario y ejecutivo
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            El proceso ejecutivo exige un título ejecutivo válido; el ordinario
            no necesariamente.
          </li>
          <li>El ejecutivo suele ser más rápido que el ordinario.</li>
          <li>
            En el ejecutivo pueden solicitarse embargos desde etapas tempranas.
          </li>
          <li>El proceso ordinario requiere mayor actividad probatoria.</li>
          <li>
            El ejecutivo ofrece mayores probabilidades de recuperación rápida.
          </li>
          <li>
            El ordinario suele implicar mayores tiempos y costos procesales.
          </li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo conviene iniciar un proceso ejecutivo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ejecutivo es la mejor alternativa cuando la empresa cuenta
          con documentos sólidos que acreditan la deuda. Esto permite solicitar
          medidas cautelares y aumentar las probabilidades de recuperar el
          dinero antes de que el deudor disponga de sus bienes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo puede ser necesario un proceso ordinario
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando no existe un documento que constituya título ejecutivo, el
          acreedor deberá acudir a un proceso ordinario para demostrar la
          obligación mediante pruebas, testimonios u otros elementos admitidos
          por la ley.
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
          El cobro ejecutivo y el cobro ordinario tienen finalidades similares,
          pero funcionan bajo reglas distintas. Cuando existe un título
          ejecutivo válido, normalmente el proceso ejecutivo será la opción más
          rápida y efectiva para recuperar una deuda. Por ello es fundamental
          conservar adecuadamente los documentos que soportan las obligaciones
          comerciales.
        </motion.p>
      </motion.article>
    </main>
  );
}
