import styles from "./Article.module.css";
import Script from "next/script";

export default function BuenasPracticasNegociarDeudores() {
  const baseUrl = "https://www.cobrandoonline.com/";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buenas prácticas para negociar con deudores",
    description:
      "Conoce las mejores prácticas para negociar con deudores y lograr acuerdos de pago efectivos en procesos de recuperación de cartera.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/buenas-practicas-negociar-deudores`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Negociación</span>
          <h1>Buenas prácticas para negociar con deudores</h1>
          <p className={styles.intro}>
            La negociación con deudores es una de las etapas más importantes en
            la recuperación de cartera. Aplicar estrategias adecuadas permite
            llegar a acuerdos efectivos, reducir la mora y mantener la relación
            comercial.
          </p>
        </header>

        <section>
          <h2>1. Mantener una comunicación clara y profesional</h2>
          <p>
            Una comunicación clara evita malentendidos y genera confianza.
            Explicar el estado de la deuda, los valores exactos y las posibles
            alternativas de pago facilita el proceso de negociación.
          </p>
        </section>

        <section>
          <h2>2. Escuchar antes de proponer soluciones</h2>
          <p>
            Entender la situación financiera del deudor permite estructurar un
            acuerdo realista. Escuchar activamente ayuda a identificar
            dificultades temporales y definir plazos viables.
          </p>
        </section>

        <section>
          <h2>3. Formalizar los acuerdos por escrito</h2>
          <p>
            Todo acuerdo de pago debe quedar documentado. Esto protege a ambas
            partes y evita futuros incumplimientos. Se recomienda incluir
            fechas, montos y consecuencias en caso de mora.
          </p>
        </section>

        <section>
          <h2>4. Realizar seguimiento constante</h2>
          <p>
            El seguimiento demuestra seriedad en la gestión de cobro. Recordar
            fechas de pago y verificar el cumplimiento reduce el riesgo de
            incumplimiento.
          </p>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes sobre negociación con deudores</h2>

          <h3>¿Qué hacer si el deudor no responde?</h3>
          <p>
            Es recomendable insistir por diferentes canales y documentar cada
            intento de contacto antes de escalar el caso a una etapa jurídica.
          </p>

          <h3>¿Cuándo pasar de negociación a cobro jurídico?</h3>
          <p>
            Cuando no existe voluntad de pago o se incumplen reiteradamente los
            acuerdos establecidos.
          </p>
        </section>
      </article>
    </main>
  );
}
