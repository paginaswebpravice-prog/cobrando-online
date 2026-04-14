"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoColegiosPage() {
  return (
    <>
      <Head>
        <title>
          Recaudo de cartera para colegios en Colombia | Cobranza educativa
        </title>
        <meta
          name="description"
          content="Recupera cartera vencida en colegios en Colombia. Gestiona pensiones atrasadas, mejora el flujo de caja y optimiza el recaudo con estrategias profesionales."
        />
      </Head>

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
                Recuperación de cartera para colegios y pensiones atrasadas
              </h1>

              <p className={styles.description}>
                Ayudamos a colegios en Colombia a recuperar pensiones vencidas,
                reducir la mora y mejorar el flujo de caja sin afectar la
                relación con padres de familia. Implementamos estrategias de
                cobro respetuosas, estructuradas y efectivas.
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
            Problemas frecuentes en el recaudo de colegios
          </h2>

          <p className={styles.text}>
            La mora en el pago de pensiones escolares es uno de los principales
            retos financieros para colegios en Colombia. Aunque la institución
            presta el servicio educativo de forma continua, los retrasos en los
            pagos generan desbalances económicos que afectan la operación
            diaria, la calidad educativa y la sostenibilidad del colegio.
          </p>

          <div className={styles.grid}>
            {[
              "Padres de familia que acumulan varias mensualidades sin pagar",
              "Dificultad para hacer seguimiento constante a cada estudiante",
              "Procesos de cobro informales o poco estructurados",
              "Temor a afectar la relación con la comunidad educativa",
              "Falta de herramientas para control de cartera",
              "Incremento de cartera vencida en periodos escolares",
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

          <div className={styles.warningBox}>
            ⚠ Una cartera vencida mal gestionada puede afectar directamente la
            operación del colegio, incluyendo pago de docentes, servicios y
            calidad educativa.
          </div>
        </section>

        {/* IMPACTO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Impacto de la cartera vencida en colegios
          </h2>

          <p className={styles.text}>
            Cuando los pagos no se realizan a tiempo, el colegio debe asumir
            costos operativos sin contar con los ingresos esperados. Esto genera
            presión financiera constante y limita la capacidad de inversión y
            crecimiento institucional.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Problemas de liquidez</h4>
              <p>
                Dificultad para cubrir gastos como nómina, servicios y
                mantenimiento.
              </p>
            </div>

            <div>
              <h4>✔ Desbalance financiero</h4>
              <p>
                Diferencia entre ingresos proyectados y dinero realmente
                recibido.
              </p>
            </div>

            <div>
              <h4>✔ Impacto en calidad educativa</h4>
              <p>
                Menor capacidad de inversión en recursos académicos y
                tecnología.
              </p>
            </div>

            <div>
              <h4>✔ Estrés administrativo</h4>
              <p>
                Carga adicional para el personal encargado de cartera y
                coordinación.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Un buen sistema de recaudo no solo mejora las finanzas, también
            fortalece la estabilidad y crecimiento del colegio.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo ayudamos a los colegios a recuperar cartera
          </h2>

          <p className={styles.text}>
            Implementamos un modelo de cobranza especializado para instituciones
            educativas, enfocado en lograr el pago sin generar conflictos ni
            deteriorar la relación con los padres de familia.
          </p>

          <div className={styles.grid}>
            {[
              "Seguimiento personalizado a cada caso",
              "Recordatorios automáticos de pago",
              "Comunicación respetuosa y profesional",
              "Estrategias de negociación flexibles",
              "Acuerdos de pago estructurados",
              "Escalamiento a cobro jurídico cuando aplica",
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
            Proceso de recuperación de cartera educativa
          </h2>

          <div className={styles.steps}>
            {[
              "Diagnóstico de cartera del colegio",
              "Segmentación de deudores",
              "Implementación de estrategia de cobro",
              "Seguimiento constante",
              "Negociación y acuerdos de pago",
              "Escalamiento jurídico si es necesario",
            ].map((step, i) => (
              <motion.div
                key={i}
                className={styles.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span>{i + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Beneficios para colegios en Colombia
          </h2>

          <div className={styles.benefits}>
            <span>✔ Reducción de cartera vencida</span>
            <span>✔ Mejora del flujo de caja</span>
            <span>✔ Mayor control financiero</span>
            <span>✔ Menor carga administrativa</span>
            <span>✔ Procesos organizados</span>
            <span>✔ Recuperación sin conflicto</span>
            <span>✔ Incremento en recaudo mensual</span>
            <span>✔ Mayor estabilidad institucional</span>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre cartera en colegios
          </h2>

          <div className={styles.faq}>
            <div>
              <h4>¿Cómo cobrar pensiones atrasadas en Colombia?</h4>
              <p>
                Se puede realizar mediante seguimiento, negociación, acuerdos de
                pago o procesos legales dependiendo del caso.
              </p>
            </div>

            <div>
              <h4>¿Se puede cobrar sin afectar la relación con los padres?</h4>
              <p>
                Sí, mediante estrategias de comunicación respetuosa y gestión
                profesional.
              </p>
            </div>

            <div>
              <h4>¿Cuándo iniciar un proceso jurídico?</h4>
              <p>
                Cuando la deuda persiste y no hay respuesta en las etapas de
                cobro previo.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Mejora el recaudo en tu colegio</h2>

            <p className={styles.ctaText}>
              No permitas que la cartera vencida afecte la estabilidad de tu
              institución. Implementa un sistema de cobranza profesional y
              mejora tu flujo de caja.
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
