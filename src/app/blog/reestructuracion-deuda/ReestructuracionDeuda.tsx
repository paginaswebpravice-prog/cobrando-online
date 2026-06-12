"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ReestructuracionDeuda() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Reestructuración de Deudas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reestructuración de deudas: cómo renegociar obligaciones y recuperar
          cartera sin llegar a procesos judiciales
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          La reestructuración de deudas es una estrategia que permite modificar
          las condiciones originales de una obligación para facilitar su pago.
          Esta alternativa es ampliamente utilizada por empresas y acreedores
          cuando el deudor presenta dificultades financieras, pero mantiene la
          intención de cumplir con sus compromisos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué es una reestructuración de deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Consiste en renegociar las condiciones de una deuda existente para que
          el deudor pueda cumplir con los pagos de manera más realista. Esto
          puede implicar ampliar plazos, modificar cuotas, reducir intereses o
          establecer nuevos cronogramas de pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene reestructurar una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La reestructuración suele ser recomendable cuando el deudor atraviesa
          problemas temporales de liquidez, pero existe capacidad de pago a
          mediano plazo. También es útil cuando el costo y tiempo de un proceso
          judicial resultan superiores al beneficio esperado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Beneficios de renegociar una deuda
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Incrementa las probabilidades de recuperación.</li>
          <li>Reduce costos legales y administrativos.</li>
          <li>Evita procesos judiciales prolongados.</li>
          <li>Conserva la relación comercial con el cliente.</li>
          <li>Facilita el flujo de caja del deudor.</li>
          <li>Permite acuerdos más realistas y sostenibles.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aspectos que deben quedar documentados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Toda reestructuración debe formalizarse por escrito. El documento debe
          incluir el saldo adeudado, el nuevo plan de pagos, las fechas de
          vencimiento, las condiciones de incumplimiento y las firmas de las
          partes involucradas.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La reestructuración de deudas puede convertirse en una de las mejores
          herramientas para recuperar cartera cuando existe voluntad de pago por
          parte del deudor. Un acuerdo bien estructurado permite minimizar
          riesgos, preservar relaciones comerciales y aumentar las posibilidades
          de recuperación efectiva del dinero.
        </motion.p>
      </motion.article>
    </main>
  );
}
