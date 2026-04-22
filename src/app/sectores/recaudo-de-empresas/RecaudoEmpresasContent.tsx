"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoEmpresasContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>Empresas en Colombia</span>

            <h1 className={styles.title}>
              Recupera cartera vencida en tu empresa y aumenta el recaudo en
              Colombia
            </h1>

            <p className={styles.description}>
              Ayudamos a empresas en Colombia a recuperar cartera vencida,
              mejorar su flujo de caja y estructurar su proceso de cobro de
              forma profesional y efectiva.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar cartera ahora
              </a>
              <a href="#proceso" className={styles.secondary}>
                Ver cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTEXTO ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué las empresas en Colombia pierden dinero por cartera vencida?
        </h2>

        <p className={styles.text}>
          Muchas empresas en Colombia tienen problemas de liquidez no por falta
          de ventas, sino por una gestión ineficiente de cartera.
        </p>

        <div className={styles.highlightBox}>
          ✔ No es un problema de ventas, es un problema de recaudo.
        </div>
      </section>

      {/* ================= PROBLEMAS ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Problemas más comunes en empresas con cartera vencida
        </h2>

        <div className={styles.grid}>
          {[
            "Clientes que no pagan a tiempo",
            "Bajo recaudo efectivo",
            "Falta de seguimiento",
            "Cartera vencida acumulada",
            "Procesos manuales",
            "Falta de control financiero",
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
      </section>

      {/* ================= IMPACTO ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta el crecimiento de tu empresa
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Problemas de liquidez</h4>
            <p>Dificultad para operar normalmente.</p>
          </div>

          <div>
            <h4>✔ Retrasos operativos</h4>
            <p>Afecta proveedores y compromisos.</p>
          </div>

          <div>
            <h4>✔ Menor crecimiento</h4>
            <p>Reduce la capacidad de inversión.</p>
          </div>

          <div>
            <h4>✔ Riesgo financiero</h4>
            <p>Desbalance entre ingresos y gastos.</p>
          </div>
        </div>
      </section>

      {/* ================= SOLUCIÓN ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Solución profesional para recuperar cartera y aumentar el recaudo
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Cobro prejurídico</h4>
            <p>Gestión antes de procesos legales.</p>
          </div>

          <div>
            <h4>✔ Seguimiento constante</h4>
            <p>Control de cada cliente.</p>
          </div>

          <div>
            <h4>✔ Negociación efectiva</h4>
            <p>Mejora tasas de recaudo.</p>
          </div>

          <div>
            <h4>✔ Cobro jurídico</h4>
            <p>Acciones legales si es necesario.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Convertimos cartera en flujo de caja real.
        </div>
      </section>

      {/* ================= PROCESO ================= */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar cartera en tu empresa paso a paso
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Diagnóstico</h4>
            <p>Análisis de cartera.</p>
          </div>

          <div>
            <h4>✔ Estrategia</h4>
            <p>Definición del plan de cobro.</p>
          </div>

          <div>
            <h4>✔ Gestión</h4>
            <p>Contacto y negociación.</p>
          </div>

          <div>
            <h4>✔ Seguimiento</h4>
            <p>Control hasta el pago.</p>
          </div>
        </div>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de recuperar la cartera de tu empresa
        </h2>

        <div className={styles.benefits}>
          <span>✔ Mayor recaudo</span>
          <span>✔ Mejor flujo de caja</span>
          <span>✔ Menor mora</span>
          <span>✔ Control financiero</span>
          <span>✔ Seguridad jurídica</span>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Empieza hoy a recuperar la cartera de tu empresa
          </h2>

          <p className={styles.ctaText}>
            Implementa una estrategia profesional de cobranza para mejorar tu
            flujo de caja, reducir la mora y convertir tu cartera vencida en
            ingresos reales y constantes.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20mi%20empresa%20en%20Colombia."
              className={styles.primary}
            >
              Solicitar asesoría ahora
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20hablar%20por%20WhatsApp%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20mi%20empresa."
              className={styles.secondary}
              target="_blank"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
