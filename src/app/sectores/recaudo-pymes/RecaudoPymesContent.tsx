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
            <span className={styles.badge}>PYMES en Colombia</span>

            <h1 className={styles.title}>
              Recuperación de cartera para pequeñas y medianas empresas
            </h1>

            <p className={styles.description}>
              Las PYMES dependen del flujo de caja. La mora puede afectar su
              estabilidad financiera y crecimiento.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mi cartera
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          La realidad financiera de las PYMES en Colombia
        </h2>

        <p className={styles.text}>
          Las PYMES tienen menos margen de error financiero, por lo que la
          cartera vencida impacta directamente su operación.
        </p>

        <div className={styles.highlightBox}>
          ✔ Una mala gestión de cartera puede afectar la estabilidad del
          negocio.
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Problemas más comunes en la gestión de cartera
        </h2>

        <div className={styles.grid}>
          {[
            "Retrasos constantes en pagos",
            "Falta de seguimiento",
            "Procesos informales",
            "Cartera vencida acumulada",
            "Dependencia de pocos clientes",
            "Desgaste administrativo",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo afecta la cartera vencida a una PYME
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Problemas de liquidez</h4>
            <p>No hay dinero para operar el negocio.</p>
          </div>

          <div>
            <h4>✔ Frenos al crecimiento</h4>
            <p>No se puede invertir ni escalar.</p>
          </div>

          <div>
            <h4>✔ Estrés financiero</h4>
            <p>El dueño debe cubrir gastos con recursos propios.</p>
          </div>

          <div>
            <h4>✔ Pérdida de oportunidades</h4>
            <p>No hay capital disponible para nuevas oportunidades.</p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo ayudamos a las PYMES a recuperar cartera
        </h2>

        <div className={styles.grid}>
          {[
            "Diagnóstico de cartera",
            "Estrategias personalizadas",
            "Seguimiento constante",
            "Negociación profesional",
            "Herramientas digitales",
            "Escalamiento jurídico",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Mejora el flujo de caja de tu PYME hoy
          </h2>

          <p className={styles.ctaText}>
            Recupera tu cartera vencida con una estrategia profesional.
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
