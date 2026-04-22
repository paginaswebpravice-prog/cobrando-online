"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function ClientesNoPaganContent() {
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
              Soluciones para empresas en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Clientes que no pagan? Recupera tu dinero rápido y sin
              complicaciones
            </h1>

            <p className={styles.description}>
              Si tienes clientes que no responden, retrasan pagos o evitan sus
              obligaciones, necesitas una estrategia profesional. Te ayudamos a
              recuperar tu dinero en Colombia mediante negociación, cobro
              estructurado y acciones legales.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mi dinero
              </a>
              <a href="#solucion" className={styles.secondary}>
                Ver solución
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué tus clientes no pagan y cómo está afectando tu negocio?
        </h2>

        <p className={styles.text}>
          Tener clientes que no pagan es una de las principales causas de
          problemas financieros en empresas y negocios en Colombia. No se trata
          solo de una deuda, sino del impacto directo en tu flujo de caja,
          operación y crecimiento.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes que prometen pagar pero no cumplen",
            "Deudores que dejan de responder llamadas",
            "Pagos retrasados constantemente",
            "Excusas recurrentes para no pagar",
            "Falta de acuerdos formales",
            "Cartera que envejece y pierde valor",
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
          ⚠ Ignorar estos casos puede convertir una deuda recuperable en una
          pérdida total.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Impacto real de los clientes morosos en tu empresa
        </h2>

        <p className={styles.text}>
          Los clientes que no pagan no solo representan dinero pendiente, sino
          un riesgo financiero real que puede afectar la estabilidad de tu
          empresa.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Falta de liquidez</h4>
            <p>No puedes cubrir gastos operativos básicos.</p>
          </div>

          <div>
            <h4>✔ Estrés financiero</h4>
            <p>Incertidumbre sobre ingresos reales.</p>
          </div>

          <div>
            <h4>✔ Crecimiento limitado</h4>
            <p>No puedes reinvertir en el negocio.</p>
          </div>

          <div>
            <h4>✔ Pérdidas acumuladas</h4>
            <p>Las deudas se vuelven incobrables con el tiempo.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Un cliente que no paga no solo afecta una factura, afecta todo tu
          flujo financiero.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Sin estrategia de cobro profesional</h4>
            <ul>
              <li>Clientes evaden el pago</li>
              <li>No hay seguimiento</li>
              <li>Procesos desorganizados</li>
              <li>Baja recuperación</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Con gestión profesional de cartera</h4>
            <ul>
              <li>Seguimiento estructurado</li>
              <li>Negociación efectiva</li>
              <li>Mayor presión de pago</li>
              <li>Resultados reales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar deudas de clientes que no pagan en Colombia
        </h2>

        <p className={styles.text}>
          La recuperación de cartera requiere una combinación de estrategia,
          comunicación y respaldo legal. No se trata de insistir, sino de saber
          cómo cobrar correctamente.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Análisis del cliente</h4>
            <p>Evaluamos el comportamiento y capacidad de pago.</p>
          </div>

          <div>
            <h4>✔ Estrategia de contacto</h4>
            <p>Definimos el mejor enfoque para recuperar la deuda.</p>
          </div>

          <div>
            <h4>✔ Negociación</h4>
            <p>Acuerdos de pago viables y efectivos.</p>
          </div>

          <div>
            <h4>✔ Cobro prejurídico</h4>
            <p>Presión profesional sin necesidad de demanda inicial.</p>
          </div>

          <div>
            <h4>✔ Acción legal</h4>
            <p>Proceso judicial cuando es necesario.</p>
          </div>
        </div>
      </section>

      {/* TIPOS DE CLIENTES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Tipos de clientes morosos y cómo cobrarles
        </h2>

        <div className={styles.grid}>
          {[
            "Cliente que se desaparece",
            "Cliente con excusas constantes",
            "Cliente con dificultades financieras",
            "Cliente que prioriza otras deudas",
            "Cliente que busca evitar el pago",
            "Cliente que paga parcialmente",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Cada tipo de cliente requiere una estrategia diferente para lograr el
          pago.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de recuperar tu cartera a tiempo
        </h2>

        <div className={styles.benefits}>
          <span>✔ Recuperación más rápida</span>
          <span>✔ Mayor probabilidad de pago</span>
          <span>✔ Reducción de pérdidas</span>
          <span>✔ Mejor flujo de caja</span>
          <span>✔ Control financiero</span>
          <span>✔ Seguridad jurídica</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera tu dinero y deja de perder ingresos por clientes morosos
          </h2>

          <p className={styles.ctaText}>
            Recupera tu cartera en Colombia con un enfoque profesional,
            estratégico y legal.
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
