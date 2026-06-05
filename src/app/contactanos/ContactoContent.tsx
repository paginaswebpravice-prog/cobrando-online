// ContactoContent.tsx
"use client";

import styles from "./Contactanos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faComments,
  faClock,
  faBuilding,
  faFileInvoiceDollar,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ContactoContent() {
  const phoneNumber = "573234372766";

  const whatsappMessage =
    "Hola, quiero información sobre recuperación de cartera y cobro jurídico en Colombia.";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>
            Recuperación de cartera en Bogotá y toda Colombia
          </span>

          <h1>
            Contacta expertos en recuperación de cartera, cobro prejurídico y
            cobro jurídico en Colombia
          </h1>

          <p>
            En Cobrando Online ayudamos a empresas, clínicas, IPS, PYMES y
            negocios en Bogotá y toda Colombia a recuperar cartera vencida,
            reducir la mora y mejorar el flujo de caja mediante estrategias de
            cobranza profesional, gestión prejurídica y procesos jurídicos.
          </p>

          <p>
            Nuestro equipo analiza cada caso de manera estratégica para aumentar
            las probabilidades de recuperación sin afectar innecesariamente la
            relación comercial con tus clientes.
          </p>

          <div className={styles.heroButtons}>
            <a
              href={whatsappURL}
              target="_blank"
              className={styles.primaryButton}
            >
              Hablar por WhatsApp
            </a>

            <a href="tel:+573234372766" className={styles.secondaryButton}>
              Llamar ahora
            </a>
          </div>
        </motion.div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.featuresGrid}>
        <motion.div className={styles.featureCard} whileHover={{ y: -6 }}>
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            className={styles.featureIcon}
          />

          <h3>Recuperación de cartera empresarial</h3>

          <p>
            Gestionamos cartera vencida para empresas en Bogotá y Colombia con
            seguimiento estratégico y comunicación profesional.
          </p>
        </motion.div>

        <motion.div className={styles.featureCard} whileHover={{ y: -6 }}>
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className={styles.featureIcon}
          />

          <h3>Cobro prejurídico y jurídico</h3>

          <p>
            Escalamos procesos de cobranza cuando la gestión administrativa no
            genera resultados positivos.
          </p>
        </motion.div>

        <motion.div className={styles.featureCard} whileHover={{ y: -6 }}>
          <FontAwesomeIcon icon={faBuilding} className={styles.featureIcon} />

          <h3>Soluciones para empresas y sector salud</h3>

          <p>
            Trabajamos con PYMES, clínicas, IPS, empresas comerciales y
            organizaciones que necesitan mejorar su liquidez.
          </p>
        </motion.div>

        <motion.div className={styles.featureCard} whileHover={{ y: -6 }}>
          <FontAwesomeIcon icon={faClock} className={styles.featureIcon} />

          <h3>Respuesta rápida y acompañamiento</h3>

          <p>
            Analizamos tu caso rápidamente para ayudarte a tomar decisiones
            oportunas frente a clientes morosos.
          </p>
        </motion.div>
      </div>

      {/* OPCIONES DE CONTACTO */}
      <div className={styles.cardsContainer}>
        <motion.a
          href={whatsappURL}
          target="_blank"
          className={styles.card}
          whileHover={{ y: -6 }}
        >
          <FontAwesomeIcon icon={faComments} className={styles.icon} />

          <h3>WhatsApp</h3>

          <p>
            Escríbenos directamente para recibir información sobre recuperación
            de cartera en Colombia, acuerdos de pago y procesos de cobranza.
          </p>

          <span className={styles.contactData}>+57 323 437 2766</span>
        </motion.a>

        <motion.a
          href="tel:+573234372766"
          className={styles.card}
          whileHover={{ y: -6 }}
        >
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />

          <h3>Llámanos</h3>

          <p>
            Habla con un asesor especializado en cobro prejurídico y jurídico en
            Bogotá y recibe orientación personalizada para tu empresa.
          </p>

          <span className={styles.contactData}>+57 323 437 2766</span>
        </motion.a>

        <motion.a
          href="mailto:info.pravice@gmail.com"
          className={styles.card}
          whileHover={{ y: -6 }}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />

          <h3>Correo electrónico</h3>

          <p>
            Envíanos información sobre tu cartera vencida, facturas pendientes o
            procesos de recuperación y te responderemos lo antes posible.
          </p>

          <span className={styles.contactData}>info.pravice@gmail.com</span>
        </motion.a>
      </div>

      {/* TEXTO SEO */}
      <div className={styles.seoContent}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Expertos en recuperación de cartera y cobro jurídico en Bogotá,
            Colombia
          </h2>

          <p>
            La recuperación de cartera es uno de los principales desafíos
            financieros para empresas en Colombia. Los retrasos en pagos afectan
            directamente la liquidez, el flujo de caja y la estabilidad
            operativa de los negocios.
          </p>

          <p>
            En Cobrando Online apoyamos empresas de Bogotá y diferentes ciudades
            de Colombia en procesos de cobranza administrativa, prejurídica y
            jurídica. Nuestro enfoque busca recuperar la deuda de forma
            estratégica, profesional y documentada.
          </p>

          <p>
            También brindamos apoyo en acuerdos de pago, seguimiento de clientes
            morosos, recuperación de facturas vencidas, gestión de cartera de
            más de 360 días y procesos ejecutivos cuando la deuda requiere
            acciones legales.
          </p>

          <h2>
            Servicios de cobranza y recuperación de cartera para empresas en
            Colombia
          </h2>

          <ul className={styles.seoList}>
            <li>Recuperación de cartera empresarial.</li>
            <li>Cobro prejurídico en Bogotá y Colombia.</li>
            <li>Demanda ejecutiva por deuda.</li>
            <li>Recuperación de cartera para clínicas e IPS.</li>
            <li>Gestión de acuerdos de pago.</li>
            <li>Cobranza por WhatsApp y canales digitales.</li>
            <li>Reducción de mora empresarial.</li>
            <li>Seguimiento de facturas vencidas.</li>
            <li>Procesos jurídicos de recuperación.</li>
          </ul>

          <h2>¿Necesitas ayuda para recuperar cartera vencida en Colombia?</h2>

          <p>
            Si tu empresa presenta clientes morosos, facturas vencidas o
            dificultades para recuperar pagos pendientes, nuestro equipo puede
            ayudarte a diseñar una estrategia de cobranza efectiva y adaptada a
            tu caso.
          </p>

          <p>
            Contáctanos y recibe orientación sobre recuperación de cartera,
            cobro jurídico, acuerdos de pago y procesos de cobranza empresarial
            en Bogotá y toda Colombia.
          </p>
        </motion.div>
      </div>

      {/* UBICACIÓN */}
      <div className={styles.locationSection}>
        <h2>
          <FontAwesomeIcon icon={faLocationDot} /> Oficina en Bogotá, Colombia
        </h2>

        <p>Calle 98 # 22 - 64 Oficina 716 · Bogotá, Colombia</p>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
