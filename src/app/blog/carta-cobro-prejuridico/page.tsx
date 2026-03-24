"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function CartaCobroPrejuridico() {
  const baseUrl = "https://www.cobrandoonline.com/blog/carta-cobro-prejuridico";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Carta de cobro prejurídico: ejemplo y cómo hacerla",
    description:
      "La carta de cobro prejurídico es una herramienta efectiva para recuperar cartera antes de iniciar acciones legales.",
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
      {/* SCHEMA SEO */}
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
          Carta de cobro prejurídico: ejemplo y cómo hacerla
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La carta de cobro prejurídico es una comunicación formal que se envía
          al deudor antes de iniciar un proceso judicial. Esta carta busca que
          el deudor pague la deuda o llegue a un acuerdo de pago antes de
          iniciar un cobro jurídico.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es una carta de cobro prejurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La carta de cobro prejurídico es un documento formal en el que se le
          informa al deudor que tiene una obligación pendiente de pago y que, en
          caso de no pagar, se podrán iniciar acciones legales para recuperar la
          deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo enviar una carta de cobro prejurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La carta de cobro prejurídico se envía cuando el deudor ya tiene
          varios días o meses de mora y no ha respondido a los recordatorios de
          pago o llamadas de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué debe incluir una carta de cobro prejurídico
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Nombre del deudor.</li>
          <li>Valor de la deuda.</li>
          <li>Fecha de vencimiento de la obligación.</li>
          <li>Intereses de mora.</li>
          <li>Plazo para realizar el pago.</li>
          <li>Advertencia de inicio de acciones legales.</li>
          <li>Datos de contacto para realizar el pago.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo de carta de cobro prejurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A continuación se muestra un ejemplo básico de carta de cobro
          prejurídico:
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Señores: [Nombre del deudor]
          <br />
          Ciudad
          <br />
          <br />
          Asunto: Cobro prejurídico
          <br />
          <br />
          Por medio de la presente nos permitimos informar que la obligación a
          su cargo por valor de [valor de la deuda] se encuentra vencida desde
          el día [fecha]. Por lo anterior, solicitamos realizar el pago dentro
          de los próximos [número] días.
          <br />
          <br />
          En caso de no recibir el pago, nos veremos en la obligación de iniciar
          las acciones legales correspondientes para el cobro de la obligación.
          <br />
          <br />
          Atentamente,
          <br />
          [Nombre de la empresa o abogado]
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
          La carta de cobro prejurídico es una herramienta muy importante en la
          recuperación de cartera. Enviarla a tiempo puede permitir recuperar la
          deuda sin necesidad de iniciar un proceso judicial.
        </motion.p>
      </motion.article>
    </main>
  );
}
