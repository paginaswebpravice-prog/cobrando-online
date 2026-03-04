import styles from "./Article.module.css";

export default function TiposDeRecuperacionDeCartera() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        <span className={styles.category}>Educativo</span>

        <h1>Tipos de recuperación de cartera</h1>

        <p className={styles.intro}>
          La recuperación de cartera puede dividirse en diferentes etapas según
          el momento en que se encuentre la obligación y el nivel de mora del
          deudor. Conocer los tipos de gestión permite aplicar la estrategia
          adecuada y aumentar la probabilidad de recaudo.
        </p>

        <h2>Recuperación preventiva</h2>

        <p>
          Se realiza antes de que la obligación entre en mora. Su objetivo es
          evitar el incumplimiento mediante recordatorios oportunos, seguimiento
          temprano y comunicación constante con el cliente.
        </p>

        <p>
          Esta etapa fortalece la cultura de pago y reduce significativamente el
          riesgo de cartera vencida.
        </p>

        <h2>Recuperación administrativa o prejurídica</h2>

        <p>
          Aplica cuando la deuda ya está vencida y se busca una solución
          amistosa sin acudir a instancias judiciales. En esta fase se realizan
          contactos formales, negociaciones y acuerdos de pago.
        </p>

        <p>
          Una gestión administrativa eficiente puede evitar procesos legales
          prolongados y reducir costos para la empresa.
        </p>

        <h2>Recuperación jurídica</h2>

        <p>
          Se inicia cuando el deudor incumple reiteradamente y no existe
          voluntad de pago. En esta etapa se presentan acciones legales ante un
          juez para exigir el cumplimiento de la obligación.
        </p>

        <p>
          La recuperación jurídica es el último recurso, pero resulta necesaria
          cuando se requiere proteger los derechos del acreedor y evitar la
          prescripción de la deuda.
        </p>
      </article>
    </main>
  );
}
