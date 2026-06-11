"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ModeloAcuerdoPagoColombia() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.category}>Plantillas y Formatos</span>

        <h1>Modelo de acuerdo de pago en Colombia: guía y formato práctico</h1>

        <p className={styles.intro}>
          Los acuerdos de pago son una de las herramientas más utilizadas para
          recuperar cartera sin necesidad de iniciar procesos judiciales. Un
          acuerdo correctamente elaborado permite establecer compromisos claros,
          proteger los intereses del acreedor y aumentar las probabilidades de
          recaudo.
        </p>

        <h2>¿Qué es un acuerdo de pago?</h2>

        <p>
          Un acuerdo de pago es un documento mediante el cual un deudor reconoce
          una obligación pendiente y se compromete a cancelarla bajo condiciones
          previamente definidas entre las partes.
        </p>

        <p>
          Este tipo de acuerdos suelen utilizarse cuando el cliente no puede
          realizar el pago total de inmediato pero manifiesta intención de
          cumplir con la obligación.
        </p>

        <h2>Beneficios de formalizar un acuerdo por escrito</h2>

        <ul>
          <li>Deja evidencia documental de la deuda.</li>
          <li>Define fechas y montos de pago.</li>
          <li>Reduce conflictos entre las partes.</li>
          <li>Facilita el seguimiento de compromisos.</li>
          <li>Puede servir como soporte en futuras acciones legales.</li>
        </ul>

        <h2>Información que debe contener un acuerdo de pago</h2>

        <p>
          Aunque cada situación puede requerir condiciones particulares, existen
          elementos básicos que deberían incluirse en cualquier acuerdo.
        </p>

        <ul>
          <li>Nombre completo del acreedor.</li>
          <li>Nombre completo del deudor.</li>
          <li>Identificación de ambas partes.</li>
          <li>Valor total adeudado.</li>
          <li>Forma de pago acordada.</li>
          <li>Número de cuotas.</li>
          <li>Fechas de vencimiento.</li>
          <li>Condiciones de incumplimiento.</li>
          <li>Firma de las partes.</li>
        </ul>

        <h2>Ejemplo de modelo de acuerdo de pago</h2>

        <p>
          A continuación se presenta una estructura básica que puede servir como
          referencia:
        </p>

        <p>
          <strong>ACUERDO DE PAGO</strong>
        </p>

        <p>
          Entre [Nombre del Acreedor] y [Nombre del Deudor], se acuerda el pago
          de la suma de [Valor Adeudado], correspondiente a obligaciones
          pendientes. El deudor se compromete a cancelar dicha suma mediante
          [Número de Cuotas] cuotas de [Valor de Cuota], pagaderas los días
          [Fechas de Pago].
        </p>

        <p>
          En caso de incumplimiento de cualquiera de las cuotas pactadas, el
          acreedor podrá exigir el saldo pendiente y adelantar las acciones de
          cobro correspondientes.
        </p>

        <h2>Errores frecuentes al elaborar acuerdos de pago</h2>

        <ul>
          <li>No dejar el acuerdo por escrito.</li>
          <li>No identificar correctamente a las partes.</li>
          <li>Omitir fechas específicas de pago.</li>
          <li>No establecer consecuencias por incumplimiento.</li>
          <li>No conservar evidencia de aceptación del acuerdo.</li>
        </ul>

        <h2>¿Es válido un acuerdo firmado digitalmente?</h2>

        <p>
          Actualmente es posible formalizar acuerdos mediante medios digitales,
          siempre que exista evidencia suficiente de aceptación por parte del
          deudor y se garantice la autenticidad de la información.
        </p>

        <p>
          Muchas empresas utilizan correos electrónicos, plataformas de firma
          electrónica o mecanismos de aceptación digital para documentar estos
          compromisos.
        </p>

        <h2>Conclusión</h2>

        <p>
          Un acuerdo de pago bien estructurado facilita la recuperación de
          cartera y ayuda a mantener relaciones comerciales positivas. Definir
          claramente las condiciones de pago, documentar los compromisos y
          realizar seguimiento constante son elementos fundamentales para lograr
          una gestión de cobranza efectiva.
        </p>
      </motion.article>
    </main>
  );
}
