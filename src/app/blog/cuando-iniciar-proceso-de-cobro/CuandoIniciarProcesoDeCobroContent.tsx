"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CuandoIniciarProcesoDeCobroContent() {
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
          <span className={styles.category}>Gestión</span>
          <h1>
            ¿Cuándo iniciar el cobro de cartera en Colombia y evitar perder el
            dinero?
          </h1>

          <p className={styles.intro}>
            Iniciar un proceso de cobro en el momento adecuado es clave para
            maximizar la recuperación de cartera. Actuar con rapidez reduce el
            riesgo de prescripción de la deuda y aumenta significativamente la
            probabilidad de obtener el pago.
          </p>
        </motion.header>

        {/* ================= SECCIÓN 1 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Señales claras de alerta para iniciar el cobro de cartera a tiempo
          </h2>

          <p>
            Existen indicadores claros que muestran cuándo es necesario pasar de
            una gestión preventiva a un proceso de cobro más estructurado.
          </p>

          <ul className={styles.animatedList}>
            {[
              "Retrasos constantes en los pagos.",
              "Falta de respuesta del cliente.",
              "Incumplimiento de acuerdos previos.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* ================= SECCIÓN 2 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Por qué el tiempo es clave para recuperar cartera en Colombia</h2>

          <p>
            Mientras más tiempo pase sin una acción concreta, menor será la
            probabilidad de recuperación. Las deudas envejecidas tienden a
            volverse más difíciles de cobrar.
          </p>

          <p>
            Una gestión oportuna permite mantener la presión adecuada sin
            deteriorar la relación comercial.
          </p>
        </motion.section>

        {/* ================= SECCIÓN 3 ================= */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            ¿Cuándo pasar de cobro preventivo a cobro jurídico en Colombia?
          </h2>

          <p>
            Si después de múltiples intentos de negociación no existe voluntad
            de pago o se presentan reiterados incumplimientos, puede ser momento
            de escalar el caso a una etapa jurídica.
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
          <h2>Preguntas frecuentes sobre cuándo iniciar el cobro de cartera</h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>¿Cuántos días de mora justifican iniciar un cobro formal?</h3>
            <p>
              Generalmente a partir de 30 días de mora se recomienda
              intensificar la gestión, aunque depende de la política interna de
              la empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>
              ¿Es recomendable esperar demasiado antes de cobrar una deuda?
            </h3>
            <p>
              No. Retrasar la gestión reduce la probabilidad de recuperación y
              puede afectar el flujo de caja.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
