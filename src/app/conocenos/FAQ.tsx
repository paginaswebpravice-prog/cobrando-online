"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/FAQ.module.css";

interface Question {
  question: string;
  answer: string;
}

const leftColumn: Question[] = [
  {
    question:
      "¿Cómo ayuda Cobrando Online a recuperar cartera vencida de una empresa?",
    answer:
      "Cobrando Online es una solución especializada en gestión de cobranza para empresas. Analizamos cada caso, definimos la estrategia de recuperación más adecuada y gestionamos las cuentas por cobrar mediante negociación, cobranza prejurídica y, cuando resulta necesario, recuperación judicial.",
  },
  {
    question: "¿Cómo funciona el proceso de gestión de cobranza?",
    answer:
      "Una vez recibimos la información de la cartera, realizamos un diagnóstico, clasificamos las obligaciones y comenzamos la gestión de cobranza. Nuestro equipo mantiene seguimiento permanente, busca acuerdos de pago y solo cuando la negociación no es suficiente recomendamos iniciar acciones jurídicas.",
  },
  {
    question:
      "¿Cuánto tiempo puede tardar la recuperación de una factura vencida?",
    answer:
      "Cada caso depende de la antigüedad de la obligación, la disposición de pago del deudor y la documentación disponible. Muchas obligaciones pueden recuperarse mediante negociación en pocas semanas, mientras que otras requieren procesos más extensos.",
  },
  {
    question:
      "¿Cuánto cuesta contratar un servicio de recuperación de cartera?",
    answer:
      "Nuestro modelo está orientado a resultados. En la mayoría de los casos no existen pagos iniciales y los honorarios se generan sobre los valores efectivamente recuperados, brindando mayor tranquilidad para las empresas.",
  },
];

const rightColumn: Question[] = [
  {
    question: "¿Qué tipo de cartera puede recuperar Cobrando Online?",
    answer:
      "Gestionamos cuentas por cobrar de empresas de diferentes sectores, incluyendo facturas vencidas, cartera comercial, obligaciones entre empresas y cartera del sector salud, siempre evaluando la viabilidad de recuperación antes de iniciar la gestión.",
  },
  {
    question: "¿Qué sucede si el deudor no acepta un acuerdo de pago?",
    answer:
      "Nuestro equipo agota primero las alternativas de negociación y cobranza prejurídica. Cuando estas no generan resultados, analizamos las opciones de recuperación judicial con el respaldo jurídico correspondiente para proteger los intereses de nuestros clientes.",
  },
  {
    question: "¿Puedo conocer el estado de la gestión de cobranza?",
    answer:
      "Sí. Nuestros clientes reciben seguimiento continuo sobre el avance de cada gestión, los acuerdos alcanzados, las negociaciones realizadas y las siguientes etapas del proceso de recuperación.",
  },
  {
    question: "¿Cómo aumentar las probabilidades de recuperar una deuda?",
    answer:
      "La recuperación depende de factores como la documentación, la antigüedad de la obligación y la rapidez con la que se inicia la gestión. Actuar oportunamente y contar con un equipo especializado en cobranza aumenta significativamente las posibilidades de recaudo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <p className={styles.subtitle}>PREGUNTAS FRECUENTES</p>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Resolvemos las dudas más frecuentes sobre gestión de cobranza y
        recuperación de cartera
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Conozca cómo funciona nuestro servicio de gestión de cobranza para
        empresas, qué tipo de cartera recuperamos, cuánto puede tardar el
        proceso y cuáles son las mejores estrategias para recuperar facturas
        vencidas y cuentas por cobrar.
      </motion.p>

      <div className={styles.grid}>
        <div className={styles.column}>
          {leftColumn.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              onClick={() => toggleAnswer(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.cardHeader}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className={styles.column}>
          {rightColumn.map((item, index) => {
            const adjustedIndex = index + leftColumn.length;

            return (
              <motion.div
                key={adjustedIndex}
                className={styles.card}
                onClick={() => toggleAnswer(adjustedIndex)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.cardHeader}>
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === adjustedIndex ? "▲" : "▼"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === adjustedIndex && (
                    <motion.div
                      className={styles.answer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
