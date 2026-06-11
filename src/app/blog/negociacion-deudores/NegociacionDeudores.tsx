"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function NegociacionDeudores() {
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Negociación de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cómo negociar con deudores y aumentar la recuperación de cartera
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La negociación es una de las herramientas más efectivas dentro de la
          recuperación de cartera. Una buena estrategia permite llegar a
          acuerdos que faciliten el pago de las obligaciones pendientes,
          reduzcan los niveles de mora y eviten la necesidad de iniciar procesos
          judiciales costosos y prolongados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué es importante negociar antes de demandar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchos casos, los clientes no incumplen por falta de voluntad sino
          por dificultades temporales de liquidez. Una negociación adecuada
          puede generar soluciones beneficiosas para ambas partes y acelerar la
          recuperación del dinero sin necesidad de acudir a instancias
          judiciales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preparación antes de iniciar la negociación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de contactar al deudor es recomendable conocer el valor exacto
          de la deuda, los días de mora, el historial de pagos y las posibles
          alternativas de acuerdo. Contar con esta información facilita la toma
          de decisiones y mejora la capacidad de negociación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Escuchar antes de proponer soluciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Comprender las razones que llevaron al incumplimiento permite plantear
          opciones más realistas. Escuchar al deudor ayuda a identificar
          dificultades financieras, problemas operativos o situaciones
          excepcionales que pueden resolverse mediante acuerdos flexibles.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ofrecer alternativas de pago viables
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La negociación no consiste únicamente en exigir el pago inmediato.
          Dependiendo de cada caso, pueden plantearse cuotas, ampliación de
          plazos, acuerdos parciales o esquemas de pago progresivos que permitan
          recuperar la cartera sin afectar completamente la capacidad financiera
          del cliente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mantener una comunicación profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El respeto y la cordialidad suelen generar mejores resultados que la
          presión excesiva. Una comunicación profesional fortalece la relación
          comercial y aumenta la disposición del cliente para cumplir con los
          compromisos adquiridos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Formalizar los acuerdos alcanzados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Todo acuerdo debe quedar documentado por escrito. Esto permite
          establecer claramente las obligaciones de cada parte, las fechas de
          pago y las consecuencias en caso de incumplimiento.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Técnicas efectivas para negociar con deudores
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Escuchar activamente antes de proponer soluciones.</li>
          <li>Mantener una comunicación clara y respetuosa.</li>
          <li>Ofrecer alternativas realistas de pago.</li>
          <li>Negociar con base en información financiera actualizada.</li>
          <li>Documentar todos los compromisos adquiridos.</li>
          <li>Realizar seguimiento periódico a los acuerdos.</li>
          <li>Buscar soluciones que beneficien a ambas partes.</li>
          <li>Actuar oportunamente antes de que la deuda aumente.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Saber negociar con deudores es una habilidad fundamental para
          cualquier empresa que busque mejorar sus indicadores de recuperación
          de cartera. La combinación de comunicación efectiva, análisis
          financiero y acuerdos bien estructurados puede incrementar
          significativamente las probabilidades de recaudo y reducir la
          necesidad de procesos judiciales.
        </motion.p>
      </motion.article>
    </main>
  );
}
