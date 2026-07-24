"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ExcelCartera() {
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
          Gestión de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Plantilla de cartera en Excel: cómo crear un Dashboard para controlar
          cuentas por cobrar y reducir la cartera vencida
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Utilizar una <strong>plantilla de cartera en Excel</strong> continúa
          siendo una de las alternativas más utilizadas por pequeñas, medianas e
          incluso grandes empresas para controlar las cuentas por cobrar. Un
          Dashboard bien diseñado permite conocer en tiempo real cuánto dinero
          está pendiente de recaudo, identificar clientes morosos, analizar
          indicadores financieros y tomar decisiones que mejoren el flujo de
          caja del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Aunque actualmente existen plataformas especializadas para la gestión
          de cartera, Excel sigue siendo una herramienta ampliamente utilizada
          gracias a su flexibilidad, facilidad de personalización y bajo costo.
          Con una estructura adecuada es posible automatizar cálculos, construir
          gráficos dinámicos, generar reportes ejecutivos y realizar seguimiento
          a cientos o incluso miles de facturas pendientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          En esta guía aprenderás cómo construir un{" "}
          <strong>Dashboard de cartera en Excel</strong>, qué información debe
          contener, cuáles indicadores financieros debes monitorear, qué errores
          debes evitar y en qué momento conviene migrar a un software
          especializado de recuperación de cartera.
        </motion.p>

        {/* POR QUE UNA PLANTILLA DE CARTERA EN EXCEL SIGUE SIENDO UNA HERRAMIENTA TAN UTILIZADA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Por qué una plantilla de cartera en Excel sigue siendo una
          herramienta tan utilizada?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones creen que Excel únicamente sirve para registrar
          datos. Sin embargo, cuando se utiliza correctamente, permite
          centralizar toda la información relacionada con clientes, facturas,
          vencimientos, pagos, intereses de mora y recaudos en un único archivo.
          Esto facilita el análisis de la cartera y permite priorizar las
          acciones de cobranza según el nivel de riesgo de cada cliente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Además, un Dashboard actualizado ayuda a identificar tendencias de
          pago, calcular indicadores financieros, medir el desempeño del equipo
          de cobranza y proyectar el comportamiento del flujo de caja durante
          los siguientes meses, convirtiéndose en una herramienta de apoyo para
          la toma de decisiones estratégicas.
        </motion.p>

        {/* QUE ES UN DASHBOARD DE CARTERA EN EXCEL Y PARA QUE SIRVE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es un Dashboard de cartera en Excel y para qué sirve?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un <strong>Dashboard de cartera en Excel</strong> es un panel de
          control que reúne en una sola vista toda la información relacionada
          con las cuentas por cobrar de una empresa. Su objetivo es transformar
          una base de datos de facturas, clientes y pagos en información visual
          que facilite el análisis, la toma de decisiones y la priorización de
          las estrategias de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A diferencia de una simple hoja de cálculo, un Dashboard utiliza
          tablas dinámicas, gráficos, indicadores financieros y formatos
          condicionales para mostrar en tiempo real el comportamiento de la
          cartera, permitiendo detectar rápidamente clientes morosos,
          obligaciones próximas a vencer y variaciones en los niveles de
          recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para muchas pequeñas y medianas empresas, Excel continúa siendo la
          herramienta ideal para administrar la cartera porque ofrece
          flexibilidad, facilidad de personalización y un costo
          significativamente inferior frente a plataformas especializadas.
          Además, permite adaptar el Dashboard a las necesidades específicas de
          cada organización.
        </motion.p>

        {/* DIFERENCIA ENTRE UNA PLANTILLA DE CARTERA, UNA BASE DE DATOS Y UN DASHBOARD DE EXCEL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencia entre una plantilla de cartera, una base de datos y un
          Dashboard de Excel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es común confundir estos conceptos, aunque cada uno cumple una función
          diferente dentro del proceso de administración de cuentas por cobrar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Plantilla de cartera:</strong> contiene el registro de
            clientes, facturas, saldos pendientes, fechas de vencimiento y pagos
            realizados.
          </li>
          <li>
            <strong>Base de datos:</strong> almacena toda la información
            necesaria para alimentar reportes e indicadores financieros.
          </li>
          <li>
            <strong>Dashboard:</strong> convierte los datos en gráficos,
            indicadores y reportes ejecutivos que permiten conocer rápidamente
            el estado de la cartera de la empresa.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo ideal es que estos tres elementos trabajen de forma integrada.
          Mientras la plantilla almacena la información y la base de datos la
          organiza, el Dashboard presenta los resultados de manera visual para
          facilitar la toma de decisiones por parte de la gerencia financiera,
          el área de cartera o el equipo de cobranza.
        </motion.p>

        {/*  QUÉ EMPRESAS DEBERÍAN UTILIZAR UN DASHBOARD DE CARTERA EN EXCEL?  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué empresas deberían utilizar un Dashboard de cartera en Excel?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este tipo de herramienta resulta especialmente útil para empresas que
          manejan ventas a crédito y necesitan controlar permanentemente el
          comportamiento de sus clientes. Comercios, distribuidores, IPS,
          clínicas, constructoras, empresas de transporte, compañías de
          servicios, firmas de consultoría y cualquier organización que facture
          a plazo puede beneficiarse de un Dashboard de cartera bien
          estructurado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Incluso cuando posteriormente se implementa un software especializado,
          contar con un modelo bien diseñado en Excel facilita la migración de
          la información y ayuda a comprender cuáles indicadores son realmente
          relevantes para medir el desempeño de la recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de utilizar una plantilla de cartera en Excel para
          controlar las cuentas por cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un Dashboard de cartera en Excel no solamente permite conocer cuánto
          dinero debe cada cliente. También facilita la planificación
          financiera, ayuda a reducir la morosidad y proporciona información
          útil para tomar decisiones comerciales con mayor rapidez. Cuando la
          información se mantiene actualizada, los responsables de cartera
          pueden identificar riesgos antes de que afecten significativamente el
          flujo de caja de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, centralizar toda la información en una sola herramienta evita
          trabajar con múltiples archivos, reduce errores manuales y facilita la
          elaboración de informes para gerencia, auditorías internas o reuniones
          financieras.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Control centralizado de clientes:</strong> reúne toda la
            información de las cuentas por cobrar en un solo archivo.
          </li>

          <li>
            <strong>Seguimiento de vencimientos:</strong> identifica rápidamente
            las facturas próximas a vencer y las obligaciones en mora.
          </li>

          <li>
            <strong>Mayor control del flujo de caja:</strong> permite proyectar
            ingresos esperados según el comportamiento de pago de los clientes.
          </li>

          <li>
            <strong>Priorización de la cobranza:</strong> facilita enfocar los
            esfuerzos sobre las obligaciones con mayor riesgo de incumplimiento.
          </li>

          <li>
            <strong>Visualización mediante gráficos:</strong> ayuda a
            interpretar la información financiera de manera sencilla.
          </li>

          <li>
            <strong>Automatización de cálculos:</strong> reduce errores al
            calcular saldos, días de mora, intereses e indicadores financieros.
          </li>

          <li>
            <strong>Mejor toma de decisiones:</strong> permite conocer
            rápidamente cuál es el estado real de la cartera de la empresa.
          </li>

          <li>
            <strong>Información para auditorías:</strong> facilita la
            elaboración de reportes financieros y soportes para revisiones
            internas o externas.
          </li>

          <li>
            <strong>Escalabilidad:</strong> puede utilizarse tanto por pequeñas
            empresas como por organizaciones con cientos de clientes.
          </li>

          <li>
            <strong>Menor costo operativo:</strong> representa una alternativa
            económica frente a plataformas especializadas cuando el volumen de
            cartera aún es administrable.
          </li>
        </motion.ul>

        {/* QUE PROBLEMAS PUEDE AYUDARTE A DETECTAR UN DASHBOARD DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué problemas puede ayudarte a detectar un Dashboard de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una de las principales ventajas de trabajar con indicadores y gráficos
          es que permiten detectar problemas que normalmente pasan
          desapercibidos cuando solo se revisan listas de facturas o archivos
          planos.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Clientes que incrementan constantemente sus días de mora.</li>
          <li>Concentración excesiva de cartera en pocos clientes.</li>
          <li>
            Facturas próximas a prescribir o con alto riesgo de incumplimiento.
          </li>
          <li>Disminución del porcentaje de recuperación mensual.</li>
          <li>Incremento del índice de morosidad.</li>
          <li>Deterioro del flujo de caja debido a retrasos en los pagos.</li>
          <li>
            Comportamientos repetitivos de incumplimiento por parte de
            determinados clientes.
          </li>
          <li>
            Necesidad de iniciar procesos de cobro prejurídico o jurídico en
            casos específicos.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Detectar estos problemas de forma temprana permite implementar
          estrategias de cobranza más efectivas, negociar acuerdos de pago
          oportunamente y disminuir el riesgo de que la cartera vencida continúe
          creciendo.
        </motion.p>

        {/* FORMULAS DE EXCEL QUE FACILITAN EL CONTROL DE LA CARTERA Y LAS CUENTAS POR COBRAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Fórmulas de Excel que facilitan el control de la cartera y las cuentas
          por cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un dashboard de cartera no depende únicamente de los gráficos. La
          calidad de la información también está relacionada con las fórmulas
          utilizadas para automatizar cálculos y reducir errores manuales.
          Mientras menos procesos manuales existan, mayor será la confiabilidad
          de los indicadores financieros.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>SI para clasificar clientes según el estado de pago.</li>
          <li>SI.CONJUNTO para identificar diferentes rangos de mora.</li>
          <li>BUSCARV o BUSCARX para consultar información del cliente.</li>
          <li>SUMAR.SI.CONJUNTO para consolidar valores pendientes.</li>
          <li>CONTAR.SI para medir cantidad de facturas vencidas.</li>
          <li>HOY para calcular automáticamente los días de mora.</li>
          <li>
            Filtros y tablas dinámicas para analizar grandes volúmenes de
            información.
          </li>
        </motion.ul>

        {/* INDICADORES QUE DEBERÍAS REVISAR SEMANALMENTE PARA EVITAR QUE AUMENTE LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que deberías revisar semanalmente para evitar que aumente
          la cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas crean un dashboard en Excel, pero lo consultan
          únicamente al finalizar el mes. Una buena práctica consiste en revisar
          periódicamente los indicadores para detectar riesgos antes de que las
          obligaciones entren en una mora prolongada.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Valor total pendiente de recaudo.</li>
          <li>Facturas que vencen durante la semana.</li>
          <li>Clientes con mayor concentración de deuda.</li>
          <li>Cartera entre 30 y 60 días.</li>
          <li>Cartera superior a 90 días.</li>
          <li>Promesa de pago pendientes de cumplimiento.</li>
          <li>Valor recuperado frente a la meta mensual.</li>
        </motion.ul>

        {/* DASHBOARD DE CARTERA EN EXCEL O SOFTWARE ESPECIALIZADO: CUÁL CONVIENE MÁS? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dashboard de cartera en Excel o software especializado: ¿cuál conviene
          más?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Excel continúa siendo una herramienta muy útil para pequeñas y
          medianas empresas que administran un volumen moderado de clientes. Sin
          embargo, cuando la cantidad de facturas aumenta, existen múltiples
          usuarios trabajando al mismo tiempo o se requiere automatizar
          recordatorios y procesos de cobranza, un software especializado ofrece
          mayores ventajas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mejor decisión dependerá del tamaño de la cartera, la frecuencia
          con la que se actualiza la información y el nivel de automatización
          que requiera la empresa para mantener un adecuado flujo de caja.
        </motion.p>

        {/* PREGUNTAS FRECUENTES SOBRE DASHBOARDS DE CARTERA EN EXCEL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre dashboards de cartera en Excel
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Excel sirve para controlar las cuentas por cobrar?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sí. Excel permite organizar la información de clientes, calcular
          indicadores, elaborar reportes y realizar seguimiento a la cartera,
          especialmente en pequeñas y medianas empresas.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Cada cuánto debe actualizarse un dashboard de cartera?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo recomendable es actualizarlo diariamente o, como mínimo, una vez
          por semana para que los indicadores reflejen el estado real de las
          cuentas por cobrar.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Qué empresas pueden utilizar un dashboard de cartera en Excel?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cualquier empresa que otorgue crédito a sus clientes puede utilizar
          una plantilla en Excel para controlar vencimientos, pagos, indicadores
          y niveles de morosidad.
        </motion.p>

        {/* CONCLUSIÓN */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Conclusión: ¿Excel sigue siendo suficiente para gestionar la cartera
            de una empresa?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Un <strong>dashboard de cartera en Excel</strong> continúa siendo
            una excelente alternativa para pequeñas y medianas empresas que
            desean llevar un control organizado de sus cuentas por cobrar,
            analizar indicadores de recuperación y realizar seguimiento a los
            clientes con obligaciones pendientes. Cuando la información está
            bien estructurada, Excel permite identificar tendencias, medir la
            morosidad y tomar decisiones con mayor rapidez.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Sin embargo, a medida que aumenta el número de clientes, facturas,
            acuerdos de pago y procesos de cobranza, mantener toda la
            información en hojas de cálculo puede convertirse en una tarea
            compleja. En ese punto, muchas organizaciones optan por complementar
            o reemplazar Excel con un software especializado que automatice
            recordatorios, segmentación de deudores, seguimiento de compromisos
            e indicadores en tiempo real.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Independientemente de la herramienta utilizada, lo realmente
            importante es contar con información confiable, actualizar la base
            de datos de manera permanente, medir indicadores de desempeño y
            ejecutar una estrategia de cobranza consistente. Una buena gestión
            de cartera mejora el flujo de caja, reduce la cartera vencida y
            fortalece la estabilidad financiera de la empresa.
          </motion.p>
        </motion.section>
      </motion.article>
    </main>
  );
}
