"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoInmobiliariasContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>Inmobiliarias en Colombia</span>

            <h1 className={styles.title}>
              Cómo recuperar arriendos atrasados y reducir la mora en
              inmobiliarias en Colombia
            </h1>

            <p className={styles.description}>
              Ayudamos a inmobiliarias en Colombia a recuperar arriendos
              atrasados, reducir la mora en contratos de arrendamiento y mejorar
              el flujo de caja mediante procesos de cobranza estructurados,
              respetuosos y efectivos.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar cartera
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
          Principales problemas de cartera en inmobiliarias en Colombia (y por
          qué aumentan)
        </h2>

        <p className={styles.text}>
          La cartera en el sector inmobiliario es una de las más sensibles en
          Colombia, ya que depende directamente del pago mensual de arriendos y
          contratos de arrendamiento activos.
        </p>

        <div className={styles.grid}>
          {[
            "Inquilinos que dejan de pagar arriendo por varios meses",
            "Falta de seguimiento a contratos de arrendamiento",
            "Cobranza informal sin procesos definidos",
            "Alta rotación de arrendatarios",
            "Dificultad para localizar deudores",
            "Acumulación de cartera vencida en múltiples inmuebles",
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
          La mora en arriendos puede generar pérdidas constantes y afectar
          seriamente la rentabilidad del portafolio inmobiliario en Colombia.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta la rentabilidad de tu inmobiliaria
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Flujo de caja inestable</h4>
            <p>
              La falta de pago de arriendos genera incertidumbre financiera mes
              a mes.
            </p>
          </div>

          <div>
            <h4>✔ Pérdida de rentabilidad</h4>
            <p>
              Los inmuebles dejan de producir ingresos constantes y confiables.
            </p>
          </div>

          <div>
            <h4>✔ Procesos legales costosos</h4>
            <p>
              Los desalojos y procesos jurídicos pueden ser largos y complejos.
            </p>
          </div>

          <div>
            <h4>✔ Vacancia inmobiliaria</h4>
            <p>El aumento de rotación reduce la ocupación de los inmuebles.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Un inmueble sin recaudo constante se convierte en un activo
          improductivo dentro del portafolio inmobiliario.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Estrategias efectivas para cobrar arriendos y recuperar cartera
          inmobiliaria
        </h2>

        <p className={styles.text}>
          Implementamos estrategias de cobranza diseñadas específicamente para
          arrendamientos en Colombia, con enfoque en recuperación eficiente y
          preservación de relaciones contractuales.
        </p>

        <div className={styles.grid}>
          {[
            "Gestión de cobro a arrendatarios morosos",
            "Seguimiento constante de contratos activos",
            "Negociación de acuerdos de pago flexibles",
            "Recordatorios automáticos de arriendo",
            "Cobro prejurídico estructurado",
            "Escalamiento legal cuando es necesario",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Paso a paso para recuperar cartera de arriendos en Colombia
        </h2>

        <div className={styles.grid}>
          {[
            "Diagnóstico de cartera de arrendamientos en Colombia",
            "Clasificación de inquilinos morosos por riesgo",
            "Diseño de estrategia de cobro personalizada",
            "Contacto directo y negociación",
            "Seguimiento de acuerdos de pago",
            "Acciones legales si no hay cumplimiento",
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
            Recupera arriendos atrasados y mejora el flujo de caja de tu
            inmobiliaria hoy
          </h2>

          <p className={styles.ctaText}>
            No permitas que la mora en arriendos afecte tu rentabilidad.
            Implementa un sistema profesional de cobranza y recuperación de
            cartera inmobiliaria.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20inmobiliarias."
              className={styles.primary}
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20inmobiliarias."
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
