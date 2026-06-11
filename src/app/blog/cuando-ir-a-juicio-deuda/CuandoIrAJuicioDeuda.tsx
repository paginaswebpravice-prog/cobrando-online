"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CuandoIrAJuicioDeuda() {
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
          Estrategia de Cobro
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cuándo vale la pena ir a juicio para recuperar una deuda
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Iniciar un proceso judicial no siempre es la mejor decisión para
          recuperar una deuda. Aunque el cobro jurídico puede ser una
          herramienta efectiva, también implica tiempo, costos y recursos. Por
          ello, las empresas deben evaluar cuidadosamente cada caso antes de
          acudir a los tribunales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo debería considerarse el cobro judicial?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Generalmente se recomienda iniciar acciones judiciales cuando las
          gestiones de cobro preventivo y prejurídico no han dado resultados y
          existen evidencias suficientes que respaldan la obligación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También es importante que la deuda tenga un valor que justifique la
          inversión económica y el tiempo requerido para adelantar el proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que deben evaluarse antes de demandar
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Valor total de la deuda.</li>
          <li>Existencia de documentos que respalden la obligación.</li>
          <li>Capacidad económica actual del deudor.</li>
          <li>Posibilidad de identificar bienes embargables.</li>
          <li>Tiempo transcurrido desde el incumplimiento.</li>
          <li>Costos estimados del proceso judicial.</li>
          <li>Probabilidad real de recuperación.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Situaciones en las que suele valer la pena demandar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El cobro jurídico suele ser más conveniente cuando la deuda tiene un
          valor significativo, el deudor posee bienes o activos identificables y
          existe documentación sólida que permita sustentar la reclamación ante
          un juez.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En estos escenarios, las medidas cautelares pueden aumentar las
          probabilidades de recuperación y acelerar acuerdos de pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Casos en los que podría no ser recomendable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen situaciones donde iniciar un proceso judicial puede resultar
          poco rentable. Por ejemplo, cuando el valor adeudado es reducido, el
          deudor no posee bienes conocidos o los costos proyectados superan el
          monto que se espera recuperar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En estos casos puede ser más eficiente continuar negociaciones,
          establecer acuerdos de pago o implementar estrategias alternativas de
          recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La importancia del análisis previo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de demandar es recomendable realizar un análisis jurídico,
          financiero y patrimonial del caso. Esto permite tomar decisiones más
          informadas y evitar inversiones innecesarias en procesos con bajas
          probabilidades de éxito.
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
          Ir a juicio para recuperar una deuda puede ser una estrategia efectiva
          cuando existen fundamentos sólidos y una posibilidad real de cobro.
          Sin embargo, la decisión debe tomarse después de evaluar costos,
          riesgos, capacidad de pago del deudor y alternativas de negociación
          disponibles.
        </motion.p>
      </motion.article>
    </main>
  );
}
