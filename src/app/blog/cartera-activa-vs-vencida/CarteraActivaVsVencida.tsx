"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraActivaVsVencida() {
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
          Fundamentos de Cartera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera activa vs cartera vencida: diferencias y su impacto en las
          empresas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uno de los conceptos más importantes en la administración financiera
          es diferenciar la cartera activa de la cartera vencida. Aunque ambas
          representan dinero pendiente por recibir, tienen características,
          riesgos y tratamientos completamente distintos dentro de la gestión de
          cartera empresarial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera activa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera activa corresponde a todas las facturas, créditos u
          obligaciones que aún se encuentran dentro del plazo de pago acordado.
          Son cuentas por cobrar vigentes que todavía no presentan retrasos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este tipo de cartera representa ingresos futuros para la empresa y
          normalmente tiene un nivel de riesgo relativamente bajo cuando existen
          procesos adecuados de evaluación y seguimiento.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera vencida?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida está compuesta por las obligaciones cuyo plazo de
          pago ya expiró y que no han sido canceladas por el cliente. A partir
          de este momento comienza a existir mora y aumenta el riesgo de
          incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras más tiempo permanezca una cuenta en estado vencido, menor
          suele ser la probabilidad de recuperación y mayores son los costos de
          gestión asociados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales diferencias entre cartera activa y cartera vencida
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>La cartera activa está vigente; la vencida presenta mora.</li>
          <li>La cartera activa tiene menor riesgo de pérdida.</li>
          <li>
            La cartera vencida requiere gestión de cobranza especializada.
          </li>
          <li>
            La cartera activa genera ingresos proyectados más predecibles.
          </li>
          <li>
            La cartera vencida puede afectar el flujo de caja y la liquidez.
          </li>
          <li>
            La cartera vencida puede derivar en procesos prejurídicos o
            jurídicos.
          </li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo afecta cada una a la empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una cartera activa saludable permite planificar ingresos, cumplir
          obligaciones financieras y sostener el crecimiento empresarial. Por el
          contrario, una cartera vencida elevada puede generar problemas de
          liquidez, retrasos operativos y necesidad de financiamiento externo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, muchas organizaciones monitorean constantemente sus
          indicadores de cartera para identificar riesgos antes de que las
          cuentas entren en mora.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para mantener una cartera sana
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Evaluar el riesgo crediticio de los clientes.</li>
          <li>Definir políticas claras de crédito y pago.</li>
          <li>Realizar seguimiento preventivo.</li>
          <li>Automatizar recordatorios de vencimiento.</li>
          <li>Negociar rápidamente ante señales de incumplimiento.</li>
          <li>Monitorear indicadores de cartera periódicamente.</li>
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
          Comprender la diferencia entre cartera activa y cartera vencida es
          fundamental para tomar decisiones financieras acertadas. Mientras la
          cartera activa representa ingresos futuros esperados, la cartera
          vencida exige acciones de cobranza para evitar pérdidas y proteger la
          estabilidad financiera de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
