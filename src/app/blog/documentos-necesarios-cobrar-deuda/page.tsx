import styles from "./Article.module.css";
import Script from "next/script";

export default function DocumentosNecesariosCobrarDeuda() {
  const baseUrl = "https://www.cobrandonline.com";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Documentos necesarios para cobrar una deuda",
    description:
      "Conoce cuáles son los documentos necesarios para cobrar una deuda de manera efectiva y respaldar un proceso de recuperación de cartera.",
    author: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    publisher: {
      "@type": "Organization",
      name: "Cobrand Online",
    },
    mainEntityOfPage: `${baseUrl}/blog/documentos-necesarios-cobrar-deuda`,
  };

  return (
    <main className={styles.articleContainer}>
      <Script
        id="article-schema-documentos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.category}>Legal</span>
          <h1>Documentos necesarios para cobrar una deuda</h1>

          <p className={styles.intro}>
            Contar con los documentos adecuados es fundamental para iniciar un
            proceso de recuperación de cartera. La correcta documentación no
            solo facilita la negociación, sino que también respalda un eventual
            proceso jurídico en caso de incumplimiento.
          </p>
        </header>

        <section>
          <h2>1. Contrato firmado</h2>
          <p>
            El contrato es la base legal de la obligación. Debe estar firmado
            por ambas partes y contener condiciones claras sobre el servicio o
            producto entregado, los plazos de pago y las consecuencias en caso
            de mora.
          </p>
        </section>

        <section>
          <h2>2. Facturas emitidas</h2>
          <p>
            Las facturas son el soporte contable de la deuda. Deben reflejar el
            valor exacto adeudado, la fecha de emisión y el vencimiento. En
            muchos casos, la factura electrónica tiene validez como título
            ejecutivo.
          </p>
        </section>

        <section>
          <h2>3. Pagaré o título valor</h2>
          <p>
            El pagaré es uno de los documentos más sólidos para cobrar una
            deuda, ya que constituye un título ejecutivo que facilita iniciar un
            proceso judicial de cobro si es necesario.
          </p>
        </section>

        <section>
          <h2>4. Soportes de entrega o prestación del servicio</h2>
          <p>
            Es importante contar con pruebas que demuestren que el producto fue
            entregado o el servicio prestado correctamente. Esto puede incluir
            actas firmadas, guías de transporte, correos electrónicos de
            confirmación o cualquier evidencia documental.
          </p>
        </section>

        <section>
          <h2>¿Qué pasa si no tengo todos los documentos?</h2>
          <p>
            La ausencia de documentación puede dificultar la recuperación,
            especialmente en la etapa jurídica. Sin embargo, cada caso debe
            evaluarse individualmente para determinar las alternativas
            disponibles.
          </p>
        </section>

        <section className={styles.faq}>
          <h2>Preguntas frecuentes</h2>

          <h3>¿Es obligatorio tener un pagaré para cobrar una deuda?</h3>
          <p>
            No siempre, pero facilita significativamente el proceso jurídico al
            constituir un título ejecutivo.
          </p>

          <h3>¿Una factura electrónica sirve para demandar?</h3>
          <p>
            En muchos casos sí, siempre que cumpla los requisitos legales
            establecidos en la normativa vigente.
          </p>
        </section>
      </article>
    </main>
  );
}
