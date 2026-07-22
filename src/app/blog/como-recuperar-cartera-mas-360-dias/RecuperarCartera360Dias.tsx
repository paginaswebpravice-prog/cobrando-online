"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperarCartera360Dias() {
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
            Recuperación de Cartera
          </motion.span>

          {/*  HERO  */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Cómo recuperar cartera de más de 360 días en Colombia: estrategias
            que realmente aumentan las probabilidades de cobro
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Recuperar una cartera con más de <strong>360 días de mora</strong>{" "}
            representa uno de los mayores retos para cualquier empresa. A medida
            que transcurre el tiempo, disminuyen las probabilidades de recaudo,
            aumenta el riesgo de incumplimiento definitivo y la gestión se
            vuelve más compleja. Sin embargo, una deuda antigua no significa
            necesariamente una deuda perdida. Con una estrategia adecuada es
            posible incrementar las opciones de recuperación, proteger el flujo
            de caja y reducir las pérdidas financieras.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            En esta guía encontrarás las principales estrategias para recuperar
            cartera vencida de más de un año, los errores que reducen las
            posibilidades de éxito, cuándo conviene negociar, cuándo evaluar un
            proceso de cobro jurídico y qué acciones permiten mejorar los
            resultados sin deteriorar innecesariamente la relación comercial con
            el cliente.
          </motion.p>

          {/* POR QUE ES MAS DIFICIL RECUPERAR UNA CARTERA CON MAS DE 360 DIAS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué es más difícil recuperar una cartera con más de 360 días de
            mora?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Una cartera que supera los <strong>360 días de vencimiento</strong>{" "}
            suele presentar mayores dificultades de recuperación porque el paso
            del tiempo incrementa la incertidumbre sobre la capacidad de pago
            del deudor y reduce la efectividad de las gestiones tradicionales de
            cobranza. Mientras más antigua sea la obligación, mayor es la
            probabilidad de enfrentar cambios en la situación económica del
            cliente, pérdida de contacto o incluso inconvenientes relacionados
            con la documentación que soporta la deuda.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Esto no significa que la recuperación sea imposible. De hecho,
            muchas empresas logran recuperar obligaciones con más de un año de
            mora cuando aplican una estrategia estructurada que combina análisis
            financiero, actualización de la información del deudor, negociación
            profesional, seguimiento permanente y, cuando corresponde, el inicio
            oportuno de actuaciones prejurídicas o jurídicas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Antes de considerar una deuda como incobrable, es recomendable
            evaluar diferentes variables como el monto adeudado, la existencia
            de documentos que respalden la obligación, el historial de pago del
            cliente, su actividad económica actual y las posibilidades reales de
            alcanzar un acuerdo que permita recuperar total o parcialmente los
            recursos adeudados.
          </motion.p>

          {/* PRINCIPALES CAUSAS POR LAS QUE UNA CARTERA SUPERA LOS 360 DIAS DE MORA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Principales causas por las que una cartera supera los 360 días de
            mora
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            En la mayoría de los casos, una cartera no llega a superar los 360
            días de vencimiento por un único motivo. Generalmente es el
            resultado de una combinación de factores relacionados con la gestión
            de crédito, el seguimiento de los pagos y la situación financiera
            del deudor. Identificar estas causas permite definir una estrategia
            de recuperación mucho más efectiva.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Entre más tiempo permanezca una obligación sin gestión, mayores
            serán los costos financieros para la empresa y menores las
            probabilidades de recaudo. Por ello es importante intervenir la
            cartera antes de que el deterioro sea irreversible.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>Falta de seguimiento durante los primeros días de mora.</li>
            <li>
              Procesos internos de cobranza poco estructurados o inconsistentes.
            </li>
            <li>
              Clientes que presentan problemas temporales o permanentes de
              liquidez.
            </li>
            <li>
              Cambios en la ubicación, teléfonos o información de contacto del
              deudor.
            </li>
            <li>
              Ausencia de políticas claras para otorgar crédito comercial.
            </li>
            <li>
              Demoras excesivas para iniciar una gestión prejurídica o jurídica
              cuando ya era necesaria.
            </li>
            <li>
              Falta de documentación suficiente para respaldar la obligación.
            </li>
            <li>
              Exceso de confianza en clientes antiguos sin realizar seguimiento
              a los compromisos adquiridos.
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Comprender cuál fue la causa del envejecimiento de la cartera
            permite elegir la mejor alternativa de recuperación. No es lo mismo
            gestionar una deuda cuyo deudor atraviesa dificultades económicas
            temporales que una obligación frente a un cliente que simplemente ha
            decidido incumplir de manera reiterada.
          </motion.p>

          {/* ESTRATEGIAS QUE REALMENTE FUNCIONAN PARA RECUPERAR CARTERA DE MAS DE 360 DIAS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Estrategias que realmente funcionan para recuperar cartera de más de
            360 días
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperar una deuda con más de un año de mora exige un enfoque
            diferente al utilizado durante las primeras etapas de cobranza. En
            este punto ya no basta con enviar recordatorios de pago o realizar
            llamadas ocasionales. Es necesario implementar una estrategia
            integral que permita conocer la situación actual del deudor,
            priorizar las cuentas con mayor probabilidad de recaudo y actuar de
            manera rápida para evitar que la obligación continúe deteriorándose.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Las empresas que obtienen mejores resultados suelen combinar
            herramientas de análisis, negociación, seguimiento permanente y
            recuperación prejurídica o jurídica, según las características de
            cada caso. No todas las obligaciones requieren el mismo tratamiento,
            por lo que segmentar la cartera es una de las primeras decisiones
            que debe tomarse.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            1. Analizar cada deuda antes de iniciar la gestión
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Antes de contactar nuevamente al cliente es recomendable revisar el
            historial completo de la obligación. Esto incluye el valor adeudado,
            la fecha de vencimiento, los pagos parciales realizados, las
            comunicaciones anteriores, los acuerdos incumplidos y toda la
            documentación disponible. Este análisis permite definir la
            estrategia de recuperación más adecuada.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            2. Actualizar la información del deudor
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Después de varios meses es común que hayan cambiado los teléfonos,
            correos electrónicos, representantes legales o direcciones del
            cliente. Contar con información actualizada facilita el contacto y
            evita perder tiempo utilizando datos que ya no son válidos.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            3. Negociar cuando exista intención real de pago
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Muchos clientes incumplen por problemas temporales de liquidez y no
            por falta de voluntad. En estos casos, ofrecer acuerdos de pago
            razonables puede incrementar significativamente la probabilidad de
            recuperación sin afectar la relación comercial construida durante
            años.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Lo importante es que cualquier acuerdo quede documentado y
            establezca fechas, valores, condiciones de incumplimiento y
            mecanismos de seguimiento para reducir nuevos retrasos.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            4. No esperar indefinidamente para escalar la gestión
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Uno de los errores más frecuentes consiste en mantener durante meses
            una misma estrategia que claramente no está generando resultados.
            Cuando el cliente no responde, incumple reiteradamente los acuerdos
            o evita cualquier comunicación, es recomendable evaluar el paso
            hacia una gestión prejurídica o jurídica, siempre después de
            analizar la documentación y la viabilidad del caso.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            5. Dar prioridad a las cuentas con mayor probabilidad de
            recuperación
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            No todas las deudas ofrecen las mismas posibilidades de recaudo.
            Clasificar la cartera según el monto, la antigüedad, la
            documentación disponible y la situación financiera del deudor
            permite concentrar esfuerzos en aquellas obligaciones con mayores
            probabilidades de éxito, optimizando el tiempo y los recursos
            destinados a la cobranza.
          </motion.p>

          {/*  ERRORES QUE HACEN CASI IMPOSIBLE RECUPERAR UNA CARTERA CON MAS DE 360 DIAS  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Errores que hacen casi imposible recuperar una cartera con más de
            360 días
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            En muchos casos, las dificultades para recuperar una cartera antigua
            no se deben únicamente al comportamiento del deudor, sino también a
            errores cometidos por la empresa durante la administración de sus
            cuentas por cobrar. Detectar estos problemas permite corregir
            procesos internos y aumentar las probabilidades de recaudo tanto de
            las obligaciones actuales como de las futuras.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mientras más tiempo permanezca una deuda sin gestión, mayores serán
            las dificultades para localizar al cliente, negociar un acuerdo o
            iniciar otras acciones de recuperación. Por ello, evitar los
            siguientes errores resulta fundamental para cualquier empresa que
            administre cartera.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <li>
              Esperar varios meses antes de realizar el primer contacto con el
              cliente.
            </li>
            <li>
              No actualizar periódicamente los datos de contacto del deudor.
            </li>
            <li>
              Perder contratos, facturas, pagarés o documentos que soportan la
              obligación.
            </li>
            <li>
              No registrar las llamadas, correos electrónicos y compromisos
              adquiridos durante la negociación.
            </li>
            <li>
              Mantener la misma estrategia de cobranza durante meses sin obtener
              resultados.
            </li>
            <li>
              Ofrecer acuerdos de pago sin establecer fechas claras ni
              consecuencias por incumplimiento.
            </li>
            <li>
              No clasificar la cartera según el nivel de riesgo y la
              probabilidad de recuperación.
            </li>
            <li>
              Posponer indefinidamente la evaluación de alternativas
              prejurídicas cuando las gestiones amistosas ya no producen
              resultados.
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Corregir estos errores permite optimizar la gestión de cobranza,
            disminuir el envejecimiento de la cartera y aumentar
            significativamente las probabilidades de recuperar obligaciones
            incluso cuando superan los 360 días de mora.
          </motion.p>

          {/*  PORQUE UNA DEUDA ANTIGUA ES MAS DIFICIL DE RECUPERAR  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Por qué una deuda antigua es más difícil de recuperar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando una deuda supera varios meses de mora, normalmente aparecen
            diferentes factores que complican la recuperación de cartera.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>El cliente cambia números de contacto.</li>
            <li>Existen problemas financieros más graves.</li>
            <li>La empresa deja de hacer seguimiento constante.</li>
            <li>Se pierden soportes importantes de la deuda.</li>
            <li>El cliente evita responder comunicaciones.</li>
            <li>Disminuye la presión de cobranza.</li>
            <li>Aumenta el riesgo de prescripción legal.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por esta razón, actuar rápidamente es fundamental para evitar que la
            recuperación de cartera se vuelva más compleja en Colombia.
          </motion.p>

          {/*  COMO RECUPERAR UNA DEUDA ANTIGUA EN BOGOTÁ Y COLOMBIA  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo recuperar cartera antigua en Bogotá y Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recuperar cartera de más de 360 días requiere una estrategia mucho
            más organizada y especializada que una cobranza tradicional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Antes de iniciar procesos jurídicos, es recomendable realizar una
            evaluación completa de la deuda, validar soportes y analizar la
            capacidad de recuperación del cliente.
          </motion.p>

          {/*  IMPORTANCIA DE LA DOCUMENTACION EN EL PROCESO DE COBRO  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Importancia de la documentación en recuperación de cartera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Uno de los aspectos más importantes en recuperación de cartera en
            Colombia es contar con soportes claros de la obligación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Muchas empresas en Bogotá pierden posibilidades de recuperación
            porque no conservan contratos, facturas electrónicas, órdenes de
            compra, correos o acuerdos firmados.
          </motion.p>

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
            <li>Mensajes de aceptación de deuda.</li>
            <li>Acuerdos de pago anteriores.</li>
          </motion.ul>

          {/*  CUANDO INICIAR UN COBRO JURÍDICO EN COLOMBIA  */}
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
            Cuando la cobranza amistosa no genera resultados positivos y el
            cliente evita responder o incumple acuerdos de pago, puede ser
            necesario iniciar un proceso de cobro jurídico.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia, muchas empresas esperan demasiado tiempo antes
            de actuar legalmente, aumentando el riesgo de perder la deuda por
            prescripción o dificultades probatorias.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Actuar oportunamente puede aumentar significativamente las
            probabilidades de recuperación de cartera empresarial.
          </motion.p>

          {/*  COMO EVITAR ACUMULACION DE CARTERA VENCIDA EN EMPRESAS  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo evitar acumulación de cartera vencida en empresas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La mejor forma de evitar cartera de más de 360 días es implementar
            políticas preventivas de cobranza y seguimiento financiero desde el
            inicio de la relación comercial.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Definir políticas claras de crédito.</li>
            <li>Automatizar recordatorios de pago.</li>
            <li>Hacer seguimiento constante.</li>
            <li>Evaluar riesgo financiero de clientes.</li>
            <li>Documentar toda la relación comercial.</li>
            <li>Escalar rápidamente casos complejos.</li>
            <li>Implementar procesos de cobranza preventiva.</li>
          </motion.ul>

          {/*  PREGUNTAS FRECUENTES SOBRE RECUPERACIÓN DE CARTERA ANTIGUA  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre recuperación de cartera antigua
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Se puede recuperar una deuda de más de un año?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sí. Aunque las probabilidades pueden disminuir, todavía es posible
            recuperar parcial o totalmente la obligación mediante estrategias
            especializadas de cobranza y cobro jurídico.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué hacer si el cliente no responde?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Es importante actualizar datos, enviar comunicaciones formales y
            evaluar rápidamente acciones jurídicas antes de que la deuda pueda
            prescribir.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuándo acudir a cobro jurídico?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la cobranza amistosa no genera resultados y la deuda empieza
            a representar un riesgo importante para la estabilidad financiera de
            la empresa.
          </motion.p>

          {/*  CONCLUSIÓN: COMO AUMENTAR LAS PROBABILIDADES DE RECUPERACIÓN DE CARTERA ANTIGUA  */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conclusión: cómo aumentar las probabilidades de recuperar cartera
            antigua
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Aunque recuperar cartera de más de 360 días puede ser más complejo,
            todavía existen posibilidades reales de recuperación cuando se
            aplican estrategias adecuadas, seguimiento profesional y acciones
            oportunas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia, actuar rápidamente, documentar correctamente
            cada etapa y combinar cobranza amistosa con procesos jurídicos puede
            marcar la diferencia entre recuperar el dinero o asumir pérdidas
            financieras importantes dentro de la empresa.
          </motion.p>
        </motion.article>
      </main>
    </>
  );
}
