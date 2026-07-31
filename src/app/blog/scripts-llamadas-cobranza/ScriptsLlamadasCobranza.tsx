"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ScriptsLlamadasCobranza() {
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

        {/* HERO */}
        <h1>
          Scripts de llamadas de cobranza: 12 ejemplos efectivos para recuperar
          cartera sin afectar la relación con el cliente
        </h1>

        <p className={styles.intro}>
          Las llamadas telefónicas continúan siendo uno de los canales con mayor
          impacto en la recuperación de cartera empresarial. Sin embargo, el
          éxito de una gestión no depende únicamente de contactar al cliente,
          sino de la manera en que se desarrolla la conversación. Utilizar{" "}
          <strong>scripts de llamadas de cobranza</strong> permite estandarizar
          el proceso, mejorar la experiencia del deudor, aumentar los
          compromisos de pago y reducir la improvisación de los asesores.
        </p>

        <p>
          En esta guía encontrarás ejemplos de guiones para diferentes etapas de
          la cobranza, recomendaciones para negociar con clientes morosos,
          errores que debes evitar y buenas prácticas que pueden incrementar
          significativamente los indicadores de recuperación de cuentas por
          cobrar.
        </p>

        {/* QUE ES UN SCRIPT DE LLAMADAS DE COBRANZA */}
        <h2>¿Qué es un script de llamadas de cobranza?</h2>

        <p>
          Un script de cobranza es una guía estructurada que orienta al asesor
          durante una conversación telefónica con un cliente que presenta
          obligaciones pendientes de pago. No se trata de leer un texto de forma
          mecánica, sino de contar con una estructura que garantice que toda la
          información importante sea comunicada de manera clara, profesional y
          respetuosa.
        </p>

        <p>
          Los mejores scripts combinan técnicas de comunicación, negociación y
          escucha activa para lograr acuerdos que beneficien tanto al acreedor
          como al cliente. Además, permiten que todos los integrantes del equipo
          de cobranza mantengan un mismo estándar de atención.
        </p>

        {/* PORQUE UTILIZAR GUIONES EN LAS LLAMADAS DE COBRANZA */}
        <h2>¿Por qué utilizar guiones en las llamadas de cobranza?</h2>

        <p>
          Muchas empresas pierden oportunidades de recuperación simplemente
          porque cada asesor utiliza un estilo diferente al momento de contactar
          a los clientes. Contar con scripts bien diseñados permite uniformar el
          proceso y mejorar los resultados de manera consistente.
        </p>

        <ul>
          <li>Estandarizan la comunicación con todos los clientes.</li>
          <li>Disminuyen la improvisación durante la llamada.</li>
          <li>Facilitan la capacitación de nuevos asesores.</li>
          <li>Incrementan la tasa de recuperación de cartera.</li>
          <li>Reducen conflictos con clientes inconformes.</li>
          <li>Generan mayor confianza y profesionalismo.</li>
          <li>Permiten documentar mejor cada gestión realizada.</li>
          <li>
            Favorecen el cumplimiento de las políticas internas de cobranza.
          </li>
        </ul>

        {/* ANTES DE REALIZAR UNA LLAMADA DE COBRANZA */}
        <h2>
          Antes de realizar una llamada de cobranza debes preparar la
          información
        </h2>

        <p>
          Una llamada efectiva comienza mucho antes de marcar el número
          telefónico. El asesor debe conocer perfectamente el historial del
          cliente para responder preguntas, resolver objeciones y proponer
          soluciones viables.
        </p>

        <p>Antes de iniciar la gestión resulta recomendable revisar:</p>

        <ul>
          <li>Nombre completo o razón social del cliente.</li>
          <li>Número de identificación.</li>
          <li>Facturas pendientes.</li>
          <li>Valor total adeudado.</li>
          <li>Fecha de vencimiento.</li>
          <li>Días exactos de mora.</li>
          <li>Acuerdos de pago anteriores.</li>
          <li>Historial de llamadas realizadas.</li>
          <li>Correos electrónicos enviados.</li>
          <li>Observaciones registradas en el CRM.</li>
        </ul>

        {/* ESTRUCTURA RECOMENDADA */}
        <h2>Estructura recomendada para cualquier llamada de cobranza</h2>

        <p>
          Independientemente del nivel de mora, existe una estructura que suele
          ofrecer mejores resultados porque transmite confianza y mantiene una
          conversación ordenada.
        </p>

        <ul>
          <li>Saludo cordial.</li>
          <li>Presentación del asesor y la empresa.</li>
          <li>Validación de identidad del cliente.</li>
          <li>Explicación del motivo de la llamada.</li>
          <li>Información clara sobre la obligación pendiente.</li>
          <li>Escucha activa de la situación del cliente.</li>
          <li>Negociación de alternativas de pago.</li>
          <li>Confirmación del compromiso adquirido.</li>
          <li>Resumen de los acuerdos.</li>
          <li>Cierre amable y profesional.</li>
        </ul>

        {/* EJEMPLOS DE SCRIPT */}
        <h2>
          Ejemplos de scripts de llamadas de cobranza según el momento de la
          gestión
        </h2>

        <p>
          No todos los clientes requieren el mismo tipo de conversación. El tono
          y el objetivo cambian dependiendo de si se trata de una cobranza
          preventiva, una factura recién vencida o una obligación con varios
          meses de mora. Por ello, los siguientes ejemplos pueden adaptarse a
          cada etapa del proceso de recuperación de cartera.
        </p>

        {/* 1. SCRIPT PARA COBRANZA PREVENTIVA (ANTES DEL VENCIMIENTO) */}
        <h2>1. Script para cobranza preventiva (antes del vencimiento)</h2>

        <p>
          La cobranza preventiva busca evitar que una factura llegue a estado de
          mora. El objetivo no es cobrar, sino recordar el compromiso de pago y
          verificar que el cliente cuente con toda la información necesaria.
        </p>

        <ul>
          <li>
            <strong>Asesor:</strong> Buenos días, ¿tengo el gusto de hablar con
            <strong> [Nombre del cliente]</strong>?
          </li>

          <li>
            Mi nombre es <strong>[Nombre]</strong> y le llamo de
            <strong> [Empresa]</strong>.
          </li>

          <li>
            Nos comunicamos para recordarle que la factura No.
            <strong> [Número]</strong>, por valor de
            <strong> [Valor]</strong>, tiene como fecha de vencimiento el
            próximo
            <strong> [Fecha]</strong>.
          </li>

          <li>
            Queríamos confirmar que recibió la factura correctamente y verificar
            si necesita algún soporte adicional para realizar el pago dentro del
            plazo establecido.
          </li>

          <li>
            Muchas gracias por su tiempo. Quedamos atentos a cualquier
            inquietud.
          </li>
        </ul>

        <h2>2. Script para cartera vencida entre 1 y 30 días</h2>

        <p>
          Cuando la mora es reciente conviene mantener un tono cordial. En
          muchos casos el incumplimiento se debe a olvidos administrativos o
          procesos internos de aprobación.
        </p>

        <ul>
          <li>
            Buen día, <strong>[Nombre]</strong>. Mi nombre es
            <strong> [Asesor]</strong> y le llamo de
            <strong> [Empresa]</strong>.
          </li>

          <li>
            Hemos identificado que la factura
            <strong> [Número]</strong> presenta actualmente un saldo pendiente.
          </li>

          <li>
            Queríamos confirmar si existe alguna novedad relacionada con el pago
            o si requiere información adicional para finalizar el proceso.
          </li>

          <li>
            Nuestro objetivo es encontrar una solución rápida antes de que la
            obligación continúe aumentando en días de mora.
          </li>
        </ul>

        {/* SCRIPT PARA MORAS SUPERIORES A 30 DIAS */}
        <h2>3. Script para mora superior a 30 días</h2>

        <p>
          A medida que aumenta la mora, la conversación debe enfocarse en
          obtener un compromiso concreto de pago.
        </p>

        <ul>
          <li>
            Señor(a) <strong>[Nombre]</strong>, observamos que la obligación
            presenta actualmente más de <strong>30 días</strong> de vencimiento.
          </li>

          <li>
            Queremos conocer cuál es la situación actual y revisar conjuntamente
            una alternativa que permita normalizar la obligación.
          </li>

          <li>
            ¿Qué fecha considera viable para realizar el pago o iniciar un
            acuerdo?
          </li>
        </ul>

        {/* SCRIPT PARA CLIENTES CON MAS DE 90 DIAS DE MORA */}
        <h2>4. Script para clientes con más de 90 días de mora</h2>

        <p>
          En esta etapa la llamada debe ser firme, respetuosa y orientada a
          explicar las posibles consecuencias de continuar con el
          incumplimiento.
        </p>

        <ul>
          <li>
            Hemos intentado comunicarnos anteriormente respecto a la obligación
            pendiente.
          </li>

          <li>
            Actualmente la deuda registra más de
            <strong> 90 días de mora</strong>.
          </li>

          <li>
            Nos gustaría conocer si existe disposición para llegar a un acuerdo
            antes de continuar con las siguientes etapas del proceso de
            recuperación.
          </li>

          <li>
            Nuestro interés sigue siendo encontrar una solución amistosa que
            beneficie a ambas partes.
          </li>
        </ul>

        {/* 5. SCRIPT CUANDO EL CLIENTE MANIFIESTA DIFICULTADES ECONÓMICAS */}
        <h2>5. Script cuando el cliente manifiesta dificultades económicas</h2>

        <p>
          Muchos clientes desean pagar, pero atraviesan problemas temporales de
          liquidez. Escuchar primero suele generar mejores resultados que
          presionar inmediatamente.
        </p>

        <ul>
          <li>Comprendemos la situación que nos comenta.</li>

          <li>
            Nuestro objetivo no es generar mayores dificultades, sino encontrar
            una alternativa que le permita cumplir con la obligación.
          </li>

          <li>
            ¿Qué propuesta considera viable en este momento para iniciar la
            normalización de la deuda?
          </li>
        </ul>

        {/* 6. SCRIPT PARA NEGOCIAR UN ACUERDO DE PAGO */}
        <h2>6. Script para negociar un acuerdo de pago</h2>

        <p>
          Cuando existe disposición de pago, el asesor debe conducir la
          conversación hacia compromisos claros y verificables.
        </p>

        <ul>
          <li>
            Podemos revisar un acuerdo de pago ajustado a su capacidad
            financiera.
          </li>

          <li>Para ello necesitamos definir:</li>

          <li>Valor inicial.</li>

          <li>Número de cuotas.</li>

          <li>Fechas exactas de pago.</li>

          <li>Medio por el cual realizará las consignaciones.</li>

          <li>
            Una vez confirmado el acuerdo enviaremos el soporte correspondiente.
          </li>
        </ul>

        {/* 7. SCRIPT PARA CONFIRMAR UN COMPROMISO ADQUIRIDO */}
        <h2>7. Script para confirmar un compromiso adquirido</h2>

        <ul>
          <li>
            Confirmamos el compromiso registrado para el día
            <strong> [Fecha]</strong>.
          </li>

          <li>
            El valor acordado corresponde a<strong> [Valor]</strong>.
          </li>

          <li>
            Finalizada la llamada enviaremos el resumen del acuerdo mediante
            correo electrónico o WhatsApp.
          </li>

          <li>
            Muchas gracias por su disposición para solucionar esta obligación.
          </li>
        </ul>

        {/* 8. SCRIPT PARA SEGUIMIENTO CUANDO EL CLIENTE INCUMPLE EL ACUERDO */}
        <h2>
          8. Script para seguimiento cuando el cliente incumple el acuerdo
        </h2>

        <p>
          Es importante evitar confrontaciones. El objetivo consiste en entender
          qué ocurrió y redefinir el plan de pago.
        </p>

        <ul>
          <li>Buen día.</li>

          <li>
            Observamos que el compromiso pactado para el
            <strong> [Fecha]</strong> aún no aparece registrado.
          </li>

          <li>
            Queríamos conocer si ocurrió alguna novedad y revisar conjuntamente
            la mejor alternativa para dar continuidad al acuerdo.
          </li>

          <li>
            Nuestro objetivo sigue siendo encontrar una solución que permita
            normalizar la obligación.
          </li>
        </ul>

        {/* COMO RESPONDER LAS OBJECIONES MAS FRECUENTES DURANTE UNA LLAMADA DE COBRANZA */}
        <h2>
          Cómo responder las objeciones más frecuentes durante una llamada de
          cobranza
        </h2>

        <p>
          Una de las habilidades más importantes en la recuperación de cartera
          es saber responder correctamente a las objeciones del cliente.
          Escuchar primero y ofrecer alternativas razonables suele generar
          mejores resultados que insistir únicamente en el pago inmediato.
        </p>

        <h3>"No tengo dinero para pagar"</h3>

        <p>
          Evita discutir con el cliente. Pregunta cuál sería una fecha realista
          para realizar un abono o si existe la posibilidad de estructurar un
          acuerdo de pago. En muchos casos, una negociación adecuada permite
          recuperar parte de la cartera en lugar de perder completamente la
          oportunidad de recaudo.
        </p>

        <h3>"Nunca recibí la factura"</h3>

        <p>
          Confirma el correo electrónico o el canal de envío registrado. Si es
          necesario, reenvía inmediatamente la factura y acuerda una nueva fecha
          para realizar seguimiento al pago.
        </p>

        <h3>"Estoy esperando que me paguen"</h3>

        <p>
          Esta situación es frecuente en empresas B2B. Pregunta cuándo esperan
          recibir esos recursos y agenda desde ese momento una nueva llamada
          para confirmar el compromiso adquirido.
        </p>

        <h3>"No reconozco esa deuda"</h3>

        <p>
          Mantén un tono profesional y ofrece enviar nuevamente el contrato, la
          factura, la orden de compra u otros documentos que soporten la
          obligación. Evita entrar en discusiones durante la llamada.
        </p>

        {/* QUE NUNCA DEBES DECIR DURANTE UNA LLAMADA DE COBRANZA */}
        <h2>Qué nunca debes decir durante una llamada de cobranza</h2>

        <p>
          Un error de comunicación puede deteriorar la relación comercial e
          incluso generar reclamaciones innecesarias. Algunas expresiones deben
          evitarse en cualquier proceso de recuperación de cartera.
        </p>

        <ul>
          <li>Realizar amenazas.</li>

          <li>Utilizar lenguaje ofensivo.</li>

          <li>Interrumpir constantemente al cliente.</li>

          <li>Prometer descuentos que la empresa no ha autorizado.</li>

          <li>Discutir o elevar el tono de voz.</li>

          <li>Presionar sin escuchar la situación del deudor.</li>

          <li>Compartir información confidencial con terceros.</li>
        </ul>

        {/* INDICADORES PARA MEDIR LA EFECTIVIDAD DE LAS LLAMADAS DE COBRANZA */}
        <h2>
          Indicadores para medir la efectividad de las llamadas de cobranza
        </h2>

        <p>
          Los scripts generan mejores resultados cuando la empresa también mide
          el desempeño de sus campañas telefónicas. Algunos KPIs recomendados
          son:
        </p>

        <ul>
          <li>Porcentaje de llamadas contestadas.</li>

          <li>Tasa de contacto efectivo.</li>

          <li>Compromisos de pago obtenidos.</li>

          <li>Compromisos efectivamente cumplidos.</li>

          <li>Tiempo promedio de llamada.</li>

          <li>Valor recuperado por asesor.</li>

          <li>Valor recuperado por campaña.</li>

          <li>Reducción mensual de cartera vencida.</li>
        </ul>

        {/* COMBINA LLAMADAS, WHATSAPP Y CORREO ELECTRONICO PARA OBTENER MEJORES RESULTADOS */}
        <h2>
          Combina llamadas, WhatsApp y correo electrónico para obtener mejores
          resultados
        </h2>

        <p>
          Las llamadas telefónicas continúan siendo altamente efectivas, pero
          alcanzan mejores resultados cuando forman parte de una estrategia de
          cobranza multicanal. Después de cada conversación es recomendable
          enviar un correo electrónico o un mensaje de WhatsApp confirmando el
          compromiso adquirido.
        </p>

        <p>
          Este seguimiento reduce confusiones, fortalece la evidencia documental
          y facilita futuras gestiones de recuperación en caso de
          incumplimiento.
        </p>

        {/* BUENAS PRÁCTICAS PARA EQUIPOS DE COBRANZA EMPRESARIAL */}
        <h2>Buenas prácticas para equipos de cobranza empresarial</h2>

        <ul>
          <li>Actualizar permanentemente la información del cliente.</li>

          <li>Registrar cada llamada en el CRM.</li>

          <li>Documentar acuerdos de pago.</li>

          <li>Dar seguimiento oportuno a cada compromiso.</li>

          <li>Capacitar periódicamente a los asesores.</li>

          <li>Utilizar indicadores para evaluar resultados.</li>

          <li>
            Personalizar cada conversación según el historial del cliente.
          </li>

          <li>
            Mantener un trato respetuoso incluso en casos de mora avanzada.
          </li>
        </ul>

        {/* ERRORES FRECUENTES QUE REDUCEN LA RECUPERACIÓN DE CARTERA */}
        <h2>Errores frecuentes que reducen la recuperación de cartera</h2>

        <p>
          Muchas empresas cuentan con buenos procesos administrativos, pero
          disminuyen la efectividad de sus llamadas debido a errores operativos
          que pueden evitarse fácilmente.
        </p>

        <ul>
          <li>No preparar la llamada previamente.</li>

          <li>Improvisar toda la conversación.</li>

          <li>No escuchar al cliente.</li>

          <li>No registrar la gestión realizada.</li>

          <li>No confirmar fechas de pago.</li>

          <li>No realizar seguimiento posterior.</li>

          <li>Esperar demasiado tiempo para contactar al deudor.</li>

          <li>No segmentar la cartera según días de mora.</li>
        </ul>

        {/* CONCLUSIONES */}
        <h2>Conclusión</h2>

        <p>
          Implementar <strong>scripts de llamadas de cobranza</strong> permite
          mejorar significativamente la recuperación de cartera, aumentar la
          productividad de los asesores y ofrecer una experiencia mucho más
          profesional durante cada contacto con los clientes. Un guion bien
          diseñado reduce la improvisación, facilita las negociaciones y ayuda a
          obtener compromisos de pago más sólidos.
        </p>

        <p>
          Independientemente del tamaño de la empresa, contar con procesos de
          cobranza estandarizados, indicadores de gestión y estrategias
          multicanal permitirá reducir la cartera vencida, mejorar el flujo de
          caja y fortalecer la salud financiera del negocio a largo plazo.
        </p>
      </motion.article>
    </main>
  );
}
