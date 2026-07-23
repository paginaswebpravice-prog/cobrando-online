"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DsoDiasCartera() {
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
          Finanzas y KPIs
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Qué es el DSO (Days Sales Outstanding)? Cómo calcular los días de
          cartera promedio y reducir la mora empresarial
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El <strong>DSO (Days Sales Outstanding)</strong>, también conocido
          como
          <strong> días de cartera promedio</strong>, es uno de los indicadores
          más importantes para evaluar la eficiencia con la que una empresa
          recupera el dinero de sus ventas a crédito. Este KPI permite medir
          cuánto tarda una organización en convertir sus cuentas por cobrar en
          efectivo, información fundamental para proteger el flujo de caja,
          controlar la cartera vencida y tomar decisiones financieras basadas en
          datos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Un DSO elevado suele indicar retrasos en la cobranza, mayores
          necesidades de financiación y un incremento del riesgo de
          incobrabilidad. Por el contrario, mantener un indicador saludable
          permite mejorar la liquidez, fortalecer la capacidad de inversión y
          optimizar la gestión de cartera sin necesidad de recurrir
          constantemente a procesos de cobro jurídico.
        </motion.p>

        {/* QUE ES EL DSO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es el DSO y por qué todas las empresas deberían medir este
          indicador?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El DSO (Days Sales Outstanding) representa el número promedio de días
          que una empresa tarda en recuperar el dinero correspondiente a las
          ventas realizadas a crédito durante un período determinado. Es uno de
          los indicadores más utilizados por las áreas financieras, contables y
          de cartera para evaluar la eficiencia de la gestión de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este indicador no solo muestra la velocidad de recaudo. También ayuda
          a identificar problemas en las políticas de crédito, clientes con alto
          riesgo de mora, procesos internos ineficientes y posibles afectaciones
          sobre el capital de trabajo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Permite conocer la eficiencia del proceso de cobranza.</li>
          <li>Facilita detectar aumentos en la cartera vencida.</li>
          <li>Ayuda a proyectar el flujo de caja.</li>
          <li>Permite evaluar la calidad de las políticas de crédito.</li>
          <li>Sirve como KPI para medir el desempeño del área de cartera.</li>
        </motion.ul>

        {/* FORMULA DEL DSO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo calcular el DSO (Days Sales Outstanding): fórmula, ejemplo e
          interpretación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El cálculo del DSO es relativamente sencillo, pero su correcta
          interpretación puede marcar una gran diferencia en la toma de
          decisiones financieras. Este indicador relaciona las cuentas por
          cobrar con las ventas realizadas a crédito durante un período
          determinado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La fórmula más utilizada es la siguiente:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>
              DSO = (Cuentas por cobrar ÷ Ventas a crédito) × Número de días del
              período
            </strong>
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por ejemplo, si una empresa registra cuentas por cobrar por
          <strong> $120 millones</strong>, realizó ventas a crédito por
          <strong> $360 millones</strong> durante un trimestre de
          <strong> 90 días</strong>, el cálculo sería:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>DSO = (120 ÷ 360) × 90</li>

          <li>DSO = 0.333 × 90</li>

          <li>
            <strong>DSO = 30 días.</strong>
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esto significa que, en promedio, la empresa tarda aproximadamente
          <strong> 30 días en recuperar el dinero</strong> correspondiente a sus
          ventas a crédito. Comparar este resultado con el plazo otorgado a los
          clientes ayuda a determinar si el proceso de recaudo está funcionando
          correctamente o si existen retrasos que deben corregirse.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es recomendable calcular el DSO de forma mensual o trimestral para
          identificar tendencias, medir el impacto de nuevas políticas de
          crédito y evaluar la efectividad de las estrategias de recuperación de
          cartera implementadas por la empresa.
        </motion.p>

        {/* IMPORTANCIA DEL DSO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué medir el DSO es fundamental para mejorar la recuperación de
          cartera y el flujo de caja?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El DSO no es simplemente un indicador financiero. Para muchas empresas
          representa una herramienta que permite identificar la velocidad con la
          que el dinero vuelve al negocio después de realizar una venta a
          crédito. Cuando el recaudo tarda demasiado, la empresa necesita más
          capital para operar, aumenta la presión sobre el flujo de caja y
          pueden aparecer dificultades para cumplir con proveedores, nómina e
          inversiones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Monitorear el DSO de forma periódica permite detectar problemas antes
          de que se conviertan en cartera vencida difícil de recuperar. Un
          incremento constante del indicador suele reflejar retrasos en los
          pagos, políticas de crédito poco estrictas, procesos de cobranza
          ineficientes o clientes con mayor riesgo de incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Asimismo, este KPI facilita la toma de decisiones estratégicas
          relacionadas con los plazos de crédito, los límites de financiación
          otorgados a los clientes y la necesidad de fortalecer las acciones de
          seguimiento preventivo antes de que las facturas entren en mora.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Un DSO elevado puede indicar:
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Procesos de cobranza poco eficientes.</li>
          <li>Clientes que pagan fuera de los plazos acordados.</li>
          <li>Incremento de la cartera vencida.</li>
          <li>Mayor necesidad de capital de trabajo.</li>
          <li>Disminución de la liquidez empresarial.</li>
          <li>Mayor riesgo de incobrabilidad.</li>
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Un DSO bajo generalmente refleja:
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Recuperación rápida de las cuentas por cobrar.</li>
          <li>Mayor disponibilidad de efectivo.</li>
          <li>Menor riesgo financiero.</li>
          <li>Procesos de recaudo organizados.</li>
          <li>Políticas de crédito bien definidas.</li>
          <li>Mejor capacidad para invertir y crecer.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sin embargo, un DSO muy bajo tampoco siempre significa que la empresa
          esté en una mejor situación. En algunos sectores puede indicar
          políticas de crédito demasiado restrictivas que limitan las ventas.
          Por esta razón, el indicador siempre debe analizarse junto con otros
          KPIs financieros y compararse con el promedio del sector económico al
          que pertenece la organización.
        </motion.p>

        {/*  BENEFICIOS DE CONTROLAR EL DSO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de reducir el DSO y mantener un indicador saludable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reducir los días de cartera promedio no solo mejora la recuperación de
          las cuentas por cobrar. También fortalece la estabilidad financiera de
          la empresa y permite disponer de recursos para invertir, crecer y
          operar con mayor tranquilidad. Un DSO controlado refleja que la
          organización cuenta con procesos eficientes de crédito y cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando las facturas se cobran dentro de los plazos esperados,
          disminuye la necesidad de recurrir a créditos bancarios o financiación
          externa para cubrir gastos operativos, lo que impacta positivamente la
          rentabilidad del negocio.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Mejora el flujo de caja</strong> al recuperar el dinero de
            las ventas en menos tiempo.
          </li>
          <li>
            <strong>Reduce la cartera vencida</strong> y el riesgo de cuentas
            incobrables.
          </li>
          <li>
            <strong>Disminuye los costos financieros</strong> al reducir la
            necesidad de solicitar préstamos para cubrir la operación.
          </li>
          <li>
            <strong>Facilita la planeación financiera</strong> gracias a una
            mayor previsibilidad en los ingresos.
          </li>
          <li>
            <strong>Permite evaluar el desempeño del área de cartera</strong>{" "}
            mediante un indicador objetivo y fácil de comparar entre períodos.
          </li>
          <li>
            <strong>Fortalece las políticas de crédito</strong> al identificar
            clientes con comportamientos de pago riesgosos.
          </li>
          <li>
            <strong>Incrementa la liquidez empresarial</strong>, permitiendo
            responder con mayor rapidez a nuevas oportunidades de negocio.
          </li>
          <li>
            <strong>Mejora la rentabilidad</strong>, ya que disminuyen los
            recursos inmovilizados en cuentas por cobrar.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En empresas con altos volúmenes de ventas a crédito, incluso una
          reducción de pocos días en el DSO puede representar una mejora
          significativa en la disponibilidad de efectivo, permitiendo financiar
          el crecimiento del negocio sin incrementar el endeudamiento.
        </motion.p>

        {/* QUE SE CONSIDERA UN DSO BUENO, REGULAR O ALTO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué se considera un DSO bueno, regular o alto?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un valor único que pueda considerarse adecuado para todas
          las empresas. El DSO ideal depende del sector económico, del tipo de
          clientes, de las condiciones de crédito ofrecidas y del modelo de
          negocio. Sin embargo, comparar este indicador con los plazos de pago
          establecidos permite conocer si la recuperación de cartera está siendo
          eficiente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Un DSO cercano al plazo de crédito suele indicar una gestión
            saludable.
          </li>
          <li>
            Un DSO moderadamente superior puede reflejar retrasos ocasionales.
          </li>
          <li>
            Un DSO muy elevado normalmente evidencia problemas de cobranza o
            exceso de cartera vencida.
          </li>
          <li>
            Un DSO que aumenta cada mes debe analizarse inmediatamente para
            evitar problemas de liquidez.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Más importante que comparar el DSO con el de otras empresas es evaluar
          su evolución a lo largo del tiempo. Si el indicador disminuye de
          manera constante, significa que las estrategias de recuperación de
          cartera están generando resultados positivos.
        </motion.p>

        {/*  COMO REDUCIR LOS Días DE CARTERA PROMEDIO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir el DSO y acelerar la recuperación de cartera sin afectar
          la relación con los clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reducir el DSO requiere mucho más que realizar llamadas de cobranza
          cuando una factura ya venció. Las empresas con mejores indicadores
          implementan procesos preventivos, automatizan tareas repetitivas y
          realizan seguimiento continuo desde antes del vencimiento de las
          obligaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una estrategia integral permite disminuir los días promedio de cobro
          sin deteriorar la relación comercial con los clientes y sin aumentar
          innecesariamente los costos de recuperación.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Acciones que ayudan a disminuir el DSO
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Definir políticas claras de crédito antes de aprobar nuevos
            clientes.
          </li>
          <li>
            Verificar la capacidad de pago y el historial crediticio cuando sea
            posible.
          </li>
          <li>
            Emitir facturas correctamente y enviarlas inmediatamente después de
            prestar el servicio o entregar el producto.
          </li>
          <li>
            Programar recordatorios automáticos antes del vencimiento de las
            facturas.
          </li>
          <li>
            Realizar seguimiento preventivo a clientes con mayor riesgo de mora.
          </li>
          <li>
            Negociar acuerdos de pago oportunamente cuando existan dificultades
            de liquidez.
          </li>
          <li>
            Clasificar la cartera por antigüedad para priorizar las cuentas más
            críticas.
          </li>
          <li>
            Medir permanentemente indicadores como DSO, porcentaje de
            recuperación y cartera vencida.
          </li>
          <li>
            Escalar rápidamente los casos que requieran procesos de cobro
            prejurídico.
          </li>
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          La automatización también ayuda a reducir el DSO
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente muchas empresas utilizan software especializado para
          automatizar recordatorios, segmentar clientes según su comportamiento
          de pago, generar reportes en tiempo real y controlar el avance de cada
          proceso de recuperación. Esto permite reducir tiempos administrativos
          y concentrar los esfuerzos del equipo de cartera en los casos que
          realmente requieren intervención humana.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La combinación de procesos preventivos, tecnología y seguimiento
          constante suele reflejarse en una disminución progresiva del DSO y en
          una mejora del flujo de caja de la organización.
        </motion.p>

        {/* ERRORES QUE AUMENTAN LOS Días DE CARTERA PROMEDIO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que aumentan los días de cartera promedio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchas organizaciones el DSO aumenta no por falta de clientes, sino
          por errores internos en la gestión de cartera. Detectarlos a tiempo
          permite corregir procesos y evitar que la mora continúe creciendo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            No realizar seguimiento antes del vencimiento de las facturas.
          </li>
          <li>Otorgar créditos sin evaluar adecuadamente al cliente.</li>
          <li>Permitir múltiples prórrogas sin documentarlas.</li>
          <li>No medir indicadores de cartera periódicamente.</li>
          <li>Esperar demasiado tiempo para iniciar el cobro prejurídico.</li>
          <li>No documentar adecuadamente los acuerdos de pago.</li>
          <li>Trabajar la cobranza únicamente de forma manual.</li>
          <li>No segmentar la cartera según el nivel de riesgo.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Corregir estos errores puede generar reducciones importantes en los
          días promedio de cobro y mejorar la liquidez sin necesidad de aumentar
          las ventas.
        </motion.p>

        {/* PREGUNTAS FRECUENTES */}
        <motion.section
          className={styles.faq}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Preguntas frecuentes sobre el DSO y los días de cartera promedio
          </h2>

          <motion.div>
            <h3>¿Qué significa DSO?</h3>

            <p>
              DSO significa <strong>Days Sales Outstanding</strong> y representa
              el número promedio de días que tarda una empresa en recuperar el
              dinero de las ventas realizadas a crédito.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Cómo se calcula el DSO?</h3>

            <p>
              La fórmula más utilizada consiste en dividir las cuentas por
              cobrar entre las ventas a crédito del período y multiplicar el
              resultado por el número de días analizados.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Qué indica un DSO alto?</h3>

            <p>
              Un DSO elevado generalmente significa que la empresa está tardando
              más de lo esperado en recuperar sus cuentas por cobrar, lo que
              puede afectar la liquidez y aumentar el riesgo de cartera vencida.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Cuál es un buen DSO?</h3>

            <p>
              No existe un valor universal. El DSO adecuado depende del sector,
              del tipo de clientes y de las políticas de crédito de cada
              empresa. Lo importante es mantener una tendencia estable y cercana
              a los plazos de pago establecidos.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Cada cuánto tiempo se debe medir el DSO?</h3>

            <p>
              Lo recomendable es calcularlo mensualmente. Sin embargo, empresas
              con un alto volumen de ventas a crédito pueden monitorearlo
              semanalmente para detectar desviaciones con mayor rapidez.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Reducir el DSO siempre significa cobrar más rápido?</h3>

            <p>
              Sí. Una disminución del DSO normalmente refleja que las facturas
              están siendo recuperadas en menos tiempo, aunque siempre debe
              analizarse junto con otros indicadores financieros para obtener
              una visión completa de la gestión de cartera.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Qué áreas de una empresa influyen en el DSO?</h3>

            <p>
              El DSO no depende únicamente del área de cartera. También
              intervienen los equipos comerciales, financieros, contables y de
              servicio al cliente, ya que todos participan en la aprobación de
              créditos, facturación, seguimiento y recaudo.
            </p>
          </motion.div>

          <motion.div>
            <h3>¿Cómo puede una empresa disminuir el DSO?</h3>

            <p>
              Implementando políticas de crédito claras, automatizando
              recordatorios, realizando seguimiento preventivo, negociando
              acuerdos de pago oportunos y utilizando herramientas tecnológicas
              para optimizar la recuperación de cartera.
            </p>
          </motion.div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: controlar el DSO es clave para mejorar la liquidez y la
          recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El DSO o <em>Days Sales Outstanding</em> es mucho más que un indicador
          financiero. Representa la velocidad con la que una empresa convierte
          sus ventas a crédito en efectivo y, por lo tanto, tiene un impacto
          directo sobre la liquidez, el flujo de caja y la estabilidad
          financiera del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir este KPI de forma periódica permite identificar oportunidades de
          mejora en las políticas de crédito, detectar clientes con alto riesgo
          de mora y optimizar las estrategias de recuperación de cartera antes
          de que las cuentas vencidas se conviertan en pérdidas para la
          organización.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas que combinan un seguimiento constante del DSO con
          procesos de cobranza preventiva, automatización, acuerdos de pago bien
          estructurados y análisis permanente de sus indicadores suelen
          recuperar su cartera en menos tiempo, mejorar la disponibilidad de
          efectivo y fortalecer su crecimiento financiero a largo plazo.
        </motion.p>
      </motion.article>
    </main>
  );
}
