"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function IndicadoresCarteraContent() {
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
          Indicadores de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Indicadores de cartera vencida: las 7 métricas que toda empresa debe
          medir para reducir la mora y mejorar el recaudo
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los indicadores de cartera vencida son una de las herramientas más
          importantes para evaluar la salud financiera de cualquier empresa que
          venda a crédito. Aunque muchas organizaciones realizan seguimiento a
          sus cuentas por cobrar, pocas analizan de forma periódica los
          indicadores que realmente permiten identificar el crecimiento de la
          mora, anticipar problemas de liquidez y mejorar la recuperación de
          cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir únicamente cuánto dinero deben los clientes ya no es suficiente.
          Una gestión moderna requiere conocer cuánto tiempo llevan vencidas las
          facturas, qué porcentaje representa la cartera en mora frente al
          total, qué tan rápido pagan los clientes y qué tan eficiente está
          siendo el proceso de cobranza. Estos datos permiten tomar decisiones
          oportunas antes de que las obligaciones se conviertan en pérdidas
          difíciles de recuperar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En esta guía conocerás cuáles son los principales indicadores de
          cartera vencida utilizados por las empresas en Colombia, cómo
          interpretarlos, cuáles son los valores de referencia más utilizados y
          qué estrategias pueden ayudarte a reducir la mora, fortalecer el flujo
          de caja y optimizar la gestión de cobranza sin afectar la relación con
          los clientes.
        </motion.p>

        {/* QUE SON LOS INDICADORES DE CARTERA VENCIDA Y POR QUE SON FUNDAMENTALES PARA UNA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué son los indicadores de cartera vencida y por qué son
          fundamentales para una empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los indicadores de cartera vencida son métricas utilizadas para
          evaluar el comportamiento de las cuentas por cobrar y medir qué tan
          eficiente está siendo la recuperación del dinero adeudado por los
          clientes. Gracias a estos indicadores es posible identificar
          tendencias de mora, estimar riesgos de incumplimiento y tomar
          decisiones antes de que la liquidez de la empresa se vea comprometida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones únicamente revisan el valor total de la cartera,
          dejando de lado información mucho más valiosa como la antigüedad de
          las facturas, el tiempo promedio de recaudo o el porcentaje de
          recuperación. Analizar estos datos permite diseñar estrategias de
          cobranza más efectivas y priorizar a los clientes con mayor riesgo de
          mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En empresas B2B, IPS, constructoras, distribuidores, comercializadoras
          y cualquier organización que venda a crédito, estos indicadores se
          convierten en herramientas indispensables para proteger el flujo de
          caja y mantener la estabilidad financiera.
        </motion.p>

        {/* PRINCIPALES INDICADORES DE CARTERA VENCIDA QUE TODA EMPRESA DEBERÍA MONITORIZAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales indicadores de cartera vencida que toda empresa debería
          monitorear
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un único indicador capaz de mostrar la realidad completa de
          una cartera. Lo recomendable es analizar diferentes métricas de manera
          conjunta, ya que cada una ofrece información específica sobre el
          comportamiento de los clientes, la eficiencia del recaudo y el riesgo
          financiero de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A continuación encontrarás los indicadores más utilizados por
          departamentos de cartera, áreas financieras y empresas especializadas
          en recuperación de cartera para controlar la mora y mejorar el
          recaudo.
        </motion.p>

        {/* INDICE DE CARTERA VENCIDA: EL KPI QUE MUESTRA EL VERDADERO NIVEL DE MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Índice de cartera vencida: el KPI que muestra el verdadero nivel de
          mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El índice de cartera vencida indica qué porcentaje del total de las
          cuentas por cobrar se encuentra fuera del plazo de pago acordado. Es
          probablemente el indicador más importante para evaluar el riesgo
          financiero asociado a la cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando este porcentaje aumenta de manera constante, puede evidenciar
          problemas en las políticas de crédito, falta de seguimiento oportuno o
          procesos de cobranza poco efectivos. Detectarlo a tiempo permite
          implementar acciones correctivas antes de que la situación afecte la
          liquidez de la empresa.
        </motion.p>

        {/* ROTACION DE CARTERA: CUANTO TARDA REALMENTE LA EMPRESA EN RECUPERAR SU DINERO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Rotación de cartera: cuánto tarda realmente la empresa en recuperar
          su dinero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera permite conocer la velocidad con la que una
          empresa convierte sus cuentas por cobrar en efectivo. Entre menor sea
          el tiempo de recuperación, mayor será la disponibilidad de recursos
          para cubrir gastos operativos, invertir y crecer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si este indicador empieza a deteriorarse, normalmente significa que
          los clientes están demorando más en pagar o que la estrategia de
          seguimiento necesita ajustes. Por ello es uno de los KPI más
          utilizados para medir la eficiencia del área de cartera.
        </motion.p>

        {/* EDAD DE CARTERA: COMO DETECTAR DEUDAS CRITICAS ANTES DE PERDER EL DINERO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Edad de cartera: cómo detectar deudas críticas antes de perder el
          dinero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador clasifica las deudas según el tiempo de mora, por
          ejemplo: 30 días, 60 días, 90 días o más de 120 días.
        </motion.p>

        {/* INDICE DE RECAUDO: MIDE CUÁNDO TAN EFECTIVA ESTÁ SIENDO TU COBRANZA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Índice de recaudo: mide qué tan efectiva está siendo tu cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador mide qué porcentaje de la cartera se logra recuperar en
          un período determinado.
        </motion.p>

        {/* QUE INDICADORES DE CARTERA VENCIDA DEBERÍA REVISAR UNA EMPRESA CADA SEMANA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué indicadores de cartera vencida debería revisar una empresa cada
          semana?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque muchas empresas revisan sus indicadores únicamente al cierre
          del mes, una buena gestión de cartera requiere realizar un seguimiento
          periódico. Analizar las métricas semanalmente permite detectar
          aumentos en la mora, identificar clientes con alto riesgo de
          incumplimiento y tomar decisiones antes de que las cuentas por cobrar
          se conviertan en pérdidas difíciles de recuperar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La frecuencia de medición dependerá del volumen de operaciones de la
          empresa, pero organizaciones que venden constantemente a crédito
          suelen monitorear sus indicadores incluso de forma diaria mediante
          software especializado de gestión de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Porcentaje de cartera vencida.</li>
          <li>Días promedio de recaudo.</li>
          <li>Valor recuperado durante la semana.</li>
          <li>Número de clientes que ingresaron en mora.</li>
          <li>Acuerdos de pago cumplidos e incumplidos.</li>
          <li>Cartera clasificada por rangos de antigüedad.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando estos indicadores muestran variaciones negativas de manera
          constante, la empresa debe revisar sus políticas de crédito,
          fortalecer el seguimiento preventivo y optimizar las estrategias de
          cobranza antes de que el deterioro financiero aumente.
        </motion.p>

        {/* ERRORES MÁS COMUNES AL INTERPRETAR LOS INDICADORES DE CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores más comunes al interpretar los indicadores de cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir la cartera es importante, pero interpretar correctamente los
          resultados es lo que realmente permite tomar mejores decisiones.
          Muchas empresas cuentan con información suficiente sobre sus cuentas
          por cobrar, aunque no analizan las causas que originan el incremento
          de la mora ni las tendencias que muestran los indicadores a lo largo
          del tiempo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un indicador aislado puede ofrecer una visión incompleta de la
          situación financiera. Por ejemplo, una reducción temporal de la
          cartera vencida no siempre significa que la gestión de cobranza esté
          funcionando mejor, ya que puede obedecer a pagos extraordinarios o a
          una disminución de las ventas a crédito.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Analizar únicamente el porcentaje de cartera vencida.</li>
          <li>No comparar los indicadores con períodos anteriores.</li>
          <li>Ignorar el comportamiento por tipo de cliente.</li>
          <li>No segmentar la cartera según la antigüedad de la mora.</li>
          <li>Tomar decisiones sin revisar el flujo de caja.</li>
          <li>No establecer metas mensuales para cada indicador.</li>
          <li>Esperar al cierre del mes para revisar la información.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mejor práctica consiste en analizar los indicadores de forma
          conjunta. Relacionar el índice de cartera vencida, la rotación de
          cartera, la antigüedad de las cuentas por cobrar y la tasa de
          recuperación permite obtener una visión mucho más precisa del
          desempeño de la gestión de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes al medir los indicadores de cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas calculan indicadores de cartera únicamente cuando
          aparecen problemas de liquidez. Sin embargo, esperar a que aumente la
          mora significa perder la oportunidad de actuar de forma preventiva.
          Los indicadores deben analizarse periódicamente para identificar
          tendencias, detectar clientes con mayor riesgo y tomar decisiones
          antes de que las cuentas por cobrar se conviertan en pérdidas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, es recomendable que los reportes sean comparados mes a mes.
          Esto permite conocer si las estrategias implementadas realmente están
          mejorando el recaudo o si es necesario ajustar las políticas de
          crédito y cobranza.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Medir únicamente la cartera vencida y no la cartera total.</li>
          <li>No actualizar los indicadores de forma periódica.</li>
          <li>No segmentar la cartera por antigüedad.</li>
          <li>
            Analizar únicamente el valor de la deuda y no el comportamiento del
            cliente.
          </li>
          <li>
            No relacionar los indicadores con el flujo de caja de la empresa.
          </li>
          <li>
            No establecer metas de recuperación para el equipo de cobranza.
          </li>
        </motion.ul>

        {/* CON QUE FRECUENCIA DEBEN REVISARSE LOS INDICADORES DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Con qué frecuencia deben revisarse los indicadores de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe una única frecuencia válida para todas las organizaciones,
          ya que depende del volumen de clientes, del plazo de crédito y del
          nivel de riesgo del negocio. Sin embargo, la mayoría de empresas
          obtiene mejores resultados cuando realiza un seguimiento mensual y
          genera reportes semanales para las cuentas que presentan mayor nivel
          de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un monitoreo constante permite identificar rápidamente aumentos en el
          índice de cartera vencida, retrasos en el recaudo o cambios en el
          comportamiento de los clientes. De esta manera es posible aplicar
          estrategias de cobranza antes de que la recuperación de la deuda sea
          más compleja o costosa.
        </motion.p>

        {/* CONCLUSION: MEDIR LOS INDICADORES DE CARTERA ES EL PRIMER PASO PARA REDUCIR LA MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: medir los indicadores de cartera es el primer paso para
          reducir la mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los indicadores de cartera vencida permiten conocer con precisión cómo
          se comportan las cuentas por cobrar, identificar clientes con mayor
          riesgo de incumplimiento y evaluar si las estrategias de cobranza
          realmente están generando resultados. Empresas que monitorean de
          manera constante métricas como el índice de cartera vencida, la
          rotación de cartera, la antigüedad de las cuentas por cobrar y el
          índice de recaudo suelen tomar decisiones más acertadas y reducir
          significativamente los niveles de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Más allá de calcular cifras, estos indicadores funcionan como
          herramientas de gestión que ayudan a fortalecer la liquidez, optimizar
          el flujo de caja y proteger la rentabilidad de la organización. Cuando
          la medición se acompaña de políticas de crédito bien definidas,
          seguimiento oportuno y procesos de recuperación eficientes, la empresa
          puede disminuir pérdidas financieras y mantener una cartera mucho más
          saludable en el largo plazo.
        </motion.p>
      </motion.article>
    </main>
  );
}
