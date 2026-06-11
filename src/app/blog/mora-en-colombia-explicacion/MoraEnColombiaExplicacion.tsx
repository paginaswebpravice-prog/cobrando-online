"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MoraEnColombiaExplicacion() {
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
          Fundamentos Legales
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Qué es la mora en Colombia y cómo funciona
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La mora es una situación jurídica y financiera que ocurre cuando una
          persona o empresa incumple una obligación de pago dentro del plazo
          acordado. En Colombia, la mora tiene consecuencias económicas,
          contractuales y legales que pueden afectar tanto al deudor como al
          acreedor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué significa estar en mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Se considera que existe mora cuando el deudor no realiza el pago de
          una obligación en la fecha establecida. Desde ese momento pueden
          generarse intereses moratorios y comenzar acciones de gestión de
          cobranza para recuperar la deuda.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mora puede presentarse en créditos bancarios, facturas comerciales,
          contratos de prestación de servicios, arrendamientos y cualquier otra
          obligación que implique un pago pendiente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo se calcula la mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El cálculo depende del valor adeudado, los días de retraso y la tasa
          de interés moratorio aplicable. En muchos casos, los intereses de mora
          comienzan a causarse desde el día siguiente al vencimiento de la
          obligación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es importante verificar las condiciones contractuales y las normas
          vigentes para determinar correctamente los intereses que pueden ser
          cobrados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales consecuencias de la mora
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Generación de intereses moratorios.</li>
          <li>Aumento del valor total de la deuda.</li>
          <li>Inicio de procesos de cobranza.</li>
          <li>Posibles reportes negativos crediticios.</li>
          <li>Negociaciones y acuerdos de pago.</li>
          <li>Procesos judiciales de cobro en casos más complejos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencia entre deuda y mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tener una deuda no significa necesariamente estar en mora. Una deuda
          puede encontrarse vigente y dentro de los plazos acordados. La mora
          aparece únicamente cuando el pago no se realiza en la fecha pactada.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas suelen implementar estrategias
          preventivas para evitar que las obligaciones pasen de estado vigente a
          estado vencido.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué hacer cuando un cliente entra en mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo recomendable es iniciar un proceso de seguimiento oportuno,
          contactar al cliente, identificar las causas del incumplimiento y
          buscar alternativas de pago antes de que la deuda continúe creciendo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión temprana suele incrementar las probabilidades de recuperar
          la cartera y reducir la necesidad de acudir a procesos jurídicos.
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
          La mora es una consecuencia directa del incumplimiento de una
          obligación de pago y puede generar costos financieros importantes para
          el deudor. Comprender cómo funciona permite a las empresas implementar
          mejores estrategias de prevención, seguimiento y recuperación de
          cartera.
        </motion.p>
      </motion.article>
    </main>
  );
}
