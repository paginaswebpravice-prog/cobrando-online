"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function MejorarFlujoCajaContent() {
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
              Optimización financiera en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Problemas de liquidez? Mejora el flujo de caja de tu empresa hoy
            </h1>

            <p className={styles.description}>
              El flujo de caja es el motor financiero de cualquier negocio. Te
              ayudamos a optimizar ingresos, reducir retrasos en pagos y mejorar
              la liquidez mediante estrategias efectivas de gestión de cartera y
              recaudo.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Mejorar mi flujo de caja
              </a>
              <a href="#solucion" className={styles.secondary}>
                Ver estrategias
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué tu flujo de caja es inestable y cómo solucionarlo?
        </h2>

        <p className={styles.text}>
          Muchas empresas en Colombia facturan bien, pero tienen problemas de
          liquidez. Esto ocurre cuando los ingresos no se reciben a tiempo o
          cuando la gestión financiera no está estructurada correctamente.
        </p>

        <div className={styles.grid}>
          {[
            "Pagos retrasados de clientes",
            "Alto volumen de cartera vencida",
            "Falta de seguimiento a cuentas por cobrar",
            "Procesos de cobro ineficientes",
            "Dependencia de pocos clientes",
            "Desorganización financiera",
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
          ⚠ Tener ventas no garantiza liquidez: lo importante es cuándo recibes
          el dinero.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Consecuencias de un flujo de caja deficiente en tu empresa
        </h2>

        <p className={styles.text}>
          Un flujo de caja desordenado puede generar problemas operativos,
          limitar el crecimiento y aumentar el riesgo financiero de tu empresa.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Falta de liquidez</h4>
            <p>Dificultad para pagar nómina, proveedores y gastos.</p>
          </div>

          <div>
            <h4>✔ Endeudamiento</h4>
            <p>Necesidad de recurrir a créditos innecesarios.</p>
          </div>

          <div>
            <h4>✔ Estrés financiero</h4>
            <p>Incertidumbre sobre ingresos reales.</p>
          </div>

          <div>
            <h4>✔ Crecimiento limitado</h4>
            <p>No puedes invertir ni expandir el negocio.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ El flujo de caja determina la capacidad real de operación de tu
          empresa.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Flujo de caja descontrolado</h4>
            <ul>
              <li>Pagos impredecibles</li>
              <li>Falta de liquidez</li>
              <li>Dependencia de créditos</li>
              <li>Decisiones financieras reactivas</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Flujo de caja optimizado y bajo control</h4>
            <ul>
              <li>Ingresos constantes</li>
              <li>Liquidez estable</li>
              <li>Control financiero</li>
              <li>Decisiones estratégicas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className={styles.container}>
        <h2 className={styles.subtitle}>
          Estrategias efectivas para mejorar el flujo de caja en Colombia
        </h2>

        <p className={styles.text}>
          Mejorar el flujo de caja no depende de vender más, sino de cobrar
          mejor y administrar correctamente los ingresos.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Control de cartera</h4>
            <p>Seguimiento constante a cuentas por cobrar.</p>
          </div>

          <div>
            <h4>✔ Cobro oportuno</h4>
            <p>Reducir tiempos de pago de clientes.</p>
          </div>

          <div>
            <h4>✔ Estrategias de recaudo</h4>
            <p>Implementar procesos estructurados de cobro.</p>
          </div>

          <div>
            <h4>✔ Negociación efectiva</h4>
            <p>Facilitar acuerdos de pago sin afectar ingresos.</p>
          </div>

          <div>
            <h4>✔ Acciones legales</h4>
            <p>Recuperar deudas cuando es necesario.</p>
          </div>
        </div>
      </section>

      {/* FACTORES CLAVE */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Claves para mantener un flujo de caja saludable y estable
        </h2>

        <div className={styles.grid}>
          {[
            "Rotación eficiente de cartera",
            "Políticas claras de crédito",
            "Seguimiento constante a clientes",
            "Automatización de procesos",
            "Control financiero continuo",
            "Estrategias de cobro efectivas",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Mejorar el flujo de caja es una combinación de control, estrategia y
          ejecución.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de optimizar el flujo de caja de tu empresa
        </h2>

        <div className={styles.benefits}>
          <span>✔ Liquidez constante</span>
          <span>✔ Mayor estabilidad financiera</span>
          <span>✔ Reducción de deudas</span>
          <span>✔ Crecimiento sostenible</span>
          <span>✔ Mejor toma de decisiones</span>
          <span>✔ Control total del negocio</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Toma el control de tu dinero y mejora tu flujo de caja hoy
          </h2>

          <p className={styles.ctaText}>
            Mejora tu liquidez y toma el control financiero con estrategias
            efectivas de gestión de cartera en Colombia.
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
