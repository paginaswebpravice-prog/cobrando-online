"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Stats.module.css";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 21000, label: "Obligaciones gestionadas" },
  { value: 670, label: "Empresas que confían en nosotros" },
  {
    value: 500,
    suffix: "B+",
    label: "Valor recuperado para nuestros clientes",
  },
];

export default function Stats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 4500;
      const increment = Math.ceil(end / 80);

      const timer = setInterval(
        () => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }

          setCounts((prev) => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        },
        duration / (end / increment),
      );
    });
  }, []);

  return (
    <section
      className={styles.container}
      aria-labelledby="stats-title"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <span className={styles.smallTitle}>
        GESTIÓN DE COBRANZA CON RESULTADOS COMPROBADOS
      </span>

      <h2 id="stats-title" itemProp="name">
        Más de dos décadas ayudando a empresas a recuperar sus cuentas por
        cobrar
      </h2>

      <p itemProp="description">
        En <strong>Cobrando Online</strong> ayudamos a empresas de diferentes
        sectores a recuperar facturas vencidas, disminuir la cartera morosa y
        fortalecer su flujo de caja mediante procesos profesionales de gestión
        de cobranza. Nuestra experiencia nos permite implementar estrategias de
        recuperación adaptadas a cada empresa, priorizando acuerdos efectivos y
        soluciones orientadas a resultados.
      </p>

      <div className={styles.stats} role="list">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={styles.stat}
            role="listitem"
            itemProp="makesOffer"
          >
            <span className={styles.number} aria-label={stat.label}>
              {formatNumber(counts[index])}
              {stat.suffix || ""}
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatNumber(num: number) {
  return num.toLocaleString();
}
