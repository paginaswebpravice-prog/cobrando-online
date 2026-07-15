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
            name: "Cómo recuperar cartera vencida para empresas en Colombia",
            description:
              "Conozca cómo funciona nuestro proceso de gestión de cobranza, recuperación de facturas vencidas, negociación de cartera y recuperación judicial para empresas en Colombia.",
            thumbnailUrl: "https://cobrandoonline.com/thumbnail-video.jpg",
            uploadDate: "2025-01-01",
            duration: "PT1M30S",
            contentUrl: "https://cobrandoonline.com/videoCobrandoOnline.mp4",
            embedUrl: "https://cobrandoonline.com/#video-recuperacion-cartera",
            publisher: {
              "@type": "Organization",
              name: "Cobrando Online",
              url: "https://cobrandoonline.com",
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
            Video: Descubra cómo recuperar facturas vencidas y reducir la
            cartera morosa
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
              Conozca nuestro proceso de gestión de cobranza, negociación de
              cartera, recuperación prejurídica y recuperación judicial para
              empresas.
            </figcaption>
          </figure>

          <p className={styles.videoDescription}>
            En este video explicamos paso a paso cómo ayudamos a empresas de
            diferentes sectores a recuperar cuentas por cobrar, disminuir la
            cartera vencida y mejorar el flujo de caja mediante una gestión de
            cobranza estratégica adaptada a cada caso.
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
            GESTIÓN DE COBRANZA EMPRESARIAL
          </motion.span>

          <motion.h2 className={styles.title} id="como-funciona-title">
            Así recuperamos la cartera vencida de su empresa de forma eficiente
          </motion.h2>

          <motion.p className={styles.description}>
            En <strong>Cobrando Online</strong> implementamos estrategias de
            <strong> gestión de cobranza y recuperación de cartera</strong> para
            ayudar a empresas a recuperar facturas vencidas, reducir la cartera
            morosa y fortalecer su flujo de caja. Nuestro proceso combina
            negociación especializada, seguimiento permanente y respaldo
            jurídico cuando es necesario.
          </motion.p>

          <motion.ul className={styles.list}>
            {[
              "Diagnóstico de la cartera y análisis de viabilidad de recuperación.",
              "Clasificación de cuentas por cobrar según antigüedad y riesgo.",
              "Cobranza preventiva y negociación de acuerdos de pago.",
              "Cobro prejurídico orientado a recuperar la deuda sin acudir a juicio.",
              "Recuperación judicial únicamente cuando la negociación no es suficiente.",
              "Seguimiento permanente con reportes de avance para su empresa.",
            ].map((item, index) => (
              <li key={index} className={styles.listItem}>
                <FontAwesomeIcon icon={faCheckCircle} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.button className={styles.button} onClick={handleClick}>
            Conocer nuestro proceso de cobranza
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
