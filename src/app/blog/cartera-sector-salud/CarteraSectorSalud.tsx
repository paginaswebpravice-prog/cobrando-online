"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraSectorSalud() {
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
          Sector Salud
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera en el sector salud: estrategias para recuperar pagos en IPS y
          clínicas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La gestión de cartera en el sector salud presenta desafíos únicos
          debido a la complejidad de los procesos de facturación, auditoría,
          glosas y pagos entre EPS, IPS, clínicas y demás actores del sistema.
          Una estrategia de recuperación adecuada permite mejorar la liquidez y
          garantizar la continuidad operativa de las instituciones de salud.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la cartera es crítica en el sector salud?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las IPS y clínicas dependen del flujo constante de recursos para
          cubrir gastos operativos, nómina, insumos médicos y tecnología. Cuando
          los pagos se retrasan, la sostenibilidad financiera puede verse
          comprometida y afectar la calidad del servicio prestado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales causas de cartera vencida en salud
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Glosas y devoluciones de facturas.</li>
          <li>Procesos administrativos extensos.</li>
          <li>Errores en la facturación médica.</li>
          <li>Demoras en auditorías y validaciones.</li>
          <li>Incumplimientos contractuales.</li>
          <li>Retrasos en pagos por parte de EPS y aseguradoras.</li>
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
          La recuperación efectiva requiere seguimiento constante de cuentas,
          conciliaciones periódicas, validación temprana de facturas y gestión
          activa de glosas. Además, es recomendable implementar herramientas
          tecnológicas que permitan controlar cada etapa del proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores clave para controlar la cartera
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Días promedio de recaudo.</li>
          <li>Porcentaje de cartera vencida.</li>
          <li>Valor de glosas pendientes.</li>
          <li>Porcentaje de recuperación mensual.</li>
          <li>Antigüedad de cartera por rangos.</li>
          <li>Rotación de cartera.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo considerar el cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando los intentos de conciliación y cobro administrativo no generan
          resultados, las instituciones pueden evaluar acciones jurídicas para
          recuperar recursos pendientes. Esta decisión debe tomarse tras
          analizar la documentación disponible, los montos adeudados y la
          viabilidad del proceso.
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
          La gestión de cartera en el sector salud requiere procesos
          especializados, seguimiento permanente y estrategias enfocadas en la
          recuperación eficiente de recursos. Una cartera controlada contribuye
          a la estabilidad financiera y a la prestación continua de servicios de
          calidad para los pacientes.
        </motion.p>
      </motion.article>
    </main>
  );
}
