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
            <span className={styles.badge}>
              Especialistas en recaudo para instituciones educativas
            </span>

            <h1 className={styles.title}>
              Recupera pensiones escolares atrasadas, reduce la mora y mejora el
              flujo de caja de tu colegio
            </h1>

            <p className={styles.description}>
              Ayudamos a colegios privados, jardines infantiles e instituciones
              educativas en Colombia a recuperar cartera vencida, reducir la
              mora en pensiones escolares y mejorar el recaudo mediante
              estrategias preventivas, seguimiento especializado, negociación de
              acuerdos de pago y gestión profesional de cobranza.
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
          ¿Por qué aumenta la mora en pensiones escolares y cómo afecta las
          finanzas de un colegio?
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

      {/* CAUSAS DE LA MORA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué aumenta la cartera vencida en los colegios privados de
          Colombia?
        </h2>

        <p className={styles.text}>
          La mayoría de instituciones educativas no presentan problemas por
          falta de estudiantes, sino porque una parte importante de las
          pensiones no se paga oportunamente. Cuando no existe una política
          clara de recaudo, la mora se acumula mes tras mes hasta afectar la
          estabilidad financiera del colegio.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Falta de seguimiento oportuno</h4>
            <p>
              Muchos padres solo reciben recordatorios cuando la deuda ya es muy
              alta.
            </p>
          </div>

          <div>
            <h4>✔ Procesos manuales</h4>
            <p>
              La gestión mediante llamadas y hojas de cálculo reduce la
              eficiencia.
            </p>
          </div>

          <div>
            <h4>✔ Ausencia de políticas de cobro</h4>
            <p>No existen protocolos definidos para cada etapa de la mora.</p>
          </div>

          <div>
            <h4>✔ Seguimiento tardío</h4>
            <p>
              Mientras más tiempo pasa, menor es la probabilidad de
              recuperación.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta el flujo de caja, la operación y el
          crecimiento de tu institución educativa
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

      {/* CONSECUENCIAS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Consecuencias de no controlar la cartera vencida en un colegio
        </h2>

        <p className={styles.text}>
          La falta de recaudo oportuno genera efectos que impactan directamente
          la operación académica y financiera de la institución.
        </p>

        <div className={styles.grid}>
          {[
            "Retrasos en el pago de nómina",
            "Problemas para pagar proveedores",
            "Disminución del flujo de caja",
            "Limitación para invertir en infraestructura",
            "Aumento de costos financieros",
            "Mayor riesgo de incobrabilidad",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.warningBox}>
          Mientras más antigua es la deuda, más difícil resulta recuperarla.
        </div>
      </section>

      {/* ETAPAS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Etapas para recuperar la cartera vencida en colegios de manera
          efectiva
        </h2>

        <p className={styles.text}>
          Una estrategia profesional de recuperación de cartera combina acciones
          preventivas, persuasivas y jurídicas para aumentar el recaudo sin
          afectar la imagen institucional.
        </p>

        <div className={styles.grid}>
          {[
            "Prevención antes del vencimiento",
            "Recordatorios automáticos",
            "Seguimiento telefónico",
            "Negociación de acuerdos de pago",
            "Cobranza prejurídica",
            "Proceso jurídico cuando sea necesario",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar pensiones atrasadas sin deteriorar la relación con los
          padres de familia
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
          Nuestro proceso para recuperar cartera educativa de forma organizada y
          efectiva
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

      {/* BENEFICIOS EMPRESARIALES */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué obtiene un colegio al mejorar su proceso de recaudo?
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Mayor liquidez</h4>
            <p>Disponibilidad de recursos para la operación diaria.</p>
          </div>

          <div>
            <h4>✔ Mejor planeación financiera</h4>
            <p>Ingresos más predecibles durante todo el año escolar.</p>
          </div>

          <div>
            <h4>✔ Reducción de cartera morosa</h4>
            <p>Menor acumulación de deudas difíciles de recuperar.</p>
          </div>

          <div>
            <h4>✔ Menor carga administrativa</h4>
            <p>El personal puede concentrarse en actividades académicas.</p>
          </div>
        </div>
      </section>

      {/* KPIS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Indicadores que permiten medir la efectividad del recaudo en colegios
        </h2>

        <div className={styles.grid}>
          {[
            "Porcentaje de recaudo mensual",
            "Índice de mora",
            "Antigüedad de cartera",
            "Tiempo promedio de recuperación",
            "Valor recuperado cada mes",
            "Número de acuerdos de pago cumplidos",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar una estrategia profesional de recaudo para
          colegios
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
          Preguntas frecuentes sobre cobranza y recuperación de pensiones
          escolares en Colombia
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

      {/* DIFERENCIAL */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué elegir a Cobrando Online para recuperar la cartera de tu
          colegio?
        </h2>

        <p className={styles.text}>
          Nuestro equipo combina experiencia en gestión de cartera, negociación,
          automatización y procesos jurídicos para ayudar a instituciones
          educativas a recuperar recursos sin afectar la relación con
          estudiantes y padres de familia.
        </p>

        <div className={styles.grid}>
          {[
            "Especialistas en recuperación de cartera",
            "Cobranza prejurídica y jurídica",
            "Seguimiento permanente",
            "Mayor porcentaje de recuperación",
            "Procesos personalizados",
            "Cobertura en toda Colombia",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Recuperar cartera no consiste únicamente en cobrar; implica
          implementar una estrategia que fortalezca la estabilidad financiera
          del colegio y reduzca la morosidad de forma sostenible.
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera la cartera vencida de tu colegio y mejora la estabilidad
            financiera desde hoy
          </h2>

          <p className={styles.ctaText}>
            Nuestro equipo ayuda a instituciones educativas en Colombia a
            recuperar pensiones escolares vencidas mediante una gestión
            profesional, respetuosa y efectiva que mejora el recaudo sin afectar
            la relación con los padres de familia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20colegios%20en%20Colombia."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20hablar%20por%20WhatsApp%20sobre%20la%20recuperaci%C3%B3n%20de%20cartera%20en%20mi%20colegio."
              target="_blank"
              className={styles.secondary}
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
