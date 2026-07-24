"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DsrCartera() {
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
          transition={{ duration: 0.4 }}
        >
          Indicadores Financieros y Recuperación de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ¿Qué es el DSR en recuperación de cartera? Cómo interpretar este
          indicador y mejorar la eficiencia de la cobranza empresarial
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Medir los resultados de la gestión de cobranza es indispensable para
          tomar decisiones financieras acertadas. Entre los diferentes
          indicadores utilizados por las empresas se encuentra el{" "}
          <strong>DSR</strong>, una métrica que permite evaluar el desempeño de
          la recuperación de cartera y determinar qué tan efectivas están siendo
          las estrategias implementadas para recaudar las cuentas por cobrar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Aunque el significado específico del DSR puede variar según la
          metodología utilizada por cada organización, en la gestión de cartera
          suele emplearse como un indicador para medir el nivel de recuperación
          alcanzado durante un período, comparar resultados históricos, evaluar
          equipos de cobranza y detectar oportunidades de mejora en los procesos
          de recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Comprender cómo interpretar este KPI permite optimizar la
          administración de cuentas por cobrar, reducir la cartera vencida,
          fortalecer el flujo de caja y establecer estrategias preventivas que
          disminuyan el riesgo de mora sin tener que acudir inmediatamente a
          procesos judiciales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          En esta guía encontrarás qué es el DSR, cómo interpretarlo, qué
          factores afectan este indicador, cuáles métricas financieras deben
          analizarse junto con él y qué acciones ayudan a mejorar la
          recuperación de cartera de manera sostenible.
        </motion.p>

        {/*  POR QUE MEDIR EL DSR  */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            ¿Por qué medir el DSR puede mejorar la recuperación de cartera y el
            flujo de caja de una empresa?
          </h2>

          <p>
            Muchas empresas concentran sus esfuerzos en vender más, pero dedican
            poco tiempo a analizar si realmente están recuperando el dinero de
            esas ventas. Precisamente ahí radica la importancia del DSR: permite
            convertir la gestión de cobranza en un proceso medible, comparable y
            susceptible de mejora continua.
          </p>

          <p>
            Cuando una organización monitorea este indicador periódicamente
            puede identificar con rapidez si la recuperación de cartera está
            perdiendo eficiencia, si determinados segmentos de clientes
            presentan mayores niveles de mora o si las políticas de crédito
            necesitan ajustes.
          </p>

          <p>
            Además, el DSR facilita la toma de decisiones porque proporciona
            información objetiva sobre el rendimiento del proceso de recaudo. En
            lugar de depender únicamente de percepciones, la empresa puede
            establecer metas, evaluar resultados y realizar mejoras basadas en
            datos.
          </p>

          <p>
            Un seguimiento constante también permite anticipar problemas de
            liquidez, disminuir el crecimiento de la cartera vencida y
            fortalecer el flujo de caja sin necesidad de incrementar el
            endeudamiento o recurrir de inmediato a procesos judiciales.
          </p>

          <ul>
            <li>Permite medir objetivamente la efectividad de la cobranza.</li>
            <li>Facilita identificar tendencias de recuperación.</li>
            <li>Ayuda a evaluar el desempeño del equipo de cartera.</li>
            <li>
              Permite comparar periodos mensuales, trimestrales y anuales.
            </li>
            <li>Contribuye a reducir el riesgo financiero.</li>
            <li>Favorece una mejor planeación del flujo de caja.</li>
            <li>
              Ayuda a detectar clientes con mayor riesgo de incumplimiento.
            </li>
            <li>Permite optimizar las políticas de crédito y cobranza.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué empresas deberían controlar el DSR de manera permanente?</h2>

          <p>
            Cualquier empresa que venda productos o servicios a crédito puede
            obtener un gran beneficio al monitorear este indicador. No importa
            si se trata de una pyme, una gran compañía o una organización con
            miles de clientes; siempre existirá el riesgo de retrasos en los
            pagos.
          </p>

          <p>
            Sectores como salud, industria, tecnología, construcción,
            distribución, educación, logística, comercio mayorista y prestación
            de servicios suelen manejar altos volúmenes de cuentas por cobrar,
            por lo que requieren un seguimiento permanente de indicadores como
            el DSR para mantener una cartera saludable.
          </p>

          <p>
            Incluso empresas con procesos de cobranza automatizados utilizan
            este KPI para evaluar la efectividad de sus estrategias, identificar
            oportunidades de mejora y optimizar la asignación de recursos dentro
            del área financiera.
          </p>

          <ul>
            <li>Empresas B2B.</li>
            <li>IPS y clínicas.</li>
            <li>Distribuidores y mayoristas.</li>
            <li>Constructoras.</li>
            <li>Instituciones educativas.</li>
            <li>Empresas de tecnología.</li>
            <li>Prestadores de servicios profesionales.</li>
            <li>Organizaciones con ventas a crédito.</li>
          </ul>
        </motion.section>

        {/* COMO INTERPRETAR EL DSR */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Cómo interpretar el DSR correctamente y detectar oportunidades de
            mejora en la gestión de cobranza
          </h2>

          <p>
            Calcular el DSR únicamente representa el primer paso. El verdadero
            valor de este indicador aparece cuando la empresa analiza su
            evolución en el tiempo, compara los resultados con períodos
            anteriores y utiliza la información para tomar decisiones orientadas
            a mejorar la recuperación de cartera.
          </p>

          <p>
            Un DSR no debe interpretarse de forma aislada. Su comportamiento
            depende del sector económico, del tipo de clientes, de las políticas
            de crédito y del nivel de riesgo que la empresa esté dispuesta a
            asumir. Por ello, más que buscar un número "perfecto", lo
            recomendable es medir la tendencia del indicador y evaluar si la
            gestión de cobranza está mejorando o deteriorándose.
          </p>

          <p>
            También es importante analizar este KPI junto con la antigüedad de
            la cartera, la rotación de cuentas por cobrar, el DSO y el
            porcentaje de recuperación obtenido durante el mismo período.
          </p>
        </motion.section>

        {/* QUE SIGNIFICA TENER UN DSR ALTO */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué significa tener un DSR alto?</h2>

          <p>
            Generalmente, un DSR alto refleja que las estrategias de cobranza
            están generando buenos resultados y que la empresa logra recuperar
            una parte importante de la cartera gestionada.
          </p>

          <p>
            Esto suele traducirse en una mayor disponibilidad de efectivo, menor
            acumulación de cartera vencida y una mejor capacidad para financiar
            las operaciones del negocio sin depender excesivamente del crédito
            externo.
          </p>

          <ul>
            <li>Mayor porcentaje de recuperación.</li>
            <li>Mejor flujo de caja.</li>
            <li>Menor nivel de mora.</li>
            <li>Mayor liquidez para la empresa.</li>
            <li>Procesos de cobranza más eficientes.</li>
            <li>Mayor cumplimiento de acuerdos de pago.</li>
          </ul>
        </motion.section>

        {/* QUE INDICA UN DSR BAJO */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Qué indica un DSR bajo?</h2>

          <p>
            Un DSR bajo suele ser una señal de alerta. Puede indicar que la
            empresa está teniendo dificultades para recuperar la cartera o que
            las acciones de cobranza implementadas no están siendo
            suficientemente efectivas.
          </p>

          <p>
            Sin embargo, este resultado no siempre significa que exista un
            problema grave. También puede estar influenciado por cambios
            temporales en las ventas, la incorporación de nuevos clientes, la
            estacionalidad del negocio o modificaciones en las políticas
            comerciales.
          </p>

          <p>
            Lo recomendable es identificar la causa del comportamiento del
            indicador antes de tomar decisiones y analizar si la disminución
            corresponde a un fenómeno puntual o a una tendencia sostenida.
          </p>

          <ul>
            <li>Incremento de la cartera vencida.</li>
            <li>Retrasos frecuentes en los pagos.</li>
            <li>Bajo cumplimiento de acuerdos.</li>
            <li>Seguimiento insuficiente a clientes morosos.</li>
            <li>Políticas de crédito demasiado flexibles.</li>
            <li>Procesos de cobranza poco eficientes.</li>
          </ul>
        </motion.section>

        {/* ERRORES FRECUENTES AL INTERPRETAR EL DSR */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Errores frecuentes al interpretar el DSR</h2>

          <p>
            Uno de los errores más comunes consiste en analizar este indicador
            sin tener en cuenta el contexto financiero de la empresa. Un mismo
            resultado puede ser positivo para una organización y preocupante
            para otra dependiendo del sector, del tamaño de la cartera y de los
            plazos de crédito otorgados.
          </p>

          <p>
            También es frecuente comparar el DSR con empresas de industrias
            totalmente diferentes o sacar conclusiones basándose únicamente en
            un mes de información, cuando lo recomendable es revisar la
            evolución del indicador en varios períodos consecutivos.
          </p>

          <ul>
            <li>Analizar el DSR sin revisar otros KPIs.</li>
            <li>Comparar empresas de sectores diferentes.</li>
            <li>No medir la evolución histórica.</li>
            <li>Ignorar la antigüedad de la cartera.</li>
            <li>No segmentar clientes por riesgo.</li>
            <li>Tomar decisiones basadas en un único período.</li>
            <li>No revisar el impacto de las políticas de crédito.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Indicadores financieros que deben analizarse junto con el DSR para
            obtener una visión completa de la cartera
          </h2>

          <p>
            Aunque el DSR aporta información valiosa sobre el desempeño de la
            recuperación de cartera, ningún indicador financiero debe analizarse
            de manera aislada. Una evaluación integral requiere revisar otros
            KPI que permitan comprender el comportamiento de las cuentas por
            cobrar desde diferentes perspectivas.
          </p>

          <p>
            Al combinar varios indicadores es posible identificar si los
            problemas provienen del otorgamiento del crédito, de la gestión de
            cobranza, del comportamiento de determinados clientes o de factores
            externos que afectan la liquidez de la empresa.
          </p>

          <ul>
            <li>
              <strong>DSO (Days Sales Outstanding):</strong> mide el tiempo
              promedio que tarda la empresa en recuperar el dinero de las ventas
              realizadas a crédito.
            </li>

            <li>
              <strong>Rotación de cartera:</strong> permite conocer cuántas
              veces se recuperan las cuentas por cobrar durante un período
              determinado.
            </li>

            <li>
              <strong>Antigüedad de cartera:</strong> clasifica las obligaciones
              según los días de mora para identificar riesgos de recuperación.
            </li>

            <li>
              <strong>Porcentaje de cartera vencida:</strong> muestra qué parte
              del total de la cartera presenta incumplimientos.
            </li>

            <li>
              <strong>Tasa de recuperación:</strong> indica cuánto dinero logra
              recuperar la empresa frente al total de la cartera gestionada.
            </li>

            <li>
              <strong>Promesa de pago cumplida:</strong> mide qué porcentaje de
              los acuerdos de pago realmente termina siendo cumplido por los
              clientes.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ejemplo práctico de análisis del DSR en una empresa</h2>

          <p>
            Imagine una empresa que durante un trimestre gestionó una cartera
            por valor de $600 millones y logró recuperar $480 millones mediante
            llamadas, recordatorios automáticos, acuerdos de pago y seguimiento
            comercial.
          </p>

          <p>
            Si al comparar ese resultado con el trimestre anterior observa que
            el monto recuperado aumentó y el tiempo promedio de recaudo
            disminuyó, el DSR estará reflejando una mejora en la eficiencia del
            proceso de cobranza.
          </p>

          <p>
            En cambio, si la empresa mantiene el mismo volumen de cartera pero
            cada vez recupera menos dinero o necesita más tiempo para hacerlo,
            será una señal de que las estrategias actuales deben revisarse antes
            de que aumente la cartera vencida.
          </p>

          <p>
            Este tipo de análisis periódico permite detectar problemas con
            suficiente anticipación y tomar decisiones antes de que afecten el
            flujo de caja del negocio.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Cada cuánto tiempo conviene medir el DSR</h2>

          <p>
            La frecuencia dependerá del volumen de operaciones y del
            comportamiento de la cartera de cada empresa. Sin embargo, la
            mayoría de organizaciones realiza este análisis de manera mensual
            para detectar rápidamente cambios en el desempeño de la cobranza.
          </p>

          <p>
            Empresas con un alto número de clientes o con grandes volúmenes de
            ventas a crédito incluso realizan seguimientos semanales para
            reaccionar con mayor rapidez ante incrementos en la mora.
          </p>

          <ul>
            <li>Seguimiento semanal para grandes volúmenes de cartera.</li>

            <li>Medición mensual para control operativo.</li>

            <li>Análisis trimestral para evaluar tendencias.</li>

            <li>Comparación anual para medir la evolución del negocio.</li>

            <li>Revisión extraordinaria cuando aumente la mora.</li>
          </ul>
        </motion.section>

        {/* SECTORES DONDE EL DSR ES UNO DE LOS INDICADORES FINANCIEROS MAS UTILIZADOS */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Sectores donde el DSR es uno de los indicadores financieros más
            utilizados
          </h2>

          <p>
            Este indicador resulta especialmente útil en empresas que venden a
            crédito y dependen de una recuperación constante de cartera para
            mantener un flujo de caja saludable.
          </p>

          <ul>
            <li>Empresas B2B.</li>
            <li>Distribuidores mayoristas.</li>
            <li>Industria manufacturera.</li>
            <li>Empresas de tecnología y software.</li>
            <li>Sector salud.</li>
            <li>Constructoras.</li>
            <li>Empresas de transporte y logística.</li>
            <li>Instituciones educativas.</li>
            <li>Servicios profesionales.</li>
            <li>Cooperativas y entidades financieras.</li>
          </ul>

          <p>
            En todos estos sectores, un seguimiento continuo del DSR permite
            anticipar problemas de liquidez, fortalecer la planeación financiera
            y mejorar la eficiencia de la recuperación de cartera.
          </p>
        </motion.section>

        {/* FACTORES QUE AFECTAN EL DSR Y PUEDE REDUCIR LA EFECTIVIDAD DE LA RECUPERACIÓN DE CARTERA */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Factores que afectan el DSR y pueden reducir la efectividad de la
            recuperación de cartera
          </h2>

          <p>
            El DSR no depende únicamente del trabajo del equipo de cobranza.
            Existen múltiples factores internos y externos que pueden hacer que
            este indicador mejore o empeore con el paso del tiempo. Por ello, es
            importante analizar el contexto completo antes de tomar decisiones.
          </p>

          <ul>
            <li>Políticas de crédito demasiado flexibles.</li>
            <li>Clientes con dificultades financieras.</li>
            <li>Seguimiento tardío a las facturas vencidas.</li>
            <li>Errores en la facturación.</li>
            <li>Disputas comerciales con los clientes.</li>
            <li>Procesos manuales de cobranza.</li>
            <li>Información desactualizada del deudor.</li>
            <li>Falta de automatización.</li>
            <li>Ausencia de indicadores complementarios.</li>
            <li>Escasa capacitación del equipo de recuperación.</li>
          </ul>

          <p>
            Cuando varios de estos factores coinciden, la recuperación suele
            hacerse más lenta y el desempeño reflejado por el DSR disminuye de
            manera considerable.
          </p>
        </motion.section>

        {/* ESTRATEGIAS PARA MEJORAR EL DSR SIN AFFECTAR LA RELACIÓN CON LOS CLIENTES */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Estrategias para mejorar el DSR sin afectar la relación con los
            clientes
          </h2>

          <p>
            Mejorar este indicador no significa presionar indiscriminadamente a
            los clientes. Las organizaciones con mejores resultados suelen
            combinar tecnología, seguimiento oportuno y procesos claros de
            recuperación.
          </p>

          <ul>
            <li>Implementar políticas de crédito bien definidas.</li>
            <li>Evaluar el riesgo antes de vender a crédito.</li>
            <li>Automatizar recordatorios de pago.</li>
            <li>Contactar al cliente antes del vencimiento.</li>
            <li>Ofrecer acuerdos de pago cuando sea necesario.</li>
            <li>Segmentar la cartera por nivel de riesgo.</li>
            <li>Priorizar clientes con mayor probabilidad de recuperación.</li>
            <li>Monitorear permanentemente los indicadores.</li>
            <li>Digitalizar el proceso de cobranza.</li>
            <li>Realizar seguimiento después de cada compromiso de pago.</li>
          </ul>

          <p>
            Estas acciones permiten incrementar la recuperación sin deteriorar
            la experiencia del cliente y reducen significativamente la cartera
            vencida.
          </p>
        </motion.section>

        {/* ERRORES MÁS COMUNES AL INTERPRETAR EL INDICADOR DSR */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Errores más comunes al interpretar el indicador DSR</h2>

          <p>
            Muchas empresas obtienen el indicador correctamente, pero llegan a
            conclusiones equivocadas porque no analizan toda la información
            disponible.
          </p>

          <ul>
            <li>Analizar únicamente un periodo.</li>
            <li>No comparar el indicador con años anteriores.</li>
            <li>No segmentar la cartera.</li>
            <li>Ignorar la antigüedad de las obligaciones.</li>
            <li>No revisar la calidad del crédito otorgado.</li>
            <li>Compararse con empresas de sectores diferentes.</li>
            <li>No utilizar indicadores complementarios.</li>
            <li>Basar todas las decisiones únicamente en el DSR.</li>
          </ul>

          <p>
            El DSR debe formar parte de un tablero integral de indicadores
            financieros y de recuperación de cartera para generar decisiones
            realmente útiles.
          </p>
        </motion.section>

        {/* PREGUNTAS FRECUENTES SOBRE EL DSR Y LA RECUPERACIÓN DE CARTERA */}
        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Preguntas frecuentes sobre el DSR y la recuperación de cartera
          </h2>

          <h3>¿Qué significa DSR?</h3>

          <p>
            Dependiendo de la metodología utilizada por cada organización, el
            DSR hace referencia a un indicador que mide el desempeño de
            recuperación de cartera y permite evaluar la eficiencia de la
            gestión de cobranza.
          </p>

          <h3>¿Cuál es la diferencia entre DSR y DSO?</h3>

          <p>
            El DSO mide el tiempo promedio que tarda una empresa en cobrar sus
            ventas a crédito, mientras que el DSR evalúa el desempeño alcanzado
            durante los procesos de recuperación de cartera.
          </p>

          <h3>¿Cada cuánto debería calcularse el DSR?</h3>

          <p>
            Lo más recomendable es realizar mediciones mensuales y compararlas
            con los resultados históricos para identificar tendencias y
            oportunidades de mejora.
          </p>

          <h3>¿Un DSR bajo siempre significa una mala gestión?</h3>

          <p>
            No necesariamente. También puede verse afectado por factores
            externos como la situación económica, el perfil de los clientes, la
            calidad de la cartera o cambios en las políticas comerciales.
          </p>

          <h3>¿Qué empresas deberían controlar este indicador?</h3>

          <p>
            Todas las organizaciones que venden a crédito, especialmente
            empresas B2B, IPS, distribuidores, constructoras, compañías de
            tecnología, cooperativas, empresas de servicios y organizaciones con
            altos volúmenes de cuentas por cobrar.
          </p>
        </motion.section>

        {/* CONCLUSION: EL DSR PERMITE MEDIR LA EFICIENCIA REAL DE LA RECUPERACIÓN DE CARTERA */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Conclusión: el DSR permite medir la eficiencia real de la
            recuperación de cartera
          </h2>

          <p>
            El DSR es mucho más que un simple indicador financiero. Utilizado de
            forma correcta, permite conocer si las estrategias de recuperación
            realmente están funcionando y facilita la toma de decisiones
            orientadas a mejorar el flujo de caja de la empresa.
          </p>

          <p>
            Cuando este KPI se analiza junto con indicadores como el DSO, la
            rotación de cartera, la antigüedad de las obligaciones y el
            porcentaje de cartera vencida, la organización obtiene una visión
            mucho más completa sobre la salud de sus cuentas por cobrar.
          </p>

          <p>
            Implementar procesos de cobranza preventiva, automatizar el
            seguimiento, fortalecer las políticas de crédito y revisar
            periódicamente estos indicadores permitirá reducir la mora, aumentar
            la recuperación y mejorar la estabilidad financiera del negocio a
            largo plazo.
          </p>
        </motion.section>
      </motion.article>
    </main>
  );
}
