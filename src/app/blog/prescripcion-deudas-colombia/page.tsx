"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function PrescripcionDeudas() {
  const baseUrl =
    "https://www.cobrandoonline.com/blog/prescripcion-deudas-colombia";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Prescripción de deudas en Colombia",
    description:
      "Las deudas pueden prescribir si no se cobran a tiempo. Conoce los términos legales y evita perder el dinero.",
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
          Prescripción de deudas en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          En Colombia, las deudas no se pueden cobrar indefinidamente. Si pasa
          cierto tiempo sin que el acreedor inicie acciones legales para cobrar,
          la deuda puede prescribir. Conocer los tiempos de prescripción es
          fundamental para evitar perder el derecho a cobrar una deuda.
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
          derecho de cobrar una deuda cuando ha pasado un determinado tiempo sin
          que el acreedor haya iniciado un proceso judicial para exigir el pago.
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
          Dependiendo del tipo de documento o de la obligación, las deudas
          tienen diferentes tiempos de prescripción.
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
          El tiempo de prescripción comienza a contar desde la fecha en que la
          deuda se hizo exigible, es decir, desde la fecha en que se debía pagar
          la obligación y no se realizó el pago.
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
          Para evitar que una deuda prescriba, el acreedor debe iniciar un
          proceso de cobro jurídico antes de que se cumpla el tiempo de
          prescripción. También se puede interrumpir la prescripción cuando el
          deudor reconoce la deuda o realiza un abono.
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
          <li>Cuando se presenta una demanda judicial.</li>
          <li>Cuando el deudor firma un acuerdo de pago.</li>
          <li>Cuando el deudor realiza un abono a la deuda.</li>
          <li>Cuando el deudor reconoce la deuda por escrito.</li>
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
          Muchas empresas pierden dinero porque dejan pasar el tiempo sin
          iniciar el proceso de cobro. Iniciar la gestión de cobro a tiempo
          aumenta las probabilidades de recuperar la deuda y evita que esta
          prescriba.
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
          La prescripción de deudas en Colombia depende del tipo de obligación y
          del tiempo que pase sin iniciar acciones legales. Por eso es
          importante realizar la gestión de cobro de manera oportuna para no
          perder el derecho a recuperar el dinero.
        </motion.p>
      </motion.article>
    </main>
  );
}
