"use client";

import styles from "./Article.module.css";
import Script from "next/script";
import { motion } from "framer-motion";

export default function ComoRecuperarCartera() {
  const baseUrl =
    "https://www.cobrandoonline.com/blog/como-recuperar-cartera-vencida";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "¿Cómo recuperar cartera vencida de manera efectiva?",
    description:
      "Conoce las estrategias legales y administrativas más efectivas para recuperar cartera vencida y mejorar el flujo de caja de tu empresa.",
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
          Estrategia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Cómo recuperar cartera vencida de manera efectiva?
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Recuperar cartera vencida es una de las tareas más importantes para la
          estabilidad financiera de cualquier empresa. Cuando los clientes no
          pagan a tiempo, el flujo de caja se afecta y la empresa puede tener
          dificultades para operar. Por eso es fundamental aplicar estrategias
          efectivas de recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera vencida?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida es el conjunto de facturas, pagarés, contratos u
          obligaciones que no han sido pagadas en la fecha acordada. Entre más
          tiempo pase sin realizar la gestión de cobro, más difícil será
          recuperar el dinero.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Pasos para recuperar cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para recuperar cartera vencida de manera efectiva se recomienda seguir
          un proceso organizado que permita aumentar las probabilidades de pago.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Contactar al deudor y recordar la obligación pendiente.</li>
          <li>Enviar recordatorios de pago por correo o mensaje.</li>
          <li>
            Negociar acuerdos de pago si el cliente no puede pagar el total.
          </li>
          <li>Realizar cobro prejurídico con comunicaciones formales.</li>
          <li>Iniciar cobro jurídico si el deudor no paga.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cobro prejurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El cobro prejurídico consiste en realizar gestiones de cobro antes de
          iniciar un proceso judicial. En esta etapa se envían cartas de cobro,
          se realizan llamadas y se negocian acuerdos de pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando el deudor no paga en la etapa prejurídica, se puede iniciar un
          proceso ejecutivo ante un juez para lograr el embargo de cuentas,
          salarios o bienes del deudor hasta recuperar la deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para recuperar cartera más rápido
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Iniciar el cobro lo más pronto posible.</li>
          <li>Documentar todos los acuerdos de pago.</li>
          <li>Cobrar intereses de mora.</li>
          <li>Hacer seguimiento constante.</li>
          <li>Contar con una empresa especializada en cobranza.</li>
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
          La recuperación de cartera vencida requiere organización, seguimiento
          y estrategias legales adecuadas. Entre más rápido se inicie el proceso
          de cobro, mayores serán las probabilidades de recuperar el dinero y
          mejorar el flujo de caja de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
