"use client";

import styles from "./styles/MiddleHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open("/proceso", "_blank");
};

export default function MiddleHero() {
  return (
    <section className={styles.section} aria-labelledby="como-funciona-title">
      {/* ================= SCHEMA VIDEO SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Proceso de recuperación de cartera en Colombia",
            description:
              "Video sobre el proceso de recuperación de cartera, cobro prejurídico y cobro jurídico en Bogotá Colombia para empresas y personas.",
            thumbnailUrl: "https://www.cobrandoonline.com/thumbnail-video.jpg",
            uploadDate: "2025-01-01",
            duration: "PT1M30S",
            contentUrl:
              "https://www.cobrandoonline.com/videoCobrandoOnline.mp4",
            embedUrl: "https://www.cobrandoonline.com/",
            publisher: {
              "@type": "Organization",
              name: "Cobrando Online",
              url: "https://www.cobrandoonline.com",
            },
          }),
        }}
      />

      <div className={styles.wrapper}>
        {/* ================= VIDEO ================= */}
        <motion.div
          className={styles.videoContainer}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Título SEO del video */}
          <h3 className={styles.videoTitle}>
            Video: Cómo funciona la recuperación de cartera en Colombia
          </h3>

          <div className={styles.videoPlaceholder}>
            <video
              controls
              preload="metadata"
              poster="/thumbnail-video.jpg"
              width="100%"
              aria-label="Video sobre recuperación de cartera en Colombia, cobro prejurídico y cobro jurídico en Bogotá"
            >
              <source src="/videoCobrandoOnline.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>

          {/* TEXTO SEO OCULTO */}
          <p className={styles["sr-only"]}>
            Video explicativo sobre recuperación de cartera en Colombia,
            servicios de cobro prejurídico, cobro jurídico, cobranza para
            empresas en Bogotá, recuperación de cartera vencida y procesos de
            demanda ejecutiva.
          </p>
        </motion.div>

        {/* ================= TEXTO ================= */}
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className={styles.smallTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            RECUPERACIÓN DE CARTERA EN COLOMBIA
          </motion.span>

          <motion.h2
            className={styles.title}
            id="como-funciona-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Cómo funciona la recuperación de cartera
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            En <strong>Cobrando Online</strong> somos especialistas en
            <strong> recuperación de cartera en Colombia</strong>, ayudando a
            empresas y personas a gestionar el <strong>cobro de deudas</strong>{" "}
            de manera eficiente en <strong>Bogotá y todo el país</strong>.
            Nuestro proceso combina <strong>cobro prejurídico</strong>,
            negociación estratégica y{" "}
            <strong>cobro jurídico en Colombia</strong>, permitiendo maximizar
            la recuperación de cartera vencida de forma rápida, segura y
            transparente.
          </motion.p>

          {/* LISTA */}
          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.18 }}
          >
            {[
              "Análisis del caso y viabilidad de recuperación de cartera.",
              "Gestión amistosa y negociación de acuerdos de pago.",
              "Cobro prejurídico para recuperación rápida de la deuda.",
              "Proceso jurídico y demanda ejecutiva cuando es necesario.",
              "Seguimiento constante y reporte del proceso.",
              "Recuperación efectiva de cartera vencida.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className={styles.listItem}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* BOTÓN */}
          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Iniciar recuperación de cartera
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
