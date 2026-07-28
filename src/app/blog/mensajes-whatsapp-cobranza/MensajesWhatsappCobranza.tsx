"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MensajesWhatsappCobranza() {
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
          Plantillas de Cobranza
        </motion.span>

        {/* HERO */}
        <h1>
          25 mensajes de WhatsApp para cobrar clientes de forma profesional:
          ejemplos, plantillas y recomendaciones para recuperar cartera
        </h1>

        <p className={styles.intro}>
          WhatsApp se ha convertido en uno de los canales más efectivos para la
          recuperación de cartera gracias a su alta tasa de apertura, facilidad
          de uso y rapidez en la comunicación. Un mensaje enviado en el momento
          adecuado puede incrementar significativamente las probabilidades de
          recibir el pago sin necesidad de iniciar procesos de cobranza más
          complejos.
        </p>

        <p>
          Sin embargo, no basta con enviar cualquier mensaje. El lenguaje
          utilizado, el momento del envío, la información incluida y el tono de
          la conversación influyen directamente en la respuesta del cliente. Un
          mensaje demasiado agresivo puede deteriorar la relación comercial,
          mientras que uno demasiado informal puede transmitir poca importancia
          frente a la obligación pendiente.
        </p>

        <p>
          En esta guía encontrarás ejemplos de mensajes de cobranza por WhatsApp
          para diferentes etapas de la mora, recomendaciones para redactarlos
          correctamente, errores que debes evitar y buenas prácticas que pueden
          ayudarte a mejorar la recuperación de cartera sin afectar la
          experiencia del cliente.
        </p>

        {/* POR QUE WHATSAPP SE HA CONVERTIDO EN UNO DE LOS CANALES MAS EFECTIVOS */}
        <h2>
          ¿Por qué WhatsApp se ha convertido en uno de los canales más efectivos
          para cobrar clientes?
        </h2>

        <p>
          Actualmente la mayoría de las personas consulta WhatsApp varias veces
          al día, lo que convierte esta aplicación en uno de los medios con
          mayor probabilidad de lectura frente a otros canales como el correo
          electrónico o incluso las llamadas telefónicas.
        </p>

        <p>
          Para muchas empresas, este canal permite establecer una comunicación
          rápida, personalizada y menos invasiva, facilitando tanto los
          recordatorios de pago como la negociación de acuerdos cuando el
          cliente presenta dificultades financieras.
        </p>

        <ul>
          <li>Alta tasa de apertura y lectura.</li>
          <li>Comunicación prácticamente inmediata.</li>
          <li>Permite compartir facturas, estados de cuenta y comprobantes.</li>
          <li>Facilita el seguimiento de acuerdos de pago.</li>
          <li>Reduce costos operativos frente a otros canales.</li>
          <li>
            Mejora la experiencia del cliente cuando se utiliza correctamente.
          </li>
        </ul>

        {/* ANTES DE ENVIAR UN MENSAJE DE COBRANZA POR WHATSAPP */}
        <h2>
          Antes de enviar un mensaje de cobranza por WhatsApp debes tener en
          cuenta estas recomendaciones
        </h2>

        <p>
          Aunque WhatsApp es una herramienta muy útil para la gestión de
          cartera, su uso debe realizarse con criterios profesionales. El
          objetivo no consiste en presionar al cliente, sino en facilitar la
          comunicación, recordar la obligación pendiente y encontrar
          alternativas que permitan recuperar la deuda oportunamente.
        </p>

        <p>
          Cada mensaje debería contener información suficiente para que el
          cliente identifique fácilmente la obligación y pueda responder sin
          necesidad de hacer preguntas adicionales.
        </p>

        <ul>
          <li>Identifica siempre la empresa.</li>
          <li>Dirígete al cliente por su nombre.</li>
          <li>Indica el número de factura o referencia.</li>
          <li>Menciona el valor pendiente.</li>
          <li>Especifica la fecha de vencimiento cuando corresponda.</li>
          <li>Utiliza un lenguaje cordial, respetuoso y profesional.</li>
          <li>
            Invita al cliente a responder en caso de existir alguna novedad.
          </li>
        </ul>

        {/* EJEMPLO DE MENSAJE DE WHATSAPP ANTES DEL VENCIMIENTO DE LA FACTURA */}
        <h2>
          Ejemplo de mensaje de WhatsApp antes del vencimiento de la factura
        </h2>

        <p>
          Los recordatorios preventivos suelen tener mejores resultados que los
          mensajes enviados cuando la factura ya se encuentra vencida. Muchas
          veces el cliente simplemente olvidó la fecha de pago y un mensaje
          cordial evita que la deuda entre en mora.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Esperamos que te encuentres muy
            bien. Queremos recordarte que la factura No. <strong>[0001]</strong>
            , por valor de <strong>[$ Valor]</strong>, vence el próximo
            <strong> [Fecha]</strong>. Si ya realizaste el pago puedes ignorar
            este mensaje. De lo contrario quedamos atentos a cualquier
            inquietud. Muchas gracias.
          </li>
        </ul>

        {/* MENSAJE DE WHATSAPP PARA ENVIAR EL MISMO DIA DEL VENCIMIENTO DE LA FACTURA */}
        <h2>Mensaje de WhatsApp para enviar el mismo día del vencimiento</h2>

        <p>
          Cuando llega la fecha límite de pago es recomendable mantener un tono
          completamente cordial. En esta etapa aún no se habla de mora,
          únicamente se recuerda la obligación.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Hoy vence la factura No.
            <strong> [0001]</strong> por valor de
            <strong> [$ Valor]</strong>. Si ya efectuaste el pago, agradecemos
            hacer caso omiso a este mensaje. Si necesitas apoyo o información
            adicional, estaremos atentos para ayudarte.
          </li>
        </ul>

        {/* EJEMPLO DE MENSAJE DE WHATSAPP CUANDO EXISTE UN DIA DE MORAS */}
        <h2>Ejemplo de mensaje cuando existe un día de mora</h2>

        <p>
          Si la factura acaba de vencer, lo ideal es asumir inicialmente que
          pudo tratarse de un olvido o de un retraso administrativo.
        </p>

        <ul>
          <li>
            Buen día <strong>[Nombre]</strong>. Hemos observado que la factura
            No.
            <strong> [0001]</strong>, con vencimiento el día
            <strong> [Fecha]</strong>, continúa pendiente de pago. Queremos
            confirmar si existe alguna novedad o si podemos brindarte apoyo para
            finalizar el proceso. Muchas gracias.
          </li>
        </ul>

        {/* PLANTILLA DE WHATSAPP PARA CLIENTES CON MORA */}
        <h2>
          Plantilla de WhatsApp para clientes con más de tres días de mora
        </h2>

        <p>
          Cuando la mora comienza a extenderse conviene utilizar un mensaje más
          directo, aunque siempre manteniendo una comunicación respetuosa y
          profesional.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Te escribimos para hacer seguimiento
            a la factura No. <strong>[0001]</strong>, la cual presenta un saldo
            pendiente. Agradecemos indicarnos la fecha estimada en la que
            podremos recibir el pago o si existe alguna situación que debamos
            conocer para encontrar una solución.
          </li>
        </ul>

        {/* MENSAJE DE WHATSAPP PARA CLIENTES CON MORA */}
        <h2>
          Mensaje de cobranza por WhatsApp para clientes con más de 15 días de
          mora
        </h2>

        <p>
          A medida que aumenta el tiempo de mora es importante reforzar el
          seguimiento y solicitar una respuesta concreta por parte del cliente.
        </p>

        <ul>
          <li>
            Buen día <strong>[Nombre]</strong>. Registramos un saldo pendiente
            correspondiente a la factura No. <strong>[0001]</strong>. Nos
            gustaría conocer cuándo será posible efectuar el pago o si prefieres
            revisar una alternativa que facilite el cumplimiento de la
            obligación. Quedamos atentos a tu respuesta.
          </li>
        </ul>

        {/* MENSAJE DE WHATSAPP PARA CLIENTES CON MORA */}
        <h2>Mensaje de WhatsApp para clientes con más de 30 días de mora</h2>

        <p>
          Cuando la deuda supera los treinta días es recomendable realizar un
          seguimiento mucho más constante y documentar todas las comunicaciones.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Hemos intentado comunicarnos contigo
            en relación con la factura No. <strong>[0001]</strong>, la cual
            continúa pendiente de pago. Agradecemos indicarnos una fecha
            concreta para la cancelación o informarnos si deseas revisar un
            acuerdo de pago que facilite el cumplimiento de la obligación.
          </li>
        </ul>

        {/* MENSAJE PARA CLIENTES QUE DEJARON DE RESPONDER POR WHATSAPP */}
        <h2>Mensaje para clientes que dejaron de responder por WhatsApp</h2>

        <p>
          En ocasiones el cliente deja de responder los mensajes sin manifestar
          una negativa de pago. En estos casos conviene enviar un último mensaje
          cordial solicitando confirmación.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Esperamos que te encuentres bien.
            Hemos intentado comunicarnos contigo respecto al saldo pendiente
            registrado en tu cuenta. Agradecemos confirmar la recepción de este
            mensaje e indicarnos la fecha estimada del pago para actualizar
            nuestro registro.
          </li>
        </ul>

        {/* MENSAJE PARA CONFIRMAR QUE EL PAGO FUE RECIBIDO */}
        <h2>Mensaje para confirmar que el pago fue recibido</h2>

        <p>
          La experiencia del cliente también mejora cuando la empresa confirma
          la recepción del dinero y agradece el cumplimiento de la obligación.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Confirmamos la recepción del pago
            correspondiente a la factura No. <strong>[0001]</strong>.
            Agradecemos el cumplimiento de tu compromiso y quedamos atentos para
            cualquier apoyo que necesites en el futuro.
          </li>
        </ul>

        {/* MENSAJE DE WHATSAPP PARA PROPONER UN ACUERDO DE PAGO */}
        <h2>Mensaje de WhatsApp para proponer un acuerdo de pago</h2>

        <p>
          Cuando el cliente manifiesta dificultades económicas, ofrecer un
          acuerdo de pago puede aumentar considerablemente las probabilidades de
          recuperación de la cartera. Lo importante es presentar alternativas
          claras y documentar todo el proceso.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Entendemos que pueden presentarse
            situaciones que dificulten el pago oportuno. Si lo consideras
            conveniente, podemos revisar un acuerdo de pago que se adapte a tus
            posibilidades y te permita cumplir con la obligación de manera
            organizada. Quedamos atentos a tu respuesta.
          </li>
        </ul>

        {/* MENSAJE PARA CONFIRMAR UN ACUERDO DE PAGO */}
        <h2>Mensaje para confirmar un acuerdo de pago</h2>

        <p>
          Una vez las partes llegan a un compromiso, es recomendable dejar
          constancia del acuerdo mediante un mensaje que resuma las condiciones
          pactadas.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Confirmamos el acuerdo de pago
            realizado el día de hoy por un valor de <strong>[$ Valor]</strong>,
            distribuido en
            <strong> [Número]</strong> cuotas con vencimiento los días
            <strong> [Fechas]</strong>. Agradecemos tu compromiso y estaremos
            enviando recordatorios antes de cada vencimiento.
          </li>
        </ul>

        {/* MENSAJE PARA RECORDAR UNA CUOTA DEL ACUERDO DE PAGO */}
        <h2>Mensaje para recordar una cuota del acuerdo de pago</h2>

        <p>
          Los recordatorios enviados uno o dos días antes del vencimiento ayudan
          a disminuir los incumplimientos y fortalecen la comunicación con el
          cliente.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Te recordamos que según el acuerdo
            de pago vigente, mañana vence la cuota correspondiente por valor de
            <strong> [$ Valor]</strong>. Si ya realizaste el pago puedes ignorar
            este mensaje. Muchas gracias por tu compromiso.
          </li>
        </ul>

        {/* MENSAJE CUANDO EL CLIENTE INCUMPLE EL ACUERDO DE PAGO */}
        <h2>Mensaje cuando el cliente incumple el acuerdo de pago</h2>

        <p>
          Si el cliente no cumple una cuota del acuerdo, es recomendable
          contactarlo de inmediato para conocer la situación antes de tomar
          otras medidas de cobranza.
        </p>

        <ul>
          <li>
            Buen día <strong>[Nombre]</strong>. Observamos que la cuota prevista
            dentro del acuerdo de pago aún no registra cancelación. Nos gustaría
            conocer si existe alguna novedad y revisar contigo la mejor
            alternativa para dar continuidad al compromiso adquirido.
          </li>
        </ul>

        {/* MENSAJE PARA SOLICITAR EL COMPROBANTE DE PAGO */}
        <h2>Mensaje para solicitar el comprobante de pago</h2>

        <p>
          En ocasiones el cliente informa que ya realizó la transferencia, pero
          aún no aparece reflejada en la contabilidad de la empresa. En estos
          casos es útil solicitar el soporte de manera cordial.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Muchas gracias por informarnos sobre
            el pago. Para actualizar nuestro sistema, ¿podrías compartirnos el
            comprobante de la transferencia o consignación? De esta manera
            podremos validar la operación mucho más rápido.
          </li>
        </ul>

        {/* MENSAJE PARA AGRADECER EL PAGO REALIZADO */}
        <h2>Mensaje para agradecer el pago realizado</h2>

        <p>
          La cobranza también hace parte del servicio al cliente. Agradecer el
          pago fortalece la relación comercial y mejora la percepción de la
          empresa.
        </p>

        <ul>
          <li>
            Hola <strong>[Nombre]</strong>. Queremos agradecerte por realizar el
            pago de la factura No. <strong>[0001]</strong>. Valoramos tu
            cumplimiento y esperamos seguir acompañándote en tus próximos
            proyectos. Estamos atentos a cualquier requerimiento.
          </li>
        </ul>

        {/* BUENAS PRACTICAS PARA ENVIAR MENSAJES DE COBRANZA POR WHATSAPP */}
        <h2>Buenas prácticas para enviar mensajes de cobranza por WhatsApp</h2>

        <p>
          No solo importa el contenido del mensaje. La forma en que se
          desarrolla toda la comunicación influye directamente en la disposición
          del cliente para responder y cumplir con el pago.
        </p>

        <ul>
          <li>
            Personaliza siempre el mensaje utilizando el nombre del cliente.
          </li>
          <li>Mantén un lenguaje respetuoso durante toda la conversación.</li>
          <li>Identifica claramente la empresa desde el primer mensaje.</li>
          <li>Indica el número de factura y el valor pendiente.</li>
          <li>Facilita diferentes medios de pago.</li>
          <li>Documenta todos los compromisos adquiridos.</li>
          <li>Realiza seguimientos periódicos sin caer en el exceso.</li>
          <li>
            Utiliza herramientas de automatización cuando el volumen de clientes
            sea alto.
          </li>
        </ul>

        {/* ERRORES QUE DEBES EVITAR AL ENVIAR MENSAJES DE COBRANZA POR WHATSAPP */}
        <h2>
          Errores que debes evitar al enviar mensajes de cobranza por WhatsApp
        </h2>

        <p>
          Así como un buen mensaje puede aumentar significativamente las
          probabilidades de recibir el pago, una comunicación inadecuada puede
          generar conflictos, deteriorar la relación comercial e incluso afectar
          la imagen de la empresa. Por eso es importante conocer los errores más
          frecuentes y evitarlos desde el inicio de la gestión de cobranza.
        </p>

        <ul>
          <li>Enviar mensajes con un tono agresivo o amenazante.</li>
          <li>
            Escribir únicamente para exigir el pago sin escuchar al cliente.
          </li>
          <li>Enviar decenas de mensajes durante el mismo día.</li>
          <li>No identificar la empresa que realiza la gestión.</li>
          <li>Omitir el número de factura o el valor adeudado.</li>
          <li>Enviar información incorrecta o desactualizada.</li>
          <li>No registrar los acuerdos alcanzados durante la conversación.</li>
          <li>Contactar al cliente en horarios poco apropiados.</li>
          <li>Utilizar abreviaturas o expresiones demasiado informales.</li>
          <li>
            No ofrecer alternativas cuando el cliente presenta dificultades de
            pago.
          </li>
        </ul>

        {/* ¿CUÁL ES EL MEJOR HORARIO PARA ENVIAR MENSAJES DE COBRANZA POR WHATSAPP? */}
        <h2>
          ¿Cuál es el mejor horario para enviar mensajes de cobranza por
          WhatsApp?
        </h2>

        <p>
          Aunque no existe una única respuesta, la experiencia de muchas
          empresas indica que los mejores resultados suelen obtenerse durante la
          jornada laboral, especialmente en las primeras horas de la mañana y
          después del almuerzo, momentos en los que los clientes suelen revisar
          nuevamente sus mensajes.
        </p>

        <p>
          También es recomendable evitar el envío masivo durante la noche, los
          domingos o en horarios que puedan percibirse como invasivos, ya que
          esto puede afectar negativamente la disposición del cliente para
          responder.
        </p>

        {/* ¿CONVIENE AUTOMATIZAR LOS MENSAJES DE COBRANZA POR WHATSAPP? */}
        <h2>¿Conviene automatizar los mensajes de cobranza por WhatsApp?</h2>

        <p>
          Cuando una empresa administra cientos o miles de cuentas por cobrar,
          realizar cada contacto manualmente puede convertirse en una tarea muy
          costosa. La automatización permite mantener una comunicación constante
          sin perder el seguimiento de cada cliente.
        </p>

        <p>
          Un software especializado puede programar recordatorios automáticos,
          enviar mensajes según los días de mora, registrar las respuestas del
          cliente y generar reportes que faciliten el control de la gestión de
          cobranza.
        </p>

        <ul>
          <li>Recordatorios automáticos antes del vencimiento.</li>
          <li>Seguimiento según la edad de la cartera.</li>
          <li>Registro completo del historial de conversaciones.</li>
          <li>Mayor productividad del equipo de cartera.</li>
          <li>Reducción de tareas repetitivas.</li>
          <li>Mejor experiencia para el cliente.</li>
        </ul>

        {/* ¿QUÉ CANAL FUNCIONA MEJOR PARA COBRAR? */}
        <h2>
          WhatsApp, llamadas, correo electrónico o SMS: ¿qué canal funciona
          mejor para cobrar?
        </h2>

        <p>
          Cada canal cumple una función diferente dentro de una estrategia
          integral de recuperación de cartera. En muchas organizaciones el mejor
          resultado se logra utilizando varios medios de comunicación de forma
          complementaria.
        </p>

        <ul>
          <li>
            <strong>WhatsApp:</strong> excelente para recordatorios, seguimiento
            y acuerdos de pago.
          </li>

          <li>
            <strong>Correo electrónico:</strong> ideal para enviar facturas,
            estados de cuenta y soportes.
          </li>

          <li>
            <strong>Llamadas telefónicas:</strong> recomendables para
            negociaciones más complejas o clientes con alta mora.
          </li>

          <li>
            <strong>SMS:</strong> útil para recordatorios breves cuando el
            cliente no responde otros canales.
          </li>
        </ul>

        {/* PREGUNTAS FRECUENTES SOBRE MENSAJES DE COBRANZA POR WHATSAPP */}
        <h2>Preguntas frecuentes sobre mensajes de cobranza por WhatsApp</h2>

        <h3>¿Los mensajes de cobranza por WhatsApp realmente funcionan?</h3>

        <p>
          Sí. Debido a la alta tasa de lectura de WhatsApp, muchas empresas
          obtienen una respuesta mucho más rápida que utilizando únicamente
          llamadas telefónicas o correos electrónicos. No obstante, los
          resultados dependen de la calidad del mensaje, el momento del envío y
          el seguimiento realizado.
        </p>

        <h3>¿Cada cuánto tiempo se recomienda escribir al cliente?</h3>

        <p>
          No existe una frecuencia única. Lo recomendable es establecer un plan
          de seguimiento progresivo que incluya recordatorios preventivos,
          mensajes después del vencimiento y posteriores contactos según el
          comportamiento de pago del cliente.
        </p>

        <h3>
          ¿Es recomendable copiar el mismo mensaje para todos los clientes?
        </h3>

        <p>
          No. Aunque las plantillas ayudan a ahorrar tiempo, siempre es
          aconsejable personalizar el mensaje incluyendo el nombre del cliente,
          el número de factura y el valor pendiente. Esto mejora la confianza y
          aumenta la probabilidad de respuesta.
        </p>

        <h3>¿Qué hacer si el cliente no responde los mensajes?</h3>

        <p>
          Cuando no existe respuesta después de varios intentos, lo recomendable
          es complementar la gestión utilizando otros canales de comunicación y
          continuar documentando todas las actuaciones realizadas dentro del
          proceso de cobranza.
        </p>

        {/* CONCLUSIÓN: UNA BUENA ESTRATEGIA DE MENSAJES PUEDE AUMENTAR SIGNIFICATIVAMENTE EL RECAUDO */}
        <h2>
          Conclusión: una buena estrategia de mensajes puede aumentar
          significativamente el recaudo
        </h2>

        <p>
          Los mensajes de cobranza por WhatsApp son mucho más que simples
          recordatorios de pago. Cuando hacen parte de una estrategia organizada
          permiten reducir la mora, fortalecer la relación con los clientes y
          aumentar la recuperación de cartera sin necesidad de recurrir
          inmediatamente a procesos de cobro más complejos.
        </p>

        <p>
          Utilizar plantillas profesionales, personalizar cada comunicación,
          realizar seguimiento oportuno y documentar los acuerdos alcanzados son
          prácticas que ayudan a incrementar la efectividad de la gestión de
          cartera. Si además estos procesos se apoyan en herramientas de
          automatización y en indicadores de desempeño, la empresa podrá
          optimizar sus recursos y mejorar de forma sostenible su flujo de caja.
        </p>
      </motion.article>
    </main>
  );
}
