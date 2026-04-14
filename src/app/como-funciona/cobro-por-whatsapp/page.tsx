"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function CobroWhatsAppPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Cobro por WhatsApp en Colombia | Cómo cobrar deudas efectivamente
        </title>

        <meta
          name="description"
          content="Aprende cómo cobrar deudas por WhatsApp en Colombia con estrategias efectivas, mensajes correctos y técnicas de recuperación de cartera."
        />

        <meta
          name="keywords"
          content="cobro por whatsapp, cobrar deuda por whatsapp, mensajes de cobro, recuperación de cartera whatsapp Colombia"
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
                Estrategias de cobro en Colombia
              </span>

              <h1 className={styles.title}>
                Cómo cobrar por WhatsApp de forma efectiva y profesional
              </h1>

              <p className={styles.description}>
                WhatsApp es una de las herramientas más poderosas para recuperar
                cartera en Colombia. Aprende cómo contactar a tus clientes,
                negociar pagos y aumentar tu recaudo con mensajes estratégicos.
              </p>

              <div className={styles.actions}>
                <a href="#contacto" className={styles.primary}>
                  Cobrar por WhatsApp
                </a>
                <a href="#estrategia" className={styles.secondary}>
                  Ver cómo funciona
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>El error al cobrar por WhatsApp</h2>

          <p className={styles.text}>
            Muchas empresas intentan cobrar por WhatsApp de forma improvisada,
            lo que genera baja respuesta, evasión del cliente y pérdida de
            oportunidades de recaudo.
          </p>

          <div className={styles.grid}>
            {[
              "Mensajes demasiado informales",
              "Falta de seguimiento",
              "Cobros agresivos o mal redactados",
              "No saber cuándo escribir",
              "Clientes que ignoran los mensajes",
              "Ausencia de estrategia de cobro",
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
            ⚠ Un mal mensaje puede hacer que el cliente ignore completamente el
            pago.
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            ¿Por qué WhatsApp funciona para cobrar?
          </h2>

          <p className={styles.text}>
            WhatsApp tiene una tasa de apertura mucho mayor que el correo
            electrónico o llamadas. Bien utilizado, se convierte en una
            herramienta clave para la recuperación de cartera.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Alta tasa de lectura</h4>
              <p>Los mensajes son vistos casi inmediatamente.</p>
            </div>

            <div>
              <h4>✔ Comunicación directa</h4>
              <p>Contacto inmediato con el cliente.</p>
            </div>

            <div>
              <h4>✔ Rapidez</h4>
              <p>Permite negociar en tiempo real.</p>
            </div>

            <div>
              <h4>✔ Cercanía</h4>
              <p>Genera confianza si se usa correctamente.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ WhatsApp no es solo un canal, es una herramienta estratégica de
            cobro.
          </div>
        </section>

        {/* COMPARATIVO */}
        <section className={styles.container}>
          <div className={styles.comparison}>
            <div className={`${styles.compareBox} ${styles.bad}`}>
              <h4>❌ Cobro sin estrategia</h4>
              <ul>
                <li>Mensajes ignorados</li>
                <li>Clientes evasivos</li>
                <li>Baja recuperación</li>
                <li>Pérdida de tiempo</li>
              </ul>
            </div>

            <div className={`${styles.compareBox} ${styles.good}`}>
              <h4>✔ Cobro estratégico</h4>
              <ul>
                <li>Mensajes efectivos</li>
                <li>Mayor respuesta</li>
                <li>Negociación fluida</li>
                <li>Resultados reales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ESTRATEGIA */}
        <section id="estrategia" className={styles.container}>
          <h2 className={styles.subtitle}>
            Estrategia de cobro por WhatsApp paso a paso
          </h2>

          <p className={styles.text}>
            Cobrar por WhatsApp requiere una secuencia clara de mensajes y
            acciones. No se trata de insistir, sino de comunicar correctamente.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Primer contacto</h4>
              <p>Mensaje cordial recordando la obligación.</p>
            </div>

            <div>
              <h4>✔ Seguimiento</h4>
              <p>Recordatorios sin ser invasivo.</p>
            </div>

            <div>
              <h4>✔ Negociación</h4>
              <p>Ofrecer acuerdos de pago.</p>
            </div>

            <div>
              <h4>✔ Cierre</h4>
              <p>Confirmación del pago o compromiso.</p>
            </div>

            <div>
              <h4>✔ Escalamiento</h4>
              <p>Acciones legales si no hay respuesta.</p>
            </div>
          </div>
        </section>

        {/* MENSAJES */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Ejemplos de mensajes de cobro por WhatsApp
          </h2>

          <div className={styles.grid}>
            {[
              "Hola, te escribimos para recordarte un pago pendiente. ¿Podemos ayudarte con el proceso?",
              "Queremos validar contigo el estado de tu obligación. Quedamos atentos a tu respuesta.",
              "Te ofrecemos opciones de pago para facilitar el cumplimiento de tu deuda.",
              "Por favor confirma si puedes realizar el pago o necesitas un acuerdo.",
            ].map((msg, i) => (
              <div key={i} className={styles.card}>
                <p>{msg}</p>
              </div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            Un buen mensaje puede aumentar significativamente la probabilidad de
            pago.
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>Beneficios del cobro por WhatsApp</h2>

          <div className={styles.benefits}>
            <span>✔ Respuesta rápida</span>
            <span>✔ Mayor contacto con clientes</span>
            <span>✔ Reducción de tiempos de pago</span>
            <span>✔ Mejora en recaudo</span>
            <span>✔ Comunicación directa</span>
            <span>✔ Bajo costo operativo</span>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Empieza a cobrar por WhatsApp de forma efectiva
            </h2>

            <p className={styles.ctaText}>
              Implementa una estrategia profesional y aumenta tu recuperación de
              cartera en Colombia.
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
