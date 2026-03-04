import styles from "./Article.module.css";
import Script from "next/script";

export default function DiferenciasCobroPrejuridicoJuridico() {
  const baseUrl = "https://www.cobrandoonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Diferencias entre cobro prejurídico y cobro jurídico",
    description:
      "Conoce las diferencias entre cobro prejurídico y cobro jurídico, cuándo aplicar cada uno y cómo impactan en la recuperación de cartera.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/diferencias-cobro-prejuridico-juridico`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-prejuridico-juridico"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Legal</span>
          <h1>Diferencias entre cobro prejurídico y cobro jurídico</h1>

          <p className={styles.intro}>
            En los procesos de recuperación de cartera existen diferentes etapas
            según el nivel de mora y la disposición del deudor. Conocer la
            diferencia entre cobro prejurídico y cobro jurídico permite aplicar
            la estrategia adecuada y aumentar la probabilidad de recuperación.
          </p>
        </header>

        <section>
          <h2>¿Qué es el cobro prejurídico?</h2>
          <p>
            El cobro prejurídico es la etapa en la que se busca llegar a un
            acuerdo voluntario con el deudor sin iniciar una demanda formal.
            Esta fase prioriza la negociación, la comunicación directa y la
            formalización de acuerdos de pago.
          </p>

          <p>
            Su objetivo principal es recuperar la deuda de manera ágil, evitando
            costos judiciales y manteniendo la relación comercial.
          </p>

          <ul>
            <li>Contacto telefónico o por correo electrónico.</li>
            <li>Propuestas de acuerdos de pago.</li>
            <li>Recordatorios formales de obligación pendiente.</li>
            <li>Seguimiento constante.</li>
          </ul>
        </section>

        <section>
          <h2>¿Qué es el cobro jurídico?</h2>
          <p>
            El cobro jurídico implica iniciar acciones legales formales ante un
            juez con el fin de exigir el pago de la obligación. Se utiliza
            cuando no existe voluntad de pago o se incumplen reiteradamente los
            acuerdos alcanzados en etapa prejurídica.
          </p>

          <p>
            En esta fase intervienen abogados y el proceso puede incluir
            demandas ejecutivas, embargos u otras medidas permitidas por la ley.
          </p>

          <ul>
            <li>Presentación de demanda judicial.</li>
            <li>Intervención de un juez.</li>
            <li>Posibles medidas cautelares como embargos.</li>
            <li>Costos legales asociados.</li>
          </ul>
        </section>

        <section>
          <h2>Principales diferencias entre cobro prejurídico y jurídico</h2>

          <p>
            La diferencia principal radica en el nivel de formalidad y presión
            legal. Mientras el cobro prejurídico busca acuerdos amistosos, el
            cobro jurídico recurre al sistema judicial para exigir el pago.
          </p>

          <ul>
            <li>
              <strong>Formalidad:</strong> el prejurídico es extrajudicial; el
              jurídico es judicial.
            </li>
            <li>
              <strong>Costos:</strong> el proceso jurídico implica gastos
              adicionales.
            </li>
            <li>
              <strong>Tiempo:</strong> el jurídico suele ser más prolongado.
            </li>
            <li>
              <strong>Impacto en la relación comercial:</strong> el proceso
              judicial puede deteriorarla definitivamente.
            </li>
          </ul>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿Siempre se debe iniciar con cobro prejurídico?</h3>
          <p>
            En la mayoría de los casos sí, ya que permite intentar una solución
            amistosa antes de acudir a la vía judicial.
          </p>

          <h3>¿Cuándo conviene pasar a cobro jurídico?</h3>
          <p>
            Cuando el deudor no responde, incumple acuerdos o existe riesgo de
            prescripción de la deuda.
          </p>
        </section>
      </article>
    </main>
  );
}
