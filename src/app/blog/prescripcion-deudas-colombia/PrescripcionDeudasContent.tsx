"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PrescripcionDeudasContent() {
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
          Recuperación de Cartera Empresarial
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Cuándo prescribe una deuda en Colombia? Plazos, tipos de obligaciones
          y cómo evitar perder el derecho a cobrar
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La prescripción de una deuda es uno de los mayores riesgos para
          cualquier empresa que vende a crédito. Cuando una obligación supera el
          plazo legal sin que el acreedor realice las actuaciones necesarias,
          puede perder la posibilidad de exigir judicialmente el pago. Esto se
          traduce en pérdidas económicas, deterioro del flujo de caja y aumento
          de la cartera castigada.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Muchas organizaciones descubren demasiado tarde que algunas de sus
          facturas, pagarés o contratos están próximos a prescribir. En ese
          momento las opciones para recuperar el dinero son mucho más limitadas.
          Por ello, conocer los plazos legales y establecer procesos de
          seguimiento permanente resulta indispensable para proteger la liquidez
          del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          En esta guía encontrarás cuáles son los principales términos de
          prescripción en Colombia, desde cuándo empiezan a contarse, qué hechos
          pueden interrumpirlos y qué estrategias utilizan las empresas para
          recuperar su cartera antes de perder el derecho de cobro.
        </motion.p>

        {/* QUE SIGNIFICA QUE UNA DEUDA PRESCRIBA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué significa que una deuda prescriba y por qué representa un riesgo
          para las empresas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La prescripción es una figura jurídica mediante la cual el acreedor
          puede perder la posibilidad de exigir judicialmente el cumplimiento de
          una obligación cuando transcurre el término establecido por la ley sin
          haber ejercido oportunamente las acciones correspondientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es importante entender que la deuda no desaparece automáticamente por
          el simple paso del tiempo. Lo que puede extinguirse es la posibilidad
          de hacer efectivo el cobro por la vía judicial cuando se cumplen los
          requisitos legales para que opere la prescripción.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas esto implica un riesgo financiero considerable, ya
          que una gestión tardía puede convertir una cuenta por cobrar en una
          pérdida prácticamente irrecuperable desde el punto de vista jurídico.
        </motion.p>

        {/* DIFERENCIA ENTRE PRESCRIPCION, VENCIMIENTO Y CADUCIDAD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencia entre prescripción, vencimiento y caducidad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque suelen confundirse, estos conceptos tienen significados
          completamente diferentes dentro de la gestión de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Vencimiento:</strong> corresponde a la fecha pactada para
            que el deudor realice el pago.
          </li>

          <li>
            <strong>Mora:</strong> inicia cuando el cliente incumple la fecha de
            vencimiento y la obligación continúa pendiente.
          </li>

          <li>
            <strong>Prescripción:</strong> ocurre cuando transcurre el término
            legal sin ejercer oportunamente las acciones de cobro.
          </li>

          <li>
            <strong>Caducidad:</strong> aplica únicamente para determinadas
            acciones previstas expresamente por la ley y posee efectos distintos
            a la prescripción.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferenciar estos conceptos permite diseñar mejores estrategias de
          recuperación de cartera y priorizar aquellas obligaciones cuyo término
          legal se encuentra próximo a vencer.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Plazos de prescripción en Colombia: ¿cuánto tiempo tienes para cobrar
          una factura, un pagaré o un contrato?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más frecuentes en las empresas consiste en pensar
          que todas las deudas prescriben en el mismo plazo. En realidad, el
          tiempo depende del documento que respalde la obligación y de la acción
          judicial que corresponda ejercer. Por esta razón resulta indispensable
          identificar correctamente el soporte de la deuda antes de iniciar una
          estrategia de recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Llevar un control sobre estas fechas permite priorizar las
          obligaciones con mayor riesgo de prescripción y tomar decisiones antes
          de perder la posibilidad de exigir judicialmente el pago.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Pagarés:</strong> normalmente la acción cambiaria prescribe
            a los <strong>3 años</strong>.
          </li>

          <li>
            <strong>Letras de cambio:</strong> generalmente cuentan con un plazo
            de <strong>3 años</strong> para ejercer la acción correspondiente.
          </li>

          <li>
            <strong>Facturas que prestan mérito ejecutivo:</strong> por regla
            general también deben reclamarse oportunamente antes de que opere la
            prescripción.
          </li>

          <li>
            <strong>Contratos civiles y comerciales:</strong> dependiendo del
            tipo de obligación pueden encontrarse sujetos a términos de hasta
            <strong> 5 años</strong>.
          </li>

          <li>
            <strong>Sentencias judiciales:</strong> también poseen términos
            específicos para exigir su cumplimiento.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque estos plazos sirven como referencia general, cada caso debe
          analizarse de acuerdo con el documento que origina la obligación, la
          naturaleza del negocio y las actuaciones que se hayan realizado
          durante la vida de la deuda.
        </motion.p>

        {/*  DOCUMENTOS QUE PRESENTAN MAYOR RIESGO DE PRESCRIPCION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos presentan mayor riesgo de prescripción?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las cuentas por cobrar tienen el mismo nivel de riesgo.
          Existen documentos que requieren una vigilancia mucho más estricta
          debido a que su término puede transcurrir rápidamente si la empresa no
          implementa controles adecuados.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pagarés firmados por clientes.</li>

          <li>Facturas de venta pendientes de pago.</li>

          <li>Letras de cambio.</li>

          <li>Contratos de prestación de servicios.</li>

          <li>Reconocimientos escritos de deuda.</li>

          <li>Acuerdos de pago incumplidos.</li>

          <li>Títulos ejecutivos utilizados para procesos de cobro.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas con grandes volúmenes de cartera suelen apoyarse en
          sistemas de gestión que alertan cuáles obligaciones están próximas a
          cumplir los términos legales, permitiendo iniciar negociaciones o
          acciones judiciales antes de que sea demasiado tarde.
        </motion.p>

        {/*  EJEMPLO PRACTICO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico: cómo una empresa puede perder el derecho a cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Imagine una empresa que otorgó crédito a un cliente respaldado con un
          pagaré. La obligación venció hace varios años y, durante ese tiempo,
          la empresa únicamente realizó llamadas telefónicas y envió correos
          electrónicos solicitando el pago, pero nunca inició un proceso de
          cobro ni obtuvo un reconocimiento formal de la deuda.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el término legal transcurre sin que exista una actuación que
          interrumpa la prescripción, el acreedor puede encontrarse con serias
          dificultades para recuperar judicialmente el dinero. Por eso la
          gestión preventiva resulta mucho menos costosa que enfrentar una
          cartera ya prescrita.
        </motion.p>

        {/*  DESDE CUANDO EMPIEZA A CONTARSE LA PRESCRIPCION DE UNA DEUDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Desde cuándo empieza a contarse la prescripción de una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una de las preguntas más frecuentes entre empresarios y responsables
          de cartera es cuándo comienza realmente el término de prescripción. La
          respuesta depende del tipo de obligación, pero como regla general el
          conteo inicia desde el momento en que la deuda se vuelve exigible, es
          decir, cuando llega la fecha pactada para el pago y el deudor no
          cumple con su obligación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desde ese momento empieza a correr el término legal. Si durante ese
          periodo el acreedor no realiza actuaciones que interrumpan la
          prescripción, podría perder la posibilidad de reclamar judicialmente
          el dinero una vez expire el plazo correspondiente.
        </motion.p>

        {/*  FACTORES QUE PUEDE MODIFICAR EL CONTEO DEL TERMINO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que pueden modificar el conteo del término
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque existe un término general de prescripción para cada tipo de
          obligación, determinadas actuaciones pueden interrumpir ese conteo y
          hacer que el plazo vuelva a comenzar conforme a las reglas aplicables
          en cada caso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Reconocimiento expreso de la deuda por parte del deudor.</li>

          <li>Firma de un acuerdo de pago.</li>

          <li>Realización de un abono parcial.</li>

          <li>Inicio oportuno del proceso judicial correspondiente.</li>

          <li>Otras actuaciones previstas por la legislación aplicable.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón resulta fundamental documentar todas las gestiones de
          cobro, ya que un correo, un acuerdo firmado o un pago parcial pueden
          tener efectos importantes dentro del análisis jurídico de cada caso.
        </motion.p>

        {/*  ERRORES QUE HACEN QUE MUCHAS EMPRESAS PIERDAN EL DERECHO A COBRAR  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que hacen que muchas empresas pierdan el derecho a cobrar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En la práctica, la mayoría de las deudas no prescriben porque el
          cliente desaparezca, sino porque la empresa no cuenta con procesos
          internos que permitan controlar el paso del tiempo y actuar antes del
          vencimiento de los términos legales.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Confiar únicamente en llamadas telefónicas.</li>

          <li>No llevar un calendario de vencimientos.</li>

          <li>Esperar demasiado para iniciar el cobro jurídico.</li>

          <li>No conservar soportes de los acuerdos realizados.</li>

          <li>Perder documentos originales como pagarés o títulos valores.</li>

          <li>No actualizar la información de contacto del cliente.</li>

          <li>
            Realizar seguimiento únicamente cuando la cartera ya supera varios
            meses de mora.
          </li>
        </motion.ul>

        {/*  COMO IDENTIFICAR UNA DEUDA QUE ESTÁ NEXTA A PRESCRIBIR  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo identificar una deuda que está próxima a prescribir?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas con mejores indicadores de recuperación realizan un
          seguimiento permanente de la antigüedad de su cartera. No esperan a
          que el plazo esté por vencerse, sino que clasifican las obligaciones
          según su nivel de riesgo para actuar con suficiente anticipación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Revisar mensualmente la antigüedad de la cartera.</li>

          <li>Identificar obligaciones próximas a cumplir el término legal.</li>

          <li>Priorizar los mayores valores adeudados.</li>

          <li>Actualizar la documentación de cada expediente.</li>

          <li>Definir cuándo pasar del cobro preventivo al cobro jurídico.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar estos controles reduce significativamente el riesgo de que
          una obligación prescriba y mejora las probabilidades de recuperar el
          dinero antes de que sea demasiado tarde.
        </motion.p>

        {/*  COMO EVITAR QUE UNA DEUDA PRESCRIBA Y PROTEGER EL FLUJO DE CAJA DE TU EMPRESA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo evitar que una deuda prescriba y proteger el flujo de caja de tu
          empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mejor estrategia para evitar la prescripción consiste en gestionar
          la cartera desde los primeros días de mora. Muchas empresas esperan
          varios meses o incluso años antes de iniciar acciones de cobro,
          disminuyendo considerablemente la probabilidad de recuperar el dinero.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una política de recuperación eficiente combina cobranza preventiva,
          seguimiento permanente, negociación con el cliente y, cuando resulta
          necesario, el inicio oportuno del cobro jurídico antes de que expire
          el término legal.
        </motion.p>

        {/*  ESTRATEGIAS QUE UTILIZAN LAS EMPRESAS PARA REDUCIR EL RIESGO DE PRESCRIBIÓN  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias que utilizan las empresas para reducir el riesgo de
          prescripción
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Realizar seguimiento desde el primer día de vencimiento.</li>

          <li>Actualizar permanentemente la información del deudor.</li>

          <li>Clasificar la cartera según días de mora.</li>

          <li>Automatizar recordatorios antes y después del vencimiento.</li>

          <li>Negociar acuerdos de pago cuando exista intención de cumplir.</li>

          <li>Escalar oportunamente al cobro prejurídico.</li>

          <li>
            Iniciar acciones judiciales antes de que opere la prescripción.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estas medidas permiten aumentar significativamente el porcentaje de
          recuperación y disminuir el riesgo de convertir una cuenta por cobrar
          en una pérdida definitiva para la empresa.
        </motion.p>

        {/*  COMO INTERRUMPIR LA PRESCRIPCION DE UNA DEUDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo puede interrumpirse la prescripción de una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dependiendo del tipo de obligación y de las circunstancias del caso,
          existen actuaciones que pueden interrumpir el término de prescripción.
          Por ello es recomendable actuar con asesoría especializada antes de
          que el plazo esté próximo a vencer.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Presentar oportunamente la demanda correspondiente.</li>

          <li>Obtener un reconocimiento escrito de la deuda.</li>

          <li>Suscribir un acuerdo formal de pago.</li>

          <li>Registrar pagos parciales realizados por el deudor.</li>

          <li>Conservar todos los soportes de las actuaciones adelantadas.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cada actuación puede producir efectos jurídicos distintos. Por ello es
          importante documentar adecuadamente las gestiones realizadas y
          conservar la evidencia que demuestre el reconocimiento de la
          obligación.
        </motion.p>

        {/*  CUANDO CONVIENE PASAR DEL COBRO PREVENTIVO AL COBRO JURÍDICO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene pasar del cobro preventivo al cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las deudas requieren iniciar inmediatamente un proceso
          judicial. Sin embargo, cuando el cliente deja de responder, incumple
          reiteradamente los acuerdos de pago o la obligación se acerca al plazo
          de prescripción, resulta recomendable evaluar el inicio del cobro
          prejurídico o jurídico para proteger el derecho del acreedor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tomar esta decisión oportunamente puede representar la diferencia
          entre recuperar el capital adeudado o perder definitivamente la
          posibilidad de exigir su pago mediante las herramientas legales
          disponibles.
        </motion.p>

        {/*  PORQUE COBRAR A TIEMPO PUEDE EVITAR GRANDES PÉRDIDAS ECONÓMICAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué cobrar a tiempo puede evitar grandes pérdidas económicas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La prescripción de una deuda representa uno de los mayores riesgos
          para cualquier empresa que venda a crédito. Cuando una obligación
          prescribe, no solo se pierde la posibilidad de recuperar el dinero
          mediante las herramientas legales correspondientes, sino que también
          se afecta el flujo de caja, la rentabilidad y la capacidad de
          inversión del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una cartera vencida mal administrada obliga a muchas organizaciones a
          buscar financiación externa, incrementar sus costos financieros o
          incluso limitar su crecimiento por falta de liquidez. Por esta razón,
          la gestión preventiva de cartera debe verse como una inversión y no
          únicamente como un proceso administrativo.
        </motion.p>

        {/*  SENALES DE ALERTA QUE INDICAN QUE UNA DEUDA REQUIERE ATENCION INMEDIATA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Señales de alerta que indican que una deuda requiere atención
          inmediata
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen indicadores que permiten identificar cuándo una obligación
          está aumentando su nivel de riesgo y requiere acciones más
          contundentes para evitar que continúe deteriorándose.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>El cliente dejó de responder llamadas, correos o mensajes.</li>

          <li>Se incumplieron varios compromisos de pago consecutivos.</li>

          <li>La deuda supera los 90 o 120 días de mora.</li>

          <li>Existen múltiples facturas pendientes del mismo cliente.</li>

          <li>El deudor solicita constantemente nuevas prórrogas.</li>

          <li>No existe documentación reciente que reconozca la obligación.</li>

          <li>El término de prescripción se encuentra cada vez más próximo.</li>
        </motion.ul>

        {/*  BUENAS PRACTICAS PARA EVITAR QUE LAS CUENTAS POR COBRAR PRESCRIBAN  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Buenas prácticas para evitar que las cuentas por cobrar prescriban
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Monitorear permanentemente la antigüedad de la cartera.</li>

          <li>Clasificar los clientes según su nivel de riesgo.</li>

          <li>Automatizar recordatorios antes y después del vencimiento.</li>

          <li>Documentar todas las comunicaciones con el deudor.</li>

          <li>Formalizar por escrito cualquier acuerdo de pago.</li>

          <li>Conservar pagarés, contratos, facturas y soportes originales.</li>

          <li>Definir políticas claras para escalar al cobro prejurídico.</li>

          <li>
            Consultar oportunamente cuando una obligación esté próxima a
            prescribir.
          </li>
        </motion.ul>

        {/*  LA TECNOLOGIA AYUDA A PREVENIR LA PRESCRIPCION DE LAS DEUDAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La tecnología también ayuda a prevenir la prescripción de las deudas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente muchas empresas utilizan plataformas de gestión de cartera
          para controlar automáticamente las fechas de vencimiento, priorizar
          los clientes con mayor riesgo, enviar recordatorios de pago y generar
          alertas cuando una obligación se acerca al límite legal para ejercer
          su cobro.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La automatización no reemplaza la estrategia jurídica, pero sí permite
          reducir errores operativos, optimizar el seguimiento comercial y tomar
          decisiones con mayor anticipación para proteger los recursos de la
          empresa.
        </motion.p>

        {/*  CONCLUSION: LA PRESCRIPCION DE UNA DEUDA PUEDE EVITARSE CON UNA GESTION DE CARTERA OPORTUNA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: la prescripción de una deuda puede evitarse con una
          gestión de cartera oportuna
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La prescripción de deudas en Colombia no ocurre de manera automática,
          pero sí representa un riesgo real para cualquier empresa que permita
          que sus cuentas por cobrar permanezcan inactivas durante largos
          periodos. Conocer los términos legales, identificar cuándo empieza a
          correr el plazo y actuar antes de que expire puede marcar la
          diferencia entre recuperar una obligación o perder definitivamente la
          posibilidad de exigir su pago por la vía judicial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una estrategia integral de recuperación de cartera debe combinar
          políticas de crédito claras, seguimiento permanente, automatización de
          recordatorios, acuerdos de pago oportunos y, cuando sea necesario,
          acciones de cobro prejurídico y jurídico antes de que opere la
          prescripción. Estas medidas no solo aumentan la recuperación de las
          cuentas por cobrar, sino que también protegen la liquidez, reducen el
          riesgo financiero y fortalecen la estabilidad económica de la empresa.
        </motion.p>

        {/*  PREGUNTAS FRECUENTES SOBRE LA PRESCRIPCION DE DEUDAS EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre la prescripción de deudas en Colombia
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Todas las deudas prescriben en Colombia?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Sí, aunque el término de prescripción depende del tipo de obligación,
          del documento que la respalda y de la legislación aplicable en cada
          caso.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Una llamada telefónica interrumpe la prescripción?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          No. Las simples llamadas, correos electrónicos o mensajes de WhatsApp
          normalmente no interrumpen el término de prescripción. Para ello deben
          presentarse las actuaciones legales o los actos de reconocimiento de
          deuda previstos por la ley.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Un pago parcial reinicia el tiempo de prescripción?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          En muchos casos, sí. Un abono o el reconocimiento expreso de la deuda
          puede producir efectos sobre el término de prescripción. Sin embargo,
          cada situación debe analizarse según el tipo de obligación y las
          circunstancias particulares.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Qué pasa si dejo pasar el tiempo sin cobrar una deuda?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Si transcurre el término legal sin realizar las actuaciones
          correspondientes, el deudor puede alegar la prescripción y el acreedor
          perder la posibilidad de exigir judicialmente el pago de la
          obligación.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          ¿Cómo puede una empresa evitar que sus cuentas por cobrar prescriban?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Implementando una gestión de cartera permanente, realizando
          seguimiento preventivo, documentando los acuerdos de pago, controlando
          los plazos legales y escalando oportunamente los casos al cobro
          prejurídico o jurídico cuando sea necesario.
        </motion.p>
      </motion.article>
    </main>
  );
}
