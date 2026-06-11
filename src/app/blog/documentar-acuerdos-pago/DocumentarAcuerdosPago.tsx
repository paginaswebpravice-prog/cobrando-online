"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DocumentarAcuerdosPago() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.category}>Legal y Negociación</span>

        <h1>
          Cómo documentar acuerdos de pago correctamente y proteger la
          recuperación de cartera
        </h1>

        <p className={styles.intro}>
          Un acuerdo de pago puede convertirse en una herramienta muy efectiva
          para recuperar cartera, siempre que esté correctamente documentado.
          Muchas empresas negocian con sus clientes morosos, pero cometen el
          error de dejar los compromisos únicamente de forma verbal o mediante
          conversaciones informales, lo que dificulta cualquier reclamación
          futura.
        </p>

        <h2>Por qué es importante documentar un acuerdo de pago</h2>

        <p>
          La documentación permite dejar evidencia clara de las condiciones
          acordadas entre acreedor y deudor. Además, sirve como respaldo en caso
          de incumplimiento y puede facilitar futuros procesos de cobro
          prejurídico o jurídico.
        </p>

        <p>
          Un acuerdo bien elaborado aporta seguridad jurídica para ambas partes
          y reduce la posibilidad de malentendidos relacionados con fechas,
          montos o condiciones de pago.
        </p>

        <h2>Información básica que debe incluir el acuerdo</h2>

        <p>
          Todo acuerdo de pago debe identificar claramente a las partes
          involucradas y especificar la obligación que se pretende cancelar.
        </p>

        <ul>
          <li>Nombre completo del acreedor y del deudor.</li>
          <li>Número de identificación o NIT.</li>
          <li>Valor total de la deuda.</li>
          <li>Concepto de la obligación.</li>
          <li>Fecha de suscripción del acuerdo.</li>
          <li>Firmas de las partes.</li>
        </ul>

        <h2>Definir claramente el plan de pagos</h2>

        <p>
          Uno de los elementos más importantes es la descripción detallada de la
          forma en que se realizará el pago de la obligación.
        </p>

        <ul>
          <li>Valor de cada cuota.</li>
          <li>Número de cuotas acordadas.</li>
          <li>Fechas exactas de vencimiento.</li>
          <li>Medios autorizados para realizar los pagos.</li>
          <li>Condiciones especiales si existen descuentos o beneficios.</li>
        </ul>

        <h2>Incluir cláusulas de incumplimiento</h2>

        <p>
          El documento debe establecer qué sucederá si el deudor incumple una o
          varias cuotas. Esto evita discusiones posteriores y brinda
          herramientas para actuar de manera inmediata.
        </p>

        <p>
          Algunas empresas incluyen la aceleración de la deuda, intereses de
          mora o el inicio de acciones de cobro más avanzadas en caso de
          incumplimiento.
        </p>

        <h2>Utilizar soportes adicionales</h2>

        <p>
          Además del acuerdo firmado, es recomendable conservar toda la
          documentación relacionada con la negociación.
        </p>

        <ul>
          <li>Correos electrónicos.</li>
          <li>Mensajes de confirmación.</li>
          <li>Comprobantes de pago.</li>
          <li>Facturas relacionadas.</li>
          <li>Documentos de respaldo de la deuda.</li>
        </ul>

        <h2>Firma física o firma electrónica</h2>

        <p>
          Actualmente es posible formalizar acuerdos mediante firmas físicas o
          electrónicas. Lo importante es garantizar que exista evidencia clara
          de aceptación por parte del deudor y que el documento pueda ser
          consultado posteriormente.
        </p>

        <h2>Errores frecuentes al documentar acuerdos</h2>

        <ul>
          <li>Realizar acuerdos únicamente de forma verbal.</li>
          <li>No especificar fechas concretas de pago.</li>
          <li>No incluir consecuencias por incumplimiento.</li>
          <li>Perder soportes o comprobantes.</li>
          <li>No conservar copia firmada del documento.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          Documentar correctamente los acuerdos de pago es una práctica
          fundamental dentro de cualquier estrategia de recuperación de cartera.
          Un documento claro, completo y respaldado con evidencia adecuada
          aumenta la seguridad jurídica de la empresa y mejora las posibilidades
          de recuperar los recursos adeudados en caso de incumplimiento.
        </p>
      </motion.article>
    </main>
  );
}
