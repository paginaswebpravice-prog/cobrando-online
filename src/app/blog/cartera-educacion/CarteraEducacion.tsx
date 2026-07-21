"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraEducacion() {
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
          Recuperación de Cartera Educativa
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cómo recuperar cartera en colegios, universidades e instituciones
          educativas sin afectar la relación con estudiantes y acudientes
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          La recuperación de cartera en instituciones educativas requiere un
          enfoque diferente al utilizado en otros sectores. Colegios,
          universidades, institutos técnicos y centros de formación deben
          equilibrar la necesidad de recaudar oportunamente las matrículas y
          demás obligaciones económicas con el objetivo de mantener una relación
          positiva con estudiantes, padres de familia y acudientes.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Una gestión de cartera organizada permite reducir la morosidad,
          mejorar el flujo de caja de la institución y disminuir el riesgo de
          acumulación de cuentas por cobrar. Para lograrlo, es fundamental
          implementar estrategias de cobranza preventiva, realizar seguimiento
          permanente a los pagos, establecer acuerdos cuando sea necesario y
          utilizar herramientas tecnológicas que faciliten el control de la
          cartera educativa.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          En esta guía encontrarás las principales estrategias para administrar
          la cartera en el sector educativo, reducir el índice de mora y
          fortalecer los procesos de recaudo sin afectar la experiencia de los
          estudiantes ni la imagen institucional.
        </motion.p>

        {/* PORQUE SE GENERA CARTERA VENCIDA EN INSTITUCIONES EDUCATIVAS */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          ¿Por qué aumenta la cartera vencida en colegios, universidades e
          instituciones educativas?
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La cartera vencida en el sector educativo suele originarse por una
          combinación de factores económicos, administrativos y de comunicación.
          En muchos casos, los retrasos en el pago de matrículas, pensiones,
          derechos académicos o servicios complementarios no obedecen únicamente
          a la falta de recursos, sino también a la ausencia de procesos
          organizados de seguimiento y recaudo.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Cuando la institución no realiza recordatorios oportunos o espera
          varios meses para contactar al estudiante o acudiente, la deuda suele
          incrementarse y las probabilidades de recuperación disminuyen. Entre
          más antigua sea la mora, mayor será el esfuerzo necesario para
          normalizar la obligación.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          También pueden influir cambios en la situación económica de las
          familias, retrasos en desembolsos de créditos educativos,
          incumplimiento de convenios empresariales, errores administrativos y
          dificultades para identificar de forma temprana a los responsables con
          mayor riesgo de mora.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>
            Dificultades económicas temporales de estudiantes o acudientes.
          </li>

          <li>
            Falta de seguimiento antes del vencimiento de las obligaciones.
          </li>

          <li>Incumplimiento de acuerdos de pago previamente establecidos.</li>

          <li>Procesos manuales de recaudo poco eficientes.</li>

          <li>Ausencia de políticas claras de cobranza institucional.</li>

          <li>Demoras en la actualización de la información de contacto.</li>

          <li>Falta de segmentación de la cartera según nivel de riesgo.</li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Identificar estas causas permite implementar estrategias preventivas
          que reduzcan la morosidad y mejoren el recaudo sin afectar la relación
          entre la institución educativa y su comunidad académica.
        </motion.p>

        {/* PRINCIPALES RETOS DE LA COBRANZA EDUCATIVA */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Principales retos de la recuperación de cartera en el sector educativo
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en colegios, universidades e instituciones
          de educación superior presenta desafíos diferentes a los de otros
          sectores. El objetivo no consiste únicamente en recaudar los valores
          pendientes, sino también en conservar una relación de confianza con
          estudiantes, padres de familia y acudientes, quienes continúan
          vinculados con la institución durante largos periodos.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Además, las obligaciones suelen generarse de manera periódica durante
          cada semestre o periodo académico, por lo que una mala gestión de
          cobranza puede incrementar rápidamente el volumen de cartera vencida y
          afectar el flujo de caja institucional.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>
            Mantener una comunicación respetuosa con estudiantes, acudientes y
            padres de familia.
          </li>

          <li>Reducir la morosidad sin afectar la permanencia estudiantil.</li>

          <li>
            Gestionar cientos o miles de pagos periódicos de manera organizada.
          </li>

          <li>Administrar acuerdos de pago y verificar su cumplimiento.</li>

          <li>
            Disminuir la cartera acumulada entre semestres o periodos
            académicos.
          </li>

          <li>
            Automatizar recordatorios y comunicaciones para evitar olvidos de
            pago.
          </li>

          <li>
            Identificar oportunamente a los responsables con mayor riesgo de
            mora.
          </li>

          <li>
            Contar con indicadores que permitan medir la eficiencia del proceso
            de recaudo.
          </li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Superar estos retos requiere procesos claros, tecnología para el
          seguimiento de pagos y estrategias preventivas que permitan intervenir
          antes de que la deuda alcance niveles de difícil recuperación.
        </motion.p>

        {/* ESTRATEGIAS EFECTIVAS PARA RECUPERAR CARTERA EDUCATIVA */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Estrategias para recuperar cartera en colegios y universidades sin
          afectar la relación con estudiantes
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          No existe una única estrategia capaz de eliminar completamente la
          morosidad. Las instituciones que obtienen mejores resultados suelen
          combinar procesos preventivos, seguimiento constante, automatización y
          negociación oportuna con estudiantes y acudientes.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          El objetivo debe ser intervenir antes de que la deuda se vuelva
          crítica, manteniendo una comunicación profesional y ofreciendo
          alternativas de pago cuando la situación financiera del responsable
          así lo requiera.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>
            Enviar recordatorios automáticos varios días antes del vencimiento
            de la matrícula.
          </li>

          <li>
            Confirmar que estudiantes y acudientes recibieron correctamente la
            factura.
          </li>

          <li>
            Clasificar la cartera según antigüedad, valor y nivel de riesgo.
          </li>

          <li>
            Contactar rápidamente a quienes presentan los primeros días de mora.
          </li>

          <li>
            Ofrecer acuerdos de pago cuando exista voluntad de cumplir la
            obligación.
          </li>

          <li>
            Registrar todas las gestiones realizadas dentro del sistema de
            cartera.
          </li>

          <li>Automatizar correos electrónicos, mensajes SMS y WhatsApp.</li>

          <li>Medir permanentemente el porcentaje de recuperación obtenido.</li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Cuando estas estrategias se implementan de forma organizada, es
          posible reducir significativamente la cartera vencida, mejorar el
          recaudo y fortalecer la estabilidad financiera de la institución
          educativa.
        </motion.p>

        {/* COMO LA AUTOMATIZACION MEJORA LA RECUPERACION DE CARTERA EN INSTITUCIONES EDUCATIVAS */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Cómo la automatización mejora la recuperación de cartera en
          instituciones educativas
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La transformación digital también ha cambiado la forma en que
          colegios, universidades e instituciones de educación gestionan su
          cartera. Hoy es posible automatizar gran parte del proceso de
          cobranza, reduciendo tareas manuales y permitiendo que el equipo
          administrativo dedique más tiempo a la negociación y al seguimiento de
          los casos que realmente lo requieren.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Un software especializado permite programar recordatorios de pago,
          identificar automáticamente las obligaciones vencidas, generar
          reportes en tiempo real y priorizar los casos según el riesgo de mora.
          Esto facilita una gestión mucho más organizada durante todo el
          calendario académico.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>Envío automático de recordatorios antes del vencimiento.</li>

          <li>Alertas para obligaciones próximas a vencer.</li>

          <li>Seguimiento automático de acuerdos de pago.</li>

          <li>Reportes de recuperación por periodo académico.</li>

          <li>Segmentación automática de estudiantes según nivel de mora.</li>

          <li>Historial centralizado de todas las gestiones realizadas.</li>

          <li>Indicadores de desempeño para medir el recaudo.</li>

          <li>Mayor productividad del personal encargado de cartera.</li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La automatización no reemplaza el trabajo del equipo de cartera. Por
          el contrario, facilita la ejecución de tareas repetitivas para que los
          responsables puedan concentrarse en la negociación con estudiantes,
          acudientes y responsables financieros cuando sea necesario.
        </motion.p>

        {/* INDICADORES PARA MEDIR LA RECUPERACION DE CARTERA EN COLEGIOS Y UNIVERSIDADES */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Indicadores para medir la recuperación de cartera en colegios y
          universidades
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Medir el desempeño de la cartera permite tomar decisiones basadas en
          datos y detectar oportunamente problemas que podrían afectar la
          liquidez de la institución educativa. No basta con conocer el valor
          total pendiente de pago; también es importante analizar la velocidad
          de recuperación, la antigüedad de la mora y el comportamiento de los
          acuerdos de pago.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Cuando estos indicadores se revisan periódicamente es posible ajustar
          las estrategias de cobranza, priorizar los casos con mayor riesgo y
          mejorar la eficiencia del proceso de recaudo durante cada periodo
          académico.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Porcentaje de recuperación:</strong> mide cuánto dinero se
            logró recaudar frente al total de la cartera vencida.
          </li>

          <li>
            <strong>Antigüedad de la cartera:</strong> identifica cuánto tiempo
            llevan pendientes las obligaciones.
          </li>

          <li>
            <strong>Nivel de morosidad:</strong> porcentaje de estudiantes o
            acudientes con obligaciones vencidas.
          </li>

          <li>
            <strong>Cumplimiento de acuerdos de pago:</strong> permite evaluar
            qué tan efectivos son los compromisos adquiridos.
          </li>

          <li>
            <strong>Tiempo promedio de recaudo:</strong> muestra cuántos días
            tarda la institución en recuperar una obligación.
          </li>

          <li>
            <strong>Efectividad de la cobranza preventiva:</strong> porcentaje
            de pagos obtenidos antes de iniciar procesos de mora avanzada.
          </li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          El análisis continuo de estos indicadores facilita la planeación
          financiera, mejora el flujo de caja y permite establecer objetivos
          claros para el equipo responsable de la gestión de cartera educativa.
        </motion.p>

        {/* ERRORES QUE AUMENTAN LA CARTERA VENCIDA EN INSTITUCIONES EDUCATIVAS */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Errores que aumentan la cartera vencida en instituciones educativas
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          En muchas instituciones educativas la morosidad no aumenta únicamente
          por la falta de pago de los estudiantes o acudientes. En numerosos
          casos, el problema está relacionado con procesos internos poco
          estructurados que dificultan el seguimiento oportuno de las
          obligaciones y reducen las probabilidades de recuperación.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Detectar estos errores permite implementar mejoras que incrementan el
          recaudo, reducen los costos administrativos y fortalecen la
          estabilidad financiera de la institución.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>
            Esperar demasiado tiempo antes de contactar al estudiante o
            acudiente.
          </li>

          <li>
            No enviar recordatorios antes del vencimiento de la obligación.
          </li>

          <li>
            Gestionar toda la cartera exactamente de la misma manera, sin
            segmentarla por antigüedad o nivel de riesgo.
          </li>

          <li>
            Llevar el control de pagos únicamente en hojas de cálculo que
            dificultan el seguimiento.
          </li>

          <li>
            No documentar las llamadas, correos electrónicos o compromisos
            adquiridos.
          </li>

          <li>
            Permitir que se acumulen varias mensualidades antes de iniciar la
            gestión de cobranza.
          </li>

          <li>
            No realizar seguimiento a los acuerdos de pago ya establecidos.
          </li>

          <li>
            Carecer de indicadores que permitan medir la eficiencia del proceso
            de recuperación.
          </li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Corregir estas situaciones suele generar mejoras importantes en el
          porcentaje de recuperación de cartera, disminuye la antigüedad de la
          mora y facilita la planificación financiera de colegios, universidades
          e instituciones de formación.
        </motion.p>

        {/* CUANDO CONVIENE APOYAR LA RECUPERACION DE CARTERA CON UN EQUIPO ESPECIALIZADO */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          ¿Cuándo conviene apoyar la recuperación de cartera con un equipo
          especializado?
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          A medida que aumenta el volumen de estudiantes, programas académicos y
          obligaciones pendientes, la gestión de cartera también se vuelve más
          compleja. En estos escenarios, muchas instituciones educativas deciden
          fortalecer sus procesos internos mediante herramientas tecnológicas o
          con el apoyo de equipos especializados en recuperación de cartera.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Este acompañamiento permite establecer procesos estandarizados de
          seguimiento, mejorar la comunicación con estudiantes y acudientes,
          automatizar tareas repetitivas y contar con información confiable para
          la toma de decisiones financieras.
        </motion.p>

        <motion.ul
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          <li>Mayor control sobre toda la cartera estudiantil.</li>

          <li>Procesos de seguimiento mucho más organizados.</li>

          <li>Reducción del tiempo dedicado a tareas manuales.</li>

          <li>Automatización de recordatorios y comunicaciones.</li>

          <li>Información centralizada sobre acuerdos de pago.</li>

          <li>Indicadores para medir la eficiencia del recaudo.</li>

          <li>Disminución de la cartera vencida a mediano y largo plazo.</li>

          <li>
            Mayor liquidez para garantizar la continuidad de los proyectos
            educativos.
          </li>
        </motion.ul>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La implementación de procesos profesionales de recuperación de cartera
          no solo mejora el recaudo. También fortalece la sostenibilidad
          financiera de la institución y permite que el personal administrativo
          concentre sus esfuerzos en actividades de mayor valor para la
          comunidad educativa.
        </motion.p>

        {/* IMPORTANCIA DE LA COBRANZA PREVENTIVA */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Importancia de la cobranza preventiva
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Una estrategia preventiva permite identificar riesgos de mora antes de
          que la deuda aumente. Los recordatorios oportunos y la atención
          temprana suelen generar mejores resultados que iniciar acciones cuando
          la cartera ya se encuentra altamente vencida.
        </motion.p>

        {/* PREGUNTAS FRECUENTES SOBRE LA RECUPERACION DE CARTERA EN INSTITUCIONES EDUCATIVAS */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre la recuperación de cartera en instituciones
          educativas
        </motion.h2>

        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          ¿Cómo reducir la cartera vencida en un colegio o universidad?
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La mejor estrategia consiste en combinar cobranza preventiva,
          recordatorios automáticos, seguimiento permanente de las obligaciones,
          acuerdos de pago claros y medición continua de indicadores. Actuar
          antes de que la deuda se vuelva antigua aumenta considerablemente las
          probabilidades de recuperación.
        </motion.p>

        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué hacer cuando un acudiente incumple un acuerdo de pago?
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Lo recomendable es realizar un contacto oportuno para conocer las
          causas del incumplimiento, documentar la gestión realizada y evaluar
          nuevas alternativas de pago cuando exista voluntad de cumplir con la
          obligación.
        </motion.p>

        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          ¿Es recomendable automatizar la cobranza educativa?
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Sí. La automatización permite enviar recordatorios, controlar acuerdos
          de pago, generar reportes y realizar seguimiento de la cartera de
          manera mucho más eficiente, reduciendo errores operativos y
          optimizando el trabajo del equipo administrativo.
        </motion.p>

        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          ¿Cuáles son los indicadores más importantes para medir la gestión de
          cartera?
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Entre los principales indicadores se encuentran el porcentaje de
          recuperación, la antigüedad de la cartera, el nivel de morosidad, el
          cumplimiento de los acuerdos de pago y el tiempo promedio necesario
          para recuperar una obligación.
        </motion.p>

        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué beneficios obtiene una institución educativa al mejorar su
          recuperación de cartera?
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Una gestión eficiente de cartera mejora el flujo de caja, reduce la
          morosidad, facilita la planeación financiera y proporciona mayores
          recursos para fortalecer la infraestructura, los programas académicos
          y los servicios ofrecidos a estudiantes y familias.
        </motion.p>

        {/* CONCLUSIONES */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Conclusión: una gestión estratégica de cartera fortalece la
          sostenibilidad de las instituciones educativas
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en colegios, universidades e instituciones
          de educación requiere mucho más que realizar llamadas de cobro cuando
          la deuda ya se encuentra vencida. Un proceso eficiente comienza con
          políticas claras de recaudo, seguimiento preventivo, automatización de
          tareas, indicadores de desempeño y una comunicación permanente con
          estudiantes, acudientes y responsables financieros.
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          Implementar estas buenas prácticas permite disminuir la morosidad,
          recuperar un mayor porcentaje de las obligaciones pendientes y
          garantizar una mejor liquidez para el desarrollo de proyectos
          académicos e institucionales. Al mismo tiempo, una gestión organizada
          fortalece la confianza de la comunidad educativa y contribuye a la
          estabilidad financiera de la institución en el largo plazo.
        </motion.p>
      </motion.article>
    </main>
  );
}
