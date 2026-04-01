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
    <section
      className={styles.section}
      aria-labelledby="como-funciona-title"
      id="video-recuperacion-cartera"
    >
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
            embedUrl:
              "https://www.cobrandoonline.com/#video-recuperacion-cartera",
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
          <h3 className={styles.videoTitle}>
            Video: Cómo funciona la recuperación de cartera en Colombia
          </h3>

          <figure className={styles.videoFigure}>
            <video
              controls
              preload="metadata"
              poster="/thumbnail-video.jpg"
              width="100%"
            >
              <source src="/videoCobrandoOnline.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>

            <figcaption className={styles.videoCaption}>
              Explicación del proceso de recuperación de cartera, cobro
              prejurídico, cobro jurídico y gestión de cartera vencida en
              Colombia.
            </figcaption>
          </figure>

          {/* Texto descriptivo visible (importante para SEO) */}
          <p className={styles.videoDescription}>
            Este video explica el proceso de recuperación de cartera en
            Colombia, incluyendo el cobro prejurídico, negociación de deudas,
            acuerdos de pago, cobro jurídico y demanda ejecutiva para empresas y
            personas en Bogotá y todo el país.
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
          <motion.span className={styles.smallTitle}>
            RECUPERACIÓN DE CARTERA EN COLOMBIA
          </motion.span>

          <motion.h2 className={styles.title} id="como-funciona-title">
            Cómo funciona la recuperación de cartera
          </motion.h2>

          <motion.p className={styles.description}>
            En <strong>Cobrando Online</strong> somos especialistas en
            <strong> recuperación de cartera en Colombia</strong>, ayudando a
            empresas y personas a gestionar el <strong>cobro de deudas</strong>{" "}
            de manera eficiente en <strong>Bogotá y todo el país</strong>.
          </motion.p>

          <motion.ul className={styles.list}>
            {[
              "Análisis del caso y viabilidad de recuperación de cartera.",
              "Gestión amistosa y negociación de acuerdos de pago.",
              "Cobro prejurídico para recuperación rápida de la deuda.",
              "Proceso jurídico y demanda ejecutiva cuando es necesario.",
              "Seguimiento constante y reporte del proceso.",
              "Recuperación efectiva de cartera vencida.",
            ].map((item, index) => (
              <li key={index} className={styles.listItem}>
                <FontAwesomeIcon icon={faCheckCircle} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.button className={styles.button} onClick={handleClick}>
            Iniciar recuperación de cartera
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
