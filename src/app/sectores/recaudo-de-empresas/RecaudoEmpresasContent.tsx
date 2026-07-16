"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoEmpresasContent() {
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
              Gestión de recaudo y recuperación de cartera para empresas en
              Colombia
            </span>

            <h1 className={styles.title}>
              Recuperación de cartera para empresas en Colombia: aumenta el
              recaudo, reduce la mora y mejora el flujo de caja
            </h1>

            <p className={styles.description}>
              Ayudamos a empresas de todos los sectores a recuperar cartera
              vencida, optimizar sus procesos de cobranza, disminuir los días de
              mora y mejorar el flujo de caja mediante estrategias preventivas,
              prejurídicas y de seguimiento continuo, sin afectar la relación
              comercial con sus clientes.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Solicitar diagnóstico
              </a>

              <a href="#proceso" className={styles.secondary}>
                Conocer el proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  POR QUE LA CARTERA VENCIDA SIGUE CRECIENDO EN VARIAS EMPRESAS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué la recuperación de cartera es uno de los mayores desafíos
          para las empresas en Colombia?
        </h2>

        <p className={styles.text}>
          Muchas empresas venden constantemente y generan nuevos clientes, pero
          una parte importante de esas ventas nunca se convierte en dinero
          disponible. Las facturas vencidas, los pagos fuera de plazo y la falta
          de seguimiento provocan problemas de liquidez que afectan la operación
          diaria, la capacidad de inversión y el crecimiento del negocio.
        </p>

        <p className={styles.text}>
          Implementar un proceso profesional de recuperación de cartera permite
          acelerar el recaudo, disminuir la mora y convertir las cuentas por
          cobrar en flujo de caja real para la empresa.
        </p>

        <div className={styles.highlightBox}>
          ✔ Una buena gestión de cartera no solo recupera dinero; también
          fortalece la estabilidad financiera y reduce el riesgo de
          incobrabilidad.
        </div>
      </section>

      {/*  PROBLEMAS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Señales de que tu empresa necesita fortalecer su proceso de
          recuperación de cartera
        </h2>

        <p className={styles.text}>
          Si tu empresa experimenta alguno de estos problemas, es posible que la
          gestión de cobranza necesite una estrategia más estructurada y
          enfocada en resultados.
        </p>

        <div className={styles.grid}>
          {[
            "Clientes con pagos constantemente vencidos",
            "Incremento mensual de la cartera morosa",
            "Bajo porcentaje de recaudo efectivo",
            "Seguimiento manual y desorganizado",
            "Falta de indicadores para controlar la cartera",
            "Pérdida de liquidez por cuentas sin cobrar",
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
      </section>

      {/*  EMPRESAS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué empresas pueden beneficiarse de un servicio profesional de
          recuperación de cartera?
        </h2>

        <p className={styles.text}>
          Cualquier empresa que venda productos o servicios a crédito puede
          enfrentar problemas de mora. Sin importar el tamaño del negocio, una
          gestión de cartera eficiente permite mejorar el recaudo, fortalecer el
          flujo de caja y disminuir el riesgo financiero sin afectar la relación
          con los clientes.
        </p>

        <div className={styles.grid}>
          {[
            "Empresas de servicios",
            "Empresas de tecnología (SaaS)",
            "Constructoras",
            "Distribuidores mayoristas",
            "Empresas de transporte",
            "Empresas industriales",
            "Empresas de salud",
            "Empresas de telecomunicaciones",
            "Empresas de seguridad privada",
            "Empresas de logística",
            "Empresas de outsourcing",
            "Empresas del sector financiero",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Una estrategia de cobranza profesional puede adaptarse a cualquier
          sector económico y al volumen de cartera de cada empresa.
        </div>
      </section>

      {/*  IMPACTO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta la rentabilidad y el crecimiento de una
          empresa
        </h2>

        <p className={styles.text}>
          Una cartera vencida elevada no solo representa dinero pendiente de
          cobro. También genera efectos negativos sobre la liquidez, la
          operación y la capacidad de crecimiento del negocio.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Menor flujo de caja</h4>
            <p>Reduce la disponibilidad de recursos para operar.</p>
          </div>

          <div>
            <h4>✔ Mayor riesgo financiero</h4>
            <p>Incrementa la incertidumbre sobre los ingresos.</p>
          </div>

          <div>
            <h4>✔ Incremento del DSO</h4>
            <p>Los clientes tardan cada vez más en pagar.</p>
          </div>

          <div>
            <h4>✔ Menor capacidad de crecimiento</h4>
            <p>Se reducen las posibilidades de inversión.</p>
          </div>
        </div>

        <div className={styles.warningBox}>
          Una empresa puede vender mucho y aun así enfrentar problemas
          financieros si no logra recuperar su cartera oportunamente.
        </div>
      </section>

      {/*  CAUSAS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Principales causas por las que aumenta la cartera vencida en las
          empresas
        </h2>

        <p className={styles.text}>
          La mayoría de los problemas de cartera no aparecen de un momento a
          otro. Generalmente son consecuencia de procesos internos que permiten
          que las facturas vencidas se acumulen durante meses hasta afectar la
          liquidez del negocio.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Falta de seguimiento</h4>
            <p>
              Muchos clientes dejan de pagar simplemente porque no reciben un
              control permanente de sus obligaciones.
            </p>
          </div>

          <div>
            <h4>✔ Políticas de crédito débiles</h4>
            <p>
              Otorgar crédito sin evaluar el riesgo incrementa considerablemente
              la probabilidad de mora.
            </p>
          </div>

          <div>
            <h4>✔ Procesos manuales</h4>
            <p>
              La ausencia de automatización genera olvidos, retrasos y poca
              trazabilidad.
            </p>
          </div>

          <div>
            <h4>✔ Gestión tardía</h4>
            <p>
              Esperar varios meses para iniciar la cobranza disminuye las
              posibilidades de recuperación.
            </p>
          </div>
        </div>
      </section>

      {/*  COMPARATIVO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Diferencia entre gestionar la cartera internamente y contar con un
          servicio especializado de recaudo
        </h2>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Cobranza tradicional</h4>

            <ul>
              <li>Seguimiento esporádico</li>
              <li>Procesos manuales</li>
              <li>Bajo porcentaje de recaudo</li>
              <li>Poca trazabilidad</li>
              <li>Mayor crecimiento de la mora</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Gestión profesional de recaudo</h4>

            <ul>
              <li>Seguimiento permanente</li>
              <li>Indicadores de desempeño</li>
              <li>Mayor recuperación de cartera</li>
              <li>Procesos estructurados</li>
              <li>Mejor flujo de caja</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  COMPARATIVO  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Diferencia entre gestionar la cartera internamente y contar con una
          estrategia profesional de cobranza
        </h2>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>❌ Gestión tradicional</h4>

            <ul>
              <li>Cobros esporádicos</li>
              <li>Clientes sin seguimiento</li>
              <li>Poca recuperación</li>
              <li>Información dispersa</li>
              <li>Mayor cartera vencida</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>✔ Gestión profesional</h4>

            <ul>
              <li>Seguimiento permanente</li>
              <li>Control de indicadores</li>
              <li>Mayor recaudo</li>
              <li>Procesos organizados</li>
              <li>Mejor flujo de caja</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  SOLUCIÓN  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Estrategias para recuperar cartera vencida y aumentar el recaudo de tu
          empresa
        </h2>

        <p className={styles.text}>
          Nuestro proceso combina tecnología, seguimiento comercial y
          estrategias de cobranza para acelerar el recaudo y disminuir el riesgo
          financiero.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Cobranza preventiva</h4>
            <p>Recordatorios antes del vencimiento.</p>
          </div>

          <div>
            <h4>✔ Gestión prejurídica</h4>
            <p>Negociación profesional con cada cliente.</p>
          </div>

          <div>
            <h4>✔ Seguimiento permanente</h4>
            <p>Control continuo hasta obtener el pago.</p>
          </div>

          <div>
            <h4>✔ Escalamiento jurídico</h4>
            <p>Cuando la recuperación extrajudicial no es suficiente.</p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          ✔ Recuperamos cartera mientras tu empresa se concentra en vender y
          crecer.
        </div>
      </section>

      {/*  PROCESO  */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperamos la cartera vencida de tu empresa paso a paso
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Diagnóstico</h4>
            <p>Análisis de cartera.</p>
          </div>

          <div>
            <h4>✔ Estrategia</h4>
            <p>Definición del plan de cobro.</p>
          </div>

          <div>
            <h4>✔ Gestión</h4>
            <p>Contacto y negociación.</p>
          </div>

          <div>
            <h4>✔ Seguimiento</h4>
            <p>Control hasta el pago.</p>
          </div>
        </div>
      </section>

      {/*  KPIS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Indicadores que permiten medir la eficiencia de la recuperación de
          cartera
        </h2>

        <p className={styles.text}>
          Una estrategia de cobranza debe medirse constantemente para
          identificar oportunidades de mejora y aumentar el porcentaje de
          recaudo.
        </p>

        <div className={styles.grid}>
          {[
            "DSO (Días de cartera)",
            "Porcentaje de recaudo",
            "Rotación de cartera",
            "Antigüedad de saldos",
            "Nivel de recuperación",
            "Índice de mora",
            "Valor recuperado mensual",
            "Cumplimiento de acuerdos de pago",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Medir los resultados permite optimizar continuamente el proceso de
          cobranza y aumentar la recuperación de cartera.
        </div>
      </section>

      {/*  BENEFICIOS  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de recuperar cartera vencida con una gestión profesional
        </h2>

        <div className={styles.benefits}>
          <span>✔ Mayor recaudo</span>
          <span>✔ Mejor flujo de caja</span>
          <span>✔ Menor mora</span>
          <span>✔ Control financiero</span>
          <span>✔ Seguridad jurídica</span>
        </div>
      </section>

      {/*  DIFERENCIAL  */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué elegir Cobrando Online para recuperar la cartera de tu
          empresa?
        </h2>

        <p className={styles.text}>
          Nuestro enfoque combina experiencia en gestión de cartera, procesos de
          cobranza estructurados y herramientas tecnológicas que permiten
          aumentar el recaudo sin afectar la relación comercial con los
          clientes.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Estrategias personalizadas</h4>
            <p>
              Diseñamos un proceso de cobranza acorde con el sector y las
              necesidades de cada empresa.
            </p>
          </div>

          <div>
            <h4>✔ Mayor recuperación</h4>
            <p>
              Priorizamos acciones que incrementan las probabilidades de pago en
              el menor tiempo posible.
            </p>
          </div>

          <div>
            <h4>✔ Seguimiento permanente</h4>
            <p>
              Monitoreamos cada caso para mantener un control continuo sobre la
              evolución de la cartera.
            </p>
          </div>

          <div>
            <h4>✔ Información clara</h4>
            <p>
              Obtén visibilidad sobre indicadores, resultados y estado de cada
              proceso de recuperación.
            </p>
          </div>
        </div>
      </section>

      {/*  CTA  */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Empieza hoy a recuperar cartera y mejorar la liquidez de tu empresa
          </h2>

          <p className={styles.ctaText}>
            Implementa una estrategia profesional de cobranza para mejorar tu
            flujo de caja, reducir la mora y convertir tu cartera vencida en
            ingresos reales y constantes.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20mi%20empresa%20en%20Colombia."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría ahora
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20hablar%20por%20WhatsApp%20sobre%20recuperaci%C3%B3n%20de%20cartera%20para%20mi%20empresa."
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
