"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraPymesContent() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Gestión de Cartera para PYMES
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Recuperación de cartera para PYMES en Colombia: estrategias efectivas
          para reducir la mora, recuperar pagos y mejorar el flujo de caja
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La recuperación de cartera para PYMES consiste en implementar
          estrategias preventivas, administrativas, prejurídicas y jurídicas que
          permitan cobrar oportunamente las cuentas por cobrar y disminuir la
          cartera vencida. Para las pequeñas y medianas empresas colombianas,
          mantener un adecuado recaudo es fundamental para conservar la
          liquidez, cumplir con proveedores, pagar nómina, invertir en
          crecimiento y evitar problemas financieros derivados de la mora de sus
          clientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          En esta guía conocerás cómo funciona la recuperación de cartera para
          pequeñas y medianas empresas, cuáles son las mejores estrategias de
          cobranza, cuándo iniciar un cobro prejurídico o jurídico, qué errores
          debes evitar y cómo construir un proceso que incremente el recaudo sin
          afectar la relación comercial con tus clientes.
        </motion.p>

        {/* ================= ¿QUÉ ES? ================= */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Qué es la recuperación de cartera para PYMES y por qué es diferente a
          la de una gran empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera para pequeñas y medianas empresas consiste
          en implementar un conjunto de acciones orientadas a obtener el pago de
          facturas, cuentas por cobrar o créditos comerciales que presentan
          retrasos. Aunque el objetivo es el mismo para cualquier organización,
          las PYMES enfrentan retos particulares debido a que normalmente
          cuentan con menor capacidad financiera, menos personal dedicado a la
          cobranza y una alta dependencia del recaudo oportuno para mantener sus
          operaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          En muchas pequeñas empresas, una sola factura sin pagar puede afectar
          la compra de inventario, el pago de proveedores, la nómina o incluso
          la continuidad de proyectos importantes. Por ello, la gestión de
          cartera debe comenzar desde el primer día de mora y no únicamente
          cuando la deuda lleva varios meses de vencimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          Una estrategia profesional de recuperación de cartera permite reducir
          el riesgo de incobrabilidad, mejorar la rotación de la cartera,
          fortalecer el flujo de caja y aumentar la capacidad de inversión de la
          empresa sin necesidad de acudir constantemente a créditos o fuentes de
          financiación externas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "Disminuye la cartera vencida y la morosidad.",
            "Mejora la liquidez para sostener la operación diaria.",
            "Reduce el riesgo de pérdidas por deudas incobrables.",
            "Permite tomar decisiones financieras con mayor seguridad.",
            "Fortalece la relación comercial mediante procesos de cobranza organizados.",
            "Incrementa la estabilidad financiera y el crecimiento de la empresa.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* ================= IMPACTO ================= */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Por qué la mora afecta más a las PYMES y pone en riesgo su liquidez
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          A diferencia de grandes empresas, las PYMES dependen directamente del
          flujo de caja para operar. Un retraso en pagos puede afectar su
          funcionamiento inmediato.
        </motion.p>

        <ul>
          {[
            "Menor capacidad de absorber pérdidas.",
            "Dependencia directa del flujo de caja.",
            "Dificultad para acceder a financiación.",
            "Mayor riesgo financiero.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* ================= CAUSAS ================= */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Principales causas de la cartera vencida en las PYMES colombianas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La mayoría de los problemas de cartera no aparecen de un día para
          otro. Generalmente son el resultado de políticas de crédito poco
          definidas, falta de seguimiento a los clientes o procesos de cobranza
          que comienzan demasiado tarde. Identificar las causas permite
          implementar acciones correctivas antes de que la mora afecte la
          liquidez de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          En Colombia, muchas pequeñas y medianas empresas concentran una parte
          importante de sus ingresos en pocos clientes. Cuando alguno de ellos
          incumple sus obligaciones, el impacto financiero suele ser mucho mayor
          que en organizaciones con una cartera más diversificada.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "Otorgar crédito sin evaluar la capacidad de pago del cliente.",
            "No verificar antecedentes financieros o comerciales.",
            "Ausencia de políticas claras para aprobar créditos.",
            "Falta de seguimiento durante los primeros días de mora.",
            "Procesos de facturación con errores o retrasos.",
            "No formalizar acuerdos comerciales y condiciones de pago.",
            "Depender de pocos clientes para generar la mayor parte de los ingresos.",
            "Esperar varios meses antes de iniciar la gestión de cobranza.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Detectar estos factores a tiempo permite diseñar estrategias de
          cobranza mucho más efectivas, reducir el crecimiento de la cartera
          vencida y mejorar el recaudo sin afectar la relación comercial con los
          clientes.
        </motion.p>

        {/* ================= ESTRATEGIAS ================= */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Estrategias de recuperación de cartera que ayudan a las PYMES a cobrar
          más rápido
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Implementar estrategias de cobranza desde el inicio ayuda a prevenir
          la mora y mejorar la recuperación.
        </motion.p>

        <ul>
          {[
            "Definir políticas de crédito claras.",
            "Realizar seguimiento constante.",
            "Formalizar acuerdos por escrito.",
            "Iniciar cobro prejurídico oportunamente.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <strong>{item}</strong>
            </motion.li>
          ))}
        </ul>

        {/* ================= PASO A PASO ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cómo implementar un proceso de recuperación de cartera paso a paso en
          una PYME
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera no debe comenzar cuando la deuda lleva
          varios meses de mora. Un proceso bien estructurado inicia incluso
          antes del vencimiento de la factura y continúa con diferentes etapas
          según el comportamiento del cliente. Esto permite aumentar las
          probabilidades de recaudo y disminuir los costos asociados a la
          cobranza.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Definir políticas claras de crédito
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Antes de vender a crédito, la empresa debe establecer criterios para
          aprobar clientes, definir cupos de crédito, plazos de pago y
          documentación requerida. Esto disminuye significativamente el riesgo
          de incumplimiento.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Realizar seguimiento antes del vencimiento
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Los recordatorios preventivos mediante correo electrónico, llamadas,
          mensajes de WhatsApp o SMS ayudan a reducir olvidos y permiten que el
          cliente programe oportunamente el pago de sus obligaciones.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Gestionar la mora desde los primeros días
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cuando la factura vence, es recomendable contactar inmediatamente al
          cliente para conocer las razones del retraso y plantear alternativas
          de pago antes de que la deuda continúe aumentando.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Negociar acuerdos de pago
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Si el cliente presenta dificultades económicas, una negociación
          adecuada puede facilitar la recuperación de la deuda mediante pagos
          parciales, refinanciaciones o nuevos cronogramas, siempre dejando los
          compromisos formalizados por escrito.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          5. Escalar el proceso cuando sea necesario
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cuando las gestiones administrativas no generan resultados, la empresa
          puede continuar con un proceso de cobranza prejurídica y, si es
          necesario, acudir posteriormente a mecanismos jurídicos para proteger
          sus derechos y recuperar la obligación pendiente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "Establecer políticas claras de crédito desde el inicio.",
            "Automatizar recordatorios de pago.",
            "Realizar seguimiento permanente a la cartera.",
            "Negociar soluciones antes de que aumente la mora.",
            "Escalar oportunamente la gestión de cobranza.",
            "Medir periódicamente los indicadores de recaudo para mejorar el proceso.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* ================= BENEFICIOS ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Beneficios de una gestión profesional de cartera para pequeñas y
          medianas empresas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contar con apoyo especializado en recuperación de cartera permite a
          las PYMES enfocarse en su crecimiento mientras expertos gestionan el
          cobro de manera estratégica y eficiente.
        </motion.p>

        {/* ================= KPIs ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Indicadores de cartera que toda PYME debería medir para reducir la
          mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recuperar cartera no consiste únicamente en cobrar facturas vencidas.
          También implica medir constantemente el desempeño de la gestión de
          cobranza mediante indicadores que permitan detectar problemas antes de
          que afecten la liquidez del negocio. Las PYMES que monitorean estos
          indicadores pueden tomar decisiones más rápidas y diseñar estrategias
          para reducir el riesgo de incobrabilidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Analizar periódicamente la cartera facilita identificar clientes con
          mayor riesgo de incumplimiento, conocer el comportamiento de pago,
          establecer prioridades de cobranza y optimizar los recursos destinados
          al recaudo.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Índice de cartera vencida
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Permite conocer qué porcentaje de la cartera total se encuentra en
          mora. Cuando este indicador aumenta de forma constante, es una señal
          de que las políticas de crédito o las estrategias de cobranza deben
          fortalecerse.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Días promedio de recaudo (DSO)
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Este indicador muestra cuánto tiempo tarda la empresa, en promedio, en
          recuperar el dinero de sus ventas a crédito. Entre menor sea este
          valor, mayor será la liquidez disponible para financiar la operación
          del negocio.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rotación de cartera
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La rotación de cartera permite evaluar la velocidad con la que las
          cuentas por cobrar se convierten nuevamente en efectivo. Una rotación
          lenta suele indicar dificultades de recaudo o clientes con altos
          niveles de mora.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cumplimiento de acuerdos de pago
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Medir cuántos acuerdos negociados son cumplidos por los clientes ayuda
          a evaluar la efectividad de las estrategias de negociación y permite
          identificar cuándo es necesario escalar la gestión de cobranza.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "Porcentaje de cartera vencida sobre la cartera total.",
            "Días promedio de recaudo (DSO).",
            "Rotación de cuentas por cobrar.",
            "Porcentaje de recuperación mensual.",
            "Cumplimiento de acuerdos de pago.",
            "Valor recuperado frente al valor gestionado.",
            "Clientes reincidentes en mora.",
            "Tiempo promedio de recuperación de una factura vencida.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          No basta con medir estos indicadores una vez al año. Las PYMES que
          revisan periódicamente sus métricas de cartera pueden reaccionar con
          mayor rapidez, corregir desviaciones y evitar que pequeñas demoras se
          conviertan en problemas financieros de gran impacto.
        </motion.p>

        {/* ================= ERRORES ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Errores que cometen las PYMES al recuperar cartera (y cómo evitarlos)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Muchas pequeñas y medianas empresas creen que la recuperación de
          cartera comienza cuando una factura lleva varios meses vencida. Sin
          embargo, en la mayoría de los casos los problemas de recaudo se
          originan mucho antes, desde la aprobación del crédito hasta el
          seguimiento posterior a la venta. Identificar estos errores permite
          reducir significativamente la mora y mejorar el flujo de caja.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Implementar procesos preventivos, documentar correctamente las
          obligaciones y realizar un seguimiento oportuno suele ser mucho más
          efectivo que intentar recuperar una deuda cuando ya presenta varios
          meses de atraso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "Otorgar crédito sin evaluar la capacidad de pago del cliente.",
            "No establecer políticas claras de crédito y cobranza.",
            "Esperar demasiado tiempo para iniciar la gestión de cobro.",
            "No realizar recordatorios antes del vencimiento de las facturas.",
            "Llevar registros desactualizados de las cuentas por cobrar.",
            "Aceptar acuerdos de pago sin dejar evidencia por escrito.",
            "No segmentar los clientes según el nivel de riesgo.",
            "Gestionar todos los casos con la misma estrategia de cobranza.",
            "No medir indicadores de recuperación de cartera.",
            "Acudir demasiado tarde a procesos prejurídicos o jurídicos.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo evitar que estos errores afecten la liquidez?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La mejor estrategia consiste en combinar políticas de crédito bien
          definidas, herramientas tecnológicas para el seguimiento de cuentas
          por cobrar y procesos de cobranza preventiva que permitan actuar desde
          los primeros días de mora. De esta manera es posible recuperar una
          mayor proporción de la cartera sin afectar la relación comercial con
          los clientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Cuando la empresa detecta que las gestiones administrativas ya no
          generan resultados, es recomendable escalar el proceso de forma
          oportuna mediante estrategias prejurídicas, evitando que la deuda
          continúe envejeciendo y disminuyan las probabilidades de recuperación.
        </motion.p>

        {/* ================= CONCLUSION ================= */}

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cómo mejorar la recuperación de cartera en tu PYME y evitar pérdidas
          por mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          La recuperación de cartera en PYMES es clave para mantener la liquidez
          y evitar riesgos financieros. Implementar estrategias adecuadas y
          actuar a tiempo permite mejorar la estabilidad del negocio en
          Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
