"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecuperarCarteraContent() {
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
              Recuperación de cartera en Bogotá y Colombia
            </span>

            <h1 className={styles.title}>
              Recuperar cartera vencida en Colombia de forma rápida y efectiva
            </h1>

            <p className={styles.description}>
              En <strong>Cobrando Online</strong> ayudamos a empresas, clínicas
              y personas a recuperar deudas en Colombia mediante estrategias de
              cobro prejurídico, negociación y procesos judiciales. Mejoramos tu
              flujo de caja y reducimos el riesgo financiero.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mi cartera
              </a>
              <a href="#proceso" className={styles.secondary}>
                Ver proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTEXTO SEO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué es la recuperación de cartera y por qué es clave en Colombia?
        </h2>

        <p className={styles.text}>
          La recuperación de cartera es el proceso mediante el cual una empresa
          o persona logra recuperar dinero adeudado por clientes, EPS o
          terceros. En Colombia, especialmente en ciudades como Bogotá, la mora
          en pagos es uno de los principales problemas financieros para empresas
          y sector salud.
        </p>

        <div className={styles.highlightBox}>
          ✔ Recuperar cartera a tiempo mejora el flujo de caja, evita pérdidas y
          fortalece la estabilidad financiera.
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <motion.div
            className={`${styles.compareBox} ${styles.bad}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h4>❌ Gestión interna sin estrategia</h4>
            <ul>
              <li>Falta de seguimiento a deudores</li>
              <li>Baja tasa de recuperación</li>
              <li>Pérdida de tiempo operativo</li>
              <li>Alto riesgo de incobrabilidad</li>
            </ul>
          </motion.div>

          <motion.div
            className={`${styles.compareBox} ${styles.good}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h4>✔ Recuperación con expertos</h4>
            <ul>
              <li>Estrategias jurídicas estructuradas</li>
              <li>Seguimiento constante</li>
              <li>Mayor recuperación efectiva</li>
              <li>Optimización del flujo de caja</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TIPOS DE CARTERA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Tipos de cartera que recuperamos en Colombia
        </h2>

        <p className={styles.text}>
          Trabajamos diferentes tipos de cartera vencida adaptando la estrategia
          a cada caso.
        </p>

        <div className={styles.grid}>
          {[
            {
              title: "Cartera comercial",
              text: "Facturas, contratos, servicios y obligaciones empresariales.",
            },
            {
              title: "Cartera civil",
              text: "Préstamos entre personas, acuerdos incumplidos.",
            },
            {
              title: "Cartera sector salud",
              text: "EPS, clínicas, hospitales y ADRES.",
            },
            {
              title: "Cartera difícil",
              text: "Deudas antiguas o con alto nivel de mora.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Proceso de recuperación de cartera paso a paso
        </h2>

        <div className={styles.infoGrid}>
          {[
            "Diagnóstico y análisis de la deuda",
            "Validación documental",
            "Estrategia de cobro personalizada",
            "Gestión de negociación con el deudor",
            "Cobro prejurídico estructurado",
            "Proceso judicial si aplica",
          ].map((step, i) => (
            <motion.div key={i}>
              <h4>✔ Etapa {i + 1}</h4>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Más del 70% de las deudas pueden recuperarse sin necesidad de llegar
          a un proceso judicial cuando se aplican estrategias correctas.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de recuperar cartera con Cobrando Online
        </h2>

        <div className={styles.benefits}>
          <span>✔ Aumento del recaudo</span>
          <span>✔ Reducción de cartera vencida</span>
          <span>✔ Mejora del flujo de caja</span>
          <span>✔ Ahorro de tiempo</span>
          <span>✔ Seguridad jurídica</span>
          <span>✔ Procesos estructurados</span>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre recuperación de cartera
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Cómo recuperar una deuda en Colombia?</h4>
            <p>
              A través de cobro prejurídico, negociación directa o proceso
              judicial según el caso.
            </p>
          </div>

          <div>
            <h4>¿Cuánto tarda recuperar cartera?</h4>
            <p>
              Puede tomar desde semanas hasta meses dependiendo del tipo de
              deuda.
            </p>
          </div>

          <div>
            <h4>¿Es necesario demandar?</h4>
            <p>No siempre. Muchas deudas se recuperan sin proceso judicial.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Empieza hoy a recuperar tu dinero</h2>

          <p className={styles.ctaText}>
            No dejes que las deudas sigan afectando tu negocio. Te ayudamos a
            recuperar cartera en Bogotá y toda Colombia.
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
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
