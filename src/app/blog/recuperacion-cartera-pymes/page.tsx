import styles from "./Article.module.css";

export default function RecuperacionCarteraPymes() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        <span className={styles.category}>Educativo</span>

        <h1>Recuperación de cartera para PYMES</h1>

        <p className={styles.intro}>
          Las pequeñas y medianas empresas son más vulnerables a la mora debido
          a su limitada liquidez. Una gestión adecuada de la recuperación de
          cartera permite proteger el flujo de caja y garantizar la estabilidad
          financiera.
        </p>

        <h2>¿Por qué la mora afecta más a las PYMES?</h2>

        <p>
          A diferencia de las grandes compañías, las PYMES dependen en mayor
          medida de su liquidez diaria para operar. Un retraso en los pagos
          puede impactar directamente la nómina, el pago a proveedores y la
          continuidad del negocio.
        </p>

        <ul>
          <li>Menor capacidad de absorción de pérdidas.</li>
          <li>Dependencia directa del flujo de caja.</li>
          <li>Dificultad para acceder a financiación.</li>
          <li>Mayor riesgo de descapitalización.</li>
        </ul>

        <h2>Estrategias recomendadas para la recuperación de cartera</h2>

        <p>
          Implementar políticas claras desde el inicio de la relación comercial
          es fundamental para reducir riesgos y prevenir la mora.
        </p>

        <ul>
          <li>
            <strong>Políticas claras de crédito.</strong>
          </li>
          <li>
            <strong>
              Seguimiento constante antes y después del vencimiento.
            </strong>
          </li>
          <li>
            <strong>Acuerdos por escrito en caso de negociación.</strong>
          </li>
          <li>
            <strong>Gestión prejurídica oportuna.</strong>
          </li>
        </ul>

        <h2>Beneficios de una gestión profesional</h2>

        <p>
          Contar con asesoría especializada en recuperación de cartera permite a
          las PYMES enfocarse en su actividad principal mientras expertos
          gestionan el proceso de cobro de forma estratégica y legal.
        </p>
      </article>
    </main>
  );
}
