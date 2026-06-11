"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CostosCobroJuridico() {
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
          Costos de un proceso de cobro jurídico en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Antes de iniciar una demanda para recuperar una deuda, es importante
          entender los costos asociados al cobro jurídico. Muchas empresas se
          preguntan cuánto cuesta demandar a un deudor y si el valor a recuperar
          justifica el proceso. La respuesta depende de diversos factores como
          el monto adeudado, la complejidad del caso y los honorarios
          profesionales involucrados.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué gastos tiene un proceso de cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Un proceso de cobro jurídico puede generar diferentes costos durante
          su desarrollo. Aunque cada caso es distinto, normalmente existen
          gastos relacionados con abogados, notificaciones, copias,
          autenticaciones y actuaciones judiciales necesarias para impulsar el
          proceso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En algunos casos también pueden existir costos asociados a medidas
          cautelares como embargos, secuestros de bienes o investigaciones
          patrimoniales destinadas a identificar activos del deudor.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Honorarios de abogados en procesos de recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los honorarios suelen representar uno de los principales costos del
          proceso. Dependiendo de la firma o profesional contratado, el esquema
          de cobro puede variar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Honorarios fijos por iniciar el proceso.</li>
          <li>Porcentaje sobre el dinero efectivamente recuperado.</li>
          <li>Modelo mixto entre tarifa fija y comisión de éxito.</li>
          <li>Servicios adicionales de investigación patrimonial.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Vale la pena iniciar un cobro jurídico?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La decisión debe analizarse considerando el valor de la deuda, la
          capacidad económica del deudor y la probabilidad real de recuperación.
          No todas las obligaciones justifican un proceso judicial,
          especialmente cuando los costos pueden superar el beneficio esperado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, muchas empresas realizan primero una etapa de cobro
          prejurídico antes de acudir a los tribunales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Factores que influyen en el costo final del proceso
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Monto total de la deuda.</li>
          <li>Cantidad de deudores involucrados.</li>
          <li>Existencia de garantías o títulos ejecutivos.</li>
          <li>Necesidad de embargos o medidas cautelares.</li>
          <li>Duración del proceso judicial.</li>
          <li>Complejidad jurídica del caso.</li>
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
          Los costos de un proceso de cobro jurídico varían según cada caso,
          pero generalmente incluyen honorarios profesionales y gastos
          necesarios para adelantar las actuaciones judiciales. Antes de
          demandar, es recomendable realizar un análisis de viabilidad para
          determinar si la recuperación potencial compensa la inversión
          requerida.
        </motion.p>
      </motion.article>
    </main>
  );
}
