"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoColegiosContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>Colegios en Colombia</span>

            <h1 className={styles.title}>
              Recupera pensiones atrasadas en tu colegio y mejora el flujo de
              caja
            </h1>

            <p className={styles.description}>
              Ayudamos a colegios en Colombia a recuperar pensiones vencidas,
              reducir la mora estudiantil y mejorar el flujo de caja sin afectar
              la relación con padres de familia ni la reputación institucional.
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
          Principales problemas de cartera en colegios en Colombia
        </h2>

        <p className={styles.text}>
          La mora en pensiones escolares es uno de los principales retos
          financieros de colegios privados en Colombia, afectando directamente
          su sostenibilidad.
        </p>

        <div className={styles.grid}>
          {[
            "Padres con múltiples mensualidades atrasadas",
            "Falta de seguimiento estructurado de cartera",
            "Cobranza manual o desorganizada",
            "Alta tasa de morosidad recurrente",
            "Dificultad para segmentar deudores",
            "Impacto en la operación del colegio",
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
          Una cartera desorganizada no solo afecta el flujo de caja, también
          impacta directamente la calidad educativa que el colegio puede
          ofrecer.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta la estabilidad de tu colegio
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Problemas de liquidez</h4>
            <p>Falta de recursos para nómina, docentes y operación diaria.</p>
          </div>

          <div>
            <h4>✔ Desbalance financiero</h4>
            <p>
              Ingresos proyectados que no coinciden con el recaudo real mes a
              mes.
            </p>
          </div>

          <div>
            <h4>✔ Afectación académica</h4>
            <p>
              Menor inversión en tecnología, infraestructura y calidad
              educativa.
            </p>
          </div>

          <div>
            <h4>✔ Sobrecarga administrativa</h4>
            <p>
              El personal interno pierde tiempo gestionando cobros manuales.
            </p>
          </div>
        </div>

        <div className={styles.warningBox}>
          Cuando la mora supera cierto nivel, el colegio empieza a depender de
          financiación externa o recortes operativos.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Estrategia efectiva para recuperar cartera en colegios
        </h2>

        <p className={styles.text}>
          Implementamos estrategias de cobranza estructuradas, respetuosas y
          efectivas, adaptadas al contexto educativo en Colombia.
        </p>

        <div className={styles.grid}>
          {[
            "Segmentación de cartera por niveles de mora",
            "Seguimiento automatizado de pagos",
            "Comunicación respetuosa con padres de familia",
            "Negociación flexible de acuerdos de pago",
            "Recuperación temprana de cartera vencida",
            "Escalamiento jurídico cuando es necesario",
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
          Cómo funciona el proceso de recuperación de cartera
        </h2>

        <div className={styles.grid}>
          {[
            "Diagnóstico de cartera del colegio en Colombia",
            "Clasificación de deudores por niveles de riesgo",
            "Diseño de estrategia de cobranza personalizada",
            "Implementación de seguimiento y contacto",
            "Negociación de acuerdos de pago",
            "Escalamiento jurídico si es necesario",
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

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de mejorar el recaudo en tu colegio
        </h2>

        <div className={styles.benefits}>
          <span>✔ Reducción de mora</span>
          <span>✔ Mejor flujo de caja</span>
          <span>✔ Mayor control financiero</span>
          <span>✔ Menos carga administrativa</span>
          <span>✔ Recuperación más rápida</span>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre cobranza en colegios
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Cómo cobrar pensiones atrasadas en Colombia?</h4>
            <p>
              A través de seguimiento estructurado, negociación o procesos
              jurídicos según el nivel de mora.
            </p>
          </div>

          <div>
            <h4>¿Se puede cobrar sin afectar la relación con padres?</h4>
            <p>
              Sí, con estrategias de cobranza respetuosa y comunicación
              adecuada.
            </p>
          </div>

          <div>
            <h4>¿Cuándo se debe escalar a proceso jurídico?</h4>
            <p>
              Cuando la cartera supera varios intentos de gestión y no hay
              intención de pago.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Empieza hoy a recuperar pensiones atrasadas en tu colegio
          </h2>

          <p className={styles.ctaText}>
            Recupera las pensiones atrasadas con una estrategia profesional de
            cobranza que protege la relación con padres de familia y mejora la
            estabilidad financiera de tu institución.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20colegios%20en%20Colombia."
              className={styles.primary}
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20hablar%20por%20WhatsApp%20sobre%20la%20recuperaci%C3%B3n%20de%20cartera%20en%20mi%20colegio."
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
