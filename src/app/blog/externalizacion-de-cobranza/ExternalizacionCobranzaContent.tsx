"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ExternalizacionCobranzaContent() {
  /* ===== ANIMATION VARIANTS ===== */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.category} variants={fadeUp}>
          Empresas
        </motion.span>

        <motion.h1 variants={fadeUp}>
          Externalizar cobranza en Colombia: cuándo hacerlo y cómo recuperar más
          cartera
        </motion.h1>

        <motion.p className={styles.intro} variants={fade}>
          La externalización de cobranza consiste en delegar la gestión de cobro
          de cartera a una empresa especializada. Esta opción puede mejorar la
          recuperación de cartera, reducir costos administrativos y permitir que
          la empresa se concentre en su actividad principal.
        </motion.p>

        <motion.h2 variants={fadeUp}>
          ¿Qué es la externalización de cobranza y cómo funciona?
        </motion.h2>

        <motion.p variants={fade}>
          La externalización de cobranza es el proceso mediante el cual una
          empresa contrata a un tercero especializado para realizar la gestión
          de cobro de facturas vencidas, pagarés, contratos u otras obligaciones
          pendientes de pago.
        </motion.p>

        <motion.h2 variants={fadeUp}>
          ¿Cuándo conviene externalizar la cobranza en Colombia?
        </motion.h2>

        <motion.p variants={fade}>
          Externalizar la cobranza puede ser una buena decisión en diferentes
          situaciones empresariales, especialmente cuando la cartera vencida
          empieza a afectar la liquidez del negocio.
        </motion.p>

        <motion.ul variants={fade}>
          <li>Cuando la empresa tiene mucha cartera vencida.</li>
          <li>Cuando no hay personal para realizar la cobranza.</li>
          <li>Cuando los clientes no responden a los recordatorios de pago.</li>
          <li>Cuando se necesita iniciar cobro prejurídico o jurídico.</li>
          <li>Cuando la empresa quiere enfocarse en ventas y operación.</li>
        </motion.ul>

        <motion.h2 variants={fadeUp}>
          Beneficios de externalizar la cobranza y recuperar cartera más rápido
        </motion.h2>

        <motion.p variants={fade}>
          Delegar la cobranza a una empresa especializada puede traer varios
          beneficios para la empresa.
        </motion.p>

        <motion.ul variants={fade}>
          <li>Mayor recuperación de cartera.</li>
          <li>Reducción de costos administrativos.</li>
          <li>Personal especializado en negociación y cobro.</li>
          <li>Procesos jurídicos cuando sea necesario.</li>
          <li>Seguimiento constante a los deudores.</li>
        </motion.ul>

        <motion.h2 variants={fadeUp}>
          Cobranza prejurídica y jurídica: cómo trabajan las empresas externas
        </motion.h2>

        <motion.p variants={fade}>
          Las empresas de cobranza normalmente manejan dos etapas: el cobro
          prejurídico, que busca acuerdos de pago, y el cobro jurídico, que
          implica procesos judiciales para recuperar la deuda mediante embargos
          o demandas ejecutivas.
        </motion.p>

        <motion.h2 variants={fadeUp}>
          ¿Qué es mejor: externalizar la cobranza o cobrar internamente?
        </motion.h2>

        <motion.p variants={fade}>
          Cobrar internamente puede funcionar cuando la cartera vencida es baja,
          pero cuando la mora aumenta, externalizar la cobranza suele ser más
          eficiente, ya que permite recuperar la cartera más rápido y con menos
          carga administrativa para la empresa.
        </motion.p>

        <motion.h2 variants={fadeUp}>
          Conclusión: ¿vale la pena externalizar la cobranza?
        </motion.h2>

        <motion.p variants={fade}>
          La externalización de cobranza es una estrategia efectiva para mejorar
          la recuperación de cartera, reducir la mora y permitir que las
          empresas se concentren en su actividad principal mientras expertos se
          encargan del proceso de cobro.
        </motion.p>
      </motion.article>
    </main>
  );
}
