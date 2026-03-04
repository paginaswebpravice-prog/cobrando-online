"use client";

import styles from "./Contactanos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Contacto() {
  const phoneNumber = "573234372766";
  const whatsappMessage =
    "Hola, quiero información sobre recuperación de cartera.";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.header}>
        <h1>Hablemos</h1>
        <p>
          Estamos listos para ayudarte a recuperar tu cartera de manera ágil,
          profesional y estratégica.
        </p>
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
          <p>Escríbenos directamente y recibe respuesta inmediata.</p>
        </motion.a>

        <motion.a
          href="tel:+573234372766"
          className={styles.card}
          whileHover={{ y: -6 }}
        >
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <h3>Llámanos</h3>
          <p>Habla con un asesor y recibe orientación personalizada.</p>
        </motion.a>

        <motion.a
          href="mailto:info.pravice@gmail.com"
          className={styles.card}
          whileHover={{ y: -6 }}
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <h3>Correo electrónico</h3>
          <p>Envíanos tu caso y te responderemos lo antes posible.</p>
        </motion.a>
      </div>

      {/* UBICACIÓN */}
      <div className={styles.locationSection}>
        <h2>
          <FontAwesomeIcon icon={faLocationDot} /> Nuestra oficina
        </h2>

        <p>Calle 98 # 22 - 64 Of 716 · Bogotá</p>

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
