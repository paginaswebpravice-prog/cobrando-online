"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoPymesContent() {
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
              Recuperación de cartera para PYMES en Colombia
            </span>

            <h1 className={styles.title}>
              Recupera la cartera vencida de tu PYME, reduce la mora y mejora el
              flujo de caja sin perder clientes
            </h1>

            <p className={styles.description}>
              Si tu empresa tiene clientes que retrasan sus pagos, facturas
              vencidas o cuentas por cobrar acumuladas, implementa una
              estrategia profesional de recuperación de cartera que te permita
              mejorar la liquidez, fortalecer el flujo de caja y recuperar
              ingresos sin deteriorar la relación comercial con tus clientes.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mi cartera ahora
              </a>

              <a href="#proceso" className={styles.secondary}>
                Conocer cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ LA CARTERA VENCIDA ES UN PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué la cartera vencida se ha convertido en uno de los mayores
          problemas para las PYMES en Colombia?
        </h2>

        <p className={styles.text}>
          Para una pequeña o mediana empresa, cada factura pendiente representa
          dinero que deja de ingresar al negocio. Cuando los clientes retrasan
          sus pagos, la empresa pierde liquidez, aumenta la presión sobre el
          flujo de caja y reduce su capacidad para cumplir con proveedores,
          nómina, impuestos e inversiones. Una gestión de cartera eficiente
          permite recuperar esos recursos antes de que la mora continúe
          creciendo.
        </p>

        <p className={styles.text}>
          Muchas PYMES cuentan con excelentes productos o servicios, pero no
          tienen un proceso estructurado para hacer seguimiento a las cuentas
          por cobrar. Como consecuencia, las facturas vencidas se acumulan, los
          clientes morosos ganan tiempo y cada vez resulta más difícil recuperar
          el dinero adeudado. Actuar desde los primeros días de mora incrementa
          considerablemente las probabilidades de recaudo.
        </p>

        <div className={styles.highlightBox}>
          Una estrategia profesional de recuperación de cartera permite reducir
          la mora, mejorar el flujo de caja, fortalecer la estabilidad
          financiera y mantener relaciones comerciales saludables con los
          clientes que sí desean cumplir sus obligaciones.
        </div>
      </section>

      {/* PRINCIPALES PROBLEMAS DE CARTERA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Principales problemas de cartera que impiden el crecimiento de una
          PYME en Colombia
        </h2>

        <p className={styles.text}>
          La mayoría de las pequeñas y medianas empresas no tienen dificultades
          para vender, sino para cobrar oportunamente. La ausencia de procesos
          de seguimiento, políticas de crédito y estrategias de cobranza provoca
          que las cuentas por cobrar aumenten mes tras mes, afectando la
          estabilidad financiera del negocio.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes que incumplen las fechas de pago acordadas.",
            "Facturas vencidas que permanecen sin seguimiento durante semanas o meses.",
            "Procesos de cobranza informales que dependen únicamente de llamadas o mensajes ocasionales.",
            "Falta de políticas claras para otorgar crédito a nuevos clientes.",
            "Acumulación de cartera vencida que reduce la liquidez de la empresa.",
            "Exceso de tiempo invertido por el personal administrativo realizando cobros manuales.",
            "Clientes que solicitan prórrogas constantemente sin cumplir los nuevos compromisos.",
            "Ausencia de indicadores para medir la recuperación de cartera y el comportamiento de los deudores.",
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
          Entre más tiempo permanezca una factura sin gestión de cobro, menores
          serán las probabilidades de recuperación. Actuar desde los primeros
          días de mora ayuda a proteger la liquidez y evita que la cartera
          continúe creciendo.
        </div>
      </section>

      {/* CARTERA VENCIDA AFECTA EL FLUJO DE CAJA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta el flujo de caja, la rentabilidad y el
          crecimiento de una PYME
        </h2>

        <p className={styles.text}>
          La cartera vencida no solo representa dinero pendiente de recaudar.
          También limita la capacidad de la empresa para operar con normalidad,
          invertir en nuevas oportunidades y cumplir oportunamente sus
          obligaciones financieras. Cada factura sin pagar reduce la liquidez
          disponible y aumenta la presión sobre el flujo de caja.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Menor liquidez para operar</h4>
            <p>
              La empresa dispone de menos recursos para cubrir nómina,
              proveedores, impuestos y demás gastos operativos.
            </p>
          </div>

          <div>
            <h4>✔ Disminución del flujo de caja</h4>
            <p>
              Los ingresos dejan de ingresar en las fechas previstas,
              dificultando la planeación financiera y la estabilidad del
              negocio.
            </p>
          </div>

          <div>
            <h4>✔ Menor capacidad de crecimiento</h4>
            <p>
              La falta de liquidez impide invertir en personal, tecnología,
              inventario o expansión comercial.
            </p>
          </div>

          <div>
            <h4>✔ Mayor carga administrativa</h4>
            <p>
              El equipo dedica horas a realizar seguimientos, llamadas y
              recordatorios en lugar de enfocarse en actividades que generan
              valor para la empresa.
            </p>
          </div>

          <div>
            <h4>✔ Incremento del riesgo financiero</h4>
            <p>
              Entre más tiempo permanezca una deuda sin recuperar, mayores son
              las probabilidades de incumplimiento definitivo.
            </p>
          </div>

          <div>
            <h4>✔ Pérdida de competitividad</h4>
            <p>
              Una empresa con problemas constantes de recaudo tiene menos
              capacidad para responder al mercado y aprovechar nuevas
              oportunidades de negocio.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Recuperar la cartera de manera oportuna fortalece la liquidez, mejora
          el flujo de caja y permite que la PYME continúe creciendo de forma
          sostenible sin depender de financiación adicional.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta el flujo de caja, la rentabilidad y el
          crecimiento de una PYME
        </h2>

        <p className={styles.text}>
          La cartera vencida no solo representa dinero pendiente de recaudar.
          También limita la capacidad de la empresa para operar con normalidad,
          invertir en nuevas oportunidades y cumplir oportunamente sus
          obligaciones financieras. Cada factura sin pagar reduce la liquidez
          disponible y aumenta la presión sobre el flujo de caja.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Menor liquidez para operar</h4>
            <p>
              La empresa dispone de menos recursos para cubrir nómina,
              proveedores, impuestos y demás gastos operativos.
            </p>
          </div>

          <div>
            <h4>✔ Disminución del flujo de caja</h4>
            <p>
              Los ingresos dejan de ingresar en las fechas previstas,
              dificultando la planeación financiera y la estabilidad del
              negocio.
            </p>
          </div>

          <div>
            <h4>✔ Menor capacidad de crecimiento</h4>
            <p>
              La falta de liquidez impide invertir en personal, tecnología,
              inventario o expansión comercial.
            </p>
          </div>

          <div>
            <h4>✔ Mayor carga administrativa</h4>
            <p>
              El equipo dedica horas a realizar seguimientos, llamadas y
              recordatorios en lugar de enfocarse en actividades que generan
              valor para la empresa.
            </p>
          </div>

          <div>
            <h4>✔ Incremento del riesgo financiero</h4>
            <p>
              Entre más tiempo permanezca una deuda sin recuperar, mayores son
              las probabilidades de incumplimiento definitivo.
            </p>
          </div>

          <div>
            <h4>✔ Pérdida de competitividad</h4>
            <p>
              Una empresa con problemas constantes de recaudo tiene menos
              capacidad para responder al mercado y aprovechar nuevas
              oportunidades de negocio.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Recuperar la cartera de manera oportuna fortalece la liquidez, mejora
          el flujo de caja y permite que la PYME continúe creciendo de forma
          sostenible sin depender de financiación adicional.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Estrategias profesionales para recuperar cartera vencida y reducir la
          mora en las PYMES
        </h2>

        <p className={styles.text}>
          Una recuperación de cartera efectiva no consiste únicamente en llamar
          al cliente para solicitar el pago. Requiere un proceso estructurado
          que permita identificar el estado de cada obligación, priorizar las
          cuentas por cobrar, negociar alternativas de pago y realizar un
          seguimiento constante hasta lograr la recuperación del dinero. De esta
          manera es posible mejorar el recaudo sin deteriorar la relación
          comercial con los clientes.
        </p>

        <p className={styles.text}>
          En Cobrando Online implementamos estrategias adaptadas a las
          necesidades de cada PYME, buscando aumentar la recuperación de
          facturas vencidas, fortalecer el flujo de caja y disminuir el tiempo
          que las cuentas permanecen en mora.
        </p>

        <div className={styles.grid}>
          {[
            "Diagnóstico completo del estado de la cartera y clasificación de las cuentas por cobrar.",
            "Priorización de clientes según antigüedad, monto y probabilidad de recuperación.",
            "Contacto profesional mediante llamadas, correos electrónicos y canales digitales.",
            "Negociación de acuerdos de pago que faciliten la recuperación de la deuda.",
            "Seguimiento permanente a los compromisos adquiridos por cada cliente.",
            "Recordatorios oportunos para disminuir el riesgo de incumplimiento.",
            "Cobranza prejurídica enfocada en recuperar el dinero antes de acudir a otras instancias.",
            "Reportes periódicos que permiten medir el avance de la recuperación de cartera.",
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

        <div className={styles.highlightBox}>
          Una estrategia de cobranza bien ejecutada permite recuperar más
          recursos, reducir la cartera vencida y fortalecer la estabilidad
          financiera de la empresa sin afectar la confianza construida con sus
          clientes.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de recuperar la cartera vencida antes de que afecte el
          crecimiento de tu PYME
        </h2>

        <p className={styles.text}>
          Una estrategia profesional de recuperación de cartera no solo permite
          cobrar facturas pendientes. También fortalece la liquidez del negocio,
          mejora la capacidad de inversión y reduce los riesgos financieros
          asociados a clientes morosos. Mientras más rápido se actúe, mayores
          son las probabilidades de recuperar el dinero sin afectar la relación
          comercial.
        </p>

        <div className={styles.benefits}>
          <span>
            ✔ Mayor liquidez para cubrir nómina, proveedores y gastos
            operativos.
          </span>

          <span>
            ✔ Disminución del porcentaje de cartera vencida y de cuentas
            incobrables.
          </span>

          <span>
            ✔ Incremento del flujo de caja para invertir en crecimiento.
          </span>

          <span>✔ Procesos de cobranza organizados y medibles.</span>

          <span>
            ✔ Reducción del tiempo que el equipo administrativo dedica a
            perseguir pagos.
          </span>

          <span>
            ✔ Mejor relación con clientes mediante procesos de negociación
            profesional.
          </span>

          <span>
            ✔ Mayor capacidad para ofrecer crédito a nuevos clientes con menor
            riesgo.
          </span>

          <span>
            ✔ Información clara para tomar decisiones sobre financiación y
            ventas.
          </span>
        </div>

        <div className={styles.highlightBox}>
          Las PYMES que implementan procesos de cobranza preventiva y
          recuperación de cartera suelen mantener un flujo de caja más estable,
          disminuir la mora y dedicar más tiempo al crecimiento del negocio en
          lugar de perseguir pagos pendientes.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          La diferencia entre reaccionar cuando la cartera ya está vencida y
          gestionar el recaudo de forma estratégica
        </h2>

        <p className={styles.text}>
          Muchas pequeñas y medianas empresas solo comienzan a cobrar cuando la
          deuda lleva varios meses vencida. Sin embargo, una estrategia de
          seguimiento permanente permite reducir significativamente la mora,
          mejorar el flujo de caja y aumentar las probabilidades de recuperar
          cada factura pendiente.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>PYMES sin un proceso de cobranza definido</h4>

            <ul>
              <li>La cartera vencida aumenta mes tras mes.</li>
              <li>Los clientes pagan únicamente cuando quieren.</li>
              <li>
                Se pierde demasiado tiempo haciendo llamadas improvisadas.
              </li>
              <li>
                No existe seguimiento después del vencimiento de las facturas.
              </li>
              <li>Los acuerdos de pago rara vez quedan documentados.</li>
              <li>
                La liquidez disminuye y aparecen problemas para cubrir gastos.
              </li>
              <li>
                El equipo administrativo dedica más tiempo a cobrar que a
                vender.
              </li>
              <li>
                Cada mes es más difícil recuperar las obligaciones antiguas.
              </li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>
              PYMES con una estrategia profesional de recuperación de cartera
            </h4>

            <ul>
              <li>Seguimiento preventivo antes y después del vencimiento.</li>
              <li>Clasificación de clientes según su nivel de riesgo.</li>
              <li>Recordatorios oportunos y comunicación profesional.</li>
              <li>Negociación de acuerdos de pago realistas.</li>
              <li>Control permanente de cada factura pendiente.</li>
              <li>Mayor recuperación de cartera en menor tiempo.</li>
              <li>Mejor flujo de caja para operar y crecer.</li>
              <li>Menor desgaste para el equipo comercial y administrativo.</li>
            </ul>
          </div>
        </div>

        <div className={styles.warningBox}>
          Entre más tiempo permanece una factura sin gestión de cobro, menores
          suelen ser las probabilidades de recuperación. Actuar de forma
          temprana permite reducir la mora y proteger la estabilidad financiera
          de la empresa.
        </div>
      </section>

      {/* TIPOS DE CARTERA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué tipo de cartera ayudamos a recuperar en pequeñas y medianas
          empresas en Colombia?
        </h2>

        <p className={styles.text}>
          Cada PYME tiene una dinámica comercial diferente, pero todas comparten
          un mismo desafío: clientes que retrasan sus pagos y afectan el flujo
          de caja. Diseñamos estrategias de recuperación adaptadas al tipo de
          cartera, al sector económico y al comportamiento de cada deudor,
          buscando maximizar el recaudo sin deteriorar las relaciones
          comerciales.
        </p>

        <div className={styles.grid}>
          {[
            "Facturas electrónicas vencidas por venta de productos o prestación de servicios.",
            "Cartera comercial con clientes empresariales (B2B).",
            "Cuentas por cobrar a clientes personas naturales.",
            "Obligaciones con pagos parciales o acuerdos incumplidos.",
            "Facturas con vencimientos entre 30 y más de 360 días.",
            "Clientes recurrentes con historial de mora constante.",
            "Cartera de distribuidores, aliados comerciales y revendedores.",
            "Obligaciones derivadas de órdenes de compra, contratos o cotizaciones aceptadas.",
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

        <div className={styles.highlightBox}>
          No todas las cuentas por cobrar requieren el mismo tratamiento.
          Analizar la antigüedad de la deuda, el perfil del cliente y el
          historial de pago permite aplicar estrategias de cobranza más
          efectivas y aumentar las probabilidades de recuperación.
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué elegir un servicio especializado de recuperación de cartera
          para tu PYME?
        </h2>

        <p className={styles.text}>
          Muchas pequeñas y medianas empresas intentan gestionar la cobranza de
          forma interna, pero a medida que la cartera vencida crece, el
          seguimiento se vuelve más complejo y consume tiempo que debería
          destinarse a ventas, servicio al cliente y crecimiento del negocio.
          Contar con un proceso especializado permite recuperar más dinero,
          reducir la mora y mantener un flujo de caja más estable.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Seguimiento profesional</h4>
            <p>
              Cada cuenta por cobrar recibe un control constante y organizado
              para evitar que la deuda continúe creciendo.
            </p>
          </div>

          <div>
            <h4>✔ Estrategias adaptadas a PYMES</h4>
            <p>
              Diseñamos procesos de cobranza acordes con el tamaño, sector y
              tipo de clientes de tu empresa.
            </p>
          </div>

          <div>
            <h4>✔ Más tiempo para tu negocio</h4>
            <p>
              Tu equipo deja de invertir horas persiguiendo pagos y puede
              enfocarse en actividades que generan ingresos.
            </p>
          </div>

          <div>
            <h4>✔ Comunicación respetuosa</h4>
            <p>
              Gestionamos el recaudo de manera profesional para proteger la
              relación comercial con tus clientes.
            </p>
          </div>

          <div>
            <h4>✔ Reportes claros</h4>
            <p>
              Obtienes información sobre recuperación, acuerdos de pago y
              comportamiento de la cartera para tomar mejores decisiones
              financieras.
            </p>
          </div>

          <div>
            <h4>✔ Enfoque en resultados</h4>
            <p>
              Nuestro objetivo es convertir cuentas por cobrar en flujo de caja
              real y sostenible para la empresa.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Una gestión especializada de cartera permite reducir la mora,
          recuperar pagos pendientes y fortalecer la estabilidad financiera de
          la PYME sin necesidad de aumentar la carga administrativa interna.
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera la cartera de tu PYME y mejora tu flujo de caja desde hoy
          </h2>

          <p className={styles.ctaText}>
            Recupera tu cartera vencida con una estrategia profesional.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
              target="_blank"
              className={styles.secondary}
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
