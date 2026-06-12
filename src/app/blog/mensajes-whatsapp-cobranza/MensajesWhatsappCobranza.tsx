"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MensajesWhatsappCobranza() {
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

        <h1>Mensajes de WhatsApp para cobrar clientes de forma profesional</h1>

        <p className={styles.intro}>
          WhatsApp se ha convertido en uno de los canales más efectivos para la
          recuperación de cartera. Permite contactar rápidamente a los clientes,
          generar recordatorios oportunos y negociar pagos sin necesidad de
          llamadas extensas. Sin embargo, es importante utilizar mensajes
          adecuados que mantengan una comunicación profesional y respetuosa.
        </p>

        <h2>¿Por qué utilizar WhatsApp para cobranza?</h2>

        <p>
          La mayoría de las personas revisa WhatsApp varias veces al día, por lo
          que los mensajes suelen tener tasas de lectura superiores a otros
          medios de comunicación.
        </p>

        <ul>
          <li>Comunicación rápida y directa.</li>
          <li>Alta tasa de apertura.</li>
          <li>Menor costo operativo.</li>
          <li>Facilidad para enviar soportes y facturas.</li>
          <li>Seguimiento eficiente de compromisos.</li>
        </ul>

        <h2>Mensaje amistoso antes del vencimiento</h2>

        <p>
          Este tipo de mensaje funciona como recordatorio preventivo antes de la
          fecha límite de pago.
        </p>

        <ul>
          <li>
            Hola [Nombre]. Esperamos que te encuentres muy bien. Te recordamos
            que la factura No. [Número] tiene fecha de vencimiento el próximo
            [Fecha]. Quedamos atentos a cualquier inquietud. Gracias.
          </li>
        </ul>

        <h2>Mensaje para factura recién vencida</h2>

        <p>
          Cuando la obligación acaba de vencer es recomendable mantener un tono
          cordial y asumir inicialmente que pudo tratarse de un olvido.
        </p>

        <ul>
          <li>
            Hola [Nombre]. Hemos identificado que la factura No. [Número] se
            encuentra pendiente de pago desde el [Fecha]. Agradecemos tu apoyo
            para verificar el estado del pago. Quedamos atentos.
          </li>
        </ul>

        <h2>Mensaje para mora entre 30 y 60 días</h2>

        <p>
          En esta etapa es importante ser más directo sin afectar la relación
          comercial.
        </p>

        <ul>
          <li>
            Buen día [Nombre]. Registramos un saldo pendiente correspondiente a
            la factura No. [Número]. Nos gustaría conocer si existe alguna
            novedad o dificultad para gestionar el pago y evaluar posibles
            alternativas.
          </li>
        </ul>

        <h2>Mensaje para solicitar acuerdo de pago</h2>

        <ul>
          <li>
            Hola [Nombre]. Entendemos que pueden surgir dificultades
            financieras. Si lo consideras conveniente, podemos revisar opciones
            de acuerdo de pago que faciliten la cancelación de la obligación.
          </li>
        </ul>

        <h2>Mensaje de confirmación de acuerdo</h2>

        <ul>
          <li>
            Gracias por tu disposición. Confirmamos el acuerdo de pago por valor
            de [Valor], distribuido en [Número] cuotas. Te estaremos enviando
            los recordatorios correspondientes según las fechas acordadas.
          </li>
        </ul>

        <h2>Mensaje de seguimiento a compromiso adquirido</h2>

        <ul>
          <li>
            Hola [Nombre]. Te recordamos que según el acuerdo establecido, hoy
            corresponde el pago de la cuota programada. Quedamos atentos a la
            confirmación del pago. Muchas gracias.
          </li>
        </ul>

        <h2>Buenas prácticas para cobranza por WhatsApp</h2>

        <ul>
          <li>Mantener un tono profesional y respetuoso.</li>
          <li>Personalizar los mensajes.</li>
          <li>Evitar amenazas o lenguaje agresivo.</li>
          <li>Registrar las conversaciones importantes.</li>
          <li>Enviar información clara y verificable.</li>
          <li>Realizar seguimiento periódico.</li>
        </ul>

        <h2>Errores comunes al cobrar por WhatsApp</h2>

        <ul>
          <li>Enviar demasiados mensajes en poco tiempo.</li>
          <li>Utilizar lenguaje ofensivo.</li>
          <li>No identificar claramente la deuda.</li>
          <li>Contactar en horarios inadecuados.</li>
          <li>No documentar acuerdos alcanzados.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          Los mensajes de WhatsApp son una herramienta poderosa para la gestión
          de cobranza cuando se utilizan correctamente. Una comunicación clara,
          respetuosa y constante puede mejorar significativamente la
          recuperación de cartera y fortalecer la relación con los clientes.
        </p>
      </motion.article>
    </main>
  );
}
