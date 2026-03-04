import styles from "./Article.module.css";

export default function CalcularComisionRecuperacionCartera() {
  return (
    <main className={styles.articleContainer}>
      <article className={styles.article}>
        <span className={styles.category}>Educativo</span>

        <h1>¿Cómo se calcula la comisión en la recuperación de cartera?</h1>

        <p className={styles.intro}>
          La comisión en la recuperación de cartera no es un valor fijo ni único
          para todos los casos. Generalmente se establece como un porcentaje
          sobre el monto efectivamente recuperado, pero puede variar dependiendo
          de la etapa del proceso, la complejidad del caso y las características
          de la deuda.
        </p>

        <h2>Factores que determinan la comisión</h2>

        <p>
          Cada proceso de recuperación tiene particularidades que influyen en la
          estructura de honorarios. Por ello, la comisión se define con base en
          diferentes variables:
        </p>

        <ul>
          <li>
            <strong>Etapa del proceso:</strong> preventiva, administrativa
            (prejurídica) o jurídica.
          </li>
          <li>
            <strong>Complejidad del caso:</strong> existencia de garantías,
            número de obligados o dificultades contractuales.
          </li>
          <li>
            <strong>Monto de la deuda:</strong> cuantía total a recuperar.
          </li>
          <li>
            <strong>Antigüedad de la obligación:</strong> el tiempo en mora
            puede aumentar el nivel de dificultad.
          </li>
        </ul>

        <h2>Comisiones diferenciadas por etapa</h2>

        <p>
          En algunos casos, el proceso puede iniciar en etapa preventiva o
          administrativa y posteriormente avanzar a una fase jurídica si no se
          logra acuerdo de pago. Cada etapa implica un nivel distinto de gestión
          y esfuerzo profesional.
        </p>

        <p>
          Por esta razón, la comisión puede variar entre etapas o ajustarse
          según el momento en que se logre la recuperación.
        </p>

        <h2>Modelo basado en resultados</h2>

        <p>
          En la mayoría de los esquemas de recuperación profesional, los
          honorarios se calculan sobre el valor efectivamente recuperado. Esto
          significa que el interés del gestor está alineado con el del acreedor:
          lograr el recaudo de manera eficiente y legal.
        </p>

        <p>
          Antes de iniciar cualquier gestión, se establecen de forma clara las
          condiciones económicas aplicables al caso específico.
        </p>
      </article>
    </main>
  );
}
