"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionSinJuicio() {
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
          Estrategias de Recuperación
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Recuperación sin procesos judiciales: alternativas efectivas para
          recuperar cartera sin demandar
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Aunque el cobro jurídico es una herramienta válida para recuperar
          deudas, no siempre representa la mejor opción. En muchos casos es
          posible recuperar cartera mediante estrategias extrajudiciales que
          permiten reducir costos, ahorrar tiempo y mantener relaciones
          comerciales positivas con los clientes.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué es la recuperación extrajudicial de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La recuperación extrajudicial consiste en realizar acciones de cobro
          sin acudir a tribunales o procesos judiciales. Su objetivo es lograr
          acuerdos voluntarios que permitan recuperar el dinero adeudado de
          manera más rápida y eficiente.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Principales alternativas al cobro judicial
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Negociación directa con el deudor.</li>
          <li>Acuerdos de pago personalizados.</li>
          <li>Planes de pago flexibles.</li>
          <li>Recordatorios automatizados de cobro.</li>
          <li>Cobranza telefónica profesional.</li>
          <li>Gestión de cobranza por WhatsApp y correo electrónico.</li>
          <li>Reestructuración de obligaciones pendientes.</li>
          <li>Mediación y conciliación entre las partes.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ventajas de recuperar cartera sin demandar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los mecanismos extrajudiciales suelen generar resultados más rápidos,
          reducir costos legales y disminuir el desgaste administrativo. Además,
          permiten preservar relaciones comerciales valiosas y facilitan futuras
          oportunidades de negocio con clientes que atraviesan dificultades
          temporales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene evitar un proceso judicial?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Generalmente es recomendable intentar primero mecanismos de
          recuperación amistosa cuando el deudor mantiene comunicación, reconoce
          la obligación y demuestra intención de pago. En estos escenarios,
          negociar suele ser más eficiente que iniciar una demanda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Señales de que podría ser necesario acudir a la vía judicial
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>El deudor evita todo tipo de comunicación.</li>
          <li>No existe voluntad de pago.</li>
          <li>Se incumplen repetidamente los acuerdos.</li>
          <li>La deuda representa un riesgo financiero importante.</li>
          <li>Existen bienes que podrían ser embargados.</li>
          <li>La documentación permite iniciar una acción ejecutiva.</li>
        </motion.ul>

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
          La recuperación sin procesos judiciales es una alternativa efectiva
          para muchas empresas que buscan mejorar sus indicadores de cartera sin
          asumir los costos y tiempos asociados a una demanda. Una estrategia
          basada en negociación, seguimiento y acuerdos bien estructurados puede
          generar excelentes resultados y aumentar la recuperación de cartera.
        </motion.p>
      </motion.article>
    </main>
  );
}
