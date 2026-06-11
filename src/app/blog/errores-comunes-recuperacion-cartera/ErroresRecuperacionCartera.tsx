"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ErroresRecuperacionCartera() {
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
          Estrategias de Cobranza
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Errores comunes en la recuperación de cartera que reducen los
          resultados
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Muchas empresas pierden dinero no porque sus clientes no quieran
          pagar, sino porque cometen errores durante el proceso de recuperación
          de cartera. Una estrategia de cobranza mal estructurada puede aumentar
          la morosidad, afectar el flujo de caja y disminuir las probabilidades
          de recuperar las obligaciones pendientes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Iniciar la gestión de cobro demasiado tarde
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más frecuentes es esperar demasiado tiempo para
          contactar al cliente. Cuanto más tiempo permanezca una deuda sin
          gestión, menores serán las probabilidades de recuperación. Las
          empresas deben implementar procesos preventivos y realizar seguimiento
          desde los primeros días de vencimiento.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No contar con una política de cobranza definida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas organizaciones gestionan cada caso de manera improvisada. La
          ausencia de procedimientos claros genera inconsistencias en las
          comunicaciones, dificulta el seguimiento y reduce la eficiencia del
          equipo encargado de la recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No documentar adecuadamente las obligaciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Facturas incompletas, contratos inexistentes o acuerdos verbales sin
          soporte pueden convertirse en un problema serio cuando es necesario
          escalar el caso a una etapa jurídica. La documentación adecuada es
          fundamental para respaldar cualquier reclamación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Utilizar una comunicación agresiva con los clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunas empresas creen que ejercer presión excesiva mejora los
          resultados. Sin embargo, una comunicación inadecuada puede deteriorar
          la relación comercial, generar conflictos y afectar la imagen de la
          organización.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No segmentar la cartera por niveles de riesgo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tratar todas las deudas de la misma manera suele ser un error. Las
          estrategias deben adaptarse según la antigüedad de la mora, el valor
          adeudado, el historial del cliente y las probabilidades de
          recuperación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No hacer seguimiento constante
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera requiere continuidad. Cuando los contactos
          son esporádicos o inexistentes, el deudor suele perder prioridad sobre
          la obligación. Un seguimiento periódico ayuda a mantener activa la
          negociación y aumentar las posibilidades de pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales errores que debes evitar
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Esperar demasiado tiempo para cobrar.</li>
          <li>No tener una política de cobranza definida.</li>
          <li>Carecer de soportes documentales.</li>
          <li>Realizar comunicaciones inadecuadas.</li>
          <li>No segmentar los clientes morosos.</li>
          <li>Descuidar el seguimiento de las obligaciones.</li>
          <li>No medir indicadores de recuperación.</li>
          <li>Actuar únicamente cuando la deuda ya es crítica.</li>
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
          Evitar estos errores puede marcar una gran diferencia en los
          resultados de recuperación de cartera. Las empresas que implementan
          procesos estructurados, realizan seguimiento oportuno y utilizan
          estrategias de cobranza adecuadas suelen obtener mejores niveles de
          recaudo y una mayor estabilidad financiera.
        </motion.p>
      </motion.article>
    </main>
  );
}
