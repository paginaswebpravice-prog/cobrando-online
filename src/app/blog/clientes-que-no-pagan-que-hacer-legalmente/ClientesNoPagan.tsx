"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ClientesNoPagan() {
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
            Cobro Jurídico en Colombia
          </motion.span>

          {/*  HERO  */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Clientes que no pagan en Colombia: qué hacer legalmente para
            recuperar tu dinero
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Tener clientes que no pagan es uno de los problemas más frecuentes
            en empresas de Bogotá y toda Colombia. La mora en los pagos afecta
            el flujo de caja, dificulta la operación del negocio y puede generar
            pérdidas importantes para pequeñas, medianas y grandes empresas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Muchas compañías pierden dinero por no actuar rápidamente frente a
            clientes morosos. En numerosos casos, dejar pasar semanas o meses
            hace más difícil recuperar la cartera vencida y aumenta el riesgo de
            incumplimiento definitivo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por eso, contar con estrategias de cobranza efectivas y apoyo en
            cobro jurídico en Colombia puede marcar una gran diferencia para
            recuperar deudas comerciales, facturas pendientes y obligaciones
            incumplidas.
          </motion.p>

          {/* QUÉ HACER CUANDO UN CLIENTE NO PAGA UNA DEUDA EN COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Qué hacer cuando un cliente no paga una deuda empresarial?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando un cliente incumple un pago, lo primero es analizar la
            situación y determinar si existe una obligación claramente
            soportada. Antes de iniciar cualquier acción de recuperación, la
            empresa debe verificar facturas, contratos, órdenes de compra,
            entregas realizadas y cualquier evidencia que permita demostrar la
            existencia de la deuda.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una gestión temprana aumenta las posibilidades de recuperar el
            dinero. Muchas obligaciones pueden solucionarse mediante
            comunicación efectiva, negociación y acuerdos de pago antes de que
            la cartera alcance niveles elevados de mora.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Confirmar el valor pendiente y la fecha de vencimiento.</li>
            <li>Revisar los documentos que respaldan la obligación.</li>
            <li>
              Contactar al cliente para conocer la causa del incumplimiento.
            </li>
            <li>Establecer compromisos de pago por escrito.</li>
            <li>Realizar seguimiento hasta lograr el recaudo.</li>
          </motion.ul>

          {/* DOCUMENTOS IMPORTANTES PARA COBRAR UNA DEUDA */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Documentos importantes para cobrar una deuda
          </motion.h3>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Facturas electrónicas.</li>
            <li>Contratos firmados.</li>
            <li>Pagarés.</li>
            <li>Órdenes de compra.</li>
            <li>Correos electrónicos.</li>
            <li>Chats o mensajes de WhatsApp.</li>
            <li>Actas de entrega.</li>
            <li>Acuerdos de pago.</li>
            <li>Comprobantes de consignación.</li>
          </motion.ul>

          {/* DIFERENCIA ENTRE UN CLIENTE MOROSO Y UNA CARTERA VENCIDA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Diferencia entre un cliente moroso y una cartera vencida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Un cliente moroso es aquel que incumple una obligación de pago
            dentro del plazo acordado. Sin embargo, no todas las obligaciones
            vencidas tienen el mismo nivel de riesgo, ya que factores como el
            tiempo de mora, el historial del cliente y la capacidad de pago
            influyen en la posibilidad de recuperación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La cartera vencida requiere seguimiento constante porque una deuda
            que no se gestiona oportunamente puede volverse más difícil de
            recuperar con el paso del tiempo.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Cartera corriente: obligaciones próximas a vencer.</li>
            <li>Cartera vencida temprana: pagos con pocos días de retraso.</li>
            <li>
              Cartera de difícil recuperación: obligaciones con alta antigüedad.
            </li>
          </motion.ul>

          {/* COMO RECUPERAR CARTERA VENCIDA EN BOGOTÁ Y COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo recuperar cartera vencida en Bogotá y Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera es un proceso que debe ejecutarse de
            forma estratégica y rápida. Entre más tiempo permanezca la deuda sin
            gestión, menores pueden ser las probabilidades de recuperación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y otras ciudades de Colombia, muchas empresas implementan
            procesos de cobranza prejurídica antes de iniciar acciones legales.
            Esto permite intentar acuerdos de pago sin acudir inmediatamente a
            una demanda.
          </motion.p>

          {/* ESTRATEGIAS EFECTIVAS DE COBRANZA EMPRESARIAL */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Estrategias efectivas de cobranza empresarial
          </motion.h3>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Contactar al cliente desde los primeros días de mora.</li>
            <li>Enviar correos y requerimientos formales.</li>
            <li>Documentar todas las comunicaciones.</li>
            <li>Negociar acuerdos de pago por escrito.</li>
            <li>Establecer fechas límite claras.</li>
            <li>Realizar seguimiento constante.</li>
            <li>Escalar el caso a cobro jurídico si es necesario.</li>
          </motion.ul>

          {/* COMO COBRAR UNA DEUDA SIN AFECTAR LA RELACIÓN COMERCIAL */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Cómo cobrar una deuda sin afectar la relación comercial?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera no debe enfocarse únicamente en exigir el
            pago, sino en encontrar alternativas que permitan recuperar los
            recursos y conservar relaciones comerciales importantes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una comunicación profesional, acuerdos claros y seguimiento
            constante suelen generar mejores resultados que esperar hasta que la
            deuda tenga una mayor antigüedad.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Escuchar las razones del incumplimiento.</li>
            <li>Proponer alternativas realistas de pago.</li>
            <li>Formalizar compromisos adquiridos.</li>
            <li>Mantener seguimiento periódico.</li>
          </motion.ul>

          {/* PROCESO RECOMENDADO PARA RECUPERAR DINERO DE CLIENTES MOROSOS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Proceso recomendado para recuperar dinero de clientes morosos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera funciona mejor cuando la empresa cuenta
            con un proceso definido y actúa de manera organizada desde los
            primeros días de incumplimiento. No gestionar una deuda a tiempo
            puede aumentar la posibilidad de que se convierta en una obligación
            difícil de recuperar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Un proceso adecuado de recuperación de cartera normalmente incluye
            las siguientes etapas:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>
              <strong>1. Identificación de la deuda:</strong> revisar valores
              pendientes, fechas de vencimiento y soportes disponibles.
            </li>
            <li>
              <strong>2. Contacto inicial:</strong> comunicar al cliente la
              obligación pendiente y buscar una solución temprana.
            </li>
            <li>
              <strong>3. Seguimiento organizado:</strong> registrar llamadas,
              comunicaciones y compromisos adquiridos.
            </li>
            <li>
              <strong>4. Negociación:</strong> establecer acuerdos de pago según
              la capacidad del cliente.
            </li>
            <li>
              <strong>5. Escalamiento:</strong> cuando no existen resultados,
              evaluar otras alternativas de recuperación.
            </li>
          </motion.ul>

          {/* CUANDO INICIAR UN COBRO JURÍDICO EN COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cuándo iniciar un cobro jurídico en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando el cliente incumple acuerdos, evita responder o ignora los
            requerimientos de pago, puede ser necesario iniciar un proceso de
            cobro jurídico.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            El cobro jurídico en Colombia permite ejercer acciones legales para
            recuperar la deuda mediante procesos ejecutivos, conciliaciones,
            embargos y otras herramientas legales contempladas en la normativa
            colombiana.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá, muchas empresas recurren a abogados especializados en
            recuperación de cartera para acelerar procesos y reducir pérdidas
            financieras derivadas de clientes morosos.
          </motion.p>

          {/* ERRORES COMUNES AL COBRAR UNA DEUDA EMPRESARIAL */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Errores comunes al cobrar una deuda empresarial
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Esperar demasiado tiempo para cobrar.</li>
            <li>No documentar acuerdos.</li>
            <li>No firmar contratos.</li>
            <li>No hacer seguimiento a la cartera.</li>
            <li>Permitir acumulación excesiva de deuda.</li>
            <li>No validar capacidad de pago del cliente.</li>
            <li>Realizar acuerdos verbales sin evidencia.</li>
          </motion.ul>

          {/* SENALES DE ALERTA DE CLIENTES QUE PUEDE CONVERTIRSE EN MOROSOS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Señales de alerta de clientes que pueden convertirse en morosos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Identificar comportamientos de riesgo permite actuar antes de que
            una deuda se convierta en cartera vencida. Muchas empresas pueden
            reducir pérdidas si detectan oportunamente cambios en el
            comportamiento de pago de sus clientes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Retrasos frecuentes en fechas de pago.</li>
            <li>
              Solicitudes constantes de ampliación de plazo sin justificación.
            </li>
            <li>Falta de respuesta ante comunicaciones de seguimiento.</li>
            <li>Incremento progresivo del valor adeudado.</li>
            <li>Incumplimiento de acuerdos previamente establecidos.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La prevención permite que las empresas gestionen mejor su liquidez y
            reduzcan la cantidad de obligaciones que llegan a etapas avanzadas
            de recuperación.
          </motion.p>

          {/* COMO PREVENIR CLIENTES MOROSOS EN COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo prevenir clientes morosos en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además de recuperar cartera, también es importante implementar
            estrategias preventivas para reducir riesgos financieros y evitar
            problemas futuros con clientes incumplidos.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Solicitar anticipos.</li>
            <li>Firmar contratos detallados.</li>
            <li>Definir intereses por mora.</li>
            <li>Validar historial financiero del cliente.</li>
            <li>Automatizar recordatorios de pago.</li>
            <li>Establecer políticas claras de crédito.</li>
          </motion.ul>

          {/* PREGUNTAS FRECUENTES SOBRE CLIENTES QUE NO PAGAN */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre clientes que no pagan
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Se puede demandar a un cliente que no paga en Colombia?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sí. Si existe soporte documental suficiente, es posible iniciar un
            proceso ejecutivo o de cobro jurídico para recuperar la deuda.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuánto tiempo tarda recuperar una deuda?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Depende del tipo de obligación, la respuesta del cliente y la
            documentación disponible. Algunas deudas pueden resolverse mediante
            negociación y otras requieren procesos judiciales.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué pasa si el cliente ignora todos los requerimientos?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En esos casos suele ser necesario escalar el proceso a cobro
            jurídico para proteger los intereses financieros de la empresa.
          </motion.p>

          {/* HERRAMIENTAS PARA MEJORAR LA RECUPERACIÓN DE CARTERA EMPRESARIAL */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Herramientas para mejorar la recuperación de cartera empresarial
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La tecnología permite organizar mejor los procesos de cobranza,
            reducir tiempos de seguimiento y mantener información actualizada
            sobre cada cliente con obligaciones pendientes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Sistemas de gestión y seguimiento de cartera.</li>
            <li>Automatización de recordatorios de pago.</li>
            <li>Segmentación de clientes según nivel de riesgo.</li>
            <li>Reportes de recuperación y comportamiento de pago.</li>
            <li>Historial de comunicaciones y compromisos.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contar con información organizada facilita tomar mejores decisiones
            y priorizar aquellas obligaciones con mayor posibilidad de
            recuperación.
          </motion.p>

          {/* CONCLUSION: COMO ACTUAR FRENTE A CLIENTES MOROSOS EN BOGOTÁ Y COLOMBIA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conclusión: cómo recuperar dinero cuando un cliente no paga
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tener clientes que no pagan puede afectar seriamente la estabilidad
            financiera de una empresa. Por esta razón, gestionar la cartera
            desde los primeros días de atraso permite aumentar las posibilidades
            de recuperación y evitar que las obligaciones pendientes continúen
            creciendo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una estrategia efectiva combina seguimiento oportuno, comunicación
            adecuada, documentación de la deuda, negociación y herramientas que
            permitan controlar cada etapa del proceso de recuperación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Para las empresas en Colombia, contar con procesos organizados de
            gestión de cartera ayuda a proteger el flujo de caja, reducir
            pérdidas por morosidad y mejorar la recuperación de recursos
            pendientes.
          </motion.p>
        </motion.article>
      </main>
    </>
  );
}
