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
    title: "Gestión de cobranza especializada para empresas",
    subtitle: "Recupere cuentas por cobrar con mayor eficiencia",
    highlights: [
      "Cobranza profesional y estratégica",
      "Negociación personalizada con deudores",
    ],
    description:
      "Nuestro equipo implementa estrategias de gestión de cobranza adaptadas al perfil de cada deudor para recuperar facturas vencidas, disminuir la cartera morosa y proteger la relación comercial con sus clientes. Cuando es necesario, el proceso cuenta con respaldo jurídico para incrementar las posibilidades de recuperación.",
  },
  {
    icon: faClock,
    title: "Ahorre tiempo mientras recuperamos su cartera",
    subtitle: "Delegue el proceso de cobranza",
    highlights: ["Menor carga administrativa", "Seguimiento permanente"],
    description:
      "Externalizar la gestión de cobranza permite que su empresa concentre sus esfuerzos en vender y crecer mientras nuestro equipo administra el seguimiento, las negociaciones y la recuperación de las cuentas por cobrar.",
  },
  {
    icon: faCheckCircle,
    title: "Mayor recuperación de facturas vencidas",
    subtitle: "Estrategias enfocadas en resultados",
    highlights: [
      "Análisis individual de cada caso",
      "Mayor probabilidad de recaudo",
    ],
    description:
      "Diseñamos estrategias de cobranza según la antigüedad de la obligación, el comportamiento del deudor y el tipo de cartera, incrementando las probabilidades de recuperación y reduciendo la mora empresarial.",
  },
  {
    icon: faGlobe,
    title: "Seguimiento de cartera en línea las 24 horas",
    subtitle: "Información disponible en tiempo real",
    highlights: ["Acceso desde cualquier lugar", "Reportes actualizados"],
    description:
      "Visualice el estado de sus procesos de cobranza, acuerdos de pago, compromisos adquiridos y avances de recuperación desde una plataforma digital diseñada para brindar transparencia y control.",
  },
  {
    icon: faHandHoldingUsd,
    title: "Honorarios basados en resultados",
    subtitle: "Sin costos iniciales para comenzar",
    highlights: [
      "Sin pagos por adelantado",
      "Nuestros resultados respaldan nuestro trabajo",
    ],
    description:
      "Nuestro modelo de servicio está orientado al éxito de la recuperación. Los honorarios se generan únicamente cuando logramos resultados efectivos en la recuperación de la cartera asignada.",
  },
  {
    icon: faBalanceScale,
    title: "Respaldo jurídico cuando la negociación no funciona",
    subtitle: "Una gestión integral de recuperación",
    highlights: [
      "Cumplimiento de la legislación colombiana",
      "Proceso documentado",
    ],
    description:
      "Siempre priorizamos la negociación y la cobranza prejurídica. Si el caso lo requiere, el proceso continúa con el acompañamiento jurídico correspondiente para aumentar las posibilidades de recuperar la obligación.",
  },
  {
    icon: faUserCog,
    title: "Diagnóstico y estrategia para su cartera",
    subtitle: "Decisiones basadas en información",
    highlights: [
      "Análisis de cartera vencida",
      "Recomendaciones personalizadas",
    ],
    description:
      "Evaluamos la composición de la cartera, el riesgo de recuperación y las oportunidades de mejora para ayudar a su empresa a optimizar sus políticas de crédito, disminuir la mora y fortalecer la gestión de cobranza.",
  },
  {
    icon: faChartLine,
    title: "Mejore el flujo de caja de su empresa",
    subtitle: "Más liquidez para seguir creciendo",
    highlights: [
      "Mayor disponibilidad de efectivo",
      "Reducción de cartera morosa",
    ],
    description:
      "Recuperar oportunamente las cuentas por cobrar permite fortalecer la liquidez, mejorar el flujo de caja y generar mayor estabilidad financiera para impulsar el crecimiento sostenible de la empresa.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <motion.div
        style={{ textAlign: "center", marginBottom: "50px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          ¿Por qué las empresas confían en nuestra gestión de cobranza y
          recuperación de cartera?
        </h2>

        <p>
          Descubra cómo una estrategia profesional de gestión de cobranza ayuda
          a recuperar facturas vencidas, reducir la cartera morosa y mejorar el
          flujo de caja sin afectar la relación con sus clientes.
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
