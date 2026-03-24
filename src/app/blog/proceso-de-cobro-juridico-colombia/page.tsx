"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function ProcesoCobroJuridico() {
  const baseUrl =
    "https://www.cobrandoonline.com/blog/proceso-de-cobro-juridico-colombia";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Proceso de cobro jurídico en Colombia",
    description:
      "Conoce las etapas del proceso de cobro jurídico, desde la demanda hasta el embargo y recuperación de la deuda.",
    author: {
      "@type": "Organization",
      name: "Cobrando Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrando Online",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl,
    },
    datePublished: "2025-01-01",
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
          o empresa no paga una deuda y es necesario acudir ante un juez para
          recuperar el dinero. Este proceso puede terminar en embargos de
          cuentas, salarios o bienes del deudor.
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
          factura, contrato o letra de cambio. Generalmente se realiza mediante
          un proceso ejecutivo.
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
          El proceso de cobro jurídico en Colombia tiene varias etapas que deben
          cumplirse para lograr la recuperación de la deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Presentación de la demanda
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El abogado presenta la demanda ejecutiva ante el juez anexando los
          documentos que prueban la deuda, como pagarés, facturas o contratos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Mandamiento de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el juez encuentra que la deuda cumple los requisitos legales, emite
          un mandamiento de pago ordenando al deudor pagar la deuda en un plazo
          determinado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Medidas cautelares
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El juez puede ordenar el embargo de cuentas bancarias, salarios,
          vehículos o bienes del deudor para garantizar el pago de la deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Notificación al deudor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El deudor es notificado de la demanda y puede pagar la deuda o
          presentar excepciones dentro del proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          5. Sentencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el deudor no logra demostrar que no debe el dinero, el juez ordena
          seguir adelante con la ejecución para pagar la deuda con los bienes
          embargados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          6. Remate de bienes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el deudor no paga, los bienes embargados pueden ser rematados para
          pagar la deuda al acreedor.
        </motion.p>

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
          Un proceso de cobro jurídico puede tardar entre varios meses y algunos
          años, dependiendo del juzgado, las excepciones del deudor y los bienes
          embargados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos se necesitan para iniciar cobro jurídico?
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
          El cobro jurídico es una herramienta legal efectiva para recuperar
          deudas cuando el deudor no paga voluntariamente. Iniciar el proceso a
          tiempo aumenta las probabilidades de recuperar el dinero mediante
          embargos o acuerdos de pago dentro del proceso judicial.
        </motion.p>
      </motion.article>
    </main>
  );
}
