"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ErroresAcuerdosPago() {
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
          15 errores en los acuerdos de pago que hacen perder dinero a las
          empresas (y cómo evitarlos)
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los acuerdos de pago son una de las estrategias más utilizadas para
          recuperar cartera sin recurrir inmediatamente a procesos judiciales.
          Sin embargo, muchas empresas pierden tiempo, dinero y oportunidades de
          recaudo porque negocian acuerdos mal estructurados, aceptan
          compromisos difíciles de cumplir o simplemente no realizan el
          seguimiento adecuado. En esta guía encontrarás los errores más
          frecuentes al negociar acuerdos de pago, cómo prevenirlos y las
          mejores prácticas para aumentar el porcentaje de cumplimiento y
          mejorar el flujo de caja de tu organización.
        </motion.p>

        {/* QUE ES UN ACUERDO DE PAGO Y POR QUE ES TAN IMPORTANTE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es un acuerdo de pago y por qué es tan importante para recuperar
          cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un acuerdo de pago es un compromiso formal mediante el cual el
          acreedor y el deudor establecen nuevas condiciones para cancelar una
          obligación pendiente. Generalmente incluye el valor adeudado, el
          número de cuotas, las fechas de pago, los medios autorizados para
          realizar los abonos y las consecuencias derivadas de un posible
          incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para muchas empresas, negociar un acuerdo representa la posibilidad de
          recuperar recursos sin iniciar un proceso de cobro jurídico, disminuir
          los costos de recuperación y mantener una relación comercial con el
          cliente. No obstante, cuando el acuerdo se diseña de manera
          incorrecta, termina convirtiéndose en un retraso adicional para el
          recaudo y en un incremento del riesgo financiero.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un buen acuerdo de pago debe ser claro, realista, verificable y fácil
          de controlar. Además, debe responder tanto a la capacidad de pago del
          deudor como a las necesidades de liquidez de la empresa acreedora. Por
          ello, no basta con obtener una promesa de pago; es indispensable
          documentar el compromiso y realizar un seguimiento permanente hasta el
          cumplimiento total de la obligación.
        </motion.p>

        {/* POR QUE FRACASAN TANTOS ACUERDOS DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué fracasan tantos acuerdos de pago?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gran cantidad de acuerdos fracasa porque las condiciones fueron
          definidas únicamente con el objetivo de cerrar la negociación, sin
          analizar la capacidad real de cumplimiento del cliente. En otros
          casos, el problema surge porque la empresa no documenta correctamente
          el acuerdo, no establece fechas precisas, no fija consecuencias por
          incumplimiento o simplemente deja de realizar seguimiento después de
          obtener la firma del deudor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Identificar estos errores permite aumentar el porcentaje de recaudo,
          reducir la cartera vencida y mejorar los indicadores de recuperación.
          A continuación encontrarás los errores que con mayor frecuencia
          afectan la efectividad de los acuerdos de pago en empresas de
          diferentes sectores económicos.
        </motion.p>

        {/* ERROR 1: NEGOCIAR SIN ANALIZAR LA CAPACIDAD REAL DE PAGO DEL DEUDOR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 1: negociar sin analizar la capacidad real de pago del deudor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más frecuentes consiste en aceptar cualquier
          propuesta de pago con el único objetivo de obtener un compromiso del
          cliente. Muchas veces las cuotas acordadas superan la capacidad
          financiera del deudor, por lo que el incumplimiento termina siendo
          casi inevitable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de definir un cronograma de pagos es recomendable conocer la
          situación económica del cliente, validar sus ingresos actuales,
          identificar otras obligaciones financieras y establecer cuotas que
          realmente puedan cumplirse durante toda la vigencia del acuerdo.
        </motion.p>

        {/* ERROR 2: REALIZAR ACUERDOSÚNICAMENTE DE MANERA VERBAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 2: realizar acuerdos únicamente de manera verbal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque muchos clientes manifiestan su intención de pagar mediante
          llamadas telefónicas o conversaciones por WhatsApp, confiar únicamente
          en acuerdos verbales representa un riesgo importante para cualquier
          empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un documento firmado permite dejar evidencia del compromiso adquirido,
          establecer obligaciones claras y facilitar cualquier actuación
          posterior si el cliente incumple las condiciones pactadas. Además,
          evita malentendidos sobre valores, fechas o modalidades de pago.
        </motion.p>

        {/* ERROR 3: ESTABLECER FECHAS AMBIGUAS O POCO PRECISAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 3: establecer fechas ambiguas o poco precisas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Expresiones como "la próxima semana", "a finales de mes" o "cuando
          reciba un pago" generan incertidumbre y dificultan el seguimiento de
          la obligación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Todo acuerdo debe establecer fechas exactas para cada cuota, indicando
          día, mes y año. De esta forma es posible programar recordatorios,
          automatizar el seguimiento y actuar rápidamente cuando se presente un
          incumplimiento.
        </motion.p>

        {/* ERROR 4: NO DEFINIR CONSECUENCIAS POR INCUMPLIMIENTO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 4: no definir consecuencias por incumplimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchos acuerdos describen únicamente las obligaciones del deudor, pero
          omiten indicar qué sucederá si alguna cuota no es pagada
          oportunamente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Establecer previamente las consecuencias del incumplimiento brinda
          mayor claridad para ambas partes y evita discusiones posteriores.
          Dependiendo del caso, pueden contemplarse intereses de mora, pérdida
          de beneficios, aceleración de las cuotas pendientes o reactivación de
          las acciones de cobranza.
        </motion.p>

        {/* ERROR 5: ABANDONAR EL SEGUIMIENTO DESPUÉS DE LA FIRMA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 5: abandonar el seguimiento después de la firma
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un error muy común consiste en pensar que el trabajo termina cuando el
          cliente firma el acuerdo. En realidad, ese momento marca el inicio del
          proceso de seguimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas con mejores indicadores de recuperación realizan
          recordatorios preventivos antes del vencimiento, verifican el
          cumplimiento de cada cuota, registran todas las comunicaciones y
          contactan rápidamente al cliente cuando detectan cualquier retraso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este seguimiento constante permite identificar problemas
          oportunamente, renegociar cuando sea necesario y reducir
          significativamente la probabilidad de que la cartera vuelva a entrar
          en mora.
        </motion.p>

        {/* ERROR 6: NO VERIFICAR LA INFORMACIÓN DEL DEUDOR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 6: no verificar la información del deudor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de firmar cualquier acuerdo es indispensable confirmar que los
          datos del cliente estén actualizados. Muchas empresas continúan
          enviando recordatorios a números telefónicos antiguos, direcciones de
          correo electrónico que ya no existen o domicilios desactualizados, lo
          que dificulta el seguimiento del compromiso adquirido.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Validar teléfonos, correos electrónicos, dirección, representante
          legal (en caso de empresas) y demás datos de contacto incrementa
          considerablemente las probabilidades de éxito durante el proceso de
          recuperación de cartera.
        </motion.p>

        {/* ERROR 7: ACEPTAR CUALQUIER PROPUESTA PARA CERRAR LA NEGOCIACIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 7: aceptar cualquier propuesta para cerrar la negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunos asesores de cobranza priorizan cerrar la negociación
          rápidamente sin evaluar si la propuesta realmente beneficia a la
          empresa. Esto puede generar acuerdos demasiado extensos, cuotas muy
          pequeñas o descuentos que afectan la rentabilidad de la recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un buen acuerdo debe buscar el equilibrio entre facilitar el pago del
          cliente y proteger los intereses financieros del acreedor. Negociar no
          significa aceptar cualquier condición.
        </motion.p>

        {/* ERROR 8: NO DOCUMENTAR TODOS LOS COMPROMISOS ADQUIRIDOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 8: no documentar todos los compromisos adquiridos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En algunos acuerdos únicamente se registra el valor de las cuotas,
          dejando por fuera aspectos fundamentales como descuentos autorizados,
          condonaciones, intereses aplicables, medios de pago o condiciones
          especiales pactadas durante la negociación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Toda condición acordada debe quedar expresamente consignada en el
          documento para evitar interpretaciones diferentes entre las partes y
          reducir futuros conflictos.
        </motion.p>

        {/* ERROR 9: NO AUTOMATIZAR LOS RECORDATORIOS DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 9: no automatizar los recordatorios de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esperar hasta que la cuota se encuentre vencida para contactar
          nuevamente al cliente disminuye las probabilidades de recaudo. Las
          empresas con mejores indicadores suelen enviar recordatorios
          preventivos varios días antes del vencimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hoy es posible automatizar estos avisos mediante correo electrónico,
          WhatsApp, SMS o llamadas programadas, lo que permite mantener contacto
          permanente con el cliente sin incrementar significativamente los
          costos operativos.
        </motion.p>

        {/* ERROR 10: NO MEDIR LOS RESULTADOS DE LOS ACUERDOS DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Error 10: no medir los resultados de los acuerdos de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones celebran cientos de acuerdos cada año, pero no
          cuentan con indicadores que permitan conocer cuántos realmente se
          cumplen, cuál es el porcentaje de recuperación obtenido o qué tipo de
          negociación genera mejores resultados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir indicadores como porcentaje de cumplimiento, valor recuperado,
          tiempo promedio de recaudo, acuerdos incumplidos y reincidencia
          permite optimizar la estrategia comercial y tomar decisiones basadas
          en información objetiva.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Porcentaje de acuerdos cumplidos.</li>
          <li>Valor total recuperado mediante acuerdos.</li>
          <li>Tiempo promedio de cumplimiento.</li>
          <li>Porcentaje de reincidencia de mora.</li>
          <li>Valor recuperado frente al valor negociado.</li>
          <li>Tiempo promedio de recuperación de cartera.</li>
        </motion.ul>

        {/* BUENAS PRACTICAS PARA LOGRAR ACUERDOS DE PAGO QUE REALMENTE FUNCIONEN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Buenas prácticas para lograr acuerdos de pago que realmente funcionen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un acuerdo de pago exitoso no depende únicamente de la voluntad del
          deudor. También requiere una metodología clara por parte de la
          empresa, políticas de crédito definidas y un proceso de seguimiento
          continuo. Cuando la negociación se estructura correctamente, aumenta
          considerablemente la probabilidad de recuperar la cartera sin
          necesidad de iniciar procesos judiciales.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Formalizar todos los compromisos por escrito.</li>
          <li>Solicitar firma física o electrónica.</li>
          <li>Definir fechas exactas para cada cuota.</li>
          <li>Establecer medios de pago autorizados.</li>
          <li>Documentar intereses, descuentos y beneficios.</li>
          <li>Programar recordatorios automáticos.</li>
          <li>Realizar seguimiento antes y después del vencimiento.</li>
          <li>Actualizar permanentemente los datos del cliente.</li>
          <li>Registrar todas las conversaciones.</li>
          <li>Medir periódicamente los resultados obtenidos.</li>
        </motion.ul>

        {/* INFORMACIÓN QUE NUNCA DEBE FALTAR EN UN ACUERDO DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Información que nunca debe faltar en un acuerdo de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras más completo sea el documento, menores serán las
          posibilidades de conflictos futuros. Por ello es recomendable incluir
          todos los elementos que permitan identificar claramente la obligación
          y las responsabilidades de cada una de las partes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Datos completos del acreedor y del deudor.</li>
          <li>Número de identificación.</li>
          <li>Valor total de la obligación.</li>
          <li>Saldo pendiente.</li>
          <li>Número de cuotas.</li>
          <li>Valor de cada cuota.</li>
          <li>Calendario de pagos.</li>
          <li>Forma y medios de pago.</li>
          <li>Intereses pactados.</li>
          <li>Consecuencias por incumplimiento.</li>
          <li>Firma de las partes.</li>
        </motion.ul>

        {/* SEÑALES DE ALERTA DURANTE UNA NEGOCIACIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Señales de alerta durante una negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen comportamientos que pueden indicar un alto riesgo de
          incumplimiento. Detectarlos oportunamente permite ajustar las
          condiciones del acuerdo o tomar medidas adicionales antes de que la
          cartera continúe deteriorándose.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Cambios frecuentes en las fechas propuestas.</li>
          <li>Falta de documentos de soporte.</li>
          <li>Promesas de pago repetidas sin cumplimiento.</li>
          <li>Información financiera contradictoria.</li>
          <li>Dificultad para contactar al cliente.</li>
          <li>Incumplimientos anteriores.</li>
          <li>Solicitudes permanentes de ampliación de plazos.</li>
        </motion.ul>

        {/* CUANDO CONVIENE RENEGOCIAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene renegociar un acuerdo de pago?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todos los incumplimientos justifican iniciar inmediatamente
          acciones judiciales. En algunos casos resulta más eficiente renegociar
          el acuerdo, especialmente cuando el cliente demuestra voluntad de pago
          y presenta razones objetivas que justifican el retraso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La renegociación debe realizarse con criterios objetivos, evitando
          extender indefinidamente la obligación o aceptar condiciones que
          perjudiquen la recuperación de la cartera.
        </motion.p>

        {/*  INDICADORES  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores para evaluar si los acuerdos de pago están funcionando
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Toda estrategia de recuperación debe medirse mediante indicadores.
          Esto permite identificar oportunidades de mejora y conocer el
          verdadero impacto financiero de los acuerdos de pago implementados por
          la empresa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Tasa de cumplimiento de acuerdos.</li>
          <li>Valor recuperado mensualmente.</li>
          <li>Porcentaje de acuerdos incumplidos.</li>
          <li>Tiempo promedio de recaudo.</li>
          <li>Disminución de la cartera vencida.</li>
          <li>Reducción del DSO.</li>
          <li>Recuperación por asesor de cobranza.</li>
        </motion.ul>

        {/* CHECKLIST */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Checklist antes de firmar un acuerdo de pago
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>✓ ¿Los datos del cliente están actualizados?</li>
          <li>✓ ¿El valor de la deuda fue validado?</li>
          <li>✓ ¿Las cuotas son realistas?</li>
          <li>✓ ¿Las fechas son específicas?</li>
          <li>✓ ¿Se establecieron consecuencias por incumplimiento?</li>
          <li>✓ ¿El documento quedó firmado?</li>
          <li>✓ ¿Se programaron recordatorios automáticos?</li>
          <li>✓ ¿Existe un responsable del seguimiento?</li>
          <li>✓ ¿Se archivaron todos los soportes?</li>
        </motion.ul>

        {/* CONCLUSION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: un buen acuerdo de pago comienza con una buena negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los acuerdos de pago continúan siendo una de las herramientas más
          efectivas para recuperar cartera sin acudir inmediatamente a procesos
          judiciales. Sin embargo, su éxito depende de una adecuada planeación,
          una negociación objetiva y un seguimiento constante. Cuando estos
          elementos no existen, los acuerdos suelen convertirse únicamente en
          una promesa de pago que nunca llega a cumplirse.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Analizar la capacidad de pago del cliente, documentar correctamente
          los compromisos, establecer consecuencias por incumplimiento y medir
          los resultados mediante indicadores son prácticas que permiten
          incrementar el porcentaje de recuperación y disminuir la cartera
          vencida. Asimismo, la automatización de recordatorios y el seguimiento
          oportuno contribuyen a que los clientes mantengan sus compromisos y
          reduzcan el riesgo de mora.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si tu organización administra un volumen importante de cuentas por
          cobrar, implementar políticas claras para negociar acuerdos de pago
          puede marcar la diferencia entre una cartera que se deteriora
          constantemente y una gestión eficiente que fortalece el flujo de caja
          y la liquidez empresarial.
        </motion.p>

        {/* PREGUNTAS FRECUENTES */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre acuerdos de pago
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Un acuerdo de pago elimina la deuda?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No. El acuerdo únicamente establece una nueva forma de cumplir la
          obligación. La deuda continúa existiendo hasta que sea cancelada
          totalmente conforme a las condiciones pactadas.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuántas cuotas debe tener un acuerdo de pago?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un número fijo. Lo recomendable es que el cronograma permita
          al deudor cumplir sin afectar innecesariamente el flujo de caja del
          acreedor.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué hacer cuando un acuerdo de pago es incumplido?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Lo primero es verificar la causa del incumplimiento. Dependiendo del
          caso, puede evaluarse una renegociación, aplicar las consecuencias
          pactadas en el acuerdo o continuar con las acciones de recuperación de
          cartera que correspondan.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Conviene automatizar el seguimiento de los acuerdos?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sí. Automatizar recordatorios por correo electrónico, WhatsApp o SMS
          reduce la carga operativa del equipo de cobranza, mejora la
          comunicación con los clientes y disminuye la probabilidad de
          incumplimientos por olvido.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo medir si los acuerdos de pago realmente funcionan?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunas métricas recomendadas son el porcentaje de acuerdos cumplidos,
          el valor recuperado, la reducción de la cartera vencida, el tiempo
          promedio de recaudo, el DSO y la tasa de reincidencia de mora. Estos
          indicadores permiten optimizar continuamente la estrategia de
          recuperación de cartera.
        </motion.p>
      </motion.article>
    </main>
  );
}
