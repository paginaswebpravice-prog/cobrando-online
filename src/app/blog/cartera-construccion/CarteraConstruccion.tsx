"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraConstruccion() {
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
          Gestión de cartera en construcción
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cartera en construcción: cómo gestionar pagos pendientes y mejorar el
          flujo de caja en obras
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La gestión de cartera en construcción representa uno de los mayores
          retos financieros para constructoras, contratistas y empresas
          relacionadas con proyectos de infraestructura. Debido a que las obras
          suelen manejar contratos de alto valor, pagos por etapas, actas de
          avance y múltiples responsables administrativos, cualquier retraso en
          los pagos puede afectar la liquidez y continuidad de los proyectos.
          Implementar procesos organizados de seguimiento, control documental y
          recuperación de cuentas por cobrar permite reducir riesgos financieros
          y mejorar la estabilidad económica de la empresa.
        </motion.p>

        {/*  POR QUE LA CARTERA ES UN RETO EN CONSTRUCCION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la gestión de cartera es un reto para las empresas de
          construcción?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A diferencia de otros sectores, los proyectos de construcción suelen
          tener procesos financieros más complejos. Los pagos pueden depender de
          avances de obra, aprobación de entregables, validación de documentos y
          cumplimiento de diferentes condiciones contractuales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esta dinámica puede generar retrasos en la recepción de recursos,
          afectar la programación financiera y aumentar el volumen de cuentas
          por cobrar si no existe un seguimiento constante de cada proyecto.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas constructoras necesitan procesos de
          gestión de cartera que permitan identificar riesgos oportunamente y
          actuar antes de que una obligación pendiente se convierta en una
          dificultad financiera.
        </motion.p>

        {/*  PRINCIPALES CAUSAS DE CARTERA VENCIDA EN CONSTRUCCION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales causas de cartera vencida en proyectos de construcción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida en construcción puede aparecer por diferentes
          factores relacionados con la operación del proyecto, la administración
          financiera o la comunicación entre las partes involucradas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Retrasos en la aprobación de actas de avance o entregables.</li>

          <li>Diferencias entre facturación y soportes del proyecto.</li>

          <li>Problemas temporales de flujo de caja del cliente.</li>

          <li>Cambios en alcance, cantidades o condiciones de la obra.</li>

          <li>Procesos internos lentos para aprobar pagos.</li>

          <li>Falta de seguimiento oportuno a cuentas próximas a vencer.</li>
        </motion.ul>

        {/*  ESTRATEGIAS PARA MEJORAR LA RECUPERACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para mejorar la recuperación de cartera en construcción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión eficiente de cartera en construcción debe iniciar desde la
          planificación del proyecto y mantenerse durante todo el ciclo de
          ejecución. No se trata únicamente de solicitar pagos atrasados, sino
          de crear procesos que permitan prevenir retrasos y mantener un flujo
          financiero estable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunas estrategias que ayudan a mejorar la recuperación de pagos en
          empresas constructoras son:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Establecer cronogramas claros de facturación relacionados con
            avances de obra.
          </li>

          <li>
            Realizar seguimiento preventivo antes de las fechas de vencimiento.
          </li>

          <li>
            Mantener actualizada la información financiera de cada proyecto.
          </li>

          <li>
            Clasificar las cuentas por cobrar según antigüedad y nivel de
            riesgo.
          </li>

          <li>
            Crear procesos internos para gestionar pagos pendientes de forma
            organizada.
          </li>

          <li>
            Mantener comunicación constante con responsables administrativos y
            financieros del cliente.
          </li>
        </motion.ul>

        {/*  LA IMPORTANCIA DEL CONTROL DOCUMENTAL EN LA CARTERA DE CONSTRUCCION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La importancia del control documental en la cartera de construcción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En los proyectos de construcción, una parte importante de los retrasos
          en pagos está relacionada con diferencias administrativas, documentos
          incompletos o falta de seguimiento a los soportes requeridos para
          aprobar una factura.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, mantener organizada la documentación del proyecto
          permite agilizar procesos de pago y facilita identificar rápidamente
          cualquier inconveniente que pueda afectar la recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Facturas asociadas correctamente a cada proyecto.</li>

          <li>Actas de avance y entregables aprobados.</li>

          <li>Soportes de prestación de servicios o ejecución de obra.</li>

          <li>Historial de comunicaciones y acuerdos comerciales.</li>
        </motion.ul>

        {/*  INDICADORES QUE DEBEN MONITOREARSE  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores clave para controlar la cartera en constructoras
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir el comportamiento de la cartera permite conocer la eficiencia de
          los procesos de cobro, identificar riesgos y tomar decisiones
          financieras más oportunas dentro de los proyectos.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Días promedio de recaudo:</strong> muestra cuánto tiempo
            tarda la empresa en recibir los pagos pendientes.
          </li>

          <li>
            <strong>Antigüedad de cartera:</strong> permite identificar
            obligaciones recientes y cuentas con mayor riesgo.
          </li>

          <li>
            <strong>Porcentaje de cartera vencida:</strong> indica qué parte de
            las cuentas por cobrar está fuera del plazo acordado.
          </li>

          <li>
            <strong>Valor recuperado mensualmente:</strong> mide la efectividad
            de las acciones de gestión de cartera.
          </li>

          <li>
            <strong>Rotación de cartera:</strong> ayuda a evaluar la velocidad
            con la que la empresa convierte sus ventas a crédito en ingresos.
          </li>
        </motion.ul>

        {/*  CUANDO RECURRIR AL COBRO JURÍDICOS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuándo recurrir al cobro jurídico
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando las gestiones administrativas y comerciales no producen
          resultados, puede ser necesario iniciar procesos jurídicos para
          proteger los derechos económicos de la empresa y recuperar las sumas
          adeudadas.
        </motion.p>

        {/*  TECNOLOGIA PARA MEJORAR LA GESTION DE CARTERA EN CONSTRUCCION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tecnología para mejorar la gestión de cartera en construcción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El manejo de múltiples proyectos, clientes y fechas de pago puede
          convertirse en un desafío cuando los procesos dependen únicamente de
          controles manuales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las herramientas digitales de gestión de cartera permiten centralizar
          información, automatizar seguimientos y obtener una visión más clara
          del estado financiero de cada proyecto.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Alertas de vencimiento de facturas.</li>

          <li>Seguimiento organizado de cuentas pendientes.</li>

          <li>Reportes financieros de cartera.</li>

          <li>Historial de gestión con cada cliente.</li>
        </motion.ul>

        {/*  CUANDO UNA CONSTRUCTORA DEBE INICIAR ACCIONES DE RECUPERACION DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una constructora debe iniciar acciones de recuperación de
          cartera?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera debe comenzar desde las primeras señales de
          retraso en el pago. Esperar durante largos periodos puede aumentar el
          riesgo financiero y dificultar la recuperación de los recursos
          pendientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión organizada permite establecer diferentes niveles de
          seguimiento, comenzando con recordatorios preventivos, validación de
          información, comunicación con responsables del proyecto y acuerdos
          orientados a solucionar los retrasos.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Identificar facturas próximas a vencer.</li>

          <li>Contactar oportunamente a responsables de pago.</li>

          <li>Revisar posibles causas administrativas del retraso.</li>

          <li>Documentar compromisos y fechas de pago.</li>

          <li>
            Escalar la gestión cuando las acciones iniciales no generan
            resultados.
          </li>
        </motion.ul>

        {/*  CONCLUSION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Consecuencias de una mala gestión de cartera en construcción
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una cartera descontrolada puede afectar directamente la operación de
          una empresa constructora, especialmente cuando los recursos pendientes
          son necesarios para continuar nuevas etapas del proyecto.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Problemas de liquidez para financiar nuevas actividades.</li>

          <li>Retrasos en pagos a proveedores y contratistas.</li>

          <li>Mayor dependencia de financiación externa.</li>

          <li>Menor capacidad para planificar nuevos proyectos.</li>

          <li>Incremento del riesgo financiero empresarial.</li>
        </motion.ul>
      </motion.article>
    </main>
  );
}
