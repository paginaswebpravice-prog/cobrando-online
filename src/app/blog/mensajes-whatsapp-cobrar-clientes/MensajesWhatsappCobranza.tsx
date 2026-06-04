"use client";

import styles from "./Article.module.css";
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Cobranza por WhatsApp
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          7 mensajes de WhatsApp para cobrar clientes sin sonar agresivo
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          WhatsApp se ha convertido en una de las herramientas más utilizadas
          para hacer seguimiento de pagos y recuperar cartera. Sin embargo,
          muchas empresas cometen el error de enviar mensajes demasiado
          agresivos o insistentes, afectando la relación comercial con el
          cliente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Utilizar mensajes claros, profesionales y estratégicos aumenta las
          probabilidades de recibir respuesta y recuperar el dinero pendiente
          sin generar conflictos innecesarios.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #1: recordatorio amistoso antes del vencimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre], esperamos que estés muy bien. Te recordamos que la
          factura #[Número] tiene fecha de vencimiento el día [Fecha]. Quedamos
          atentos a cualquier inquietud. Muchas gracias.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #2: seguimiento el día del vencimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre]. Te escribimos para confirmar el pago pendiente de la
          factura #[Número], la cual vence hoy. Si ya realizaste el pago, por
          favor ignora este mensaje. Gracias.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #3: primer recordatorio después de la mora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre], notamos que la factura #[Número] aún aparece pendiente
          de pago. Queremos validar si hubo algún inconveniente o si necesitas
          apoyo con el proceso. Quedamos atentos.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #4: propuesta de acuerdo de pago
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre]. Entendemos que pueden presentarse dificultades
          temporales. Si lo deseas, podemos revisar opciones de acuerdo de pago
          para facilitar la normalización de la deuda.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #5: seguimiento con fecha límite
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre]. Agradecemos realizar el pago pendiente antes del día
          [Fecha] para evitar generar procesos adicionales de cobranza. Quedamos
          atentos a tu confirmación.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #6: último aviso antes de escalar el caso
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre]. Hemos intentado comunicarnos en varias ocasiones sobre
          la factura pendiente #[Número]. Agradecemos tu pronta respuesta para
          evitar iniciar un proceso de cobro prejurídico.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mensaje #7: confirmación de pago recibida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hola [Nombre]. Confirmamos la recepción de tu pago. Muchas gracias por
          ponerte al día con la obligación. Seguimos atentos para ayudarte en lo
          que necesites.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: cómo cobrar clientes por WhatsApp de forma profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La cobranza por WhatsApp puede ser muy efectiva cuando se realiza con
          mensajes claros, respetuosos y estratégicos. Mantener una comunicación
          profesional ayuda a recuperar cartera, mejorar la respuesta de los
          clientes y conservar buenas relaciones comerciales.
        </motion.p>
      </motion.article>
    </main>
  );
}
