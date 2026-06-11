"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DeudorSinBienesQueHacer() {
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
          Qué hacer si el deudor no tiene bienes embargables en Colombia
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uno de los escenarios más frustrantes para cualquier acreedor ocurre
          cuando existe una deuda clara y exigible, pero el deudor aparentemente
          no posee bienes que puedan ser embargados. Aunque esto puede
          dificultar la recuperación del dinero, no significa necesariamente que
          la deuda esté perdida o que no existan alternativas legales.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qué significa que un deudor no tenga bienes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando se afirma que un deudor no tiene bienes, generalmente significa
          que no existen propiedades, vehículos, cuentas bancarias u otros
          activos registrados a su nombre que permitan realizar un embargo
          efectivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sin embargo, es importante diferenciar entre un deudor que realmente
          carece de patrimonio y uno que simplemente no ha sido investigado de
          manera adecuada.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Verificar si realmente no existen bienes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de abandonar la recuperación de la deuda, es recomendable
          realizar una investigación patrimonial. En muchos casos pueden existir
          activos que inicialmente no fueron identificados.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Bienes inmuebles registrados.</li>
          <li>Vehículos o motocicletas.</li>
          <li>Cuentas bancarias.</li>
          <li>Salarios embargables.</li>
          <li>Participaciones en empresas.</li>
          <li>Contratos o ingresos periódicos.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Intentar una negociación o acuerdo de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando no existen bienes suficientes para respaldar la deuda, una
          alternativa práctica consiste en negociar un acuerdo de pago que
          permita recuperar el dinero gradualmente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas veces el deudor sí tiene capacidad de generar ingresos futuros,
          aunque no disponga actualmente de activos embargables.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Iniciar acciones judiciales puede seguir siendo útil
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Incluso cuando no se identifican bienes de inmediato, un proceso
          ejecutivo puede servir para mantener vigente la reclamación y permitir
          futuras medidas cautelares si el deudor adquiere patrimonio durante el
          proceso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En algunos casos, los bienes aparecen posteriormente o se detectan
          nuevas fuentes de ingresos susceptibles de embargo.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Evitar que la deuda prescriba
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los mayores riesgos para el acreedor es dejar pasar demasiado
          tiempo sin realizar gestiones de cobro. Dependiendo del tipo de
          obligación, la deuda podría prescribir y perderse la posibilidad de
          exigir judicialmente el pago.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recomendaciones para empresas
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Actuar rápidamente ante los primeros incumplimientos.</li>
          <li>Realizar investigaciones patrimoniales periódicas.</li>
          <li>Documentar adecuadamente las obligaciones.</li>
          <li>Negociar acuerdos cuando sean viables.</li>
          <li>Buscar asesoría jurídica especializada.</li>
          <li>Evitar que transcurran los plazos de prescripción.</li>
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
          Que un deudor no tenga bienes embargables no significa que la deuda
          sea imposible de recuperar. Existen herramientas legales, acuerdos de
          pago e investigaciones patrimoniales que pueden aumentar las
          probabilidades de éxito. La clave está en actuar oportunamente y
          desarrollar una estrategia adecuada para cada caso.
        </motion.p>
      </motion.article>
    </main>
  );
}
