"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraTecnologia() {
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
          Sector Tecnología
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cartera en empresas tecnológicas: cómo gestionar la cobranza en
          compañías SaaS y de tecnología
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Las empresas tecnológicas suelen operar bajo modelos de suscripción,
          licenciamiento, servicios en la nube, desarrollo de software y
          consultoría especializada. Estos modelos generan desafíos particulares
          en la gestión de cartera, especialmente cuando existen contratos
          recurrentes y pagos periódicos que deben administrarse de forma
          eficiente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cómo se genera la cartera en empresas tecnológicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La cartera suele originarse por servicios de software como servicio
          (SaaS), licencias empresariales, soporte técnico, mantenimiento,
          desarrollos a medida, consultorías y contratos tecnológicos con pagos
          diferidos o recurrentes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales causas de mora en el sector tecnológico
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Retrasos administrativos en clientes corporativos.</li>
          <li>Disputas sobre entregables o alcance de proyectos.</li>
          <li>Falta de seguimiento a renovaciones de contratos.</li>
          <li>Errores en procesos de facturación electrónica.</li>
          <li>Cancelaciones o cambios en los servicios contratados.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estrategias de cobranza para empresas SaaS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La automatización de recordatorios, los cobros recurrentes, la
          integración con pasarelas de pago y la segmentación de clientes según
          comportamiento de pago permiten reducir significativamente los niveles
          de morosidad y mejorar la recuperación de cartera.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Importancia de los contratos y acuerdos comerciales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los contratos bien estructurados facilitan la gestión de cobro,
          establecen claramente obligaciones, plazos de pago y mecanismos de
          incumplimiento, reduciendo riesgos financieros para la empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Indicadores clave para medir la cartera tecnológica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Algunas métricas importantes son el DSO (Days Sales Outstanding),
          porcentaje de renovación de clientes, cartera vencida, tasa de
          recuperación y porcentaje de facturas pagadas dentro de los plazos
          establecidos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beneficios de una gestión eficiente de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una cartera saludable permite mantener el flujo de caja, financiar el
          crecimiento de la empresa, invertir en innovación y reducir la
          dependencia de créditos externos para sostener la operación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en empresas tecnológicas requiere procesos
          automatizados, seguimiento constante y estrategias alineadas con los
          modelos de negocio digitales. Una adecuada gestión financiera permite
          mejorar la rentabilidad y garantizar un crecimiento sostenible.
        </motion.p>
      </motion.article>
    </main>
  );
}
