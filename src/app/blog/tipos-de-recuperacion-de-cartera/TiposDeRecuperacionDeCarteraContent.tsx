"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function TiposDeRecuperacionDeCarteraContent() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* CATEGORY */}
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Recuperación de Cartera
        </motion.span>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Tipos de recuperación de cartera en Colombia: guía completa para
          cobrar más rápido, reducir la mora y recuperar cuentas por cobrar
        </motion.h1>

        {/* INTRO */}

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Conocer los diferentes{" "}
          <strong>tipos de recuperación de cartera</strong>
          permite a las empresas aplicar la estrategia adecuada según el estado
          de la deuda, el comportamiento del cliente y el nivel de riesgo
          financiero. No es lo mismo gestionar una factura próxima a vencer que
          una obligación con varios meses de mora o un proceso que requiere
          acciones judiciales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          En esta guía encontrarás cuáles son las etapas de la recuperación de
          cartera en Colombia, cuándo utilizar cada una, cuáles ofrecen mejores
          resultados y qué buenas prácticas ayudan a incrementar el recaudo sin
          deteriorar la relación comercial con el cliente.
        </motion.p>

        {/* ================= ¿QUÉ ES? ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué es la recuperación de cartera y por qué existen diferentes
            tipos de cobranza?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            La recuperación de cartera comprende todas las acciones que realiza
            una empresa para lograr que sus clientes paguen oportunamente las
            obligaciones adquiridas. No todas las cuentas presentan el mismo
            nivel de riesgo ni todos los clientes requieren el mismo
            tratamiento, por lo que las empresas implementan diferentes
            estrategias de cobranza según el momento en que se encuentre la
            deuda y el comportamiento de pago del deudor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Aplicar el tipo correcto de recuperación permite disminuir la
            cartera vencida, mejorar el flujo de caja, fortalecer la relación
            comercial y reducir significativamente los costos asociados a
            procesos de cobro más complejos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Por esta razón, las organizaciones suelen diseñar políticas internas
            donde se establecen etapas progresivas de recuperación, iniciando
            con acciones preventivas y avanzando únicamente cuando el cliente
            incumple sus compromisos de pago.
          </motion.p>
        </motion.section>

        {/* ================= PREVENTIVA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación preventiva: la etapa más rentable para evitar la
            cartera vencida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            La recuperación preventiva comprende todas las acciones que se
            realizan antes del vencimiento de una factura. Su propósito
            principal es reducir la probabilidad de mora mediante recordatorios
            oportunos, confirmaciones de recepción de la factura y
            acompañamiento al cliente durante el proceso de pago.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Esta etapa suele ofrecer el mayor retorno sobre la inversión porque
            evita costos administrativos posteriores y mejora significativamente
            la liquidez empresarial.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Confirmación del envío de facturas.</li>
            <li>Recordatorios automáticos antes del vencimiento.</li>
            <li>Correos electrónicos personalizados.</li>
            <li>Mensajes mediante WhatsApp Business.</li>
            <li>Verificación de novedades en el proceso de pago.</li>
            <li>Actualización permanente de datos del cliente.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la empresa desarrolla correctamente esta fase, disminuye la
            cantidad de clientes que pasan a cartera vencida y reduce
            considerablemente el tiempo promedio de recaudo.
          </motion.p>
        </motion.section>

        {/* ================= IMPORTANCIA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué es importante elegir el tipo correcto de recuperación de
            cartera?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Utilizar una estrategia inadecuada puede deteriorar la relación
            comercial, incrementar los costos de recuperación y disminuir
            considerablemente la probabilidad de recaudo. Por el contrario,
            seleccionar la etapa adecuada permite intervenir en el momento
            oportuno y aumentar las posibilidades de obtener el pago sin
            recurrir a procesos más complejos.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Reduce la cartera vencida.</li>
            <li>Disminuye la morosidad.</li>
            <li>Mejora el flujo de caja.</li>
            <li>Reduce costos operativos.</li>
            <li>Fortalece la relación con clientes.</li>
            <li>Permite una gestión más organizada.</li>
            <li>Facilita la toma de decisiones.</li>
            <li>Incrementa el porcentaje de recuperación.</li>
          </motion.ul>
        </motion.section>

        {/* ================= ADMINISTRATIVA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación administrativa o prejurídica: cómo recuperar deudas sin
            demandar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Aplica cuando la deuda ya está vencida y se busca una solución
            amistosa sin acudir a instancias judiciales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Una gestión administrativa eficiente puede evitar procesos legales
            prolongados y reducir costos.
          </motion.p>
        </motion.section>

        {/* ================= JURÍDICA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación jurídica: cuándo demandar para recuperar una deuda en
            Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Se inicia cuando el deudor incumple reiteradamente y no existe
            voluntad de pago.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            La recuperación jurídica es el último recurso, pero resulta
            necesaria cuando se requiere proteger los derechos del acreedor.
          </motion.p>
        </motion.section>

        {/* ================= COMPARATIVA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comparación entre los principales tipos de recuperación de cartera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cada tipo de recuperación responde a un momento diferente dentro del
            ciclo de vida de la obligación. Conocer sus diferencias ayuda a
            implementar un proceso escalonado que incremente la recuperación sin
            afectar la relación comercial con el cliente.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>
              <strong>Preventiva:</strong> antes del vencimiento para evitar la
              mora.
            </li>

            <li>
              <strong>Administrativa:</strong> cuando existe mora reciente y aún
              es posible negociar directamente.
            </li>

            <li>
              <strong>Prejurídica:</strong> gestión especializada antes de
              acudir a un proceso judicial.
            </li>

            <li>
              <strong>Jurídica:</strong> utilizada cuando las demás alternativas
              no generan resultados.
            </li>
          </motion.ul>
        </motion.section>

        {/* ================= SEGÚN MORA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué tipo de recuperación utilizar según la antigüedad de la
            cartera?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No todas las obligaciones requieren el mismo tratamiento. A medida
            que la mora aumenta, también cambian las estrategias recomendadas
            para recuperar los valores pendientes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>0 a 30 días: seguimiento preventivo y recordatorios.</li>

            <li>31 a 60 días: negociación administrativa.</li>

            <li>61 a 90 días: seguimiento intensivo y acuerdos de pago.</li>

            <li>91 a 180 días: recuperación prejurídica.</li>

            <li>Más de 180 días: evaluación de acciones jurídicas.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Implementar estas etapas evita escalar innecesariamente los procesos
            y mejora considerablemente la tasa de recuperación.
          </motion.p>
        </motion.section>
      </motion.article>
    </main>
  );
}
