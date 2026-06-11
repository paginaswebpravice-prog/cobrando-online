"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RequisitosCobroJuridico() {
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
          Cobro Jurídico
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Requisitos para iniciar cobro jurídico en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Cuando las gestiones de cobranza amistosa no generan resultados, las
          empresas pueden acudir al cobro jurídico para recuperar una deuda. Sin
          embargo, antes de iniciar una demanda es importante verificar que se
          cumplen ciertos requisitos legales y que existen los documentos
          necesarios para respaldar la reclamación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué es un cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El cobro jurídico es el proceso mediante el cual un acreedor acude a
          los jueces para exigir el pago de una obligación incumplida. Se
          utiliza cuando las etapas preventivas, administrativas o prejurídicas
          no han logrado recuperar la cartera vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Dependiendo del tipo de documento y de la naturaleza de la obligación,
          el proceso puede adelantarse mediante una demanda ejecutiva o a través
          de otros mecanismos contemplados por la legislación colombiana.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principal requisito: existencia de una deuda exigible
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Para iniciar una acción judicial debe existir una obligación clara,
          expresa y exigible. Esto significa que la deuda debe estar definida,
          identificada y haber vencido el plazo establecido para su pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Si la obligación aún no se encuentra vencida o presenta dudas sobre su
          existencia, será más difícil iniciar exitosamente un proceso judicial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Documentos que permiten iniciar un cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Algunos documentos tienen mayor fuerza probatoria y permiten adelantar
          procesos ejecutivos de forma más eficiente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Pagarés firmados por el deudor.</li>
          <li>Letras de cambio.</li>
          <li>Cheques.</li>
          <li>Facturas con aceptación legal.</li>
          <li>Contratos que contengan obligaciones de pago.</li>
          <li>Actas de conciliación.</li>
          <li>Sentencias judiciales.</li>
          <li>Acuerdos de pago incumplidos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Información que debe recopilar el acreedor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Antes de presentar una demanda es recomendable reunir toda la
          información relacionada con el deudor y la obligación pendiente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Nombre completo o razón social.</li>
          <li>Número de identificación.</li>
          <li>Dirección y datos de contacto.</li>
          <li>Valor actualizado de la deuda.</li>
          <li>Soportes de pagos realizados.</li>
          <li>Historial de gestión de cobranza.</li>
          <li>Pruebas de incumplimiento.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Es obligatorio intentar cobrar antes de demandar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque no siempre es un requisito legal, resulta recomendable realizar
          gestiones previas de cobranza. Estas acciones pueden facilitar
          acuerdos de pago y demostrar la buena fe del acreedor en caso de que
          el asunto llegue a los tribunales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas implementan etapas preventivas y prejurídicas antes de
          iniciar una demanda para reducir costos y acelerar la recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene iniciar el cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Generalmente se recomienda iniciar el proceso cuando las alternativas
          de negociación han fracasado, la deuda presenta una mora significativa
          o existe riesgo de que el deudor oculte bienes o dificulte el cobro en
          el futuro.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Actuar oportunamente también ayuda a evitar problemas relacionados con
          la prescripción de las obligaciones.
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
          Para iniciar un cobro jurídico en Colombia es fundamental contar con
          una deuda exigible y documentos que respalden la obligación. Una buena
          preparación documental aumenta las probabilidades de éxito y permite
          adelantar el proceso judicial de manera más eficiente.
        </motion.p>
      </motion.article>
    </main>
  );
}
