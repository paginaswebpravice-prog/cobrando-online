"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RotacionCartera() {
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
          Indicadores Financieros y Gestión de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Rotación de cartera: qué es, cómo calcularla y cómo mejorar la
          recuperación de cuentas por cobrar
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La <strong>rotación de cartera</strong> es uno de los indicadores
          financieros más importantes para evaluar la eficiencia con la que una
          empresa convierte sus ventas a crédito en efectivo. Su análisis
          permite determinar si las políticas de crédito, facturación y cobranza
          están funcionando correctamente o si, por el contrario, existen
          problemas que afectan la liquidez y aumentan el riesgo de cartera
          vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Independientemente del tamaño de la organización, conocer este
          indicador facilita la toma de decisiones relacionadas con el
          otorgamiento de crédito, la administración del flujo de caja, la
          recuperación de cuentas por cobrar y la planeación financiera. Por
          esta razón, es un KPI ampliamente utilizado por áreas financieras,
          contables, comerciales y de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En esta guía aprenderás qué significa la rotación de cartera, cómo se
          calcula, cómo interpretar sus resultados, cuáles son los factores que
          pueden afectarla y qué estrategias permiten mejorar este indicador
          para fortalecer la salud financiera de cualquier empresa.
        </motion.p>

        {/*  QUE ES LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera es un indicador que mide la velocidad con la
          que una empresa recupera el dinero correspondiente a las ventas
          realizadas a crédito. En otras palabras, muestra cuántas veces las
          cuentas por cobrar se convierten nuevamente en efectivo durante un
          período específico, como un mes, un trimestre o un año.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras mayor sea la rotación de cartera, más rápidamente ingresan
          recursos financieros a la empresa, mejorando su capacidad para cubrir
          obligaciones, realizar inversiones y mantener un flujo de caja
          estable. Por el contrario, una rotación baja puede indicar que los
          clientes están tardando demasiado en pagar o que los procesos internos
          de cobranza requieren ajustes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es importante entender que este indicador no debe analizarse de forma
          aislada. Su interpretación depende del sector económico, del tipo de
          clientes, de las políticas comerciales y de los plazos de crédito
          establecidos por cada organización.
        </motion.p>

        {/* PORQUE LA ROTACION DE CARTERA ES UN INDICADOR TAN IMPORTANTE  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la rotación de cartera es un indicador tan importante?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación oportuna de las cuentas por cobrar tiene un impacto
          directo sobre la liquidez empresarial. Cuando los pagos ingresan
          dentro de los plazos esperados, la empresa dispone de recursos para
          atender proveedores, nómina, impuestos, nuevas inversiones y
          crecimiento comercial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En cambio, cuando la rotación disminuye, aumenta la necesidad de
          recurrir a financiación externa, se incrementan los costos financieros
          y aparecen mayores riesgos de cartera vencida e incobrabilidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Permite evaluar la eficiencia del proceso de cobranza.</li>

          <li>
            Ayuda a identificar problemas de liquidez antes de que sean
            críticos.
          </li>

          <li>Facilita la toma de decisiones sobre políticas de crédito.</li>

          <li>Permite medir el desempeño del equipo de recaudo.</li>

          <li>Reduce el riesgo de acumulación de cartera vencida.</li>

          <li>Contribuye a mejorar el flujo de caja empresarial.</li>

          <li>Facilita la planeación financiera y presupuestal.</li>
        </motion.ul>

        {/* COMO SE CALCULA LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo se calcula la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rotación de cartera se obtiene comparando el valor total de las
          ventas a crédito realizadas durante un período con el promedio de las
          cuentas por cobrar del mismo intervalo. Este cálculo permite conocer
          cuántas veces la empresa recuperó el dinero que tenía pendiente por
          cobrar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque existen pequeñas variaciones dependiendo del tipo de análisis
          financiero, la fórmula utilizada por la mayoría de organizaciones es
          la siguiente:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>
              Rotación de cartera = Ventas a crédito ÷ Promedio de cuentas por
              cobrar
            </strong>
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El promedio de cuentas por cobrar normalmente se obtiene sumando el
          saldo inicial y el saldo final del período para luego dividir el
          resultado entre dos. De esta forma se obtiene una cifra mucho más
          representativa del comportamiento real de la cartera.
        </motion.p>

        {/* EJEMPLO PRACTICO DE CALCULO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico de cálculo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Supongamos que durante un año una empresa realizó ventas a crédito por
          <strong> $1.800 millones</strong> y el promedio de sus cuentas por
          cobrar fue de <strong>$300 millones</strong>.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Ventas a crédito: $1.800 millones.</li>

          <li>Promedio de cuentas por cobrar: $300 millones.</li>

          <li>Rotación = 1.800 ÷ 300 = 6.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esto significa que la empresa recuperó completamente su cartera seis
          veces durante ese año. Entre mayor sea este número, mayor será la
          velocidad de recuperación del dinero invertido en ventas a crédito.
        </motion.p>

        {/* COMO INTERPRETAR LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo interpretar la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El resultado del indicador debe analizarse teniendo en cuenta el
          sector económico, las condiciones comerciales y los plazos de crédito
          otorgados por la empresa. No existe un único valor ideal para todas
          las organizaciones.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Rotación alta:</strong> normalmente refleja procesos de
            cobranza eficientes y clientes que pagan dentro de los plazos
            establecidos.
          </li>

          <li>
            <strong>Rotación media:</strong> indica un comportamiento aceptable,
            aunque pueden existir oportunidades para optimizar el recaudo.
          </li>

          <li>
            <strong>Rotación baja:</strong> suele evidenciar retrasos en los
            pagos, políticas de crédito poco estrictas o dificultades en la
            gestión de cobranza.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una disminución constante de este indicador debe analizarse de
          inmediato, pues puede anticipar problemas de liquidez, incremento de
          la cartera vencida y mayores costos de recuperación.
        </motion.p>

        {/* FACTORES QUE AFECTAN LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que afectan la rotación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen múltiples variables que influyen directamente en la velocidad
          con la que una empresa logra recuperar sus cuentas por cobrar. Algunas
          dependen del comportamiento del cliente y otras de los procesos
          internos de la compañía.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Políticas de otorgamiento de crédito.</li>

          <li>Plazos de pago concedidos.</li>

          <li>Capacidad financiera del cliente.</li>

          <li>Calidad del seguimiento realizado por el equipo de cobranza.</li>

          <li>Automatización de recordatorios y comunicaciones.</li>

          <li>Situación económica del mercado.</li>

          <li>Existencia de acuerdos de pago incumplidos.</li>

          <li>Concentración de cartera en pocos clientes.</li>
        </motion.ul>

        {/* BENEFICIOS DE MONITOREAR ESTE KPI CONSTANTEMENTE  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de monitorear este KPI constantemente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las organizaciones que revisan periódicamente la rotación de cartera
          pueden detectar tendencias antes de que afecten su estabilidad
          financiera. Esto les permite tomar decisiones preventivas y fortalecer
          continuamente sus procesos de crédito y cobranza.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Mayor control sobre las cuentas por cobrar.</li>

          <li>Reducción del riesgo de cartera vencida.</li>

          <li>Mejor flujo de caja.</li>

          <li>Planeación financiera más precisa.</li>

          <li>Mayor capacidad de inversión.</li>

          <li>Disminución de pérdidas por incobrabilidad.</li>

          <li>Evaluación objetiva del desempeño del área de cobranza.</li>
        </motion.ul>

        {/* COMO MEJORAR LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo mejorar la rotación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Incrementar la rotación de cartera no depende únicamente de cobrar más
          rápido. También implica fortalecer todo el proceso de crédito,
          facturación, seguimiento y recuperación de cartera. Cuando estos
          procesos trabajan de forma coordinada, la empresa reduce
          significativamente el riesgo de mora y mejora su liquidez.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las organizaciones con mejores indicadores suelen implementar
          estrategias preventivas que permiten detectar posibles incumplimientos
          antes de que las facturas lleguen a estados críticos de vencimiento.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Realizar estudios de crédito antes de aprobar nuevos clientes.
          </li>

          <li>Establecer límites de crédito según el perfil de riesgo.</li>

          <li>
            Emitir facturas inmediatamente después de prestar el servicio.
          </li>

          <li>Automatizar recordatorios de pago antes del vencimiento.</li>

          <li>Dar seguimiento permanente a las facturas próximas a vencer.</li>

          <li>
            Negociar acuerdos de pago cuando existan dificultades temporales.
          </li>

          <li>
            Escalar oportunamente hacia cobranza prejurídica y jurídica cuando
            sea necesario.
          </li>

          <li>
            Monitorear mensualmente los indicadores financieros de cartera.
          </li>
        </motion.ul>

        {/* ERRORES QUE REDUCEN LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que reducen la rotación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas presentan problemas de recuperación no porque sus
          clientes no quieran pagar, sino porque existen deficiencias en los
          procesos internos de crédito y cobranza. Detectar estos errores
          permite implementar acciones correctivas antes de que la cartera
          vencida continúe creciendo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Otorgar crédito sin validar la capacidad financiera del cliente.
          </li>

          <li>No actualizar la información de contacto.</li>

          <li>Esperar varios meses para iniciar la gestión de cobro.</li>

          <li>No realizar seguimiento después del vencimiento.</li>

          <li>Depender únicamente de llamadas telefónicas.</li>

          <li>No utilizar indicadores para medir el desempeño de cobranza.</li>

          <li>Permitir acumulación excesiva de facturas vencidas.</li>

          <li>No documentar compromisos y acuerdos de pago.</li>
        </motion.ul>

        {/* RELACION ENTRE LA ROTACION DE CARTERA Y LA LIQUIDEZ EMPRESARIAL  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Relación entre la rotación de cartera y la liquidez empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existe una relación directa entre la rotación de cartera y la liquidez
          de una organización. Cuando el dinero de las ventas a crédito regresa
          rápidamente, la empresa dispone de recursos suficientes para cumplir
          sus obligaciones financieras, invertir en crecimiento y reducir la
          necesidad de financiación externa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En cambio, una rotación lenta provoca mayores necesidades de capital
          de trabajo, incrementa los costos financieros y puede afectar la
          rentabilidad del negocio. Por ello, este indicador debe analizarse
          junto con otros KPIs como el DSO, la antigüedad de cartera y el
          porcentaje de recuperación.
        </motion.p>

        {/* CUANTO DEBE MEDIRSE LA ROTACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cada cuánto debe medirse la rotación de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La frecuencia dependerá del volumen de operaciones de la empresa. En
          organizaciones con un alto número de ventas a crédito suele ser
          recomendable calcular este indicador mensualmente. Otras empresas
          pueden hacerlo de forma trimestral o semestral, siempre que exista un
          seguimiento continuo del comportamiento de las cuentas por cobrar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo importante es mantener un histórico del indicador para identificar
          tendencias, comparar resultados entre períodos y evaluar si las
          estrategias implementadas realmente están mejorando la recuperación de
          cartera.
        </motion.p>

        {/* CONCLUSION  */}
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
          La rotación de cartera es mucho más que un indicador financiero.
          Representa la capacidad de una empresa para transformar sus ventas a
          crédito en efectivo y mantener un flujo de caja saludable. Analizar
          este KPI permite detectar riesgos, optimizar procesos de cobranza y
          fortalecer la estabilidad financiera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas que monitorean constantemente la rotación de cartera,
          revisan sus políticas de crédito y actúan oportunamente frente a la
          mora logran reducir pérdidas, mejorar la recuperación de cuentas por
          cobrar y aumentar la rentabilidad del negocio. Complementar este
          indicador con herramientas de automatización y procesos especializados
          de cobranza permite obtener mejores resultados a corto y largo plazo.
        </motion.p>

        {/* PREGUNTAS FRECUENTES  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre la rotación de cartera
        </motion.h2>

        <motion.h3>
          ¿Una rotación de cartera alta siempre es positiva?
        </motion.h3>

        <motion.p>
          En la mayoría de los casos sí, porque significa que la empresa
          recupera su dinero rápidamente. Sin embargo, debe analizarse junto con
          las políticas de crédito para verificar que no se estén perdiendo
          oportunidades comerciales por restricciones excesivas.
        </motion.p>

        <motion.h3>¿Qué sectores utilizan este indicador?</motion.h3>

        <motion.p>
          Es utilizado por empresas comerciales, industriales, de servicios,
          IPS, EPS, constructoras, distribuidores, entidades financieras y
          cualquier organización que venda productos o servicios a crédito.
        </motion.p>

        <motion.h3>
          ¿Cuál es la diferencia entre rotación de cartera y DSO?
        </motion.h3>

        <motion.p>
          La rotación de cartera indica cuántas veces se recuperan las cuentas
          por cobrar durante un período, mientras que el DSO muestra el número
          promedio de días que tarda un cliente en pagar sus obligaciones.
        </motion.p>
      </motion.article>
    </main>
  );
}
