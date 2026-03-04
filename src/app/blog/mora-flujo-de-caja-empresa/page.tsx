import styles from "./Article.module.css";
import Script from "next/script";

export default function MoraFlujoDeCajaEmpresa() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cómo afecta la mora al flujo de caja de una empresa?",
    description:
      "Descubre cómo la mora y la cartera vencida impactan el flujo de caja, la liquidez y la estabilidad financiera de una empresa.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/mora-flujo-de-caja-empresa`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-mora-flujo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Finanzas</span>
          <h1>¿Cómo afecta la mora al flujo de caja de una empresa?</h1>

          <p className={styles.intro}>
            La mora en el pago de obligaciones impacta directamente el flujo de
            caja y la estabilidad financiera de una empresa. Cuando la cartera
            vencida aumenta, la liquidez disminuye y la capacidad operativa se
            ve comprometida.
          </p>
        </header>

        <section>
          <h2>¿Qué es la mora y por qué afecta la liquidez?</h2>
          <p>
            La mora ocurre cuando un cliente no cumple con sus obligaciones en
            la fecha acordada. Esto genera un desbalance entre los ingresos
            proyectados y el dinero realmente disponible, afectando el capital
            de trabajo.
          </p>
        </section>

        <section>
          <h2>Impactos principales de la mora en el flujo de caja</h2>

          <ul>
            <li>
              <strong>Menor capacidad de inversión:</strong> la empresa no
              dispone de recursos suficientes para crecer o expandirse.
            </li>
            <li>
              <strong>Dificultad para pagar proveedores:</strong> se generan
              retrasos en obligaciones propias, afectando la cadena de pagos.
            </li>
            <li>
              <strong>Riesgo financiero creciente:</strong> puede aumentar la
              necesidad de endeudamiento externo.
            </li>
            <li>
              <strong>Pérdida de estabilidad operativa:</strong> se limita la
              capacidad de cubrir gastos fijos como nómina y servicios.
            </li>
          </ul>
        </section>

        <section>
          <h2>Consecuencias a largo plazo</h2>
          <p>
            Si la mora se mantiene en el tiempo, la empresa puede enfrentar
            problemas de solvencia, deterioro en indicadores financieros y
            pérdida de confianza por parte de proveedores y entidades
            financieras.
          </p>
        </section>

        <section>
          <h2>¿Cómo reducir el impacto de la mora?</h2>
          <p>
            Implementar políticas claras de crédito, realizar seguimiento
            oportuno y contar con una estrategia efectiva de recuperación de
            cartera son acciones clave para proteger el flujo de caja.
          </p>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿La cartera vencida siempre afecta el flujo de caja?</h3>
          <p>
            Sí, porque representa ingresos que estaban proyectados pero no han
            ingresado efectivamente a la empresa.
          </p>

          <h3>¿Cuándo la mora se convierte en un riesgo financiero?</h3>
          <p>
            Cuando el nivel de cartera vencida supera la capacidad de la empresa
            para cubrir sus obligaciones operativas.
          </p>
        </section>
      </article>
    </main>
  );
}
