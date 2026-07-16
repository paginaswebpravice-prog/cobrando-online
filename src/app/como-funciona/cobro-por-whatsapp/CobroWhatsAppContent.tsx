"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function CobroWhatsAppContent() {
  return (
    <main className={styles.pageWrapper}>
      {/*  HERO  */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>
              Cobranza digital para empresas en Colombia
            </span>

            <h1 className={styles.title}>
              Cobro por WhatsApp para empresas: estrategias para recuperar
              cartera y aumentar pagos
            </h1>

            <p className={styles.description}>
              WhatsApp se convirtió en uno de los canales más efectivos para
              contactar clientes con obligaciones pendientes. Aprende cómo crear
              una estrategia profesional de cobro, enviar mensajes efectivos,
              realizar seguimiento y mejorar la recuperación de cartera.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Implementar estrategia de cobro
              </a>

              <a href="#estrategia" className={styles.secondary}>
                Conocer el proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  PROBLEMA  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Por qué muchas empresas no logran recuperar cartera usando WhatsApp
        </h2>

        <p className={styles.text}>
          Tener WhatsApp no significa tener una estrategia de cobranza. Muchas
          empresas envían mensajes sin planificación, sin seguimiento y sin una
          estructura clara para convertir una conversación en un compromiso de
          pago.
        </p>

        <div className={styles.grid}>
          {[
            "Mensajes genéricos que los clientes ignoran",

            "Falta de seguimiento después del primer contacto",

            "Cobros con un tono agresivo que generan rechazo",

            "No identificar el mejor momento para contactar",

            "Ausencia de organización de clientes pendientes",

            "No contar con indicadores para medir resultados",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
              }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.warningBox}>
          ⚠ Una estrategia incorrecta de cobro puede aumentar la resistencia del
          cliente y retrasar la recuperación del dinero.
        </div>
      </section>

      {/*  IMPORTANCIA  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          WhatsApp como herramienta estratégica para recuperar cartera
        </h2>

        <p className={styles.text}>
          A diferencia de otros canales tradicionales, WhatsApp permite una
          comunicación inmediata y cercana con los clientes. Cuando se utiliza
          correctamente, ayuda a recordar obligaciones, negociar acuerdos y
          mantener una relación profesional durante el proceso de cobro.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Mayor oportunidad de contacto</h4>

            <p>
              Los mensajes llegan directamente al cliente y facilitan iniciar
              una conversación sobre la obligación pendiente.
            </p>
          </div>

          <div>
            <h4>✔ Comunicación más rápida</h4>

            <p>
              Permite responder inquietudes, negociar alternativas y avanzar
              hacia acuerdos de pago en menos tiempo.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento organizado</h4>

            <p>
              Facilita mantener conversaciones activas con clientes que aún no
              han realizado su pago.
            </p>
          </div>

          <div>
            <h4>✔ Experiencia menos invasiva</h4>

            <p>
              Una comunicación profesional genera mayor confianza que los
              mensajes repetitivos o llamadas constantes.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ El objetivo no es enviar más mensajes, sino crear conversaciones que
          aumenten la posibilidad de pago.
        </div>
      </section>
      {/*  ESTRATEGIA PASO A PASO  */}

      <section id="estrategia" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo implementar una estrategia de cobro por WhatsApp paso a paso
        </h2>

        <p className={styles.text}>
          Una cobranza efectiva por WhatsApp no consiste únicamente en enviar
          recordatorios. Las empresas necesitan establecer un proceso organizado
          que permita contactar clientes, identificar su situación y facilitar
          soluciones de pago.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ 1. Analizar la cartera pendiente</h4>

            <p>
              Antes de contactar al cliente es importante conocer el valor
              adeudado, días de mora, historial de pagos y prioridad de cada
              obligación.
            </p>
          </div>

          <div>
            <h4>✔ 2. Realizar un primer contacto profesional</h4>

            <p>
              El primer mensaje debe ser claro, respetuoso y orientado a generar
              una conversación, no simplemente exigir un pago.
            </p>
          </div>

          <div>
            <h4>✔ 3. Hacer seguimiento organizado</h4>

            <p>
              Los clientes que no responden requieren una secuencia de
              seguimiento definida para aumentar las posibilidades de
              recuperación.
            </p>
          </div>

          <div>
            <h4>✔ 4. Facilitar acuerdos de pago</h4>

            <p>
              Ofrecer alternativas permite reducir barreras y aumentar la
              probabilidad de cumplimiento.
            </p>
          </div>

          <div>
            <h4>✔ 5. Medir resultados del proceso</h4>

            <p>
              Una estrategia profesional debe analizar respuestas, pagos
              recuperados y efectividad de cada contacto.
            </p>
          </div>
        </div>
      </section>

      {/*  MENSAJES DE COBRO  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Ejemplos de mensajes de cobro por WhatsApp para clientes con pagos
          pendientes
        </h2>

        <p className={styles.text}>
          La forma en que una empresa comunica una obligación pendiente puede
          influir directamente en la respuesta del cliente. Un mensaje efectivo
          debe ser profesional, claro y facilitar una solución.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>
              <strong>Recordatorio inicial:</strong>
              <br />
              Hola, queremos informarte que actualmente tienes un pago
              pendiente. Estamos disponibles para ayudarte a revisar opciones y
              encontrar una alternativa de pago.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              <strong>Seguimiento:</strong>
              <br />
              Queremos validar contigo el estado de tu obligación y conocer si
              necesitas apoyo para programar tu pago.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              <strong>Invitación a acuerdo:</strong>
              <br />
              Podemos revisar diferentes alternativas para facilitar el
              cumplimiento de tu obligación pendiente.
            </p>
          </div>

          <div className={styles.card}>
            <p>
              <strong>Confirmación:</strong>
              <br />
              Gracias por tu respuesta. Confirmaremos los detalles del acuerdo y
              continuaremos acompañando el proceso.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Los mensajes efectivos de cobranza buscan generar respuesta y
          negociación, no únicamente presión sobre el cliente.
        </div>
      </section>

      {/*  AUTOMATIZACIÓN  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Automatización del cobro por WhatsApp para empresas
        </h2>

        <p className={styles.text}>
          Cuando una empresa maneja una cartera amplia, realizar seguimientos
          manuales puede consumir tiempo y generar errores. La tecnología
          permite organizar clientes, programar acciones y mejorar la gestión
          del recaudo.
        </p>

        <div className={styles.grid}>
          {[
            "Organización de clientes con pagos pendientes",

            "Seguimiento de obligaciones vencidas",

            "Recordatorios programados",

            "Control del historial de contacto",

            "Mayor productividad del equipo de cobranza",

            "Información para tomar mejores decisiones",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  COMPARATIVO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cobranza tradicional vs cobro por WhatsApp: diferencias para empresas
        </h2>

        <p className={styles.text}>
          Los hábitos de comunicación de los clientes han cambiado. Por esta
          razón, muchas empresas combinan canales tradicionales con herramientas
          digitales que permiten mejorar la recuperación de cartera.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Cobranza tradicional sin estrategia digital</h4>

            <ul>
              <li>Contactos repetitivos sin seguimiento organizado</li>

              <li>Dificultad para identificar clientes prioritarios</li>

              <li>Mayor tiempo invertido en llamadas manuales</li>

              <li>Poca información sobre resultados del proceso</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Cobro por WhatsApp con estrategia empresarial</h4>

            <ul>
              <li>Comunicación directa con clientes</li>

              <li>Seguimiento organizado de obligaciones</li>

              <li>Mayor facilidad para negociar pagos</li>

              <li>Mejor control del proceso de recuperación</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  BENEFICIOS  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar una estrategia de cobro por WhatsApp
        </h2>

        <p className={styles.text}>
          Una correcta gestión del canal WhatsApp puede ayudar a las empresas a
          mejorar la comunicación con sus clientes y fortalecer sus procesos de
          recuperación de cartera.
        </p>

        <div className={styles.benefits}>
          <span>✔ Mayor velocidad de contacto</span>

          <span>✔ Mejor experiencia del cliente</span>

          <span>✔ Seguimiento más organizado</span>

          <span>✔ Reducción de tiempos de recuperación</span>

          <span>✔ Más oportunidades de negociación</span>

          <span>✔ Información para mejorar decisiones</span>
        </div>
      </section>

      {/*  COBRANDO ONLINE  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo Cobrando Online ayuda a mejorar la gestión de cartera
        </h2>

        <p className={styles.text}>
          Cobrar por WhatsApp es más efectivo cuando existe un proceso
          organizado detrás. Cobrando Online permite a las empresas fortalecer
          la gestión de cartera mediante herramientas digitales enfocadas en
          seguimiento, organización y recuperación de pagos.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Gestión centralizada</h3>

            <p>
              Organiza la información de clientes y obligaciones pendientes en
              un solo lugar para facilitar el control del proceso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento inteligente</h3>

            <p>
              Mantén control sobre contactos realizados, avances y próximos
              pasos para cada cliente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor eficiencia operativa</h3>

            <p>
              Reduce tareas manuales y permite que los equipos enfoquen sus
              esfuerzos en clientes con mayor posibilidad de recuperación.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ La tecnología no reemplaza la estrategia de cobro: la convierte en
          un proceso más organizado, medible y eficiente.
        </div>
      </section>

      {/*  FAQ VISUAL  */}

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre cobro por WhatsApp
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Es legal cobrar por WhatsApp en Colombia?</h4>

            <p>
              Sí, siempre que la comunicación respete las normas aplicables,
              utilice información correcta y mantenga un trato adecuado con el
              cliente.
            </p>
          </div>

          <div>
            <h4>¿Cuántos mensajes debo enviar para recuperar una cartera?</h4>

            <p>
              No existe una cantidad fija. Lo importante es contar con una
              estrategia organizada de contacto, seguimiento y negociación.
            </p>
          </div>

          <div>
            <h4>¿WhatsApp reemplaza otros canales de cobranza?</h4>

            <p>
              Puede complementar llamadas, correos y otros procesos,
              convirtiéndose en un canal adicional para mejorar la comunicación.
            </p>
          </div>
        </div>
      </section>

      {/*  CTA  */}

      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Mejora tu recuperación de cartera usando estrategias digitales
          </h2>

          <p className={styles.ctaText}>
            Implementa procesos más organizados para contactar clientes,
            realizar seguimiento y aumentar las oportunidades de pago.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola,%20quiero%20información%20sobre%20Cobrando%20Online."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola,%20quiero%20conocer%20cómo%20funciona%20Cobrando%20Online."
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
