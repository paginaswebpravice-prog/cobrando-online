"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function NegociacionDeudores() {
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
          Negociación de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cómo negociar con deudores en Colombia: 15 estrategias para recuperar
          cartera sin perder clientes
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Negociar con un cliente moroso no significa simplemente solicitar el
          pago de una factura pendiente. Se trata de un proceso estratégico que
          busca encontrar soluciones viables para ambas partes, incrementar la
          recuperación de cartera, proteger el flujo de caja de la empresa y
          conservar relaciones comerciales valiosas. Cuando una negociación se
          desarrolla de manera profesional, aumenta significativamente la
          probabilidad de recaudo sin necesidad de acudir a procesos judiciales,
          reduciendo costos administrativos y tiempos de espera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          En Colombia, miles de empresas enfrentan diariamente problemas
          relacionados con clientes que incumplen sus obligaciones de pago. Sin
          embargo, no todos los deudores tienen la misma capacidad económica ni
          las mismas razones para encontrarse en mora. Por ello, aplicar una
          estrategia única para todos suele generar resultados limitados. La
          negociación debe adaptarse al perfil del cliente, al monto adeudado,
          al tiempo de mora y al historial comercial de la relación.
        </motion.p>

        {/* QUE SIGNIFICA NEGOCIAR CON UN DEUDOR? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué significa negociar con un deudor?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La negociación de deudas consiste en establecer un diálogo entre
          acreedor y deudor con el objetivo de alcanzar un acuerdo que permita
          el cumplimiento de la obligación pendiente. Este proceso implica
          analizar la situación financiera del cliente, comprender las causas
          del incumplimiento y proponer alternativas de pago que sean
          sostenibles para ambas partes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una negociación efectiva busca equilibrar los intereses del acreedor
          con la capacidad real de pago del deudor. Esto puede incluir acuerdos
          de pago, ampliación de plazos, pagos parciales, reestructuración de
          obligaciones o cualquier otra alternativa que facilite la recuperación
          de la cartera sin deteriorar innecesariamente la relación comercial.
        </motion.p>

        {/* PORQUE LA NEGOCIACION ES UNA DE LAS ESTRATEGIAS MAS EFECTIVAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la negociación es una de las estrategias más efectivas para
          recuperar cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchas ocasiones, iniciar un proceso judicial desde el primer
          momento no representa la alternativa más eficiente para una empresa.
          Los procesos pueden requerir tiempo, recursos económicos y un
          seguimiento constante. Cuando existe disposición por parte del cliente
          para cumplir con la obligación, una negociación bien estructurada
          suele ofrecer resultados más rápidos y con un menor costo operativo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además de facilitar el recaudo, la negociación contribuye a fortalecer
          la imagen de la empresa, mejora la experiencia del cliente y permite
          conservar relaciones comerciales que pueden seguir generando ingresos
          en el futuro. Muchas organizaciones consideran la negociación como una
          etapa fundamental dentro de su estrategia integral de gestión de
          cartera.
        </motion.p>

        {/* BENEFICIOS DE NEGOCIAR ANTES DE INICIAR ACCIONES DE COBRO MAS COMPLEJAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de negociar antes de iniciar acciones de cobro más
          complejas
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Incrementa las probabilidades de recuperar la deuda.</li>
          <li>Reduce los días promedio de cartera vencida.</li>
          <li>Disminuye los costos asociados a la cobranza.</li>
          <li>Permite mantener relaciones comerciales estratégicas.</li>
          <li>Mejora el flujo de caja de la empresa.</li>
          <li>Facilita acuerdos personalizados según cada cliente.</li>
          <li>Evita conflictos innecesarios entre las partes.</li>
          <li>Contribuye a una mejor reputación empresarial.</li>
          <li>Reduce el riesgo de que la deuda continúe aumentando.</li>
          <li>
            Genera mayor compromiso por parte del deudor cuando participa en la
            construcción del acuerdo.
          </li>
        </motion.ul>

        {/* ERRORES FRECUENTES AL NEGOCIAR CON CLIENTES MOROSOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes al negociar con clientes morosos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas negociaciones fracasan porque las empresas improvisan el
          proceso o se enfocan únicamente en exigir el pago inmediato. La falta
          de preparación, la ausencia de información actualizada y una
          comunicación poco profesional disminuyen considerablemente las
          posibilidades de llegar a un acuerdo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No conocer el historial del cliente.</li>
          <li>Improvisar durante la conversación.</li>
          <li>Utilizar un tono agresivo o amenazante.</li>
          <li>No escuchar las razones del incumplimiento.</li>
          <li>Prometer condiciones que la empresa no puede cumplir.</li>
          <li>No documentar los acuerdos alcanzados.</li>
          <li>Esperar demasiado tiempo para iniciar la negociación.</li>
          <li>No realizar seguimiento después del acuerdo.</li>
        </motion.ul>

        {/* COMO PREPARARTE ANTES DE NEGOCIAR UNA DEUDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo prepararte antes de negociar una deuda
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una negociación exitosa comienza mucho antes de realizar la primera
          llamada o enviar el primer correo electrónico. La preparación permite
          conocer la situación del cliente, establecer objetivos claros y
          definir hasta dónde puede llegar la empresa durante la negociación.
          Entre mayor sea la información disponible, mejores serán las
          probabilidades de alcanzar un acuerdo de pago sostenible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de contactar al deudor es recomendable revisar el historial
          comercial, el número de facturas pendientes, los días de mora, los
          pagos anteriores, las conversaciones realizadas y cualquier compromiso
          previamente adquirido. También resulta conveniente determinar cuál es
          el monto mínimo que la empresa está dispuesta a aceptar, si existen
          descuentos autorizados o si pueden ofrecerse facilidades de pago.
        </motion.p>

        {/* INFORMACION QUE DEBERIAS TENER ANTES DE LLAMAR AL CLIENTE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Información que deberías tener antes de llamar al cliente
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Valor total de la deuda.</li>
          <li>Días exactos de mora.</li>
          <li>Facturas pendientes.</li>
          <li>Historial de pagos anteriores.</li>
          <li>Acuerdos incumplidos.</li>
          <li>Intereses generados.</li>
          <li>Información de contacto actualizada.</li>
          <li>Capacidad estimada de negociación.</li>
          <li>Autorizaciones comerciales disponibles.</li>
          <li>Alternativas de pago que puede ofrecer la empresa.</li>
        </motion.ul>

        {/* IDENTIFICA EL PERFIL DEL DEUDOR ANTES DE OFRECER UNA SOLUCION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Identifica el perfil del deudor antes de ofrecer una solución
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todos los clientes dejan de pagar por la misma razón. Algunos
          presentan problemas temporales de liquidez, mientras otros atraviesan
          dificultades administrativas, desacuerdos comerciales o simplemente
          descuidan sus obligaciones. Identificar el perfil del deudor permite
          adaptar la estrategia de negociación y evitar propuestas que
          difícilmente serán aceptadas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una empresa que comprende las necesidades de sus clientes suele
          negociar de forma más eficiente. Escuchar activamente durante los
          primeros minutos de la conversación puede proporcionar información
          valiosa para estructurar una propuesta de pago realista.
        </motion.p>

        {/* TECNICAS DE NEGOCIACION QUE GENERAN MEJORES RESULTADOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Técnicas de negociación que generan mejores resultados
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Escuchar más de lo que se habla.</li>
          <li>Realizar preguntas abiertas.</li>
          <li>Mostrar disposición para encontrar soluciones.</li>
          <li>Evitar discusiones innecesarias.</li>
          <li>Negociar con información objetiva.</li>
          <li>Explicar claramente las consecuencias del incumplimiento.</li>
          <li>Presentar varias alternativas de pago.</li>
          <li>Definir fechas concretas para cada compromiso.</li>
          <li>Generar sensación de urgencia sin ejercer presión excesiva.</li>
          <li>Cerrar cada conversación con un compromiso verificable.</li>
        </motion.ul>

        {/* COMO RESPONDER A LAS OBJECIONES MAS FRECUENTES DE UN CLIENTE MOROSO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo responder a las objeciones más frecuentes de un cliente moroso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Durante una negociación es normal que el cliente plantee objeciones.
          En lugar de interpretarlas como un rechazo definitivo, deben
          entenderse como una oportunidad para conocer mejor su situación. Una
          respuesta adecuada puede marcar la diferencia entre recuperar la deuda
          o prolongar el incumplimiento.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>"No tengo dinero."</strong> Analiza la posibilidad de
            establecer un acuerdo por cuotas o una fecha cercana de pago.
          </li>
          <li>
            <strong>"Necesito más tiempo."</strong> Define un plazo concreto y
            deja el compromiso documentado.
          </li>
          <li>
            <strong>"No estoy de acuerdo con el valor."</strong> Revisa
            conjuntamente las facturas, soportes y movimientos registrados.
          </li>
          <li>
            <strong>"Estoy esperando que me paguen."</strong> Evalúa un
            cronograma condicionado al ingreso esperado.
          </li>
          <li>
            <strong>"Luego lo llamo."</strong> Agenda inmediatamente una nueva
            fecha de contacto para evitar perder seguimiento.
          </li>
        </motion.ul>

        {/* LA IMPORTANCIA DE ESCUCHAR ACTIVAMENTE DURANTE LA NEGOCIACION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La importancia de escuchar activamente durante la negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Escuchar activamente permite comprender la verdadera situación
          financiera del cliente, identificar oportunidades de negociación y
          construir confianza. Interrumpir constantemente, asumir respuestas o
          presionar desde el inicio suele generar resistencia y disminuye
          considerablemente las probabilidades de llegar a un acuerdo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un negociador profesional escucha, analiza, formula preguntas y
          únicamente después presenta alternativas de solución. Este enfoque
          favorece acuerdos más estables y con mayores probabilidades de
          cumplimiento.
        </motion.p>

        {/* ESTRATEGIAS DE NEGOCIACION QUE REALMENTE AUMENTAN LA RECUPERACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias de negociación que realmente aumentan la recuperación de
          cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Negociar no significa aceptar cualquier propuesta presentada por el
          cliente. Una negociación efectiva busca encontrar un punto de
          equilibrio entre la necesidad de recuperar la cartera y la capacidad
          real de pago del deudor. Para lograrlo es indispensable establecer
          límites claros, preparar diferentes escenarios y tener alternativas
          previamente autorizadas por la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los negociadores con mejores indicadores suelen manejar varias
          opciones antes de iniciar la conversación. De esta manera pueden
          adaptarse a las respuestas del cliente sin improvisar y sin
          comprometer la rentabilidad de la compañía.
        </motion.p>

        {/* ALTERNATIVAS QUE PUEDES OFRECER DURANTE UNA NEGOCIACION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Alternativas que puedes ofrecer durante una negociación
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pago total inmediato.</li>
          <li>Pago inicial más cuotas mensuales.</li>
          <li>Reestructuración del plazo.</li>
          <li>Pago escalonado según flujo de caja.</li>
          <li>Abonos parciales programados.</li>
          <li>Acuerdo de pago formalizado por escrito.</li>
          <li>Descuento condicionado al pago inmediato.</li>
          <li>Condonación parcial de intereses previamente autorizada.</li>
          <li>Calendario personalizado de pagos.</li>
          <li>Compromisos con fechas verificables.</li>
        </motion.ul>

        {/* CUANDO OFRECER DESCUENTOS DURANTE UNA NEGOCIACION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo ofrecer descuentos durante una negociación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los descuentos no deben convertirse en la primera alternativa de
          negociación. Antes de ofrecer cualquier beneficio económico es
          recomendable evaluar el historial del cliente, el valor de la deuda,
          el tiempo de mora y las probabilidades reales de recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas reservan los descuentos únicamente para pagos
          inmediatos o acuerdos que representen una recuperación significativa
          de la cartera. De esta forma se evita crear el hábito de que los
          clientes retrasen deliberadamente sus pagos esperando beneficios
          futuros.
        </motion.p>

        {/* CONSTRUCCION DE UN ACUERDO DE PAGO QUE REDUZCA NUEVOS INCUMPLIMIENTOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo construir un acuerdo de pago que reduzca nuevos incumplimientos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una negociación solamente termina cuando existe un acuerdo claramente
          documentado. Los compromisos verbales generan confusión y dificultan
          el seguimiento posterior. Por ello resulta recomendable dejar por
          escrito todas las condiciones pactadas entre las partes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Identificación del acreedor y del deudor.</li>
          <li>Valor total reconocido.</li>
          <li>Número de cuotas.</li>
          <li>Valor de cada pago.</li>
          <li>Fechas exactas de vencimiento.</li>
          <li>Forma de pago autorizada.</li>
          <li>Consecuencias por incumplimiento.</li>
          <li>Firmas o aceptación por medios electrónicos.</li>
        </motion.ul>

        {/* SENALES DE QUE UNA NEGOCIACION PROBABLEMENTE NO LLEGARA A UN ACUERDO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Señales de que una negociación probablemente no llegará a un acuerdo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque la negociación suele ser la mejor alternativa para recuperar
          cartera, existen situaciones donde las posibilidades de éxito
          disminuyen considerablemente. Detectar estas señales permite decidir
          oportunamente si es necesario avanzar hacia otras etapas de
          recuperación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Incumplimiento reiterado de acuerdos anteriores.</li>
          <li>Cambios constantes de versión.</li>
          <li>Promesas sin fechas concretas.</li>
          <li>Falta de respuesta durante largos periodos.</li>
          <li>Información financiera contradictoria.</li>
          <li>Negativa permanente a realizar cualquier abono.</li>
          <li>Desaparición de los canales habituales de contacto.</li>
          <li>Incumplimiento de compromisos mínimos previamente aceptados.</li>
        </motion.ul>

        {/* ERRORES QUE REDUCEN EL PORCENTAJE DE RECUPERACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que reducen el porcentaje de recuperación de cartera
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Esperar varios meses antes de contactar al cliente.</li>
          <li>Negociar sin conocer el historial de pagos.</li>
          <li>
            Aceptar cualquier propuesta por recuperar rápidamente el dinero.
          </li>
          <li>No registrar las conversaciones realizadas.</li>
          <li>No hacer seguimiento al acuerdo.</li>
          <li>Permitir múltiples incumplimientos sin tomar decisiones.</li>
          <li>No medir indicadores de recuperación.</li>
          <li>Carecer de políticas claras de negociación.</li>
        </motion.ul>

        {/* INDICADORES QUE PERMITEN EVALUAR SI UNA NEGOCIACION FUE EXITOSA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que permiten evaluar si una negociación fue exitosa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una negociación no debe evaluarse únicamente porque el cliente aceptó
          una propuesta. El verdadero éxito se refleja cuando el acuerdo se
          cumple y la empresa recupera efectivamente los recursos pendientes.
          Por ello resulta conveniente medir indicadores como el porcentaje de
          recuperación, el tiempo promedio de recaudo, el número de acuerdos
          cumplidos, la disminución de la cartera vencida y la reducción de los
          días de mora.
        </motion.p>

        {/* QUE HACER DESPUES DE LLEGAR A UN ACUERDO DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué hacer después de llegar a un acuerdo de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más comunes en la recuperación de cartera consiste
          en pensar que la negociación termina cuando el cliente acepta pagar.
          En realidad, el trabajo más importante comienza después del acuerdo.
          Un seguimiento oportuno aumenta considerablemente el porcentaje de
          cumplimiento y reduce el riesgo de nuevos incumplimientos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La empresa debe establecer recordatorios automáticos, verificar cada
          pago, confirmar la recepción del dinero y contactar nuevamente al
          cliente cuando se acerque la fecha pactada. Un seguimiento organizado
          evita que el acuerdo quede únicamente en una promesa.
        </motion.p>

        {/* COMO HACER SEGUIMIENTO A UN ACUERDO DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo hacer seguimiento a un acuerdo de pago
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Registrar la fecha de cada cuota.</li>
          <li>Programar recordatorios antes del vencimiento.</li>
          <li>Confirmar cada pago recibido.</li>
          <li>Actualizar el saldo pendiente.</li>
          <li>Documentar todas las comunicaciones.</li>
          <li>Enviar comprobantes cuando corresponda.</li>
          <li>Contactar inmediatamente si existe retraso.</li>
          <li>Revisar periódicamente el cumplimiento del acuerdo.</li>
        </motion.ul>

        {/* CUALES SON LOS MEJORES CANALES PARA NEGOCIAR CON UN DEUDOR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuáles son los mejores canales para negociar con un deudor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente las empresas cuentan con múltiples canales de comunicación
          para gestionar negociaciones. La elección dependerá del perfil del
          cliente, del valor de la deuda y del nivel de mora. Lo importante es
          mantener una comunicación respetuosa, profesional y fácilmente
          verificable.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Llamadas telefónicas.</li>
          <li>Correo electrónico.</li>
          <li>WhatsApp empresarial.</li>
          <li>Mensajes SMS.</li>
          <li>Videollamadas.</li>
          <li>Reuniones presenciales.</li>
          <li>Portales de autogestión.</li>
          <li>Plataformas especializadas de recuperación de cartera.</li>
        </motion.ul>

        {/* DIFERENCIAS ENTRE NEGOCIAR CON EMPRESAS Y NEGOCIAR CON PERSONAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencias entre negociar con empresas y negociar con personas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La negociación B2B suele involucrar procesos administrativos más
          extensos, aprobaciones internas y revisiones financieras antes de
          autorizar un pago. Por ello, es frecuente que las empresas soliciten
          plazos adicionales o esquemas de pago personalizados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En las negociaciones con personas naturales normalmente predominan
          factores relacionados con la capacidad económica inmediata, los
          ingresos mensuales y las obligaciones personales. Adaptar el discurso
          a cada tipo de cliente mejora considerablemente la probabilidad de
          éxito.
        </motion.p>

        {/* COMO LA TECNOLOGIA MEJORA LA NEGOCIACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo la tecnología mejora la negociación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hoy en día muchas organizaciones apoyan sus procesos de recuperación
          mediante software especializado que centraliza la información de cada
          cliente, automatiza recordatorios, registra conversaciones y facilita
          el seguimiento de acuerdos de pago. Esto permite que los asesores
          dediquen más tiempo a negociar y menos a tareas administrativas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La automatización también permite segmentar clientes según su
          comportamiento de pago, priorizar los casos más urgentes y medir
          indicadores de desempeño que ayudan a optimizar continuamente la
          estrategia de cobranza.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Checklist para preparar una negociación exitosa
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>✔ Revisar el historial del cliente.</li>
          <li>✔ Confirmar el saldo actualizado.</li>
          <li>✔ Definir el objetivo de la negociación.</li>
          <li>✔ Preparar varias alternativas de pago.</li>
          <li>✔ Tener autorizaciones comerciales disponibles.</li>
          <li>✔ Escuchar antes de proponer soluciones.</li>
          <li>✔ Documentar todos los compromisos.</li>
          <li>✔ Realizar seguimiento permanente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una empresa debería acudir a apoyo especializado?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando la cartera vencida aumenta, los acuerdos dejan de cumplirse o
          el equipo interno no logra mantener un seguimiento constante, puede
          ser conveniente implementar herramientas especializadas o fortalecer
          la estrategia de recuperación con procesos más estructurados. Esto
          permite mantener la negociación organizada, reducir los tiempos de
          recaudo y mejorar el flujo de caja sin depender exclusivamente de
          procesos judiciales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué es importante negociar antes de demandar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchos casos, los clientes no incumplen por falta de voluntad sino
          por dificultades temporales de liquidez. Una negociación adecuada
          puede generar soluciones beneficiosas para ambas partes y acelerar la
          recuperación del dinero sin necesidad de acudir a instancias
          judiciales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preparación antes de iniciar la negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de contactar al deudor es recomendable conocer el valor exacto
          de la deuda, los días de mora, el historial de pagos y las posibles
          alternativas de acuerdo. Contar con esta información facilita la toma
          de decisiones y mejora la capacidad de negociación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Escuchar antes de proponer soluciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Comprender las razones que llevaron al incumplimiento permite plantear
          opciones más realistas. Escuchar al deudor ayuda a identificar
          dificultades financieras, problemas operativos o situaciones
          excepcionales que pueden resolverse mediante acuerdos flexibles.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ofrecer alternativas de pago viables
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La negociación no consiste únicamente en exigir el pago inmediato.
          Dependiendo de cada caso, pueden plantearse cuotas, ampliación de
          plazos, acuerdos parciales o esquemas de pago progresivos que permitan
          recuperar la cartera sin afectar completamente la capacidad financiera
          del cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mantener una comunicación profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El respeto y la cordialidad suelen generar mejores resultados que la
          presión excesiva. Una comunicación profesional fortalece la relación
          comercial y aumenta la disposición del cliente para cumplir con los
          compromisos adquiridos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Formalizar los acuerdos alcanzados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Todo acuerdo debe quedar documentado por escrito. Esto permite
          establecer claramente las obligaciones de cada parte, las fechas de
          pago y las consecuencias en caso de incumplimiento.
        </motion.p>

        {/*  TÉCNICAS EFECTIVAS PARA NEGOCIAR CON DEUDORES  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Técnicas efectivas para negociar con deudores
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Escuchar activamente antes de proponer soluciones.</li>
          <li>Mantener una comunicación clara y respetuosa.</li>
          <li>Ofrecer alternativas realistas de pago.</li>
          <li>Negociar con base en información financiera actualizada.</li>
          <li>Documentar todos los compromisos adquiridos.</li>
          <li>Realizar seguimiento periódico a los acuerdos.</li>
          <li>Buscar soluciones que beneficien a ambas partes.</li>
          <li>Actuar oportunamente antes de que la deuda aumente.</li>
        </motion.ul>

        {/* CONCLUSIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Saber negociar con deudores es una habilidad fundamental para
          cualquier empresa que busque mejorar sus indicadores de recuperación
          de cartera. La combinación de comunicación efectiva, análisis
          financiero y acuerdos bien estructurados puede incrementar
          significativamente las probabilidades de recaudo y reducir la
          necesidad de procesos judiciales.
        </motion.p>
      </motion.article>
    </main>
  );
}
