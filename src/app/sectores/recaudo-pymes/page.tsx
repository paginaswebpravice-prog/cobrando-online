"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoPymesPage() {
  return (
    <>
      <Head>
        <title>
          Recuperación de cartera para PYMES en Colombia | Mejora tu flujo de
          caja
        </title>
        <meta
          name="description"
          content="Servicio de recuperación de cartera para PYMES en Colombia. Reduce la mora, mejora tu flujo de caja y recupera clientes morosos con estrategias efectivas."
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
              <span className={styles.badge}>PYMES en Colombia</span>

              <h1 className={styles.title}>
                Recuperación de cartera para PYMES en Colombia sin perder
                clientes
              </h1>

              <p className={styles.description}>
                Sabemos que en una PYME cada peso cuenta. Te ayudamos a
                recuperar cartera vencida, mejorar tu flujo de caja y organizar
                tu gestión de cobros sin afectar la relación con tus clientes.
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

        {/* CONTEXTO REAL */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            La realidad de las PYMES en Colombia
          </h2>

          <p className={styles.text}>
            La mayoría de las pequeñas y medianas empresas en Colombia enfrentan
            problemas de liquidez no por falta de ventas, sino por la falta de
            pago oportuno de sus clientes. Esto genera un efecto dominó que
            afecta proveedores, empleados y crecimiento.
          </p>

          <div className={styles.grid}>
            {[
              "Ventas realizadas pero dinero no recibido",
              "Clientes que prometen pagar pero nunca cumplen",
              "Dependencia de pocos clientes grandes",
              "Falta de tiempo para hacer seguimiento de cartera",
              "Desorden en cuentas por cobrar",
              "Decisiones financieras basadas en ingresos que no han llegado",
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
            ⚠ Muchas PYMES quiebran no por falta de clientes, sino por falta de
            recaudo.
          </div>
        </section>

        {/* PROBLEMA PROFUNDO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            ¿Por qué las PYMES no logran cobrar?
          </h2>

          <p className={styles.text}>
            El problema no es solo que no paguen, sino que no existe un sistema
            estructurado de cobranza. En la mayoría de casos, el cobro depende
            del tiempo libre del dueño o del área administrativa.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Falta de estrategia</h4>
              <p>No existe un proceso claro de cobro.</p>
            </div>

            <div>
              <h4>✔ Cobro informal</h4>
              <p>Mensajes improvisados sin seguimiento.</p>
            </div>

            <div>
              <h4>✔ Falta de presión efectiva</h4>
              <p>El cliente no percibe urgencia de pago.</p>
            </div>

            <div>
              <h4>✔ Desgaste operativo</h4>
              <p>Se pierde tiempo en tareas que no generan ingresos.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Cobrar no es insistir, es aplicar estrategia.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section id="proceso" className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo ayudamos a las PYMES a recuperar cartera
          </h2>

          <p className={styles.text}>
            Implementamos un modelo estructurado de cobranza adaptado a la
            realidad de las PYMES en Colombia, combinando tecnología,
            seguimiento y gestión estratégica.
          </p>

          <div className={styles.grid}>
            {[
              "Segmentación de clientes según nivel de mora",
              "Contactos estratégicos por WhatsApp y llamadas",
              "Recordatorios automatizados de pago",
              "Negociación de acuerdos de pago",
              "Seguimiento constante de cada caso",
              "Escalamiento a cobro jurídico si es necesario",
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
        </section>

        {/* BENEFICIOS REALES */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>Beneficios reales para tu PYME</h2>

          <p className={styles.text}>
            No se trata solo de cobrar, sino de mejorar la salud financiera de
            tu empresa y darte control sobre tu dinero.
          </p>

          <div className={styles.benefits}>
            <span>✔ Mejora inmediata del flujo de caja</span>
            <span>✔ Reducción de cartera vencida</span>
            <span>✔ Más control financiero</span>
            <span>✔ Ahorro de tiempo operativo</span>
            <span>✔ Mayor liquidez para crecer</span>
            <span>✔ Procesos organizados y medibles</span>
          </div>
        </section>

        {/* CASOS */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>Casos comunes en PYMES</h2>

          <div className={styles.grid}>
            {[
              "Empresas con clientes que pagan a 60-90 días",
              "Negocios con cartera acumulada sin gestionar",
              "Emprendedores que no tienen tiempo para cobrar",
              "Empresas con crecimiento pero sin liquidez",
              "PYMES con dependencia de pocos clientes grandes",
              "Negocios con facturación alta pero bajo recaudo",
            ].map((item, i) => (
              <div key={i} className={styles.card}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Recupera el control financiero de tu PYME
            </h2>

            <p className={styles.ctaText}>
              No sigas trabajando sin recibir tu dinero. Te ayudamos a recuperar
              cartera en Colombia de forma estratégica y profesional.
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
