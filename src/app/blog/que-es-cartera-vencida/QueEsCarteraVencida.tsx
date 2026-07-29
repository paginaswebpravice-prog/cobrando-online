"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QueEsCarteraVencida() {
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
          transition={{ delay: 0.2 }}
        >
          ¿Qué es la cartera vencida? Cómo identificarla, clasificarla y
          reducirla para proteger la liquidez de tu empresa
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          La <strong>cartera vencida</strong> es uno de los principales
          indicadores de riesgo financiero para cualquier empresa que vende
          productos o presta servicios a crédito. Cuando un cliente supera la
          fecha pactada para pagar una factura, un pagaré o cualquier obligación
          comercial, esa cuenta comienza a generar mora y aumenta el riesgo de
          convertirse en una pérdida económica.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Aunque muchas organizaciones consideran normal tener clientes
          atrasados, la realidad es que un crecimiento constante de la cartera
          vencida afecta el flujo de caja, incrementa los costos financieros,
          limita la capacidad de inversión y reduce la rentabilidad del negocio.
          Por esta razón, medir, controlar y recuperar oportunamente las cuentas
          por cobrar debe formar parte de cualquier estrategia de administración
          financiera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          En esta guía conocerás qué significa realmente la cartera vencida,
          cómo se clasifica según los días de mora, cuáles son sus principales
          causas, qué indicadores permiten medirla y qué acciones ayudan a
          disminuirla antes de que afecte la estabilidad financiera de la
          empresa.
        </motion.p>

        {/* QUE ES LA CARTERA VENCIDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Qué es la cartera vencida y por qué representa un riesgo para las
          empresas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La cartera vencida corresponde al conjunto de cuentas por cobrar cuyo
          plazo de pago ya expiró y que continúan pendientes de cancelación. En
          otras palabras, son obligaciones que el cliente debía pagar en una
          fecha determinada pero que, por diferentes razones, permanecen
          impagas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estas obligaciones pueden originarse en facturas electrónicas,
          contratos, pagarés, letras de cambio, órdenes de compra, prestación de
          servicios o cualquier operación comercial realizada a crédito.
          Independientemente del documento que respalde la obligación, una vez
          se supera la fecha de vencimiento comienza el periodo de mora y
          aumenta progresivamente el riesgo de incumplimiento definitivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mientras mayor sea el tiempo transcurrido sin recibir el pago, menores
          suelen ser las probabilidades de recuperación. Por ello, las empresas
          exitosas no esperan varios meses para actuar, sino que implementan
          procesos preventivos de seguimiento desde los primeros días
          posteriores al vencimiento de la factura.
        </motion.p>

        {/* DIFERENCIA ENTRE CARTERA CORRIENTE, CARTERA POR VENCER Y CARTERA VENCIDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Diferencia entre cartera corriente, cartera por vencer y cartera
          vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Uno de los errores más frecuentes consiste en considerar que toda la
          cartera representa el mismo nivel de riesgo. En realidad, las cuentas
          por cobrar se pueden dividir en diferentes categorías que permiten
          priorizar la gestión de cobranza y tomar mejores decisiones
          financieras.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <strong>Cartera corriente:</strong> obligaciones que aún se
            encuentran dentro del plazo pactado para el pago.
          </li>

          <li>
            <strong>Cartera por vencer:</strong> cuentas cuyo vencimiento se
            aproxima y sobre las cuales pueden realizarse recordatorios
            preventivos.
          </li>

          <li>
            <strong>Cartera vencida:</strong> obligaciones cuyo plazo expiró y
            requieren acciones de seguimiento, negociación o recuperación.
          </li>

          <li>
            <strong>Cartera de difícil recaudo:</strong> cuentas con largos
            periodos de mora cuya probabilidad de recuperación disminuye
            considerablemente.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta clasificación permite asignar recursos de cobranza de manera más
          eficiente, identificar clientes de alto riesgo y reducir el
          crecimiento de la mora antes de que afecte el flujo de caja del
          negocio.
        </motion.p>

        {/* CLASIFICACION DE LA CARTERA VENCIDA SEGUN LOS DIAS DE MORA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Cómo se clasifica la cartera vencida según los días de mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La clasificación de la cartera vencida permite conocer el nivel de
          riesgo de cada cuenta por cobrar y definir qué estrategia de
          recuperación debe implementarse. Aunque cada empresa puede establecer
          rangos diferentes según su actividad económica, la segmentación por
          días de mora es una de las prácticas más utilizadas para administrar
          el riesgo de crédito.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cuantos más días permanezca una obligación sin pagarse, mayor será la
          probabilidad de incumplimiento definitivo y más costosa resultará su
          recuperación. Por esta razón, muchas empresas asignan diferentes
          equipos de cobranza, políticas de negociación y niveles de seguimiento
          dependiendo de la antigüedad de cada deuda.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <strong>1 a 30 días de mora:</strong> corresponde al primer nivel de
            atraso. Generalmente basta con recordatorios automáticos, llamadas
            preventivas o correos electrónicos para lograr el recaudo.
          </li>

          <li>
            <strong>31 a 60 días:</strong> comienza a incrementarse el riesgo de
            incumplimiento. En esta etapa suelen realizarse negociaciones y
            seguimiento comercial más frecuente.
          </li>

          <li>
            <strong>61 a 90 días:</strong> la deuda requiere un control más
            estricto. Muchas empresas fortalecen la gestión de cobranza
            telefónica y analizan la posibilidad de acuerdos de pago.
          </li>

          <li>
            <strong>91 a 180 días:</strong> el riesgo financiero aumenta de
            forma considerable. En este punto normalmente intervienen áreas
            especializadas de recuperación de cartera.
          </li>

          <li>
            <strong>181 a 360 días:</strong> la probabilidad de recaudo
            disminuye y la empresa suele intensificar las estrategias de
            recuperación para evitar que continúe creciendo la mora.
          </li>

          <li>
            <strong>Más de 360 días:</strong> corresponde a obligaciones con un
            elevado nivel de riesgo que requieren un seguimiento permanente y
            una estrategia de recuperación mucho más especializada.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta segmentación facilita la priorización de esfuerzos, permite
          asignar recursos donde existe mayor probabilidad de recaudo y ayuda a
          disminuir el crecimiento de la cartera vencida antes de que afecte la
          estabilidad financiera de la empresa.
        </motion.p>

        {/* EJEMPLO PRÁCTICO DE CLASIFICACIÓN DE CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ejemplo práctico de clasificación de cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Supongamos que una empresa tiene 120 clientes con cuentas pendientes
          de pago. Después de revisar la antigüedad de la cartera obtiene el
          siguiente resultado:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>40 clientes presentan mora entre 1 y 30 días.</li>

          <li>30 clientes tienen obligaciones entre 31 y 60 días.</li>

          <li>22 clientes registran mora entre 61 y 90 días.</li>

          <li>18 clientes superan los 90 días de atraso.</li>

          <li>10 clientes llevan más de un año sin realizar pagos.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Gracias a esta clasificación la empresa puede asignar diferentes
          estrategias de recuperación. Los clientes con pocos días de atraso
          pueden responder positivamente a recordatorios automáticos, mientras
          que aquellos con mayores niveles de mora requieren negociaciones
          personalizadas y un seguimiento mucho más intensivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Además de mejorar la eficiencia del recaudo, este análisis facilita la
          elaboración de indicadores financieros, permite identificar tendencias
          de incumplimiento y ayuda a tomar decisiones oportunas para proteger
          la liquidez de la organización.
        </motion.p>

        {/* PORQUÉ AUMENTA LA CARTERA VENCIDA? PRINCIPALES CAUSAS DEL CRECIMIENTO DE LA MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué aumenta la cartera vencida? Principales causas del
          crecimiento de la mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La cartera vencida rara vez aparece de un momento a otro. Normalmente
          es el resultado de pequeños problemas que, cuando no se corrigen a
          tiempo, terminan convirtiéndose en un riesgo importante para la
          estabilidad financiera de la empresa. Identificar las causas permite
          actuar antes de que las cuentas por cobrar afecten la liquidez del
          negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Aunque cada organización enfrenta situaciones diferentes, existen
          factores que se repiten con frecuencia y que explican por qué una
          cartera comienza a deteriorarse con el paso del tiempo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            Otorgar créditos sin realizar un análisis previo de la capacidad de
            pago del cliente.
          </li>

          <li>
            No definir políticas claras sobre plazos, condiciones y fechas
            límite de pago.
          </li>

          <li>
            Errores administrativos en facturación o documentación que retrasan
            el proceso de recaudo.
          </li>

          <li>
            Ausencia de recordatorios preventivos antes del vencimiento de las
            obligaciones.
          </li>

          <li>Falta de seguimiento durante los primeros días de mora.</li>

          <li>
            Dificultades económicas o problemas de liquidez por parte del
            cliente.
          </li>

          <li>
            Procesos internos de cobranza poco organizados o sin indicadores de
            desempeño.
          </li>

          <li>
            Retrasar durante varios meses las acciones de recuperación de
            cartera.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La mayoría de estas situaciones pueden prevenirse mediante políticas
          de crédito bien definidas, procesos de seguimiento permanentes y
          estrategias de cobranza preventiva que permitan actuar antes de que la
          mora continúe aumentando.
        </motion.p>

        {/* COMO AFECTA LA CARTERA VENCIDA LA LIQUIDEZ Y LA RENTABILIDAD DE UNA EMPRESA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Cómo afecta la cartera vencida la liquidez y la rentabilidad de una
          empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La cartera vencida impacta mucho más que el recaudo de algunas
          facturas. A medida que aumentan las cuentas pendientes de pago, la
          empresa dispone de menos efectivo para cumplir oportunamente sus
          propias obligaciones financieras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esta situación puede afectar el pago de proveedores, salarios,
          impuestos, inversiones, compra de inventario y proyectos de
          crecimiento. Incluso compañías rentables pueden experimentar problemas
          de liquidez cuando una parte importante de sus ingresos permanece
          inmovilizada en cuentas por cobrar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>Disminuye el flujo de caja disponible.</li>

          <li>Aumentan las necesidades de financiación.</li>

          <li>Incrementan los costos de cobranza.</li>

          <li>Reduce la rentabilidad de las operaciones.</li>

          <li>Eleva el riesgo financiero del negocio.</li>

          <li>Puede afectar la capacidad de crecimiento de la empresa.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Por esta razón, controlar la cartera vencida no solo es una tarea del
          área financiera. También involucra a los equipos comerciales,
          administrativos, contables y de servicio al cliente.
        </motion.p>

        {/* COMO CALCULAR EL PORCENTAJE DE CARTERA VENCIDA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Cómo calcular el porcentaje de cartera vencida?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Uno de los indicadores más utilizados para evaluar la calidad de la
          cartera consiste en calcular qué porcentaje del total de las cuentas
          por cobrar ya se encuentra vencido.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          La fórmula es sencilla:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <strong>
              Porcentaje de cartera vencida = (Cartera vencida ÷ Cartera total)
              × 100
            </strong>
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Por ejemplo, si una empresa tiene cuentas por cobrar por $500.000.000
          y $80.000.000 corresponden a obligaciones vencidas, el indicador será:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            ($80.000.000 ÷ $500.000.000) × 100 = <strong>16%</strong>
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Este porcentaje permite comparar la evolución del riesgo financiero
          entre diferentes periodos, evaluar la efectividad de las estrategias
          de cobranza y establecer objetivos de mejora continua para reducir la
          mora.
        </motion.p>

        {/* COMO REDUCIR EL CRECIMIENTO DE LA CARTERA VENCIDA? */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Cómo reducir el crecimiento de la cartera vencida? Estrategias que
          realmente funcionan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reducir la cartera vencida no depende únicamente de cobrar cuando el
          cliente deja de pagar. Las empresas con mejores indicadores
          financieros implementan procesos preventivos desde el momento en que
          aprueban un crédito y mantienen un seguimiento permanente durante toda
          la relación comercial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Una estrategia integral de administración de cartera combina políticas
          de crédito, tecnología, seguimiento oportuno y comunicación constante
          con los clientes. De esta forma es posible disminuir
          significativamente el riesgo de mora y mejorar la recuperación de las
          cuentas por cobrar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>
            Analizar la capacidad de pago del cliente antes de otorgar crédito.
          </li>

          <li>
            Establecer políticas claras de crédito, plazos y condiciones de
            pago.
          </li>

          <li>
            Automatizar recordatorios antes y después del vencimiento de las
            facturas.
          </li>

          <li>Realizar seguimiento durante los primeros días de mora.</li>

          <li>
            Negociar acuerdos de pago cuando existan dificultades temporales de
            liquidez.
          </li>

          <li>Monitorear permanentemente los indicadores de cartera.</li>

          <li>
            Implementar procesos especializados de recuperación para clientes
            con mora avanzada.
          </li>

          <li>
            Revisar periódicamente las políticas internas de crédito y cobranza.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Estas acciones permiten intervenir la cartera antes de que el riesgo
          aumente y mejoran considerablemente el porcentaje de recuperación sin
          afectar la relación comercial con los clientes.
        </motion.p>

        {/* INDICADORES QUE TODA EMPRESA DEBERÍA MONITOREAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Indicadores que toda empresa debería monitorear para controlar la
          cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Gestionar correctamente las cuentas por cobrar requiere medir de forma
          permanente el comportamiento de la cartera. Los indicadores
          financieros permiten detectar tendencias, evaluar la efectividad de la
          cobranza y tomar decisiones oportunas antes de que la mora afecte la
          liquidez.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>Porcentaje de cartera vencida.</li>

          <li>Días promedio de recaudo (DSO).</li>

          <li>Rotación de cartera.</li>

          <li>Índice de morosidad.</li>

          <li>Valor recuperado mensualmente.</li>

          <li>Cumplimiento de acuerdos de pago.</li>

          <li>Recuperación por rango de antigüedad.</li>

          <li>Provisión de cartera.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El seguimiento periódico de estos indicadores facilita la planeación
          financiera y permite medir objetivamente el desempeño de las
          estrategias de recuperación implementadas por la empresa.
        </motion.p>

        {/* ERRORES FRECUENTES QUE INCREMENTAN LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Errores frecuentes que incrementan la cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Muchas organizaciones no presentan problemas de recaudo por falta de
          clientes, sino por errores internos en la administración del crédito y
          la cobranza. Corregir estas prácticas suele generar mejoras
          importantes en el flujo de caja.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <li>Otorgar crédito sin evaluar el riesgo del cliente.</li>

          <li>No actualizar la información de contacto.</li>

          <li>Esperar varios meses para iniciar la gestión de cobro.</li>

          <li>No medir indicadores financieros.</li>

          <li>Facturar con errores administrativos.</li>

          <li>No realizar seguimiento después de un acuerdo de pago.</li>

          <li>Carecer de procesos estandarizados de cobranza.</li>

          <li>No segmentar la cartera según los días de mora.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Evitar estos errores permite reducir considerablemente el crecimiento
          de la mora, mejorar la recuperación de cartera y proteger la
          rentabilidad del negocio en el largo plazo.
        </motion.p>

        {/* CONCLUSION */}
        <h2>Conclusión</h2>

        <p>
          La cartera vencida es uno de los principales retos financieros para
          las empresas. Comprender cómo se clasifica y actuar oportunamente
          permite reducir riesgos, mejorar el flujo de caja y aumentar las
          probabilidades de recuperación de las obligaciones pendientes.
        </p>
      </motion.article>
    </main>
  );
}
