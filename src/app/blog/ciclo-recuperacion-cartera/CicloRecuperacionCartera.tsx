"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CicloRecuperacionCartera() {
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
          Fundamentos de Cartera
        </motion.span>

        <h1>Ciclo completo de recuperación de cartera explicado</h1>

        <p className={styles.intro}>
          La recuperación de cartera no comienza cuando un cliente deja de
          pagar. En realidad, es un proceso continuo que inicia desde el momento
          en que se otorga crédito y termina cuando la obligación es pagada o se
          agotan las alternativas de cobro. Comprender cada etapa permite
          reducir la morosidad, mejorar el flujo de caja y aumentar las tasas de
          recuperación.
        </p>

        <h2>¿Qué es el ciclo de recuperación de cartera?</h2>

        <p>
          El ciclo de recuperación de cartera es el conjunto de acciones que una
          empresa realiza para asegurar el recaudo oportuno de sus cuentas por
          cobrar. Incluye actividades preventivas, seguimiento, negociación,
          cobranza prejurídica y, cuando es necesario, procesos jurídicos.
        </p>

        <p>
          Un ciclo bien estructurado permite intervenir rápidamente cuando un
          cliente presenta retrasos en sus pagos y evita que las deudas lleguen
          a niveles críticos de mora.
        </p>

        <h2>Etapa 1: Evaluación y otorgamiento de crédito</h2>

        <p>
          Todo proceso de recuperación comienza antes de que exista una deuda.
          Las empresas deben analizar la capacidad de pago, antecedentes
          financieros y comportamiento comercial de los clientes antes de
          otorgar crédito.
        </p>

        <p>
          Una adecuada evaluación reduce significativamente el riesgo de
          incumplimiento y permite establecer condiciones de pago acordes con el
          perfil del cliente.
        </p>

        <h2>Etapa 2: Facturación y seguimiento preventivo</h2>

        <p>
          Una vez realizada la venta o prestado el servicio, la empresa debe
          emitir la factura y garantizar que el cliente conozca claramente las
          fechas de vencimiento.
        </p>

        <p>
          Durante esta etapa suelen enviarse recordatorios preventivos por
          correo electrónico, llamadas o mensajes de WhatsApp para reducir la
          posibilidad de retrasos.
        </p>

        <h2>Etapa 3: Cobranza temprana</h2>

        <p>
          Cuando la fecha de vencimiento se acerca o han transcurrido pocos días
          de mora, comienza la gestión de cobranza temprana.
        </p>

        <p>
          El objetivo es identificar rápidamente las razones del incumplimiento
          y obtener el pago antes de que la deuda continúe envejeciendo.
        </p>

        <ul>
          <li>Recordatorios de pago.</li>
          <li>Llamadas de seguimiento.</li>
          <li>Correos electrónicos.</li>
          <li>Mensajes automatizados.</li>
          <li>Confirmación de compromisos de pago.</li>
        </ul>

        <h2>Etapa 4: Cobranza administrativa</h2>

        <p>
          Si el cliente mantiene el incumplimiento, la deuda entra en una fase
          de cobranza administrativa más intensa.
        </p>

        <p>
          En esta etapa se incrementa la frecuencia del seguimiento y se buscan
          soluciones que permitan recuperar la cartera sin afectar la relación
          comercial.
        </p>

        <p>
          Muchas empresas establecen equipos especializados para gestionar este
          tipo de cartera y mejorar los indicadores de recuperación.
        </p>

        <h2>Etapa 5: Negociación y acuerdos de pago</h2>

        <p>
          Cuando el cliente reconoce la obligación pero presenta dificultades de
          liquidez, pueden negociarse acuerdos de pago.
        </p>

        <p>
          Estos acuerdos permiten dividir la deuda en cuotas o establecer nuevas
          condiciones de pago que faciliten la recuperación del dinero.
        </p>

        <ul>
          <li>Acuerdos de pago por cuotas.</li>
          <li>Refinanciaciones.</li>
          <li>Reestructuración de obligaciones.</li>
          <li>Compromisos escritos de pago.</li>
        </ul>

        <h2>Etapa 6: Cobranza prejurídica</h2>

        <p>
          Si las gestiones administrativas no generan resultados, la deuda puede
          pasar a una etapa prejurídica.
        </p>

        <p>
          Aquí se realizan requerimientos formales y comunicaciones que informan
          al deudor sobre las posibles consecuencias legales de continuar en
          mora.
        </p>

        <p>
          Esta fase suele generar una importante cantidad de recuperaciones
          porque muchos deudores prefieren evitar procesos judiciales.
        </p>

        <h2>Etapa 7: Cobro jurídico</h2>

        <p>
          Cuando todas las acciones anteriores fracasan, la empresa puede acudir
          a mecanismos legales para exigir el pago de la obligación.
        </p>

        <p>
          Dependiendo del caso, pueden iniciarse procesos ejecutivos, embargos o
          demás acciones contempladas por la legislación colombiana.
        </p>

        <p>
          El objetivo es recuperar el crédito utilizando las herramientas que
          ofrece el sistema judicial.
        </p>

        <h2>¿Por qué es importante controlar cada etapa?</h2>

        <p>
          Cada fase del ciclo cumple una función específica. Mientras más rápido
          se detecte una mora y se actúe sobre ella, mayores serán las
          probabilidades de recuperación.
        </p>

        <p>
          Las empresas que gestionan activamente su cartera suelen mantener
          mejores niveles de liquidez, menores pérdidas por incobrables y una
          mayor estabilidad financiera.
        </p>

        <h2>Conclusión</h2>

        <p>
          El ciclo de recuperación de cartera es un proceso integral que abarca
          desde la evaluación inicial del cliente hasta las acciones jurídicas
          necesarias para recuperar una deuda. Comprender cada etapa permite
          diseñar estrategias más efectivas, reducir la morosidad y proteger el
          flujo de caja de la empresa.
        </p>
      </motion.article>
    </main>
  );
}
