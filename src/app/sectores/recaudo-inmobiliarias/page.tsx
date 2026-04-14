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
          content="Recupera cartera vencida en PYMES en Colombia. Reduce la mora, mejora el flujo de caja y optimiza tu gestión de cobro con estrategias efectivas."
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
                Recuperación de cartera para pequeñas y medianas empresas
              </h1>

              <p className={styles.description}>
                Las PYMES en Colombia dependen directamente de su flujo de caja
                para operar. Sin embargo, los retrasos en pagos, la falta de
                seguimiento y la acumulación de cartera vencida pueden poner en
                riesgo la estabilidad del negocio. Implementar una estrategia
                profesional de recaudo permite recuperar dinero, mejorar la
                liquidez y asegurar el crecimiento empresarial.
              </p>

              <div className={styles.actions}>
                <a href="#contacto" className={styles.primary}>
                  Recuperar mi cartera
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTEXTO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            La realidad financiera de las PYMES en Colombia
          </h2>

          <p className={styles.text}>
            A diferencia de las grandes empresas, las PYMES tienen menor margen
            de error financiero. Cada factura sin pagar impacta directamente su
            operación, ya que los ingresos no percibidos afectan la capacidad de
            cubrir gastos básicos, invertir en crecimiento y sostener la
            operación diaria.
          </p>

          <div className={styles.highlightBox}>
            ✔ En muchas PYMES, más del 30% de la cartera puede estar en mora,
            afectando gravemente el flujo de caja y la estabilidad del negocio.
          </div>
        </section>

        {/* PROBLEMAS */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Problemas más comunes en la gestión de cartera
          </h2>

          <p className={styles.text}>
            La mayoría de PYMES no cuenta con procesos estructurados de
            cobranza, lo que genera acumulación de deudas y pérdida de ingresos.
          </p>

          <div className={styles.grid}>
            {[
              "Clientes que se retrasan constantemente en sus pagos, afectando la liquidez mensual.",
              "Falta de seguimiento organizado a facturas y cuentas por cobrar.",
              "Procesos de cobro informales sin estrategia definida.",
              "Acumulación de cartera vencida difícil de recuperar.",
              "Dependencia de pocos clientes con alto riesgo de mora.",
              "Desgaste administrativo intentando cobrar sin resultados.",
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
            ⚠ Ignorar la cartera vencida puede llevar a problemas de liquidez,
            endeudamiento e incluso al cierre del negocio.
          </div>
        </section>

        {/* IMPACTO */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo afecta la cartera vencida a una PYME
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Problemas de liquidez</h4>
              <p>
                La falta de ingresos limita la capacidad de pagar proveedores,
                nómina y costos operativos.
              </p>
            </div>

            <div>
              <h4>✔ Frenos al crecimiento</h4>
              <p>
                Sin flujo de caja, la empresa no puede invertir en expansión,
                marketing o mejora de servicios.
              </p>
            </div>

            <div>
              <h4>✔ Estrés financiero</h4>
              <p>
                Los dueños terminan usando recursos propios o endeudándose para
                sostener la operación.
              </p>
            </div>

            <div>
              <h4>✔ Pérdida de oportunidades</h4>
              <p>
                Se desaprovechan oportunidades de negocio por falta de capital
                disponible.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Una PYME no falla por falta de ventas, sino por falta de recaudo.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            Cómo ayudamos a las PYMES a recuperar cartera
          </h2>

          <p className={styles.text}>
            Implementamos un modelo estructurado de cobranza adaptado a la
            realidad de las pequeñas y medianas empresas en Colombia.
          </p>

          <div className={styles.grid}>
            {[
              "Diagnóstico completo de la cartera y clasificación de deudores.",
              "Estrategias de cobro personalizadas según tipo de cliente.",
              "Seguimiento constante con recordatorios y contacto directo.",
              "Negociación profesional para aumentar la probabilidad de pago.",
              "Uso de herramientas digitales como WhatsApp y links de pago.",
              "Escalamiento a procesos legales cuando es necesario.",
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

        {/* DIFERENCIAL */}
        <section className={styles.container}>
          <h2 className={styles.subtitle}>
            ¿Por qué tercerizar el recaudo en tu PYME?
          </h2>

          <div className={styles.text}>
            Delegar la recuperación de cartera permite a las PYMES enfocarse en
            su actividad principal mientras expertos gestionan el cobro de forma
            eficiente.
          </div>

          <div className={styles.highlightBox}>
            ✔ Más recuperación, menos desgaste interno y mejores resultados
            financieros.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Mejora el flujo de caja de tu PYME hoy
            </h2>

            <p className={styles.ctaText}>
              No dejes que la cartera vencida limite el crecimiento de tu
              negocio. Implementa una estrategia profesional y empieza a
              recuperar tu dinero.
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
