"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraConstruccion() {
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
          Sector Construcción
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera en construcción: cómo gestionar cobros en obras y proyectos de
          infraestructura
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Las empresas constructoras y de obras civiles suelen manejar contratos
          de alto valor y plazos extensos de pago. Esto hace que la gestión de
          cartera sea un factor crítico para mantener la liquidez, financiar
          nuevos proyectos y evitar problemas operativos derivados de retrasos
          en los pagos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la cartera es un reto en construcción?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los proyectos de construcción suelen involucrar múltiples actores,
          procesos de aprobación, actas de avance y condiciones contractuales
          complejas. Esto puede generar demoras en la facturación y en el pago
          de las obligaciones adquiridas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales causas de cartera vencida en construcción
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Retrasos en la aprobación de actas de obra.</li>
          <li>Problemas de flujo de caja del contratante.</li>
          <li>Disputas contractuales.</li>
          <li>Errores en facturación o documentación.</li>
          <li>Cambios en el alcance del proyecto.</li>
          <li>Procesos administrativos extensos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para mejorar la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una buena gestión comienza con contratos claros, seguimiento constante
          de hitos de facturación y control documental. También es recomendable
          realizar conciliaciones periódicas y mantener comunicación continua
          con los responsables financieros del cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que deben monitorearse
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Días promedio de recaudo.</li>
          <li>Porcentaje de cartera vencida.</li>
          <li>Facturas pendientes por proyecto.</li>
          <li>Antigüedad de cartera.</li>
          <li>Valor recuperado mensualmente.</li>
          <li>Rotación de cartera.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo recurrir al cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando las gestiones administrativas y comerciales no producen
          resultados, puede ser necesario iniciar procesos jurídicos para
          proteger los derechos económicos de la empresa y recuperar las sumas
          adeudadas.
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
          La gestión de cartera en construcción requiere organización,
          seguimiento y control permanente. Implementar procesos sólidos de
          cobranza ayuda a mantener la liquidez, reducir riesgos financieros y
          asegurar la continuidad de los proyectos.
        </motion.p>
      </motion.article>
    </main>
  );
}
