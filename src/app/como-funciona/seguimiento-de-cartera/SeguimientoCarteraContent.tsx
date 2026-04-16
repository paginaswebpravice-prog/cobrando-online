"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function SeguimientoCarteraContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>Gestión de cartera en Colombia</span>

            <h1 className={styles.title}>
              Seguimiento de cartera con acceso en tiempo real y control total
            </h1>

            <p className={styles.description}>
              Visualiza el estado de tu cartera en cualquier momento. Accede a
              información clara, seguimiento constante y trazabilidad completa
              de cada proceso de cobro en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://legalapp.pravice.co/login.php"
                className={styles.primary}
              >
                Ver mi caso
              </a>
              <a href="#funcionamiento" className={styles.secondary}>
                Cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROBLEMA ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          El verdadero problema: falta de control
        </h2>

        <p className={styles.text}>
          Muchas empresas en Colombia pierden dinero no por falta de clientes,
          sino por no tener visibilidad sobre su cartera. La falta de
          seguimiento genera desorden, retrasos y decisiones basadas en
          información incompleta.
        </p>

        <div className={styles.grid}>
          {[
            "No saber en qué estado está cada deuda",
            "Falta de seguimiento constante",
            "Información dispersa o desactualizada",
            "Clientes sin contacto oportuno",
            "Procesos manuales desorganizados",
            "Pérdida de oportunidades de pago",
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
          ⚠ Si no tienes control sobre tu cartera, no puedes mejorar tu recaudo.
        </div>
      </section>

      {/* ================= SOLUCIÓN ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Seguimiento estructurado con acceso para clientes
        </h2>

        <p className={styles.text}>
          Implementamos un sistema de seguimiento que permite registrar cada
          gestión de cobro y brindar acceso a nuestros clientes para consultar
          en tiempo real el estado de su cartera.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Registro completo</h4>
            <p>Cada deuda queda documentada desde el inicio.</p>
          </div>

          <div>
            <h4>✔ Historial de gestión</h4>
            <p>Accede a cada acción realizada sobre el caso.</p>
          </div>

          <div>
            <h4>✔ Estado actualizado</h4>
            <p>Visualiza el avance en tiempo real.</p>
          </div>

          <div>
            <h4>✔ Acceso en línea</h4>
            <p>Consulta tu cartera cuando lo necesites.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Tendrás visibilidad total del proceso sin depender de reportes
          manuales.
        </div>
      </section>

      {/* ================= DIFERENCIAL ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Transparencia total en la recuperación de cartera
        </h2>

        <p className={styles.text}>
          Nuestro enfoque se basa en brindar información clara y accesible para
          que siempre sepas qué está pasando con tu cartera y cómo avanza cada
          proceso de cobro.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Sin seguimiento</h4>
            <ul>
              <li>No sabes qué está pasando</li>
              <li>Falta de control</li>
              <li>Información desorganizada</li>
              <li>Decisiones a ciegas</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Con nuestra gestión</h4>
            <ul>
              <li>Acceso en tiempo real</li>
              <li>Control total de cartera</li>
              <li>Información clara</li>
              <li>Decisiones informadas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FUNCIONAMIENTO ================= */}
      <section id="funcionamiento" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo funciona el seguimiento de cartera
        </h2>

        <p className={styles.text}>
          Nuestro proceso está diseñado para garantizar control, continuidad y
          resultados en cada etapa del cobro.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Registro del caso</h4>
            <p>Se documenta la deuda y datos del cliente.</p>
          </div>

          <div>
            <h4>✔ Gestión de cobro</h4>
            <p>Se ejecutan acciones estratégicas.</p>
          </div>

          <div>
            <h4>✔ Actualización constante</h4>
            <p>Cada gestión queda registrada.</p>
          </div>

          <div>
            <h4>✔ Consulta en línea</h4>
            <p>El cliente accede al estado en cualquier momento.</p>
          </div>

          <div>
            <h4>✔ Seguimiento continuo</h4>
            <p>Se mantiene la gestión hasta el pago.</p>
          </div>
        </div>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios del seguimiento de cartera en Colombia
        </h2>

        <div className={styles.benefits}>
          <span>✔ Control total de tu cartera</span>
          <span>✔ Seguimiento en tiempo real</span>
          <span>✔ Mayor transparencia</span>
          <span>✔ Mejor toma de decisiones</span>
          <span>✔ Incremento en recaudo</span>
          <span>✔ Reducción de cartera vencida</span>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Ten control total sobre tu cartera hoy
          </h2>

          <p className={styles.ctaText}>
            Accede a información clara, seguimiento constante y mejora el
            recaudo de tu cartera en Colombia con un enfoque profesional y
            estructurado.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20de%20cartera."
              className={styles.primary}
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20de%20cartera."
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
