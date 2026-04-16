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
            <span className={styles.badge}>Freelancers en Colombia</span>

            <h1 className={styles.title}>
              Cómo cobrar clientes que no pagan como freelancer en Colombia
            </h1>

            <p className={styles.description}>
              Aprende cómo recuperar pagos atrasados, evitar clientes morosos y
              cobrar de forma profesional sin conflictos ni afectar tu
              reputación como freelancer.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar dinero
              </a>
              <a href="#proceso" className={styles.secondary}>
                Cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Problemas comunes de freelancers en Colombia
        </h2>

        <p className={styles.text}>
          Muchos freelancers en Colombia pierden dinero no por falta de trabajo,
          sino por mala gestión de cobro, falta de contratos y clientes que no
          cumplen con los pagos acordados.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes que desaparecen sin pagar",
            "Falta de contratos o acuerdos formales",
            "Pagos atrasados o incompletos",
            "Dependencia de pocos clientes",
            "Negociaciones informales sin respaldo",
            "Dificultad para hacer seguimiento de cobros",
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
          Muchos freelancers en Colombia trabajan meses sin cobrar lo que les
          corresponde por falta de procesos de cobro estructurados.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>Impacto de clientes que no pagan</h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Inestabilidad financiera</h4>
            <p>Ingresos impredecibles que afectan tu crecimiento.</p>
          </div>

          <div>
            <h4>✔ Pérdida de tiempo</h4>
            <p>Horas invertidas en proyectos que no se pagan.</p>
          </div>

          <div>
            <h4>✔ Estrés profesional</h4>
            <p>Conflictos constantes con clientes morosos.</p>
          </div>

          <div>
            <h4>✔ Desvalorización del trabajo</h4>
            <p>Clientes que no respetan tu trabajo ni tu tiempo.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Cobrar correctamente no es agresivo: es parte de ser un profesional.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo cobrar clientes como freelancer en Colombia
        </h2>

        <p className={styles.text}>
          Implementar un sistema básico de cobro puede cambiar completamente la
          estabilidad de tus ingresos como freelancer.
        </p>

        <div className={styles.grid}>
          {[
            "Uso de contratos claros antes de iniciar proyectos",
            "Anticipos obligatorios del 30% al 50%",
            "Seguimiento de pagos con recordatorios",
            "Comunicación formal con clientes",
            "Acuerdos de pago por etapas",
            "Escalamiento en caso de incumplimiento",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO (adaptado sin steps) */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Proceso para recuperar pagos de clientes
        </h2>

        <div className={styles.grid}>
          {[
            "Identificación de deuda pendiente",
            "Contacto formal con el cliente",
            "Negociación de pago",
            "Acuerdo escrito de pago",
            "Seguimiento del cumplimiento",
            "Escalamiento si no hay respuesta",
          ].map((step, i) => (
            <div key={i} className={styles.card}>
              <p>
                <strong>{i + 1}. </strong>
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera el dinero que te deben hoy mismo
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
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766"
              className={styles.secondary}
              target="_blank"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
