"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CalcularComisionRecuperacionCartera() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Gestión de Cartera
        </motion.span>

        {/* COMO CALCULAR LA COMISION POR RECUPERACION DE CARTERA */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Cómo calcular la comisión por recuperación de cartera en Colombia:
          factores, porcentajes y modelos de cobro
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Calcular correctamente la comisión por recuperación de cartera es uno
          de los aspectos más importantes al contratar un servicio de cobranza o
          al diseñar un modelo interno de recaudo. Aunque muchas empresas
          utilizan porcentajes sobre el dinero recuperado, la comisión puede
          variar según la antigüedad de la deuda, el nivel de dificultad del
          caso, la etapa de cobranza y el volumen de cartera asignado. En esta
          guía conocerás cómo funcionan los principales modelos de comisión, qué
          factores influyen en su cálculo y qué debes evaluar antes de elegir un
          esquema de recuperación de cartera basado en resultados.
        </motion.p>

        {/* FACTORES QUE INFLUYEN EN LA COMISION DE RECUPERACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Cómo calcular la comisión por recuperación de cartera? Factores que
          debes evaluar antes de definir un porcentaje
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          No existe un porcentaje único para calcular la comisión por
          recuperación de cartera. Cada organización puede definir un modelo
          diferente dependiendo del tipo de clientes, el volumen de cuentas por
          cobrar, la dificultad del recaudo y los recursos que deban destinarse
          para lograr la recuperación efectiva de las obligaciones pendientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          En la práctica, la comisión suele establecerse como un porcentaje
          sobre el valor efectivamente recuperado. Sin embargo, antes de definir
          ese porcentaje es importante analizar diferentes variables que
          influyen directamente en el nivel de esfuerzo requerido para cada
          proceso de cobranza.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Variables que influyen en la comisión de recuperación de cartera
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Antigüedad de la cartera:</strong> cuanto mayor sea el
            tiempo de mora, normalmente mayor será el nivel de gestión
            requerido.
          </li>

          <li>
            <strong>Valor de la deuda:</strong> el monto total puede influir en
            la estructura de la comisión y en el modelo de recuperación.
          </li>

          <li>
            <strong>Cantidad de clientes:</strong> administrar cientos o miles
            de cuentas requiere procesos y recursos diferentes.
          </li>

          <li>
            <strong>Documentación disponible:</strong> contar con contratos,
            facturas, pagarés o soportes facilita la gestión administrativa de
            cobranza.
          </li>

          <li>
            <strong>Historial de pago del cliente:</strong> conocer el
            comportamiento histórico ayuda a estimar la probabilidad de
            recuperación.
          </li>

          <li>
            <strong>Canales de contacto:</strong> disponer de información
            actualizada mejora significativamente las posibilidades de recaudo.
          </li>

          <li>
            <strong>Complejidad de la gestión:</strong> algunos procesos
            requieren múltiples negociaciones, seguimiento constante y acuerdos
            de pago.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Analizar estos factores permite establecer un esquema de comisión
          mucho más equilibrado, alineando los intereses de la empresa con los
          resultados obtenidos durante la gestión de recuperación de cartera.
        </motion.p>

        {/* COMO FUNCIONAN LOS HONORARIOS SEGUN LA ETAPA DEL COBRO DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Modelos de comisión por recuperación de cartera: ¿cuál es el más
          conveniente?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          No todas las empresas utilizan el mismo esquema de remuneración para
          la recuperación de cartera. Dependiendo del volumen de cuentas por
          cobrar, la antigüedad de la cartera y los objetivos del negocio,
          pueden implementarse diferentes modelos de comisión orientados a
          maximizar la eficiencia del recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Elegir el modelo adecuado permite distribuir mejor los costos de
          cobranza, incentivar mejores resultados y mantener un mayor control
          sobre el retorno de la inversión realizada en la recuperación de
          cartera.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Modelos más utilizados en recuperación de cartera
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Comisión sobre valores recuperados:</strong> el porcentaje
            se calcula únicamente sobre el dinero efectivamente recaudado.
          </li>

          <li>
            <strong>Modelo escalonado:</strong> el porcentaje puede variar según
            la antigüedad de la cartera o el nivel de recuperación alcanzado.
          </li>

          <li>
            <strong>Honorarios fijos más comisión variable:</strong> combina un
            valor base por la gestión con un incentivo asociado a los resultados
            obtenidos.
          </li>

          <li>
            <strong>Comisión diferenciada por tipo de cliente:</strong> permite
            aplicar condiciones distintas para empresas, personas naturales o
            grandes cuentas.
          </li>

          <li>
            <strong>Modelo por volumen de cartera:</strong> utilizado cuando se
            asignan grandes cantidades de cuentas por cobrar al mismo gestor.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Antes de definir un esquema de comisión es recomendable analizar los
          costos operativos de la cobranza, el comportamiento histórico de la
          cartera y los indicadores de recuperación esperados. De esta forma es
          posible seleccionar un modelo que genere beneficios tanto para la
          empresa como para el proveedor del servicio.
        </motion.p>

        {/* COMO CALCULAR LA COMISION POR RECUPERACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cómo calcular la comisión por recuperación de cartera paso a paso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          En la mayoría de los modelos de cobranza por resultados, la comisión
          se calcula aplicando un porcentaje sobre el valor efectivamente
          recuperado y no sobre el valor total de la cartera asignada. Esto
          significa que la base del cálculo corresponde únicamente al dinero que
          realmente ingresó como recaudo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Aunque cada organización puede establecer porcentajes diferentes, el
          proceso de cálculo suele seguir una metodología similar que permite
          determinar la comisión de manera clara y transparente.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico de cálculo
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <li>Valor total de la cartera asignada.</li>

          <li>Valor efectivamente recuperado.</li>

          <li>Porcentaje de comisión previamente acordado.</li>

          <li>Cálculo de la comisión sobre el dinero recuperado.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Este esquema resulta atractivo para muchas empresas porque alinea los
          intereses del gestor de cobranza con los objetivos del cliente. A
          mayor recuperación efectiva, mayor será la comisión generada,
          incentivando una gestión orientada a resultados y al cumplimiento de
          los acuerdos de pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          Antes de implementar este modelo es recomendable definir claramente
          las condiciones del servicio, la forma de medir el recaudo, los
          indicadores de desempeño y los eventos que darán lugar al pago de la
          comisión.
        </motion.p>

        {/* ERRORES QUE DEBES EVITAR AL CALCULAR LA COMISION POR RECUPERACION DE CARTERA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Errores que debes evitar al calcular la comisión por recuperación de
          cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Definir una comisión sin analizar las características de la cartera
          puede generar conflictos entre las partes y afectar la rentabilidad
          del proceso de cobranza. Antes de establecer un porcentaje es
          recomendable revisar el nivel de riesgo, el comportamiento histórico
          de pago y los recursos necesarios para lograr la recuperación de las
          obligaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Un esquema de comisión bien diseñado debe incentivar una gestión
          eficiente, ofrecer transparencia en el cálculo y garantizar que tanto
          la empresa como el gestor de cobranza compartan el objetivo de
          maximizar la recuperación de la cartera.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Errores más frecuentes
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <li>
            Definir el mismo porcentaje para todo tipo de cartera sin considerar
            el nivel de riesgo.
          </li>

          <li>
            No diferenciar entre cartera reciente y cartera con alta antigüedad
            de mora.
          </li>

          <li>
            Establecer condiciones de comisión sin documentarlas previamente.
          </li>

          <li>
            No medir indicadores como porcentaje de recuperación, tiempo
            promedio de recaudo y cumplimiento de acuerdos de pago.
          </li>

          <li>
            Elegir el modelo de comisión únicamente por el porcentaje ofrecido,
            sin evaluar la experiencia, la metodología de trabajo y la
            tecnología utilizada para la gestión de cobranza.
          </li>

          <li>
            No revisar periódicamente si el esquema de comisión continúa siendo
            eficiente para la empresa.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Revisar periódicamente el desempeño del modelo de comisión permite
          realizar ajustes oportunos, mejorar la rentabilidad de la gestión de
          cartera y fortalecer los resultados obtenidos en los procesos de
          recuperación.
        </motion.p>

        {/* CONCLUSIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo definir una comisión justa por recuperación de
          cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Calcular la comisión por recuperación de cartera va mucho más allá de
          elegir un porcentaje. Es necesario analizar el comportamiento
          histórico de la cartera, la antigüedad de las obligaciones, la
          complejidad de la gestión y los recursos que serán necesarios para
          lograr una recuperación efectiva. Cuando el modelo de comisión está
          correctamente estructurado, se crea un equilibrio entre el costo del
          servicio y los resultados obtenidos.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Para las empresas que buscan mejorar su liquidez, reducir la cartera
          vencida y optimizar sus procesos de cobranza, un esquema de comisión
          basado en resultados puede convertirse en una alternativa eficiente y
          transparente. Evaluar periódicamente los indicadores de recuperación,
          revisar el modelo de remuneración y apoyarse en procesos organizados
          permitirá obtener mejores niveles de recaudo y fortalecer la gestión
          financiera del negocio.
        </motion.p>

        {/* PREGUNTAS FRECUENTES */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre la comisión por recuperación de cartera
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿La comisión siempre corresponde a un porcentaje fijo?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          No. El porcentaje puede variar según la antigüedad de la cartera, el
          valor recuperado, el volumen de cuentas asignadas y la complejidad del
          proceso de cobranza.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Qué modelo de comisión utilizan la mayoría de empresas?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Uno de los modelos más utilizados consiste en calcular la comisión
          sobre el valor efectivamente recuperado. Este esquema busca alinear
          los intereses del gestor de cobranza con los resultados obtenidos.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Qué aspectos deben evaluarse antes de definir una comisión?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Es recomendable analizar la antigüedad de la cartera, el
          comportamiento de pago de los clientes, el volumen de obligaciones,
          los costos operativos y los indicadores históricos de recuperación.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué un esquema basado en resultados puede beneficiar a una
          empresa?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Porque incentiva una gestión enfocada en el recaudo efectivo, facilita
          el control de los costos asociados a la cobranza y permite medir el
          desempeño de la recuperación mediante indicadores objetivos.
        </motion.p>
      </article>
    </main>
  );
}
