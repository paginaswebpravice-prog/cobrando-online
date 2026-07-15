"use client";

import styles from "./styles/About.module.css";
import AboutMiddle from "./AboutMiddle";
import Stats from "./Stats";
import FAQ from "./FAQ";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/2SLJSZ5EUTDGP1?autoload=1&app_absent=0",
    "_blank",
  );
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: "Leidy (Apellido aquí)",
                jobTitle: "Especialista en recuperación de cartera empresarial",
                description:
                  "Profesional con experiencia en gestión de cobranza, recuperación de cartera y estrategias de recaudo para empresas en Colombia.",
                image: "https://cobrandoonline.com/conocenos",
                worksFor: {
                  "@type": "Organization",
                  name: "Cobrando Online",
                },
              },
              {
                "@type": "Organization",
                name: "Cobrando Online",
                foundingDate: "2015",
                description:
                  "Empresa especializada en gestión de cobranza y recuperación de cartera para empresas, respaldada por la experiencia jurídica de Pravice Abogados.",
              },
            ],
          }),
        }}
      />

      <section className={styles.about}>
        {/* ================= IMAGEN ================= */}

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/doc-leidy.jpeg"
            alt="Especialista en gestión de cobranza y recuperación de cartera para empresas"
          />
        </motion.div>

        {/* ================= CONTENIDO ================= */}

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.small>SOBRE COBRANDO ONLINE</motion.small>

          <motion.h2>
            Más de 23 años ayudando a empresas a recuperar cartera y fortalecer
            su flujo de caja
          </motion.h2>

          <motion.p>
            En <strong>Cobrando Online</strong> ayudamos a empresas de
            diferentes sectores a recuperar cuentas por cobrar mediante
            estrategias de gestión de cobranza, negociación especializada y
            recuperación de cartera vencida. Nuestra experiencia permite diseñar
            soluciones personalizadas para disminuir la mora, mejorar la
            liquidez y proteger la relación comercial con los clientes.
          </motion.p>

          <motion.p>
            Nuestro modelo combina procesos de cobranza preventiva, recuperación
            prejurídica y acompañamiento jurídico cuando es necesario,
            respaldado por la trayectoria de <strong>Pravice Abogados</strong>,
            ofreciendo una solución integral para la recuperación de activos
            empresariales.
          </motion.p>

          {/* ================= TIMELINE ================= */}

          <motion.div
            className={styles.timeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                year: "1998",
                title: "Experiencia jurídica",
                text: "Inicio de la trayectoria profesional que hoy respalda nuestros procesos de recuperación de cartera empresarial.",
              },
              {
                year: "2015",
                title: "Nacimiento de Cobrando Online",
                text: "Creamos una solución especializada en gestión de cobranza para ofrecer procesos más ágiles, transparentes y orientados a resultados.",
              },
              {
                year: "Hoy",
                title: "Cobranza empresarial inteligente",
                text: "Seguimos ayudando a empresas de Colombia a recuperar facturas vencidas, disminuir la cartera morosa y mejorar el flujo de caja mediante estrategias de cobranza adaptadas a cada negocio.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className={styles.dot}></span>

                <strong>{item.year}</strong>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className={styles.button}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar una evaluación de cartera
          </motion.button>
        </motion.div>
      </section>

      <AboutMiddle />

      <Stats />

      <FAQ />
    </>
  );
}
