"use client";

import Head from "next/head";
import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function RecuperarCartera360Dias() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cómo recuperar cartera de más de 360 días en Colombia?",
    description:
      "Aprende cómo recuperar cartera vencida de más de 360 días en Bogotá y Colombia con estrategias de cobranza, recuperación de cartera y cobro jurídico.",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/recuperar-cartera-360-dias-colombia",
    },
    keywords: [
      "recuperar cartera vencida",
      "cartera de más de 360 días",
      "recuperación de cartera Colombia",
      "cobro jurídico Bogotá",
      "clientes morosos Colombia",
      "cartera castigada",
      "cobranza empresarial",
      "recuperar deudas antiguas",
      "cobro prejurídico Colombia",
      "cartera vencida Bogotá",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede recuperar cartera de más de 360 días en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Aunque la recuperación es más compleja, aún existen posibilidades de recuperar parcial o totalmente la deuda mediante cobranza especializada y acciones jurídicas oportunas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una deuda lleva más de un año vencida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre más tiempo pase, mayores son los riesgos de evasión, pérdida de contacto, dificultades financieras del deudor y posibles problemas legales relacionados con la prescripción.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo iniciar cobro jurídico por cartera vencida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando la cobranza amistosa no genera resultados, el cliente incumple acuerdos o la deuda representa un riesgo financiero importante para la empresa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo aumentar la recuperación de cartera antigua?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manteniendo seguimiento constante, actualizando información del cliente, negociando acuerdos de pago y actuando jurídicamente antes de que la obligación prescriba.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>¿Cómo recuperar cartera de más de 360 días en Colombia?</title>

        <meta
          name="description"
          content="Descubre cómo recuperar cartera vencida de más de 360 días en Bogotá y Colombia mediante estrategias de cobranza, acuerdos de pago y cobro jurídico."
        />

        <meta
          name="keywords"
          content="
            recuperar cartera vencida,
            recuperación de cartera Colombia,
            cartera de más de 360 días,
            cobro jurídico Bogotá,
            clientes morosos Colombia,
            cobranza empresarial,
            recuperar deudas antiguas,
            cobro prejurídico,
            recuperación de cartera empresarial,
            cartera castigada
          "
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="¿Cómo recuperar cartera de más de 360 días en Colombia?"
        />

        <meta
          property="og:description"
          content="Aprende estrategias efectivas para recuperar cartera vencida y clientes morosos en Bogotá y Colombia."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

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
            Estrategias de Recuperación de Cartera en Colombia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ¿Cómo recuperar cartera de más de 360 días en Colombia?
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Recuperar una deuda con más de 360 días de mora puede convertirse en
            uno de los mayores desafíos financieros para empresas en Bogotá y
            Colombia. Entre más tiempo pasa, menores suelen ser las
            probabilidades de pago, especialmente cuando no existió seguimiento
            constante ni estrategias claras de recuperación de cartera.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Muchas empresas dejan acumular cartera vencida durante meses o años
            hasta que el problema afecta directamente la liquidez, el flujo de
            caja y la estabilidad financiera del negocio.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sin embargo, incluso cuando una deuda supera los 360 días, todavía
            es posible recuperar parcial o totalmente la obligación mediante
            estrategias de cobranza profesional, negociación, cobro prejurídico
            y acciones legales oportunas en Colombia.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Qué significa tener cartera vencida de más de 360 días
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una cartera de más de 360 días corresponde a obligaciones que llevan
            más de un año sin ser pagadas. Este tipo de cartera suele
            considerarse de alto riesgo debido a las menores probabilidades de
            recuperación y al desgaste natural del proceso de cobranza.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia, muchas empresas clasifican este tipo de
            obligaciones como cartera crítica o cartera castigada debido al
            impacto financiero que puede generar sobre las operaciones del
            negocio.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Por qué una deuda antigua es más difícil de recuperar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando una deuda supera varios meses de mora, normalmente aparecen
            diferentes factores que complican la recuperación de cartera.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>El cliente cambia números de contacto.</li>
            <li>Existen problemas financieros más graves.</li>
            <li>La empresa deja de hacer seguimiento constante.</li>
            <li>Se pierden soportes importantes de la deuda.</li>
            <li>El cliente evita responder comunicaciones.</li>
            <li>Disminuye la presión de cobranza.</li>
            <li>Aumenta el riesgo de prescripción legal.</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por esta razón, actuar rápidamente es fundamental para evitar que la
            recuperación de cartera se vuelva más compleja en Colombia.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo recuperar cartera antigua en Bogotá y Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recuperar cartera de más de 360 días requiere una estrategia mucho
            más organizada y especializada que una cobranza tradicional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Antes de iniciar procesos jurídicos, es recomendable realizar una
            evaluación completa de la deuda, validar soportes y analizar la
            capacidad de recuperación del cliente.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Estrategias efectivas para recuperar cartera vencida
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Actualizar datos de contacto del deudor.</li>
            <li>Revisar contratos, pagarés y facturas.</li>
            <li>Organizar todos los soportes disponibles.</li>
            <li>Retomar seguimiento profesional.</li>
            <li>Enviar notificaciones formales de cobro.</li>
            <li>Negociar acuerdos de pago flexibles.</li>
            <li>Ofrecer alternativas de normalización.</li>
            <li>Automatizar recordatorios de cobranza.</li>
            <li>Escalar rápidamente a cobro prejurídico.</li>
            <li>Analizar viabilidad jurídica del caso.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Importancia de la documentación en recuperación de cartera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Uno de los aspectos más importantes en recuperación de cartera en
            Colombia es contar con soportes claros de la obligación.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Muchas empresas en Bogotá pierden posibilidades de recuperación
            porque no conservan contratos, facturas electrónicas, órdenes de
            compra, correos o acuerdos firmados.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Facturas electrónicas.</li>
            <li>Contratos firmados.</li>
            <li>Pagarés.</li>
            <li>Órdenes de compra.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes de aceptación de deuda.</li>
            <li>Acuerdos de pago anteriores.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cuándo iniciar un cobro jurídico en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la cobranza amistosa no genera resultados positivos y el
            cliente evita responder o incumple acuerdos de pago, puede ser
            necesario iniciar un proceso de cobro jurídico.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia, muchas empresas esperan demasiado tiempo antes
            de actuar legalmente, aumentando el riesgo de perder la deuda por
            prescripción o dificultades probatorias.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Actuar oportunamente puede aumentar significativamente las
            probabilidades de recuperación de cartera empresarial.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Errores comunes al recuperar cartera de más de 360 días
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Dejar de hacer seguimiento durante meses.</li>
            <li>No documentar acuerdos de pago.</li>
            <li>Perder soportes importantes.</li>
            <li>No actualizar información del cliente.</li>
            <li>Esperar demasiado para actuar jurídicamente.</li>
            <li>No segmentar la cartera por antigüedad.</li>
            <li>No contar con procesos especializados de cobranza.</li>
            <li>Descuidar la comunicación con el deudor.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo evitar acumulación de cartera vencida en empresas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La mejor forma de evitar cartera de más de 360 días es implementar
            políticas preventivas de cobranza y seguimiento financiero desde el
            inicio de la relación comercial.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <li>Definir políticas claras de crédito.</li>
            <li>Automatizar recordatorios de pago.</li>
            <li>Hacer seguimiento constante.</li>
            <li>Evaluar riesgo financiero de clientes.</li>
            <li>Documentar toda la relación comercial.</li>
            <li>Escalar rápidamente casos complejos.</li>
            <li>Implementar procesos de cobranza preventiva.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre recuperación de cartera antigua
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Se puede recuperar una deuda de más de un año?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sí. Aunque las probabilidades pueden disminuir, todavía es posible
            recuperar parcial o totalmente la obligación mediante estrategias
            especializadas de cobranza y cobro jurídico.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Qué hacer si el cliente no responde?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Es importante actualizar datos, enviar comunicaciones formales y
            evaluar rápidamente acciones jurídicas antes de que la deuda pueda
            prescribir.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿Cuándo acudir a cobro jurídico?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando la cobranza amistosa no genera resultados y la deuda empieza
            a representar un riesgo importante para la estabilidad financiera de
            la empresa.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Conclusión: cómo aumentar las probabilidades de recuperar cartera
            antigua
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Aunque recuperar cartera de más de 360 días puede ser más complejo,
            todavía existen posibilidades reales de recuperación cuando se
            aplican estrategias adecuadas, seguimiento profesional y acciones
            oportunas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En Bogotá y Colombia, actuar rápidamente, documentar correctamente
            cada etapa y combinar cobranza amistosa con procesos jurídicos puede
            marcar la diferencia entre recuperar el dinero o asumir pérdidas
            financieras importantes dentro de la empresa.
          </motion.p>
        </motion.article>
      </main>
    </>
  );
}
