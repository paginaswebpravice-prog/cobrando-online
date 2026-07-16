"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecordatoriosAutomaticosContent() {
  return (
    <main className={styles.pageWrapper}>
      {/*  HERO  */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className={styles.badge}>
              Automatización de pagos para empresas en Colombia
            </span>

            <h1 className={styles.title}>
              Recordatorios automáticos de pago: reduce la mora y mejora el
              recaudo de tu empresa
            </h1>

            <p className={styles.description}>
              Evita pagos atrasados mediante recordatorios automáticos,
              seguimiento organizado y comunicación oportuna con tus clientes.
              Optimiza tu flujo de caja y mejora la gestión de cartera con
              procesos digitales.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Automatizar recordatorios
              </a>

              <a href="#funcionamiento" className={styles.secondary}>
                Ver cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  PROBLEMA  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Los pagos atrasados muchas veces empiezan por falta de seguimiento
        </h2>

        <p className={styles.text}>
          Muchas empresas pierden oportunidades de recaudo porque esperan hasta
          que una obligación esté vencida para contactar al cliente. Sin un
          proceso preventivo, aumentan los retrasos, la cartera vencida y el
          tiempo dedicado a realizar cobros manuales.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes olvidan fechas importantes de pago",

            "Seguimientos realizados demasiado tarde",

            "Equipos dedicando horas a tareas repetitivas",

            "Falta de comunicación antes del vencimiento",

            "Incremento de cartera vencida",

            "Pérdida de control sobre obligaciones pendientes",
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
          ⚠ Esperar a que un cliente entre en mora puede hacer más difícil la
          recuperación del pago.
        </div>
      </section>

      {/*  QUE SON LOS RECORDATORIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué son los recordatorios automáticos de pago y cómo funcionan?
        </h2>

        <p className={styles.text}>
          Los recordatorios automáticos de pago son mensajes programados que
          permiten informar a los clientes sobre fechas próximas de pago,
          obligaciones pendientes o vencimientos. Su objetivo es prevenir
          retrasos y mantener una comunicación constante sin depender de
          procesos manuales.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Prevención de mora</h4>

            <p>
              Permiten contactar al cliente antes de la fecha límite para
              aumentar la posibilidad de pago oportuno.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento automático</h4>

            <p>
              Mantienen una comunicación organizada después del vencimiento
              cuando un pago aún está pendiente.
            </p>
          </div>

          <div>
            <h4>✔ Menos tareas manuales</h4>

            <p>
              Reducen el tiempo dedicado a enviar mensajes individuales y
              realizar seguimientos repetitivos.
            </p>
          </div>

          <div>
            <h4>✔ Mayor control de cartera</h4>

            <p>
              Facilitan conocer qué clientes necesitan seguimiento y cuáles
              requieren acciones adicionales.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Una estrategia preventiva de pagos ayuda a recuperar cartera antes
          de que se convierta en un problema.
        </div>
      </section>

      {/*  TIPOS DE RECORDATORIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Tipos de recordatorios automáticos de pago que puede utilizar una
          empresa
        </h2>

        <p className={styles.text}>
          No todos los clientes requieren el mismo tipo de comunicación. Una
          estrategia efectiva utiliza diferentes recordatorios dependiendo del
          momento del pago y del comportamiento de cada obligación.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Recordatorios preventivos</h3>

            <p>
              Se envían antes de la fecha de vencimiento para ayudar al cliente
              a recordar su obligación y evitar retrasos innecesarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Avisos el día del pago</h3>

            <p>
              Permiten recordar oportunamente que la fecha límite llegó,
              facilitando que el cliente realice el pago a tiempo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento de pagos vencidos</h3>

            <p>
              Ayudan a contactar clientes con obligaciones pendientes mediante
              mensajes organizados después del vencimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Recordatorios de acuerdos</h3>

            <p>
              Facilitan el seguimiento de compromisos adquiridos por clientes
              que acordaron fechas específicas de pago.
            </p>
          </div>
        </div>
      </section>

      {/*  COMPARATIVO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cobro manual vs recordatorios automáticos de pago
        </h2>

        <p className={styles.text}>
          La diferencia principal está en la capacidad de anticiparse. Mientras
          los procesos manuales suelen actuar cuando existe retraso, la
          automatización permite mantener una comunicación constante con los
          clientes.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Gestión manual de recordatorios</h4>

            <ul>
              <li>Dependencia del equipo encargado del cobro</li>

              <li>Posibles olvidos en fechas importantes</li>

              <li>Seguimientos difíciles de controlar</li>

              <li>Mayor tiempo operativo</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Recordatorios automáticos organizados</h4>

            <ul>
              <li>Comunicación programada</li>

              <li>Seguimiento constante</li>

              <li>Menos tareas repetitivas</li>

              <li>Mayor control de cartera</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  FUNCIONAMIENTO  */}
      <section id="funcionamiento" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo funcionan los recordatorios automáticos de pago paso a paso
        </h2>

        <p className={styles.text}>
          La automatización permite definir cuándo contactar a cada cliente, qué
          mensaje enviar y qué acción realizar dependiendo del estado de la
          obligación.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ 1. Registro de obligaciones</h4>

            <p>
              Se identifica la información del cliente, valor pendiente y fecha
              esperada de pago.
            </p>
          </div>

          <div>
            <h4>✔ 2. Programación de mensajes</h4>

            <p>
              Se establecen momentos estratégicos para enviar recordatorios
              antes o después del vencimiento.
            </p>
          </div>

          <div>
            <h4>✔ 3. Comunicación automática</h4>

            <p>
              El cliente recibe avisos mediante canales digitales definidos por
              la empresa.
            </p>
          </div>

          <div>
            <h4>✔ 4. Seguimiento del resultado</h4>

            <p>
              La empresa puede identificar respuestas, pagos realizados y
              clientes pendientes.
            </p>
          </div>

          <div>
            <h4>✔ 5. Acciones posteriores</h4>

            <p>
              Los casos que requieren atención adicional pueden pasar a procesos
              de seguimiento más específicos.
            </p>
          </div>
        </div>
      </section>

      {/*  CANALES  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Canales utilizados para enviar recordatorios automáticos de pago
        </h2>

        <p className={styles.text}>
          Las empresas pueden combinar diferentes canales digitales para
          aumentar las posibilidades de contacto y mejorar la experiencia del
          cliente.
        </p>

        <div className={styles.grid}>
          {[
            "WhatsApp empresarial",

            "Correo electrónico",

            "Mensajes SMS",

            "Notificaciones digitales",

            "Plataformas de gestión de cartera",

            "Sistemas internos empresariales",
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

      {/*  EMPRESAS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Empresas que pueden mejorar su recaudo con recordatorios automáticos
          de pago
        </h2>

        <p className={styles.text}>
          Cualquier empresa que dependa de pagos oportunos puede beneficiarse de
          procesos automatizados. Especialmente aquellas organizaciones que
          gestionan múltiples clientes u obligaciones mensuales.
        </p>

        <div className={styles.grid}>
          {[
            "Empresas con pagos recurrentes",

            "Instituciones del sector salud",

            "Empresas de servicios",

            "Negocios con facturación mensual",

            "Empresas con cartera activa",

            "Organizaciones que buscan escalar procesos",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Cuando una empresa tiene muchos clientes, recordar pagos manualmente
          deja de ser eficiente y limita la capacidad de crecimiento.
        </div>
      </section>

      {/*  ERRORES  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Errores frecuentes al gestionar recordatorios de pago manualmente
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>❌ Contactar solamente cuando existe mora</h4>

            <p>
              Esperar demasiado tiempo puede dificultar la recuperación del pago
              y aumentar la cartera vencida.
            </p>
          </div>

          <div>
            <h4>❌ Enviar mensajes sin planificación</h4>

            <p>
              Una comunicación desordenada puede generar poca respuesta y una
              mala experiencia para el cliente.
            </p>
          </div>

          <div>
            <h4>❌ No hacer seguimiento</h4>

            <p>
              Muchos pagos se pierden porque no existe continuidad después del
              primer contacto.
            </p>
          </div>

          <div>
            <h4>❌ Depender completamente de procesos manuales</h4>

            <p>
              El crecimiento de clientes aumenta la carga operativa y dificulta
              mantener un control adecuado.
            </p>
          </div>
        </div>
      </section>

      {/*  COBRANDO ONLINE  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo Cobrando Online ayuda a organizar la gestión de pagos
        </h2>

        <p className={styles.text}>
          Cobrando Online permite a las empresas estructurar procesos digitales
          de seguimiento, facilitando la comunicación con clientes y ayudando a
          mejorar la organización de la cartera.
        </p>

        <div className={styles.grid}>
          {[
            "Seguimiento organizado de obligaciones",

            "Procesos digitales de comunicación",

            "Mayor control sobre clientes pendientes",

            "Reducción de tareas repetitivas",

            "Mejor planificación del recaudo",

            "Información para tomar mejores decisiones",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>✔ {item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ La automatización no reemplaza la gestión humana: permite que los
          equipos dediquen más tiempo a los casos que realmente requieren
          atención.
        </div>
      </section>

      {/*  BENEFICIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar recordatorios automáticos de pago
        </h2>

        <div className={styles.benefits}>
          <span>✔ Menor cartera vencida</span>

          <span>✔ Mayor puntualidad en pagos</span>

          <span>✔ Menos procesos manuales</span>

          <span>✔ Mejor seguimiento comercial</span>

          <span>✔ Mayor productividad del equipo</span>

          <span>✔ Mejor experiencia del cliente</span>
        </div>
      </section>

      {/*  CTA  */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Automatiza tus recordatorios de pago y mejora tu recaudo
          </h2>

          <p className={styles.ctaText}>
            Reduce retrasos, organiza el seguimiento de clientes y optimiza la
            gestión de cartera con procesos digitales diseñados para empresas en
            Colombia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recordatorios%20autom%C3%A1ticos%20de%20pago."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recordatorios%20autom%C3%A1ticos%20de%20pago."
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
