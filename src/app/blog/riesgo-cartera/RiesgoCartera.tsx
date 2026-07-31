"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RiesgoCartera() {
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
          Finanzas y Cartera
        </motion.span>

        {/* HERO  */}
        <h1>
          Riesgo de cartera: cómo evaluar el riesgo financiero de tus clientes
        </h1>

        <p className={styles.intro}>
          El riesgo de cartera representa la probabilidad de que una empresa no
          logre recuperar total o parcialmente las cuentas por cobrar generadas
          por ventas a crédito. Evaluar este riesgo permite tomar mejores
          decisiones comerciales, proteger la liquidez y reducir pérdidas
          financieras.
        </p>

        {/* QUE ES EL RIESGO DE CARTERA */}
        <h2>¿Qué es el riesgo de cartera?</h2>

        <p>
          El riesgo de cartera es el nivel de incertidumbre asociado al pago de
          las obligaciones por parte de los clientes. A medida que aumenta la
          mora o disminuye la capacidad de pago del deudor, también aumenta la
          probabilidad de incumplimiento.
        </p>

        <p>
          Todas las empresas que venden a crédito están expuestas a este riesgo,
          independientemente de su tamaño o sector económico.
        </p>

        {/* IDENTIFICAR UN RIESGO DE CARTERA ANTES DE QUE APAREZCA LA MORA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Cómo identificar un riesgo de cartera antes de que aparezca la mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Uno de los mayores errores de las empresas consiste en esperar hasta
          que una factura vence para evaluar el riesgo de un cliente. La gestión
          moderna de cartera busca identificar señales de alerta desde el
          momento en que se solicita un crédito comercial, permitiendo reducir
          significativamente la probabilidad de incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Analizar la capacidad de pago, el comportamiento financiero y el
          historial de cumplimiento permite tomar decisiones más seguras antes
          de aprobar ventas a crédito.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Consultar antecedentes comerciales.</li>
          <li>Evaluar referencias financieras.</li>
          <li>Analizar la estabilidad del negocio.</li>
          <li>Revisar niveles de endeudamiento.</li>
          <li>Verificar comportamiento histórico de pago.</li>
        </motion.ul>

        {/* CLASIFICACION DE CLIENTES SEGUN SU NIVEL DE RIESGO CREDITICIO */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Clasificación de clientes según su nivel de riesgo crediticio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          No todos los clientes representan el mismo nivel de riesgo.
          Clasificarlos permite establecer políticas de crédito diferenciadas y
          asignar recursos de cobranza de forma más eficiente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Clientes de bajo riesgo.</li>
          <li>Clientes de riesgo moderado.</li>
          <li>Clientes con riesgo alto.</li>
          <li>Clientes críticos o reincidentes.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Esta clasificación ayuda a definir límites de crédito, plazos de pago,
          garantías adicionales y frecuencia de seguimiento para cada tipo de
          cliente.
        </motion.p>

        {/* SENALES TEMPRANAS QUE INDICAN UN AUMENTO DEL RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Señales tempranas que indican un aumento del riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Existen comportamientos que normalmente aparecen semanas o incluso
          meses antes de que un cliente incumpla definitivamente sus
          obligaciones. Detectarlos a tiempo permite actuar antes de que la
          deuda se convierta en cartera vencida.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Solicitudes frecuentes de ampliación de plazo.</li>
          <li>Pagos parciales constantes.</li>
          <li>Disminución de la comunicación.</li>
          <li>Cambios frecuentes de representantes.</li>
          <li>Problemas financieros públicos.</li>
          <li>Retrasos repetitivos en pequeñas obligaciones.</li>
          <li>Incremento del endeudamiento.</li>
        </motion.ul>

        {/* PORQUE ES IMPORTANTE MEDIR EL RIESGO DE CARTERA */}
        <h2>¿Por qué es importante medir el riesgo de cartera?</h2>

        <p>
          La evaluación permanente de la cartera permite anticipar problemas de
          liquidez y tomar acciones preventivas antes de que las cuentas se
          conviertan en pérdidas.
        </p>

        <ul>
          <li>Reducir la cartera vencida.</li>
          <li>Identificar clientes de alto riesgo.</li>
          <li>Mejorar la toma de decisiones comerciales.</li>
          <li>Proteger el flujo de caja.</li>
          <li>Disminuir pérdidas por incobrabilidad.</li>
        </ul>

        {/* DIFERENCIAS ENTRE RIESGO DE CARTERA Y CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Diferencias entre riesgo de cartera y cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque ambos conceptos suelen confundirse, representan situaciones
          distintas. El riesgo de cartera evalúa la probabilidad futura de
          incumplimiento, mientras que la cartera vencida corresponde a
          obligaciones cuyo plazo de pago ya fue superado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una adecuada evaluación del riesgo busca precisamente evitar que las
          cuentas por cobrar terminen convirtiéndose en cartera vencida.
        </motion.p>

        {/* FACTORES QUE INFLUYEN EN EL RIESGO DE CARTERA */}
        <h2>Factores que influyen en el riesgo de cartera</h2>

        <p>
          Existen diversos elementos que pueden aumentar o disminuir el riesgo
          asociado a las cuentas por cobrar.
        </p>

        <ul>
          <li>Historial de pagos del cliente.</li>
          <li>Capacidad financiera.</li>
          <li>Nivel de endeudamiento.</li>
          <li>Antigüedad de la relación comercial.</li>
          <li>Condiciones económicas del sector.</li>
          <li>Tiempo de mora acumulado.</li>
          <li>Concentración de cartera en pocos clientes.</li>
        </ul>

        {/* COMO REDUCIR EL RIESGO DE CARTERA MEDIANTE POLITICAS DE CREDITO */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cómo reducir el riesgo de cartera mediante políticas de crédito
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Las empresas con menores índices de morosidad normalmente cuentan con
          políticas de crédito claramente definidas. Estas políticas permiten
          establecer criterios objetivos antes de aprobar nuevas ventas a
          crédito.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Definir límites máximos de crédito.</li>
          <li>Establecer plazos según el perfil del cliente.</li>
          <li>Solicitar garantías cuando sea necesario.</li>
          <li>Actualizar periódicamente la información financiera.</li>
          <li>Suspender temporalmente nuevos créditos cuando exista mora.</li>
        </motion.ul>

        {/* HERRAMIENTAS TECNOLOGICAS PARA CONTROLAR EL RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Herramientas tecnológicas para controlar el riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Actualmente existen soluciones tecnológicas que permiten monitorear el
          riesgo de las cuentas por cobrar en tiempo real. La automatización
          facilita el seguimiento permanente y genera alertas antes de que
          aumente la morosidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Software especializado de cartera.</li>
          <li>CRM con seguimiento comercial.</li>
          <li>Alertas automáticas de vencimientos.</li>
          <li>Dashboards financieros.</li>
          <li>Reportes de antigüedad de cartera.</li>
          <li>Indicadores de recuperación.</li>
        </motion.ul>

        {/* INDICADORES PARA MEDIR EL RIESGO DE CARTERA */}
        <h2>Indicadores para medir el riesgo de cartera</h2>

        <p>
          Las empresas suelen utilizar indicadores financieros para monitorear
          el comportamiento de sus cuentas por cobrar y detectar señales de
          alerta temprana.
        </p>

        <ul>
          <li>Porcentaje de cartera vencida.</li>
          <li>Índice de morosidad.</li>
          <li>DSO (Days Sales Outstanding).</li>
          <li>Rotación de cartera.</li>
          <li>Antigüedad de cartera.</li>
          <li>Porcentaje de recuperación.</li>
        </ul>

        {/* COMO INTERPRETAR LOS INDICADORES DE RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cómo interpretar los indicadores de riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Medir el riesgo de cartera no consiste únicamente en calcular
          indicadores, sino en interpretarlos correctamente para tomar
          decisiones oportunas. Un incremento en la antigüedad de cartera o en
          el porcentaje de cuentas vencidas puede convertirse en una alerta
          temprana que permita ajustar las políticas de crédito antes de afectar
          el flujo de caja de la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Lo recomendable es analizar la evolución mensual de los indicadores,
          comparar los resultados con periodos anteriores y detectar tendencias
          que permitan anticipar posibles incumplimientos.
        </motion.p>

        {/* COMO REDUCIR EL RIESGO DE CARTERA */}
        <h2>Cómo reducir el riesgo de cartera</h2>

        <p>
          La mejor estrategia consiste en combinar acciones preventivas con una
          gestión activa de cobranza. Cuanto antes se detecten posibles
          incumplimientos, mayores serán las probabilidades de recuperación.
        </p>

        <ul>
          <li>Realizar análisis crediticio antes de vender.</li>
          <li>Definir políticas claras de crédito.</li>
          <li>Monitorear permanentemente la cartera.</li>
          <li>Implementar recordatorios de pago.</li>
          <li>Negociar acuerdos oportunamente.</li>
          <li>Aplicar estrategias de cobranza escalonadas.</li>
        </ul>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Checklist para evaluar el riesgo de un cliente antes de otorgar
          crédito
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Antes de aprobar una venta a crédito conviene verificar varios
          aspectos que ayudan a disminuir el riesgo de incumplimiento y mejorar
          la recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>✔ Historial de pagos.</li>
          <li>✔ Referencias comerciales.</li>
          <li>✔ Información financiera reciente.</li>
          <li>✔ Nivel de endeudamiento.</li>
          <li>✔ Antigüedad del negocio.</li>
          <li>✔ Capacidad de generación de ingresos.</li>
          <li>✔ Cupo de crédito solicitado.</li>
          <li>✔ Concentración de ventas.</li>
          <li>✔ Garantías disponibles.</li>
          <li>✔ Riesgos propios del sector económico.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Realizar este análisis antes de aprobar un crédito comercial ayuda a
          reducir pérdidas, proteger el flujo de caja y fortalecer la
          estabilidad financiera de la empresa.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Consecuencias de no controlar el riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando una empresa no monitorea adecuadamente el comportamiento de sus
          cuentas por cobrar, los problemas financieros suelen aparecer de forma
          gradual. Lo que inicialmente parece un pequeño retraso puede terminar
          convirtiéndose en una cartera difícil de recuperar.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Pérdida de liquidez.</li>
          <li>Incremento de la cartera vencida.</li>
          <li>Mayores costos de cobranza.</li>
          <li>Necesidad de acudir a procesos judiciales.</li>
          <li>Dificultades para cumplir obligaciones financieras.</li>
          <li>Disminución de la rentabilidad.</li>
          <li>Mayor riesgo de incobrabilidad.</li>
        </motion.ul>

        {/* ERRORES COMUNES AL EVALUAR EL RIESGO DE CARTERA */}
        <h2>Errores comunes al evaluar el riesgo</h2>

        <ul>
          <li>Otorgar crédito sin análisis previo.</li>
          <li>Depender de pocos clientes grandes.</li>
          <li>No monitorear indicadores financieros.</li>
          <li>Esperar demasiado para iniciar la cobranza.</li>
          <li>No actualizar la información financiera del cliente.</li>
        </ul>

        {/* BUENAS PRACTICAS PARA DISMINUIR EL RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Buenas prácticas para disminuir el riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Las empresas con menores índices de morosidad suelen aplicar procesos
          preventivos antes, durante y después de otorgar un crédito comercial.
          Estas acciones permiten disminuir considerablemente el riesgo
          financiero.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Actualizar permanentemente la información del cliente.</li>
          <li>Establecer límites de crédito.</li>
          <li>Solicitar garantías cuando sea necesario.</li>
          <li>Implementar recordatorios automáticos.</li>
          <li>Monitorear indicadores de cartera cada mes.</li>
          <li>Capacitar al equipo comercial sobre análisis de riesgo.</li>
          <li>Realizar seguimiento inmediato a las primeras demoras.</li>
        </motion.ul>

        {/* ¿QUE ÁREAS DE LA EMPRESA PARTICIPAN EN LA GESTIÓN DEL RIESGO DE CARTERA? */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué áreas de la empresa participan en la gestión del riesgo de
          cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El control del riesgo no depende únicamente del área de cartera. Una
          gestión efectiva requiere la participación coordinada de diferentes
          departamentos que aportan información clave para reducir el riesgo de
          incumplimiento.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Área comercial.</li>
          <li>Departamento financiero.</li>
          <li>Contabilidad.</li>
          <li>Cartera y cobranza.</li>
          <li>Gerencia financiera.</li>
          <li>Asesoría jurídica cuando sea necesaria.</li>
        </motion.ul>

        {/* ¿CUÁNDO DEBE EVALUARSE EL RIESGO DE CARTERA? */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Cada cuánto debe evaluarse el riesgo de cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La evaluación del riesgo debe realizarse de manera periódica y no
          únicamente cuando aparecen problemas de pago. Las empresas con mayor
          estabilidad financiera acostumbran revisar su cartera mensualmente y
          efectuar análisis adicionales cuando se presentan cambios importantes
          en el comportamiento de un cliente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Esta práctica facilita la detección temprana de riesgos, mejora la
          toma de decisiones y permite adoptar estrategias preventivas antes de
          que aumente la cartera vencida.
        </motion.p>

        {/* RECOMENDACIONES PARA FORTALECER LA GESTIÓN DEL RIESGO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Recomendaciones para fortalecer la gestión del riesgo de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una estrategia sólida de administración del riesgo combina análisis
          financiero, seguimiento continuo y procesos eficientes de cobranza. La
          clave consiste en actuar antes de que aparezca el incumplimiento y no
          únicamente cuando la deuda ya presenta varios meses de mora.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Definir políticas claras de crédito.</li>
          <li>Actualizar periódicamente la información financiera.</li>
          <li>Automatizar alertas de vencimiento.</li>
          <li>Clasificar clientes según su nivel de riesgo.</li>
          <li>Implementar indicadores de desempeño.</li>
          <li>Revisar la cartera de manera mensual.</li>
          <li>Documentar todas las gestiones de cobranza.</li>
          <li>Escalar oportunamente los casos críticos.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una administración preventiva permite reducir pérdidas, mejorar la
          liquidez y fortalecer la estabilidad financiera de la empresa en el
          largo plazo.
        </motion.p>

        {/* CONCLUSION */}
        <h2>Conclusión</h2>

        <p>
          El riesgo de cartera es un factor crítico para la estabilidad
          financiera de cualquier empresa. Medirlo adecuadamente permite
          identificar amenazas, mejorar la recuperación de cartera y tomar
          decisiones más seguras al otorgar crédito. Una gestión preventiva
          reduce significativamente la probabilidad de pérdidas económicas.
        </p>
      </motion.article>
    </main>
  );
}
