"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function TiposDeRecuperacionDeCarteraContent() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* CATEGORY */}
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Recuperación de Cartera
        </motion.span>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Tipos de recuperación de cartera en Colombia: guía completa para
          cobrar más rápido, reducir la mora y recuperar cuentas por cobrar
        </motion.h1>

        {/* INTRO */}

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Conocer los diferentes{" "}
          <strong>tipos de recuperación de cartera</strong>
          permite a las empresas aplicar la estrategia adecuada según el estado
          de la deuda, el comportamiento del cliente y el nivel de riesgo
          financiero. No es lo mismo gestionar una factura próxima a vencer que
          una obligación con varios meses de mora o un proceso que requiere
          acciones judiciales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          En esta guía encontrarás cuáles son las etapas de la recuperación de
          cartera en Colombia, cuándo utilizar cada una, cuáles ofrecen mejores
          resultados y qué buenas prácticas ayudan a incrementar el recaudo sin
          deteriorar la relación comercial con el cliente.
        </motion.p>

        {/* ================= ¿QUÉ ES? ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué es la recuperación de cartera y por qué existen diferentes
            tipos de cobranza?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            La recuperación de cartera comprende todas las acciones que realiza
            una empresa para lograr que sus clientes paguen oportunamente las
            obligaciones adquiridas. No todas las cuentas presentan el mismo
            nivel de riesgo ni todos los clientes requieren el mismo
            tratamiento, por lo que las empresas implementan diferentes
            estrategias de cobranza según el momento en que se encuentre la
            deuda y el comportamiento de pago del deudor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Aplicar el tipo correcto de recuperación permite disminuir la
            cartera vencida, mejorar el flujo de caja, fortalecer la relación
            comercial y reducir significativamente los costos asociados a
            procesos de cobro más complejos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Por esta razón, las organizaciones suelen diseñar políticas internas
            donde se establecen etapas progresivas de recuperación, iniciando
            con acciones preventivas y avanzando únicamente cuando el cliente
            incumple sus compromisos de pago.
          </motion.p>
        </motion.section>

        {/* ================= PREVENTIVA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación preventiva: la etapa más rentable para evitar la
            cartera vencida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            La recuperación preventiva comprende todas las acciones que se
            realizan antes del vencimiento de una factura. Su propósito
            principal es reducir la probabilidad de mora mediante recordatorios
            oportunos, confirmaciones de recepción de la factura y
            acompañamiento al cliente durante el proceso de pago.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Esta etapa suele ofrecer el mayor retorno sobre la inversión porque
            evita costos administrativos posteriores y mejora significativamente
            la liquidez empresarial.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Confirmación del envío de facturas.</li>
            <li>Recordatorios automáticos antes del vencimiento.</li>
            <li>Correos electrónicos personalizados.</li>
            <li>Mensajes mediante WhatsApp Business.</li>
            <li>Verificación de novedades en el proceso de pago.</li>
            <li>Actualización permanente de datos del cliente.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la empresa desarrolla correctamente esta fase, disminuye la
            cantidad de clientes que pasan a cartera vencida y reduce
            considerablemente el tiempo promedio de recaudo.
          </motion.p>
        </motion.section>

        {/* ================= IMPORTANCIA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué es importante elegir el tipo correcto de recuperación de
            cartera?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Utilizar una estrategia inadecuada puede deteriorar la relación
            comercial, incrementar los costos de recuperación y disminuir
            considerablemente la probabilidad de recaudo. Por el contrario,
            seleccionar la etapa adecuada permite intervenir en el momento
            oportuno y aumentar las posibilidades de obtener el pago sin
            recurrir a procesos más complejos.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Reduce la cartera vencida.</li>
            <li>Disminuye la morosidad.</li>
            <li>Mejora el flujo de caja.</li>
            <li>Reduce costos operativos.</li>
            <li>Fortalece la relación con clientes.</li>
            <li>Permite una gestión más organizada.</li>
            <li>Facilita la toma de decisiones.</li>
            <li>Incrementa el porcentaje de recuperación.</li>
          </motion.ul>
        </motion.section>

        {/* ================= ADMINISTRATIVA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación administrativa o prejurídica: cómo recuperar deudas sin
            demandar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Aplica cuando la deuda ya está vencida y se busca una solución
            amistosa sin acudir a instancias judiciales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Una gestión administrativa eficiente puede evitar procesos legales
            prolongados y reducir costos.
          </motion.p>
        </motion.section>

        {/* ================= JURÍDICA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recuperación jurídica: cuándo demandar para recuperar una deuda en
            Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Se inicia cuando el deudor incumple reiteradamente y no existe
            voluntad de pago.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            La recuperación jurídica es el último recurso, pero resulta
            necesaria cuando se requiere proteger los derechos del acreedor.
          </motion.p>
        </motion.section>

        {/* ================= COMPARATIVA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comparación entre los principales tipos de recuperación de cartera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cada tipo de recuperación responde a un momento diferente dentro del
            ciclo de vida de la obligación. Conocer sus diferencias ayuda a
            implementar un proceso escalonado que incremente la recuperación sin
            afectar la relación comercial con el cliente.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>
              <strong>Preventiva:</strong> antes del vencimiento para evitar la
              mora.
            </li>

            <li>
              <strong>Administrativa:</strong> cuando existe mora reciente y aún
              es posible negociar directamente.
            </li>

            <li>
              <strong>Prejurídica:</strong> gestión especializada antes de
              acudir a un proceso judicial.
            </li>

            <li>
              <strong>Jurídica:</strong> utilizada cuando las demás alternativas
              no generan resultados.
            </li>
          </motion.ul>
        </motion.section>

        {/* ================= SEGÚN MORA ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué tipo de recuperación utilizar según la antigüedad de la
            cartera?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No todas las obligaciones requieren el mismo tratamiento. A medida
            que la mora aumenta, también cambian las estrategias recomendadas
            para recuperar los valores pendientes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>0 a 30 días: seguimiento preventivo y recordatorios.</li>

            <li>31 a 60 días: negociación administrativa.</li>

            <li>61 a 90 días: seguimiento intensivo y acuerdos de pago.</li>

            <li>91 a 180 días: recuperación prejurídica.</li>

            <li>Más de 180 días: evaluación de acciones jurídicas.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Implementar estas etapas evita escalar innecesariamente los procesos
            y mejora considerablemente la tasa de recuperación.
          </motion.p>
        </motion.section>

        {/* ================= PROCESO COMPLETO ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Cómo implementar un proceso de recuperación de cartera realmente
            efectivo?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Independientemente del tamaño de la empresa, la recuperación de
            cartera no debería depender de llamadas improvisadas o decisiones
            aisladas de cada asesor. Las organizaciones que obtienen mejores
            indicadores de recaudo trabajan bajo procesos estandarizados donde
            cada cliente recibe un tratamiento según el nivel de riesgo, el
            tiempo de mora y su historial de pagos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Un proceso organizado permite disminuir el tiempo promedio de
            recuperación, reducir costos operativos y aumentar considerablemente
            la probabilidad de recaudo sin afectar la relación comercial con el
            cliente.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Clasificación automática de clientes según riesgo.</li>

            <li>Políticas claras de crédito y cobranza.</li>

            <li>Seguimiento permanente de cada obligación.</li>

            <li>Automatización de recordatorios y notificaciones.</li>

            <li>Negociación temprana cuando aparecen dificultades de pago.</li>

            <li>
              Escalamiento oportuno hacia recuperación jurídica cuando sea
              necesario.
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Este tipo de metodología permite que la empresa mantenga el control
            sobre toda la cartera, evitando que pequeñas cuentas vencidas
            terminen convirtiéndose en pérdidas financieras de gran impacto.
          </motion.p>
        </motion.section>

        {/* ================= DIFERENCIA ENTRE ETAPAS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Diferencias entre recuperación preventiva, administrativa y jurídica
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Aunque las tres etapas tienen como objetivo recuperar el dinero
            adeudado, cada una responde a momentos completamente diferentes
            dentro del ciclo de crédito.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Comprender estas diferencias permite aplicar estrategias más
            eficientes y evitar iniciar procesos jurídicos cuando todavía
            existen posibilidades de negociación o, por el contrario, perder
            tiempo en gestiones administrativas cuando la recuperación judicial
            resulta inevitable.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>
              <strong>Cobranza preventiva:</strong> busca evitar que la
              obligación llegue a mora mediante recordatorios y seguimiento
              antes del vencimiento.
            </li>

            <li>
              <strong>Cobranza administrativa o prejurídica:</strong> intenta
              recuperar la deuda mediante negociación, llamadas, correos,
              WhatsApp y acuerdos de pago sin acudir a procesos judiciales.
            </li>

            <li>
              <strong>Cobranza jurídica:</strong> inicia cuando las gestiones
              anteriores no generan resultados y se requiere acudir a mecanismos
              legales para obtener el pago de la obligación.
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La mayoría de empresas exitosas combinan las tres etapas dentro de
            una estrategia integral de recuperación de cartera, permitiendo
            intervenir en el momento adecuado según el comportamiento del
            cliente.
          </motion.p>
        </motion.section>

        {/* ================= CONCLUSIÓN ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Cuál es el mejor tipo de recuperación de cartera para una empresa?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No existe una única estrategia que funcione para todas las empresas.
            El éxito en la recuperación de cartera depende de aplicar el tipo de
            gestión adecuado según la antigüedad de la deuda, el comportamiento
            del cliente, el monto pendiente y la probabilidad real de recaudo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Las organizaciones que obtienen mejores resultados suelen
            implementar un proceso escalonado: primero utilizan acciones
            preventivas para disminuir la mora, posteriormente aplican una
            cobranza administrativa con seguimiento permanente y acuerdos de
            pago, y solo recurren a la recuperación jurídica cuando las
            alternativas de negociación se han agotado.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además, complementar estas etapas con herramientas de
            automatización, segmentación de clientes, indicadores de gestión y
            seguimiento continuo permite incrementar el porcentaje de
            recuperación, reducir costos operativos y mantener un flujo de caja
            mucho más estable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Cobrando Online creemos que una estrategia integral de
            recuperación de cartera no consiste únicamente en cobrar una deuda,
            sino en establecer un proceso organizado, medible y escalable que
            permita disminuir la mora, fortalecer la relación con los clientes y
            mejorar la rentabilidad de la empresa a largo plazo.
          </motion.p>
        </motion.section>

        {/* ================= FAQ ================= */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Preguntas frecuentes sobre los tipos de recuperación de cartera
          </motion.h2>

          <h3>
            ¿Cuáles son los tipos de recuperación de cartera más utilizados en
            Colombia?
          </h3>

          <p>
            Generalmente las empresas implementan tres etapas: recuperación
            preventiva, recuperación administrativa o prejurídica y recuperación
            jurídica. Cada una responde al nivel de mora del cliente y al riesgo
            de incumplimiento.
          </p>

          <h3>
            ¿Cuál es la diferencia entre cobranza preventiva y cobranza
            administrativa?
          </h3>

          <p>
            La cobranza preventiva busca evitar que la factura entre en mora
            mediante recordatorios y seguimiento oportuno. La cobranza
            administrativa inicia cuando la obligación ya venció y se busca
            recuperar el dinero mediante negociación, seguimiento y acuerdos de
            pago.
          </p>

          <h3>¿Cuándo debe iniciarse una recuperación jurídica de cartera?</h3>

          <p>
            Normalmente se inicia cuando el cliente incumple reiteradamente sus
            obligaciones, no responde a las gestiones administrativas o incumple
            los acuerdos de pago previamente suscritos.
          </p>

          <h3>¿Qué tipo de recuperación ofrece mejores resultados?</h3>

          <p>
            La recuperación preventiva suele generar el mayor porcentaje de
            éxito, debido a que evita que la deuda aumente y permite mantener
            una comunicación permanente con el cliente antes del vencimiento.
          </p>

          <h3>
            ¿Es recomendable combinar las diferentes etapas de recuperación?
          </h3>

          <p>
            Sí. La mayoría de empresas implementan un proceso escalonado donde
            la cobranza preventiva evoluciona hacia la recuperación
            administrativa y, únicamente cuando resulta necesario, hacia la
            recuperación jurídica.
          </p>

          <h3>
            ¿Qué herramientas ayudan a mejorar la recuperación de cartera?
          </h3>

          <p>
            Los software especializados de cobranza, CRM, plataformas de
            automatización, recordatorios por correo electrónico, WhatsApp
            empresarial, indicadores de gestión y tableros de seguimiento
            permiten aumentar significativamente la eficiencia del proceso.
          </p>

          <h3>¿Cómo saber qué estrategia utilizar con cada cliente?</h3>

          <p>
            Lo recomendable es segmentar la cartera según el comportamiento de
            pago, la antigüedad de la deuda, el valor pendiente y el nivel de
            riesgo. De esta manera cada cliente recibe una estrategia de
            recuperación acorde con su perfil.
          </p>

          <h3>
            ¿Cómo reducir la mora sin afectar la relación con los clientes?
          </h3>

          <p>
            Implementando procesos preventivos, comunicaciones respetuosas,
            automatización de recordatorios, acuerdos de pago flexibles y
            seguimiento constante antes de considerar acciones más estrictas.
          </p>
        </motion.section>
      </motion.article>
    </main>
  );
}
