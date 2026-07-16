"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function MejorarFlujoCajaContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>
              Mejora el flujo de caja • Reduce la cartera vencida • Aumenta la
              liquidez
            </span>

            <h1 className={styles.title}>
              Cómo mejorar el flujo de caja de tu empresa y aumentar la liquidez
              en Colombia
            </h1>

            <p className={styles.description}>
              El flujo de caja determina la capacidad de una empresa para pagar
              proveedores, nómina, impuestos e invertir en su crecimiento. En
              Cobrando Online ayudamos a mejorar la liquidez mediante
              recuperación de cartera, reducción de la mora, procesos de recaudo
              eficientes y estrategias que aceleran el ingreso de dinero sin
              afectar la relación con tus clientes.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Mejorar mi flujo de caja
              </a>
              <a href="#solucion" className={styles.secondary}>
                Ver estrategias
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué una empresa tiene problemas de flujo de caja y cómo mejorar
          su liquidez?
        </h2>

        <p className={styles.text}>
          Muchas empresas en Colombia facturan bien, pero tienen problemas de
          liquidez. Esto ocurre cuando los ingresos no se reciben a tiempo o
          cuando la gestión financiera no está estructurada correctamente.
        </p>

        <div className={styles.grid}>
          {[
            "Pagos retrasados de clientes",
            "Alto volumen de cartera vencida",
            "Falta de seguimiento a cuentas por cobrar",
            "Procesos de cobro ineficientes",
            "Dependencia de pocos clientes",
            "Desorganización financiera",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.warningBox}>
          ⚠ Tener ventas no garantiza liquidez: lo importante es cuándo recibes
          el dinero.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Consecuencias de un flujo de caja deficiente para una empresa
        </h2>

        <p className={styles.text}>
          Un flujo de caja desordenado puede generar problemas operativos,
          limitar el crecimiento y aumentar el riesgo financiero de tu empresa.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Falta de liquidez</h4>
            <p>Dificultad para pagar nómina, proveedores y gastos.</p>
          </div>

          <div>
            <h4>✔ Endeudamiento</h4>
            <p>Necesidad de recurrir a créditos innecesarios.</p>
          </div>

          <div>
            <h4>✔ Estrés financiero</h4>
            <p>Incertidumbre sobre ingresos reales.</p>
          </div>

          <div>
            <h4>✔ Crecimiento limitado</h4>
            <p>No puedes invertir ni expandir el negocio.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ El flujo de caja determina la capacidad real de operación de tu
          empresa.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Flujo de caja sin control</h4>
            <ul>
              <li>Pagos impredecibles</li>
              <li>Falta de liquidez</li>
              <li>Dependencia de créditos</li>
              <li>Decisiones financieras reactivas</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Flujo de caja optimizado y estable</h4>
            <ul>
              <li>Ingresos constantes</li>
              <li>Liquidez estable</li>
              <li>Control financiero</li>
              <li>Decisiones estratégicas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo mejorar el flujo de caja de una empresa paso a paso
        </h2>

        <p className={styles.text}>
          Mejorar el flujo de caja no depende de vender más, sino de cobrar
          mejor y administrar correctamente los ingresos.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Control de cartera</h4>
            <p>Seguimiento constante a cuentas por cobrar.</p>
          </div>

          <div>
            <h4>✔ Cobro oportuno</h4>
            <p>Reducir tiempos de pago de clientes.</p>
          </div>

          <div>
            <h4>✔ Estrategias de recaudo</h4>
            <p>Implementar procesos estructurados de cobro.</p>
          </div>

          <div>
            <h4>✔ Negociación efectiva</h4>
            <p>Facilitar acuerdos de pago sin afectar ingresos.</p>
          </div>

          <div>
            <h4>✔ Acciones legales</h4>
            <p>Recuperar deudas cuando es necesario.</p>
          </div>
        </div>
      </section>

      {/* SEÑALES DE QUE TU EMPRESA NECESITA MEJORAR EL FLUJO DE CAJA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Señales de que tu empresa necesita mejorar urgentemente el flujo de
          caja
        </h2>

        <p className={styles.text}>
          Muchas empresas creen que el problema está en vender poco, cuando en
          realidad el dinero tarda demasiado en ingresar. Si identificas varias
          de estas situaciones, probablemente necesites fortalecer tu proceso de
          recuperación de cartera y recaudo.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Clientes pagan fuera de plazo</h3>
            <p>
              Tus facturas vencen constantemente y debes esperar semanas o meses
              para recibir el dinero.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Dependes de créditos</h3>
            <p>
              Necesitas préstamos para cubrir gastos que deberían pagarse con el
              recaudo normal de la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Aumenta la cartera vencida</h3>
            <p>
              Cada mes existen más cuentas pendientes de pago y disminuye la
              capacidad de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No existe seguimiento de cobro</h3>
            <p>
              Las cuentas por cobrar no tienen responsables ni estrategias
              definidas para recuperar el dinero oportunamente.
            </p>
          </div>
        </div>
      </section>

      {/* FACTORES CLAVE */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Buenas prácticas para mantener un flujo de caja positivo durante todo
          el año
        </h2>

        <div className={styles.grid}>
          {[
            "Rotación eficiente de cartera",
            "Políticas claras de crédito",
            "Seguimiento constante a clientes",
            "Automatización de procesos",
            "Control financiero continuo",
            "Estrategias de cobro efectivas",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Mejorar el flujo de caja es una combinación de control, estrategia y
          ejecución.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de mejorar el flujo de caja y reducir la cartera vencida
        </h2>

        <div className={styles.benefits}>
          <span>✔ Liquidez constante</span>
          <span>✔ Mayor estabilidad financiera</span>
          <span>✔ Reducción de deudas</span>
          <span>✔ Crecimiento sostenible</span>
          <span>✔ Mejor toma de decisiones</span>
          <span>✔ Control total del negocio</span>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué resultados puede obtener una empresa al mejorar su flujo de caja?
        </h2>

        <p className={styles.text}>
          Un flujo de caja saludable permite que la empresa opere con mayor
          estabilidad financiera y aproveche oportunidades de crecimiento sin
          depender constantemente del endeudamiento.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>Mayor liquidez disponible</h4>
            <p>
              Disponibilidad permanente de recursos para cubrir obligaciones.
            </p>
          </div>

          <div>
            <h4>Disminución de la cartera vencida</h4>
            <p>Recuperación más rápida del dinero pendiente de cobro.</p>
          </div>

          <div>
            <h4>Mayor capacidad de inversión</h4>
            <p>
              Posibilidad de expandir operaciones sin afectar la estabilidad
              financiera.
            </p>
          </div>

          <div>
            <h4>Mejor rentabilidad</h4>
            <p>
              Menores costos asociados a la mora y mayor disponibilidad de
              efectivo.
            </p>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre cómo mejorar el flujo de caja
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Cómo mejorar el flujo de caja de una empresa?</h4>
            <p>
              Reduciendo los tiempos de cobro, recuperando cartera vencida,
              estableciendo políticas de crédito, negociando mejores plazos y
              realizando seguimiento permanente a las cuentas por cobrar.
            </p>
          </div>

          <div>
            <h4>¿Qué afecta el flujo de caja?</h4>
            <p>
              Los pagos atrasados, la cartera vencida, el exceso de gastos, la
              falta de planeación financiera y una gestión ineficiente del
              recaudo.
            </p>
          </div>

          <div>
            <h4>¿Cómo aumentar la liquidez de una empresa?</h4>
            <p>
              Recuperando deudas pendientes, optimizando el recaudo, reduciendo
              la mora y mejorando la administración del capital de trabajo.
            </p>
          </div>

          <div>
            <h4>
              ¿Por qué la recuperación de cartera mejora el flujo de caja?
            </h4>
            <p>
              Porque acelera el ingreso de efectivo, disminuye la cartera
              vencida y permite disponer de recursos para la operación diaria y
              el crecimiento del negocio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera el control financiero y mejora el flujo de caja de tu
            empresa hoy
          </h2>

          <p className={styles.ctaText}>
            Mejora tu liquidez y toma el control financiero con estrategias
            efectivas de gestión de cartera en Colombia.
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
