"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function SeguimientoCarteraContent() {
  return (
    <main className={styles.pageWrapper}>
      {/*  HERO  */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>
              Control y seguimiento de cartera empresarial
            </span>

            <h1 className={styles.title}>
              Seguimiento de cartera en Colombia: controla tus cobros y conoce
              el estado de cada cuenta en tiempo real
            </h1>

            <p className={styles.description}>
              Gestiona tu cartera con mayor organización, visibilidad y
              trazabilidad. Consulta avances, controla gestiones realizadas y
              toma mejores decisiones para mejorar el recaudo de tu empresa.
            </p>

            <div className={styles.actions}>
              <a
                href="https://legalapp.pravice.co/login.php"
                className={styles.primary}
              >
                Consultar estado de cartera
              </a>

              <a href="#funcionamiento" className={styles.secondary}>
                Conocer cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  PROBLEMA  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Sin seguimiento de cartera pierdes visibilidad sobre tus pagos
          pendientes
        </h2>

        <p className={styles.text}>
          Muchas empresas tienen clientes con obligaciones pendientes, pero no
          cuentan con información clara sobre qué gestiones se han realizado,
          cuáles son los casos más críticos y qué acciones deben priorizar.
          <br />
          <br />
          La falta de seguimiento genera retrasos, pérdida de oportunidades de
          pago y dificultad para tomar decisiones oportunas sobre la cartera.
        </p>

        <div className={styles.grid}>
          {[
            "No conocer el estado actual de cada cuenta",

            "Dificultad para medir avances de recuperación",

            "Información dispersa entre diferentes áreas",

            "Falta de historial de gestiones realizadas",

            "Seguimientos manuales difíciles de controlar",

            "Decisiones tomadas sin información actualizada",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
              }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.warningBox}>
          ⚠ Si no puedes medir el estado de tu cartera, es más difícil mejorar
          tus resultados de recaudo.
        </div>
      </section>

      {/*  DEFINICIÓN  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué es el seguimiento de cartera y por qué es clave para una empresa?
        </h2>

        <p className={styles.text}>
          El seguimiento de cartera es el proceso de controlar y monitorear cada
          obligación pendiente, registrando las acciones realizadas, avances de
          gestión y estado actual de cada cuenta.
          <br />
          <br />A diferencia de una gestión de cobro aislada, el seguimiento
          permite tener una visión completa del comportamiento de la cartera y
          conocer qué estrategias están funcionando para recuperar pagos.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Control permanente</h4>

            <p>
              Conoce qué sucede con cada cuenta pendiente y evita perder casos
              importantes.
            </p>
          </div>

          <div>
            <h4>✔ Información organizada</h4>

            <p>
              Centraliza datos, avances y gestiones realizadas durante el
              proceso.
            </p>
          </div>

          <div>
            <h4>✔ Mayor capacidad de decisión</h4>

            <p>
              Identifica prioridades y enfoca esfuerzos donde existe mayor
              oportunidad de recuperación.
            </p>
          </div>

          <div>
            <h4>✔ Trazabilidad completa</h4>

            <p>Mantén historial de acciones y evolución de cada obligación.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ El seguimiento convierte una cartera desorganizada en información
          útil para tomar decisiones estratégicas.
        </div>
      </section>

      {/*  DIFERENCIAL  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Seguimiento de cartera con información clara en cada etapa del cobro
        </h2>

        <p className={styles.text}>
          Tener una cartera organizada no solamente significa saber cuánto se
          debe, sino conocer qué acciones se han realizado, qué clientes tienen
          mayor probabilidad de pago y cuáles requieren una estrategia
          diferente.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Sin seguimiento estructurado</h4>

            <ul>
              <li>No existe control sobre cada caso</li>

              <li>Información desactualizada</li>

              <li>Dificultad para priorizar cobros</li>

              <li>Pérdida de oportunidades de recuperación</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Con seguimiento digital de cartera</h4>

            <ul>
              <li>Estado actualizado de cada cuenta</li>

              <li>Historial completo de gestiones</li>

              <li>Mayor control sobre los procesos</li>

              <li>Mejores decisiones empresariales</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  FUNCIONAMIENTO  */}
      <section id="funcionamiento" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo funciona el seguimiento de cartera paso a paso
        </h2>

        <p className={styles.text}>
          El proceso permite organizar la información de cada obligación y
          mantener un control constante sobre las acciones realizadas para
          mejorar la recuperación de cartera.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Registro inicial de cartera</h4>

            <p>
              Se identifica cada obligación, cliente y estado inicial del
              proceso.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento de gestiones</h4>

            <p>Cada contacto, avance o compromiso queda registrado.</p>
          </div>

          <div>
            <h4>✔ Actualización del estado</h4>

            <p>
              La información se mantiene organizada para conocer la evolución de
              cada cuenta.
            </p>
          </div>

          <div>
            <h4>✔ Control de avances</h4>

            <p>
              Permite identificar pagos realizados, pendientes y próximos pasos.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento hasta recuperación</h4>

            <p>
              Mantiene continuidad hasta lograr la normalización de la
              obligación.
            </p>
          </div>
        </div>
      </section>

      {/*  CASOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Empresas que necesitan mayor control y seguimiento de cartera
        </h2>

        <p className={styles.text}>
          Una herramienta de seguimiento es especialmente útil para empresas que
          manejan múltiples clientes, pagos pendientes o procesos constantes de
          recuperación.
        </p>

        <div className={styles.grid}>
          {[
            "Empresas con cartera comercial activa",

            "Negocios con pagos recurrentes",

            "Instituciones de salud y servicios",

            "Empresas con alto volumen de clientes",

            "Organizaciones que necesitan trazabilidad",

            "Empresas que buscan mejorar su flujo de caja",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Tener información actualizada permite enfocar esfuerzos en los casos
          con mayor oportunidad de recuperación.
        </div>
      </section>

      {/*  BENEFICIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar seguimiento de cartera para tu empresa
        </h2>

        <div className={styles.benefits}>
          <span>✔ Control completo de cuentas pendientes</span>

          <span>✔ Mayor organización del proceso de cobro</span>

          <span>✔ Historial de gestiones realizadas</span>

          <span>✔ Información disponible para decisiones</span>

          <span>✔ Reducción de cartera sin seguimiento</span>

          <span>✔ Mejora en la eficiencia del recaudo</span>
        </div>
      </section>

      {/*  CTA  */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Controla tu cartera, mejora tu seguimiento y toma mejores decisiones
          </h2>

          <p className={styles.ctaText}>
            Obtén mayor visibilidad sobre tus cuentas pendientes y gestiona tu
            cartera con información organizada, trazabilidad y control.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20de%20cartera."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20de%20cartera."
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
