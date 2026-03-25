"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faClock,
  faCheckCircle,
  faGlobe,
  faHandHoldingUsd,
  faBalanceScale,
  faUserCog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "./styles/Benefits.module.css";

const items = [
  {
    icon: faUserTie,
    title: "Gestión profesional de cobranza",
    subtitle: "Recuperación de cartera estructurada",
    highlights: [
      "Cobranza ética y controlada",
      "Gestión prejurídica y jurídica",
    ],
    description:
      "Nuestro equipo especializado en recuperación de cartera en Colombia administra tu cartera vencida mediante procesos profesionales de cobranza, negociación estratégica y acciones legales cuando es necesario, maximizando la recuperación de cartera sin afectar la relación comercial con tus clientes.",
  },
  {
    icon: faClock,
    title: "Ahorro de tiempo y recursos",
    subtitle: "Nosotros cobramos por ti",
    highlights: ["Menos carga operativa", "Recuperación más rápida"],
    description:
      "Al delegar la cobranza de cartera vencida, tu empresa reduce la carga operativa interna y optimiza recursos administrativos. Nuestro equipo se encarga del seguimiento completo del proceso de cobro mientras tú te enfocas en el crecimiento de tu negocio.",
  },
  {
    icon: faCheckCircle,
    title: "Alta tasa de recuperación",
    subtitle: "Estrategias de cobro efectivas",
    highlights: ["Casos personalizados", "Mayor probabilidad de pago"],
    description:
      "Aplicamos estrategias de cobro personalizadas según el perfil del deudor, tipo de obligación y antigüedad de la deuda, aumentando la probabilidad de recuperación de cartera prejurídica y jurídica.",
  },
  {
    icon: faGlobe,
    title: "Plataforma online 24/7",
    subtitle: "Control total en tiempo real",
    highlights: ["Acceso desde cualquier lugar", "Reportes actualizados"],
    description:
      "Consulta el estado de tus procesos de recuperación de cartera, acuerdos de pago, reportes y gestión de cobranza desde cualquier dispositivo a través de nuestra plataforma digital disponible las 24 horas.",
  },
  {
    icon: faHandHoldingUsd,
    title: "Sin pagos por adelantado",
    subtitle: "Modelo basado en resultados",
    highlights: ["Sin costos iniciales", "Solo cobramos si recuperamos"],
    description:
      "Nuestro modelo de cobranza está basado en resultados. Solo cobramos honorarios cuando logramos la recuperación de cartera, alineando nuestro trabajo directamente con los resultados de tu empresa.",
  },
  {
    icon: faBalanceScale,
    title: "Proceso legal transparente",
    subtitle: "Cobro jurídico en Colombia",
    highlights: ["Marco legal vigente", "Gestión documentada"],
    description:
      "Todos nuestros procesos de cobro jurídico cumplen con la legislación colombiana, incluyendo procesos ejecutivos, demandas y acuerdos de pago, reduciendo riesgos legales y protegiendo a nuestros clientes.",
  },
  {
    icon: faUserCog,
    title: "Asesoramiento personalizado",
    subtitle: "Estrategia de recuperación",
    highlights: ["Análisis de cartera", "Decisiones informadas"],
    description:
      "Brindamos asesoría legal y financiera en recuperación de cartera, análisis de cartera vencida, políticas de crédito y estrategias de cobranza para mejorar la recuperación y reducir la mora.",
  },
  {
    icon: faChartLine,
    title: "Mejora del flujo de caja",
    subtitle: "Liquidez para tu empresa",
    highlights: ["Ingresos recuperados", "Estabilidad financiera"],
    description:
      "La recuperación efectiva de cartera vencida mejora el flujo de caja de tu empresa, aumenta la liquidez y fortalece la estabilidad financiera del negocio.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      {/* TITULO */}
      <motion.div
        style={{ textAlign: "center", marginBottom: "50px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Beneficios de la recuperación de cartera para empresas en Colombia
        </h2>
        <p>
          Conoce las ventajas de contratar un servicio profesional de cobranza,
          recuperación de cartera vencida, cobro prejurídico y cobro jurídico en
          Colombia.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className={styles.inner}>
              {/* Front */}
              <div className={styles.front}>
                <motion.div
                  className={styles.icon}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>
                <h3>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <ul>
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Back */}
              <div className={styles.back}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
