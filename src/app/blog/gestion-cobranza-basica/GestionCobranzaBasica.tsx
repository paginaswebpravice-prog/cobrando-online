"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function GestionCobranzaBasica() {
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

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Gestión de cobranza: conceptos básicos para recuperar cartera de forma
          eficiente
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La gestión de cobranza es el conjunto de actividades que realiza una
          empresa para recuperar los pagos pendientes de sus clientes. Una buena
          estrategia de cobranza permite mantener la liquidez, reducir la
          morosidad y mejorar la estabilidad financiera del negocio.
        </motion.p>

        {/*  GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la gestión de cobranza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La gestión de cobranza comprende todos los procesos destinados a
          asegurar que los clientes paguen sus obligaciones dentro de los plazos
          establecidos. Incluye actividades preventivas, seguimiento de pagos,
          negociación y recuperación de cartera vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El objetivo principal es recuperar el dinero adeudado sin afectar la
          relación comercial con el cliente y evitando que las cuentas entren en
          procesos jurídicos más complejos.
        </motion.p>

        {/* IMPORTANCIA DE UNA BUENA GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Importancia de una buena gestión de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Muchas empresas se enfocan en vender más, pero descuidan el cobro de
          sus facturas. Cuando esto ocurre, aumentan los niveles de mora y se
          generan problemas de flujo de caja que pueden afectar la operación del
          negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión de cobranza eficiente ayuda a mantener ingresos
          constantes, reducir riesgos financieros y mejorar la rentabilidad de
          la organización.
        </motion.p>

        {/* OBJETIVOS DE LA GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Objetivos de la gestión de cobranza: mucho más que recuperar dinero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque muchas personas creen que la gestión de cobranza consiste
          únicamente en cobrar facturas vencidas, en realidad su propósito es
          mucho más amplio. Una estrategia bien diseñada busca mantener
          relaciones comerciales sostenibles, prevenir la morosidad, proteger el
          flujo de caja y reducir el riesgo de incobrabilidad.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Disminuir el porcentaje de cartera vencida.</li>
          <li>Mejorar la liquidez empresarial.</li>
          <li>Reducir pérdidas financieras.</li>
          <li>Fortalecer la cultura de pago.</li>
          <li>Conservar la relación comercial con clientes cumplidos.</li>
          <li>Detectar riesgos antes de que la deuda aumente.</li>
        </motion.ul>

        {/* PRINCIPALES ETAPAS DE LA COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Principales etapas de la cobranza
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Cobranza preventiva antes del vencimiento.</li>
          <li>Recordatorios automáticos de pago.</li>
          <li>Seguimiento a facturas vencidas.</li>
          <li>Negociación y acuerdos de pago.</li>
          <li>Cobranza prejurídica.</li>
          <li>Proceso de cobro jurídico cuando sea necesario.</li>
        </motion.ul>

        {/* COMO FUNCIONA UNA GESTION DE COBRANZA PASO A PASO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo funciona una gestión de cobranza paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Las empresas que obtienen mejores resultados siguen un proceso
          organizado. Cada etapa tiene un objetivo específico y permite aumentar
          la probabilidad de recuperar el dinero sin recurrir inmediatamente a
          procesos judiciales.
        </motion.p>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Validar la información del cliente.</li>
          <li>Enviar recordatorios preventivos.</li>
          <li>Confirmar recepción de la factura.</li>
          <li>Contactar inmediatamente cuando exista mora.</li>
          <li>Negociar alternativas de pago.</li>
          <li>Documentar todos los acuerdos.</li>
          <li>Realizar seguimiento constante.</li>
          <li>Escalar al cobro prejurídico si es necesario.</li>
          <li>
            Iniciar cobro jurídico únicamente cuando no exista otra alternativa.
          </li>
        </motion.ol>

        {/* HERRAMIENTAS UTILIZADAS EN LA GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Herramientas utilizadas en la gestión de cobranza
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Actualmente las empresas utilizan múltiples canales para gestionar sus
          cobros, incluyendo llamadas telefónicas, correos electrónicos,
          mensajes de WhatsApp, plataformas CRM y sistemas automatizados de
          seguimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La automatización permite aumentar la eficiencia operativa y reducir
          significativamente los tiempos de recuperación de cartera.
        </motion.p>

        {/* INDICADORES QUE PERMITEN MEDIR SI LA GESTION DE COBRANZA REALMENTE FUNCIONA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores que permiten medir si la gestión de cobranza realmente
          funciona
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión de cobranza profesional debe evaluarse mediante
          indicadores objetivos. Medir resultados permite detectar problemas
          antes de que la cartera vencida afecte la liquidez de la empresa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>DSO (Days Sales Outstanding).</li>
          <li>Porcentaje de recuperación mensual.</li>
          <li>Índice de morosidad.</li>
          <li>Edad promedio de cartera.</li>
          <li>Cartera corriente.</li>
          <li>Cartera vencida.</li>
          <li>Tiempo promedio de recuperación.</li>
          <li>Promesas de pago cumplidas.</li>
        </motion.ul>

        {/* ERRORES FREQUENTES EN LA GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes en la gestión de cobranza
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No realizar seguimiento oportuno.</li>
          <li>Esperar demasiado para contactar al deudor.</li>
          <li>No documentar acuerdos de pago.</li>
          <li>Carecer de políticas claras de crédito.</li>
          <li>No medir indicadores de cartera.</li>
          <li>No segmentar clientes según nivel de riesgo.</li>
        </motion.ul>

        {/* BUENAS PRACTICAS PARA MEJORAR LA GESTION DE COBRANZA EMPRESARIAL  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Buenas prácticas para mejorar la gestión de cobranza empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar procesos estandarizados permite reducir la improvisación y
          mejorar considerablemente los resultados de recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Definir políticas claras de crédito.</li>
          <li>Actualizar permanentemente la base de datos.</li>
          <li>Automatizar recordatorios.</li>
          <li>Segmentar clientes según riesgo.</li>
          <li>Capacitar al equipo de cobranza.</li>
          <li>Medir indicadores mensualmente.</li>
          <li>Documentar todas las gestiones.</li>
          <li>Negociar antes de iniciar procesos legales.</li>
        </motion.ul>

        {/* COMO CREAR UNA POLITICA DE COBRANZA EFECTIVA PARA TU EMPRESA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cómo crear una política de cobranza efectiva para tu empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una política de cobranza establece las reglas que seguirán todas las
          áreas de la empresa cuando un cliente compra a crédito. Tener
          procedimientos claros reduce conflictos internos y mejora la
          recuperación de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Definir plazos de pago.</li>
          <li>Establecer responsables.</li>
          <li>Determinar frecuencia de seguimiento.</li>
          <li>Definir cuándo negociar.</li>
          <li>Definir cuándo pasar a cobro prejurídico.</li>
          <li>Determinar cuándo iniciar cobro jurídico.</li>
        </motion.ul>

        {/* CUANDO UNA EMPRESA DEBERÍA EXTERNALIZAR LA GESTION DE COBRANZA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una empresa debería externalizar la gestión de cobranza?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las organizaciones cuentan con un equipo especializado en
          recuperación de cartera. Cuando la mora aumenta, el volumen de
          clientes crece o el tiempo del personal administrativo resulta
          insuficiente, externalizar la gestión de cobranza puede ser una
          alternativa eficiente para recuperar recursos sin descuidar la
          operación principal del negocio.
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* PREGUNTAS FRECUENTES SOBRE LA GESTION DE COBRANZA EN EMPRESAS  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre la gestión de cobranza en empresas
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué es la gestión de cobranza?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La gestión de cobranza es el conjunto de procedimientos que una
            empresa implementa para controlar, hacer seguimiento y recuperar las
            cuentas por cobrar de sus clientes. Su objetivo es mantener un flujo
            de caja saludable, disminuir la morosidad y reducir el riesgo de
            pérdidas financieras.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuál es la diferencia entre gestión de cobranza y recuperación de
            cartera?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La gestión de cobranza comprende todas las actividades relacionadas
            con el seguimiento de las cuentas por cobrar, incluso antes del
            vencimiento de una factura. La recuperación de cartera, en cambio,
            se concentra principalmente en recuperar obligaciones que ya se
            encuentran vencidas.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuáles son las etapas de la gestión de cobranza?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Generalmente comprende la cobranza preventiva, la cobranza
            administrativa, el seguimiento de facturas vencidas, la negociación
            de acuerdos de pago, la cobranza prejurídica y, cuando es necesario,
            el cobro jurídico.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué indicadores permiten medir una buena gestión de cobranza?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Algunos de los indicadores más utilizados son el porcentaje de
            recuperación de cartera, el índice de morosidad, la antigüedad de
            cartera, el DSO (Days Sales Outstanding), el porcentaje de promesas
            de pago cumplidas y el tiempo promedio de recaudo.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué herramientas ayudan a mejorar la gestión de cobranza?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Actualmente las empresas utilizan herramientas como software de
            cartera, CRM, ERP, dashboards en Excel, automatización de correos
            electrónicos, recordatorios por WhatsApp, llamadas programadas y
            plataformas de análisis financiero para optimizar el seguimiento de
            los clientes.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuándo es recomendable externalizar la gestión de cobranza?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la cartera vencida comienza a afectar la liquidez, el equipo
            interno no tiene capacidad suficiente para realizar seguimiento
            constante o la empresa requiere procesos especializados de cobranza
            prejurídica y recuperación de cartera.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cómo reducir la cartera vencida de una empresa?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La mejor estrategia consiste en combinar políticas claras de
            crédito, seguimiento preventivo, automatización de recordatorios,
            negociación oportuna, medición de indicadores y una correcta
            documentación de todos los acuerdos de pago.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Por qué una buena gestión de cobranza mejora la rentabilidad?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Porque permite recuperar el dinero en menos tiempo, reducir el
            capital inmovilizado en cuentas por cobrar, disminuir el riesgo de
            incobrabilidad y mejorar el flujo de caja, facilitando nuevas
            inversiones y el crecimiento sostenible del negocio.
          </motion.p>
        </motion.section>

        {/* CONCLUSION  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: una buena gestión de cobranza protege la liquidez y el
          crecimiento de cualquier empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La gestión de cobranza no debe entenderse únicamente como el proceso
          de cobrar facturas vencidas. Es una estrategia integral que comienza
          incluso antes de otorgar un crédito y continúa mediante seguimiento,
          negociación, automatización y medición permanente de indicadores.
          Cuando estos procesos se ejecutan correctamente, las empresas reducen
          la morosidad, mejoran el flujo de caja y fortalecen sus relaciones
          comerciales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si el volumen de cartera supera la capacidad operativa del negocio o
          las estrategias internas dejan de ser suficientes, apoyarse en
          especialistas en recuperación de cartera puede acelerar los resultados
          y disminuir el riesgo de pérdidas financieras. La clave está en actuar
          de forma preventiva, medir el desempeño continuamente y adaptar la
          estrategia de cobranza a las necesidades reales de la empresa.
        </motion.p>
      </motion.article>
    </main>
  );
}
