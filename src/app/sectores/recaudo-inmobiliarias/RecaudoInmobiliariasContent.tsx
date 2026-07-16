"use client";

import { motion } from "framer-motion";
import styles from "../../../components/styles/Services.module.css";

export default function RecaudoInmobiliariasContent() {
  return (
    <main className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>
              Recuperación de cartera para inmobiliarias en Colombia
            </span>

            <h1 className={styles.title}>
              Recupera arriendos vencidos, disminuye la mora y mejora el flujo
              de caja de tu inmobiliaria
            </h1>

            <p className={styles.description}>
              En <strong>Cobrando Online</strong> ayudamos a inmobiliarias,
              administradores de propiedad raíz y empresas de arrendamiento a
              recuperar cánones de arrendamiento vencidos mediante procesos de
              cobranza preventiva, administrativa y prejurídica. Reduce la
              cartera morosa, mejora tu liquidez y aumenta el recaudo sin
              deteriorar la relación con propietarios e inquilinos.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Recuperar cartera ahora
              </a>

              <a href="#proceso" className={styles.secondary}>
                Conocer el proceso
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué aumenta la cartera vencida en las inmobiliarias y cómo afecta
          la rentabilidad del negocio?
        </h2>

        <p className={styles.text}>
          La recuperación de cartera inmobiliaria es uno de los mayores desafíos
          para empresas administradoras de inmuebles, inmobiliarias y
          administradores de propiedad horizontal. Cuando los cánones de
          arrendamiento dejan de pagarse oportunamente, el flujo de caja
          disminuye, aumentan los costos administrativos y se reduce la
          capacidad de cumplir con propietarios, proveedores y obligaciones
          operativas.
        </p>

        <p className={styles.text}>
          En muchos casos la mora no aparece de un momento a otro. Se desarrolla
          por falta de seguimiento, ausencia de recordatorios de pago, procesos
          de cobranza poco estructurados o una gestión tardía de los
          arrendatarios morosos. Mientras más tiempo permanece una deuda sin
          atención, menores son las probabilidades de recuperación voluntaria.
        </p>

        <div className={styles.grid}>
          {[
            "Arrendatarios que acumulan varios meses de mora.",
            "Seguimiento insuficiente a los pagos mensuales.",
            "Procesos de cobranza manuales y poco eficientes.",
            "Incremento constante de la cartera vencida.",
            "Falta de estrategias de cobranza preventiva.",
            "Retrasos en el flujo de caja para propietarios.",
            "Dificultad para negociar acuerdos de pago.",
            "Cartera distribuida en múltiples inmuebles y ciudades.",
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.warningBox}>
          Entre más tiempo permanezca un arriendo en mora, mayores serán los
          costos administrativos, el riesgo de incumplimiento definitivo y el
          impacto sobre la liquidez de la inmobiliaria. Una gestión temprana
          incrementa significativamente las posibilidades de recuperación.
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo la cartera vencida afecta el flujo de caja, la rentabilidad y el
          crecimiento de una inmobiliaria
        </h2>

        <p className={styles.text}>
          Cuando los arriendos dejan de pagarse oportunamente, el impacto no se
          limita al ingreso mensual de un inmueble. La mora prolongada afecta la
          liquidez de la inmobiliaria, incrementa los costos operativos, retrasa
          los pagos a los propietarios y obliga a destinar más recursos para
          recuperar una cartera que pudo gestionarse oportunamente.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h4>✔ Menor flujo de caja</h4>
            <p>
              La disminución del recaudo afecta la disponibilidad de recursos
              para la operación diaria y el cumplimiento de compromisos
              financieros.
            </p>
          </div>

          <div>
            <h4>✔ Incremento de la cartera vencida</h4>
            <p>
              Cada mes de retraso aumenta el saldo pendiente y reduce la
              probabilidad de recuperar el total de la deuda mediante una
              negociación voluntaria.
            </p>
          </div>

          <div>
            <h4>✔ Más tiempo invertido en cobranza</h4>
            <p>
              El personal administrativo dedica horas a realizar llamadas,
              recordatorios y seguimiento manual, reduciendo el tiempo
              disponible para actividades estratégicas.
            </p>
          </div>

          <div>
            <h4>✔ Afectación de la relación con propietarios</h4>
            <p>
              Los retrasos en el recaudo pueden generar inconformidad entre los
              propietarios que esperan recibir oportunamente los ingresos de sus
              inmuebles.
            </p>
          </div>

          <div>
            <h4>✔ Mayor riesgo financiero</h4>
            <p>
              Una cartera morosa creciente limita la capacidad de inversión y
              afecta la estabilidad financiera de la inmobiliaria.
            </p>
          </div>

          <div>
            <h4>✔ Menor rentabilidad del portafolio</h4>
            <p>
              Los inmuebles dejan de producir ingresos constantes, reduciendo el
              rendimiento esperado del portafolio administrado.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Una estrategia de cobranza implementada desde los primeros días de
          mora permite aumentar las probabilidades de recuperación, mejorar el
          flujo de caja y disminuir el crecimiento de la cartera vencida sin
          afectar la relación comercial con propietarios e inquilinos.
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar arriendos vencidos y reducir la cartera morosa en
          inmobiliarias sin deteriorar la relación con los arrendatarios
        </h2>

        <p className={styles.text}>
          Una estrategia de recuperación de cartera inmobiliaria no consiste
          únicamente en enviar recordatorios de pago. Las inmobiliarias que
          mantienen bajos niveles de mora suelen contar con procesos
          estructurados de seguimiento, comunicación, negociación y recaudo que
          permiten recuperar pagos pendientes antes de que la deuda aumente o
          sea necesario acudir a instancias más complejas.
        </p>

        <p className={styles.text}>
          En Cobrando Online ayudamos a inmobiliarias, administradores de
          propiedad raíz y empresas del sector inmobiliario a implementar
          procesos de cobranza preventiva y prejurídica que incrementan la
          recuperación de arriendos vencidos, mejoran el flujo de caja y
          permiten conservar relaciones comerciales cuando existe voluntad de
          pago.
        </p>

        <div className={styles.grid}>
          {[
            "Seguimiento permanente de cánones de arrendamiento vencidos.",
            "Recordatorios preventivos antes y después de cada fecha de pago.",
            "Contacto profesional con arrendatarios en mora.",
            "Negociación de acuerdos de pago adaptados a cada caso.",
            "Priorización de deudores según antigüedad y nivel de riesgo.",
            "Gestión de cobranza prejurídica para aumentar la recuperación.",
            "Control y trazabilidad de cada gestión realizada.",
            "Disminución progresiva de la cartera vencida.",
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className={styles.highlightBox}>
          Mientras más rápido se inicia el proceso de cobranza después del
          primer incumplimiento, mayores son las probabilidades de recuperar el
          arriendo sin que la deuda continúe creciendo.
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          Cómo recuperar cartera de arriendos en Colombia paso a paso
        </h2>

        <div className={styles.grid}>
          {[
            "Diagnóstico de cartera de arrendamientos en Colombia",
            "Clasificación de inquilinos morosos por riesgo",
            "Diseño de estrategia de cobro personalizada",
            "Contacto directo y negociación",
            "Seguimiento de acuerdos de pago",
            "Acciones legales si no hay cumplimiento",
          ].map((step, i) => (
            <div key={i} className={styles.card}>
              <p>
                <strong>{i + 1}. </strong>
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Beneficios de implementar una estrategia profesional de recuperación
          de cartera para inmobiliarias
        </h2>

        <p className={styles.text}>
          La recuperación de cartera no solo permite cobrar arriendos atrasados.
          También mejora la estabilidad financiera de la inmobiliaria, optimiza
          la administración de los inmuebles y reduce el tiempo que el equipo
          dedica a perseguir pagos pendientes. Un proceso de cobranza organizado
          incrementa el recaudo y genera mayor confianza tanto para propietarios
          como para arrendatarios.
        </p>

        <div className={styles.benefits}>
          <span>✔ Mayor recuperación de arriendos vencidos.</span>

          <span>✔ Disminución de la cartera morosa mes a mes.</span>

          <span>✔ Mejor flujo de caja para la operación inmobiliaria.</span>

          <span>✔ Mayor liquidez para propietarios e inversionistas.</span>

          <span>✔ Seguimiento organizado de todos los contratos.</span>

          <span>✔ Reducción del tiempo invertido en labores de cobranza.</span>

          <span>✔ Negociaciones profesionales con arrendatarios.</span>

          <span>✔ Menor riesgo de acumulación de cartera vencida.</span>

          <span>✔ Mayor control sobre el estado de cada obligación.</span>

          <span>
            ✔ Conservación de relaciones comerciales cuando existe voluntad de
            pago.
          </span>

          <span>✔ Procesos documentados y trazables.</span>

          <span>
            ✔ Incremento de la rentabilidad del portafolio inmobiliario.
          </span>
        </div>

        <div className={styles.highlightBox}>
          Una inmobiliaria con procesos de recaudo estructurados puede recuperar
          una mayor proporción de su cartera antes de que el incumplimiento se
          convierta en un problema financiero de largo plazo.
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Cobranza improvisada vs. recuperación profesional de cartera
          inmobiliaria: ¿qué genera mejores resultados?
        </h2>

        <p className={styles.text}>
          Muchas inmobiliarias intentan recuperar los arriendos vencidos
          únicamente mediante llamadas ocasionales o mensajes informales. Sin
          embargo, una estrategia profesional de cobranza permite aumentar las
          probabilidades de recaudo, mantener un seguimiento permanente y
          reducir el crecimiento de la cartera vencida sin afectar
          innecesariamente la relación con los arrendatarios.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.compareBox} ${styles.bad}`}>
            <h4>Cobranza improvisada</h4>

            <ul>
              <li>Seguimiento únicamente cuando la deuda ya es elevada.</li>
              <li>No existe un proceso definido para cada caso.</li>
              <li>Las comunicaciones son esporádicas.</li>
              <li>Se pierde tiempo buscando información de los deudores.</li>
              <li>No hay priorización según antigüedad de la mora.</li>
              <li>Los acuerdos de pago rara vez quedan documentados.</li>
              <li>La cartera continúa creciendo mes tras mes.</li>
              <li>Mayor desgaste del personal administrativo.</li>
            </ul>
          </div>

          <div className={`${styles.compareBox} ${styles.good}`}>
            <h4>Recuperación profesional de cartera</h4>

            <ul>
              <li>Seguimiento desde el primer incumplimiento.</li>
              <li>Clasificación de deudores según nivel de riesgo.</li>
              <li>Comunicación organizada y documentada.</li>
              <li>Negociaciones estructuradas para facilitar el pago.</li>
              <li>Control permanente de cada gestión realizada.</li>
              <li>Acuerdos de pago con seguimiento continuo.</li>
              <li>Mayor recuperación de arriendos vencidos.</li>
              <li>Mejor flujo de caja para propietarios e inmobiliarias.</li>
            </ul>
          </div>
        </div>

        <div className={styles.highlightBox}>
          La diferencia entre recuperar o perder una cuenta suele estar en la
          rapidez, el seguimiento constante y la organización del proceso de
          cobranza, no solo en la cantidad de llamadas realizadas.
        </div>
      </section>

      {/* TIPOS DE CARTERA */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué tipo de cartera inmobiliaria ayudamos a recuperar en Colombia?
        </h2>

        <p className={styles.text}>
          La recuperación de cartera inmobiliaria no se limita únicamente al
          cobro de cánones de arrendamiento. Dependiendo del tipo de inmueble,
          del contrato y del tiempo de mora, cada obligación requiere una
          estrategia de seguimiento diferente. Nuestro proceso de cobranza se
          adapta a las necesidades de inmobiliarias, administradores de
          propiedad raíz, constructoras y empresas que administran inmuebles
          residenciales, comerciales o industriales.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Cánones de arrendamiento vencidos</h3>
            <p>
              Recuperación de arriendos pendientes en apartamentos, casas,
              oficinas, locales comerciales, consultorios, bodegas y demás
              inmuebles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cuotas de administración pendientes</h3>
            <p>
              Gestión de cobranza para obligaciones relacionadas con
              administración de inmuebles cuando hacen parte del recaudo
              gestionado por la inmobiliaria.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos de pago incumplidos</h3>
            <p>
              Seguimiento a arrendatarios que aceptaron un acuerdo de pago pero
              dejaron de cumplir con las cuotas pactadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos con mora prolongada</h3>
            <p>
              Gestión especializada para obligaciones con varios meses de atraso
              y mayor riesgo de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cartera de inmuebles comerciales</h3>
            <p>
              Recuperación de obligaciones derivadas de locales comerciales,
              oficinas, consultorios, centros empresariales y espacios
              corporativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Portafolios con múltiples deudores</h3>
            <p>
              Administración de procesos de cobranza para inmobiliarias que
              manejan decenas o cientos de contratos de arrendamiento
              simultáneamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Clientes con mora reciente</h3>
            <p>
              Acciones preventivas para recuperar rápidamente las obligaciones
              antes de que la deuda continúe aumentando.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cartera con seguimiento periódico</h3>
            <p>
              Implementación de procesos permanentes de recaudo para disminuir
              la morosidad y mantener un flujo de caja constante.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Cada tipo de cartera presenta un nivel de riesgo diferente. Por eso
          clasificamos las obligaciones según su antigüedad, monto y
          probabilidad de recuperación para priorizar las gestiones de cobranza
          con mayor impacto.
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Por qué las inmobiliarias en Colombia eligen Cobrando Online para
          recuperar su cartera?
        </h2>

        <p className={styles.text}>
          Recuperar cartera inmobiliaria requiere mucho más que enviar mensajes
          de cobro. En Cobrando Online desarrollamos procesos de cobranza
          organizados, medibles y orientados a resultados para ayudar a
          inmobiliarias, administradores de propiedad raíz y empresas del sector
          a disminuir la morosidad y mantener un flujo de caja saludable sin
          afectar la experiencia de sus clientes.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Procesos especializados para el sector inmobiliario</h3>
            <p>
              Adaptamos cada estrategia de cobranza según el tipo de inmueble,
              la antigüedad de la deuda y el comportamiento histórico del
              arrendatario.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento permanente de cada obligación</h3>
            <p>
              Ninguna cuenta queda sin gestión. Cada deudor recibe seguimiento
              oportuno para aumentar la probabilidad de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Comunicación profesional con los arrendatarios</h3>
            <p>
              Realizamos procesos de cobranza respetuosos, organizados y
              enfocados en alcanzar acuerdos de pago cuando existe disposición
              para cumplir.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor control sobre la cartera</h3>
            <p>
              Clasificamos las obligaciones según nivel de riesgo, antigüedad y
              valor para priorizar las acciones de recuperación más efectivas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Disminución progresiva de la mora</h3>
            <p>
              El objetivo no es únicamente recuperar una deuda puntual, sino
              reducir de manera constante los indicadores de cartera vencida.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Más tiempo para administrar el negocio</h3>
            <p>
              Mientras nosotros gestionamos el recaudo, tu equipo puede
              enfocarse en captar nuevos inmuebles, atender propietarios y
              mejorar el servicio.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Nuestro enfoque está orientado a incrementar la recuperación de
          cartera, disminuir la mora y fortalecer la liquidez de las
          inmobiliarias mediante procesos de cobranza estructurados y
          eficientes.
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Cómo funciona nuestro proceso de recuperación de cartera para
          inmobiliarias en Colombia?
        </h2>

        <p className={styles.text}>
          Cada cartera inmobiliaria presenta características diferentes. Por eso
          desarrollamos un proceso de cobranza estructurado que permite
          identificar rápidamente el estado de cada obligación, establecer
          prioridades y ejecutar acciones orientadas a recuperar los arriendos
          pendientes en el menor tiempo posible. Nuestro objetivo es disminuir
          la mora, mejorar el recaudo y mantener un control permanente sobre
          cada gestión realizada.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>1. Diagnóstico de la cartera</h3>

            <p>
              Analizamos el portafolio de obligaciones para identificar
              antigüedad, monto, comportamiento de pago, nivel de riesgo y
              probabilidad de recuperación de cada arrendatario.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Priorización de deudores</h3>

            <p>
              Clasificamos la cartera según criterios de riesgo para iniciar las
              gestiones sobre las cuentas con mayor impacto financiero para la
              inmobiliaria.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Contacto con el arrendatario</h3>

            <p>
              Iniciamos comunicaciones profesionales mediante diferentes
              canales, buscando establecer contacto oportuno y conocer la
              situación del deudor.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Negociación de alternativas de pago</h3>

            <p>
              Cuando existe voluntad de pago, planteamos acuerdos que permitan
              normalizar la obligación y disminuir el riesgo de incumplimientos
              futuros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Seguimiento permanente</h3>

            <p>
              Cada acuerdo y cada compromiso adquirido recibe seguimiento
              continuo para verificar su cumplimiento y actuar oportunamente
              frente a nuevos retrasos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Control y trazabilidad</h3>

            <p>
              Todas las gestiones realizadas quedan documentadas para que la
              inmobiliaria tenga claridad sobre el estado de cada cuenta y las
              acciones ejecutadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Disminución de la cartera vencida</h3>

            <p>
              El seguimiento continuo permite recuperar obligaciones pendientes,
              reducir los indicadores de mora y mejorar el flujo de caja de la
              operación inmobiliaria.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Gestión continua del recaudo</h3>

            <p>
              Más que recuperar una deuda puntual, implementamos procesos que
              ayudan a prevenir nuevos atrasos y mantener una cartera mucho más
              saludable en el tiempo.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          Una gestión temprana y organizada incrementa significativamente las
          probabilidades de recuperar los arriendos pendientes antes de que la
          deuda continúe creciendo o afecte la rentabilidad del portafolio
          inmobiliario.
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.container}>
        <h2 className={styles.subtitle}>
          Preguntas frecuentes sobre recuperación de cartera para inmobiliarias
          en Colombia
        </h2>

        <div className={styles.infoGrid}>
          <div>
            <h4>¿Qué es la recuperación de cartera inmobiliaria?</h4>
            <p>
              Es el conjunto de estrategias de seguimiento, negociación y
              cobranza utilizadas para recuperar arriendos, cánones y demás
              obligaciones pendientes de pago por parte de arrendatarios, con el
              objetivo de disminuir la mora y mejorar el flujo de caja de la
              inmobiliaria.
            </p>
          </div>

          <div>
            <h4>
              ¿Cuándo debería iniciar el proceso de cobranza de un arriendo?
            </h4>
            <p>
              Lo recomendable es iniciar el seguimiento desde el primer
              incumplimiento. Entre más tiempo permanezca una obligación
              vencida, menores suelen ser las probabilidades de recuperación y
              mayor el impacto sobre la liquidez de la inmobiliaria.
            </p>
          </div>

          <div>
            <h4>¿Qué tipo de cartera puede recuperarse?</h4>
            <p>
              Es posible gestionar el recaudo de cánones de arrendamiento,
              acuerdos de pago incumplidos, obligaciones comerciales
              relacionadas con contratos de arrendamiento y otras cuentas por
              cobrar administradas por la inmobiliaria.
            </p>
          </div>

          <div>
            <h4>
              ¿La cobranza profesional afecta la relación con los arrendatarios?
            </h4>
            <p>
              No. Un proceso organizado y respetuoso busca mantener una
              comunicación clara con el deudor, facilitando acuerdos de pago
              cuando existe voluntad de cumplir con la obligación.
            </p>
          </div>

          <div>
            <h4>¿Cómo reducir la mora en una inmobiliaria?</h4>
            <p>
              La mejor estrategia combina seguimiento preventivo, recordatorios
              oportunos, clasificación de la cartera, negociación temprana y
              control permanente de cada obligación para evitar que la deuda
              continúe creciendo.
            </p>
          </div>

          <div>
            <h4>¿Por qué aumenta la cartera vencida en las inmobiliarias?</h4>
            <p>
              Generalmente por la falta de procesos de seguimiento,
              comunicaciones tardías, ausencia de controles periódicos y
              retrasos en el inicio de las gestiones de cobranza.
            </p>
          </div>

          <div>
            <h4>¿Es posible recuperar arriendos con varios meses de mora?</h4>
            <p>
              Sí. Cada caso requiere un análisis particular para definir la
              estrategia de cobranza más adecuada según la antigüedad de la
              obligación, el monto adeudado y el comportamiento del
              arrendatario.
            </p>
          </div>

          <div>
            <h4>
              ¿Qué beneficios obtiene una inmobiliaria al externalizar la
              cobranza?
            </h4>
            <p>
              Reduce la carga operativa del equipo administrativo, mejora el
              seguimiento de la cartera, incrementa la recuperación de pagos y
              permite concentrarse en la administración y comercialización de
              inmuebles.
            </p>
          </div>

          <div>
            <h4>¿Cómo mejorar el flujo de caja de una inmobiliaria?</h4>
            <p>
              Disminuyendo los tiempos de recaudo, implementando procesos
              preventivos de cobranza y realizando seguimiento continuo a los
              arrendamientos pendientes de pago antes de que se conviertan en
              cartera de difícil recuperación.
            </p>
          </div>

          <div>
            <h4>
              ¿Por qué elegir Cobrando Online para recuperar cartera
              inmobiliaria?
            </h4>
            <p>
              Porque implementamos procesos de cobranza estructurados, medibles
              y orientados a resultados que ayudan a disminuir la mora, mejorar
              el recaudo y fortalecer el flujo de caja de las inmobiliarias en
              Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section id="contacto" className={styles.container}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Recupera los arriendos pendientes, disminuye la mora y mejora el
            flujo de caja de tu inmobiliaria
          </h2>

          <p className={styles.ctaText}>
            Cada mes de retraso aumenta el riesgo de que una obligación sea más
            difícil de recuperar. En Cobrando Online implementamos procesos
            profesionales de cobranza para ayudar a inmobiliarias,
            administradores de propiedad raíz y empresas del sector a recuperar
            cartera vencida, optimizar el recaudo y mantener un flujo de caja
            más estable sin afectar innecesariamente la relación con los
            arrendatarios.
          </p>

          <p className={styles.ctaText}>
            Si tu inmobiliaria presenta altos niveles de mora, múltiples
            contratos con pagos pendientes o un crecimiento constante de la
            cartera vencida, podemos ayudarte a diseñar una estrategia de
            recuperación adaptada a las características de tu operación.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola,%20quiero%20información%20sobre%20recuperación%20de%20cartera%20para%20inmobiliarias."
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar diagnóstico de mi cartera
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573234372766&text=Hola,%20quiero%20hablar%20con%20un%20asesor%20sobre%20recuperación%20de%20cartera%20para%20inmobiliarias."
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
