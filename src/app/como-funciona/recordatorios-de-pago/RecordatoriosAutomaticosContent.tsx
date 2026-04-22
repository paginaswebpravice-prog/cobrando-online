"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecordatoriosAutomaticosContent() {
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
              Automatización de cobros en Colombia
            </span>

            <h1 className={styles.title}>
              Automatiza recordatorios de pago y cobra más rápido en Colombia
            </h1>

            <p className={styles.description}>
              Automatiza tus procesos de cobro y evita retrasos en pagos.
              Implementa recordatorios automáticos que mejoran el recaudo,
              reducen la mora y optimizan el flujo de caja de tu empresa.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Automatizar cobros
              </a>
              <a href="#funcionamiento" className={styles.secondary}>
                Cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Por qué cobrar manualmente está afectando tu recaudo
        </h2>

        <p className={styles.text}>
          Muchas empresas dependen de procesos manuales para cobrar, lo que
          genera olvidos, retrasos y falta de seguimiento. Esto aumenta la
          cartera vencida y reduce la eficiencia operativa.
        </p>

        <div className={styles.grid}>
          {[
            "Olvido de fechas de pago",
            "Falta de seguimiento a clientes",
            "Procesos manuales lentos",
            "Errores humanos en gestión",
            "Clientes que pagan tarde",
            "Pérdida de oportunidades de recaudo",
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
          ⚠ Depender de procesos manuales aumenta el riesgo de cartera vencida.
        </div>
      </section>

      {/* IMPORTANCIA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Por qué los recordatorios automáticos aumentan los pagos
        </h2>

        <p className={styles.text}>
          La automatización permite mantener contacto constante con el cliente
          sin esfuerzo operativo adicional, mejorando la tasa de pago y
          reduciendo la mora.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Consistencia</h4>
            <p>Mensajes enviados en el momento adecuado.</p>
          </div>

          <div>
            <h4>✔ Ahorro de tiempo</h4>
            <p>Elimina tareas manuales repetitivas.</p>
          </div>

          <div>
            <h4>✔ Mayor recaudo</h4>
            <p>Incrementa la probabilidad de pago.</p>
          </div>

          <div>
            <h4>✔ Escalabilidad</h4>
            <p>Gestiona cientos de clientes automáticamente.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Automatizar el cobro permite convertir procesos reactivos en
          estrategias proactivas.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Cobro manual sin control</h4>
            <ul>
              <li>Dependencia de personas</li>
              <li>Errores frecuentes</li>
              <li>Seguimiento irregular</li>
              <li>Baja eficiencia</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Cobro automatizado y eficiente</h4>
            <ul>
              <li>Procesos constantes</li>
              <li>Sin errores humanos</li>
              <li>Seguimiento continuo</li>
              <li>Mayor productividad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUNCIONAMIENTO */}
      <section id="funcionamiento" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo funcionan los recordatorios automáticos de pago
        </h2>

        <p className={styles.text}>
          La automatización de cobros sigue una secuencia lógica basada en el
          comportamiento del cliente y las fechas de vencimiento.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Antes del vencimiento</h4>
            <p>Recordatorio preventivo de pago.</p>
          </div>

          <div>
            <h4>✔ Día de vencimiento</h4>
            <p>Notificación inmediata.</p>
          </div>

          <div>
            <h4>✔ Después del vencimiento</h4>
            <p>Seguimiento automático.</p>
          </div>

          <div>
            <h4>✔ Escalamiento</h4>
            <p>Mensajes más directos si no hay pago.</p>
          </div>

          <div>
            <h4>✔ Integración</h4>
            <p>Con WhatsApp, email y otros canales.</p>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Qué empresas deberían automatizar sus cobros
        </h2>

        <div className={styles.grid}>
          {[
            "Empresas con alto volumen de clientes",
            "Negocios con pagos recurrentes",
            "Instituciones de salud",
            "Servicios por suscripción",
            "Empresas con cartera activa",
            "Negocios que buscan escalar",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Si tienes múltiples clientes, automatizar el cobro deja de ser una
          opción y se vuelve una necesidad.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de automatizar recordatorios de pago en Colombia
        </h2>

        <div className={styles.benefits}>
          <span>✔ Reducción de cartera vencida</span>
          <span>✔ Mayor eficiencia operativa</span>
          <span>✔ Ahorro de tiempo</span>
          <span>✔ Incremento en recaudo</span>
          <span>✔ Mejor experiencia del cliente</span>
          <span>✔ Escalabilidad del negocio</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Empieza a automatizar tus cobros y recuperar cartera hoy
          </h2>

          <p className={styles.ctaText}>
            Reduce la mora y mejora tu flujo de caja con recordatorios
            automáticos de pago en Colombia.
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
  );
}
