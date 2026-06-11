"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PorQueNoPaganClientes() {
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
          Educación Financiera y Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Por qué los clientes no pagan sus deudas? Principales causas y cómo
          prevenir la mora
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Una de las principales preocupaciones de cualquier empresa es el
          incumplimiento en los pagos. La falta de pago por parte de clientes
          afecta la liquidez, dificulta la operación diaria y puede convertirse
          en un problema financiero importante si no se gestiona a tiempo.
          Comprender las causas de la mora es el primer paso para reducir el
          riesgo y mejorar la recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Problemas de liquidez del cliente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La razón más frecuente detrás del incumplimiento es la falta de
          recursos financieros. Muchas empresas y personas atraviesan momentos
          de baja liquidez que les impiden cumplir oportunamente con sus
          obligaciones, incluso cuando tienen intención de pagar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En estos casos, una estrategia de negociación o acuerdos de pago puede
          ser más efectiva que ejercer presión inmediata sobre el deudor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Falta de seguimiento por parte de la empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchos clientes simplemente olvidan sus fechas de pago. Cuando una
          empresa no realiza recordatorios oportunos ni seguimiento constante,
          aumenta considerablemente el riesgo de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar procesos de cobranza preventiva ayuda a reducir este tipo
          de incumplimientos y mejora el comportamiento de pago de los clientes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desacuerdos comerciales o problemas con el servicio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En ocasiones el cliente retiene el pago debido a inconformidades con
          el producto recibido, errores en la facturación o desacuerdos sobre
          las condiciones pactadas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Resolver rápidamente estas situaciones puede evitar que la deuda
          continúe creciendo y se convierta en una cartera difícil de recuperar.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Priorización de otras obligaciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunos deudores sí cuentan con recursos, pero priorizan el pago de
          otras obligaciones consideradas más urgentes. Esto suele ocurrir
          cuando la empresa acreedora no realiza seguimiento constante o no
          aplica estrategias efectivas de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Falta de evaluación crediticia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conceder crédito sin analizar adecuadamente la capacidad de pago del
          cliente es una de las causas más comunes de cartera vencida. Cuando no
          existe una política clara de evaluación crediticia, la probabilidad de
          incumplimiento aumenta significativamente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales señales de riesgo antes de otorgar crédito
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Historial de pagos negativos.</li>
          <li>Retrasos frecuentes con otros proveedores.</li>
          <li>Falta de documentación financiera.</li>
          <li>Alto nivel de endeudamiento.</li>
          <li>Información comercial inconsistente.</li>
          <li>Solicitudes de crédito superiores a su capacidad económica.</li>
          <li>Antecedentes de procesos judiciales o cobros anteriores.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo prevenir la mora en los clientes
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Evaluar el riesgo crediticio antes de vender.</li>
          <li>Definir políticas claras de crédito.</li>
          <li>Enviar recordatorios de pago oportunos.</li>
          <li>Realizar seguimiento constante a la cartera.</li>
          <li>Documentar adecuadamente las obligaciones.</li>
          <li>Negociar rápidamente cuando existan dificultades de pago.</li>
          <li>Implementar procesos de cobranza preventiva.</li>
        </motion.ul>

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
          Los clientes no dejan de pagar por una única razón. Factores
          financieros, operativos, comerciales y de gestión pueden influir en el
          incumplimiento. Comprender estas causas permite implementar
          estrategias preventivas más efectivas y reducir significativamente los
          niveles de cartera vencida dentro de una organización.
        </motion.p>
      </motion.article>
    </main>
  );
}
