"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecuperarCarteraContent() {
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
              Especialistas en recuperación de cartera para empresas en Colombia
            </span>

            <h1 className={styles.title}>
              Recuperación de cartera vencida en Colombia mediante cobro
              prejurídico y jurídico
            </h1>

            <p className={styles.description}>
              En <strong>Cobrando Online</strong> ayudamos a empresas, clínicas,
              IPS, proveedores y organizaciones de diferentes sectores a
              recuperar cartera vencida mediante estrategias de cobro
              administrativo, cobro prejurídico, negociación especializada y
              cobro jurídico cuando es necesario. Nuestro objetivo es aumentar
              el recaudo, reducir la mora, fortalecer el flujo de caja y
              minimizar el riesgo financiero mediante procesos de cobranza
              eficientes, documentados y adaptados a cada tipo de obligación.
            </p>

            <p className={styles.description}>
              Analizamos cada caso de manera individual para definir la mejor
              estrategia de recuperación, buscando resolver la deuda en el menor
              tiempo posible y priorizando soluciones que permitan alcanzar
              acuerdos de pago antes de acudir a procesos judiciales, siempre
              que las circunstancias lo permitan.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar mi cartera
              </a>
              <a href="#proceso" className={styles.secondary}>
                Ver proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUE LA RECUPERACION DE CARTERA ES CLAVE */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué la recuperación de cartera es clave para reducir la mora y
          proteger el flujo de caja?
        </h2>

        <p className={styles.text}>
          La recuperación de cartera es el proceso mediante el cual una empresa
          o persona logra recuperar dinero adeudado por clientes, EPS o
          terceros. En Colombia, especialmente en ciudades como Bogotá, la mora
          en pagos es uno de los principales problemas financieros para empresas
          y sector salud.
        </p>

        <div className={styles.highlightBox}>
          ✔ Recuperar cartera a tiempo mejora el flujo de caja, evita pérdidas y
          fortalece la estabilidad financiera.
        </div>
      </section>

      {/* CUÁNDO INICIAR LA RECUPERACIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Cuándo debería una empresa iniciar la recuperación de cartera
          vencida?
        </h2>

        <p className={styles.text}>
          Muchas empresas esperan varios meses antes de iniciar un proceso de
          recuperación de cartera, lo que disminuye considerablemente las
          probabilidades de recaudo. Entre más tiempo permanezca una obligación
          en mora, mayor será el riesgo de incobrabilidad y de afectar la
          liquidez del negocio.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>30 días de mora</h4>
            <p>
              Es recomendable iniciar seguimiento preventivo y contactar al
              cliente para conocer las razones del retraso.
            </p>
          </div>

          <div>
            <h4>60 a 90 días</h4>
            <p>
              Es el momento adecuado para implementar estrategias de cobro
              prejurídico, negociación y acuerdos de pago.
            </p>
          </div>

          <div>
            <h4>Más de 180 días</h4>
            <p>
              Dependiendo del caso, puede ser necesario iniciar un proceso
              jurídico para aumentar las posibilidades de recuperación.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className={styles.container}>
        <div className={styles.comparison}>
          <motion.div
            className={`${styles.compareBox} ${styles.bad}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h4>❌ Cobrar sin una estrategia profesional de recuperación</h4>
            <ul>
              <li>Falta de seguimiento a deudores</li>
              <li>Baja tasa de recuperación</li>
              <li>Pérdida de tiempo operativo</li>
              <li>Alto riesgo de incobrabilidad</li>
            </ul>
          </motion.div>

          <motion.div
            className={`${styles.compareBox} ${styles.good}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h4>✔ Recupera deudas con expertos en cobro y negociación</h4>
            <ul>
              <li>Estrategias jurídicas estructuradas</li>
              <li>Seguimiento constante</li>
              <li>Mayor recuperación efectiva</li>
              <li>Optimización del flujo de caja</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TIPOS DE CARTERA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué tipo de cartera vencida ayudamos a recuperar en Colombia?
        </h2>

        <p className={styles.text}>
          Trabajamos diferentes tipos de cartera vencida adaptando la estrategia
          a cada caso.
        </p>

        <div className={styles.grid}>
          {[
            {
              title: "Recuperación de cartera comercial",
              text: "Facturas, contratos, servicios y obligaciones empresariales.",
            },
            {
              title: "Recuperación de cartera civil",
              text: "Préstamos entre personas, acuerdos incumplidos.",
            },
            {
              title: "Recuperación de cartera para EPS, IPS y sector salud",
              text: "EPS, clínicas, hospitales y ADRES.",
            },
            {
              title: "Recuperación de cartera de difícil recaudo",
              text: "Deudas antiguas o con alto nivel de mora.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Documentos que facilitan la recuperación de cartera en Colombia
        </h2>

        <p className={styles.text}>
          Contar con la documentación adecuada permite desarrollar una
          estrategia de cobranza más eficiente y, cuando sea necesario, iniciar
          acciones jurídicas con mayor respaldo.
        </p>

        <div className={styles.grid}>
          {[
            {
              title: "Facturas electrónicas",
              text: "Permiten acreditar la existencia de la obligación económica.",
            },
            {
              title: "Contratos",
              text: "Definen las condiciones pactadas entre las partes.",
            },
            {
              title: "Pagarés y títulos valores",
              text: "Facilitan el cobro cuando cumplen los requisitos legales.",
            },
            {
              title: "Correos y soportes",
              text: "Demuestran negociaciones, aceptaciones y compromisos de pago.",
            },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Cómo recuperamos la cartera vencida de tu empresa? Conoce nuestro
          proceso
        </h2>

        <div className={styles.infoGrid}>
          {[
            "Diagnóstico y análisis de la deuda",
            "Validación documental",
            "Estrategia de cobro personalizada",
            "Gestión de negociación con el deudor",
            "Cobro prejurídico estructurado",
            "Proceso judicial si aplica",
          ].map((step, i) => (
            <motion.div key={i}>
              <h4>✔ Etapa {i + 1}</h4>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          ✔ Más del 70% de las deudas pueden recuperarse sin necesidad de llegar
          a un proceso judicial cuando se aplican estrategias correctas.
        </div>
      </section>

      {/* COMPARACION */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Diferencias entre el cobro administrativo, prejurídico y jurídico
        </h2>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>Cobro administrativo</h4>

            <ul>
              <li>Recordatorios de pago.</li>
              <li>Seguimiento comercial.</li>
              <li>Gestión preventiva.</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>Cobro prejurídico</h4>

            <ul>
              <li>Negociaciones formales.</li>
              <li>Acuerdos de pago.</li>
              <li>Requerimientos escritos.</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>Cobro jurídico</h4>

            <ul>
              <li>Proceso judicial.</li>
              <li>Demanda cuando aplica.</li>
              <li>Ejecución de títulos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTRATAR */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué contratar una empresa especializada en recuperación de
          cartera?
        </h2>

        <p className={styles.text}>
          Delegar la recuperación de cartera a un equipo especializado permite
          que tu empresa continúe enfocada en su operación mientras expertos
          gestionan la negociación con los deudores, implementan estrategias de
          cobro y evalúan la viabilidad de acciones jurídicas cuando son
          necesarias.
        </p>

        <div className={styles.highlightBox}>
          ✔ Una estrategia profesional puede incrementar el porcentaje de
          recaudo y disminuir el tiempo de recuperación de las obligaciones
          vencidas.
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Ventajas de confiar la recuperación de cartera a especialistas en
          cobranza
        </h2>

        <div className={styles.benefits}>
          <span>✔ Aumento del recaudo</span>
          <span>✔ Reducción de cartera vencida</span>
          <span>✔ Mejora del flujo de caja</span>
          <span>✔ Ahorro de tiempo</span>
          <span>✔ Seguridad jurídica</span>
          <span>✔ Procesos estructurados</span>
        </div>
      </section>

      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Empresas y sectores para los que recuperamos cartera en Colombia
        </h2>

        <div className={styles.grid}>
          {[
            "Empresas comerciales",
            "Constructoras",
            "Clínicas e IPS",
            "Distribuidores",
            "Empresas de tecnología",
            "Empresas de transporte",
            "Industria manufacturera",
            "Prestadores de servicios",
          ].map((sector, index) => (
            <div key={index} className={styles.card}>
              <h3>{sector}</h3>

              <p>
                Diseñamos estrategias de recuperación de cartera adaptadas a las
                características y necesidades de cada sector económico.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Resolvemos las preguntas más frecuentes sobre recuperación de cartera
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Cómo recuperar una deuda en Colombia?</h4>
            <p>
              A través de cobro prejurídico, negociación directa o proceso
              judicial según el caso.
            </p>
          </div>

          <div>
            <h4>¿Cuánto tarda recuperar cartera?</h4>
            <p>
              Puede tomar desde semanas hasta meses dependiendo del tipo de
              deuda.
            </p>
          </div>

          <div>
            <h4>¿Es necesario demandar?</h4>
            <p>No siempre. Muchas deudas se recuperan sin proceso judicial.</p>
          </div>
          <div>
            <h4>¿Qué documentos necesito para recuperar una deuda?</h4>

            <p>
              Facturas, contratos, órdenes de compra, pagarés, correos
              electrónicos, actas o cualquier documento que permita demostrar la
              existencia de la obligación.
            </p>
          </div>

          <div>
            <h4>¿Se pueden recuperar deudas antiguas?</h4>

            <p>
              Sí. Cada caso debe analizarse para determinar si la obligación aún
              puede reclamarse y cuál es la estrategia más conveniente.
            </p>
          </div>

          <div>
            <h4>¿Atienden empresas en todo Colombia?</h4>

            <p>
              Sí. Prestamos servicios de recuperación de cartera para empresas
              ubicadas en Bogotá y en las principales ciudades del país.
            </p>
          </div>

          <div>
            <h4>¿Es obligatorio iniciar un proceso judicial?</h4>

            <p>
              No. En muchos casos es posible recuperar la cartera mediante
              negociación y cobro prejurídico sin necesidad de acudir a un juez.
            </p>
          </div>

          <div>
            <h4>¿Qué tipo de empresas pueden contratar el servicio?</h4>

            <p>
              Trabajamos con PYMES, grandes empresas, clínicas, IPS,
              constructoras, distribuidores, empresas de servicios y
              organizaciones de diferentes sectores económicos.
            </p>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué elegir Cobrando Online para recuperar la cartera vencida de
          tu empresa?
        </h2>

        <p className={styles.text}>
          En <strong>Cobrando Online</strong> combinamos estrategias de
          cobranza, negociación y acompañamiento jurídico para ayudar a empresas
          de diferentes sectores económicos a recuperar sus cuentas por cobrar
          de manera eficiente. Nuestro objetivo no es únicamente recuperar el
          dinero adeudado, sino hacerlo mediante procesos organizados,
          documentados y orientados a preservar, cuando sea posible, la relación
          comercial con el cliente.
        </p>

        <div className={styles.grid}>
          {[
            {
              title: "Estrategias personalizadas",
              text: "Analizamos cada caso para definir la estrategia de recuperación de cartera más adecuada según el tipo de deuda, la documentación disponible y el perfil del deudor.",
            },
            {
              title: "Cobro prejurídico especializado",
              text: "Implementamos procesos de negociación y seguimiento profesional para aumentar las probabilidades de recaudo sin acudir inmediatamente a un proceso judicial.",
            },
            {
              title: "Acompañamiento jurídico",
              text: "Cuando la negociación no genera resultados, evaluamos la viabilidad de iniciar acciones jurídicas para proteger los intereses de nuestros clientes.",
            },
            {
              title: "Seguimiento permanente",
              text: "Cada proceso cuenta con monitoreo continuo para mantener informada a la empresa sobre el avance de la recuperación de su cartera.",
            },
            {
              title: "Cobertura nacional",
              text: "Prestamos servicios de recuperación de cartera para empresas ubicadas en Bogotá y en las principales ciudades de Colombia.",
            },
            {
              title: "Enfoque empresarial",
              text: "Trabajamos con PYMES, grandes empresas, clínicas, IPS, constructoras, distribuidores y organizaciones que necesitan mejorar su flujo de caja.",
            },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSECUENCIAS DE NO RECUPERAR LA CARTERA VENCIDA A TIEMPO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Consecuencias de no recuperar la cartera vencida a tiempo
        </h2>

        <p className={styles.text}>
          Retrasar la recuperación de cartera puede afectar significativamente
          la estabilidad financiera de cualquier empresa. A medida que aumenta
          el tiempo de mora, disminuyen las probabilidades de recaudo y se
          incrementan los costos asociados al proceso de cobranza.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>Empresa que no gestiona su cartera</h4>

            <ul>
              <li>Disminución del flujo de caja.</li>
              <li>Mayor riesgo de incobrabilidad.</li>
              <li>Incremento de cartera castigada.</li>
              <li>Pérdida de liquidez.</li>
              <li>Menor capacidad de inversión.</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>Empresa con recuperación de cartera profesional</h4>

            <ul>
              <li>Mayor recaudo.</li>
              <li>Mejor liquidez.</li>
              <li>Reducción de la mora.</li>
              <li>Mejor control financiero.</li>
              <li>Mayor estabilidad empresarial.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Solicita una estrategia personalizada para recuperar tu cartera
            vencida
          </h2>

          <p className={styles.ctaText}>
            No dejes que las deudas sigan afectando tu negocio. Te ayudamos a
            recuperar cartera en Bogotá y toda Colombia.
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
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
