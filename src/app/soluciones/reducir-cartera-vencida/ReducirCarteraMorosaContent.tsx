"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function ReducirCarteraMorosaContent() {
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
            <span className={styles.badge}>Gestión financiera en Colombia</span>

            <h1 className={styles.title}>
              ¿La cartera morosa está frenando tu empresa? Recupera pagos y
              mejora tu flujo de caja
            </h1>

            <p className={styles.description}>
              La cartera vencida reduce la liquidez, retrasa el crecimiento y
              pone en riesgo la estabilidad financiera de cualquier empresa.
              Implementamos estrategias de cobranza preventiva, seguimiento
              profesional y recuperación de cartera para disminuir la mora y
              aumentar el recaudo en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Reducir mi cartera
              </a>
              <a href="#solucion" className={styles.secondary}>
                Ver estrategia
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué aumenta la cartera morosa y cómo reducirla antes de afectar
          las finanzas de tu empresa?
        </h2>

        <p className={styles.text}>
          La cartera morosa no aparece de un día para otro. Es el resultado de
          procesos deficientes, falta de seguimiento y ausencia de estrategias
          claras de cobro. Muchas empresas en Colombia enfrentan este problema
          sin darse cuenta hasta que impacta directamente su liquidez.
        </p>

        <div className={styles.grid}>
          {[
            "Falta de seguimiento a clientes",
            "Procesos de cobro desorganizados",
            "Políticas de crédito débiles",
            "Clientes con historial de mora",
            "Ausencia de estrategia preventiva",
            "Dependencia de pagos atrasados",
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
          ⚠ Una cartera morosa alta puede poner en riesgo la estabilidad
          financiera de tu empresa.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera morosa reduce la rentabilidad y limita el crecimiento
          de tu empresa
        </h2>

        <p className={styles.text}>
          La acumulación de cartera vencida afecta directamente la capacidad
          operativa, la rentabilidad y la proyección de crecimiento de cualquier
          negocio.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Problemas de liquidez</h4>
            <p>Menor disponibilidad de dinero para operar.</p>
          </div>

          <div>
            <h4>✔ Aumento del riesgo financiero</h4>
            <p>Mayor incertidumbre en ingresos.</p>
          </div>

          <div>
            <h4>✔ Limitación de crecimiento</h4>
            <p>Dificultad para invertir y expandirse.</p>
          </div>

          <div>
            <h4>✔ Pérdida de rentabilidad</h4>
            <p>Ingresos proyectados que nunca se materializan.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Reducir la cartera morosa no es opcional, es clave para la
          sostenibilidad financiera.
        </div>
      </section>

      {/* CAUSAS DE LA CARTERA MOROSA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Principales causas por las que aumenta la cartera morosa en las
          empresas colombianas
        </h2>

        <p className={styles.text}>
          La cartera morosa normalmente no aparece por un único motivo. En la
          mayoría de empresas es consecuencia de procesos comerciales,
          financieros y de cobranza que no están correctamente estructurados.
          Identificar las causas permite implementar acciones preventivas que
          reduzcan el riesgo de mora y mejoren el recaudo.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Políticas de crédito poco claras</h4>
            <p>
              Aprobar ventas sin validar capacidad de pago incrementa el riesgo
              de incumplimiento.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento insuficiente</h4>
            <p>
              Muchas empresas solo realizan contacto cuando la factura ya lleva
              varios meses vencida.
            </p>
          </div>

          <div>
            <h4>✔ Procesos manuales</h4>
            <p>
              La falta de automatización genera olvidos, retrasos y pérdida de
              control sobre las cuentas por cobrar.
            </p>
          </div>

          <div>
            <h4>✔ Ausencia de indicadores</h4>
            <p>
              Sin medir la mora, el recaudo y el comportamiento de pago es
              difícil tomar decisiones oportunas.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Las empresas que identifican las causas de la mora pueden reducir
          significativamente la cartera vencida antes de que afecte la liquidez.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Gestionar cartera sin control ni seguimiento</h4>
            <ul>
              <li>Aumento constante de mora</li>
              <li>Clientes sin seguimiento</li>
              <li>Pérdidas financieras</li>
              <li>Desorden administrativo</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Reduce la mora con una estrategia profesional de cobro</h4>
            <ul>
              <li>Control de pagos</li>
              <li>Seguimiento constante</li>
              <li>Mayor recaudo</li>
              <li>Flujo de caja saludable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className={styles.container}>
        <h2 className={styles.subtitle}>
          Las mejores estrategias para reducir la cartera morosa y recuperar
          dinero más rápido
        </h2>

        <p className={styles.text}>
          Reducir la mora requiere una combinación de prevención, control y
          acción. No se trata solo de cobrar, sino de evitar que la deuda se
          acumule.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Evaluación de clientes</h4>
            <p>Análisis de riesgo antes de otorgar crédito.</p>
          </div>

          <div>
            <h4>✔ Seguimiento preventivo</h4>
            <p>Recordatorios y control antes del vencimiento.</p>
          </div>

          <div>
            <h4>✔ Gestión de cobro temprana</h4>
            <p>Acción inmediata ante retrasos.</p>
          </div>

          <div>
            <h4>✔ Estrategias de negociación</h4>
            <p>Facilitar el pago sin perder rentabilidad.</p>
          </div>

          <div>
            <h4>✔ Escalamiento legal</h4>
            <p>Acciones jurídicas cuando es necesario.</p>
          </div>
        </div>
      </section>

      {/* ERRORES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Errores que hacen crecer la cartera morosa y reducen el recaudo
        </h2>

        <p className={styles.text}>
          Muchos negocios pierden dinero porque cometen errores repetitivos
          durante la administración de su cartera. Corregir estas prácticas
          puede aumentar el porcentaje de recuperación sin necesidad de
          incrementar las ventas.
        </p>

        <div className={styles.grid}>
          {[
            "Esperar varios meses antes de iniciar el cobro.",
            "No realizar seguimiento periódico.",
            "No documentar acuerdos de pago.",
            "Otorgar crédito sin análisis previo.",
            "No medir indicadores de recaudo.",
            "No escalar oportunamente los casos de difícil recuperación.",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.warningBox}>
          ⚠ Entre más tiempo permanezca una factura vencida, menor suele ser la
          probabilidad de recuperación.
        </div>
      </section>

      {/* INDICADORES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Indicadores que muestran si tu empresa está perdiendo dinero por
          cartera morosa
        </h2>

        <div className={styles.grid}>
          {[
            "Días de cartera (DSO)",
            "Porcentaje de cartera vencida",
            "Índice de recaudo",
            "Rotación de cartera",
            "Antigüedad de deuda",
            "Nivel de recuperación",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Medir tu cartera es el primer paso para reducirla de forma efectiva.
        </div>
      </section>

      {/* PROCESO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo reducir la cartera morosa paso a paso
        </h2>

        <p className={styles.text}>
          Reducir la mora requiere una estrategia continua que combine
          prevención, seguimiento y acciones de recuperación adaptadas al
          comportamiento de cada cliente.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>Paso 1</h4>
            <p>
              Analizar la antigüedad de la cartera y clasificar los clientes
              según el riesgo de pago.
            </p>
          </div>

          <div>
            <h4>Paso 2</h4>
            <p>
              Priorizar las cuentas con mayor probabilidad de recuperación para
              actuar rápidamente.
            </p>
          </div>

          <div>
            <h4>Paso 3</h4>
            <p>
              Implementar recordatorios, seguimiento y negociación antes de que
              la deuda aumente.
            </p>
          </div>

          <div>
            <h4>Paso 4</h4>
            <p>
              Escalar los casos complejos mediante procesos especializados de
              recuperación de cartera.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS EMPRESARIALES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Qué obtiene una empresa al reducir la cartera morosa
        </h2>

        <p className={styles.text}>
          Disminuir la mora no solo mejora el recaudo. También fortalece la
          capacidad financiera de la organización y permite tomar mejores
          decisiones estratégicas.
        </p>

        <div className={styles.grid}>
          {[
            "Mayor liquidez para operar.",
            "Incremento del flujo de caja.",
            "Menor necesidad de créditos.",
            "Reducción del riesgo financiero.",
            "Mayor capacidad de inversión.",
            "Mejor relación con clientes cumplidos.",
            "Procesos financieros más eficientes.",
            "Mayor estabilidad empresarial.",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Qué gana tu empresa al reducir la cartera morosa y mejorar el recaudo
        </h2>

        <div className={styles.benefits}>
          <span>✔ Mejor flujo de caja</span>
          <span>✔ Mayor estabilidad financiera</span>
          <span>✔ Reducción de pérdidas</span>
          <span>✔ Crecimiento sostenible</span>
          <span>✔ Control financiero</span>
          <span>✔ Mejor toma de decisiones</span>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre cómo reducir la cartera morosa
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Qué es la cartera morosa?</h4>
            <p>
              Es el conjunto de cuentas por cobrar cuyo plazo de pago ya venció
              y que aún no han sido canceladas por los clientes.
            </p>
          </div>

          <div>
            <h4>¿Cómo disminuir la cartera vencida?</h4>
            <p>
              Mediante políticas de crédito claras, seguimiento permanente,
              negociación, procesos de cobranza y control continuo de
              indicadores.
            </p>
          </div>

          <div>
            <h4>¿Por qué aumenta la cartera morosa?</h4>
            <p>
              Generalmente por falta de seguimiento, procesos de cobro
              ineficientes, otorgamiento inadecuado de crédito o incumplimiento
              de los clientes.
            </p>
          </div>

          <div>
            <h4>¿Cómo mejorar el recaudo de cartera?</h4>
            <p>
              Implementando una estrategia estructurada de gestión de cuentas
              por cobrar, contacto oportuno y acuerdos de pago efectivos.
            </p>
          </div>

          <div>
            <h4>¿Reducir la cartera morosa mejora el flujo de caja?</h4>
            <p>
              Sí. Recuperar pagos pendientes incrementa la liquidez disponible
              para la operación diaria y reduce la necesidad de financiación
              externa.
            </p>
          </div>

          <div>
            <h4>¿Cada cuánto debe revisarse la cartera?</h4>
            <p>
              Lo recomendable es monitorear permanentemente la antigüedad de la
              cartera y realizar seguimiento preventivo antes del vencimiento de
              las facturas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Empieza hoy a recuperar cartera vencida y mejora el flujo de caja de
            tu empresa
          </h2>

          <p className={styles.ctaText}>
            Implementa una estrategia efectiva para reducir la mora y mejorar la
            salud financiera de tu empresa en Colombia.
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
