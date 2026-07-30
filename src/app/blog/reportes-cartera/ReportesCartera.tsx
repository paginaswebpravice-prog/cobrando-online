"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ReportesCartera() {
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
          Gestión de Cartera Empresarial
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reportes de cartera: cómo elaborar informes de cuentas por cobrar que
          ayuden a reducir la morosidad y mejorar la recuperación de cartera
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Los <strong>reportes de cartera</strong> son una de las herramientas
          más importantes para controlar las cuentas por cobrar y tomar
          decisiones financieras oportunas. Un informe bien estructurado permite
          conocer cuáles clientes pagan puntualmente, identificar obligaciones
          vencidas, detectar riesgos de morosidad y priorizar las gestiones de
          cobranza antes de que las deudas afecten la liquidez de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones generan reportes únicamente para cumplir
          procesos contables; sin embargo, cuando estos documentos incluyen
          indicadores, clasificación por antigüedad de cartera, historial de
          pagos y métricas de recuperación, se convierten en una herramienta
          estratégica para mejorar el flujo de caja y aumentar el recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En esta guía aprenderás qué debe contener un reporte de cartera,
          cuáles son los indicadores más importantes para analizar las cuentas
          por cobrar, cómo interpretar la información obtenida y de qué manera
          utilizar estos informes para optimizar la gestión de cobranza dentro
          de cualquier empresa, independientemente de su tamaño o sector
          económico.
        </motion.p>

        {/*  QUE ES UN REPORTES DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué es un reporte de cartera y por qué es clave para una gestión
          eficiente de las cuentas por cobrar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Un <strong>reporte de cartera</strong> es un documento que reúne toda
          la información relacionada con las cuentas por cobrar de una empresa.
          Su función principal es mostrar el estado actual de cada obligación
          pendiente, el comportamiento de pago de los clientes y el nivel de
          riesgo que representa cada cuenta para la organización.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Más que un simple listado de facturas pendientes, un buen informe
          permite analizar la antigüedad de la cartera, identificar clientes
          recurrentemente morosos, conocer el porcentaje de recuperación
          alcanzado y establecer cuáles obligaciones requieren una gestión
          inmediata por parte del equipo de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando estos reportes se actualizan de forma periódica, la empresa
          puede anticiparse a posibles problemas de liquidez, tomar decisiones
          oportunas respecto al otorgamiento de nuevos créditos comerciales y
          definir estrategias para recuperar la cartera antes de que las deudas
          se conviertan en pérdidas financieras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Independientemente del tamaño de la empresa, contar con reportes
          claros, precisos y actualizados facilita la comunicación entre las
          áreas financiera, comercial, contable y de cartera, permitiendo que
          todas trabajen con la misma información para disminuir la morosidad y
          fortalecer el flujo de caja.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Permiten conocer el valor total de las cuentas por cobrar.</li>
          <li>Facilitan la clasificación de la cartera según su antigüedad.</li>
          <li>
            Ayudan a identificar clientes con mayor riesgo de incumplimiento.
          </li>
          <li>Permiten priorizar las gestiones de cobranza.</li>
          <li>Facilitan la toma de decisiones financieras.</li>
          <li>Contribuyen a proyectar el flujo de caja de la empresa.</li>
          <li>Sirven como herramienta de seguimiento para la gerencia.</li>
          <li>
            Ayudan a medir la efectividad de las estrategias de recuperación de
            cartera.
          </li>
        </motion.ul>

        {/* POR QUE LOS REPORTES DE CARTERA SON FUNDAMENTALES PARA REDUCIR LA MOROSIDAD Y TOMAR MEJORES DECISIONES FINANCIERAS */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Por qué los reportes de cartera son fundamentales para reducir la
          morosidad y tomar mejores decisiones financieras?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La información es uno de los activos más importantes para cualquier
          empresa. Sin un reporte de cartera actualizado resulta difícil conocer
          qué clientes están pagando oportunamente, cuáles presentan retrasos
          recurrentes y cuáles representan un riesgo para el flujo de caja.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los reportes permiten transformar grandes volúmenes de datos en
          información útil para la toma de decisiones. Gracias a ellos es
          posible priorizar las gestiones de cobranza, asignar recursos de forma
          estratégica y diseñar planes de recuperación enfocados en los clientes
          con mayor probabilidad de pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Además, estos informes facilitan la comunicación entre la gerencia, el
          área financiera, contabilidad, tesorería y el equipo comercial,
          permitiendo que todas las áreas trabajen con indicadores unificados y
          objetivos comunes para disminuir la cartera vencida.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Detectar incrementos de la morosidad antes de que afecten la
            liquidez.
          </li>

          <li>
            Identificar clientes con retrasos frecuentes o alto riesgo de
            incumplimiento.
          </li>

          <li>Priorizar las cuentas con mayor probabilidad de recuperación.</li>

          <li>
            Medir el desempeño del área de cobranza mediante indicadores
            objetivos.
          </li>

          <li>
            Controlar el comportamiento histórico de los pagos por cliente.
          </li>

          <li>
            Facilitar la elaboración de presupuestos y proyecciones financieras.
          </li>

          <li>
            Disminuir el riesgo de incobrabilidad mediante acciones preventivas.
          </li>

          <li>
            Mejorar la rentabilidad al recuperar recursos que permanecían
            inmovilizados.
          </li>
        </motion.ul>

        {/* INDICADORES DE COBRANZA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Indicadores (KPIs) que todo reporte de cartera debería incluir
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Un reporte realmente útil no solo presenta facturas pendientes.
          También debe incorporar indicadores de desempeño que permitan evaluar
          la eficiencia de la gestión de cartera y medir el impacto de las
          estrategias implementadas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Índice de morosidad:</strong> porcentaje de cartera vencida
            frente al total de cuentas por cobrar.
          </li>

          <li>
            <strong>Antigüedad de cartera:</strong> clasificación por rangos
            (0-30, 31-60, 61-90, más de 90 días).
          </li>

          <li>
            <strong>DSO (Days Sales Outstanding):</strong> tiempo promedio que
            tarda la empresa en recuperar sus ventas a crédito.
          </li>

          <li>
            <strong>Porcentaje de recuperación:</strong> valor recuperado
            respecto del total gestionado.
          </li>

          <li>
            <strong>Concentración de cartera:</strong> porcentaje de deuda
            acumulado en los principales clientes.
          </li>

          <li>
            <strong>Cartera corriente vs. cartera vencida:</strong> distribución
            de las obligaciones según su estado.
          </li>

          <li>
            <strong>Efectividad de cobranza:</strong> mide los resultados
            obtenidos por cada campaña o estrategia de recuperación.
          </li>

          <li>
            <strong>Promesa de pago cumplida:</strong> porcentaje de acuerdos
            que fueron efectivamente pagados.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El seguimiento continuo de estos indicadores permite detectar
          tendencias, ajustar las políticas de crédito y fortalecer los procesos
          de cobranza antes de que la morosidad afecte la estabilidad financiera
          de la empresa.
        </motion.p>

        {/* QUE DEBE CONTENER UN REPORTE DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué información debe contener un reporte de cartera para que
          realmente sea útil?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Un reporte de cartera debe ofrecer información suficiente para
          comprender el comportamiento de las cuentas por cobrar y facilitar la
          toma de decisiones. Mientras más completos y actualizados sean los
          datos, mayor será la capacidad de la empresa para priorizar clientes,
          identificar riesgos y definir acciones de recuperación oportunas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque cada organización puede adaptar sus reportes según su actividad
          económica, existen elementos que prácticamente todas las empresas
          deberían incluir para tener una visión integral de la cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Nombre o razón social del cliente.</strong> Permite
            identificar de forma inmediata quién tiene obligaciones pendientes.
          </li>

          <li>
            <strong>Número de factura, contrato o documento.</strong> Facilita
            el seguimiento de cada obligación.
          </li>

          <li>
            <strong>Fecha de emisión.</strong> Ayuda a conocer el momento en que
            nació la obligación.
          </li>

          <li>
            <strong>Fecha de vencimiento.</strong> Permite determinar cuándo
            inició la mora.
          </li>

          <li>
            <strong>Saldo pendiente.</strong> Valor exacto que continúa
            adeudando el cliente.
          </li>

          <li>
            <strong>Días de mora.</strong> Uno de los indicadores más
            importantes para priorizar la gestión de cobranza.
          </li>

          <li>
            <strong>Estado de la gestión.</strong> Llamadas realizadas, correos
            enviados, visitas, acuerdos de pago o procesos en curso.
          </li>

          <li>
            <strong>Responsable de la cuenta.</strong> Facilita el seguimiento
            interno y evita duplicidad de gestiones.
          </li>

          <li>
            <strong>Promesas de pago vigentes.</strong> Permite controlar
            compromisos adquiridos por el cliente.
          </li>

          <li>
            <strong>Observaciones.</strong> Información relevante sobre
            negociaciones, novedades o situaciones especiales.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando esta información se mantiene organizada y actualizada, la
          empresa puede segmentar mejor sus clientes, automatizar procesos de
          cobranza y tomar decisiones basadas en datos reales en lugar de
          percepciones.
        </motion.p>

        {/* COMO ORGANIZAR UN REPORTE DE CARTERA PARA FACILITAR EL ANALISIS FINANCIERO */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cómo organizar un reporte de cartera para facilitar el análisis
          financiero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          No basta con almacenar información; también es importante presentarla
          de manera clara. Un reporte organizado permite que la gerencia
          financiera, el equipo de cobranza y la dirección comercial
          identifiquen rápidamente dónde se concentran los mayores riesgos de
          cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Clasificar la cartera por rangos de antigüedad.</li>

          <li>Ordenar los clientes por valor adeudado.</li>

          <li>Separar cartera corriente y cartera vencida.</li>

          <li>Destacar cuentas con acuerdos de pago incumplidos.</li>

          <li>Identificar clientes con mayor frecuencia de mora.</li>

          <li>Mostrar tendencias mediante gráficos comparativos.</li>

          <li>Actualizar la información diariamente o semanalmente.</li>

          <li>Utilizar colores o alertas para cuentas críticas.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Actualmente muchas empresas utilizan software especializado para
          generar reportes automáticos de cartera, lo que reduce errores
          manuales y permite obtener información en tiempo real para mejorar la
          recuperación de cuentas por cobrar.
        </motion.p>

        {/* TIPOS DE REPORTES DE CARTERA QUE TODA EMPRESA DEBERÍA UTILIZAR PARA CONTROLAR LA MORA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tipos de reportes de cartera que toda empresa debería utilizar para
          controlar la mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          No todos los reportes de cartera cumplen la misma función. Dependiendo
          del objetivo del análisis, la empresa puede generar diferentes
          informes para evaluar el comportamiento de los clientes, medir la
          eficiencia de la cobranza y detectar riesgos financieros antes de que
          afecten el flujo de caja.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contar con varios reportes permite tomar decisiones más precisas y
          asignar mejor los recursos del equipo de recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Reporte general de cuentas por cobrar.</strong> Presenta el
            saldo total pendiente de todos los clientes y ofrece una visión
            global de la cartera.
          </li>

          <li>
            <strong>Reporte de antigüedad de cartera.</strong> Clasifica las
            facturas según los días de vencimiento (0-30, 31-60, 61-90, más de
            90 días), siendo uno de los informes más utilizados para priorizar
            la cobranza.
          </li>

          <li>
            <strong>Reporte de cartera vencida.</strong> Muestra únicamente las
            cuentas que ya superaron la fecha de pago y requieren seguimiento
            inmediato.
          </li>

          <li>
            <strong>Reporte de acuerdos de pago.</strong> Permite controlar los
            clientes que firmaron compromisos de pago y verificar el
            cumplimiento de las cuotas pactadas.
          </li>

          <li>
            <strong>Reporte de recuperación mensual.</strong> Compara el dinero
            recuperado durante cada período y facilita medir el desempeño del
            equipo de cobranza.
          </li>

          <li>
            <strong>Reporte de clientes con mayor riesgo.</strong> Identifica
            los deudores que presentan mayor probabilidad de incumplimiento
            según su historial de pagos.
          </li>

          <li>
            <strong>Dashboard ejecutivo de cartera.</strong> Consolida
            indicadores, gráficos y métricas financieras para facilitar el
            análisis de la gerencia.
          </li>

          <li>
            <strong>Reporte por asesor o gestor de cobranza.</strong> Evalúa la
            productividad del equipo encargado de la recuperación de cartera.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Lo ideal es que estos informes puedan generarse automáticamente desde
          el software de cartera o el ERP de la empresa para disponer de
          información actualizada y reducir errores derivados de procesos
          manuales.
        </motion.p>

        {/* INDICADORES QUE DEBEN APARECER EN UN REPORTE DE CARTERA MODERNO */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Indicadores (KPIs) que deben aparecer en un reporte de cartera moderno
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Además de mostrar cifras, un buen reporte debe incluir indicadores que
          permitan evaluar el desempeño de la gestión de cobranza y la salud
          financiera de la empresa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Porcentaje de cartera vencida.</li>

          <li>Índice de recuperación mensual.</li>

          <li>Días promedio de recaudo (DSO).</li>

          <li>Cartera corriente vs. cartera vencida.</li>

          <li>Valor recuperado frente al valor gestionado.</li>

          <li>Clientes con mayor concentración de deuda.</li>

          <li>Promedio de días de mora por cliente.</li>

          <li>Cumplimiento de acuerdos de pago.</li>

          <li>Efectividad de cada gestor de cobranza.</li>

          <li>Variación mensual del saldo de cartera.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El seguimiento continuo de estos indicadores permite identificar
          tendencias, ajustar estrategias de recuperación y tomar decisiones
          oportunas para reducir la morosidad antes de que impacte la liquidez
          de la empresa.
        </motion.p>

        {/* ERRORES QUE HACEN QUE UN REPORTE DE CARTERA PIERDA UTILIDAD PARA LA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Errores que hacen que un reporte de cartera pierda utilidad para la
          empresa
        </motion.h2>

        <ul>
          {[
            "Trabajar con información desactualizada.",
            "No clasificar la cartera por antigüedad.",
            "No identificar clientes reincidentes.",
            "No registrar acuerdos de pago.",
            "No incluir indicadores de recuperación.",
            "No integrar la información con el área comercial.",
            "No establecer responsables del seguimiento.",
            "Generar reportes demasiado extensos y difíciles de interpretar.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* COMO UTILIZAR LOS REPORTES DE CARTERA PARA MEJORAR LA RECUPERACIÓN DE CUENTAS POR COBRAR */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cómo utilizar los reportes de cartera para mejorar la recuperación de
          cuentas por cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Los reportes de cartera son una herramienta estratégica para cualquier
          empresa que busque disminuir la morosidad, mejorar su liquidez y
          optimizar la recuperación de cuentas por cobrar. Cuando los informes
          incorporan indicadores financieros, segmentación de clientes, análisis
          de antigüedad y seguimiento de gestiones, es posible tomar decisiones
          oportunas y aumentar el porcentaje de recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Implementar reportes periódicos y apoyarse en herramientas
          tecnológicas permite que las áreas financiera, comercial y de cobranza
          trabajen con la misma información, reduzcan riesgos de cartera vencida
          y fortalezcan la salud financiera de la organización a largo plazo.
        </motion.p>
      </motion.article>
    </main>
  );
}
