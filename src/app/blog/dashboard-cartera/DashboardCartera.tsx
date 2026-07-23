"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DashboardCartera() {
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
          Analítica de Cartera
        </motion.span>

        {/* HERO */}
        <h1>
          Dashboard de cartera: cómo crear un tablero con KPIs e indicadores
          para reducir la morosidad y mejorar la recuperación de cartera
        </h1>

        <p className={styles.intro}>
          Un <strong>dashboard de cartera</strong> permite visualizar en tiempo
          real el estado de las cuentas por cobrar, medir el desempeño del
          equipo de cobranza y detectar riesgos antes de que impacten el flujo
          de caja de la empresa. En lugar de revisar múltiples reportes o hojas
          de cálculo, un tablero consolida la información más importante para
          facilitar la toma de decisiones basada en datos.
        </p>

        <p>
          Actualmente, las empresas que administran altos volúmenes de clientes
          utilizan dashboards para monitorear indicadores como la cartera
          vencida, los días promedio de recaudo, el porcentaje de recuperación,
          la rotación de cartera y la efectividad de cada gestor de cobranza.
          Gracias a esta información es posible priorizar acciones, optimizar
          recursos y reducir la morosidad de manera sostenida.
        </p>

        <p>
          En esta guía conocerá qué es un dashboard de cartera, cuáles son los
          indicadores más importantes, cómo diseñarlo correctamente y qué
          herramientas permiten automatizar la visualización de la información
          para lograr una gestión mucho más eficiente.
        </p>

        {/* QUE ES UN DASHBOARD DE CARTERA */}
        <h2>
          ¿Qué es un dashboard de cartera y por qué se ha convertido en una
          herramienta indispensable para las empresas?
        </h2>

        <p>
          Un dashboard de cartera es un tablero de control que reúne los
          principales indicadores relacionados con las cuentas por cobrar. Su
          función consiste en transformar grandes volúmenes de información en
          gráficos, tablas e indicadores fáciles de interpretar para que la
          gerencia financiera y el equipo de cobranza puedan tomar decisiones
          oportunamente.
        </p>

        <p>
          A diferencia de un informe tradicional, un dashboard permite conocer
          el comportamiento de la cartera prácticamente en tiempo real. Esto
          facilita detectar clientes con mayor riesgo de incumplimiento,
          identificar tendencias de pago y medir la efectividad de las
          estrategias implementadas.
        </p>

        <p>Un tablero bien diseñado responde rápidamente preguntas como:</p>

        <ul>
          <li>¿Cuánto dinero tiene actualmente la empresa por cobrar?</li>
          <li>¿Qué porcentaje corresponde a cartera vencida?</li>
          <li>¿Qué clientes representan el mayor riesgo financiero?</li>
          <li>¿Cuál es el porcentaje de recuperación mensual?</li>
          <li>¿Qué asesor obtiene mejores resultados de cobranza?</li>
          <li>¿Cómo evolucionó la morosidad durante los últimos meses?</li>
          <li>¿Qué acuerdos de pago están próximos a vencerse?</li>
        </ul>

        {/* BENEFICIOS DE IMPLEMENTAR UN DASHBOARD DE CARTERA */}
        <h2>
          Beneficios de implementar un dashboard para controlar las cuentas por
          cobrar
        </h2>

        <p>
          La principal ventaja de un dashboard es que convierte la información
          financiera en una herramienta práctica para la toma de decisiones. En
          lugar de reaccionar cuando la cartera ya presenta altos niveles de
          mora, la empresa puede anticiparse mediante indicadores y alertas
          tempranas.
        </p>

        <p>
          Además, permite que las áreas financiera, comercial y de cobranza
          trabajen sobre la misma información, reduciendo errores y mejorando la
          coordinación entre los equipos.
        </p>

        <ul>
          <li>Mayor control sobre la cartera vigente y vencida.</li>

          <li>
            Visualización inmediata del comportamiento de las cuentas por
            cobrar.
          </li>

          <li>Identificación temprana de clientes con alto riesgo de mora.</li>

          <li>
            Priorización de las gestiones de cobranza según el impacto
            financiero.
          </li>

          <li>
            Seguimiento permanente al cumplimiento de los acuerdos de pago.
          </li>

          <li>Medición objetiva del desempeño de cada gestor de cartera.</li>

          <li>
            Reducción del tiempo empleado para elaborar reportes manuales.
          </li>

          <li>Mejor planificación del flujo de caja empresarial.</li>

          <li>
            Mayor capacidad para proyectar ingresos futuros derivados del
            recaudo.
          </li>

          <li>
            Toma de decisiones basada en indicadores y no únicamente en
            percepciones.
          </li>
        </ul>

        {/* KPIs E INDICADORES QUE NO PUEDE FALTAR EN UN DASHBOARD DE CARTERA EMPRESARIAL */}
        <h2>
          KPIs e indicadores que no pueden faltar en un dashboard de cartera
          empresarial
        </h2>

        <p>
          Un dashboard solo genera valor cuando presenta indicadores que ayudan
          a tomar decisiones. No se trata de incluir la mayor cantidad posible
          de gráficos, sino de seleccionar aquellas métricas que realmente
          muestran la salud de la cartera y permiten actuar antes de que la
          morosidad afecte el flujo de caja.
        </p>

        <p>
          Dependiendo del sector y del modelo de negocio, algunas empresas
          requieren indicadores adicionales. Sin embargo, existen KPIs que son
          prácticamente obligatorios para cualquier organización que venda a
          crédito o administre cuentas por cobrar.
        </p>

        <h2>1. Cartera total pendiente de recaudo</h2>

        <p>
          Este indicador muestra el valor total que los clientes adeudan a la
          empresa en un momento determinado. Es normalmente el primer dato que
          observa la gerencia financiera porque refleja la exposición económica
          de la organización.
        </p>

        <p>
          Además de visualizar el valor absoluto, resulta recomendable comparar
          este indicador con meses anteriores para identificar tendencias de
          crecimiento o disminución de la cartera.
        </p>

        <h2>2. Cartera corriente versus cartera vencida</h2>

        <p>
          Separar las cuentas por cobrar entre cartera vigente y cartera vencida
          facilita comprender qué porcentaje de los ingresos futuros presenta
          riesgo de incumplimiento.
        </p>

        <p>
          Cuando el porcentaje de cartera vencida comienza a incrementarse de
          manera sostenida, normalmente es una señal de alerta que requiere
          fortalecer las estrategias de cobranza preventiva y seguimiento a los
          clientes.
        </p>

        <ul>
          <li>Cartera al día.</li>
          <li>Cartera entre 1 y 30 días.</li>
          <li>Cartera entre 31 y 60 días.</li>
          <li>Cartera entre 61 y 90 días.</li>
          <li>Cartera superior a 90 días.</li>
        </ul>

        <h2>3. DSO (Days Sales Outstanding o días promedio de cobro)</h2>

        <p>
          El DSO es uno de los indicadores financieros más utilizados para medir
          la eficiencia en la recuperación de cartera. Permite conocer cuántos
          días tarda, en promedio, la empresa en convertir sus ventas a crédito
          en dinero disponible.
        </p>

        <p>
          Un incremento constante del DSO suele indicar retrasos en los pagos o
          deficiencias en los procesos de seguimiento y recaudo.
        </p>

        <h2>4. Porcentaje de recuperación de cartera</h2>

        <p>
          Este KPI mide qué proporción del dinero gestionado fue efectivamente
          recuperado durante un periodo específico.
        </p>

        <p>
          Analizar este indicador por mes, trimestre o año permite evaluar si
          las estrategias implementadas realmente están generando resultados o
          si es necesario realizar ajustes.
        </p>

        <h2>5. Índice de morosidad</h2>

        <p>
          El índice de morosidad muestra qué porcentaje de la cartera presenta
          incumplimientos de pago respecto al total administrado.
        </p>

        <p>
          Este indicador ayuda a medir el riesgo financiero de la empresa y a
          identificar cuándo la cartera comienza a deteriorarse.
        </p>

        <h2>6. Antigüedad de la cartera</h2>

        <p>
          La antigüedad permite clasificar las cuentas por cobrar según el
          tiempo transcurrido desde el vencimiento de la obligación.
        </p>

        <p>
          Esta segmentación facilita priorizar la gestión de cobranza y asignar
          recursos a aquellos clientes cuya probabilidad de recuperación puede
          disminuir con el paso del tiempo.
        </p>

        <ul>
          <li>0 a 30 días.</li>
          <li>31 a 60 días.</li>
          <li>61 a 90 días.</li>
          <li>91 a 180 días.</li>
          <li>Más de 180 días.</li>
        </ul>

        <h2>7. Cumplimiento de acuerdos de pago</h2>

        <p>
          Registrar el porcentaje de acuerdos cumplidos frente al total de
          compromisos adquiridos permite conocer la efectividad de las
          negociaciones realizadas por el equipo de cartera.
        </p>

        <p>
          Cuando este indicador disminuye, puede ser necesario revisar las
          políticas de negociación o fortalecer el seguimiento posterior a la
          firma de los acuerdos.
        </p>

        <h2>8. Productividad del equipo de cobranza</h2>

        <p>
          Un dashboard moderno también debe medir el desempeño operativo del
          equipo encargado de recuperar la cartera.
        </p>

        <ul>
          <li>Gestiones realizadas por asesor.</li>
          <li>Llamadas efectuadas.</li>
          <li>Correos enviados.</li>
          <li>Compromisos de pago obtenidos.</li>
          <li>Dinero recuperado por gestor.</li>
          <li>Tiempo promedio de atención.</li>
          <li>Cumplimiento de metas individuales.</li>
        </ul>

        <p>
          Estos indicadores permiten identificar oportunidades de mejora,
          reconocer buenas prácticas y distribuir mejor las cargas de trabajo
          dentro del área de cartera.
        </p>

        {/* COMO CREAR UN DASHBOARD DE CARTERA  */}
        <h2>
          Cómo crear un dashboard de cartera paso a paso para mejorar la toma de
          decisiones
        </h2>

        <p>
          Diseñar un dashboard efectivo no consiste únicamente en agregar
          gráficos llamativos. El verdadero objetivo es construir una
          herramienta que permita identificar riesgos, priorizar clientes, medir
          el desempeño de la cobranza y apoyar las decisiones estratégicas de la
          empresa mediante información clara y actualizada.
        </p>

        <p>
          Antes de comenzar es recomendable definir qué preguntas debe responder
          el tablero. Por ejemplo, cuánto dinero está pendiente por recaudar,
          cuáles clientes concentran la mayor mora, qué tan efectivo está siendo
          el equipo de cobranza y cómo evoluciona la recuperación de cartera mes
          a mes.
        </p>

        <h2>Paso 1. Definir los objetivos del dashboard</h2>

        <p>
          Cada empresa tiene necesidades diferentes. Mientras algunas buscan
          disminuir la morosidad, otras desean acelerar el recaudo, mejorar el
          flujo de caja o controlar el desempeño del equipo de cartera. Por
          ello, el primer paso consiste en establecer objetivos concretos antes
          de seleccionar los indicadores.
        </p>

        <ul>
          <li>Reducir la cartera vencida.</li>
          <li>Incrementar el porcentaje de recuperación.</li>
          <li>Disminuir el DSO.</li>
          <li>Mejorar el cumplimiento de acuerdos de pago.</li>
          <li>Controlar el desempeño de los gestores.</li>
          <li>Detectar clientes con alto riesgo financiero.</li>
        </ul>

        <h2>Paso 2. Integrar todas las fuentes de información</h2>

        <p>
          Un dashboard será mucho más útil cuando centraliza información que
          normalmente se encuentra distribuida en diferentes sistemas. Integrar
          estos datos evita reprocesos y permite obtener indicadores
          prácticamente en tiempo real.
        </p>

        <ul>
          <li>Sistema ERP.</li>
          <li>Software de facturación.</li>
          <li>CRM comercial.</li>
          <li>Software especializado de cartera.</li>
          <li>Plataformas contables.</li>
          <li>Bases de datos internas.</li>
        </ul>

        <p>
          Cuando estas plataformas se encuentran conectadas automáticamente, el
          dashboard se actualiza sin necesidad de cargar archivos manualmente,
          reduciendo errores y mejorando la confiabilidad de la información.
        </p>

        <h2>Paso 3. Diseñar visualizaciones fáciles de interpretar</h2>

        <p>
          Un buen tablero debe permitir comprender la situación de la cartera en
          pocos segundos. Por ello, se recomienda utilizar gráficos sencillos,
          indicadores destacados y una estructura organizada que facilite la
          navegación.
        </p>

        <ul>
          <li>Tarjetas KPI para indicadores principales.</li>
          <li>Gráficos de barras para antigüedad de cartera.</li>
          <li>Líneas de tendencia para analizar la recuperación.</li>
          <li>Gráficos circulares para distribución por segmento.</li>
          <li>Semáforos de riesgo para clientes críticos.</li>
          <li>Tablas dinámicas con filtros interactivos.</li>
        </ul>

        <h2>Paso 4. Automatizar la actualización de los indicadores</h2>

        <p>
          Uno de los errores más frecuentes consiste en construir dashboards que
          deben actualizarse manualmente cada semana o cada mes. Esto consume
          tiempo y aumenta la posibilidad de errores.
        </p>

        <p>
          Siempre que sea posible, el dashboard debe conectarse directamente con
          las fuentes de datos para mostrar información actualizada de manera
          automática. Esto permite reaccionar rápidamente frente a cambios en la
          cartera y tomar decisiones oportunas.
        </p>

        {/* HERRAMIENTAS UTILIZADAS PARA CREAR DASHBOARDS DE CARTERA */}
        <h2>Herramientas más utilizadas para crear dashboards de cartera</h2>

        <p>
          Actualmente existen diferentes soluciones para construir dashboards
          financieros. La elección dependerá del tamaño de la empresa, el
          volumen de información administrada y el nivel de automatización
          requerido.
        </p>

        <ul>
          <li>Microsoft Excel con tablas dinámicas y Power Query.</li>
          <li>Microsoft Power BI.</li>
          <li>Looker Studio.</li>
          <li>Tableau.</li>
          <li>Qlik Sense.</li>
          <li>Dashboards incluidos en ERP empresariales.</li>
          <li>Software especializado para recuperación de cartera.</li>
        </ul>

        {/* POWER BI ES UNA BUENA OPCION PARA CONTROLAR LA CARTERA */}
        <h2>¿Power BI es una buena opción para controlar la cartera?</h2>

        <p>
          Power BI se ha convertido en una de las herramientas más utilizadas
          para construir dashboards de cuentas por cobrar debido a su capacidad
          para integrar múltiples fuentes de información, generar reportes
          interactivos y actualizar automáticamente los indicadores.
        </p>

        <p>
          Además de ofrecer visualizaciones dinámicas, permite crear tableros
          específicos para la gerencia financiera, el área de crédito y cartera,
          la dirección comercial o incluso para cada gestor de cobranza,
          facilitando el seguimiento individual del desempeño.
        </p>

        {/* ERRORES QUE HACEN QUE UN DASHBOARD DEJE DE SER UTIL */}
        <h2>Errores que hacen que un dashboard deje de ser útil</h2>

        <p>
          Un tablero mal diseñado puede generar más confusión que información.
          Por ello es importante evitar errores comunes que afectan la calidad
          del análisis y dificultan la toma de decisiones.
        </p>

        <ul>
          <li>Mostrar demasiados indicadores al mismo tiempo.</li>
          <li>No actualizar la información periódicamente.</li>
          <li>Construir gráficos difíciles de interpretar.</li>
          <li>No diferenciar cartera vigente de cartera vencida.</li>
          <li>No incluir indicadores históricos.</li>
          <li>No establecer metas para cada KPI.</li>
          <li>Presentar datos sin contexto financiero.</li>
          <li>No segmentar la información por cliente, ciudad o sector.</li>
        </ul>

        <p>
          Un dashboard efectivo debe responder rápidamente las preguntas más
          importantes del negocio y facilitar la toma de decisiones. Si para
          entender la información es necesario revisar múltiples reportes
          adicionales, probablemente el tablero necesita simplificarse y
          reorganizarse.
        </p>

        {/* EJEMPLO DE UN DASHBOARD DE CARTERA PARA EMPRESAS QUE VENDEN A CREDITO */}
        <h2>
          Ejemplo de un dashboard de cartera para empresas que venden a crédito
        </h2>

        <p>
          Aunque cada organización diseña sus tableros de acuerdo con sus
          necesidades, un dashboard de cartera suele organizar la información en
          diferentes bloques que permiten comprender rápidamente el estado de
          las cuentas por cobrar y priorizar las acciones de recuperación.
        </p>

        <p>
          Una estructura sencilla pero efectiva puede dividir el tablero en
          indicadores generales, análisis de cartera vencida, comportamiento de
          clientes, desempeño del equipo de cobranza y proyecciones financieras.
          De esta manera, la dirección puede identificar en pocos minutos dónde
          se encuentran los principales riesgos.
        </p>

        <ul>
          <li>Valor total de las cuentas por cobrar.</li>

          <li>Cartera corriente frente a cartera vencida.</li>

          <li>Antigüedad de la cartera por rangos de mora.</li>

          <li>Clientes con mayor saldo pendiente.</li>

          <li>Top de clientes con mayor crecimiento de la mora.</li>

          <li>Porcentaje de recuperación mensual.</li>

          <li>DSO actualizado.</li>

          <li>Cumplimiento de acuerdos de pago.</li>

          <li>Gestiones realizadas por asesor.</li>

          <li>Comparativo frente al mes anterior.</li>
        </ul>

        {/* CADA CUANTO DEBERIA ACTUALIZARSE UN DASHBOARD DE CARTERA */}
        <h2>¿Cada cuánto debería actualizarse un dashboard de cartera?</h2>

        <p>
          La frecuencia de actualización depende del volumen de operaciones de
          cada empresa. Organizaciones que administran miles de facturas suelen
          trabajar con información prácticamente en tiempo real, mientras que
          compañías con menor volumen pueden actualizar sus indicadores una vez
          al día o incluso semanalmente.
        </p>

        <p>
          Lo importante es que la información siempre refleje la situación
          actual de la cartera para que las decisiones se basen en datos
          confiables y no en reportes desactualizados.
        </p>

        <h2>
          Cómo utilizar el dashboard para priorizar las gestiones de cobranza
        </h2>

        <p>
          Un error frecuente consiste en utilizar el dashboard únicamente como
          un informe para consulta. Su verdadero valor aparece cuando la
          información sirve para definir prioridades y orientar el trabajo del
          equipo de cobranza.
        </p>

        <p>
          Por ejemplo, si el tablero muestra que un grupo reducido de clientes
          concentra una parte importante de la cartera vencida, la empresa puede
          asignar recursos específicos para gestionar esos casos antes que
          cuentas de menor impacto económico.
        </p>

        <ul>
          <li>Priorizar clientes de alto valor.</li>

          <li>Identificar sectores con mayor morosidad.</li>

          <li>Asignar gestores especializados.</li>

          <li>Programar seguimientos automáticos.</li>

          <li>Fortalecer negociaciones antes del vencimiento.</li>

          <li>Detectar clientes reincidentes.</li>

          <li>Medir el impacto de cada estrategia de recuperación.</li>
        </ul>

        {/* BUENAS PRACTICAS PARA OBTENER MEJORES RESULTADOS CON UN DASHBOARD DE CARTERA */}
        <h2>
          Buenas prácticas para obtener mejores resultados con un dashboard de
          cartera
        </h2>

        <p>
          Un dashboard por sí solo no mejora la recuperación de cartera. Los
          resultados aparecen cuando la organización incorpora la información
          dentro de sus procesos diarios y utiliza los indicadores para tomar
          decisiones oportunas.
        </p>

        <ul>
          <li>Actualizar permanentemente las bases de datos.</li>

          <li>Definir responsables para cada indicador.</li>

          <li>Revisar los KPIs semanalmente.</li>

          <li>Comparar resultados frente a periodos anteriores.</li>

          <li>Automatizar la generación de reportes.</li>

          <li>Establecer metas claras para el equipo de cobranza.</li>

          <li>Integrar el dashboard con el CRM y el ERP empresarial.</li>

          <li>Analizar tendencias y no únicamente cifras aisladas.</li>

          <li>
            Realizar reuniones periódicas utilizando el tablero como base para
            la toma de decisiones.
          </li>
        </ul>

        {/* VALE LA PENA IMPLEMENTAR UN DASHBOARD DE CARTERA */}
        <h2>¿Vale la pena implementar un dashboard de cartera?</h2>

        <p>
          Para empresas que administran clientes a crédito, la respuesta suele
          ser sí. Un dashboard permite transformar grandes cantidades de datos
          en información útil para reducir la morosidad, mejorar la gestión de
          cobranza y fortalecer el flujo de caja.
        </p>

        <p>
          Además de facilitar el seguimiento diario, estos tableros ayudan a
          identificar oportunidades de mejora, medir la productividad del equipo
          y anticipar riesgos financieros antes de que afecten la liquidez de la
          organización.
        </p>

        {}
        <h2>
          Conclusión: un dashboard de cartera convierte los datos en decisiones
          estratégicas
        </h2>

        <p>
          Un dashboard de cartera no es únicamente un conjunto de gráficos. Es
          una herramienta estratégica que permite controlar las cuentas por
          cobrar, evaluar la efectividad de las acciones de cobranza y apoyar la
          toma de decisiones mediante indicadores confiables y actualizados.
        </p>

        <p>
          Cuando el tablero integra KPIs financieros, indicadores de
          recuperación, análisis de antigüedad de cartera y métricas de
          productividad, la empresa puede actuar con mayor rapidez frente a los
          riesgos de mora y optimizar la administración del capital de trabajo.
          Complementado con un CRM, un ERP o un software especializado en
          gestión de cartera, el dashboard se convierte en uno de los recursos
          más valiosos para mejorar la recuperación de cartera y fortalecer la
          salud financiera de cualquier organización.
        </p>

        {/* PREGUNTAS FRECUENTES SOBRE DASHBOARDS DE CARTERA Y GESTION DE COBRANZA */}
        <h2>
          Preguntas frecuentes sobre dashboards de cartera y gestión de cobranza
        </h2>

        <p>
          Estas son algunas de las preguntas más comunes que realizan los
          responsables de crédito y cartera, directores financieros y gerentes
          administrativos cuando desean implementar un dashboard para mejorar la
          recuperación de cuentas por cobrar.
        </p>

        <h3>
          ¿Cuál es la diferencia entre un dashboard de cartera y un reporte de
          cartera?
        </h3>

        <p>
          Un reporte presenta información estática correspondiente a un periodo
          determinado, mientras que un dashboard reúne indicadores dinámicos que
          permiten monitorear la cartera en tiempo real, comparar resultados,
          aplicar filtros y facilitar la toma de decisiones.
        </p>

        <h3>
          ¿Qué áreas de una empresa deberían utilizar el dashboard de cartera?
        </h3>

        <p>
          No solamente el departamento de cartera. También resulta útil para la
          gerencia financiera, el área comercial, contabilidad, tesorería y la
          dirección general, ya que todos participan en decisiones relacionadas
          con el flujo de caja y el riesgo crediticio.
        </p>

        <h3>¿Es posible automatizar completamente un dashboard de cobranza?</h3>

        <p>
          Sí. Cuando el dashboard se conecta con el ERP, el CRM, el software de
          facturación o la plataforma de gestión de cartera, los indicadores
          pueden actualizarse automáticamente, reduciendo trabajo manual y
          mejorando la calidad de la información.
        </p>

        <h3>
          ¿Qué información nunca debería faltar en un dashboard de cartera?
        </h3>

        <ul>
          <li>Saldo total por cobrar.</li>
          <li>Cartera corriente.</li>
          <li>Cartera vencida.</li>
          <li>Antigüedad de cartera.</li>
          <li>DSO.</li>
          <li>Porcentaje de recuperación.</li>
          <li>Clientes con mayor riesgo.</li>
          <li>Acuerdos de pago pendientes.</li>
          <li>Indicadores por gestor.</li>
          <li>Evolución mensual del recaudo.</li>
        </ul>

        <h3>¿Cómo ayuda un dashboard a reducir la morosidad?</h3>

        <p>
          Al ofrecer una visión clara de los clientes con mayor riesgo,
          identificar tendencias de incumplimiento y permitir actuar antes de
          que las obligaciones envejezcan, el dashboard facilita una gestión de
          cobranza más preventiva y estratégica.
        </p>

        <h3>
          ¿Qué empresas obtienen mayor beneficio de un dashboard de cartera?
        </h3>

        <p>
          Empresas de servicios, distribuidores, industrias, IPS, clínicas,
          constructoras, comercializadoras, cooperativas, entidades financieras
          y cualquier organización que otorgue crédito a sus clientes pueden
          mejorar significativamente el control de sus cuentas por cobrar
          mediante un dashboard especializado.
        </p>
      </motion.article>
    </main>
  );
}
