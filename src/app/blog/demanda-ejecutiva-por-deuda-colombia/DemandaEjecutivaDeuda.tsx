"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DemandaEjecutivaDeuda() {
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
          Demanda ejecutiva por deuda en Colombia: guía paso a paso
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La demanda ejecutiva es uno de los mecanismos legales más utilizados
          en Colombia para recuperar deudas cuando el deudor incumple el pago de
          una obligación. Este proceso permite solicitar judicialmente el pago
          de la deuda e incluso embargar bienes del deudor para garantizar la
          recuperación del dinero.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Conocer cómo funciona una demanda ejecutiva, cuáles son sus requisitos
          y qué etapas tiene el proceso puede ayudar a las empresas y personas a
          tomar decisiones oportunas frente a la recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué es una demanda ejecutiva en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una demanda ejecutiva es un proceso judicial mediante el cual un
          acreedor busca exigir el pago de una obligación clara, expresa y
          exigible. Generalmente se utiliza cuando existen documentos como
          pagarés, facturas, letras de cambio, contratos o acuerdos firmados que
          demuestran la existencia de la deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Requisitos para iniciar una demanda ejecutiva por deuda
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Existencia de una deuda clara y exigible.</li>
          <li>Documento que soporte la obligación.</li>
          <li>Identificación del deudor.</li>
          <li>Valor exacto adeudado.</li>
          <li>Pruebas adicionales si son necesarias.</li>
          <li>Presentar la demanda ante el juez competente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo funciona el proceso ejecutivo paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso inicia con la presentación de la demanda ante el juzgado.
          Posteriormente, el juez revisa los documentos y puede emitir un
          mandamiento de pago contra el deudor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el deudor no paga ni presenta oposición válida, el juez puede
          ordenar medidas cautelares como embargo de cuentas bancarias,
          vehículos, salarios o bienes inmuebles para garantizar el pago de la
          obligación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué bienes pueden ser embargados en Colombia
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Cuentas bancarias.</li>
          <li>Vehículos.</li>
          <li>Bienes inmuebles.</li>
          <li>Salarios dentro de límites legales.</li>
          <li>Acciones o participaciones empresariales.</li>
          <li>Otros bienes del deudor autorizados por la ley.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo conviene iniciar una demanda ejecutiva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este proceso se recomienda cuando el deudor incumple acuerdos de pago,
          evita responder o la deuda lleva varios meses vencida sin resultados
          positivos en la cobranza amistosa o prejurídica.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actuar oportunamente puede evitar la prescripción de la deuda y
          aumentar las probabilidades de recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo recuperar deudas mediante demanda ejecutiva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La demanda ejecutiva es una herramienta legal efectiva para recuperar
          cartera en Colombia cuando existen soportes adecuados de la deuda.
          Iniciar el proceso a tiempo y contar con documentación clara puede
          facilitar el embargo de bienes y aumentar las probabilidades de
          recuperar el dinero adeudado.
        </motion.p>
      </motion.article>
    </main>
  );
}
