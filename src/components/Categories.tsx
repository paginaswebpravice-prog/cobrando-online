"use client";

import { motion } from "framer-motion";
import styles from "./styles/Categories.module.css";

export default function Categories() {
  const items = [
    {
      number: "01",
      title: "Recuperación de cartera para personas naturales",
      text: "Gestionamos el cobro de obligaciones pendientes de personas naturales mediante estrategias de cobranza preventiva, negociación amistosa y recuperación prejurídica. Cuando la situación lo requiere, apoyamos el proceso con acciones jurídicas para aumentar las posibilidades de recaudo y reducir el riesgo de pérdida de la cartera.",
    },
    {
      number: "02",
      title: "Gestión de cobranza para empresas y cartera comercial",
      text: "Ayudamos a empresas de todos los sectores a recuperar facturas vencidas, cuentas por cobrar y cartera comercial mediante una gestión de cobranza profesional. Implementamos estrategias de negociación, seguimiento permanente y recuperación judicial cuando es necesaria para mejorar el flujo de caja y disminuir la cartera morosa.",
    },
    {
      number: "03",
      title: "Recuperación de cartera para EPS, IPS y sector salud",
      text: "Contamos con experiencia en la recuperación de cartera del sector salud, incluyendo obligaciones entre EPS, IPS, clínicas, hospitales y proveedores. Aplicamos estrategias de cobro adaptadas a la normativa vigente para agilizar el recaudo y fortalecer la liquidez de las organizaciones.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <h2 id="categories-title" className={styles.srOnly}>
        Soluciones especializadas de gestión de cobranza y recuperación de
        cartera para empresas, personas naturales y entidades del sector salud
      </h2>

      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className={styles.number}>{item.number}</span>

            <div className={styles.textBlock}>
              <h3 className={styles.title}>{item.title}</h3>

              <p className={styles.text}>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
