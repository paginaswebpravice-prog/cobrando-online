import styles from "./Article.module.css";
import Script from "next/script";

export default function QueEsLaRecuperacionDeCartera() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la recuperación de cartera?",
    description:
      "Conoce qué es la recuperación de cartera, cómo funciona el proceso de cobro y por qué es clave para mejorar la liquidez y estabilidad financiera de una empresa.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/que-es-la-recuperacion-de-cartera`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-recuperacion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Educativo</span>
          <h1>¿Qué es la recuperación de cartera?</h1>

          <p className={styles.intro}>
            La recuperación de cartera es el proceso mediante el cual una
            empresa gestiona el cobro de obligaciones pendientes de pago con el
            objetivo de reducir la morosidad, mejorar su liquidez y proteger su
            estabilidad financiera.
          </p>
        </header>

        <section>
          <h2>¿Por qué es importante la recuperación de cartera?</h2>

          <p>
            Una gestión adecuada de la cartera vencida permite mantener el
            equilibrio financiero del negocio y evitar problemas de flujo de
            caja. Cuando las deudas no se cobran oportunamente, la empresa puede
            enfrentar dificultades operativas y riesgos de solvencia.
          </p>

          <ul>
            <li>
              <strong>Mejora el flujo de caja:</strong> permite contar con los
              recursos proyectados.
            </li>
            <li>
              <strong>Reduce pérdidas financieras:</strong> evita que las deudas
              se conviertan en cartera castigada.
            </li>
            <li>
              <strong>Evita la prescripción de la deuda:</strong> actuar a
              tiempo protege los derechos legales.
            </li>
            <li>
              <strong>Protege la estabilidad del negocio:</strong> fortalece la
              sostenibilidad financiera.
            </li>
          </ul>
        </section>

        <section>
          <h2>¿En qué consiste el proceso de recuperación de cartera?</h2>

          <p>
            El proceso de cobro suele dividirse en diferentes etapas según el
            nivel de mora y la disposición del deudor.
          </p>

          <h3>1. Gestión preventiva</h3>
          <p>
            Incluye recordatorios antes del vencimiento y seguimiento temprano
            para evitar que la deuda se convierta en cartera vencida.
          </p>

          <h3>2. Gestión administrativa o prejurídica</h3>
          <p>
            Se realizan contactos formales, negociaciones y acuerdos de pago sin
            acudir a la vía judicial.
          </p>

          <h3>3. Gestión jurídica</h3>
          <p>
            Cuando no existe voluntad de pago, se inicia un proceso legal ante
            un juez para exigir el cumplimiento de la obligación.
          </p>
        </section>

        <section>
          <h2>¿Cuándo implementar una estrategia de cobro?</h2>
          <p>
            Lo ideal es contar con políticas claras de crédito y cobranza desde
            el inicio de la relación comercial. Una estrategia estructurada
            reduce la probabilidad de mora y mejora la eficiencia en la
            recuperación.
          </p>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿La recuperación de cartera solo aplica a grandes empresas?</h3>
          <p>
            No. Tanto pequeñas como medianas y grandes empresas necesitan una
            estrategia de gestión de cobro para proteger su liquidez.
          </p>

          <h3>¿Qué pasa si no se gestiona la cartera vencida?</h3>
          <p>
            Puede afectar el flujo de caja, generar pérdidas financieras y
            aumentar el riesgo de insolvencia.
          </p>
        </section>
      </article>
    </main>
  );
}
