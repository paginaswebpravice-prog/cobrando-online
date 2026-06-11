"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroJuridicoRiesgos() {
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
          Cobro Jurídico
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Riesgos del cobro jurídico: lo que toda empresa debe conocer antes de
          demandar
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El cobro jurídico es una herramienta efectiva para recuperar deudas
          cuando las gestiones de cobranza extrajudicial no generan resultados.
          Sin embargo, iniciar una demanda no garantiza automáticamente la
          recuperación del dinero. Existen riesgos legales, financieros y
          operativos que las empresas deben evaluar antes de iniciar un proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por qué existen riesgos en un proceso de cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque la legislación colombiana permite exigir judicialmente el pago
          de obligaciones vencidas, cada caso presenta circunstancias
          particulares. La solvencia del deudor, la calidad de los documentos y
          los tiempos judiciales pueden influir significativamente en el
          resultado final del proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Riesgo de que el deudor no tenga bienes embargables
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los riesgos más comunes es que el deudor no posea bienes,
          cuentas bancarias o ingresos identificables sobre los cuales pueda
          ejecutarse una medida cautelar. En estos casos, aunque exista una
          sentencia favorable, la recuperación efectiva puede ser limitada.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Costos asociados al proceso judicial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los procesos judiciales implican costos relacionados con honorarios,
          gastos procesales, notificaciones, certificados y otras actuaciones.
          Por ello, es importante analizar si el valor de la deuda justifica la
          inversión necesaria para adelantar el proceso.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Riesgo por documentación insuficiente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La falta de soportes adecuados puede afectar la viabilidad del
          proceso. Facturas, pagarés, contratos, acuerdos de pago y demás
          documentos constituyen la base probatoria necesaria para reclamar
          judicialmente una obligación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Posibles demoras judiciales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dependiendo de la congestión de los despachos judiciales y de las
          actuaciones de las partes, algunos procesos pueden extenderse durante
          meses o incluso años. Este factor debe considerarse dentro de la
          estrategia de recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo reducir los riesgos del cobro jurídico
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Verificar la solvencia del deudor antes de demandar.</li>
          <li>Conservar toda la documentación de respaldo.</li>
          <li>Actuar antes de que la deuda prescriba.</li>
          <li>Solicitar medidas cautelares oportunamente.</li>
          <li>Evaluar la relación costo-beneficio del proceso.</li>
          <li>Contar con asesoría jurídica especializada.</li>
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
          El cobro jurídico sigue siendo una de las herramientas más importantes
          para recuperar obligaciones vencidas, pero no está libre de riesgos.
          Analizar previamente la situación del deudor, la calidad de las
          pruebas y los costos del proceso permite tomar decisiones más
          estratégicas y aumentar las probabilidades de recuperación.
        </motion.p>
      </motion.article>
    </main>
  );
}
