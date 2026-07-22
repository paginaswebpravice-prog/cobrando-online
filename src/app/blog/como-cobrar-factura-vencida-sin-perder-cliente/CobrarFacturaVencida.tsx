"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobrarFacturaVencida() {
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
          Recuperación de Facturas Vencidas
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cómo cobrar una factura vencida sin perder al cliente: guía completa
          para recuperar pagos atrasados en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cobrar una factura vencida representa uno de los mayores desafíos para
          cualquier empresa. Si la gestión de cobranza es demasiado agresiva,
          puede deteriorar una relación comercial construida durante años; si,
          por el contrario, la empresa espera demasiado tiempo para actuar, la
          probabilidad de recuperar el dinero disminuye considerablemente. La
          clave está en aplicar una estrategia de recuperación de cartera que
          combine comunicación, seguimiento, negociación y escalamiento
          progresivo cuando sea necesario.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          En esta guía aprenderás cómo cobrar una factura vencida de manera
          profesional, qué errores debes evitar, cuándo ofrecer acuerdos de pago
          y en qué momento resulta conveniente pasar de una cobranza amistosa a
          una gestión prejurídica o jurídica.
        </motion.p>

        {/* POR QUE UNA FACTURA VENCIDA NO DEBE DEJARSE PASAR */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué una factura vencida no debe dejarse pasar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas consideran que unos cuantos días de retraso no
          representan un problema importante. Sin embargo, cuando varias
          facturas permanecen vencidas al mismo tiempo, el impacto sobre el
          flujo de caja comienza a ser evidente. La organización dispone de
          menos recursos para pagar proveedores, invertir en crecimiento o
          atender sus obligaciones financieras.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, entre más tiempo permanezca una obligación sin gestión, mayor
          será el riesgo de que el cliente cambie de domicilio, modifique sus
          datos de contacto, presente problemas de liquidez o simplemente deje
          de responder las comunicaciones. Por esta razón, la recuperación de
          una factura vencida debe comenzar tan pronto se incumpla la fecha de
          pago.
        </motion.p>

        {/* PRINCIPIALES RAZONES POR LAS QUE UN CLIENTE NO PAGA UNA FACTURA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales razones por las que un cliente no paga una factura
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de iniciar cualquier gestión de cobranza es importante entender
          por qué el cliente dejó vencer la factura. No todos los casos
          corresponden a una negativa de pago; en muchas ocasiones existen
          circunstancias que pueden resolverse mediante una negociación
          adecuada.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Olvido de la fecha de vencimiento.</li>
          <li>Problemas temporales de liquidez.</li>
          <li>Errores administrativos internos.</li>
          <li>Inconformidades con el producto o servicio.</li>
          <li>Procesos internos de aprobación demasiado lentos.</li>
          <li>Cambio del responsable de pagos.</li>
          <li>Desorganización financiera del cliente.</li>
          <li>Falta de seguimiento por parte de la empresa acreedora.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Identificar correctamente la causa del incumplimiento permite aplicar
          una estrategia de recuperación mucho más efectiva y evitar conflictos
          innecesarios con clientes que realmente desean cumplir con sus
          obligaciones.
        </motion.p>

        {/* COMO COBRAR UNA FACTURA VENCIDA SIN PERDER AL CLIENTE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo cobrar una factura vencida sin perder al cliente: paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recuperar una factura vencida no consiste únicamente en enviar
          recordatorios de pago. Las empresas que obtienen mejores resultados
          implementan procesos estructurados que buscan recuperar el dinero sin
          afectar la confianza del cliente ni poner en riesgo futuras ventas.
          Estos son los pasos que normalmente generan mejores resultados.
        </motion.p>

        {/* VERIFICA QUE LA FACTURA NO PRESENTE INCONSISTENCIAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          1. Verifica que la factura no presente inconsistencias
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de contactar al cliente conviene revisar que la factura haya
          sido correctamente emitida, enviada y recibida. En ocasiones el pago
          no se realiza porque existen errores en los valores facturados,
          problemas con la orden de compra o diferencias entre lo entregado y lo
          facturado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Resolver estas inconsistencias desde el inicio evita discusiones
          posteriores y facilita una recuperación mucho más rápida.
        </motion.p>

        {/* CONTACTA AL CLIENTE DE MANERA CORDIAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          2. Contacta al cliente de manera cordial y profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El primer contacto debe tener un enfoque informativo y no
          confrontativo. En muchos casos el cliente simplemente olvidó la fecha
          de vencimiento o el pago continúa en proceso de aprobación interna.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Utilizar un tono respetuoso ayuda a conservar la relación comercial y
          aumenta las probabilidades de obtener una respuesta positiva desde el
          primer acercamiento.
        </motion.p>

        {/* ESCUCHA LAS RAZONES DEL RETRASO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          3. Escucha las razones del retraso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un error frecuente consiste en asumir que todos los clientes morosos
          desean incumplir. La realidad suele ser diferente. Algunos enfrentan
          problemas temporales de liquidez, mientras otros tienen retrasos en
          sus procesos administrativos o esperan pagos de terceros para poder
          cumplir sus obligaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Comprender el origen del retraso permite definir la estrategia de
          cobranza más adecuada para cada situación.
        </motion.p>

        {/* NEGOCIA ALTERNATIVAS DE PAGO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          4. Negocia alternativas de pago cuando exista voluntad de cumplir
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el cliente demuestra intención real de pagar, ofrecer alternativas
          puede facilitar la recuperación de la factura sin deteriorar la
          relación comercial. La flexibilidad controlada suele generar mejores
          resultados que adoptar posiciones excesivamente rígidas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pagos parciales.</li>
          <li>Acuerdos por cuotas.</li>
          <li>Nuevas fechas de vencimiento.</li>
          <li>Calendarios de pago personalizados.</li>
          <li>Diferentes medios de pago.</li>
        </motion.ul>

        {/* DOCUMENTA ABSOLUTAMENTE TODOS LOS COMPROMISOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          5. Documenta absolutamente todos los compromisos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cada conversación, correo electrónico, acuerdo de pago o modificación
          en los plazos debe quedar documentada. Esto facilita el seguimiento,
          evita malentendidos y proporciona soporte en caso de que
          posteriormente sea necesario avanzar hacia una etapa prejurídica.
        </motion.p>

        {/* ERRORES QUE DEBES EVITAR AL COBRAR UNA FACTURA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que debes evitar al cobrar una factura vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas no pierden dinero porque sus clientes no quieran
          pagar, sino porque la estrategia de recuperación presenta errores que
          deterioran la negociación o retrasan innecesariamente el proceso de
          cobranza. Evitar estas prácticas mejora considerablemente la tasa de
          recuperación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Esperar varios meses antes de realizar el primer seguimiento.</li>
          <li>
            Contactar al cliente únicamente cuando la deuda ya supera los 90 o
            120 días.
          </li>
          <li>
            Enviar mensajes amenazantes que deterioran la relación comercial.
          </li>
          <li>
            No registrar llamadas, correos electrónicos o compromisos de pago.
          </li>
          <li>
            No clasificar a los clientes según su comportamiento histórico.
          </li>
          <li>Ofrecer acuerdos diferentes cada vez que el cliente responde.</li>
          <li>
            No establecer fechas claras para verificar el cumplimiento de los
            acuerdos.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Corregir estos errores permite acelerar la recuperación de cartera y,
          al mismo tiempo, conservar relaciones comerciales valiosas para el
          crecimiento de la empresa.
        </motion.p>

        {/* CUANDO UNA FACTURA VENCIDA DEBE PASAR A COBRANZA PREJURÍDICA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una factura vencida debe pasar a cobranza prejurídica?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las facturas vencidas requieren una demanda judicial. Sin
          embargo, existen señales que indican que la cobranza amistosa ya no es
          suficiente y que conviene iniciar una gestión prejurídica para
          proteger el derecho de crédito.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>El cliente dejó de responder llamadas y correos.</li>
          <li>Incumplió uno o varios acuerdos de pago.</li>
          <li>Solicita prórrogas continuamente sin realizar abonos.</li>
          <li>La deuda continúa aumentando cada mes.</li>
          <li>
            Existen indicios de dificultades financieras o cierre de la empresa.
          </li>
          <li>
            La obligación se acerca a los términos de prescripción aplicables.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión prejurídica bien estructurada suele incrementar la presión
          sobre el deudor y, en muchos casos, permite recuperar la obligación
          sin necesidad de iniciar un proceso judicial.
        </motion.p>

        {/* INDICADORES QUE PERMITEN MEDIR LA RECUPERACIÓN DE FACTURAS VENCIDAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que permiten medir la recuperación de facturas vencidas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Gestionar cartera no consiste únicamente en enviar recordatorios.
          También es necesario medir permanentemente los resultados obtenidos
          para identificar oportunidades de mejora.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Porcentaje de recuperación mensual.</li>
          <li>Días promedio de recaudo.</li>
          <li>Cartera vencida por rangos de mora.</li>
          <li>Cumplimiento de acuerdos de pago.</li>
          <li>Valor recuperado frente al valor gestionado.</li>
          <li>Costo de recuperación por cliente.</li>
          <li>Tiempo promedio de negociación.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos indicadores permiten tomar decisiones basadas en datos y ajustar
          continuamente la estrategia de cobranza para mejorar los resultados.
        </motion.p>

        {/* COMO LA AUTOMATIZACIÓN FACILITA EL COBRO DE FACTURAS VENCIDAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo la automatización facilita el cobro de facturas vencidas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente las empresas pueden automatizar gran parte del proceso de
          cobranza mediante plataformas especializadas. Esto permite reducir la
          carga operativa del equipo administrativo y mantener contacto oportuno
          con todos los clientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recordatorios automáticos por correo electrónico, mensajes de
          WhatsApp, SMS, llamadas programadas y paneles de seguimiento ayudan a
          disminuir los olvidos y permiten actuar mucho antes de que la mora se
          vuelva crítica.
        </motion.p>

        {/* CUANDO UNA FACTURA VENCIDA DEBE PASAR A COBRO JURÍDICO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una factura vencida debe pasar a cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque el objetivo siempre debe ser recuperar la deuda mediante una
          negociación amistosa, existen situaciones donde continuar insistiendo
          de la misma forma únicamente aumenta el riesgo de pérdida de la
          cartera. Cuando el cliente incumple reiteradamente sus compromisos o
          simplemente desaparece, es momento de evaluar un proceso de cobro
          prejurídico o jurídico.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de iniciar cualquier acción legal conviene analizar aspectos
          como la existencia de soportes documentales, la capacidad económica
          del deudor, el valor de la obligación, el tiempo de mora y el costo
          estimado del proceso. Este análisis permite determinar cuál estrategia
          ofrece la mayor probabilidad de recuperación.
        </motion.p>

        {/* CASO PRÁCTICO: COMO RECUPERAR UNA FACTURA VENCIDA SIN PERDER UN BUEN CLIENTE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Caso práctico: cómo recuperar una factura vencida sin perder un buen
          cliente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Imagine una empresa que factura mensualmente servicios tecnológicos a
          una compañía que siempre ha pagado puntualmente. Un mes el pago no
          llega dentro del plazo acordado y la factura cumple treinta días de
          vencimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En lugar de enviar inmediatamente una comunicación agresiva, el equipo
          de cartera verifica que no exista un error administrativo y contacta
          al responsable financiero. Durante la conversación identifica que el
          cliente está atravesando un retraso temporal en sus recaudos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Se acuerda un cronograma de pago, se documenta por escrito y se
          programa un seguimiento automático. Gracias a esta gestión, la empresa
          recupera el dinero sin afectar una relación comercial construida
          durante varios años.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este tipo de situaciones demuestra que una estrategia profesional de
          cobranza suele generar mejores resultados que adoptar medidas
          excesivamente rígidas desde el primer contacto.
        </motion.p>

        {/* BENEFICIOS DE IMPLEMENTAR UNA ESTRATEGIA PROFESIONAL DE RECUPERACIÓN DE FACTURAS VENCIDAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de implementar una estrategia profesional de recuperación
          de facturas vencidas
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Disminuye la cartera vencida.</li>
          <li>Mejora el flujo de caja de la empresa.</li>
          <li>Incrementa la liquidez para nuevas inversiones.</li>
          <li>Reduce la necesidad de acudir a procesos judiciales.</li>
          <li>Fortalece la relación con clientes cumplidos.</li>
          <li>Permite tomar decisiones basadas en indicadores.</li>
          <li>Disminuye los costos administrativos de cobranza.</li>
          <li>Optimiza el trabajo del equipo financiero.</li>
          <li>Reduce el riesgo de incobrabilidad.</li>
        </motion.ul>

        {/* NECESITAS AYUDA PARA RECUPERAR FACTURAS VENCIDAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Necesitas ayuda para recuperar facturas vencidas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando la cartera comienza a crecer o el equipo interno ya no tiene la
          capacidad para realizar seguimiento permanente, contar con una empresa
          especializada puede acelerar significativamente la recuperación de los
          pagos pendientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión profesional combina tecnología, automatización,
          segmentación de clientes, negociación estratégica y procesos
          escalonados de cobranza para maximizar el recaudo sin deteriorar la
          relación comercial cuando todavía existe posibilidad de conservar al
          cliente.
        </motion.p>

        {/* CONCLUSION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cobrar una factura vencida requiere estrategia, no presión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recuperar una factura vencida no consiste únicamente en insistir para
          obtener el pago. Una gestión efectiva implica actuar oportunamente,
          utilizar canales adecuados de comunicación, comprender la situación
          del cliente, documentar cada compromiso y escalar el proceso cuando la
          negociación deja de ser efectiva.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas que implementan procesos estructurados de recuperación de
          cartera logran disminuir la morosidad, mejorar su flujo de caja,
          reducir pérdidas financieras y conservar relaciones comerciales de
          largo plazo. En un entorno empresarial cada vez más competitivo,
          cobrar de forma profesional representa una ventaja estratégica para la
          estabilidad y el crecimiento del negocio.
        </motion.p>
      </motion.article>
    </main>
  );
}
