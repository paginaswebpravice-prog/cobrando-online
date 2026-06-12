"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EmailsCobranza() {
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

        <h1>Emails de cobranza efectivos para recuperar cartera</h1>

        <p className={styles.intro}>
          El correo electrónico sigue siendo una de las herramientas más
          utilizadas en la gestión de cobranza empresarial. Un email bien
          redactado permite recordar obligaciones pendientes, documentar las
          comunicaciones y fortalecer los procesos de recuperación de cartera de
          forma profesional.
        </p>

        <h2>¿Por qué utilizar emails en la cobranza?</h2>

        <p>
          Los correos electrónicos permiten dejar evidencia de las gestiones
          realizadas y facilitan el envío de documentos como facturas,
          certificaciones y acuerdos de pago.
        </p>

        <ul>
          <li>Generan trazabilidad de la comunicación.</li>
          <li>Permiten adjuntar soportes.</li>
          <li>Facilitan el seguimiento de clientes.</li>
          <li>Son económicos y escalables.</li>
          <li>Ayudan a formalizar acuerdos.</li>
        </ul>

        <h2>Email preventivo antes del vencimiento</h2>

        <p>
          Este correo busca recordar la obligación antes de que se genere mora.
        </p>

        <ul>
          <li>Asunto: Recordatorio de pago próximo a vencer</li>
          <li>
            Estimado cliente, le recordamos que la factura No. [Número] tiene
            fecha de vencimiento el [Fecha]. Quedamos atentos a cualquier
            inquietud. Gracias por su atención.
          </li>
        </ul>

        <h2>Email para factura vencida</h2>

        <p>
          Cuando la fecha de pago ya pasó, el mensaje debe ser cordial pero más
          directo.
        </p>

        <ul>
          <li>Asunto: Pago pendiente de factura</li>
          <li>
            Hemos identificado que la factura No. [Número] presenta saldo
            pendiente. Agradecemos validar el estado del pago o informarnos si
            existe alguna novedad para apoyarle en el proceso.
          </li>
        </ul>

        <h2>Email para solicitar acuerdo de pago</h2>

        <ul>
          <li>Asunto: Alternativas para regularizar su obligación</li>
          <li>
            Entendemos que pueden presentarse situaciones que dificulten el pago
            oportuno. Estamos disponibles para revisar opciones de acuerdo de
            pago que faciliten la normalización de la obligación.
          </li>
        </ul>

        <h2>Email de seguimiento a compromiso</h2>

        <ul>
          <li>Asunto: Seguimiento a acuerdo de pago</li>
          <li>
            Le recordamos que según el acuerdo establecido, la próxima cuota se
            encuentra programada para el día [Fecha]. Agradecemos confirmar la
            realización del pago.
          </li>
        </ul>

        <h2>Elementos que debe tener un email de cobranza</h2>

        <ul>
          <li>Asunto claro y profesional.</li>
          <li>Identificación de la obligación.</li>
          <li>Valor pendiente.</li>
          <li>Fecha de vencimiento.</li>
          <li>Canales de contacto.</li>
          <li>Opciones de pago disponibles.</li>
          <li>Llamado a la acción claro.</li>
        </ul>

        <h2>Buenas prácticas para correos de cobranza</h2>

        <ul>
          <li>Mantener un tono respetuoso.</li>
          <li>Personalizar el mensaje.</li>
          <li>Utilizar asuntos específicos.</li>
          <li>Enviar recordatorios oportunamente.</li>
          <li>Adjuntar documentos relevantes.</li>
          <li>Registrar todas las comunicaciones.</li>
        </ul>

        <h2>Errores frecuentes</h2>

        <ul>
          <li>Utilizar lenguaje agresivo.</li>
          <li>No especificar la deuda.</li>
          <li>Enviar mensajes demasiado extensos.</li>
          <li>No realizar seguimiento posterior.</li>
          <li>Enviar correos sin información de contacto.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          Los emails de cobranza efectivos permiten mejorar la recuperación de
          cartera, fortalecer la comunicación con los clientes y documentar las
          gestiones realizadas. Una estrategia de correo estructurada puede
          incrementar significativamente las probabilidades de recaudo.
        </p>
      </motion.article>
    </main>
  );
}
