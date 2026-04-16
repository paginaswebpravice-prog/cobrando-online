"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentosNecesariosCobrarDeudaContent() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ================= HEADER ================= */}

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>Legal</span>
          <h1>Documentos necesarios para cobrar una deuda</h1>

          <p className={styles.intro}>
            Contar con los documentos adecuados es fundamental para iniciar un
            proceso de recuperación de cartera. La correcta documentación no
            solo facilita la negociación, sino que también respalda un eventual
            proceso jurídico en caso de incumplimiento.
          </p>
        </motion.header>

        {/* ================= SECCIONES NUMERADAS ================= */}

        {[
          {
            title: "1. Contrato firmado",
            content:
              "El contrato es la base legal de la obligación. Debe estar firmado por ambas partes y contener condiciones claras sobre el servicio o producto entregado, los plazos de pago y las consecuencias en caso de mora.",
          },
          {
            title: "2. Facturas emitidas",
            content:
              "Las facturas son el soporte contable de la deuda. Deben reflejar el valor exacto adeudado, la fecha de emisión y el vencimiento. En muchos casos, la factura electrónica tiene validez como título ejecutivo.",
          },
          {
            title: "3. Pagaré o título valor",
            content:
              "El pagaré es uno de los documentos más sólidos para cobrar una deuda, ya que constituye un título ejecutivo que facilita iniciar un proceso judicial de cobro si es necesario.",
          },
          {
            title: "4. Soportes de entrega o prestación del servicio",
            content:
              "Es importante contar con pruebas que demuestren que el producto fue entregado o el servicio prestado correctamente. Esto puede incluir actas firmadas, guías de transporte, correos electrónicos de confirmación o cualquier evidencia documental.",
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
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {item.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {item.content}
            </motion.p>
          </motion.section>
        ))}

        {/* ================= SECCIÓN FINAL ================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué pasa si no tengo todos los documentos?</h2>

          <p>
            La ausencia de documentación puede dificultar la recuperación,
            especialmente en la etapa jurídica. Sin embargo, cada caso debe
            evaluarse individualmente para determinar las alternativas
            disponibles.
          </p>
        </motion.section>

        {/* ================= FAQ ================= */}

        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Preguntas frecuentes</h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>¿Es obligatorio tener un pagaré para cobrar una deuda?</h3>
            <p>
              No siempre, pero facilita significativamente el proceso jurídico
              al constituir un título ejecutivo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>¿Una factura electrónica sirve para demandar?</h3>
            <p>
              En muchos casos sí, siempre que cumpla los requisitos legales
              establecidos en la normativa vigente.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
