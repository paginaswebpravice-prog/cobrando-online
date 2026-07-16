"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoFreelancersContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>
              Recuperación de pagos para freelancers y trabajadores
              independientes en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Tus clientes no te pagan? Recupera pagos atrasados como
              freelancer en Colombia sin perder la relación comercial
            </h1>

            <p className={styles.description}>
              Si eres diseñador, desarrollador, consultor, community manager,
              fotógrafo, arquitecto, abogado, contador o cualquier trabajador
              independiente, podemos ayudarte a recuperar facturas vencidas,
              cobrar clientes morosos y mejorar tu proceso de recaudo mediante
              estrategias de cobranza prejurídica y jurídica adaptadas a
              freelancers en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mis pagos ahora
              </a>

              <a href="#proceso" className={styles.secondary}>
                Conocer el proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué tantos freelancers en Colombia tienen clientes que no pagan
          sus facturas o retrasan los pagos?
        </h2>

        <p className={styles.text}>
          Uno de los mayores retos para los freelancers y trabajadores
          independientes en Colombia no es conseguir clientes, sino lograr que
          paguen oportunamente. Diseñadores gráficos, desarrolladores de
          software, consultores, fotógrafos, arquitectos, redactores, community
          managers, abogados, contadores y otros profesionales suelen enfrentar
          retrasos constantes, excusas, pagos parciales o incluso clientes que
          desaparecen después de recibir el trabajo.
        </p>

        <p className={styles.text}>
          En la mayoría de los casos el problema no está en la calidad del
          servicio, sino en la ausencia de procesos de cobranza, contratos
          claros, seguimiento a las facturas y estrategias para recuperar los
          pagos pendientes sin deteriorar la relación comercial.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes que reciben el trabajo y luego dejan de responder.",
            "Facturas vencidas durante semanas o incluso meses.",
            "Pagos parciales que nunca terminan de completarse.",
            "Falta de contratos o acuerdos escritos que respalden el servicio.",
            "Seguimiento insuficiente después de enviar la factura.",
            "Miedo a insistir por temor a perder futuros proyectos.",
            "Dependencia económica de pocos clientes.",
            "Procesos de cobro improvisados que reducen la recuperación del dinero.",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.warningBox}>
          <strong>No cobrar a tiempo afecta mucho más que un proyecto.</strong>{" "}
          Cada factura vencida disminuye tu liquidez, limita tu crecimiento
          profesional y obliga a trabajar más horas para compensar ingresos que
          ya deberías haber recibido.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo los clientes morosos afectan tus ingresos, tu estabilidad
          financiera y el crecimiento de tu actividad como freelancer
        </h2>

        <p className={styles.text}>
          Cuando un cliente retrasa un pago no solo afecta una factura
          pendiente. También impacta tu flujo de caja, dificulta el cumplimiento
          de tus obligaciones y limita la posibilidad de aceptar nuevos
          proyectos. Para un freelancer, cada pago atrasado representa tiempo,
          dinero y oportunidades perdidas que afectan directamente su
          crecimiento profesional.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Flujo de caja inestable</h4>
            <p>
              Los pagos demorados dificultan cubrir gastos personales,
              herramientas, impuestos y la operación diaria de tu actividad
              profesional.
            </p>
          </div>

          <div>
            <h4>✔ Pérdida de tiempo productivo</h4>
            <p>
              En lugar de concentrarte en nuevos clientes y proyectos, debes
              dedicar horas a realizar llamadas, enviar correos y hacer
              seguimiento constante a quienes aún no pagan.
            </p>
          </div>

          <div>
            <h4>✔ Menor capacidad de crecimiento</h4>
            <p>
              Sin liquidez suficiente resulta más difícil invertir en formación,
              publicidad, equipos, software o contratar apoyo para hacer crecer
              tu negocio.
            </p>
          </div>

          <div>
            <h4>✔ Estrés y desgaste profesional</h4>
            <p>
              La incertidumbre de no saber cuándo recibirás el pago genera
              ansiedad y afecta la productividad, la motivación y la
              planificación financiera.
            </p>
          </div>

          <div>
            <h4>✔ Desvalorización de tu trabajo</h4>
            <p>
              Permitir retrasos constantes envía el mensaje de que los plazos de
              pago pueden incumplirse sin consecuencias, reduciendo el valor
              percibido de tus servicios profesionales.
            </p>
          </div>

          <div>
            <h4>✔ Riesgo de cartera incobrable</h4>
            <p>
              Mientras más tiempo pasa sin iniciar una gestión organizada de
              cobro, menor puede ser la probabilidad de recuperar el dinero
              pendiente.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          <strong>Cobrar oportunamente no significa perder clientes.</strong> Un
          proceso profesional de seguimiento y cobranza transmite organización,
          fortalece tu imagen y aumenta las probabilidades de recuperar tus
          pagos sin afectar la relación comercial.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo cobrar clientes morosos y recuperar pagos atrasados como
          freelancer sin afectar tu reputación profesional
        </h2>

        <p className={styles.text}>
          Recuperar un pago pendiente no depende únicamente de insistir al
          cliente. Los mejores resultados se obtienen mediante un proceso
          organizado de seguimiento, comunicación estratégica y negociación. Un
          sistema de cobranza profesional aumenta las probabilidades de recaudo,
          reduce los tiempos de espera y fortalece la relación comercial con
          clientes que sí desean cumplir sus obligaciones.
        </p>

        <p className={styles.text}>
          En Cobrando Online ayudamos a freelancers y trabajadores
          independientes a implementar procesos efectivos para recuperar
          facturas vencidas, realizar seguimiento de pagos y disminuir el riesgo
          de que una deuda termine siendo incobrable.
        </p>

        <div className={styles.grid}>
          {[
            {
              titulo: "Contratos y acuerdos claros",
              texto:
                "Definir condiciones de pago, entregables y fechas desde el inicio reduce significativamente los incumplimientos.",
            },
            {
              titulo: "Anticipos antes de iniciar",
              texto:
                "Solicitar anticipos del 30 % al 50 % disminuye el riesgo financiero y mejora la liquidez del proyecto.",
            },
            {
              titulo: "Facturación organizada",
              texto:
                "Emitir facturas correctamente y enviarlas oportunamente facilita el seguimiento de cada obligación.",
            },
            {
              titulo: "Seguimiento preventivo",
              texto:
                "Recordatorios antes y después del vencimiento ayudan a evitar retrasos innecesarios.",
            },
            {
              titulo: "Negociación profesional",
              texto:
                "Cuando un cliente presenta dificultades de pago es posible acordar alternativas que permitan recuperar el dinero.",
            },
            {
              titulo: "Escalamiento de cobranza",
              texto:
                "Si el cliente continúa incumpliendo, es posible avanzar hacia etapas de cobranza más estructuradas para aumentar la recuperación.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Un proceso profesional de cobranza puede aumentar la recuperación de
          pagos, mejorar tu flujo de caja y permitirte dedicar más tiempo a
          conseguir nuevos clientes en lugar de perseguir facturas vencidas.
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar pagos atrasados de tus clientes paso a paso
        </h2>

        <p className={styles.text}>
          Recuperar una factura vencida no consiste únicamente en enviar
          mensajes de cobro. Un proceso organizado permite aumentar la
          probabilidad de recaudo, reducir el tiempo de recuperación y mantener
          una comunicación profesional con el cliente. Estas son las etapas que
          normalmente generan mejores resultados para freelancers y trabajadores
          independientes.
        </p>

        <div className={styles.grid}>
          {[
            {
              titulo: "1. Diagnóstico de la deuda",
              texto:
                "Se revisa el valor pendiente, la antigüedad de la factura, los acuerdos existentes y el historial del cliente para definir la mejor estrategia de recuperación.",
            },
            {
              titulo: "2. Contacto inicial",
              texto:
                "Se realiza una comunicación cordial y profesional recordando la obligación pendiente y verificando si existe algún inconveniente para realizar el pago.",
            },
            {
              titulo: "3. Seguimiento estratégico",
              texto:
                "Se establecen recordatorios periódicos mediante diferentes canales para mantener activa la gestión sin generar conflictos innecesarios.",
            },
            {
              titulo: "4. Negociación de alternativas",
              texto:
                "Cuando el cliente presenta dificultades económicas pueden acordarse pagos parciales, cuotas o nuevas fechas que faciliten el recaudo.",
            },
            {
              titulo: "5. Formalización de compromisos",
              texto:
                "Todo acuerdo alcanzado debe quedar documentado para facilitar el seguimiento y reducir futuros incumplimientos.",
            },
            {
              titulo: "6. Escalamiento de la gestión",
              texto:
                "Si el cliente continúa incumpliendo, la cobranza puede avanzar hacia etapas más especializadas para aumentar las posibilidades de recuperar el dinero.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{step.titulo}</h3>
              <p>{step.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Iniciar la gestión de cobranza de manera oportuna suele aumentar las
          probabilidades de recuperar el pago antes de que la deuda continúe
          envejeciendo y se vuelva más difícil de recaudar.
        </div>
      </section>

      {/*  BENEFICIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar un proceso profesional de cobranza para
          freelancers
        </h2>

        <p className={styles.text}>
          Tener una estrategia organizada para recuperar pagos no solo aumenta
          la probabilidad de cobrar las facturas pendientes. También mejora la
          estabilidad financiera, fortalece la relación con los clientes
          responsables y permite dedicar más tiempo a desarrollar nuevos
          proyectos en lugar de perseguir pagos atrasados.
        </p>

        <div className={styles.benefits}>
          <span>✔ Mayor recuperación de pagos pendientes.</span>

          <span>✔ Mejor flujo de caja para tu actividad profesional.</span>

          <span>✔ Menor cantidad de clientes con facturas vencidas.</span>

          <span>✔ Seguimiento organizado de cada cuenta por cobrar.</span>

          <span>✔ Más tiempo para conseguir nuevos clientes y proyectos.</span>

          <span>✔ Procesos de cobro más profesionales y efectivos.</span>

          <span>✔ Disminución del riesgo de cartera incobrable.</span>

          <span>✔ Mayor organización administrativa y financiera.</span>

          <span>✔ Mejor experiencia para los clientes que sí cumplen.</span>

          <span>✔ Mayor tranquilidad al controlar tus cuentas por cobrar.</span>
        </div>

        <div className={styles.highlightBox}>
          <strong>
            Una buena gestión de cobranza comienza mucho antes del vencimiento
            de la factura.
          </strong>{" "}
          Contar con procesos claros de seguimiento, comunicación y negociación
          ayuda a reducir la mora y aumentar el porcentaje de recaudo sin
          afectar la imagen profesional del freelancer.
        </div>
      </section>

      {/*  PREGUNTAS FRECUENTES  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre recuperación de pagos para freelancers en
          Colombia
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>
              ¿Qué puedo hacer si un cliente no responde después de entregar el
              trabajo?
            </h4>
            <p>
              Lo recomendable es iniciar un proceso de seguimiento organizado
              mediante correos electrónicos, mensajes y llamadas, documentando
              cada intento de contacto. Entre más rápido se gestione la
              cobranza, mayores suelen ser las probabilidades de recuperar el
              pago pendiente.
            </p>
          </div>

          <div>
            <h4>
              ¿Cómo cobrar a un cliente sin afectar la relación comercial?
            </h4>
            <p>
              Una comunicación clara, respetuosa y profesional permite recordar
              las obligaciones pendientes sin generar conflictos. El objetivo es
              mantener la relación con los clientes responsables mientras se
              incrementan las posibilidades de recaudo.
            </p>
          </div>

          <div>
            <h4>¿Qué pasa si nunca firmé un contrato con mi cliente?</h4>
            <p>
              Muchos freelancers trabajan únicamente con cotizaciones, correos
              electrónicos, conversaciones o facturas. Antes de asumir que el
              dinero está perdido, es recomendable analizar la información
              disponible para definir la mejor estrategia de recuperación.
            </p>
          </div>

          <div>
            <h4>
              ¿Cuánto tiempo debería esperar para empezar la gestión de
              cobranza?
            </h4>
            <p>
              No es recomendable esperar varios meses. Iniciar el seguimiento
              poco después del vencimiento de la factura suele mejorar las
              probabilidades de recuperar el dinero y evita que la deuda
              continúe envejeciendo.
            </p>
          </div>

          <div>
            <h4>
              ¿Puedo recuperar varias facturas pendientes al mismo tiempo?
            </h4>
            <p>
              Sí. Cuando un cliente tiene varias obligaciones vencidas es
              posible desarrollar una estrategia integral de seguimiento para
              aumentar la recuperación de toda la cartera pendiente.
            </p>
          </div>

          <div>
            <h4>¿Cómo evitar que los clientes vuelvan a retrasar los pagos?</h4>
            <p>
              Implementar contratos claros, solicitar anticipos, establecer
              fechas de pago definidas, realizar seguimiento preventivo y contar
              con procesos de cobranza ayuda a reducir significativamente la
              mora futura.
            </p>
          </div>
        </div>
      </section>

      {/*  ERRORES COMUNES  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Errores que cometen muchos freelancers al cobrar a sus clientes y cómo
          evitarlos
        </h2>

        <p className={styles.text}>
          En muchos casos, el problema no es que el cliente no quiera pagar,
          sino que el proceso de cobranza nunca fue definido desde el inicio del
          proyecto. Corregir algunos errores frecuentes puede mejorar
          significativamente la recuperación de pagos y reducir la cantidad de
          facturas vencidas.
        </p>

        <div className={styles.grid}>
          {[
            {
              titulo: "No solicitar anticipos",
              texto:
                "Iniciar un proyecto sin recibir un pago inicial aumenta el riesgo de trabajar durante semanas o meses sin recibir ingresos.",
            },
            {
              titulo: "No establecer fechas de pago",
              texto:
                "Cuando no existen plazos definidos, muchos clientes retrasan el pago indefinidamente porque no perciben una fecha límite clara.",
            },
            {
              titulo: "Aceptar acuerdos únicamente por WhatsApp",
              texto:
                "Es recomendable documentar las condiciones del servicio mediante cotizaciones, contratos, órdenes de servicio o correos electrónicos.",
            },
            {
              titulo: "Esperar demasiado para cobrar",
              texto:
                "Mientras más tiempo permanezca vencida una factura, más difícil suele ser recuperar el dinero pendiente.",
            },
            {
              titulo: "No realizar seguimiento",
              texto:
                "Muchos freelancers envían la factura y esperan el pago sin volver a contactar al cliente oportunamente.",
            },
            {
              titulo: "Cobrar únicamente cuando existe un problema",
              texto:
                "Un seguimiento preventivo antes del vencimiento suele reducir considerablemente la mora y mejorar el recaudo.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Implementar procesos de cobranza desde el primer día del proyecto
          ayuda a disminuir los retrasos, mejorar el flujo de caja y aumentar la
          recuperación de pagos pendientes.
        </div>
      </section>

      {/*  A QUIÉN VA DIRIGIDO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué freelancers y trabajadores independientes pueden beneficiarse de
          una gestión profesional de cobranza?
        </h2>

        <p className={styles.text}>
          Cualquier profesional independiente que facture sus servicios puede
          enfrentar clientes que retrasan o incumplen los pagos. Implementar un
          proceso organizado de seguimiento y recuperación de cartera ayuda a
          mejorar el flujo de caja, disminuir la mora y reducir el riesgo de
          pérdidas económicas, sin importar el sector en el que trabaje.
        </p>

        <div className={styles.grid}>
          {[
            {
              titulo: "Desarrolladores de software",
              texto:
                "Recupera pagos por desarrollo web, aplicaciones, mantenimiento de software y proyectos tecnológicos entregados.",
            },
            {
              titulo: "Diseñadores gráficos y UX/UI",
              texto:
                "Gestiona el cobro de diseños, identidad corporativa, piezas publicitarias y proyectos creativos pendientes de pago.",
            },
            {
              titulo: "Consultores y asesores",
              texto:
                "Realiza seguimiento a honorarios derivados de consultorías empresariales, financieras, comerciales o estratégicas.",
            },
            {
              titulo: "Community Managers y especialistas en marketing",
              texto:
                "Recupera pagos de campañas digitales, administración de redes sociales, pauta y posicionamiento SEO.",
            },
            {
              titulo: "Fotógrafos y productores audiovisuales",
              texto:
                "Gestiona el recaudo de sesiones fotográficas, producción de video, edición y contenido audiovisual.",
            },
            {
              titulo: "Arquitectos e ingenieros",
              texto:
                "Haz seguimiento a pagos pendientes por diseños, planos, supervisión de obras y consultorías técnicas.",
            },
            {
              titulo: "Contadores y revisores fiscales",
              texto:
                "Mejora el recaudo de honorarios por servicios contables, tributarios y financieros prestados a empresas y personas.",
            },
            {
              titulo: "Abogados independientes",
              texto:
                "Organiza el seguimiento de honorarios, asesorías y consultorías jurídicas pendientes de pago por parte de los clientes.",
            },
            {
              titulo: "Traductores, redactores y creadores de contenido",
              texto:
                "Recupera pagos correspondientes a artículos, traducciones, copywriting y otros servicios editoriales.",
            },
            {
              titulo: "Cualquier trabajador independiente",
              texto:
                "Si prestas servicios profesionales y emites facturas o cuentas de cobro, puedes implementar procesos de cobranza para recuperar pagos atrasados.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ No importa si trabajas con personas naturales, empresas o
          emprendimientos. Un proceso profesional de cobranza puede ayudarte a
          recuperar pagos pendientes y mantener una cartera mucho más saludable.
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera pagos atrasados y deja de perder dinero por clientes
            morosos
          </h2>

          <p className={styles.ctaText}>
            No sigas perdiendo ingresos por clientes que no pagan. Aprende a
            cobrar de forma profesional o recibe ayuda para recuperar tu dinero.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20ayuda%20para%20recuperar%20pagos%20como%20freelancer."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría ahora
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
