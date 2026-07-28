"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MoraEnColombiaExplicacion() {
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
          Gestión de Cartera Empresarial
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Mora en Colombia: qué es, cómo se calcula y qué consecuencias tiene
          para empresas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La mora en Colombia es una situación que ocurre cuando una persona o
          empresa no cumple con el pago de una obligación dentro del plazo
          acordado. Para las organizaciones, entender cómo funciona la mora es
          fundamental porque una acumulación de pagos pendientes puede afectar
          el flujo de caja, la liquidez y la estabilidad financiera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          En la gestión empresarial de cartera, identificar cuándo un cliente
          entra en mora permite tomar decisiones oportunas, establecer acciones
          de seguimiento y aplicar estrategias de recuperación antes de que la
          deuda aumente o se convierta en una cartera difícil de recuperar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          La mora puede presentarse en diferentes tipos de obligaciones como
          facturas comerciales, contratos de prestación de servicios,
          arrendamientos, créditos empresariales o acuerdos de pago. Cada caso
          puede tener características diferentes dependiendo del origen de la
          deuda y las condiciones pactadas entre las partes.
        </motion.p>

        {/* QUE SIGNIFICA ESTAR EN MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué significa estar en mora en Colombia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estar en mora significa que una obligación no fue pagada dentro del
          tiempo establecido. En otras palabras, existe un incumplimiento del
          plazo acordado entre el acreedor y el deudor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desde el momento en que ocurre el vencimiento pueden comenzar a
          generarse consecuencias económicas, como intereses moratorios, aumento
          del saldo pendiente y la necesidad de iniciar procesos de seguimiento
          para recuperar los recursos adeudados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas, la mora representa uno de los principales riesgos
          dentro de la administración de cartera, ya que una alta cantidad de
          clientes incumplidos puede afectar la capacidad de operación y generar
          problemas de liquidez.
        </motion.p>

        {/* DIFERENCIA ENTRE DEUDA, VENCIMIENTO Y MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencia entre deuda, vencimiento y mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque suelen utilizarse como conceptos similares, deuda, vencimiento
          y mora tienen diferencias importantes dentro de la gestión de cartera.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Deuda:</strong> representa una obligación pendiente de pago
            entre dos partes.
          </li>

          <li>
            <strong>Vencimiento:</strong> es la fecha límite establecida para
            cumplir con una obligación.
          </li>

          <li>
            <strong>Mora:</strong> aparece cuando llega la fecha de vencimiento
            y el pago no se realiza.
          </li>
        </motion.ul>

        {/* TIPOS DE MORA QUE PUEDEN PRESENTARSE EN COLOMBIA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tipos de mora que pueden presentarse en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mora puede presentarse en diferentes escenarios dependiendo del
          origen de la obligación y del tipo de relación económica existente
          entre las partes. Para las empresas es importante identificar cada
          tipo porque la estrategia de gestión puede variar según el caso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Mora comercial:</strong> ocurre cuando un cliente o empresa
            incumple el pago de facturas, servicios o productos adquiridos a
            crédito.
          </li>

          <li>
            <strong>Mora empresarial:</strong> hace referencia a obligaciones
            pendientes dentro de relaciones entre compañías, proveedores o
            clientes corporativos.
          </li>

          <li>
            <strong>Mora contractual:</strong> se presenta cuando una de las
            partes incumple una obligación económica establecida dentro de un
            contrato.
          </li>

          <li>
            <strong>Mora en acuerdos de pago:</strong> aparece cuando el deudor
            incumple las cuotas o fechas definidas en una negociación previa.
          </li>
        </motion.ul>

        {/* COMO CALCULAR LOS Días DE MORA DE UNA OBLIGACIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo calcular los días de mora de una obligación?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Calcular los días de mora permite conocer cuánto tiempo lleva vencida
          una obligación y ayuda a clasificar la cartera según su nivel de
          riesgo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          De manera general, los días de mora se determinan contando el tiempo
          transcurrido entre la fecha límite de pago establecida y la fecha en
          la que finalmente se realiza el pago o se inicia una gestión de
          recuperación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por ejemplo, si una factura tenía fecha máxima de pago el 10 de marzo
          y el cliente no cancela la obligación, cada día posterior puede
          representar un incremento en el nivel de mora y requerir acciones de
          seguimiento.
        </motion.p>

        {/* INTERESES MORATORIOS: COMO FUNCIONAN CUANDO EXISTE MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Intereses moratorios: cómo funcionan cuando existe mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando una obligación entra en mora pueden generarse intereses
          moratorios, siempre que existan las condiciones legales y
          contractuales aplicables al caso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos intereses tienen como finalidad compensar el retraso en el
          cumplimiento de una obligación y representan un factor importante
          dentro del cálculo del valor total pendiente de pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas que administran cartera, realizar un seguimiento
          adecuado de los intereses y días de mora permite tener información más
          precisa sobre el estado real de las cuentas por cobrar.
        </motion.p>

        {/* CONSECUENCIAS DE LA MORA PARA UNA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Consecuencias de la mora para una empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una cartera con altos niveles de mora puede generar diferentes
          impactos financieros y operativos dentro de una organización. Por esta
          razón, la gestión temprana de obligaciones vencidas es clave para
          proteger la liquidez empresarial.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Reducción del flujo de caja disponible para operar.</li>

          <li>Mayor dificultad para cumplir compromisos financieros.</li>

          <li>Incremento de la cartera vencida.</li>

          <li>Necesidad de invertir más recursos en recuperación.</li>

          <li>Mayor riesgo de pérdida económica por falta de pago.</li>

          <li>Dificultad para proyectar ingresos futuros.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas suelen implementar indicadores de
          cartera, segmentación de clientes y procesos de seguimiento para
          identificar rápidamente obligaciones con riesgo de convertirse en
          cartera difícil de recuperar.
        </motion.p>

        {/* QUE HACER CUANDO UN CLIENTE ENTRA EN MORA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué hacer cuando un cliente entra en mora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando un cliente entra en mora, lo recomendable es actuar rápidamente
          mediante un proceso organizado de seguimiento. Esperar demasiado
          tiempo puede aumentar la posibilidad de que la obligación sea más
          difícil de recuperar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La gestión inicial debe enfocarse en conocer las razones del
          incumplimiento, mantener una comunicación profesional y buscar
          alternativas que permitan normalizar la obligación sin afectar la
          relación comercial.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Revisar el estado actualizado de la obligación pendiente.</li>

          <li>Confirmar fechas, valores y condiciones del pago acordado.</li>

          <li>Contactar al cliente mediante canales adecuados.</li>

          <li>Identificar las causas del retraso.</li>

          <li>Establecer compromisos claros de pago cuando sea posible.</li>

          <li>Realizar seguimiento al cumplimiento de los acuerdos.</li>
        </motion.ul>

        {/* ESTRATEGIAS PARA PREVENIR LA MORA EMPRESARIAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para prevenir la mora empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mejor forma de gestionar la mora es prevenir que las obligaciones
          lleguen a niveles altos de vencimiento. Para esto, las empresas pueden
          implementar procesos de control antes, durante y después de la fecha
          límite de pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una estrategia preventiva permite detectar comportamientos de riesgo,
          mejorar la comunicación con los clientes y reducir la cantidad de
          cuentas que pasan a cartera vencida.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Enviar recordatorios antes del vencimiento de la obligación.</li>

          <li>Mantener información actualizada de clientes y contactos.</li>

          <li>Definir políticas claras de crédito y pago.</li>

          <li>Clasificar clientes según comportamiento de pago.</li>

          <li>Medir indicadores como días promedio de mora y recuperación.</li>

          <li>Automatizar comunicaciones de seguimiento.</li>
        </motion.ul>

        {/* RELACIÓN ENTRE MORA Y CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Relación entre mora y cartera vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mora es uno de los factores que origina la cartera vencida. Cuando
          una obligación supera la fecha establecida de pago y permanece sin
          solución, pasa a formar parte de las cuentas pendientes que requieren
          una gestión especial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas deben monitorear constantemente la edad
          de la cartera, identificando obligaciones recientes y obligaciones con
          mayor tiempo de incumplimiento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una clasificación adecuada permite definir diferentes acciones según
          el nivel de riesgo. No requiere la misma estrategia un cliente con
          pocos días de retraso que una cuenta con varios meses de vencimiento.
        </motion.p>

        {/* IMPORTANCIA DE MEDIR LA MORA DENTRO DE LA GESTIÓN DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Importancia de medir la mora dentro de la gestión de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Medir la mora permite conocer la salud financiera de la cartera y
          tomar decisiones basadas en información real. Las empresas que no
          analizan sus indicadores pueden detectar demasiado tarde problemas de
          liquidez causados por pagos pendientes.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Días promedio de atraso de los clientes.</li>

          <li>Porcentaje de cartera vencida.</li>

          <li>Valor total pendiente de recuperación.</li>

          <li>Cumplimiento de acuerdos de pago.</li>

          <li>Recuperación mensual de cartera.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estos indicadores ayudan a identificar tendencias, mejorar los
          procesos internos y establecer acciones más efectivas para disminuir
          los niveles de incumplimiento.
        </motion.p>

        {/* MORA EMPRESARIAL: COMO AFECTA LA RECUPERACIÓN DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mora empresarial: cómo afecta la recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas, la mora representa mucho más que un simple retraso
          en un pago. Una cartera con altos niveles de vencimiento puede afectar
          la liquidez, dificultar el cumplimiento de obligaciones financieras y
          generar problemas en la operación diaria.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las organizaciones deben contar con procesos definidos
          para identificar rápidamente los clientes en mora, establecer
          prioridades de cobro y aplicar estrategias según el nivel de riesgo de
          cada obligación.
        </motion.p>

        {/* DIFERENCIA ENTRE MORA TEMPRANA, MORA AVANZADA Y CARTERA CASTIGADA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencia entre mora temprana, mora avanzada y cartera castigada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las obligaciones vencidas tienen el mismo nivel de riesgo. La
          antigüedad de la mora permite clasificar la cartera y determinar qué
          tipo de gestión resulta más adecuada.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Mora temprana:</strong> corresponde a retrasos recientes
            donde todavía existen altas posibilidades de recuperación mediante
            recordatorios y contacto preventivo.
          </li>

          <li>
            <strong>Mora intermedia:</strong> requiere estrategias de
            seguimiento más constantes, negociación y acuerdos de pago.
          </li>

          <li>
            <strong>Mora avanzada:</strong> representa obligaciones con largos
            periodos de incumplimiento que pueden requerir acciones prejurídicas
            o jurídicas.
          </li>

          <li>
            <strong>Cartera castigada:</strong> corresponde a obligaciones con
            baja expectativa de recuperación dentro de los procesos normales de
            cobranza.
          </li>
        </motion.ul>

        {/* ESTRATEGIAS PARA REDUCIR LA MORA DE CLIENTES */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para reducir la mora de clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reducir los niveles de mora requiere actuar antes de que la deuda se
          convierta en cartera difícil de recuperar. Las empresas que tienen
          procesos preventivos suelen obtener mejores resultados que aquellas
          que esperan hasta que la obligación presenta largos periodos de
          vencimiento.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Enviar recordatorios antes de la fecha límite de pago.</li>

          <li>
            Mantener actualizada la información de contacto de los clientes.
          </li>

          <li>Clasificar la cartera según riesgo y antigüedad.</li>

          <li>Implementar seguimiento periódico de obligaciones pendientes.</li>

          <li>
            Facilitar acuerdos de pago cuando existan dificultades financieras.
          </li>

          <li>Escalar oportunamente los casos con bajo nivel de respuesta.</li>
        </motion.ul>

        {/* PREGUNTAS FRECUENTES SOBRE LA MORA EN COLOMBIA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre la mora en Colombia
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una persona o empresa entra en mora?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una persona o empresa entra en mora cuando incumple el pago de una
          obligación después de la fecha acordada. Desde ese momento pueden
          generarse consecuencias económicas dependiendo del tipo de deuda y las
          condiciones pactadas.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿La mora aumenta el valor de una deuda?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sí. Una obligación en mora puede incrementar su valor debido a la
          aplicación de intereses moratorios u otros conceptos permitidos según
          el origen de la obligación y las condiciones establecidas.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué puede hacer una empresa cuando un cliente no paga?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La empresa puede iniciar una gestión de cobranza organizada,
          establecer comunicación con el cliente, negociar alternativas de pago
          y, cuando sea necesario, evaluar procesos de recuperación más
          avanzados.
        </motion.p>

        {/* CONCLUSION: COMO GESTIONAR CORRECTAMENTE LA MORA EN COLOMBIA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo gestionar correctamente la mora en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La mora en Colombia es una situación que afecta tanto a deudores como
          a empresas que dependen del pago oportuno de sus obligaciones.
          Comprender cómo funciona permite tomar mejores decisiones y prevenir
          que pequeñas demoras se conviertan en problemas financieros mayores.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas, contar con procesos adecuados de seguimiento,
          medición de indicadores y estrategias de recuperación de cartera es
          fundamental para mantener un flujo de caja saludable y aumentar las
          posibilidades de recaudo.
        </motion.p>
      </motion.article>
    </main>
  );
}
