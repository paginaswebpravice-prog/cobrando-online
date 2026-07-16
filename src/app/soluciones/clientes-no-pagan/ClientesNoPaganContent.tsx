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
              Clientes morosos • Recuperación de cartera empresarial
            </span>

            <h1 className={styles.title}>
              ¿Tus clientes no pagan las facturas? Recupera tu dinero con
              cobranza profesional en Colombia
            </h1>

            <p className={styles.description}>
              Si tienes clientes que incumplen los plazos de pago, acumulan
              facturas vencidas o simplemente dejaron de responder, en{" "}
              <strong>Cobrando Online</strong> diseñamos estrategias de
              recuperación de cartera para empresas en Colombia. Combinamos
              negociación, cobro prejurídico y acciones jurídicas cuando son
              necesarias para aumentar las probabilidades de recuperar tu
              dinero.
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
          ¿Por qué tus clientes no pagan sus facturas y cómo recuperar ese
          dinero?
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
          Cómo los clientes morosos afectan el flujo de caja, la liquidez y la
          rentabilidad de tu empresa
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
            <h4>
              ❌ Intentar cobrar clientes morosos sin una estrategia profesional
            </h4>
            <ul>
              <li>Clientes evaden el pago</li>
              <li>No hay seguimiento</li>
              <li>Procesos desorganizados</li>
              <li>Baja recuperación</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>
              ✔ Recupera facturas vencidas con una estrategia profesional de
              cobranza
            </h4>
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
          Cómo cobrar a un cliente que no paga en Colombia: proceso paso a paso
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
          Tipos de clientes morosos y la mejor estrategia para recuperar cada
          deuda
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
          Beneficios de actuar rápido cuando un cliente deja de pagar
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

      {/* ¿POR QUÉ LOS CLIENTES DEJAN DE PAGAR? */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué algunos clientes dejan de pagar y cómo recuperar la deuda
          antes de que sea demasiado tarde?
        </h2>

        <p className={styles.text}>
          Existen diferentes razones por las que un cliente puede incumplir el
          pago de una factura o una obligación. Algunas corresponden a problemas
          financieros, otras a diferencias comerciales y, en muchos casos,
          simplemente a una falta de seguimiento por parte del acreedor.
        </p>

        <p className={styles.text}>
          Mientras más tiempo permanezca una deuda sin gestión, menores suelen
          ser las probabilidades de recuperación. Por eso es recomendable
          iniciar una estrategia de cobranza profesional desde las primeras
          etapas de mora, documentando cada comunicación y evaluando la mejor
          alternativa para cada deudor.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Problemas de liquidez</h3>
            <p>
              Algunos clientes atraviesan dificultades financieras temporales y
              pueden cumplir mediante acuerdos de pago estructurados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento voluntario</h3>
            <p>
              Existen deudores que retrasan deliberadamente el pago cuando no
              existe una gestión profesional de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              Diferencias sobre facturación, contratos o entregas pueden
              retrasar el pago si no se manejan oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de seguimiento</h3>
            <p>
              Muchas empresas permiten que la cartera envejezca simplemente
              porque no cuentan con un proceso de cobranza definido.
            </p>
          </div>
        </div>
      </section>

      {/* CUÁNDO BUSCAR AYUDA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Cuándo es recomendable buscar apoyo profesional para cobrar una
          deuda?
        </h2>

        <p className={styles.text}>
          Muchas empresas esperan varios meses antes de iniciar acciones para
          recuperar su cartera. Sin embargo, cuanto antes se implemente una
          estrategia de cobranza, mayores suelen ser las posibilidades de
          obtener el pago.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Facturas vencidas</h4>
            <p>
              Cuando el cliente supera el plazo de pago acordado sin ofrecer una
              solución clara.
            </p>
          </div>

          <div>
            <h4>✔ Incumplimientos repetitivos</h4>
            <p>
              Si el cliente promete pagar constantemente pero nunca cumple los
              compromisos adquiridos.
            </p>
          </div>

          <div>
            <h4>✔ Falta de comunicación</h4>
            <p>
              Cuando deja de responder llamadas, correos o mensajes relacionados
              con la deuda.
            </p>
          </div>

          <div>
            <h4>✔ Alto impacto financiero</h4>
            <p>
              Cuando la deuda comienza a afectar la liquidez y el funcionamiento
              de la empresa.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué ventajas tiene recuperar la cartera antes de iniciar una demanda?
        </h2>

        <p className={styles.text}>
          En muchos casos es posible obtener el pago mediante una estrategia de
          cobro organizada antes de acudir a un proceso judicial. Esto puede
          representar un ahorro importante de tiempo y permitir conservar la
          relación comercial con determinados clientes.
        </p>

        <div className={styles.benefits}>
          <span>✔ Mayor probabilidad de recaudo.</span>
          <span>✔ Menor tiempo de recuperación.</span>
          <span>✔ Disminución del riesgo financiero.</span>
          <span>
            ✔ Conservación de relaciones comerciales cuando es posible.
          </span>
          <span>✔ Documentación organizada para futuras acciones.</span>
          <span>✔ Mejor control de la cartera empresarial.</span>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            No dejes que las facturas vencidas sigan afectando tu empresa:
            recupera tu dinero hoy
          </h2>

          <p className={styles.ctaText}>
            Recupera tu cartera en Colombia con un enfoque profesional,
            estratégico y legal.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
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
