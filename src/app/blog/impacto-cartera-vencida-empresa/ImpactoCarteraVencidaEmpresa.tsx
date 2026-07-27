"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ImpactoCarteraVencidaEmpresa() {
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
          Cómo la cartera vencida afecta la liquidez, la rentabilidad y el
          crecimiento de una empresa en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          La cartera vencida representa uno de los mayores riesgos financieros
          para cualquier empresa que venda productos o servicios a crédito.
          Cuando los clientes incumplen sus obligaciones de pago, el problema no
          se limita a una factura pendiente: disminuye la liquidez, afecta el
          flujo de caja, incrementa los costos operativos, reduce la
          rentabilidad y limita la capacidad de inversión y crecimiento del
          negocio. En esta guía conocerás cómo impacta la cartera vencida en las
          empresas, cuáles son sus principales consecuencias, qué indicadores
          financieros debes monitorear y qué estrategias permiten reducir la
          mora antes de que sea necesario iniciar un proceso de cobro
          prejurídico o jurídico.
        </motion.p>

        {/*  QUE ES LA CARTERA VENCIDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera vencida y por qué representa un riesgo para
          cualquier empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Se considera cartera vencida al conjunto de facturas, contratos,
          pagarés u otras obligaciones que no fueron pagadas dentro del plazo
          acordado. Aunque un retraso ocasional puede ser normal, cuando las
          cuentas por cobrar vencidas aumentan de forma constante comienzan a
          afectar la estabilidad financiera de la empresa y disminuyen la
          disponibilidad de recursos para operar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entre mayor sea el tiempo de mora, menores suelen ser las
          probabilidades de recuperar el dinero en su totalidad. Además, la
          organización debe invertir más recursos en llamadas, negociaciones,
          seguimiento administrativo y, en algunos casos, procesos de cobro
          prejurídico o cobro jurídico para recuperar los valores adeudados.
        </motion.p>

        {/*  COMO LA CARTERA VENCIDA REDUCE LA LIQUIDEZ */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo la cartera vencida reduce la liquidez y pone en riesgo el flujo
          de caja empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El primer impacto de una cartera vencida elevada se refleja en la
          liquidez de la empresa. Cada factura pendiente representa dinero que
          debía ingresar para cubrir gastos operativos, pagar proveedores,
          cumplir obligaciones tributarias y mantener la operación diaria.
          Cuando esos recursos no llegan en la fecha prevista, la organización
          debe buscar otras fuentes de financiación o postergar decisiones
          importantes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La disminución del flujo de caja genera un efecto en cadena. Las
          empresas pueden presentar retrasos en el pago de nómina,
          incumplimientos con proveedores, dificultades para adquirir inventario
          y menor capacidad para responder a imprevistos. Incluso organizaciones
          con buenas ventas pueden enfrentar problemas financieros simplemente
          porque no logran convertir sus cuentas por cobrar en efectivo
          oportunamente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A medida que la cartera envejece, el riesgo aumenta y la empresa
          pierde flexibilidad para invertir, crecer o aprovechar nuevas
          oportunidades de negocio. Por esta razón, una gestión de cobranza
          preventiva y un seguimiento constante son fundamentales para proteger
          la estabilidad financiera de cualquier organización.
        </motion.p>

        {/*  CONSECUENCIAS DE LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          7 consecuencias de tener una cartera vencida alta en una empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas consideran que una factura vencida solo representa un
          pago retrasado. Sin embargo, cuando la mora comienza a crecer,
          aparecen efectos que afectan diferentes áreas del negocio y pueden
          comprometer su estabilidad financiera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Disminución de la liquidez disponible.</li>
          <li>Incremento de los costos administrativos y de cobranza.</li>
          <li>Reducción de la rentabilidad del negocio.</li>
          <li>Mayor necesidad de créditos o financiación externa.</li>
          <li>Retraso en inversiones y proyectos de crecimiento.</li>
          <li>
            Deterioro de indicadores financieros como el DSO y la rotación de
            cartera.
          </li>
          <li>
            Mayor probabilidad de pérdidas definitivas por cuentas incobrables.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuanto más tiempo permanece una obligación sin pagarse, mayores son
          los recursos que la empresa deberá destinar para recuperarla y menores
          las probabilidades de obtener el pago total de la deuda.
        </motion.p>

        {/*  EL AUMENTO DEL RIESGO FINANCIERO CUANDO LAS CUENTAS POR COBRAR PERMANECEN VENCIDAS DURANTE MESES */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El aumento del riesgo financiero cuando las cuentas por cobrar
          permanecen vencidas durante meses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A medida que una obligación permanece en mora durante un mayor tiempo,
          la probabilidad de recuperación disminuye considerablemente. Cambios
          en la situación económica del deudor, problemas de liquidez, procesos
          de insolvencia o incluso el cierre de operaciones pueden hacer que
          recuperar el dinero sea cada vez más difícil.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este incremento del riesgo financiero obliga a las empresas a
          constituir provisiones contables sobre las cuentas por cobrar,
          afectando directamente los estados financieros y reduciendo la
          utilidad del período. Además, incrementa la incertidumbre sobre los
          ingresos futuros y dificulta la planificación financiera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras más rápido se inicie una estrategia de recuperación de
          cartera, mayores serán las posibilidades de recaudo y menor el impacto
          financiero para la organización.
        </motion.p>

        {/*  ¿CÓMO IDENTIFICAR QUE LA CARTERA VENCIDA YA ESTÁ AFECTANDO LA ESTABILIDAD DE LA EMPRESA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo identificar que la cartera vencida ya está afectando la
          estabilidad de la empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones detectan el problema cuando la falta de liquidez
          ya ha generado consecuencias importantes. Sin embargo, existen señales
          tempranas que permiten actuar antes de que la situación se convierta
          en un problema financiero mayor.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>El flujo de caja disponible disminuye mes tras mes.</li>
          <li>Los días promedio de cobro aumentan constantemente.</li>
          <li>
            Las cuentas por cobrar representan una parte creciente de los
            activos.
          </li>
          <li>Se presentan retrasos para pagar proveedores.</li>
          <li>
            La empresa necesita solicitar créditos para cubrir gastos
            operativos.
          </li>
          <li>Las provisiones por cartera aumentan cada trimestre.</li>
          <li>Los clientes incumplen acuerdos de pago de manera recurrente.</li>
          <li>
            El equipo dedica más tiempo a cobrar que a generar nuevas ventas.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Detectar estas señales oportunamente permite implementar estrategias
          de cobranza preventiva, fortalecer el seguimiento de cartera y reducir
          el riesgo de pérdidas financieras.
        </motion.p>

        {/*  EL IMPACTO DE LA CARTERA VENCIDA SOBRE LA RENTABILIDAD Y LAS UTILIDADES DE LA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El impacto de la cartera vencida sobre la rentabilidad y las
          utilidades de la empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La rentabilidad de una empresa no depende únicamente del volumen de
          ventas, sino también de la capacidad para convertir esas ventas en
          dinero disponible. Cuando una parte importante de las cuentas por
          cobrar permanece vencida, los ingresos proyectados dejan de
          convertirse en flujo de efectivo y comienzan a aumentar los costos
          asociados a la recuperación de esas obligaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A medida que aumenta la mora, también crecen los gastos
          administrativos, jurídicos y financieros relacionados con la cobranza.
          Esto reduce el margen operativo y afecta directamente las utilidades
          del negocio, incluso cuando las ventas continúan creciendo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En casos extremos, una cartera vencida elevada puede obligar a
          reconocer pérdidas por cuentas incobrables, disminuyendo
          significativamente los resultados financieros del período y afectando
          la confianza de inversionistas y entidades financieras.
        </motion.p>

        {/*  INDICADORES FINANCIEROS QUE MUESTRAN CUÁNDO LA CARTERA VENCIDA ESTÁ FUERA DE CONTROL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores financieros que muestran cuándo la cartera vencida está
          fuera de control
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No basta con conocer el valor total de la cartera pendiente. Las
          empresas deben monitorear indicadores que permitan identificar
          tendencias de mora y evaluar si las estrategias de recuperación
          realmente están funcionando.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Días promedio de cobro (DSO).</li>
          <li>Rotación de cartera.</li>
          <li>Porcentaje de cartera vencida frente a la cartera total.</li>
          <li>Índice de recuperación mensual.</li>
          <li>Antigüedad promedio de las cuentas por cobrar.</li>
          <li>Valor recuperado frente al valor facturado.</li>
          <li>Clientes reincidentes en mora.</li>
          <li>Porcentaje de acuerdos de pago incumplidos.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Analizar estos indicadores de manera periódica facilita la toma de
          decisiones y permite intervenir antes de que el crecimiento de la
          cartera vencida comprometa la estabilidad financiera de la empresa.
        </motion.p>

        {/*  ¿QUÉ TIPO DE EMPRESAS SON LAS ÁFECTADAS POR UNA CARTERA VENCIDA ELEVADA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué tipo de empresas son las más afectadas por una cartera vencida
          elevada?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque cualquier organización que venda a crédito puede sufrir
          problemas de cartera, existen sectores donde el impacto financiero
          suele ser mucho mayor debido al volumen de facturación, los largos
          plazos de pago y la alta concentración de clientes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Empresas de distribución y comercialización.</li>
          <li>Constructoras y empresas del sector inmobiliario.</li>
          <li>IPS, clínicas y prestadores de servicios de salud.</li>
          <li>Empresas de transporte y logística.</li>
          <li>Fabricantes industriales.</li>
          <li>Empresas de tecnología y software B2B.</li>
          <li>Firmas de consultoría y servicios profesionales.</li>
          <li>Mayoristas y proveedores corporativos.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En estos sectores resulta indispensable contar con políticas de
          crédito claras, procesos de seguimiento continuo y estrategias de
          recuperación que permitan mantener controladas las cuentas por cobrar
          y reducir la exposición al riesgo financiero.
        </motion.p>

        {/*  EJEMPLO PRÁCTICO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico: cómo una cartera vencida puede afectar la
          estabilidad financiera de una empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para comprender mejor el impacto de la cartera vencida, imaginemos una
          empresa que vende mensualmente $300 millones a crédito y espera
          recaudar esos recursos para cubrir nómina, proveedores, impuestos e
          inversiones operativas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si aproximadamente el 35 % de las facturas supera los 90 días de mora,
          la organización dejará de recibir oportunamente una parte importante
          de sus ingresos. Como consecuencia, comenzará a enfrentar dificultades
          para cumplir sus obligaciones financieras y mantener el ritmo normal
          de sus operaciones.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Disminuye el flujo de caja disponible.</li>
          <li>Se retrasan los pagos a proveedores.</li>
          <li>Puede ser necesario solicitar créditos bancarios.</li>
          <li>Aumentan los costos financieros por intereses.</li>
          <li>Se incrementan los gastos administrativos de cobranza.</li>
          <li>Se reducen las utilidades del negocio.</li>
          <li>Se aplazan inversiones y proyectos de crecimiento.</li>
          <li>Disminuye la capacidad de negociación frente a proveedores.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque este ejemplo es ilustrativo, refleja una situación que
          enfrentan muchas empresas cuando no cuentan con procesos eficientes de
          seguimiento y recuperación de cartera. Cuanto más tiempo permanece una
          obligación sin pagarse, mayor es el riesgo de que se convierta en una
          cuenta de difícil recaudo o incluso en una pérdida definitiva.
        </motion.p>

        {/*  CHECKLIST  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Checklist: señales de que la cartera vencida está afectando la salud
          financiera de tu empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si identificas varias de las siguientes situaciones, es probable que
          la cartera vencida ya esté impactando la liquidez y la estabilidad
          financiera de tu organización.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            El flujo de caja es insuficiente para cubrir los gastos mensuales.
          </li>
          <li>Los clientes acumulan varios meses de mora.</li>
          <li>Los acuerdos de pago se incumplen constantemente.</li>
          <li>La empresa debe recurrir frecuentemente a créditos bancarios.</li>
          <li>Los indicadores de cartera empeoran cada mes.</li>
          <li>El equipo comercial dedica demasiado tiempo a cobrar.</li>
          <li>No existen políticas claras de crédito.</li>
          <li>No se realiza seguimiento periódico a las cuentas por cobrar.</li>
          <li>
            La recuperación de cartera disminuye trimestre tras trimestre.
          </li>
          <li>
            Se incrementan las provisiones por cuentas de difícil recaudo.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Detectar estas señales de forma temprana permite implementar medidas
          correctivas antes de que la cartera vencida comprometa la operación
          del negocio y reduzca significativamente la rentabilidad de la
          empresa.
        </motion.p>

        {/*  CONSEQUENCIAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Consecuencias de no controlar la cartera vencida a tiempo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más comunes consiste en considerar que una factura
          en mora puede esperar algunos meses antes de iniciar una gestión de
          cobranza. Sin embargo, cuanto más tiempo permanece una obligación sin
          recuperarse, mayor es el riesgo financiero para la empresa y menores
          son las probabilidades de recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diversos estudios sobre recuperación de cartera muestran que las
          posibilidades de recuperar una deuda disminuyen conforme aumentan los
          días de mora. Además, la organización debe destinar más recursos
          humanos, tecnológicos y jurídicos para lograr el mismo resultado que
          habría obtenido actuando oportunamente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Disminuye la probabilidad de recuperar el valor total de la deuda.
          </li>
          <li>Incrementan los costos administrativos de cobranza.</li>
          <li>Se deteriora la planeación financiera del negocio.</li>
          <li>La empresa pierde capacidad para invertir y crecer.</li>
          <li>Se afectan los indicadores de liquidez y rentabilidad.</li>
          <li>Puede aumentar la necesidad de financiación externa.</li>
          <li>Se incrementa el riesgo de pérdidas contables.</li>
          <li>Los procesos de cobro suelen volverse más largos y complejos.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas que implementan políticas de seguimiento
          temprano, segmentación de clientes y estrategias de recuperación desde
          los primeros días de mora suelen obtener mejores resultados que
          aquellas que esperan varios meses para iniciar el proceso de cobranza.
        </motion.p>

        {/*  CONCLUSION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: reducir el impacto de la cartera vencida comienza con una
          gestión de cobranza oportuna
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida representa mucho más que un conjunto de facturas
          sin pagar. Su impacto puede extenderse a prácticamente todas las áreas
          de una empresa, afectando la liquidez, el flujo de caja, la
          rentabilidad, la capacidad de inversión y la estabilidad financiera a
          corto y largo plazo. A medida que las cuentas por cobrar permanecen en
          mora, aumentan los costos de recuperación y disminuyen las
          probabilidades de recaudar el valor total de las obligaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Evitar este escenario requiere implementar una estrategia integral de
          gestión de cartera que combine políticas de crédito claras,
          seguimiento permanente, monitoreo de indicadores, comunicación
          oportuna con los clientes y acciones de cobranza preventivas,
          prejurídicas y, cuando sea necesario, jurídicas. Una empresa que
          controla adecuadamente sus cuentas por cobrar no solo recupera su
          dinero con mayor rapidez, sino que también fortalece su capacidad para
          crecer de manera sostenible y reducir los riesgos financieros.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si tu organización presenta un incremento constante en la cartera
          vencida o dificultades para recuperar pagos, actuar de forma temprana
          puede marcar la diferencia entre mantener un flujo de caja saludable o
          enfrentar problemas de liquidez que afecten la operación del negocio.
          Implementar procesos de cobranza eficientes y apoyarse en herramientas
          o especialistas en recuperación de cartera permite mejorar los índices
          de recaudo y proteger la salud financiera de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
