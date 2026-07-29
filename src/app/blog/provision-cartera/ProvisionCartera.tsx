"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ProvisionCartera() {
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
          Finanzas e Indicadores
        </motion.span>

        {/* HERO */}
        <h1>
          Provisión de cartera en Colombia: qué es, cómo calcularla y por qué es
          indispensable para proteger la estabilidad financiera de una empresa
        </h1>

        <p className={styles.intro}>
          La provisión de cartera es uno de los indicadores contables más
          importantes para cualquier empresa que venda a crédito. Permite
          estimar el riesgo de no recuperar total o parcialmente las cuentas por
          cobrar y reflejar de manera más realista la situación financiera del
          negocio. Una provisión correctamente calculada ayuda a anticipar
          pérdidas, fortalecer la planeación financiera, cumplir con las
          políticas contables y tomar mejores decisiones sobre el otorgamiento
          de crédito a clientes.
        </p>

        <p>
          En Colombia, muchas organizaciones concentran sus esfuerzos únicamente
          en aumentar las ventas, pero descuidan la calidad de su cartera.
          Cuando esto ocurre, las cuentas por cobrar comienzan a deteriorarse y
          el flujo de caja se ve afectado. Precisamente por esta razón, la
          provisión de cartera se convierte en una herramienta indispensable
          para medir el riesgo de incobrabilidad y evitar que los estados
          financieros presenten activos sobrevalorados.
        </p>

        <p>
          Además de cumplir una función contable, la provisión de cartera
          también proporciona información valiosa para la gestión financiera.
          Permite conocer qué clientes representan un mayor riesgo, cuáles
          obligaciones requieren un seguimiento prioritario y qué políticas de
          crédito deben ajustarse para disminuir la cartera vencida en el
          futuro.
        </p>

        {/* QUE ES LA PROVISION DE CARTERA */}
        <h2>
          ¿Qué es la provisión de cartera y por qué todas las empresas deberían
          calcularla?
        </h2>

        <p>
          La provisión de cartera es una estimación contable que reconoce la
          posibilidad de que una parte de las cuentas por cobrar no pueda
          recuperarse en el futuro. En otras palabras, representa una pérdida
          esperada derivada del riesgo de incumplimiento de los clientes.
        </p>

        <p>
          Su finalidad no consiste en afirmar que una deuda definitivamente no
          será pagada. Lo que busca es reflejar de manera prudente que existe
          una probabilidad razonable de pérdida, permitiendo que los estados
          financieros presenten información mucho más cercana a la realidad
          económica de la empresa.
        </p>

        <p>
          Cuando una organización mantiene una cartera importante de clientes a
          crédito, siempre existirá un porcentaje de obligaciones que
          presentarán retrasos, incumplimientos, renegociaciones o incluso
          procesos judiciales. Ignorar ese riesgo puede generar decisiones
          financieras equivocadas, sobreestimar el valor de los activos y
          afectar la planificación del flujo de caja.
        </p>

        <p>
          Por esta razón, empresas comerciales, industriales, de servicios, IPS,
          EPS, constructoras, instituciones educativas, cooperativas y entidades
          financieras suelen revisar periódicamente la calidad de sus cuentas
          por cobrar para determinar si es necesario aumentar, disminuir o
          mantener la provisión de cartera registrada en la contabilidad.
        </p>

        {/* DIFERENCIA ENTRE PROVISION DE CARTERA, DETERIORO DE CARTERA Y CASTIGO DE CARTERA */}
        <h2>
          Diferencia entre provisión de cartera, deterioro de cartera y castigo
          de cartera
        </h2>

        <p>
          Aunque estos conceptos suelen utilizarse como si fueran sinónimos, en
          realidad representan momentos diferentes dentro del ciclo de
          recuperación de una cuenta por cobrar. Comprender sus diferencias
          permite interpretar mejor los estados financieros y diseñar
          estrategias de recuperación mucho más efectivas.
        </p>

        <ul>
          <li>
            <strong>Provisión de cartera:</strong> corresponde a una estimación
            del riesgo de pérdida antes de que la deuda sea considerada
            definitivamente incobrable.
          </li>

          <li>
            <strong>Deterioro de cartera:</strong> refleja que existen
            evidencias de que el valor recuperable de la cuenta por cobrar ha
            disminuido debido al incremento del riesgo de incumplimiento.
          </li>

          <li>
            <strong>Castigo de cartera:</strong> ocurre cuando la empresa
            concluye que la recuperación resulta prácticamente imposible y
            elimina contablemente la obligación de sus cuentas por cobrar, sin
            perjuicio de continuar las gestiones legales que puedan
            corresponder.
          </li>
        </ul>

        <p>
          Diferenciar correctamente estos tres conceptos ayuda a establecer
          políticas contables consistentes, mejorar la gestión del riesgo
          crediticio y evitar errores frecuentes al interpretar los indicadores
          financieros de la empresa.
        </p>

        {/* PORQUE LA PROVISION DE CARTERA ES FUNDAMENTAL PARA LA ESTABILIDAD FINANCIERA DE UNA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la provisión de cartera es fundamental para la estabilidad
          financiera de una empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La provisión de cartera no es simplemente un requisito contable. Se
          trata de una herramienta estratégica que permite medir el riesgo
          asociado a las cuentas por cobrar y preparar financieramente a la
          empresa frente a posibles pérdidas derivadas del incumplimiento de los
          clientes. Cuando una organización conoce con mayor precisión qué parte
          de su cartera presenta riesgo de recuperación, puede tomar decisiones
          mucho más acertadas sobre crédito, liquidez e inversiones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas creen que vender más significa necesariamente ganar
          más dinero. Sin embargo, cuando una parte importante de esas ventas
          permanece sin cobrar durante meses, el flujo de caja comienza a
          deteriorarse. En esos escenarios, la provisión de cartera permite
          identificar oportunamente el impacto económico que podrían generar
          esas cuentas pendientes y evitar que los estados financieros presenten
          una realidad diferente a la situación del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, disponer de una política clara de provisiones facilita la toma
          de decisiones sobre financiación, otorgamiento de nuevos créditos,
          recuperación de cartera, negociación con clientes y planificación
          presupuestal. En otras palabras, convierte la información contable en
          una herramienta para la gestión empresarial.
        </motion.p>

        {/* PRINCIPALES BENEFICIOS DE CALCULAR CORRECTAMENTE LA PROVISION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales beneficios de calcular correctamente la provisión de
          cartera
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Presenta estados financieros mucho más confiables y cercanos a la
            realidad económica de la empresa.
          </li>

          <li>
            Permite identificar clientes con mayor probabilidad de
            incumplimiento antes de que la deuda se convierta en una pérdida
            definitiva.
          </li>

          <li>
            Reduce el riesgo de sobrevalorar el activo correspondiente a las
            cuentas por cobrar.
          </li>

          <li>
            Facilita la toma de decisiones sobre políticas de crédito y límites
            de financiación para nuevos clientes.
          </li>

          <li>
            Mejora la planeación del flujo de caja al estimar posibles pérdidas
            futuras.
          </li>

          <li>
            Ayuda a establecer prioridades dentro de la gestión de cobranza y
            recuperación de cartera.
          </li>

          <li>
            Permite evaluar la evolución del riesgo crediticio mediante
            indicadores financieros comparables entre diferentes periodos.
          </li>

          <li>
            Favorece el cumplimiento de las políticas contables y de control
            interno implementadas por la organización.
          </li>
        </motion.ul>

        {/* ¿QUE SUCEDE CUANDO UNA EMPRESA NO REALIZA PROVISIONES DE CARTERA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué sucede cuando una empresa no realiza provisiones de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No provisionar las cuentas por cobrar puede generar una falsa
          percepción sobre la situación financiera del negocio. Los estados
          financieros mostrarán activos superiores a los realmente recuperables,
          lo que puede afectar decisiones de inversión, distribución de
          utilidades, acceso a financiación e incluso la valoración de la
          empresa frente a socios o entidades financieras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También aumenta la probabilidad de reaccionar demasiado tarde frente a
          clientes morosos. Cuando la empresa identifica el problema únicamente
          después de que la deuda lleva muchos meses vencida, las probabilidades
          de recuperación suelen disminuir considerablemente y el costo del
          proceso de cobranza puede ser mucho mayor.
        </motion.p>

        {/* CUANDO DEBE UNA EMPRESA REALIZAR LA PROVISION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo debe una empresa realizar la provisión de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las cuentas por cobrar deben provisionarse inmediatamente
          después de su emisión. La provisión surge cuando existen señales
          objetivas de que el riesgo de recuperación ha aumentado o cuando las
          políticas internas de la empresa establecen determinados criterios de
          antigüedad o probabilidad de incumplimiento. El objetivo consiste en
          reconocer oportunamente las pérdidas esperadas y evitar que los
          estados financieros reflejen activos cuyo valor real de recuperación
          sea inferior.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En la práctica, muchas organizaciones revisan periódicamente toda su
          cartera de clientes para identificar obligaciones que presentan
          retrasos importantes, incumplimientos reiterados o cambios en la
          capacidad económica del deudor. Esta evaluación permite ajustar la
          provisión de cartera antes de que el riesgo se convierta en una
          pérdida definitiva.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La periodicidad del análisis depende de las políticas de cada empresa.
          Algunas organizaciones realizan revisiones mensuales, mientras que
          otras efectúan provisiones trimestrales o al cierre del ejercicio
          contable. Lo importante es que el procedimiento sea consistente y
          permita detectar oportunamente el deterioro de las cuentas por cobrar.
        </motion.p>

        {/* PRINCIPALES SEÑALES DE QUE UNA CUENTA POR COBRAR REQUIERE PROVISION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales señales de que una cuenta por cobrar requiere provisión
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Retrasos reiterados en los pagos acordados.</li>

          <li>Incremento constante de los días de mora.</li>

          <li>Incumplimiento de acuerdos de pago previamente negociados.</li>

          <li>Disminución de la capacidad financiera del cliente.</li>

          <li>
            Procesos de reorganización, insolvencia o liquidación del deudor.
          </li>

          <li>Falta de respuesta a los requerimientos de cobro.</li>

          <li>Información financiera desactualizada o inconsistente.</li>

          <li>
            Antecedentes recientes de incumplimiento con otros proveedores.
          </li>

          <li>
            Existencia de litigios comerciales relacionados con la obligación.
          </li>

          <li>
            Dificultades económicas generales del sector donde opera el cliente.
          </li>
        </motion.ul>

        {/* FACTORES QUE AUMENTAN EL RIESGO DE INCUMPLIMIENTO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que aumentan el riesgo de incobrabilidad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La antigüedad de la cartera es uno de los principales indicadores
          utilizados para estimar el riesgo de recuperación. Sin embargo, no es
          el único factor que debe analizarse. Existen variables comerciales,
          financieras y económicas que también influyen directamente en la
          probabilidad de incumplimiento.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Concentración excesiva de ventas en pocos clientes.</li>

          <li>Falta de estudios de crédito antes de vender.</li>

          <li>Ausencia de políticas claras de cobranza.</li>

          <li>Seguimiento insuficiente a las cuentas vencidas.</li>

          <li>Documentación incompleta de la obligación.</li>

          <li>
            Dependencia económica del cliente respecto a un único proyecto.
          </li>

          <li>Cambios negativos en el mercado donde opera el deudor.</li>

          <li>
            Incremento generalizado de la cartera vencida dentro de la empresa.
          </li>
        </motion.ul>

        {/* ES OBLIGATORIO PROVISIONAR TODOA LA CARTERA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Es obligatorio provisionar toda la cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No necesariamente. El propósito de la provisión consiste en reconocer
          el riesgo asociado únicamente a aquellas cuentas cuya recuperación
          presenta un grado razonable de incertidumbre. Las obligaciones que
          mantienen un comportamiento normal de pago y cuyos clientes conservan
          una adecuada capacidad financiera normalmente no requieren una
          provisión significativa, aunque sí deben ser objeto de seguimiento
          permanente dentro del sistema de gestión de cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas suelen clasificar sus cuentas por cobrar
          según niveles de riesgo, antigüedad, historial de pagos y
          comportamiento del cliente. Esta segmentación permite asignar
          porcentajes de provisión mucho más precisos y optimizar la
          administración del riesgo financiero.
        </motion.p>

        {/* METODOS PARA CALCULAR LA PROVISION DE CARTERA: ¿CUÁL UTILIZA TU EMPRESA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Métodos para calcular la provisión de cartera: ¿cuál utiliza tu
          empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un único método para calcular la provisión de cartera. La
          metodología depende del tamaño de la empresa, del volumen de cuentas
          por cobrar, del comportamiento histórico de los clientes, del sector
          económico y de las políticas contables adoptadas por la organización.
          Lo importante es que el procedimiento permita estimar de manera
          razonable las pérdidas esperadas derivadas del incumplimiento de pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En organizaciones con pocos clientes puede realizarse un análisis
          individual de cada obligación. Sin embargo, cuando existen cientos o
          miles de facturas, normalmente se utilizan metodologías basadas en
          porcentajes, antigüedad de la cartera o modelos estadísticos de
          pérdida esperada.
        </motion.p>

        {/* PROVISION MEDIANTE PORCENTAJE FIJO SOBRE LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Provisión mediante porcentaje fijo sobre la cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es uno de los métodos más utilizados por pequeñas y medianas empresas
          debido a su facilidad de aplicación. Consiste en establecer un
          porcentaje sobre el valor de la cartera vencida para estimar el riesgo
          de incobrabilidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por ejemplo, una organización puede definir que toda la cartera con
          más de 90 días de mora tendrá una provisión del 10 %, mientras que
          obligaciones con mayor antigüedad pueden tener porcentajes superiores.
        </motion.p>

        {/* PROVISION POR RANGOS DE ANTIGUEDAD DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Provisión por rangos de antigüedad de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este método clasifica las cuentas por cobrar según los días de mora y
          asigna diferentes porcentajes de provisión dependiendo del nivel de
          riesgo de cada grupo. Entre más antigua sea la obligación, mayor suele
          ser la probabilidad de incumplimiento y, por tanto, mayor será la
          provisión requerida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La clasificación por antigüedad también facilita identificar clientes
          que requieren acciones inmediatas de cobranza preventiva, negociación
          o cobro jurídico antes de que la recuperación resulte más compleja.
        </motion.p>

        {/* MODELO DE PERDIDA ESPERADA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Modelo de pérdida esperada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas con mayores volúmenes de información suelen utilizar
          modelos de pérdida esperada que consideran variables históricas,
          comportamiento de pago, indicadores financieros, condiciones
          económicas y probabilidad de incumplimiento para estimar con mayor
          precisión el valor de la provisión.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este enfoque permite anticipar riesgos antes de que la cartera entre
          en mora prolongada y facilita una administración mucho más eficiente
          del crédito otorgado a clientes.
        </motion.p>

        {/* EVALUACION INDIVIDUAL DEL CLIENTE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Evaluación individual del cliente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando existen clientes con montos elevados o situaciones
          particulares, la empresa puede realizar un análisis individual
          teniendo en cuenta su capacidad financiera, historial de pagos,
          garantías existentes, comportamiento comercial y perspectivas
          económicas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este método suele utilizarse para cuentas estratégicas cuyo valor
          justifica un estudio más detallado antes de definir el porcentaje de
          provisión.
        </motion.p>

        {/* QUE METODO DE PROVISION OFRECE MEJORES RESULTADOS? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué método de provisión ofrece mejores resultados?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un método universalmente superior. La elección depende del
          tamaño de la empresa, del número de clientes, del nivel de riesgo
          asumido y de la calidad de la información disponible. Muchas
          organizaciones incluso combinan varios métodos para obtener
          estimaciones más precisas y reducir el impacto de futuras pérdidas por
          cartera incobrable.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Empresas pequeñas suelen utilizar porcentajes fijos.</li>

          <li>Empresas medianas prefieren provisiones por antigüedad.</li>

          <li>Grandes compañías implementan modelos de pérdida esperada.</li>

          <li>
            Clientes estratégicos normalmente requieren evaluación individual.
          </li>

          <li>
            La combinación de metodologías suele producir resultados más
            confiables.
          </li>
        </motion.ul>

        {/* EJEMPLO PRÁCTICO: COMO CALCULAR LA PROVISION DE CARTERA PASO A PASO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico: cómo calcular la provisión de cartera paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Imaginemos que una empresa comercial tiene una cartera vencida por
          valor de
          <strong> $100.000.000</strong>. Después de analizar el comportamiento
          de sus clientes, determina que una parte importante presenta un riesgo
          de incumplimiento y decide calcular la provisión para reflejar
          adecuadamente esa posible pérdida en sus estados financieros.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si la empresa adopta una política de provisión del{" "}
          <strong>8 %</strong>, únicamente deberá multiplicar el valor de la
          cartera por dicho porcentaje.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <strong>Provisión = $100.000.000 × 8 % = $8.000.000</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En este escenario, la organización registrará una provisión contable
          de ocho millones de pesos, lo que significa que reconoce
          anticipadamente la posibilidad de no recuperar parte de esa cartera.
        </motion.p>

        {/* COMPARACIÓN DE DIFERENTES PORCENTAJES DE PROVISION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Comparación de diferentes porcentajes de provisión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El valor de la provisión cambia dependiendo del riesgo de recuperación
          estimado por la empresa. Cuanto mayor sea la probabilidad de
          incumplimiento, mayor deberá ser la provisión registrada.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Cartera de $100.000.000 con provisión del <strong>5 %</strong> =
            <strong> $5.000.000</strong>.
          </li>

          <li>
            Cartera de $100.000.000 con provisión del <strong>8 %</strong> =
            <strong> $8.000.000</strong>.
          </li>

          <li>
            Cartera de $100.000.000 con provisión del <strong>10 %</strong> =
            <strong> $10.000.000</strong>.
          </li>

          <li>
            Cartera de $100.000.000 con provisión del <strong>20 %</strong> =
            <strong> $20.000.000</strong>.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos porcentajes son únicamente ejemplos. Cada empresa debe definir
          sus políticas de provisión teniendo en cuenta la experiencia histórica
          de pago, el comportamiento de sus clientes, el sector económico y las
          normas contables aplicables.
        </motion.p>

        {/* EJEMPLO DE PROVISION UTILIZANDO LA ANTIGUEDAD DE LA CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo de provisión utilizando la antigüedad de la cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones prefieren calcular la provisión clasificando las
          cuentas por cobrar según los días de mora, ya que este método permite
          estimar con mayor precisión el riesgo de pérdida.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>De 0 a 30 días de mora: riesgo bajo y provisión mínima.</li>

          <li>
            De 31 a 60 días: incremento moderado del porcentaje de provisión.
          </li>

          <li>De 61 a 90 días: riesgo medio de incumplimiento.</li>

          <li>
            Más de 90 días: alta probabilidad de incobrabilidad y mayor
            provisión.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este sistema facilita la identificación de clientes que requieren una
          gestión de cobranza más intensiva y permite priorizar las acciones de
          recuperación antes de que las cuentas se conviertan en pérdidas
          definitivas.
        </motion.p>

        {/* PROVISION POR ANTIGUEDAD DE CARTERA: COMO CLASIFICAR LAS CUENTAS POR COBRAR SEGÚN LOS Días DE MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Provisión por antigüedad de cartera: cómo clasificar las cuentas por
          cobrar según los días de mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los métodos más utilizados para calcular la provisión consiste
          en clasificar las cuentas por cobrar de acuerdo con su antigüedad. A
          medida que aumentan los días de mora, también incrementa la
          probabilidad de incumplimiento y, en consecuencia, el porcentaje de
          provisión que la empresa debe registrar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este sistema permite identificar rápidamente cuáles clientes
          representan un mayor riesgo financiero y facilita priorizar las
          acciones de seguimiento, negociación, cobranza preventiva o cobro
          jurídico antes de que la deuda sea más difícil de recuperar.
        </motion.p>

        {/* EJEMPLO DE CLASIFICACIÓN POR ANTIGUEDAD DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo de clasificación por antigüedad de cartera
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>0 a 30 días:</strong> cartera vigente o con riesgo muy bajo.
            En muchos casos no requiere provisión o esta es mínima.
          </li>

          <li>
            <strong>31 a 60 días:</strong> comienza a existir un riesgo moderado
            de incumplimiento, por lo que muchas empresas incrementan el
            porcentaje de provisión.
          </li>

          <li>
            <strong>61 a 90 días:</strong> aumenta considerablemente la
            probabilidad de recuperación tardía y suele requerirse una provisión
            superior.
          </li>

          <li>
            <strong>Más de 90 días:</strong> representa una cartera de alto
            riesgo que normalmente exige provisiones significativamente mayores
            y estrategias de recuperación más intensivas.
          </li>

          <li>
            <strong>Más de 180 días:</strong> dependiendo del historial del
            cliente, muchas organizaciones consideran estas obligaciones como
            cuentas con alta probabilidad de pérdida y fortalecen la provisión
            correspondiente.
          </li>
        </motion.ul>

        {/* BENEFICIOS DE UTILIZAR LA ANTIGUEDAD DE CARTERA PARA CALCULAR PROVISIONES */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de utilizar la antigüedad de cartera para calcular
          provisiones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Clasificar la cartera por días de mora no solo facilita el cálculo
          contable, sino que también mejora la gestión del riesgo y permite
          tomar decisiones más oportunas sobre las acciones de cobranza que
          deben adelantarse con cada cliente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Permite identificar rápidamente la cartera con mayor riesgo.</li>

          <li>Facilita priorizar clientes para gestión de cobranza.</li>

          <li>Mejora la planeación del flujo de caja.</li>

          <li>Reduce el riesgo de pérdidas financieras inesperadas.</li>

          <li>Apoya la toma de decisiones comerciales y crediticias.</li>

          <li>Contribuye a presentar estados financieros más realistas.</li>

          <li>
            Ayuda a detectar tendencias de deterioro antes de que la cartera sea
            incobrable.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque cada organización puede establecer sus propios rangos y
          porcentajes, realizar un seguimiento permanente de la antigüedad de
          las cuentas por cobrar es una de las mejores prácticas para disminuir
          el impacto de la cartera vencida y fortalecer la estabilidad
          financiera de la empresa.
        </motion.p>

        {/* RELACION ENTRE LA PROVISION DE CARTERA Y EL RIESGO DE LAS CUENTAS POR COBRAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Relación entre la provisión de cartera y el riesgo de las cuentas por
          cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La provisión de cartera y el riesgo crediticio son dos conceptos que
          deben analizarse de manera conjunta. Mientras la provisión representa
          el valor que la empresa estima podría perder por incumplimientos, el
          riesgo de cartera permite medir la probabilidad de que esos
          incumplimientos realmente ocurran.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En otras palabras, cuanto mayor sea el riesgo asociado a un grupo de
          clientes, mayor será normalmente la provisión que deberá registrarse
          para reflejar una situación financiera más cercana a la realidad.
        </motion.p>

        {/* FACTORES QUE AUMENTAN EL RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que aumentan el riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las cuentas por cobrar presentan el mismo nivel de riesgo.
          Existen diversos factores que incrementan la posibilidad de
          incumplimiento y que deben analizarse periódicamente para definir
          políticas de provisión más precisas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Incremento constante de la cartera vencida.</li>

          <li>Clientes con historial de pagos tardíos.</li>

          <li>Empresas con dificultades financieras conocidas.</li>

          <li>Concentración excesiva del crédito en pocos clientes.</li>

          <li>Disminución en las compras habituales del cliente.</li>

          <li>Incumplimiento reiterado de acuerdos de pago.</li>

          <li>
            Ausencia de garantías suficientes para respaldar la obligación.
          </li>

          <li>Procesos de reorganización, insolvencia o liquidación.</li>
        </motion.ul>

        {/* COMO REDUCIR EL RIESGO Y DISMINUIR LA PROVISION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir el riesgo y disminuir la provisión de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mejor provisión es aquella que nunca necesita incrementarse porque
          la empresa administra correctamente el riesgo desde el momento en que
          concede el crédito. Una adecuada política comercial puede reducir
          significativamente las pérdidas futuras.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Evaluar la capacidad de pago antes de otorgar crédito.</li>

          <li>Definir límites de crédito para cada cliente.</li>

          <li>Solicitar documentos que respalden la obligación.</li>

          <li>Realizar seguimiento permanente al comportamiento de pago.</li>

          <li>Enviar recordatorios antes del vencimiento de las facturas.</li>

          <li>Implementar procesos de cobranza preventiva.</li>

          <li>
            Negociar oportunamente cuando aparezcan dificultades financieras.
          </li>

          <li>
            Escalar rápidamente los casos de alto riesgo hacia procesos de
            recuperación.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una empresa que monitorea continuamente el riesgo de sus clientes
          suele mantener niveles de provisión más controlados, mejora su flujo
          de caja y reduce considerablemente el impacto de la cartera vencida
          sobre su operación.
        </motion.p>
      </motion.article>
    </main>
  );
}
