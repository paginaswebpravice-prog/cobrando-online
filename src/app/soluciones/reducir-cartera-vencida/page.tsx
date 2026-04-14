"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function ReducirCarteraMorosaPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Reducir cartera morosa en Colombia | Mejora tu flujo de caja
        </title>

        <meta
          name="description"
          content="Reduce la cartera morosa de tu empresa en Colombia con estrategias profesionales de cobro, prevención y gestión financiera."
        />

        <meta
          name="keywords"
          content="reducir cartera morosa, cartera vencida Colombia, gestión de cartera, cobro de deudas, mejorar flujo de caja"
        />
      </Head>

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
                Gestión financiera en Colombia
              </span>

              <h1 className={styles.title}>
                Cómo reducir la cartera morosa y mejorar tu flujo de caja
              </h1>

              <p className={styles.description}>
                La cartera morosa puede frenar el crecimiento de tu empresa. Te
                ayudamos a implementar estrategias efectivas para reducir la
                mora, mejorar el recaudo y optimizar tu flujo financiero en
                Colombia.
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
            ¿Por qué aumenta la cartera morosa?
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
            Impacto de la cartera morosa en tu empresa
          </h2>

          <p className={styles.text}>
            La acumulación de cartera vencida afecta directamente la capacidad
            operativa, la rentabilidad y la proyección de crecimiento de
            cualquier negocio.
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

        {/* COMPARATIVO */}
        <section className={styles.container}>
          <div className={styles.comparison}>
            <div className={`${styles.compareBox} ${styles.bad}`}>
              <h4>❌ Sin control de cartera</h4>
              <ul>
                <li>Aumento constante de mora</li>
                <li>Clientes sin seguimiento</li>
                <li>Pérdidas financieras</li>
                <li>Desorden administrativo</li>
              </ul>
            </div>

            <div className={`${styles.compareBox} ${styles.good}`}>
              <h4>✔ Con gestión estratégica</h4>
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
            Estrategias para reducir la cartera morosa
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

        {/* INDICADORES */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Indicadores clave para controlar la cartera
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

        {/* BENEFICIOS */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Beneficios de reducir la cartera morosa
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

        {/* CTA */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Empieza a controlar tu cartera hoy
            </h2>

            <p className={styles.ctaText}>
              Implementa una estrategia efectiva para reducir la mora y mejorar
              la salud financiera de tu empresa en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
                className={styles.primary}
              >
                Solicitar asesoría
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
