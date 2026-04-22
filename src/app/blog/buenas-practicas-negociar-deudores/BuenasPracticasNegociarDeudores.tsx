"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function BuenasPracticasNegociarDeudores() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        {/* HEADER */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.category}>Negociación</span>
          <h1>
            Cómo negociar con deudores y lograr acuerdos de pago efectivos
          </h1>
          <p className={styles.intro}>
            La negociación con deudores es una de las etapas más importantes en
            la recuperación de cartera. Aplicar estrategias adecuadas permite
            llegar a acuerdos efectivos, reducir la mora y mantener la relación
            comercial.
          </p>
        </motion.header>

        {/* SECCIONES */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>1. Cómo comunicarte con deudores de forma clara y profesional</h2>
          <p>
            Una comunicación clara evita malentendidos y genera confianza.
            Explicar el estado de la deuda, los valores exactos y las posibles
            alternativas de pago facilita el proceso de negociación.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h2>2. Por qué escuchar al deudor mejora la probabilidad de pago</h2>
          <p>
            Entender la situación financiera del deudor permite estructurar un
            acuerdo realista. Escuchar activamente ayuda a identificar
            dificultades temporales y definir plazos viables.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>
            3. Cómo formalizar acuerdos de pago para evitar incumplimientos
          </h2>
          <p>
            Todo acuerdo de pago debe quedar documentado. Esto protege a ambas
            partes y evita futuros incumplimientos. Se recomienda incluir
            fechas, montos y consecuencias en caso de mora.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <h2>
            4. Seguimiento de pagos: clave para recuperar cartera efectivamente
          </h2>
          <p>
            El seguimiento demuestra seriedad en la gestión de cobro. Recordar
            fechas de pago y verificar el cumplimiento reduce el riesgo de
            incumplimiento.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>
            Preguntas frecuentes sobre cómo negociar con deudores en Colombia
          </h2>

          <h3>¿Qué hacer si el deudor no responde?</h3>
          <p>
            Es recomendable insistir por diferentes canales y documentar cada
            intento de contacto antes de escalar el caso a una etapa jurídica.
          </p>

          <h3>¿Cuándo pasar de negociación a cobro jurídico?</h3>
          <p>
            Cuando no existe voluntad de pago o se incumplen reiteradamente los
            acuerdos establecidos.
          </p>
        </motion.section>
      </article>
    </main>
  );
}
