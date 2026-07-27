"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IndiceMorosidad() {
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
          Indicadores de Cartera
        </motion.span>

        {/* HERO */}
        <h1>
          Índice de morosidad: qué es, cómo calcularlo correctamente y cómo
          reducir la cartera vencida de tu empresa
        </h1>

        <p className={styles.intro}>
          El <strong>índice de morosidad</strong> es uno de los indicadores
          financieros más importantes para cualquier empresa que venda a crédito
          o administre cuentas por cobrar. Gracias a este KPI es posible conocer
          qué porcentaje de la cartera presenta incumplimientos de pago,
          identificar riesgos para la liquidez, evaluar la efectividad de la
          gestión de cobranza y tomar decisiones que reduzcan la cartera
          vencida.
        </p>

        <p>
          Aunque muchas organizaciones revisan únicamente el valor total de las
          cuentas por cobrar, esta información por sí sola no permite conocer si
          realmente existe un problema de recaudo. El índice de morosidad ofrece
          una visión mucho más precisa porque muestra qué parte de la cartera ha
          superado la fecha de vencimiento y requiere acciones de seguimiento,
          negociación o recuperación.
        </p>

        <p>
          En esta guía aprenderás qué es el índice de morosidad, cómo se
          calcula, cómo interpretar sus resultados, cuáles son los rangos que
          suelen considerarse aceptables y qué estrategias ayudan a disminuir la
          mora para proteger el flujo de caja de la empresa.
        </p>

        {/* QUE ES EL INDICE DE MOROSIDAD */}
        <h2>
          ¿Qué es el índice de morosidad y por qué es uno de los indicadores más
          importantes de la gestión de cartera?
        </h2>

        <p>
          El índice de morosidad es un indicador financiero que expresa el
          porcentaje de la cartera vencida respecto al total de las cuentas por
          cobrar. Su objetivo principal es medir el nivel de incumplimiento de
          los clientes y determinar el riesgo que representa la cartera para la
          estabilidad financiera de una organización.
        </p>

        <p>
          Este indicador es utilizado por empresas de prácticamente todos los
          sectores económicos, incluyendo compañías comerciales, industriales,
          entidades financieras, instituciones prestadoras de salud, empresas de
          servicios, constructoras, cooperativas y cualquier organización que
          otorgue crédito a sus clientes.
        </p>

        <p>
          Cuanto mayor sea el índice de morosidad, mayor será la cantidad de
          recursos que permanecen sin recuperarse dentro del plazo establecido,
          lo que puede afectar la liquidez, aumentar los costos financieros y
          limitar la capacidad de crecimiento de la empresa.
        </p>

        {/* PORQUE CALCULAR EL INDICE DE MOROSIDAD PUEDE EVITAR PROBLEMAS DE LIQUIDEZ */}
        <h2>
          ¿Por qué calcular el índice de morosidad puede evitar problemas de
          liquidez?
        </h2>

        <p>
          Muchas empresas únicamente detectan problemas financieros cuando ya
          comienzan a presentar dificultades para pagar proveedores, nómina o
          impuestos. Sin embargo, el índice de morosidad permite anticipar estos
          escenarios porque evidencia el deterioro de la cartera mucho antes de
          que el flujo de caja resulte gravemente afectado.
        </p>

        <p>
          Un seguimiento periódico facilita la implementación de medidas
          preventivas, como reforzar las políticas de crédito, iniciar gestiones
          tempranas de cobranza o renegociar obligaciones antes de que las
          probabilidades de recuperación disminuyan considerablemente.
        </p>

        <ul>
          <li>Detecta aumentos en la mora de forma temprana.</li>
          <li>Permite evaluar el desempeño del proceso de cobranza.</li>
          <li>Facilita la toma de decisiones financieras.</li>
          <li>Ayuda a proteger la liquidez empresarial.</li>
          <li>Reduce el riesgo de pérdidas por incobrabilidad.</li>
          <li>Permite medir la calidad de la cartera de clientes.</li>
        </ul>

        {/* QUE INFORMACION NECESITAS PARA CALCULAR EL INDICE DE MOROSIDAD */}
        <h2>
          ¿Qué información necesitas para calcular correctamente el índice de
          morosidad?
        </h2>

        <p>
          Antes de realizar el cálculo es indispensable contar con información
          confiable y actualizada sobre las cuentas por cobrar. Utilizar datos
          incompletos o desactualizados puede generar interpretaciones erróneas
          y afectar la toma de decisiones.
        </p>

        <p>
          Generalmente será necesario conocer el valor total de la cartera, el
          monto correspondiente a las obligaciones vencidas y la fecha de corte
          sobre la cual se realizará el análisis. Entre mayor sea la calidad de
          esta información, más útil será el indicador para la administración de
          la cartera.
        </p>

        {/* COMO CALCULAR EL INDICE DE MOROSIDAD PASO A PASO */}
        <h2>Cómo calcular el índice de morosidad paso a paso</h2>

        <p>
          Calcular el índice de morosidad es un proceso relativamente sencillo,
          siempre que la empresa cuente con información actualizada sobre el
          estado de sus cuentas por cobrar. El objetivo consiste en identificar
          qué porcentaje de la cartera total corresponde a obligaciones que ya
          superaron la fecha de vencimiento acordada con los clientes.
        </p>

        <p>
          Este cálculo debe realizarse de manera periódica —preferiblemente cada
          mes— para identificar tendencias, detectar incrementos en la mora y
          tomar decisiones antes de que la cartera vencida afecte seriamente la
          liquidez de la organización.
        </p>

        <p>La fórmula utilizada por la mayoría de empresas es la siguiente:</p>

        <p>
          <strong>
            Índice de Morosidad = (Cartera Vencida ÷ Cartera Total) × 100
          </strong>
        </p>

        <p>
          El resultado representa el porcentaje de la cartera que actualmente se
          encuentra en mora y que requiere una gestión de cobranza más activa.
        </p>

        {/* EJEMPLO PRACTICO PARA CALCULAR EL INDICE DE MOROSIDAD */}
        <h2>Ejemplo práctico para calcular el índice de morosidad</h2>

        <p>
          Imaginemos una empresa que al cierre del mes presenta la siguiente
          información:
        </p>

        <ul>
          <li>Cartera total: $800.000.000</li>
          <li>Cartera vencida: $96.000.000</li>
        </ul>

        <p>Aplicando la fórmula obtenemos:</p>

        <p>
          <strong>(96.000.000 ÷ 800.000.000) × 100 = 12%</strong>
        </p>

        <p>
          Esto significa que el 12% de todas las cuentas por cobrar de la
          empresa presenta algún nivel de mora. Aunque todavía existe un 88% de
          cartera al día, ese 12% puede representar un riesgo importante si la
          empresa no inicia acciones de seguimiento oportunamente.
        </p>

        <p>
          Este porcentaje también permite comparar el comportamiento de la
          cartera entre diferentes meses y medir si las estrategias de cobranza
          realmente están generando resultados.
        </p>

        {/* COMO INTERPRETAR EL INDICE DE MOROSIDAD */}
        <h2>¿Cómo interpretar correctamente el índice de morosidad?</h2>

        <p>
          Calcular el indicador es únicamente el primer paso. Lo realmente
          importante consiste en interpretar el resultado y comprender qué está
          ocurriendo con la cartera de clientes.
        </p>

        <p>
          Un porcentaje bajo generalmente indica que la mayoría de los clientes
          está cumpliendo con los plazos de pago establecidos. Sin embargo, un
          crecimiento constante del índice durante varios meses consecutivos
          suele reflejar problemas en la evaluación del riesgo crediticio, en el
          seguimiento de la cartera o incluso dificultades económicas de los
          clientes.
        </p>

        <p>
          La interpretación nunca debe hacerse de forma aislada. Siempre es
          recomendable comparar el indicador con periodos anteriores, con el
          comportamiento histórico de la empresa y con otros indicadores de
          cartera para obtener una visión mucho más completa.
        </p>

        {/* CUAL ES UN BUEN INDICE DE MOROSIDAD */}
        <h2>¿Cuál es un buen índice de morosidad?</h2>

        <p>
          No existe un porcentaje único que pueda considerarse adecuado para
          todas las organizaciones. El resultado dependerá del sector económico,
          del perfil de los clientes, de las condiciones de crédito y del nivel
          de riesgo que la empresa esté dispuesta a asumir.
        </p>

        <p>
          Sin embargo, como referencia general, muchas empresas utilizan los
          siguientes rangos para evaluar el comportamiento de su cartera:
        </p>

        <ul>
          <li>
            <strong>Menor al 5%:</strong> excelente comportamiento de pago.
          </li>

          <li>
            <strong>Entre el 5% y el 10%:</strong> cartera estable que requiere
            seguimiento periódico.
          </li>

          <li>
            <strong>Entre el 10% y el 20%:</strong> nivel de riesgo moderado que
            exige fortalecer las acciones de cobranza.
          </li>

          <li>
            <strong>Superior al 20%:</strong> alto riesgo financiero y posible
            afectación de la liquidez empresarial.
          </li>
        </ul>

        <p>
          Más importante que alcanzar un porcentaje específico es lograr que el
          índice permanezca estable o disminuya con el tiempo. Un incremento
          continuo suele ser una señal de alerta que requiere revisar las
          políticas de crédito y las estrategias de recuperación de cartera.
        </p>
      </motion.article>
    </main>
  );
}
