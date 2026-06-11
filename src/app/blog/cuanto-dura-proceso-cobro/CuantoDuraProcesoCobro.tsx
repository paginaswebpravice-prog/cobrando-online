"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CuantoDuraProcesoCobro() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.category}>Cobro Jurídico</span>

        <h1>¿Cuánto dura un proceso de cobro jurídico en Colombia?</h1>

        <p className={styles.intro}>
          Una de las preguntas más frecuentes entre empresas y acreedores es
          cuánto tiempo puede tardar un proceso de cobro jurídico. La respuesta
          depende de múltiples factores, incluyendo el tipo de proceso, la
          documentación disponible, la conducta del deudor y la carga laboral de
          los juzgados.
        </p>

        <h2>Qué es un proceso de cobro jurídico</h2>

        <p>
          El cobro jurídico es el conjunto de acciones legales que buscan
          recuperar una obligación incumplida cuando las gestiones de cobranza
          preventiva y prejurídica no han generado resultados satisfactorios.
        </p>

        <p>
          En Colombia, el proceso más utilizado es el proceso ejecutivo,
          mediante el cual el acreedor solicita al juez ordenar el pago de la
          deuda y, si es necesario, decretar medidas cautelares como embargos.
        </p>

        <h2>Factores que influyen en la duración del proceso</h2>

        <p>
          No existe una duración exacta para todos los casos. Algunos factores
          que afectan los tiempos son:
        </p>

        <ul>
          <li>Complejidad del caso.</li>
          <li>Disponibilidad de documentos que soporten la deuda.</li>
          <li>Cantidad de procesos en el juzgado.</li>
          <li>Oposición o defensa presentada por el deudor.</li>
          <li>Ubicación y localización de bienes embargables.</li>
          <li>Recursos y apelaciones dentro del proceso.</li>
        </ul>

        <h2>Tiempo promedio de un proceso ejecutivo</h2>

        <p>
          Cuando la deuda cuenta con un título ejecutivo válido y el proceso
          avanza sin mayores obstáculos, el cobro puede tomar entre seis meses y
          dos años.
        </p>

        <p>
          Sin embargo, cuando existen recursos, dificultades para notificar al
          deudor o problemas para localizar bienes, el tiempo puede extenderse
          considerablemente.
        </p>

        <h2>Etapas que consumen más tiempo</h2>

        <ul>
          <li>Radicación y admisión de la demanda.</li>
          <li>Notificación al deudor.</li>
          <li>Contestación de la demanda.</li>
          <li>Decretos de embargo y secuestro.</li>
          <li>Avalúos y remates de bienes.</li>
          <li>Distribución de recursos obtenidos.</li>
        </ul>

        <h2>Cómo acelerar la recuperación de la deuda</h2>

        <p>
          Aunque los tiempos judiciales no dependen totalmente del acreedor, sí
          existen acciones que pueden mejorar la eficiencia del proceso.
        </p>

        <ul>
          <li>Mantener documentación completa.</li>
          <li>Actuar antes de que la deuda envejezca demasiado.</li>
          <li>Identificar bienes del deudor oportunamente.</li>
          <li>Buscar acuerdos de pago cuando sean viables.</li>
          <li>Contar con asesoría jurídica especializada.</li>
        </ul>

        <h2>Conclusión</h2>

        <p>
          Un proceso de cobro jurídico en Colombia puede durar desde algunos
          meses hasta varios años dependiendo de las circunstancias del caso.
          Por esta razón, es recomendable iniciar acciones de recuperación de
          cartera oportunamente y contar con una estrategia jurídica adecuada
          para maximizar las probabilidades de recuperación.
        </p>
      </motion.article>
    </main>
  );
}
