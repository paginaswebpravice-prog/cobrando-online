"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CarteraActivaVsVencida() {
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
          Cartera activa vs cartera vencida: diferencias y su impacto en las
          empresas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uno de los conceptos más importantes en la administración financiera
          es diferenciar la cartera activa de la cartera vencida. Aunque ambas
          representan dinero pendiente por recibir, tienen características,
          riesgos y tratamientos completamente distintos dentro de la gestión de
          cartera empresarial.
        </motion.p>

        {/*  QUE ES LA CARTERA ACTIVA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera activa y cómo funciona en una empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera activa está conformada por todas aquellas cuentas por
          cobrar que todavía se encuentran dentro del plazo acordado entre la
          empresa y el cliente. Son obligaciones vigentes que representan
          ingresos esperados y que aún no presentan retrasos en el pago.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una cartera activa correctamente administrada permite a las empresas
          proyectar flujo de caja, controlar sus ingresos futuros y tomar
          mejores decisiones financieras. Sin embargo, requiere seguimiento
          constante para evitar que las obligaciones lleguen a convertirse en
          cartera vencida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algunos ejemplos de cartera activa son facturas pendientes de pago
          dentro del plazo establecido, créditos comerciales vigentes o acuerdos
          de pago que se están cumpliendo según las condiciones pactadas.
        </motion.p>

        {/*  QUE ES LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera vencida y por qué representa un riesgo financiero?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cartera vencida corresponde a las cuentas por cobrar cuyo plazo de
          pago ya terminó y que todavía no han sido canceladas por el cliente.
          Desde ese momento aumenta el riesgo financiero porque la empresa deja
          de recibir los recursos esperados en la fecha prevista.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando una obligación permanece durante largos periodos en estado
          vencido, pueden aumentar las dificultades de recuperación, afectar la
          liquidez empresarial y generar mayores esfuerzos de seguimiento y
          gestión.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplos de cartera vencida son facturas que superaron la fecha límite
          de pago, clientes con retrasos recurrentes o cuentas pendientes que
          requieren acciones adicionales de seguimiento para lograr su
          recuperación.
        </motion.p>

        {/*  PRINCIPALES DIFERENCIAS ENTRE CARTERA ACTIVA Y CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencias entre cartera activa y cartera vencida
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            La cartera activa corresponde a obligaciones dentro del plazo
            establecido, mientras que la cartera vencida presenta retrasos en el
            pago.
          </li>

          <li>
            La cartera activa representa ingresos proyectados, mientras que la
            cartera vencida puede generar incertidumbre financiera.
          </li>

          <li>
            La cartera activa requiere seguimiento preventivo y la cartera
            vencida necesita estrategias de gestión más intensivas.
          </li>

          <li>
            Una cartera vencida elevada puede afectar el flujo de caja y la
            capacidad operativa de una empresa.
          </li>

          <li>
            Controlar oportunamente la cartera activa ayuda a disminuir el
            crecimiento de cuentas vencidas.
          </li>
        </motion.ul>

        {/*  DIFERENCIAS ENTRE CARTERA ACTIVA Y CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Diferencias entre cartera activa y cartera vencida
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            La cartera activa corresponde a obligaciones dentro del plazo
            establecido, mientras que la cartera vencida presenta retrasos en el
            pago.
          </li>

          <li>
            La cartera activa representa ingresos proyectados, mientras que la
            cartera vencida puede generar incertidumbre financiera.
          </li>

          <li>
            La cartera activa requiere seguimiento preventivo y la cartera
            vencida necesita estrategias de gestión más intensivas.
          </li>

          <li>
            Una cartera vencida elevada puede afectar el flujo de caja y la
            capacidad operativa de una empresa.
          </li>

          <li>
            Controlar oportunamente la cartera activa ayuda a disminuir el
            crecimiento de cuentas vencidas.
          </li>
        </motion.ul>

        {/*  EJEMPLOS DE CARTERA ACTIVA Y CARTERA VENCIDA EN UNA EMPRESA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplos de cartera activa y cartera vencida en una empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Comprender la diferencia entre cartera activa y cartera vencida
          resulta más sencillo cuando se analiza mediante situaciones habituales
          dentro de una empresa. La clasificación depende principalmente del
          cumplimiento del plazo de pago acordado con el cliente.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Ejemplo de cartera activa:</strong> una empresa emite una
            factura a un cliente con plazo de pago de 30 días y la obligación
            todavía se encuentra dentro de ese periodo.
          </li>

          <li>
            <strong>Ejemplo de cartera vencida:</strong> una factura supera los
            30 días establecidos sin recibir el pago correspondiente y pasa a
            representar una cuenta pendiente con retraso.
          </li>

          <li>
            <strong>Cartera activa controlada:</strong> clientes que cumplen sus
            fechas de pago y mantienen un comportamiento financiero estable.
          </li>

          <li>
            <strong>Cartera vencida recurrente:</strong> clientes que presentan
            retrasos frecuentes y requieren mayor seguimiento para evitar
            impactos financieros.
          </li>
        </motion.ul>

        {/*  INDICADORES PARA MEDIR LA SALUD DE UNA CARTERA EMPRESARIAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Indicadores para medir la salud de una cartera empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La gestión adecuada de cartera requiere medir constantemente el
          comportamiento de las cuentas por cobrar. Los indicadores permiten
          conocer si una empresa mantiene una cartera saludable o si existen
          riesgos que deben atenderse.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Días promedio de cartera:</strong> permite conocer cuánto
            tiempo tardan los clientes en realizar sus pagos.
          </li>

          <li>
            <strong>Porcentaje de cartera vencida:</strong> muestra qué
            proporción de las cuentas por cobrar presenta retrasos.
          </li>

          <li>
            <strong>Nivel de recuperación:</strong> mide la capacidad de la
            empresa para recuperar valores pendientes.
          </li>

          <li>
            <strong>Comportamiento histórico de pago:</strong> ayuda a
            identificar clientes con mayor riesgo de incumplimiento.
          </li>
        </motion.ul>

        {/*  ESTRATEGIAS PARA MANTENER UNA CARTERA SANA Y REDUCIR LA CARTERA VENCIDA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Estrategias para mantener una cartera sana y reducir la cartera
          vencida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una gestión eficiente de cartera no consiste únicamente en actuar
          cuando existe incumplimiento. Las empresas que obtienen mejores
          resultados aplican estrategias preventivas que permiten controlar sus
          cuentas por cobrar antes de que se conviertan en obligaciones
          vencidas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <strong>Realizar seguimiento preventivo:</strong> mantener
            comunicación constante con los clientes antes de la fecha límite de
            pago.
          </li>

          <li>
            <strong>Establecer políticas claras de crédito:</strong> definir
            condiciones de pago, límites y criterios para otorgar financiación.
          </li>

          <li>
            <strong>Automatizar recordatorios:</strong> utilizar herramientas
            digitales para informar vencimientos y reducir retrasos.
          </li>

          <li>
            <strong>Analizar el comportamiento del cliente:</strong> identificar
            cambios en los hábitos de pago para anticipar posibles riesgos.
          </li>

          <li>
            <strong>Clasificar la cartera:</strong> separar cuentas activas,
            próximas a vencer y vencidas para aplicar acciones específicas.
          </li>
        </motion.ul>

        {/*  BENEFICIOS DE UNA CORRECTA GESTION DE CARTERA EMPRESARIAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Beneficios de una correcta gestión de cartera empresarial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Controlar adecuadamente la cartera activa y prevenir el crecimiento de
          la cartera vencida permite a las empresas mejorar su estabilidad
          financiera y tomar decisiones con mayor información.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Mejora la disponibilidad de flujo de caja para cubrir obligaciones
            empresariales.
          </li>

          <li>
            Reduce el riesgo financiero asociado a clientes con retrasos
            constantes.
          </li>

          <li>
            Permite identificar oportunidades de mejora en los procesos de
            facturación y seguimiento.
          </li>

          <li>
            Facilita la toma de decisiones mediante información organizada sobre
            las cuentas por cobrar.
          </li>

          <li>
            Ayuda a mantener relaciones comerciales más ordenadas con los
            clientes.
          </li>
        </motion.ul>

        {/*  CONCLUSIÓN */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: controlar la cartera activa evita mayores niveles de
          vencimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La diferencia entre cartera activa y cartera vencida permite entender
          el estado real de las cuentas por cobrar de una empresa. Mientras la
          cartera activa representa ingresos esperados y obligaciones dentro del
          plazo acordado, la cartera vencida refleja retrasos que pueden afectar
          la liquidez y operación del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Implementar procesos de seguimiento, medición e identificación
          temprana de riesgos ayuda a mantener una cartera saludable y disminuir
          el crecimiento de obligaciones pendientes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Para las empresas que buscan mejorar el control de sus cuentas por
          cobrar, contar con herramientas especializadas de gestión de cartera
          facilita el seguimiento de clientes, la organización de pagos
          pendientes y la toma de decisiones financieras.
        </motion.p>
      </motion.article>
    </main>
  );
}
