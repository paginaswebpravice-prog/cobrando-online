"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ProcesoCobroJuridicoContent() {
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
          Proceso de cobro jurídico en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El cobro jurídico es el proceso legal que se inicia cuando una persona
          o empresa no paga una deuda y es necesario acudir ante un juez en
          Colombia para recuperar el dinero. Este proceso puede terminar en
          embargos de cuentas, salarios o bienes del deudor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es el cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El cobro jurídico es una demanda que se presenta ante un juez para
          exigir el pago de una deuda contenida en un documento como pagaré,
          factura, contrato o letra de cambio, normalmente mediante un proceso
          ejecutivo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Etapas del proceso de cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso de cobro jurídico en Colombia tiene varias etapas clave:
        </motion.p>

        {[
          {
            title: "1. Presentación de la demanda",
            content:
              "El abogado presenta la demanda ejecutiva con los documentos que prueban la deuda.",
          },
          {
            title: "2. Mandamiento de pago",
            content:
              "El juez ordena al deudor pagar la deuda en un plazo determinado.",
          },
          {
            title: "3. Medidas cautelares",
            content:
              "Se pueden embargar cuentas, salarios o bienes del deudor.",
          },
          {
            title: "4. Notificación al deudor",
            content:
              "El deudor es informado y puede pagar o defenderse dentro del proceso.",
          },
          {
            title: "5. Sentencia",
            content:
              "Si no paga, el juez ordena continuar con la ejecución de la deuda.",
          },
          {
            title: "6. Remate de bienes",
            content:
              "Los bienes embargados pueden ser vendidos para pagar la deuda.",
          },
        ].map((item, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {item.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {item.content}
            </motion.p>
          </motion.section>
        ))}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuánto tiempo tarda un cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un proceso puede tardar desde varios meses hasta algunos años,
          dependiendo del juzgado, la complejidad del caso y la respuesta del
          deudor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos se necesitan?
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li>Pagaré</li>
          <li>Factura</li>
          <li>Contrato</li>
          <li>Letra de cambio</li>
          <li>Reconocimiento de deuda</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          El cobro jurídico en Colombia es una herramienta efectiva para
          recuperar deudas cuando el pago no se realiza voluntariamente. Iniciar
          el proceso a tiempo aumenta las probabilidades de éxito y protege la
          liquidez de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
