"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ComoRecuperarCarteraContent() {
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
          Estrategia
        </motion.span>

        <motion.h1>
          ¿Cómo recuperar cartera vencida de manera efectiva?
        </motion.h1>

        <motion.p className={styles.intro}>
          Recuperar cartera vencida es una de las tareas más importantes para la
          estabilidad financiera de cualquier empresa...
        </motion.p>

        <motion.h2>¿Qué es la cartera vencida?</motion.h2>
        <motion.p>
          La cartera vencida es el conjunto de facturas, pagarés...
        </motion.p>

        <motion.h2>Pasos para recuperar cartera vencida</motion.h2>
        <motion.p>
          Para recuperar cartera vencida de manera efectiva se recomienda...
        </motion.p>

        <motion.ul>
          <li>Contactar al deudor y recordar la obligación pendiente.</li>
          <li>Enviar recordatorios de pago por correo o mensaje.</li>
          <li>
            Negociar acuerdos de pago si el cliente no puede pagar el total.
          </li>
          <li>Realizar cobro prejurídico con comunicaciones formales.</li>
          <li>Iniciar cobro jurídico si el deudor no paga.</li>
        </motion.ul>

        <motion.h2>Cobro prejurídico</motion.h2>
        <motion.p>
          El cobro prejurídico consiste en realizar gestiones de cobro...
        </motion.p>

        <motion.h2>Cobro jurídico</motion.h2>
        <motion.p>Cuando el deudor no paga en la etapa prejurídica...</motion.p>

        <motion.h2>Estrategias para recuperar cartera más rápido</motion.h2>

        <motion.ul>
          <li>Iniciar el cobro lo más pronto posible.</li>
          <li>Documentar todos los acuerdos de pago.</li>
          <li>Cobrar intereses de mora.</li>
          <li>Hacer seguimiento constante.</li>
          <li>Contar con una empresa especializada en cobranza.</li>
        </motion.ul>

        <motion.h2>Conclusión</motion.h2>
        <motion.p>
          La recuperación de cartera vencida requiere organización...
        </motion.p>
      </motion.article>
    </main>
  );
}
