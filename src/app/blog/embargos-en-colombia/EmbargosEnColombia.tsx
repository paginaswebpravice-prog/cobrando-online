"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EmbargosEnColombia() {
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
          Cobro Jurídico y Recuperación de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Embargos en Colombia: qué se puede embargar, qué bienes no y cómo
          funciona un embargo por deudas
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Los embargos en Colombia son una de las herramientas legales más
          utilizadas dentro de los procesos de recuperación de cartera y cobro
          de obligaciones. Cuando un deudor incumple el pago y existe un título
          que permite exigir la deuda, un juez puede ordenar el embargo de
          determinados bienes para garantizar el cumplimiento de la obligación.
          Comprender cómo funciona esta medida permite a las empresas proteger
          su flujo de caja y a los deudores conocer cuáles son sus derechos y
          las limitaciones establecidas por la ley.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sin embargo, existe mucha desinformación alrededor del embargo de
          cuentas bancarias, salarios, vehículos, inmuebles y demás bienes.
          Muchas personas creen que cualquier bien puede ser embargado o que una
          empresa puede hacerlo directamente, cuando en realidad la legislación
          colombiana exige el cumplimiento de un procedimiento judicial y el
          respeto por las garantías del deudor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En esta guía encontrarás qué es un embargo, qué bienes pueden ser
          embargados, cuáles son inembargables, cómo funciona el embargo de
          cuentas bancarias y salarios, cuáles son las etapas del proceso y qué
          aspectos deben considerar las empresas que buscan recuperar una
          cartera de manera eficiente y conforme a la normatividad colombiana.
        </motion.p>

        {/*  QUE ES UN EMBARGO Y PARA QUE SIRVE  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es un embargo en Colombia y para qué sirve dentro de un proceso
          de cobro?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El embargo es una medida cautelar decretada por una autoridad judicial
          cuyo objetivo principal consiste en inmovilizar bienes o derechos del
          deudor para garantizar que exista patrimonio suficiente con el cual
          responder por una obligación económica en caso de que el proceso
          concluya a favor del acreedor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En otras palabras, el embargo no significa que el acreedor se
          convierta inmediatamente en propietario de los bienes del deudor. Lo
          que hace esta medida es impedir que dichos bienes sean vendidos,
          ocultados o transferidos mientras el proceso judicial continúa,
          protegiendo así la posibilidad real de recuperar la deuda.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dependiendo del caso concreto, el juez podrá ordenar el embargo de
          cuentas bancarias, salarios, inmuebles, vehículos, acciones, derechos
          patrimoniales y otros activos con valor económico, siempre dentro de
          los límites previstos por la legislación colombiana.
        </motion.p>

        {/* QUIEN PUEDE SOLICITAR UN EMBARGO EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Quién puede solicitar un embargo en Colombia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una de las dudas más frecuentes consiste en saber si cualquier persona
          puede embargar bienes o cuentas bancarias. La respuesta es no. En
          Colombia los embargos solamente pueden ser decretados por la autoridad
          competente dentro de un proceso judicial o en los casos expresamente
          autorizados por la ley. Ninguna empresa, banco o particular puede
          embargar directamente los bienes de otra persona sin que exista un
          procedimiento legal que respalde dicha actuación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Generalmente, quien solicita el embargo es el acreedor, es decir, la
          persona natural o jurídica que busca recuperar una obligación
          económica incumplida. Sin embargo, será el juez quien analice los
          documentos aportados, la existencia de un título ejecutivo y los demás
          requisitos legales antes de decidir si la medida cautelar resulta
          procedente.
        </motion.p>

        {/* CUALES SON LOS REQUISITOS PARA QUE EXISTA UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuáles son los requisitos para que exista un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque cada proceso puede presentar particularidades, normalmente el
          embargo requiere la existencia de una obligación clara, expresa y
          exigible respaldada por un documento que permita iniciar un proceso
          ejecutivo. Además, el acreedor debe acudir ante el juez competente
          para solicitar la medida y justificar la necesidad de proteger el
          patrimonio del deudor mientras avanza el proceso.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Existencia de una obligación pendiente de pago.</li>
          <li>Documento que preste mérito ejecutivo cuando sea necesario.</li>
          <li>Inicio del proceso judicial correspondiente.</li>
          <li>Solicitud formal del embargo ante la autoridad competente.</li>
          <li>Decisión judicial que autorice la medida cautelar.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es importante recordar que el embargo no constituye un castigo para el
          deudor. Su finalidad consiste en garantizar que, si el juez reconoce
          el derecho del acreedor, existan bienes suficientes para satisfacer la
          obligación sin que estos desaparezcan, sean vendidos o sean
          transferidos a terceros durante el trámite judicial.
        </motion.p>

        {/* EN QUE MOMENTO PUEDE SOLICITARSE UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿En qué momento puede solicitarse un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La solicitud del embargo suele presentarse al iniciar un proceso
          ejecutivo o durante su desarrollo. En muchos casos el acreedor
          solicita simultáneamente el mandamiento de pago y las medidas
          cautelares para evitar que el deudor disponga de su patrimonio antes
          de que finalice el proceso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esta actuación resulta especialmente importante cuando existen
          indicios de que el deudor podría ocultar bienes, vender activos o
          disminuir su patrimonio para evitar el cumplimiento de la obligación.
          Por ello, las medidas cautelares constituyen una herramienta
          fundamental dentro de la recuperación judicial de cartera.
        </motion.p>

        {/* COMO FUNCIONA EL EMBARGO DE CUENTAS BANCARIAS EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona el embargo de cuentas bancarias en Colombia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El embargo de cuentas bancarias es una de las medidas cautelares más
          utilizadas dentro de los procesos ejecutivos porque permite
          inmovilizar recursos económicos de forma rápida cuando el deudor
          mantiene dinero depositado en entidades financieras. No obstante, esta
          medida solamente puede ejecutarse cuando existe una orden emitida por
          la autoridad judicial competente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una vez el juez decreta el embargo, la orden es comunicada a las
          entidades financieras correspondientes. El banco identifica las
          cuentas del deudor, inmoviliza los recursos hasta el límite autorizado
          y reporta el resultado al despacho judicial. Durante ese tiempo el
          titular no podrá disponer de los valores afectados por la medida
          cautelar.
        </motion.p>

        {/* PASO A PASO DEL EMBARGO DE CUENTAS BANCARIAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Paso a paso del embargo de una cuenta bancaria
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>El acreedor presenta la demanda ejecutiva.</li>
          <li>El juez analiza los documentos aportados.</li>
          <li>Se decreta el embargo como medida cautelar.</li>
          <li>La orden es enviada a las entidades financieras.</li>
          <li>El banco identifica las cuentas del deudor.</li>
          <li>Los recursos quedan inmovilizados hasta el monto autorizado.</li>
          <li>
            El proceso judicial continúa hasta que exista una decisión
            definitiva.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Es importante aclarar que el banco no decide si procede o no el
          embargo. Simplemente cumple la orden emitida por la autoridad judicial
          y realiza la inmovilización de los recursos cuando corresponde.
        </motion.p>

        {/* SE PUEDEN EMBARGAR TODAS LAS CUENTAS BANCARIAS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Se pueden embargar todas las cuentas bancarias?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En términos generales, cualquier cuenta bancaria que pertenezca al
          deudor puede ser objeto de embargo si cumple las condiciones
          establecidas por la legislación colombiana. Sin embargo, existen
          recursos protegidos por normas especiales que limitan o impiden la
          afectación de determinados depósitos, subsidios o ingresos protegidos
          legalmente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando los recursos provienen de conceptos protegidos por la ley, el
          deudor puede ejercer los mecanismos procesales correspondientes para
          solicitar el levantamiento parcial o total del embargo, siempre que
          demuestre que dichos dineros tienen naturaleza inembargable.
        </motion.p>

        {/* TIEMPO DE DURACIÓN DEL EMBARGO BANCARIO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuánto tiempo dura un embargo bancario?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un plazo único para todos los casos. La duración dependerá
          del avance del proceso judicial, de la existencia de acuerdos entre
          las partes, del pago de la obligación o de la decisión del juez de
          levantar la medida. Mientras la orden permanezca vigente, los recursos
          continuarán afectados por el embargo dentro de los límites
          establecidos en el proceso.
        </motion.p>

        {/* EMBARGO DE INMUEBLES EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Embargo de inmuebles en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los bienes inmuebles, como casas, apartamentos, oficinas, bodegas,
          lotes y locales comerciales, pueden ser objeto de embargo cuando
          pertenecen al deudor y existe una orden judicial dentro de un proceso
          ejecutivo. Esta medida busca garantizar que el acreedor pueda
          recuperar total o parcialmente la obligación si finalmente obtiene una
          sentencia favorable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una vez inscrito el embargo en la Oficina de Registro de Instrumentos
          Públicos, el propietario mantiene la titularidad del inmueble, pero
          queda limitado para venderlo, hipotecarlo o transferirlo libremente
          mientras la medida permanezca vigente.
        </motion.p>

        {/* SE PUEDE EMBARGAR UNA CASA POR UNA DEUDA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Se puede embargar una casa por una deuda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sí, siempre que se cumplan los requisitos establecidos por la
          legislación colombiana y exista una orden emitida por el juez
          competente. Sin embargo, algunas viviendas pueden contar con
          protecciones legales especiales, por lo que cada caso debe analizarse
          de manera individual.
        </motion.p>

        {/* EMBARGO DE VEHÍCULOS EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Embargo de vehículos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Los vehículos también pueden ser embargados cuando hacen parte del
          patrimonio del deudor. La medida suele inscribirse ante el organismo
          de tránsito correspondiente, impidiendo la transferencia del automotor
          hasta que finalice el proceso o se levante el embargo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Automóviles particulares.</li>
          <li>Camionetas.</li>
          <li>Motocicletas.</li>
          <li>Vehículos de carga.</li>
          <li>Maquinaria registrada.</li>
        </motion.ul>

        {/* EMBARGO DE ACCIONES, PARTICIPACIONES Y DERECHOS ECONÓMICOS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Embargo de acciones, participaciones y derechos económicos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuando el deudor posee acciones, cuotas sociales o participaciones en
          una empresa, estos derechos patrimoniales también pueden ser objeto de
          embargo. Dependiendo del tipo de sociedad y de la naturaleza del
          proceso, la medida puede recaer sobre los derechos económicos
          derivados de dichas participaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esta alternativa suele utilizarse cuando el deudor desarrolla
          actividades empresariales o posee inversiones que representan un valor
          económico importante.
        </motion.p>

        {/* EMBARGO DE BIENES MUEBLES  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Embargo de bienes muebles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además de inmuebles y vehículos, determinados bienes muebles pueden
          ser embargados cuando poseen un valor económico suficiente para
          garantizar el pago de la obligación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Equipos industriales.</li>
          <li>Maquinaria.</li>
          <li>Mobiliario empresarial.</li>
          <li>Inventarios comerciales.</li>
          <li>Equipos tecnológicos.</li>
          <li>Mercancías.</li>
          <li>Otros activos susceptibles de valoración económica.</li>
        </motion.ul>

        {/* FACTORES QUE TIENE EN CUENTA UN JUZGADO ANTES DE DECRETAR UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué factores tiene en cuenta un juez antes de decretar un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La autoridad judicial analiza diferentes elementos antes de ordenar
          una medida cautelar. Entre ellos se encuentran la existencia de un
          título ejecutivo válido, la identificación de los bienes del deudor,
          la cuantía de la obligación y la necesidad de garantizar el
          cumplimiento de la eventual sentencia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Asimismo, el juez debe procurar que las medidas sean proporcionales a
          la deuda reclamada, evitando afectar bienes por un valor excesivamente
          superior al necesario para garantizar el proceso.
        </motion.p>

        {/* COMO SE LEVA UN EMBARGO EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cómo se levanta un embargo en Colombia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El embargo no siempre permanece vigente hasta la terminación del
          proceso judicial. Existen diferentes circunstancias en las que la
          medida cautelar puede ser levantada por decisión del juez o como
          consecuencia del cumplimiento de la obligación. Para ello es
          indispensable que exista una orden judicial que autorice el
          levantamiento y que posteriormente sea comunicada a la entidad
          correspondiente, como bancos, oficinas de registro o autoridades de
          tránsito.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras no exista una orden expresa de levantamiento, el embargo
          continúa produciendo efectos legales, incluso cuando el deudor
          considere que la deuda ya fue cancelada o exista un acuerdo entre las
          partes.
        </motion.p>

        {/* EN QUE CASOS PUEDE LEVANTARSE UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿En qué casos puede levantarse un embargo?
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pago total de la obligación.</li>
          <li>Cumplimiento de un acuerdo aprobado dentro del proceso.</li>
          <li>Terminación del proceso ejecutivo.</li>
          <li>Revocatoria de la medida por decisión judicial.</li>
          <li>Embargo practicado sobre bienes inembargables.</li>
          <li>Errores procesales que afecten la validez de la medida.</li>
          <li>
            Prescripción o extinción de la obligación cuando resulte procedente.
          </li>
        </motion.ul>

        {/* CUANTO TIEMPO PUEDE DURAR UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuánto tiempo puede durar un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No existe un plazo único para todos los casos. La duración dependerá
          del tiempo que tome el proceso judicial, del comportamiento de las
          partes, de la complejidad del expediente y de la existencia o no de
          acuerdos de pago. Algunos embargos pueden mantenerse durante varios
          meses, mientras que otros permanecen vigentes durante años hasta que
          la obligación quede totalmente satisfecha.
        </motion.p>

        {/* QUE SUCEDE DESPUES DEL EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué sucede después del embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El embargo constituye únicamente una medida cautelar destinada a
          garantizar el resultado del proceso. Dependiendo de la evolución del
          caso, el bien embargado puede permanecer únicamente afectado o, si la
          obligación no es cancelada y el proceso continúa, podrían adelantarse
          etapas posteriores previstas por la ley para lograr la satisfacción
          del crédito.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, tanto acreedores como deudores deben realizar
          seguimiento permanente al proceso y atender oportunamente los
          requerimientos judiciales para evitar consecuencias económicas
          adicionales.
        </motion.p>

        {/* ERRORES FRECUENTES RELACIONADOS CON LOS EMBARGOS  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes relacionados con los embargos
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Creer que cualquier persona puede ordenar un embargo.</li>
          <li>
            Pensar que todas las deudas generan automáticamente un embargo.
          </li>
          <li>Suponer que todos los bienes pueden ser embargados.</li>
          <li>No verificar si existen bienes protegidos por la ley.</li>
          <li>Ignorar las notificaciones del proceso judicial.</li>
          <li>No responder oportunamente las actuaciones procesales.</li>
          <li>Esperar hasta el último momento para negociar la obligación.</li>
          <li>Creer que un embargo significa la pérdida inmediata del bien.</li>
        </motion.ul>

        {/* RECOMENDACIONES PARA EMPRESAS QUE BUSCAN RECUPERAR UNA DEUDA MEDIANTE EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Recomendaciones para empresas que buscan recuperar una deuda mediante
          embargo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de acudir a un proceso judicial es recomendable agotar
          mecanismos de cobranza preventiva, negociación y acuerdos de pago.
          Cuando estas alternativas no generan resultados, el cobro jurídico y
          la solicitud de medidas cautelares pueden convertirse en herramientas
          eficaces para proteger los intereses del acreedor y aumentar las
          probabilidades de recuperación de la cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una adecuada gestión documental, el seguimiento permanente del proceso
          y la identificación de bienes del deudor suelen incrementar la
          efectividad de las acciones de recuperación y reducir los tiempos
          asociados al recaudo de las obligaciones pendientes.
        </motion.p>

        {/* PREGUNTAS FRECUENTES SOBRE LOS EMBARGOS EN COLOMBIA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes sobre los embargos en Colombia
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Cómo saber si una persona tiene un embargo?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La existencia de un embargo dependerá del tipo de bien afectado. En
          algunos casos es posible verificar la información mediante
          certificados expedidos por las entidades competentes, mientras que en
          otros será necesario revisar el proceso judicial correspondiente o
          consultar directamente con la autoridad que decretó la medida.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Se puede negociar una deuda después de que existe un embargo?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sí. En muchos procesos las partes pueden llegar a acuerdos de pago
          incluso después de haberse decretado el embargo. Si el acuerdo se
          cumple en los términos establecidos, podrá solicitarse el
          levantamiento de la medida conforme a la decisión del juez competente.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Un embargo significa que se pierde inmediatamente el bien?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          No. El embargo únicamente limita la disposición del bien como garantía
          del proceso. La pérdida definitiva del bien dependerá del desarrollo
          del proceso judicial y de las decisiones que adopte la autoridad
          competente conforme a la ley.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Una empresa también puede ser embargada?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sí. Las personas jurídicas pueden ser objeto de medidas cautelares
          sobre sus cuentas bancarias, inmuebles, vehículos, maquinaria,
          acciones y otros activos cuando exista un proceso judicial que así lo
          autorice.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos permiten solicitar un embargo?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Normalmente se requiere un título ejecutivo válido, como pagarés,
          letras de cambio, facturas que cumplan los requisitos legales,
          contratos con mérito ejecutivo o sentencias judiciales, entre otros
          documentos reconocidos por la legislación colombiana.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿El embargo afecta el historial financiero?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El embargo es una medida judicial y no constituye por sí mismo un
          reporte financiero. Sin embargo, la obligación que originó el proceso
          puede tener consecuencias en materia crediticia dependiendo de las
          circunstancias del caso y de la normatividad aplicable.
        </motion.p>

        {/*  ASPECTOS QUE TODA EMPRESA DEBERÍA CONOCER ANTES DE INICIAR UN EMBARGO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aspectos que toda empresa debería conocer antes de iniciar un embargo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Antes de acudir a un proceso ejecutivo es recomendable verificar que
          la documentación soporte correctamente la obligación, identificar los
          bienes del deudor, mantener actualizado el historial de comunicaciones
          y evaluar si existen posibilidades de negociación. Estas acciones
          suelen aumentar la probabilidad de éxito durante la recuperación de
          cartera y reducen riesgos procesales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Asimismo, resulta conveniente medir indicadores como la antigüedad de
          la cartera, el porcentaje de recuperación, el DSO y otros KPIs
          financieros para determinar el momento adecuado en que una obligación
          debe pasar de una etapa de cobranza preventiva a un proceso de cobro
          jurídico.
        </motion.p>

        {/*  CONCLUSIÓN: EL EMBARGO DEBE ENTENDERSE COMO UNA HERRAMIENTA DENTRO DE UNA ESTRATEGIA INTEGRAL DE RECUPERACIÓN DE CARTERA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: el embargo debe entenderse como una herramienta dentro de
          una estrategia integral de recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los embargos en Colombia constituyen una medida cautelar orientada a
          proteger el derecho del acreedor cuando existen obligaciones
          incumplidas respaldadas por un título ejecutivo. Sin embargo, no deben
          verse como el primer paso de la gestión de cobranza, sino como una
          alternativa que puede utilizarse cuando las etapas preventivas y
          persuasivas no han producido resultados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Para las empresas, una adecuada administración del crédito, el
          seguimiento permanente a las cuentas por cobrar, la segmentación de
          clientes y la implementación de procesos eficientes de recuperación
          permiten disminuir la necesidad de acudir a medidas judiciales. Cuando
          estas resultan necesarias, contar con información organizada y una
          estrategia de recuperación bien estructurada incrementa
          significativamente las probabilidades de éxito.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En Cobrando Online compartimos contenido especializado sobre gestión
          de cartera, indicadores financieros, cobranza preventiva, recuperación
          de cartera B2B y procesos de cobro jurídico para ayudar a las empresas
          a tomar decisiones informadas y fortalecer su flujo de caja mediante
          una gestión eficiente de las cuentas por cobrar.
        </motion.p>
      </motion.article>
    </main>
  );
}
