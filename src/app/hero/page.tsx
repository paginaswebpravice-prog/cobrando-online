"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.container}>
        {/* ================= COLUMNA IZQUIERDA ================= */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>
            Recuperación de cartera en Colombia
          </span>

          <h1 id="hero-title" className={styles.title}>
            Estrategias efectivas para <span>recuperar tu cartera</span>
          </h1>

          <p className={styles.description}>
            Cada deuda requiere un análisis estratégico. Evaluamos la
            complejidad del caso, la etapa del proceso y la antigüedad de la
            obligación para definir la mejor ruta de recuperación.
          </p>

          <a
            href="/contactanos"
            className={styles.button}
            title="Solicitar evaluación de cartera"
          >
            Solicitar evaluación personalizada
          </a>
        </motion.div>

        {/* ================= COLUMNA DERECHA ================= */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className={styles.successWrapper}>
            <h2 className={styles.successTitle}>
              Resultados en recuperación de cartera
            </h2>

            <div className={styles.successCard}>
              <h3>Sector Salud</h3>
              <p>Monto gestionado: $48.000.000</p>
              <p>Antigüedad: 2 años</p>
              <span className={styles.highlight}>
                82% recuperado en etapa prejurídica
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Empresa Comercial</h3>
              <p>Monto gestionado: $120.000.000</p>
              <p>Proceso ejecutivo judicial</p>
              <span className={styles.highlight}>
                Embargo efectivo y recuperación parcial garantizada
              </span>
            </div>

            <div className={styles.successCard}>
              <h3>Servicios Profesionales</h3>
              <p>Mora menor a 1 año</p>
              <span className={styles.highlight}>
                Recuperación total sin proceso jurídico
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
