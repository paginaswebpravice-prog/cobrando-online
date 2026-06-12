"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ScriptsLlamadasCobranza() {
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

        <h1>
          Scripts de llamadas de cobranza para recuperar cartera de forma
          profesional
        </h1>

        <p className={styles.intro}>
          Las llamadas telefónicas siguen siendo una de las herramientas más
          efectivas para la recuperación de cartera. Sin embargo, muchas
          empresas cometen errores al improvisar conversaciones con los
          clientes. Contar con scripts de cobranza ayuda a mantener una
          comunicación clara, profesional y orientada a obtener compromisos de
          pago.
        </p>

        <h2>¿Qué es un script de cobranza?</h2>

        <p>
          Un script de cobranza es una guía estructurada que orienta al asesor
          durante una llamada de recuperación de cartera. Su objetivo es
          asegurar que la conversación mantenga un enfoque profesional y aumente
          las probabilidades de recaudo.
        </p>

        <p>
          Aunque cada caso es diferente, disponer de un guion base permite
          estandarizar procesos y mejorar los resultados del equipo de cobranza.
        </p>

        <h2>Beneficios de utilizar scripts de cobranza</h2>

        <ul>
          <li>Mejoran la calidad de las llamadas.</li>
          <li>Reducen la improvisación.</li>
          <li>Facilitan la capacitación de asesores.</li>
          <li>Incrementan la recuperación de cartera.</li>
          <li>Generan una experiencia más profesional.</li>
        </ul>

        <h2>Script para recordatorio preventivo</h2>

        <p>
          Ideal para contactar clientes antes del vencimiento de la factura.
        </p>

        <ul>
          <li>
            Buenos días, habla [Nombre] de [Empresa]. Le contactamos para
            recordarle que la factura No. [Número] tiene fecha de vencimiento el
            próximo [Fecha]. Queremos confirmar que recibió la información y si
            requiere algún apoyo adicional.
          </li>
        </ul>

        <h2>Script para factura vencida recientemente</h2>

        <p>
          Cuando la mora es reciente, el enfoque debe ser cordial y orientado a
          validar si existió algún inconveniente.
        </p>

        <ul>
          <li>
            Buen día, [Nombre]. Hemos identificado que la factura No. [Número]
            presenta un saldo pendiente. Queríamos verificar si existe alguna
            novedad relacionada con el pago y cómo podemos ayudarle a
            solucionarlo.
          </li>
        </ul>

        <h2>Script para negociación de pago</h2>

        <p>
          Este guion permite explorar alternativas cuando el cliente manifiesta
          dificultades económicas.
        </p>

        <ul>
          <li>
            Entendemos la situación actual. Nos gustaría conocer qué opciones de
            pago considera viables para construir un acuerdo que le permita
            normalizar la obligación.
          </li>
        </ul>

        <h2>Script para confirmar acuerdo de pago</h2>

        <ul>
          <li>
            Confirmamos el acuerdo alcanzado por un valor de [Valor],
            distribuido en [Número] cuotas. La primera cuota deberá realizarse
            el día [Fecha]. Enviaremos la documentación correspondiente para su
            validación.
          </li>
        </ul>

        <h2>Script para seguimiento de compromiso incumplido</h2>

        <ul>
          <li>
            Buen día, [Nombre]. Observamos que el compromiso de pago acordado
            para el día [Fecha] aún no se refleja en nuestros registros.
            Queremos conocer si existe alguna novedad y revisar alternativas
            para dar continuidad al acuerdo.
          </li>
        </ul>

        <h2>Recomendaciones durante la llamada</h2>

        <ul>
          <li>Escuchar activamente al cliente.</li>
          <li>Mantener un tono respetuoso.</li>
          <li>Hablar con claridad y seguridad.</li>
          <li>Registrar toda la información relevante.</li>
          <li>Confirmar compromisos adquiridos.</li>
          <li>Enviar soporte posterior cuando aplique.</li>
        </ul>

        <h2>Errores frecuentes en llamadas de cobranza</h2>

        <ul>
          <li>Interrumpir constantemente al cliente.</li>
          <li>Utilizar lenguaje agresivo.</li>
          <li>No documentar compromisos.</li>
          <li>Presionar excesivamente al deudor.</li>
          <li>No realizar seguimiento posterior.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          Los scripts de llamadas de cobranza permiten estandarizar procesos,
          mejorar la comunicación con los clientes y aumentar las probabilidades
          de recuperación de cartera. Una llamada estructurada puede marcar la
          diferencia entre una deuda incobrable y un acuerdo de pago exitoso.
        </p>
      </motion.article>
    </main>
  );
}
