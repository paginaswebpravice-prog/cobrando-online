"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ModeloCartaCobro() {
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
          Plantillas de Cobranza
        </motion.span>

        <h1>Modelos de carta de cobro para recuperación de cartera</h1>

        <p className={styles.intro}>
          Las cartas de cobro son documentos utilizados para informar a los
          clientes sobre obligaciones pendientes y solicitar el pago de manera
          formal. Una carta bien redactada ayuda a mantener una comunicación
          profesional, documentar la gestión realizada y aumentar las
          probabilidades de recuperación de cartera.
        </p>

        <h2>¿Qué es una carta de cobro?</h2>

        <p>
          Es una comunicación formal enviada por una empresa o acreedor a un
          cliente con el objetivo de recordar una obligación pendiente,
          solicitar el pago o informar las consecuencias de un posible
          incumplimiento.
        </p>

        <p>
          Dependiendo del nivel de mora, la carta puede tener un enfoque
          preventivo, persuasivo o jurídico.
        </p>

        <h2>Beneficios de utilizar cartas de cobro</h2>

        <ul>
          <li>Formalizan la gestión de cobranza.</li>
          <li>Generan evidencia documental.</li>
          <li>Mejoran la comunicación con el cliente.</li>
          <li>Facilitan negociaciones posteriores.</li>
          <li>Sirven como soporte en procesos jurídicos.</li>
        </ul>

        <h2>Modelo de carta de recordatorio de pago</h2>

        <p>
          Este formato se utiliza antes o pocos días después del vencimiento.
        </p>

        <blockquote>
          <p>Asunto: Recordatorio de pago pendiente</p>
          <p>Estimado(a) [Nombre del Cliente]:</p>
          <p>
            Nos permitimos informar que la factura No. [Número] por valor de
            [Valor] presenta fecha de vencimiento el [Fecha]. Agradecemos
            verificar el estado del pago y comunicarse con nosotros ante
            cualquier inquietud.
          </p>
          <p>
            Cordialmente,
            <br />
            [Empresa]
          </p>
        </blockquote>

        <h2>Modelo de carta para cartera vencida</h2>

        <blockquote>
          <p>Asunto: Notificación de obligación vencida</p>
          <p>
            De acuerdo con nuestros registros, la obligación identificada con la
            factura No. [Número] presenta un saldo pendiente de pago.
          </p>
          <p>
            Solicitamos regularizar la situación a la mayor brevedad posible o
            comunicarse con nuestro equipo para revisar alternativas de pago.
          </p>
        </blockquote>

        <h2>Modelo de carta para propuesta de acuerdo</h2>

        <blockquote>
          <p>
            Con el propósito de facilitar la normalización de la obligación,
            ponemos a su disposición la posibilidad de establecer un acuerdo de
            pago ajustado a sus necesidades.
          </p>
          <p>
            Nuestro equipo se encuentra disponible para revisar opciones y
            definir un plan de pago adecuado.
          </p>
        </blockquote>

        <h2>Modelo de carta prejurídica</h2>

        <blockquote>
          <p>
            Le informamos que, debido al incumplimiento de la obligación
            pendiente, su caso podría ser trasladado a una etapa de cobro
            prejurídico o jurídico.
          </p>
          <p>
            Lo invitamos a comunicarse con nuestra empresa para buscar una
            solución antes de iniciar acciones adicionales.
          </p>
        </blockquote>

        <h2>Elementos que debe contener una carta de cobro</h2>

        <ul>
          <li>Fecha de emisión.</li>
          <li>Datos del cliente.</li>
          <li>Número de factura u obligación.</li>
          <li>Valor adeudado.</li>
          <li>Fecha de vencimiento.</li>
          <li>Información de contacto.</li>
          <li>Solicitud clara de pago.</li>
        </ul>

        <h2>Errores frecuentes al redactar cartas de cobro</h2>

        <ul>
          <li>Utilizar lenguaje agresivo.</li>
          <li>No identificar correctamente la obligación.</li>
          <li>Omitir datos de contacto.</li>
          <li>No especificar el valor adeudado.</li>
          <li>Enviar comunicaciones ambiguas.</li>
        </ul>

        <h2>¿Carta física o digital?</h2>

        <p>
          Actualmente muchas empresas utilizan cartas de cobro digitales por
          correo electrónico, ya que permiten agilizar el proceso y conservar
          evidencia de envío. Sin embargo, en algunos casos puede ser útil
          complementar la gestión con comunicaciones físicas.
        </p>

        <h2>Conclusión</h2>

        <p>
          Los modelos de carta de cobro son herramientas fundamentales para una
          gestión de cartera organizada y profesional. Adaptar el mensaje según
          el nivel de mora y mantener una comunicación clara puede mejorar
          significativamente los resultados de recuperación.
        </p>
      </motion.article>
    </main>
  );
}
