"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraLogistica() {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sector Logística
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cartera en logística: cómo gestionar la cobranza en empresas de
          transporte y logística
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Las empresas de transporte y logística suelen manejar grandes
          volúmenes de facturación, múltiples clientes empresariales y plazos de
          pago extensos. Una adecuada gestión de cartera permite mantener la
          liquidez necesaria para sostener operaciones, combustible, nómina,
          mantenimiento y expansión del negocio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Por qué se generan problemas de cartera en logística
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas del sector trabajan con contratos corporativos donde
          los pagos se realizan a 30, 60 o incluso 90 días. Además, pueden
          existir disputas sobre entregas, documentos incompletos, novedades en
          el transporte o diferencias en la facturación que retrasan los pagos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales desafíos de la cobranza logística
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Altos volúmenes de facturas mensuales.</li>
          <li>Clientes corporativos con procesos internos complejos.</li>
          <li>Pagos diferidos a largo plazo.</li>
          <li>Disputas relacionadas con entregas o servicios.</li>
          <li>Dependencia del flujo de caja para la operación diaria.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estrategias para mejorar la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Implementar seguimiento preventivo, validar soportes antes de emitir
          facturas, automatizar recordatorios de pago y mantener una
          comunicación constante con los responsables financieros son acciones
          fundamentales para reducir la mora y acelerar el recaudo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Importancia de la documentación en el proceso de cobro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contar con órdenes de servicio, remisiones, comprobantes de entrega,
          facturas y demás soportes facilita la validación de la deuda y mejora
          las probabilidades de recuperación tanto en etapas amistosas como en
          eventuales procesos jurídicos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beneficios de una gestión profesional de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una cartera sana permite mejorar la liquidez, reducir necesidades de
          financiación externa, optimizar la operación y fortalecer la relación
          comercial con los clientes mediante procesos de cobranza organizados y
          eficientes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La gestión de cartera en empresas de logística y transporte requiere
          control, seguimiento y procesos estructurados. Implementar estrategias
          de cobranza adecuadas ayuda a mantener un flujo de caja saludable y a
          garantizar la sostenibilidad financiera de la operación.
        </motion.p>
      </motion.article>
    </main>
  );
}
