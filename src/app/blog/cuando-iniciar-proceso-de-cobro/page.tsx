import styles from "./Article.module.css";
import Script from "next/script";

export default function CuandoIniciarProcesoDeCobro() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuándo iniciar un proceso de cobro de cartera?",
    description:
      "Identifica el momento adecuado para iniciar un proceso de cobro de cartera y aumenta la probabilidad de recuperación antes de que la deuda prescriba.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/cuando-iniciar-proceso-de-cobro`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-cuando-cobro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Gestión</span>
          <h1>¿Cuándo iniciar un proceso de cobro de cartera?</h1>

          <p className={styles.intro}>
            Iniciar un proceso de cobro en el momento adecuado es clave para
            maximizar la recuperación de cartera. Actuar con rapidez reduce el
            riesgo de prescripción de la deuda y aumenta significativamente la
            probabilidad de obtener el pago.
          </p>
        </header>

        <section>
          <h2>Señales de alerta para iniciar la gestión de cobro</h2>

          <p>
            Existen indicadores claros que muestran cuándo es necesario pasar de
            una gestión preventiva a un proceso de cobro más estructurado.
          </p>

          <ul>
            <li>
              <strong>Retrasos constantes en los pagos:</strong> cuando el
              cliente comienza a incumplir fechas de manera recurrente.
            </li>
            <li>
              <strong>Falta de respuesta:</strong> no contesta llamadas,
              mensajes o correos electrónicos.
            </li>
            <li>
              <strong>Incumplimiento de acuerdos previos:</strong> promete pagar
              pero no cumple lo pactado.
            </li>
          </ul>
        </section>

        <section>
          <h2>La importancia del tiempo en la recuperación de cartera</h2>

          <p>
            Mientras más tiempo pase sin una acción concreta, menor será la
            probabilidad de recuperación. Las deudas envejecidas tienden a
            volverse más difíciles de cobrar, ya sea por deterioro financiero
            del deudor o por riesgo de prescripción legal.
          </p>

          <p>
            Una gestión oportuna permite mantener la presión adecuada sin
            deteriorar la relación comercial, especialmente en etapas
            prejurídicas.
          </p>
        </section>

        <section>
          <h2>¿Cuándo pasar de cobro preventivo a cobro jurídico?</h2>

          <p>
            Si después de múltiples intentos de negociación no existe voluntad
            de pago o se presentan reiterados incumplimientos, puede ser momento
            de escalar el caso a una etapa jurídica. Esta decisión debe
            evaluarse considerando el monto adeudado y los costos del proceso.
          </p>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿Cuántos días de mora justifican iniciar un cobro formal?</h3>
          <p>
            Depende de la política interna de la empresa, pero generalmente a
            partir de 30 días de mora se recomienda intensificar la gestión.
          </p>

          <h3>¿Es recomendable esperar demasiado antes de cobrar?</h3>
          <p>
            No. Retrasar la gestión reduce la probabilidad de recuperación y
            puede afectar el flujo de caja de la empresa.
          </p>
        </section>
      </article>
    </main>
  );
}
