"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function SeguimientoRecuperacionCartera() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* HEADER */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.category}>Educativo</span>

          <h1>
            Seguimiento de cartera en Colombia: cómo aumentar el recaudo y
            reducir la mora
          </h1>

          <p className={styles.intro}>
            El seguimiento constante en la recuperación de cartera es uno de los
            factores más determinantes para aumentar la tasa de recaudo, reducir
            la mora y garantizar el flujo de caja en empresas en Colombia y
            Bogotá.
          </p>
        </motion.header>

        {/* SECTION 1 */}
        <section>
          <h2>
            ¿Por qué el seguimiento de cartera es clave para cobrar más y mejor?
          </h2>

          <p>
            Muchas empresas cometen el error de pensar que la gestión termina
            cuando el deudor responde o firma un acuerdo. Sin embargo, la
            recuperación de cartera solo finaliza cuando se recibe el pago
            efectivo.
          </p>

          <ul>
            <li>Evita el incumplimiento de acuerdos.</li>
            <li>Permite detectar riesgos tempranos.</li>
            <li>Mejora la tasa de recuperación.</li>
            <li>Fortalece la cultura de pago del cliente.</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2>
            Seguimiento antes y después del vencimiento: la clave para reducir
            la mora
          </h2>

          <p>
            Una estrategia profesional incluye recordatorios antes del
            vencimiento y controles posteriores cuando existe mora.
          </p>

          <p>
            El contacto constante demuestra organización y seriedad, lo cual
            incrementa la probabilidad de pago.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2>Cómo hacer seguimiento efectivo en acuerdos de pago</h2>

          <p>
            Cuando se firma un acuerdo, es fundamental establecer fechas claras,
            recordatorios programados y control del cumplimiento de cada cuota.
          </p>

          <p>
            Un sistema estructurado de seguimiento reduce riesgos y aumenta la
            recuperación total de la deuda.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2>Impacto del seguimiento en el flujo de caja de tu empresa</h2>

          <p>
            El seguimiento adecuado impacta directamente el flujo de caja,
            permitiendo que la empresa reciba ingresos a tiempo, mejore su
            liquidez y reduzca riesgos financieros.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <h2>Preguntas frecuentes sobre seguimiento de cartera</h2>

          <h3>¿Por qué es importante el seguimiento en la cobranza?</h3>
          <p>
            Porque asegura el cumplimiento de acuerdos y mejora la recuperación
            de cartera.
          </p>

          <h3>¿Cuándo se debe hacer seguimiento a una deuda?</h3>
          <p>Antes del vencimiento y después hasta recibir el pago completo.</p>
        </section>
      </motion.article>
    </main>
  );
}
