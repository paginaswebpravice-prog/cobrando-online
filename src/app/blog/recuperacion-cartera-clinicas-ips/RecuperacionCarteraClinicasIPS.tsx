"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCarteraClinicasIPS() {
  return (
    <>
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
            Sector Salud
          </motion.span>

          {/*  HERO  */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Recuperación de cartera para clínicas, IPS y sector salud en
            Colombia
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            La recuperación de cartera en clínicas, IPS, hospitales y empresas
            del sector salud en Colombia se ha convertido en una necesidad
            financiera crítica. Los retrasos de pago por parte de EPS,
            aseguradoras, pacientes y entidades contratantes generan problemas
            de liquidez que afectan directamente la operación médica,
            administrativa y financiera de las instituciones.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            En ciudades como Bogotá, Medellín, Cali, Barranquilla y Bucaramanga,
            muchas IPS enfrentan altos niveles de cartera vencida debido a
            glosas, devoluciones, demoras administrativas y procesos de
            auditoría extensos. Por esta razón, implementar estrategias
            efectivas de recuperación de cartera y cobranza especializada es
            fundamental para garantizar la sostenibilidad financiera de las
            organizaciones de salud.
          </motion.p>

          {/* POR QUE EL SECTOR SALUD EN COLOMBIA TIENE ALTOS NIVELES DE CARTERA VENCIDA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Por qué el sector salud en Colombia tiene altos niveles de cartera
            vencida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            El sector salud colombiano maneja procesos administrativos complejos
            que involucran auditorías médicas, validaciones de servicios,
            radicación de facturas, respuestas a glosas y conciliaciones entre
            múltiples entidades. Todo esto genera retrasos constantes en los
            pagos y acumulación de cartera.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Muchas clínicas e IPS en Bogotá y Colombia presentan dificultades
            porque no cuentan con procesos internos de seguimiento de cartera,
            indicadores financieros claros o estrategias de cobranza
            especializadas para el sector salud.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Además, cuando la cartera supera varios meses de mora, aumenta el
            riesgo de deterioro financiero, afectando pagos a proveedores,
            nómina, compra de insumos médicos y capacidad operativa.
          </motion.p>

          {/* PRINCIPALES CAUSAS DE MORA EN CLINICAS E IPS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Principales causas de mora en clínicas e IPS
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>Retrasos en pagos por parte de EPS.</li>
            <li>Glosas médicas y devoluciones administrativas.</li>
            <li>Errores en radicación de facturas.</li>
            <li>Falta de seguimiento de cuentas por cobrar.</li>
            <li>Demoras en auditorías médicas.</li>
            <li>Ausencia de políticas claras de cobranza.</li>
            <li>Procesos manuales y falta de automatización.</li>
            <li>Acumulación de cartera superior a 180 o 360 días.</li>
          </motion.ul>

          {/* ESTRATEGIAS EFECTIVAS DE RECUPERACION DE CARTERA PARA CLINICAS E IPS EN BOGOTA Y COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Estrategias efectivas de recuperación de cartera para clínicas e IPS
            en Bogotá y Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Una gestión eficiente de cartera en el sector salud requiere
            procesos organizados, tecnología, seguimiento permanente y análisis
            financiero. Las IPS y clínicas que implementan modelos de cobranza
            estructurados suelen reducir significativamente los niveles de mora.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>Seguimiento constante de facturas radicadas.</li>
            <li>Control y respuesta rápida de glosas.</li>
            <li>Clasificación de cartera por antigüedad.</li>
            <li>Priorización de cuentas críticas.</li>
            <li>Automatización de procesos de cobranza.</li>
            <li>Indicadores de recaudo y mora.</li>
            <li>Negociación estratégica de acuerdos de pago.</li>
            <li>Actualización permanente de estados de cartera.</li>
            <li>Escalamiento oportuno a cobro prejurídico.</li>
            <li>Acciones jurídicas cuando sea necesario.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cómo mejorar el flujo de caja en una IPS o clínica
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mejorar el flujo de caja en el sector salud implica reducir tiempos
            de recaudo y evitar acumulación de cartera vencida. Para lograrlo es
            importante tener procesos administrativos eficientes y monitorear
            permanentemente las cuentas por cobrar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Muchas clínicas en Bogotá y Colombia fortalecen su liquidez mediante
            equipos especializados de recuperación de cartera, conciliación con
            EPS y automatización de reportes financieros.
          </motion.p>

          {/* CUANDO INICIAR COBRO PREJURÍDICO O JURÍDICO EN EL SECTOR SALUD */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cuándo iniciar cobro prejurídico o jurídico en el sector salud
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cuando las gestiones administrativas no generan resultados positivos
            y la deuda continúa aumentando, puede ser necesario iniciar procesos
            de cobro prejurídico o jurídico. Esto es especialmente importante
            cuando existen riesgos de prescripción o incumplimientos reiterados.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Actuar rápidamente ayuda a proteger los recursos financieros de la
            institución y aumenta las probabilidades de recuperación efectiva de
            la cartera vencida.
          </motion.p>

          {/* ERRORES COMUNES EN LA RECUPERACIÓN DE CARTERA DEL SECTOR SALUD */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Errores comunes en la recuperación de cartera del sector salud
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>No responder glosas oportunamente.</li>
            <li>No actualizar estados de cartera.</li>
            <li>Esperar demasiado para cobrar.</li>
            <li>No documentar correctamente los soportes.</li>
            <li>Falta de indicadores financieros.</li>
            <li>No automatizar procesos de seguimiento.</li>
            <li>No priorizar cartera crítica.</li>
            <li>Iniciar acciones legales demasiado tarde.</li>
          </motion.ul>

          {/* BENEFICIOS DE UNA GESTIÓN PROFESIONAL DE CARTERA EN CLÍNICAS E IPS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Beneficios de una gestión profesional de cartera en clínicas e IPS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Implementar procesos profesionales de recuperación de cartera ayuda
            a mejorar la liquidez, reducir riesgos financieros y garantizar la
            continuidad operativa de las instituciones médicas.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>Mayor flujo de caja.</li>
            <li>Reducción de cartera vencida.</li>
            <li>Mejor control financiero.</li>
            <li>Mayor estabilidad operativa.</li>
            <li>Disminución del riesgo financiero.</li>
            <li>Mayor capacidad de inversión.</li>
            <li>Optimización administrativa.</li>
          </motion.ul>

          {/* PREGUNTAS FRECUENTES SOBRE RECUPERACIÓN DE CARTERA EN IPS Y CLÍNICAS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre recuperación de cartera en IPS y clínicas
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Qué es la recuperación de cartera en salud?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Es el proceso mediante el cual clínicas, IPS y hospitales gestionan
            el cobro de facturas y obligaciones pendientes para mejorar la
            liquidez y reducir la mora.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo reducir la cartera vencida en una IPS?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mediante seguimiento constante, control de glosas, automatización de
            procesos y acciones rápidas frente a cuentas en mora.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cuándo acudir a cobro jurídico en el sector salud?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cuando las negociaciones y gestiones administrativas no generan
            resultados positivos o existe riesgo de prescripción de la deuda.
          </motion.p>

          {/* CONCLUSION: COMO MEJORAR LA RECUPERACION DE CARTERA EN CLINICAS E IPS EN COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Conclusión: cómo mejorar la recuperación de cartera en clínicas e
            IPS en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera para clínicas, IPS y empresas del sector
            salud en Colombia requiere estrategias organizadas, seguimiento
            permanente y acciones oportunas. Implementar procesos de cobranza
            especializados ayuda a reducir la mora, mejorar el flujo de caja y
            fortalecer la estabilidad financiera de las instituciones médicas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            En ciudades como Bogotá, donde el volumen de operaciones médicas es
            elevado, contar con estrategias efectivas de recuperación de cartera
            puede marcar una diferencia importante en la sostenibilidad y
            crecimiento de clínicas, hospitales e IPS.
          </motion.p>
        </motion.article>
      </main>
    </>
  );
}
