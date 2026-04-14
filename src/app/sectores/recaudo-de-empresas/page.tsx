"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoEmpresasPage() {
  return (
    <>
      <Head>
        <title>
          Recuperación de cartera para empresas en Colombia | Cobranza
          empresarial
        </title>

        <meta
          name="description"
          content="Recuperación de cartera para empresas en Colombia. Mejora el flujo de caja, reduce la mora y aumenta el recaudo con estrategias profesionales de cobranza."
        />

        <meta
          name="keywords"
          content="recuperación de cartera empresas Colombia, cobranza empresarial, cartera vencida empresas, recaudo de cartera Colombia"
        />
      </Head>

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
                Recuperación de cartera para empresas en Colombia
              </h1>

              <p className={styles.description}>
                Ayudamos a empresas en Colombia a recuperar cartera vencida,
                mejorar su flujo de caja y transformar su proceso de cobro en un
                sistema estructurado, medible y altamente efectivo.
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

        {/* ================= CONTEXTO ================= */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            La realidad de la cartera empresarial en Colombia
          </h2>

          <p className={styles.text}>
            En Colombia, muchas empresas enfrentan problemas de liquidez no por
            falta de ventas, sino por una gestión ineficiente de cartera. La
            acumulación de cuentas por cobrar, los retrasos en pagos y la falta
            de seguimiento impactan directamente la operación y el crecimiento.
          </p>

          <div className={styles.highlightBox}>
            ✔ No es un problema de facturación, es un problema de recaudo.
          </div>
        </section>

        {/* ================= PROBLEMAS ================= */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Problemas comunes en empresas con cartera vencida
          </h2>

          <p className={styles.text}>
            Las empresas suelen enfrentar múltiples obstáculos al momento de
            recuperar cartera, especialmente cuando no cuentan con procesos
            estructurados o herramientas adecuadas.
          </p>

          <div className={styles.grid}>
            {[
              "Clientes que no pagan a tiempo o incumplen acuerdos",
              "Facturación alta pero bajo recaudo efectivo",
              "Falta de seguimiento constante a deudores",
              "Cartera vencida acumulada por meses o años",
              "Dependencia de procesos manuales",
              "Falta de control sobre el estado de las deudas",
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
            ⚠ La falta de gestión de cartera puede frenar el crecimiento de una
            empresa incluso cuando vende bien.
          </div>
        </section>

        {/* ================= IMPACTO ================= */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Impacto de la cartera vencida en tu empresa
          </h2>

          <p className={styles.text}>
            La cartera vencida no solo representa dinero pendiente, sino un
            riesgo directo para la estabilidad financiera de la empresa.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Problemas de liquidez</h4>
              <p>Dificultad para cubrir gastos operativos.</p>
            </div>

            <div>
              <h4>✔ Retrasos en pagos</h4>
              <p>Impacto en proveedores y operación.</p>
            </div>

            <div>
              <h4>✔ Limitación de crecimiento</h4>
              <p>Menor capacidad de inversión.</p>
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
            Solución profesional de recuperación de cartera empresarial
          </h2>

          <p className={styles.text}>
            Implementamos un modelo de cobranza estructurado que combina
            tecnología, seguimiento y estrategias legales para maximizar el
            recaudo de cartera en empresas en Colombia.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Cobro prejurídico</h4>
              <p>Gestión estratégica antes de procesos legales.</p>
            </div>

            <div>
              <h4>✔ Seguimiento constante</h4>
              <p>Control total de cada cliente y deuda.</p>
            </div>

            <div>
              <h4>✔ Negociación efectiva</h4>
              <p>Incremento en tasas de recuperación.</p>
            </div>

            <div>
              <h4>✔ Proceso jurídico</h4>
              <p>Acciones legales cuando es necesario.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Transformamos tu cartera en flujo de caja real.
          </div>
        </section>

        {/* ================= PROCESO ================= */}
        <section id="proceso" className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo funciona la recuperación de cartera
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Análisis inicial</h4>
              <p>Evaluamos la viabilidad de recuperación.</p>
            </div>

            <div>
              <h4>✔ Estrategia personalizada</h4>
              <p>Definimos el mejor enfoque de cobro.</p>
            </div>

            <div>
              <h4>✔ Gestión de cobro</h4>
              <p>Contactamos y negociamos con deudores.</p>
            </div>

            <div>
              <h4>✔ Seguimiento continuo</h4>
              <p>Control hasta lograr el pago.</p>
            </div>
          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Beneficios para empresas en Colombia
          </h2>

          <div className={styles.benefits}>
            <span>✔ Incremento en recaudo</span>
            <span>✔ Mejor flujo de caja</span>
            <span>✔ Reducción de cartera vencida</span>
            <span>✔ Ahorro de tiempo operativo</span>
            <span>✔ Mayor control financiero</span>
            <span>✔ Seguridad jurídica</span>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Recupera el control financiero de tu empresa
            </h2>

            <p className={styles.ctaText}>
              No dejes que la cartera vencida limite el crecimiento de tu
              empresa. Implementa una estrategia profesional de recuperación de
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
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
