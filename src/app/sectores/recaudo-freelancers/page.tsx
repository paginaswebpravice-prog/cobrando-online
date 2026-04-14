"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoFreelancersPage() {
  return (
    <>
      <Head>
        <title>
          Cobrar clientes como freelancer en Colombia | Recuperar pagos
          atrasados
        </title>
        <meta
          name="description"
          content="¿Clientes que no pagan? Recupera pagos atrasados como freelancer en Colombia. Mejora tu flujo de caja y cobra de forma profesional sin conflictos."
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
              <span className={styles.badge}>Freelancers en Colombia</span>

              <h1 className={styles.title}>
                Cómo cobrar clientes que no pagan como freelancer
              </h1>

              <p className={styles.description}>
                Si eres freelancer y tienes clientes que no te pagan, no estás
                solo. En <strong>Cobrando Online</strong> te ayudamos a
                recuperar pagos atrasados, gestionar cobros de forma profesional
                y mejorar tu flujo de caja sin dañar la relación con tus
                clientes.
              </p>

              <div className={styles.actions}>
                <a href="   #contacto" className={styles.primary}>
                  Recuperar mi dinero
                </a>
                <a href="/#proceso" className={styles.secondary}>
                  Cómo funciona
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Problemas comunes de los freelancers al cobrar
          </h2>

          <p className={styles.text}>
            Muchos freelancers en Colombia enfrentan dificultades para cobrar
            sus servicios. Aunque el trabajo se entrega correctamente, el pago
            se retrasa o nunca llega. Esto genera frustración, pérdida de tiempo
            y afecta directamente la estabilidad económica.
          </p>

          <div className={styles.grid}>
            {[
              "Clientes que dejan de responder después de entregar el trabajo",
              "Pagos retrasados sin fechas claras",
              "Falta de contratos o acuerdos formales",
              "Dificultad para hacer seguimiento constante",
              "Miedo a insistir y perder al cliente",
              "Dependencia de ingresos irregulares",
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
            ⚠ Muchos freelancers pierden dinero simplemente por no tener un
            proceso de cobro estructurado.
          </div>
        </section>

        {/* IMPACTO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo afectan los clientes morosos a un freelancer
          </h2>

          <p className={styles.text}>
            No cobrar a tiempo impacta directamente tu estabilidad financiera,
            tu motivación y tu capacidad de crecimiento. A diferencia de una
            empresa, el freelancer depende directamente de cada pago.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Flujo de caja inestable</h4>
              <p>
                Ingresos impredecibles que dificultan cubrir gastos personales.
              </p>
            </div>

            <div>
              <h4>✔ Pérdida de tiempo</h4>
              <p>
                Horas invertidas persiguiendo pagos en lugar de trabajar o
                vender.
              </p>
            </div>

            <div>
              <h4>✔ Estrés financiero</h4>
              <p>Incertidumbre constante sobre cuándo recibirás tu dinero.</p>
            </div>

            <div>
              <h4>✔ Crecimiento limitado</h4>
              <p>Falta de capital para invertir en herramientas o formación.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Cobrar bien no es solo insistir, es tener un sistema que funcione.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo te ayudamos a cobrar como freelancer
          </h2>

          <p className={styles.text}>
            Implementamos un sistema de cobranza profesional adaptado a
            freelancers, enfocado en recuperar tu dinero sin generar conflictos
            innecesarios con tus clientes.
          </p>

          <div className={styles.grid}>
            {[
              "Seguimiento estructurado a cada cliente",
              "Mensajes estratégicos de cobro",
              "Negociación de pagos pendientes",
              "Recordatorios automáticos",
              "Formalización de acuerdos de pago",
              "Escalamiento legal si es necesario",
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
            Proceso para recuperar pagos atrasados
          </h2>

          <div className={styles.steps}>
            {[
              "Evaluamos tu caso y la deuda",
              "Definimos una estrategia de cobro",
              "Contactamos al cliente de forma profesional",
              "Realizamos seguimiento constante",
              "Negociamos acuerdos de pago",
              "Escalamos a proceso legal si aplica",
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
          <h2 className={styles.subtitle}>Beneficios para freelancers</h2>

          <div className={styles.benefits}>
            <span>✔ Recuperas dinero que dabas por perdido</span>
            <span>✔ Ahorro de tiempo</span>
            <span>✔ Cobro profesional</span>
            <span>✔ Mejor flujo de ingresos</span>
            <span>✔ Menos estrés</span>
            <span>✔ Mayor control financiero</span>
            <span>✔ Procesos claros</span>
            <span>✔ Escalabilidad en tu trabajo</span>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre cobrar como freelancer
          </h2>

          <div className={styles.faq}>
            <div>
              <h4>¿Qué hacer si un cliente no me paga?</h4>
              <p>
                Puedes iniciar un proceso de cobro estructurado que incluya
                seguimiento, negociación y acciones legales si es necesario.
              </p>
            </div>

            <div>
              <h4>¿Es legal cobrar a un cliente?</h4>
              <p>
                Sí, siempre que se haga de forma adecuada y respetando la
                normativa vigente en Colombia.
              </p>
            </div>

            <div>
              <h4>¿Necesito contrato para cobrar?</h4>
              <p>No siempre, pero facilita mucho el proceso de recuperación.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Deja de perder dinero por clientes morosos
            </h2>

            <p className={styles.ctaText}>
              Empieza hoy a recuperar tus pagos atrasados y mejora tu
              estabilidad financiera como freelancer.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
                className={styles.primary}
              >
                Solicitar ayuda
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
