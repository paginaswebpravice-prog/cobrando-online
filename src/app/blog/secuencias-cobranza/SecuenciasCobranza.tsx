"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function SecuenciasCobranza() {
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
          Automatización de Cobranza
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Secuencias automáticas de cobranza: cómo diseñar flujos que reducen la
          morosidad y aumentan la recuperación de cartera
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Las <strong>secuencias automáticas de cobranza</strong> permiten
          ejecutar recordatorios, seguimientos y acciones de recuperación de
          cartera en el momento adecuado, sin depender completamente de procesos
          manuales. Cuando una empresa implementa flujos automatizados de
          comunicación, logra reducir la morosidad, mejorar la experiencia del
          cliente y aumentar significativamente la recuperación de cuentas por
          cobrar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Actualmente, empresas de sectores como salud, construcción, educación,
          distribución, tecnología, industria y servicios utilizan
          automatizaciones de cobranza para contactar oportunamente a sus
          clientes mediante correo electrónico, WhatsApp, SMS, llamadas
          telefónicas y tareas programadas dentro del CRM. Esto permite mantener
          una comunicación constante sin incrementar la carga operativa del
          equipo de cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En esta guía aprenderás qué son las secuencias automáticas de
          cobranza, cómo construir un flujo efectivo, qué canales utilizar,
          cuáles son los errores más frecuentes y qué indicadores debes medir
          para mejorar continuamente los resultados de tu estrategia de
          recuperación de cartera.
        </motion.p>

        {/* QUE SON LAS SECUENCIAS AUTOMATICAS DE COBRANZA Y POR QUE SON FUNDAMENTALES PARA UNA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué son las secuencias automáticas de cobranza y por qué son
          importantes?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una secuencia automática de cobranza es un conjunto de acciones
          previamente configuradas que se ejecutan según el comportamiento del
          cliente o el estado de una factura. Estas acciones pueden activarse
          antes del vencimiento, durante los primeros días de mora o cuando una
          obligación supera determinados plazos de incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A diferencia de los procesos manuales, donde cada asesor debe recordar
          cuándo contactar al cliente, una secuencia automatizada garantiza que
          todas las comunicaciones se envíen en el momento oportuno, manteniendo
          una estrategia de cobranza consistente y mucho más eficiente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El objetivo principal no consiste únicamente en enviar recordatorios,
          sino en acompañar al cliente durante todo el ciclo de pago, anticipar
          posibles incumplimientos y facilitar soluciones antes de que la deuda
          evolucione hacia etapas de cobranza prejurídica o jurídica.
        </motion.p>

        {/* QUE SON LAS SECUENCIAS AUTOMATICAS DE COBRANZA */}
        <h2>¿Qué son las secuencias automáticas de cobranza?</h2>

        <p>
          Son flujos de trabajo diseñados para enviar comunicaciones y ejecutar
          tareas de seguimiento automáticamente cuando se cumplen determinadas
          condiciones, como una factura próxima a vencer o una obligación en
          mora.
        </p>

        <p>
          Estas secuencias pueden incluir correos electrónicos, mensajes de
          WhatsApp, llamadas programadas, recordatorios y alertas internas para
          los gestores de cartera.
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beneficios de implementar secuencias automáticas de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Automatizar la gestión de cartera no significa eliminar la
          intervención humana. Por el contrario, permite que el equipo de
          cobranza concentre sus esfuerzos en los casos que realmente requieren
          negociación personalizada, mientras el sistema ejecuta automáticamente
          las tareas repetitivas de seguimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando las secuencias están correctamente diseñadas, cada cliente
          recibe la comunicación adecuada en el momento indicado, aumentando las
          probabilidades de recaudo sin generar una experiencia negativa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Disminuyen la cartera vencida.</li>

          <li>Reducen significativamente el trabajo manual del equipo.</li>

          <li>Garantizan seguimiento oportuno a todas las facturas.</li>

          <li>Evitan olvidos en la gestión de cobranza.</li>

          <li>Incrementan la productividad de los gestores.</li>

          <li>Permiten atender un mayor volumen de clientes.</li>

          <li>
            Mejoran la experiencia del cliente mediante comunicaciones
            oportunas.
          </li>

          <li>Facilitan la medición de resultados.</li>

          <li>Permiten escalar fácilmente la operación.</li>

          <li>Contribuyen a mejorar el flujo de caja empresarial.</li>
        </motion.ul>

        {/* DIFERENCIAS ENTRE UNA COBRANZA MANUAL Y UNA SECUENCIA AUTOMATIZADA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Diferencias entre una cobranza manual y una secuencia automatizada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas todavía administran sus cuentas por cobrar mediante
          hojas de cálculo, llamadas improvisadas y recordatorios enviados
          manualmente. Este método suele funcionar cuando el volumen de clientes
          es reducido, pero pierde eficiencia conforme la cartera crece.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Las secuencias automáticas permiten estandarizar el proceso de
          recuperación de cartera, asegurando que ningún cliente quede sin
          seguimiento y que cada etapa del proceso se ejecute según reglas
          previamente definidas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Las tareas repetitivas se ejecutan automáticamente.</li>

          <li>Los asesores intervienen únicamente cuando es necesario.</li>

          <li>Se reducen errores operativos.</li>

          <li>Las comunicaciones mantienen una línea uniforme.</li>

          <li>Es posible personalizar mensajes según el perfil del cliente.</li>

          <li>
            Todos los contactos quedan registrados para futuras consultas.
          </li>
        </motion.ul>

        {/* CUANDO CONVIENE IMPLEMENTAR SECUENCIAS AUTOMATICAS DE COBRANZA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene implementar secuencias automáticas de cobranza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque cualquier empresa puede beneficiarse de la automatización,
          existen escenarios donde su implementación genera un impacto mucho
          mayor sobre la recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Cuando existen cientos o miles de facturas por gestionar.</li>

          <li>
            Cuando el equipo dedica demasiado tiempo a enviar recordatorios.
          </li>

          <li>Cuando aumentan los niveles de morosidad.</li>

          <li>Cuando es difícil realizar seguimiento a todos los clientes.</li>

          <li>Cuando se requiere mejorar el flujo de caja.</li>

          <li>Cuando la empresa busca escalar su proceso de cobranza.</li>

          <li>
            Cuando existen diferentes segmentos de clientes con comportamientos
            de pago distintos.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Empresas de salud, IPS, clínicas, constructoras, distribuidores,
          colegios, universidades, compañías de tecnología y organizaciones con
          ventas B2B suelen obtener mejoras importantes al automatizar sus
          procesos de seguimiento y recuperación de cartera.
        </motion.p>

        {/* EJEMPLO DE UNA SECUENCIA PREVENTIVA ANTES DEL VENCIMIENTO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ejemplo de una secuencia preventiva antes del vencimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La etapa preventiva tiene como objetivo evitar que una factura llegue
          a vencerse. Un cliente que recibe recordatorios oportunos normalmente
          presenta mayores probabilidades de pagar dentro del plazo acordado,
          disminuyendo la necesidad de iniciar procesos de cobranza posteriores.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una secuencia preventiva bien diseñada puede ejecutarse completamente
          de forma automática y adaptarse al comportamiento de cada cliente.
        </motion.p>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>
            10 días antes del vencimiento: envío de factura y confirmación de
            recibido.
          </li>

          <li>
            7 días antes: correo electrónico recordando la fecha límite de pago.
          </li>

          <li>5 días antes: notificación automática por WhatsApp.</li>

          <li>
            3 días antes: segundo recordatorio con enlace directo al pago.
          </li>

          <li>1 día antes: mensaje corto indicando el próximo vencimiento.</li>

          <li>
            Día de vencimiento: confirmación automática del estado del pago.
          </li>
        </motion.ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Muchas empresas logran recuperar una parte importante de su cartera
          únicamente fortaleciendo esta etapa preventiva, evitando que las
          obligaciones entren en mora.
        </motion.p>

        {/* FLUJO RECOMENDADO PARA CLIENTES CON CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Flujo recomendado para clientes con cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando la factura supera la fecha de vencimiento, la estrategia debe
          cambiar. El objetivo ya no consiste únicamente en recordar el pago,
          sino en comprender las razones del incumplimiento y construir una
          solución que facilite la recuperación de la obligación.
        </motion.p>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Día 1 de mora: correo automático notificando el vencimiento.</li>

          <li>
            Día 3: mensaje de WhatsApp solicitando confirmar la fecha de pago.
          </li>

          <li>Día 5: llamada del asesor de cartera.</li>

          <li>Día 10: envío de propuesta de acuerdo de pago.</li>

          <li>Día 15: seguimiento al compromiso adquirido.</li>

          <li>Día 20: segunda llamada de negociación.</li>

          <li>Día 30: evaluación para traslado a cobranza prejurídica.</li>

          <li>
            Día 45 o 60: análisis para iniciar recuperación jurídica cuando
            corresponda.
          </li>
        </motion.ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La duración de cada etapa dependerá de las políticas internas de
          crédito, el perfil del cliente, el monto adeudado y el historial de
          comportamiento de pago.
        </motion.p>

        {/* COMO CONSTRUIR UNA SECUENCIA DE COBRANZA PASO A PASO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cómo construir una secuencia de cobranza paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Antes de automatizar cualquier proceso es recomendable definir una
          estrategia clara. Una buena secuencia no consiste únicamente en enviar
          mensajes periódicos, sino en establecer reglas de negocio que permitan
          actuar según el comportamiento de cada cliente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Definir las políticas de crédito de la empresa.</li>

          <li>Clasificar los clientes según nivel de riesgo.</li>

          <li>Establecer los eventos que activarán cada comunicación.</li>

          <li>Diseñar mensajes diferentes para cada etapa de mora.</li>

          <li>Configurar tiempos automáticos entre una acción y otra.</li>

          <li>Definir cuándo debe intervenir un asesor humano.</li>

          <li>Registrar todas las interacciones realizadas.</li>

          <li>Medir permanentemente los resultados para optimizar el flujo.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una estrategia de este tipo permite mantener un proceso de cobranza
          uniforme, escalable y mucho más eficiente, incluso cuando el número de
          clientes aumenta considerablemente.
        </motion.p>

        {/* CANALES QUE PUEDEN AUTOMATIZARSE DENTRO DE UNA ESTRATEGIA DE COBRANZA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Canales que pueden automatizarse dentro de una estrategia de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una de las principales ventajas de las secuencias automáticas consiste
          en que permiten combinar diferentes canales de comunicación según el
          momento del proceso de cobranza. Esto incrementa la probabilidad de
          contacto sin generar una experiencia invasiva para el cliente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La recomendación es utilizar un enfoque omnicanal, donde cada medio de
          comunicación cumpla un objetivo específico dentro del flujo de
          recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Correos electrónicos automatizados.</li>

          <li>Mensajes de WhatsApp Business.</li>

          <li>SMS recordatorios.</li>

          <li>Llamadas programadas por el asesor.</li>

          <li>Notificaciones dentro del CRM.</li>

          <li>Alertas para el equipo comercial.</li>

          <li>Tareas automáticas para gestores de cartera.</li>

          <li>Integraciones con ERP y software financiero.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando todos estos canales trabajan de forma coordinada, la empresa
          consigue mantener una comunicación constante con el cliente sin
          depender de procesos manuales.
        </motion.p>

        {/* SEGMENTACION INTELIGENTE DE CLIENTES DENTRO DE LA AUTOMATIZACION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Segmentación inteligente de clientes dentro de la automatización
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Uno de los errores más comunes consiste en enviar exactamente la misma
          secuencia de cobranza a todos los clientes. En realidad, cada segmento
          posee comportamientos de pago diferentes y requiere estrategias
          personalizadas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La automatización permite construir reglas para que cada cliente
          reciba un tratamiento distinto según su perfil de riesgo, historial de
          pagos y nivel de mora.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Clientes nuevos.</li>

          <li>Clientes con excelente historial de pago.</li>

          <li>Clientes frecuentes.</li>

          <li>Clientes corporativos B2B.</li>

          <li>Clientes con acuerdos de pago activos.</li>

          <li>Clientes reincidentes en mora.</li>

          <li>Clientes clasificados como alto riesgo.</li>

          <li>Clientes próximos a ser trasladados a cobro prejurídico.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Esta segmentación mejora considerablemente la tasa de recuperación, ya
          que permite enviar mensajes más relevantes y oportunos para cada
          situación.
        </motion.p>

        {/* AUTOMATIZACION PARA EMPRESAS B2B */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Automatización para empresas B2B
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En operaciones entre empresas, los ciclos de pago suelen ser más
          largos y las aprobaciones involucran diferentes responsables
          financieros. Por ello, las secuencias automáticas deben contemplar
          varios puntos de contacto durante todo el proceso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Confirmación de recepción de factura.</li>

          <li>Recordatorios antes del vencimiento.</li>

          <li>Seguimiento al responsable de pagos.</li>

          <li>Notificaciones sobre documentos pendientes.</li>

          <li>Confirmación de compromisos adquiridos.</li>

          <li>Escalamiento automático cuando exista incumplimiento.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Este tipo de automatización resulta especialmente útil para empresas
          que manejan un alto volumen de facturación mensual y requieren
          mantener un flujo de caja estable.
        </motion.p>

        {/* AUTOMATIZACION PARA IPS, CLINICAS Y EMPRESAS DEL SECTOR SALUD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Automatización para IPS, clínicas y empresas del sector salud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Las instituciones del sector salud administran miles de cuentas por
          cobrar relacionadas con EPS, aseguradoras, entidades públicas y
          pacientes. Debido al alto volumen de información, las secuencias
          automáticas ayudan a mantener un seguimiento permanente sobre cada
          factura y cada radicación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Recordatorios de radicación.</li>

          <li>Seguimiento a glosas.</li>

          <li>Alertas por vencimientos próximos.</li>

          <li>Solicitudes automáticas de soportes.</li>

          <li>Seguimiento a acuerdos de pago.</li>

          <li>Escalamiento de cuentas críticas.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Estas automatizaciones permiten disminuir tiempos de gestión, reducir
          el riesgo de olvido y mejorar la recuperación de cartera en
          organizaciones con grandes volúmenes de cuentas por cobrar.
        </motion.p>

        {/* INDICADORES (KPIs) PARA MEDIR LA EFECTIVIDAD DE LAS SECUENCIAS DE COBRANZA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores (KPIs) para medir la efectividad de las secuencias de
          cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Automatizar el proceso de cobranza no garantiza por sí solo mejores
          resultados. Es indispensable medir el desempeño de cada secuencia para
          identificar oportunidades de mejora, optimizar los tiempos de contacto
          y aumentar el porcentaje de recuperación de cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos indicadores permiten evaluar tanto la eficiencia operativa como
          el comportamiento de pago de los clientes durante cada etapa del
          proceso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Porcentaje de recuperación de cartera.</li>

          <li>Disminución de la cartera vencida.</li>

          <li>Días promedio de recaudo (DSO).</li>

          <li>Tiempo promedio entre el vencimiento y el pago.</li>

          <li>Tasa de apertura de correos electrónicos.</li>

          <li>Porcentaje de respuestas en WhatsApp.</li>

          <li>Cumplimiento de acuerdos de pago.</li>

          <li>Número de clientes contactados automáticamente.</li>

          <li>Conversión de recordatorios en pagos efectivos.</li>

          <li>Reducción del trabajo manual del equipo de cartera.</li>
        </motion.ul>

        {/* ERRORES FRECUENTES AL AUTOMATIZAR UNA SECUENCIA DE COBRANZA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes al automatizar una secuencia de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque la automatización facilita enormemente la gestión de cartera,
          una configuración inadecuada puede afectar la experiencia del cliente
          e incluso disminuir la efectividad del proceso de recuperación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Enviar demasiados mensajes en poco tiempo.</li>

          <li>Utilizar el mismo contenido para todos los clientes.</li>

          <li>No segmentar según nivel de riesgo.</li>

          <li>No actualizar la información de contacto.</li>

          <li>Olvidar detener la secuencia cuando el cliente ya pagó.</li>

          <li>No registrar las respuestas recibidas.</li>

          <li>No integrar el CRM con el software de cartera.</li>

          <li>No medir los indicadores de desempeño.</li>

          <li>Escalar demasiado rápido hacia procesos jurídicos.</li>

          <li>No revisar periódicamente los flujos automatizados.</li>
        </motion.ul>

        {/* BUENAS PRÁCTICAS PARA AUMENTAR LA RECUPERACIÓN DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Buenas prácticas para aumentar la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas con mejores indicadores de recaudo combinan
          automatización, análisis de datos y seguimiento humano. La tecnología
          facilita el proceso, pero las negociaciones estratégicas continúan
          siendo fundamentales para los casos de mayor complejidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Personalizar cada comunicación.</li>

          <li>Actualizar permanentemente la base de clientes.</li>

          <li>Integrar CRM, ERP y software de cobranza.</li>

          <li>Programar seguimientos antes del vencimiento.</li>

          <li>Priorizar clientes de alto valor.</li>

          <li>Automatizar únicamente tareas repetitivas.</li>

          <li>Permitir intervención del asesor cuando sea necesario.</li>

          <li>Analizar mensualmente los KPIs.</li>

          <li>Optimizar continuamente las secuencias.</li>

          <li>
            Mantener una comunicación respetuosa y orientada a soluciones.
          </li>
        </motion.ul>

        {/* QUE TIPO DE EMPRESAS OBTIENEN MEJORES RESULTADOS CON LA AUTOMATIZACIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué tipo de empresas obtienen mejores resultados con la
          automatización?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las secuencias automáticas generan beneficios en prácticamente
          cualquier organización que venda a crédito. Sin embargo, su impacto
          suele ser mucho mayor en empresas con altos volúmenes de facturación o
          con cientos de cuentas por cobrar activas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>IPS y clínicas.</li>

          <li>Constructoras.</li>

          <li>Empresas de tecnología.</li>

          <li>Distribuidores mayoristas.</li>

          <li>Empresas industriales.</li>

          <li>Instituciones educativas.</li>

          <li>Empresas de logística.</li>

          <li>Compañías de servicios B2B.</li>

          <li>Empresas de telecomunicaciones.</li>

          <li>Cualquier organización con ventas a crédito.</li>
        </motion.ul>
      </motion.article>
    </main>
  );
}
