"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraSectorSalud() {
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
          Gestión de cartera en salud
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera sector salud: cómo recuperar pagos, controlar glosas y mejorar
          el recaudo en IPS y clínicas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La cartera en el sector salud es uno de los principales desafíos
          financieros para IPS, clínicas, hospitales y prestadores de servicios
          médicos, debido a los procesos de facturación, auditoría, glosas y
          tiempos de pago que pueden retrasar la recuperación de recursos. Una
          gestión adecuada de cartera permite mejorar el flujo de caja,
          identificar cuentas pendientes, reducir niveles de mora y fortalecer
          los procesos administrativos relacionados con el recaudo. Para lograr
          mejores resultados es fundamental implementar seguimiento permanente,
          conciliaciones oportunas, control documental y estrategias
          especializadas para recuperar pagos pendientes sin afectar las
          relaciones comerciales con otras entidades del sistema de salud.
        </motion.p>

        {/* POR QUE LA CARTERA ES CRITICA EN EL SECTOR SALUD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera en el sector salud y cómo funciona?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera en el sector salud corresponde al conjunto de valores
          pendientes de pago que tienen las instituciones prestadoras de
          servicios de salud como IPS, clínicas y hospitales por la atención
          realizada a pacientes o por los servicios prestados a otras entidades
          del sistema.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estas cuentas por cobrar pueden originarse por servicios facturados a
          EPS, aseguradoras, entidades públicas, empresas contratantes o
          particulares. Debido a la complejidad del sector, el proceso de
          recuperación puede verse afectado por auditorías, validaciones,
          glosas, devoluciones y diferencias administrativas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, una adecuada gestión de cartera en salud no consiste
          únicamente en solicitar pagos pendientes, sino en controlar cada etapa
          del ciclo de facturación, identificar riesgos oportunamente y
          establecer procesos que permitan mejorar el recaudo de manera
          constante.
        </motion.p>

        {/* PRINCIPALES CAUSAS DE CARTERA VENCIDA EN SALUD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué aumenta la cartera vencida en IPS y clínicas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida en el sector salud normalmente no tiene una única
          causa. En la mayoría de los casos es el resultado de procesos
          administrativos, diferencias en la facturación, retrasos contractuales
          o tiempos prolongados de auditoría entre las entidades involucradas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Identificar el origen del problema permite priorizar las acciones de
          recuperación, reducir los tiempos de recaudo y evitar que las cuentas
          continúen envejeciendo hasta convertirse en obligaciones de difícil
          cobro.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Glosas parciales o totales sobre las cuentas médicas.</li>
          <li>Devoluciones por inconsistencias en la facturación.</li>
          <li>Retrasos en auditorías médicas y financieras.</li>
          <li>Diferencias en la interpretación de contratos.</li>
          <li>Radicación incompleta de soportes documentales.</li>
          <li>Procesos internos lentos para aprobación de pagos.</li>
          <li>Incumplimiento de los cronogramas de pago acordados.</li>
          <li>Falta de seguimiento permanente a las cuentas por cobrar.</li>
          <li>Ausencia de conciliaciones periódicas entre las partes.</li>
          <li>
            Acumulación de cartera antigua sin estrategias de recuperación.
          </li>
        </motion.ul>

        {/* COMO MEJORAR LA RECUPERACION DE CARTERA EN EL SECTOR SALUD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo mejorar la recuperación de cartera en el sector salud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en IPS, clínicas y demás prestadores de
          servicios de salud requiere una estrategia integral que combine
          control documental, seguimiento permanente, comunicación con las
          entidades responsables del pago y análisis continuo de la antigüedad
          de las cuentas por cobrar. Esperar a que una factura acumule varios
          meses de mora normalmente reduce las probabilidades de recaudo y
          aumenta los costos administrativos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión eficiente comienza desde el momento en que se presta el
          servicio. La correcta elaboración de la factura, la validación de
          soportes, la radicación dentro de los plazos establecidos y el
          seguimiento de cada etapa del proceso permiten reducir incidencias que
          posteriormente pueden convertirse en glosas, devoluciones o retrasos
          en el pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          También resulta recomendable clasificar la cartera según su
          antigüedad, entidad responsable, valor económico y nivel de riesgo.
          Esta segmentación facilita priorizar las cuentas con mayor impacto
          financiero y asignar recursos de recuperación de manera más eficiente.
        </motion.p>

        <motion.h3>Acciones recomendadas para optimizar el recaudo</motion.h3>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Verificar la calidad de la facturación antes de su radicación.
          </li>
          <li>
            Mantener actualizados los soportes clínicos y administrativos.
          </li>
          <li>Realizar seguimiento periódico al estado de cada cuenta.</li>
          <li>Atender oportunamente glosas y devoluciones.</li>
          <li>
            Implementar conciliaciones periódicas con las entidades pagadoras.
          </li>
          <li>
            Automatizar alertas sobre vencimientos y tiempos de respuesta.
          </li>
          <li>Analizar indicadores de recaudo para detectar riesgos.</li>
          <li>Escalar rápidamente las cuentas con mayor antigüedad.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando estas prácticas forman parte del proceso habitual de la
          institución, es posible reducir significativamente la cartera vencida,
          mejorar el flujo de caja y disminuir el tiempo promedio de
          recuperación de los recursos.
        </motion.p>

        {/* ESTRATEGIAS PARA MEJORAR LA RECUPERACIÓN DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para mejorar la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación efectiva requiere seguimiento constante de cuentas,
          conciliaciones periódicas, validación temprana de facturas y gestión
          activa de glosas. Además, es recomendable implementar herramientas
          tecnológicas que permitan controlar cada etapa del proceso.
        </motion.p>

        {/* INDICADORES CLAVE PARA CONTROLAR LA CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que permiten medir la gestión de cartera en IPS y clínicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una adecuada administración de cartera requiere medir permanentemente
          el desempeño del proceso de recaudo. Los indicadores permiten
          identificar tendencias, detectar riesgos financieros y tomar
          decisiones antes de que la mora afecte la liquidez de la institución.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Analizar estos indicadores de forma mensual facilita establecer metas,
          optimizar recursos y mejorar la recuperación de cuentas pendientes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Días promedio de recaudo (DSO):</strong> mide el tiempo que
            tarda la institución en recuperar los valores facturados.
          </li>

          <li>
            <strong>Porcentaje de cartera vencida:</strong> determina qué parte
            de las cuentas por cobrar ya superó el plazo de pago.
          </li>

          <li>
            <strong>Antigüedad de cartera:</strong> clasifica las cuentas por
            rangos de mora para facilitar su priorización.
          </li>

          <li>
            <strong>Valor de glosas pendientes:</strong> permite conocer el
            impacto de las objeciones sobre el recaudo.
          </li>

          <li>
            <strong>Porcentaje de recuperación mensual:</strong> muestra la
            efectividad de las estrategias implementadas.
          </li>

          <li>
            <strong>Rotación de cartera:</strong> ayuda a evaluar la velocidad
            con la que las cuentas por cobrar se convierten en efectivo.
          </li>

          <li>
            <strong>Cartera por entidad pagadora:</strong> identifica cuáles
            EPS, aseguradoras o contratantes concentran el mayor riesgo
            financiero.
          </li>

          <li>
            <strong>Valor recuperado frente al valor facturado:</strong> permite
            medir la eficiencia global del proceso de cobranza.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El seguimiento continuo de estos indicadores ayuda a detectar
          desviaciones, priorizar acciones de recuperación y fortalecer la
          sostenibilidad financiera de las IPS, clínicas y demás prestadores de
          servicios de salud.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que permiten medir la gestión de cartera en IPS y clínicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una adecuada administración de cartera requiere medir permanentemente
          el desempeño del proceso de recaudo. Los indicadores permiten
          identificar tendencias, detectar riesgos financieros y tomar
          decisiones antes de que la mora afecte la liquidez de la institución.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Analizar estos indicadores de forma mensual facilita establecer metas,
          optimizar recursos y mejorar la recuperación de cuentas pendientes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Días promedio de recaudo (DSO):</strong> mide el tiempo que
            tarda la institución en recuperar los valores facturados.
          </li>
          <li>
            <strong>Porcentaje de cartera vencida:</strong> determina qué parte
            de las cuentas por cobrar ya superó el plazo de pago.
          </li>
          <li>
            <strong>Antigüedad de cartera:</strong> clasifica las cuentas por
            rangos de mora para facilitar su priorización.
          </li>
          <li>
            <strong>Valor de glosas pendientes:</strong> permite conocer el
            impacto de las objeciones sobre el recaudo.
          </li>
          <li>
            <strong>Porcentaje de recuperación mensual:</strong> muestra la
            efectividad de las estrategias implementadas.
          </li>
          <li>
            <strong>Rotación de cartera:</strong> ayuda a evaluar la velocidad
            con la que las cuentas por cobrar se convierten en efectivo.
          </li>
          <li>
            <strong>Cartera por entidad pagadora:</strong> identifica cuáles
            EPS, aseguradoras o contratantes concentran el mayor riesgo
            financiero.
          </li>
          <li>
            <strong>Valor recuperado frente al valor facturado:</strong> permite
            medir la eficiencia global del proceso de cobranza.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El seguimiento continuo de estos indicadores ayuda a detectar
          desviaciones, priorizar acciones de recuperación y fortalecer la
          sostenibilidad financiera de las IPS, clínicas y demás prestadores de
          servicios de salud.
        </motion.p>

        {/*  ERRORES QUE INCREMENTAN LA CARTERA VENCIDA EN IPS Y CLÍNICAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores que incrementan la cartera vencida en IPS y clínicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas instituciones de salud concentran sus esfuerzos en recuperar
          pagos únicamente cuando las facturas presentan varios meses de mora.
          Sin embargo, la mayoría de los problemas de cartera comienzan mucho
          antes, durante los procesos de facturación, radicación, auditoría y
          seguimiento administrativo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Detectar estos errores de manera temprana permite reducir pérdidas
          financieras, mejorar el recaudo y disminuir el volumen de cuentas con
          alto riesgo de incobrabilidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No realizar seguimiento al estado de las facturas radicadas.</li>
          <li>
            Esperar varios meses antes de contactar a la entidad responsable del
            pago.
          </li>
          <li>Presentar soportes incompletos o con inconsistencias.</li>
          <li>No responder oportunamente las glosas y devoluciones.</li>
          <li>
            Carecer de indicadores que permitan controlar la antigüedad de la
            cartera.
          </li>
          <li>
            No clasificar las cuentas por nivel de riesgo o valor económico.
          </li>
          <li>
            Depender exclusivamente de procesos manuales para hacer seguimiento.
          </li>
          <li>No documentar acuerdos, compromisos de pago y conciliaciones.</li>
          <li>
            Permitir que las cuentas permanezcan largos periodos sin gestión.
          </li>
          <li>
            No contar con protocolos definidos para escalar las cuentas
            críticas.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar procedimientos estandarizados, apoyarse en herramientas
          tecnológicas y realizar seguimiento periódico a cada cuenta permite
          disminuir significativamente estos errores y fortalecer la gestión
          integral de cartera en el sector salud.
        </motion.p>

        {/* CUANDO CONSIDERAR EL COBRO JURÍDICOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo considerar el cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando los intentos de conciliación y cobro administrativo no generan
          resultados, las instituciones pueden evaluar acciones jurídicas para
          recuperar recursos pendientes. Esta decisión debe tomarse tras
          analizar la documentación disponible, los montos adeudados y la
          viabilidad del proceso.
        </motion.p>

        {/* BENEFICIOS DE UNA GESTIÓN PROFESIONAL DE CARTERA PARA IPS Y CLÍNICAS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de una gestión profesional de cartera para IPS y clínicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar procesos organizados de gestión de cartera no solo mejora
          la recuperación de recursos pendientes. También fortalece la
          estabilidad financiera de las instituciones de salud y facilita la
          planeación de nuevas inversiones en infraestructura, talento humano y
          tecnología.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una estrategia preventiva permite disminuir la cartera vencida,
          optimizar el flujo de caja y reducir el tiempo necesario para
          recuperar los valores facturados. Además, mejora la relación con las
          entidades pagadoras al contar con procesos documentados y seguimiento
          permanente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Mayor liquidez para la operación diaria.</li>
          <li>Reducción de la cartera vencida.</li>
          <li>Menor impacto financiero por retrasos en los pagos.</li>
          <li>Mejor control de glosas y devoluciones.</li>
          <li>Priorización de cuentas con mayor riesgo.</li>
          <li>Procesos de recaudo más eficientes.</li>
          <li>Mejor capacidad para planificar inversiones.</li>
          <li>Información confiable para la toma de decisiones.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En un entorno donde los tiempos de pago pueden extenderse
          considerablemente, la gestión estratégica de cartera se convierte en
          un elemento clave para la sostenibilidad y el crecimiento de las IPS,
          clínicas y demás prestadores de servicios de salud.
        </motion.p>

        {/* CONCLUSIÓN */}
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
          La gestión de cartera en el sector salud requiere procesos
          especializados, seguimiento permanente y estrategias enfocadas en la
          recuperación eficiente de recursos. Una cartera controlada contribuye
          a la estabilidad financiera y a la prestación continua de servicios de
          calidad para los pacientes.
        </motion.p>
      </motion.article>
    </main>
  );
}
