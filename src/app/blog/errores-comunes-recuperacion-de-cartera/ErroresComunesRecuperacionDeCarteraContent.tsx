"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ErroresComunesRecuperacionDeCarteraContent() {
  const errores = [
    {
      title:
        "1. No documentar los acuerdos de pago (error que puede hacerte perder la deuda)",
      content:
        "Uno de los errores más frecuentes es confiar únicamente en acuerdos verbales. Todo compromiso debe quedar por escrito, especificando montos, fechas y condiciones.",
    },
    {
      title: "2. No hacer seguimiento constante y perder el control del pago",
      content:
        "La gestión de cobro no termina cuando el deudor promete pagar. Realizar seguimiento demuestra seriedad y reduce el riesgo de incumplimiento.",
    },
    {
      title:
        "3. Actuar demasiado tarde y reducir la probabilidad de recuperación",
      content:
        "Retrasar el inicio del proceso de cobro disminuye la probabilidad de recuperación. Las deudas envejecidas son más difíciles de cobrar.",
    },
    {
      title:
        "4. Manejar el proceso de forma emocional y afectar la negociación",
      content:
        "La recuperación de cartera debe ser profesional y estratégica. Actuar con enojo o presión excesiva puede deteriorar la relación comercial.",
    },
  ];

  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* HEADER */}

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>Consejos</span>
          <h1>
            7 errores en la recuperación de cartera que te hacen perder dinero
            (y cómo evitarlos)
          </h1>

          <p className={styles.intro}>
            La recuperación de cartera es un proceso estratégico que requiere
            organización, seguimiento y respaldo documental. Sin embargo, muchas
            empresas cometen errores que reducen la probabilidad de recuperar el
            dinero.
          </p>
        </motion.header>

        {/* ERRORES */}

        {errores.map((item, index) => (
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

        {/* CIERRE */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Cómo evitar estos errores y mejorar la recuperación de cartera
          </h2>

          <p>
            Implementar políticas claras de crédito, establecer protocolos de
            seguimiento y contar con asesoría especializada permite reducir
            riesgos y mejorar los resultados en la gestión de cobro.
          </p>
        </motion.section>

        {/* FAQ */}

        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Preguntas frecuentes sobre errores en la recuperación de cartera
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>¿Por qué es importante documentar los acuerdos?</h3>
            <p>
              Porque sirven como respaldo legal en caso de incumplimiento y
              fortalecen la posición de la empresa en un proceso judicial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>
              ¿Cuándo es recomendable externalizar la recuperación de cartera?
            </h3>
            <p>
              Cuando la empresa no cuenta con recursos internos suficientes o
              cuando la cartera vencida comienza a afectar la liquidez del
              negocio.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
