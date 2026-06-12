"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function SecuenciasCobranza() {
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
          Automatización de Cobranza
        </motion.span>

        <h1>
          Secuencias automáticas de cobranza: cómo recuperar cartera de forma
          eficiente
        </h1>

        <p className={styles.intro}>
          Las secuencias automáticas de cobranza permiten ejecutar acciones de
          seguimiento de manera programada según el comportamiento de cada
          cliente. Gracias a la automatización, las empresas pueden reducir la
          morosidad, mejorar la recuperación de cartera y optimizar el tiempo de
          sus equipos de cobranza.
        </p>

        <h2>¿Qué son las secuencias automáticas de cobranza?</h2>

        <p>
          Son flujos de trabajo diseñados para enviar comunicaciones y ejecutar
          tareas de seguimiento automáticamente cuando se cumplen determinadas
          condiciones, como una factura próxima a vencer o una obligación en
          mora.
        </p>

        <p>
          Estas secuencias pueden incluir correos electrónicos, mensajes de
          WhatsApp, llamadas programadas, recordatorios y alertas internas para
          los gestores de cartera.
        </p>

        <h2>Beneficios de implementar secuencias automáticas</h2>

        <ul>
          <li>Mayor consistencia en la gestión de cobranza.</li>
          <li>Reducción de tareas manuales.</li>
          <li>Seguimiento oportuno a clientes.</li>
          <li>Disminución de la morosidad.</li>
          <li>Mejor experiencia para el cliente.</li>
          <li>Mayor productividad operativa.</li>
        </ul>

        <h2>Ejemplo de secuencia preventiva</h2>

        <p>
          El objetivo es recordar al cliente su obligación antes del
          vencimiento.
        </p>

        <ol>
          <li>7 días antes: correo recordatorio.</li>
          <li>3 días antes: mensaje de WhatsApp.</li>
          <li>1 día antes: segundo recordatorio.</li>
          <li>Día de vencimiento: notificación automática.</li>
        </ol>

        <h2>Ejemplo de secuencia para cartera vencida</h2>

        <ol>
          <li>Día 1 de mora: correo de notificación.</li>
          <li>Día 5 de mora: mensaje de seguimiento.</li>
          <li>Día 10 de mora: llamada de cobranza.</li>
          <li>Día 20 de mora: propuesta de acuerdo de pago.</li>
          <li>Día 30 de mora: escalamiento del caso.</li>
        </ol>

        <h2>Canales que pueden automatizarse</h2>

        <ul>
          <li>Correo electrónico.</li>
          <li>WhatsApp empresarial.</li>
          <li>SMS.</li>
          <li>Llamadas automatizadas.</li>
          <li>Notificaciones internas.</li>
          <li>CRM y software de cartera.</li>
        </ul>

        <h2>Segmentación de clientes</h2>

        <p>
          Las mejores secuencias de cobranza se adaptan al perfil de cada
          cliente. No todos los deudores requieren el mismo tratamiento.
        </p>

        <ul>
          <li>Clientes corporativos.</li>
          <li>Clientes frecuentes.</li>
          <li>Clientes de alto riesgo.</li>
          <li>Clientes con acuerdos vigentes.</li>
          <li>Clientes con historial de mora.</li>
        </ul>

        <h2>Indicadores para medir resultados</h2>

        <ul>
          <li>Porcentaje de recuperación.</li>
          <li>Tasa de apertura de correos.</li>
          <li>Tasa de respuesta.</li>
          <li>Reducción de morosidad.</li>
          <li>Cumplimiento de acuerdos de pago.</li>
          <li>Tiempo promedio de recaudo.</li>
        </ul>

        <h2>Errores frecuentes</h2>

        <ul>
          <li>Enviar demasiadas comunicaciones.</li>
          <li>No segmentar clientes.</li>
          <li>Automatizar procesos sin estrategia.</li>
          <li>No medir resultados.</li>
          <li>Utilizar mensajes genéricos.</li>
        </ul>

        <h2>¿Qué herramientas permiten crear secuencias?</h2>

        <p>
          Actualmente existen CRM, software de cartera y plataformas de
          automatización que permiten diseñar flujos de cobranza personalizados,
          programar comunicaciones y monitorear resultados en tiempo real.
        </p>

        <h2>Conclusión</h2>

        <p>
          Las secuencias automáticas de cobranza permiten realizar seguimientos
          oportunos, mejorar la recuperación de cartera y optimizar recursos.
          Cuando se combinan con segmentación, automatización y análisis de
          indicadores, se convierten en una herramienta fundamental para la
          gestión financiera empresarial.
        </p>
      </motion.article>
    </main>
  );
}
