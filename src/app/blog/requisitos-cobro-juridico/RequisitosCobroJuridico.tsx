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

        {/*  HERO  */}
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

        {/*  QUE ES UN COBRO JURÍDICO */}
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

        {/* COMO SABER SI UNA DEUDA PUEDE COBRARSE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cómo saber si una deuda puede cobrarse por la vía judicial?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          No todas las obligaciones permiten iniciar inmediatamente un proceso
          judicial. Antes de presentar una demanda es indispensable verificar
          que la deuda cumpla con los requisitos establecidos por la legislación
          colombiana. En términos generales, la obligación debe ser clara,
          expresa y exigible, además de estar respaldada por documentos que
          permitan demostrar su existencia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando alguno de estos elementos falta, normalmente resulta más
          conveniente fortalecer primero el expediente documental o continuar
          con gestiones prejurídicas antes de acudir ante un juez.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>La deuda debe existir realmente.</li>
          <li>Debe encontrarse vencido el plazo para pagar.</li>
          <li>Debe poder identificarse el valor adeudado.</li>
          <li>Debe existir un documento que respalde la obligación.</li>
          <li>Debe identificarse plenamente al deudor.</li>
        </motion.ul>

        {/* PRINCIPAL REQUISITO: EXISTENCIA DE UNA DEUDA EXIGIBLE */}
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

        {/* DIFERENCIAS ENTRE COBRO PREJURÍDICO Y COBRO JURÍDICO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Diferencias entre cobro prejurídico y cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas creen que una deuda debe demandarse inmediatamente
          después del vencimiento. Sin embargo, en la mayoría de los casos
          existe una etapa prejurídica que busca recuperar la cartera mediante
          negociación antes de iniciar un proceso judicial.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>El cobro prejurídico busca acuerdos voluntarios.</li>
          <li>El cobro jurídico requiere intervención de un juez.</li>
          <li>La negociación suele generar menores costos.</li>
          <li>La demanda normalmente implica mayores tiempos.</li>
          <li>Ambos mecanismos pueden complementarse.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Agotar una adecuada gestión prejurídica permite recuperar un alto
          porcentaje de las obligaciones sin necesidad de acudir a procesos
          ejecutivos.
        </motion.p>

        {/* DOCUMENTOS QUE PERMITEN INICIAR UN COBRO JURÍDICO EN COLOMBIA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos tienen mayor fuerza para iniciar un proceso ejecutivo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Algunos documentos poseen mayor fuerza probatoria y permiten iniciar
          procesos ejecutivos con mayor facilidad. No obstante, cada caso debe
          analizarse de manera individual para verificar que el documento cumpla
          los requisitos legales.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Pagarés.</li>
          <li>Facturas electrónicas con mérito ejecutivo.</li>
          <li>Letras de cambio.</li>
          <li>Cheques.</li>
          <li>Contratos con obligaciones claras de pago.</li>
          <li>Acuerdos de pago incumplidos.</li>
          <li>Actas de conciliación.</li>
          <li>Sentencias judiciales.</li>
        </motion.ul>

        {/* INFORMACIÓN QUE DEBE RECOPILAR EL ACREEDOR */}
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

        {/* ES OBLIGATORIO INTENTAR COBRAR ANTES DE DEMANDAR? */}
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

        {/* CUANDO CONVIENE INICIAR EL COBRO JURÍDICO? */}
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

        {/* ERRORES QUE RETRASAN UN COBRO JURÍDICO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Errores que retrasan un cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Un porcentaje importante de procesos presenta retrasos porque la
          información entregada inicialmente está incompleta o contiene
          inconsistencias. Preparar correctamente el expediente reduce tiempos y
          mejora las probabilidades de una recuperación exitosa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>No conservar contratos firmados.</li>
          <li>Perder soportes de pago.</li>
          <li>No actualizar el valor de la deuda.</li>
          <li>Desconocer la dirección del deudor.</li>
          <li>No documentar los acuerdos de pago.</li>
          <li>Esperar demasiado tiempo para iniciar la gestión.</li>
          <li>No organizar correctamente las pruebas.</li>
        </motion.ul>

        {/* CUANDO NO CONVIENE INICIAR UN COBRO JURÍDICO? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cuándo todavía no conviene iniciar un cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque el cobro jurídico constituye una herramienta efectiva para
          recuperar obligaciones incumplidas, no siempre representa la primera
          alternativa. En determinadas circunstancias resulta más conveniente
          continuar con estrategias de negociación antes de acudir a los
          tribunales.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>El cliente mantiene comunicación permanente.</li>
          <li>Existe voluntad real de pago.</li>
          <li>La mora apenas inicia.</li>
          <li>Se encuentra negociando un acuerdo.</li>
          <li>La deuda puede reestructurarse.</li>
          <li>El costo del proceso supera el valor reclamado.</li>
        </motion.ul>

        {/* CHECKLIST ANTES DE INICIAR UN COBRO JURÍDICO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Checklist antes de iniciar un cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Antes de entregar un expediente para iniciar un proceso judicial
          conviene verificar que toda la información se encuentre organizada y
          completa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>✔ Documento que soporta la deuda.</li>
          <li>✔ Valor actualizado del capital.</li>
          <li>✔ Liquidación de intereses.</li>
          <li>✔ Datos completos del deudor.</li>
          <li>✔ Dirección de notificación.</li>
          <li>✔ Historial de pagos.</li>
          <li>✔ Evidencia de gestiones de cobranza.</li>
          <li>✔ Acuerdos incumplidos.</li>
          <li>✔ Correos electrónicos o mensajes relevantes.</li>
          <li>✔ Soportes organizados cronológicamente.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contar con un expediente completo facilita el análisis jurídico,
          agiliza la preparación de la demanda y aumenta las posibilidades de
          recuperar la cartera de forma eficiente.
        </motion.p>

        {/* CONCLUSION */}
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
