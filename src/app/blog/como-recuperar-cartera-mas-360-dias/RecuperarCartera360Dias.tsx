"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperarCartera360Dias() {
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
          Estrategias de Recuperación
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¿Cómo recuperar cartera de más de 360 días en Colombia?
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Recuperar una deuda con más de 360 días de mora puede ser un reto para
          cualquier empresa. Entre más tiempo pasa, menores suelen ser las
          probabilidades de pago, especialmente si no existió seguimiento
          constante ni documentación adecuada durante el proceso de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sin embargo, aún es posible recuperar parte o la totalidad de la
          cartera aplicando estrategias correctas, haciendo gestión
          especializada y actuando antes de que la obligación pueda prescribir.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué una deuda de más de un año es más difícil de recuperar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando una deuda supera los 360 días de vencimiento, normalmente el
          cliente ya presenta problemas financieros, evasión de contacto o falta
          de intención de pago. Además, muchas empresas dejan de hacer
          seguimiento frecuente después de varios meses, lo que reduce la
          presión de cobranza.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También existe el riesgo de perder soportes, contratos o evidencia de
          la obligación, dificultando posibles acciones legales futuras.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para recuperar cartera antigua en Colombia
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Actualizar datos de contacto del deudor.</li>
          <li>Revisar contratos, facturas y soportes disponibles.</li>
          <li>Retomar el seguimiento con comunicación profesional.</li>
          <li>Negociar acuerdos de pago flexibles.</li>
          <li>Ofrecer alternativas de normalización de deuda.</li>
          <li>Enviar notificaciones formales de cobro.</li>
          <li>Evaluar rápidamente el cobro prejurídico o jurídico.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo iniciar un proceso jurídico por cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si la deuda supera varios meses sin resultados positivos en la
          cobranza amistosa, es recomendable analizar la viabilidad de un cobro
          jurídico. Esto es especialmente importante antes de que la obligación
          pueda prescribir legalmente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Iniciar acciones legales oportunamente puede aumentar las
          probabilidades de recuperación y evitar la pérdida total del dinero
          adeudado.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores comunes al gestionar cartera de más de 360 días
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Dejar de hacer seguimiento durante meses.</li>
          <li>No documentar conversaciones o acuerdos.</li>
          <li>No actualizar información del cliente.</li>
          <li>Esperar demasiado para iniciar acciones legales.</li>
          <li>Perder soportes de la deuda.</li>
          <li>No contar con estrategias de cobranza especializadas.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo aumentar las probabilidades de recuperar cartera
          antigua
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque recuperar cartera de más de 360 días es más complejo, aún es
          posible lograr resultados positivos con seguimiento profesional,
          estrategias adecuadas y acciones oportunas. Actuar rápidamente y
          documentar correctamente cada etapa es clave para evitar pérdidas
          económicas en Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
