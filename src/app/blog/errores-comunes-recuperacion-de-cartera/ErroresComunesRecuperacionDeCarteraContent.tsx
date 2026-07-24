"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ErroresComunesRecuperacionDeCarteraContent() {
  const errores = [
    {
      title: "1. Esperar demasiado para iniciar la recuperación de cartera",
      content:
        "Uno de los errores más costosos consiste en dejar pasar semanas o meses antes de contactar al cliente. A medida que aumenta la antigüedad de la deuda, disminuyen las probabilidades de recaudo. Una gestión preventiva durante los primeros días de mora permite conservar la relación comercial, identificar las causas del retraso y negociar soluciones antes de que la obligación se convierta en cartera de difícil recuperación.",
    },
    {
      title:
        "2. No documentar adecuadamente contratos, facturas y acuerdos de pago",
      content:
        "Muchas empresas intentan recuperar obligaciones sin contar con documentos completos que respalden la deuda. Contratos incompletos, órdenes de compra inexistentes, facturas con errores o acuerdos verbales dificultan la gestión extrajudicial y pueden complicar un eventual proceso ejecutivo. Mantener toda la documentación organizada incrementa la seguridad jurídica y agiliza el proceso de cobro.",
    },
    {
      title: "3. No contar con una política de cobranza clara y estandarizada",
      content:
        "Improvisar cada gestión genera resultados inconsistentes. Una política de cobranza debe establecer responsables, tiempos de contacto, frecuencia de seguimiento, canales de comunicación, escalamiento de la cartera y criterios para negociar acuerdos de pago. Esto permite actuar de manera uniforme con todos los clientes y mejorar los indicadores de recuperación.",
    },
    {
      title: "4. Tratar toda la cartera vencida exactamente igual",
      content:
        "No todas las deudas requieren la misma estrategia. Un cliente con cinco días de mora no debe recibir el mismo tratamiento que uno con más de ciento ochenta días de incumplimiento. Clasificar la cartera por antigüedad, monto, comportamiento de pago, actividad económica y nivel de riesgo permite priorizar esfuerzos y aumentar la efectividad del recaudo.",
    },
    {
      title: "5. Cobrar de manera agresiva y deteriorar la relación comercial",
      content:
        "El uso de amenazas, presiones indebidas o mensajes poco profesionales suele generar el efecto contrario al esperado. Una comunicación respetuosa, clara y orientada a encontrar soluciones incrementa la disposición del cliente para negociar y protege la reputación de la empresa.",
    },
    {
      title: "6. No hacer seguimiento después del primer contacto",
      content:
        "Muchos procesos de recuperación fracasan porque la empresa realiza una única llamada o envía un solo correo electrónico. La cobranza requiere continuidad mediante recordatorios, llamadas, correos, mensajes y seguimiento a cada compromiso adquirido. Un plan de contacto estructurado mejora considerablemente la tasa de recuperación.",
    },
    {
      title: "7. Ofrecer acuerdos de pago sin analizar la capacidad del deudor",
      content:
        "Negociar cuotas demasiado altas o plazos poco realistas aumenta el riesgo de incumplimiento. Antes de formalizar un acuerdo conviene evaluar la capacidad financiera del cliente, definir fechas alcanzables y dejar por escrito todas las condiciones para reducir futuros inconvenientes.",
    },
    {
      title: "8. No medir indicadores de recuperación de cartera",
      content:
        "Las empresas que no monitorean indicadores como porcentaje de recuperación, DSO, antigüedad de la cartera, promesas cumplidas o efectividad por canal de contacto tienen dificultades para identificar oportunidades de mejora. Medir estos indicadores facilita optimizar la estrategia de cobranza y tomar decisiones basadas en datos.",
    },
    {
      title: "9. Esperar hasta la vía judicial para actuar",
      content:
        "Muchas organizaciones solo buscan asesoría especializada cuando la deuda tiene varios meses o incluso años de mora. Iniciar acciones preventivas y definir oportunamente cuándo escalar a una etapa prejurídica o jurídica permite aumentar las probabilidades de recuperar el dinero y reducir las pérdidas financieras.",
    },
  ];

  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.category}>
            Recuperación de Cartera Empresarial
          </span>

          {/*  HERO  */}
          <h1>
            10 errores comunes en la recuperación de cartera en Colombia que
            hacen perder dinero a las empresas (y cómo evitarlos)
          </h1>

          <p className={styles.intro}>
            Muchas empresas creen que el principal problema de su cartera es que
            los clientes no pagan. Sin embargo, en la práctica, gran parte de
            las pérdidas económicas provienen de errores internos en la gestión
            de cobranza. La ausencia de procesos claros, el seguimiento
            insuficiente, la falta de indicadores y una comunicación inadecuada
            reducen considerablemente las probabilidades de recuperar las
            cuentas por cobrar.
          </p>

          <p>
            Independientemente del tamaño de la organización, una estrategia de
            recuperación de cartera debe combinar prevención, análisis
            financiero, segmentación de clientes, automatización y seguimiento
            permanente. Cuando alguno de estos elementos falla, la cartera
            vencida aumenta, el flujo de caja se deteriora y la empresa pierde
            capacidad para invertir y crecer.
          </p>

          <p>
            En esta guía encontrarás los errores más frecuentes que cometen las
            organizaciones durante la recuperación de cartera, por qué afectan
            el recaudo y qué acciones puedes implementar para mejorar la
            efectividad de la gestión de cobranza sin necesidad de recurrir
            inmediatamente a procesos de cobro jurídico.
          </p>

          {/** POR QUE UNA MALA RECUPERACION DE CARTERA AFECTA TODA LA EMPRESA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              ¿Por qué una mala recuperación de cartera afecta toda la empresa?
            </h2>

            <p>
              La cartera representa uno de los activos más importantes para
              cualquier negocio. Cuando las cuentas por cobrar permanecen
              vencidas durante largos periodos, la organización pierde liquidez,
              aumenta sus costos financieros y disminuye su capacidad para
              cumplir oportunamente con proveedores, empleados e inversiones.
            </p>

            <p>
              Además, recuperar una obligación con varios meses de mora suele
              requerir mucho más tiempo, recursos y esfuerzo que realizar una
              gestión preventiva desde los primeros días posteriores al
              vencimiento de la factura.
            </p>

            <ul>
              <li>Disminuye el flujo de caja.</li>
              <li>Aumenta la cartera vencida.</li>
              <li>Reduce la rentabilidad.</li>
              <li>Incrementa el riesgo financiero.</li>
              <li>Dificulta la planeación empresarial.</li>
              <li>Puede afectar las relaciones comerciales.</li>
              <li>Obliga a invertir más recursos en cobranza.</li>
            </ul>
          </motion.section>

          {/* LOS ERRORES EN LA RECUPERACION DE CARTERA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Los errores en la recuperación de cartera normalmente empiezan
              mucho antes del vencimiento
            </h2>

            <p>
              Uno de los mayores mitos en la gestión de cartera consiste en
              pensar que la recuperación inicia cuando la factura ya está
              vencida. En realidad, muchas dificultades aparecen desde el
              momento en que se aprueba el crédito, se definen las condiciones
              comerciales o se realiza una venta sin verificar adecuadamente la
              capacidad de pago del cliente.
            </p>

            <p>
              Por esta razón, una estrategia eficiente debe integrar políticas
              de crédito, procesos preventivos de cobranza, seguimiento continuo
              y análisis permanente de indicadores para reducir el riesgo de
              incumplimiento antes de que la deuda se convierta en un problema
              financiero.
            </p>
          </motion.section>
        </motion.header>

        {/* ERRORES */}

        {errores.map((item, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {item.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {item.content}
            </motion.p>
          </motion.section>
        ))}

        {/* SEÑALES DE QUE TU PROCESO DE RECUPERACIÓN DE CARTERA NECESITA MEJORAS */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Señales de que tu proceso de recuperación de cartera necesita
            mejoras
          </h2>

          <p>
            Muchas empresas solo detectan problemas cuando la cartera vencida
            alcanza niveles críticos. Sin embargo, existen indicadores que
            permiten identificar con anticipación que la estrategia de cobranza
            no está funcionando como debería.
          </p>

          <ul>
            <li>El porcentaje de cartera vencida aumenta cada mes.</li>
            <li>Los clientes incumplen repetidamente los acuerdos de pago.</li>
            <li>El tiempo promedio de recaudo es cada vez mayor.</li>
            <li>
              Los asesores realizan seguimientos sin un procedimiento definido.
            </li>
            <li>
              No existen indicadores para medir la efectividad de la cobranza.
            </li>
            <li>
              Las negociaciones dependen de cada asesor y no de una política
              empresarial.
            </li>
          </ul>

          <p>
            Identificar estas señales permite implementar mejoras antes de que
            el problema afecte seriamente el flujo de caja y la liquidez de la
            empresa.
          </p>
        </motion.section>

        {/* CUANTO DINERO PUEDE PERDER UNA EMPRESA POR UNA MALA RECUPERACION DE CARTERA */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            ¿Cuánto dinero puede perder una empresa por una mala recuperación de
            cartera?
          </h2>

          <p>
            Los errores en la gestión de cobranza no solo retrasan el ingreso
            del dinero. También generan costos adicionales relacionados con
            financiación, disminución del capital de trabajo y mayores gastos
            administrativos.
          </p>

          <ul>
            <li>Disminución del flujo de caja.</li>
            <li>Necesidad de solicitar créditos para operar.</li>
            <li>Incremento de la cartera de difícil recaudo.</li>
            <li>Mayor inversión en procesos jurídicos.</li>
            <li>Pérdida de rentabilidad.</li>
            <li>Problemas para pagar proveedores y nómina.</li>
          </ul>
        </motion.section>

        {/* ERROR FRECUENTE: ADMINISTRAR LA RECUPERACION DE CARTERA UNICAMENTE EN EXCEL */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Error frecuente: administrar la recuperación de cartera únicamente
            en Excel
          </h2>

          <p>
            Aunque las hojas de cálculo pueden servir durante las primeras
            etapas de una empresa, cuando el volumen de clientes aumenta
            comienzan a aparecer errores de actualización, pérdida de
            información y dificultades para realizar seguimiento oportuno.
          </p>

          <p>
            Un software especializado permite automatizar recordatorios,
            registrar todas las gestiones realizadas, clasificar la cartera por
            riesgo y generar indicadores para tomar decisiones con mayor
            rapidez.
          </p>
        </motion.section>

        {/* COMO EVITAR LOS ERRORES MAS COMUNES EN LA RECUPERACION DE CARTERA */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Cómo evitar los errores más comunes en la recuperación de cartera
          </h2>

          <p>
            Reducir la cartera vencida requiere combinar procesos, tecnología y
            seguimiento permanente. Las empresas que obtienen mejores resultados
            suelen implementar acciones como:
          </p>

          <ul>
            <li>Definir políticas claras de crédito y cobranza.</li>
            <li>Segmentar los clientes según nivel de riesgo.</li>
            <li>Automatizar recordatorios de pago.</li>
            <li>Registrar cada contacto con el cliente.</li>
            <li>Actualizar permanentemente la información de contacto.</li>
            <li>Capacitar al equipo encargado del recaudo.</li>
            <li>Medir indicadores de recuperación mensualmente.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Indicadores para medir la efectividad de la recuperación de cartera
          </h2>

          <p>
            Una estrategia de cobranza debe evaluarse con indicadores que
            permitan identificar oportunidades de mejora y medir los resultados
            obtenidos.
          </p>

          <ul>
            <li>Índice de recuperación mensual.</li>
            <li>Días promedio de recaudo (DSO).</li>
            <li>Porcentaje de acuerdos cumplidos.</li>
            <li>Cartera vencida por antigüedad.</li>
            <li>Valor recuperado por asesor.</li>
            <li>Costo de recuperación frente al monto recaudado.</li>
          </ul>
        </motion.section>

        {/* FAQ */}

        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Preguntas frecuentes sobre errores al recuperar cartera en Colombia
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>¿Por qué documentar acuerdos de pago puede evitar pérdidas?</h3>
            <p>
              Porque sirven como respaldo legal en caso de incumplimiento y
              fortalecen la posición de la empresa en un proceso judicial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>
              ¿Cuándo conviene contratar expertos en recuperación de cartera?
            </h3>
            <p>
              Cuando la empresa no cuenta con recursos internos suficientes o
              cuando la cartera vencida comienza a afectar la liquidez del
              negocio.
            </p>
          </motion.div>
        </motion.section>
      </motion.article>
    </main>
  );
}
