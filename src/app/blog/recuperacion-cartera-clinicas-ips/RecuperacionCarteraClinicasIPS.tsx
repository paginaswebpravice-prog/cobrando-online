"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraClinicasIPS() {
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
          Recuperación de cartera para clínicas, IPS y sector salud en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La recuperación de cartera en clínicas, IPS y empresas del sector
          salud es uno de los mayores desafíos financieros en Colombia. Los
          retrasos en pagos por parte de EPS, aseguradoras, pacientes y otras
          entidades afectan directamente el flujo de caja y la capacidad
          operativa de las instituciones de salud.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Una gestión adecuada de cartera permite reducir la mora, mejorar la
          liquidez y garantizar la continuidad de los servicios médicos sin
          afectar la estabilidad financiera de la organización.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué el sector salud presenta altos niveles de cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las clínicas e IPS manejan grandes volúmenes de facturación y procesos
          administrativos complejos. Las glosas, devoluciones, demoras en
          auditorías y retrasos de pago generan acumulación de cartera vencida y
          afectan el flujo de ingresos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, muchas instituciones no cuentan con procesos internos de
          seguimiento y cobranza suficientemente estructurados para controlar la
          mora de manera eficiente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias de recuperación de cartera para clínicas e IPS
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Seguimiento constante de facturas radicadas.</li>
          <li>Control y respuesta rápida a glosas.</li>
          <li>Actualización permanente de estados de cartera.</li>
          <li>Negociación de acuerdos de pago.</li>
          <li>Automatización de procesos de cobranza.</li>
          <li>Clasificación de cartera por antigüedad.</li>
          <li>Escalamiento oportuno a cobro prejurídico o jurídico.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir la mora en el sector salud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reducir la mora requiere procesos administrativos organizados y
          seguimiento permanente de cada factura. Detectar inconsistencias desde
          etapas tempranas evita devoluciones y retrasos innecesarios en los
          pagos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También es importante establecer indicadores de cartera, políticas de
          cobranza claras y protocolos internos de recuperación para mantener un
          flujo de caja saludable.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo iniciar un cobro jurídico en el sector salud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando las gestiones administrativas y de negociación no generan
          resultados positivos, puede ser necesario iniciar procesos
          prejurídicos o jurídicos para evitar que la deuda continúe aumentando
          o prescriba.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actuar oportunamente permite proteger los recursos financieros de la
          clínica o IPS y aumentar las probabilidades de recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo mejorar la recuperación de cartera en clínicas e IPS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una buena gestión de recuperación de cartera en el sector salud ayuda
          a mejorar la liquidez, reducir la mora y fortalecer la estabilidad
          financiera de clínicas e IPS. Implementar estrategias de seguimiento,
          control y cobranza especializada es clave para garantizar la
          sostenibilidad de las instituciones de salud en Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
