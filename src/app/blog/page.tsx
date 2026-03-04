"use client";

import styles from "./Blog.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const blogItems = [
  {
    slug: "que-es-la-recuperacion-de-cartera",
    title: "¿Qué es la recuperación de cartera?",
    description:
      "La recuperación de cartera es el proceso mediante el cual una empresa gestiona el cobro de obligaciones pendientes para reducir la morosidad y mejorar su liquidez.",
    tag: "Educativo",
  },
  {
    slug: "tipos-de-recuperacion-de-cartera",
    title:
      "Tipos de recuperación de cartera: preventiva, administrativa y jurídica",
    description:
      "Existen diferentes etapas de cobro según el nivel de mora. Conocerlas permite aplicar la estrategia correcta en el momento adecuado.",
    tag: "Educativo",
  },
  {
    slug: "cuando-iniciar-proceso-de-cobro",
    title: "¿Cuándo iniciar un proceso de cobro de cartera?",
    description:
      "Identificar el momento oportuno para iniciar el cobro evita la prescripción de la deuda y mejora la probabilidad de recuperación.",
    tag: "Gestión",
  },
  {
    slug: "errores-comunes-recuperacion-de-cartera",
    title: "Errores comunes en la recuperación de cartera",
    description:
      "No documentar acuerdos, no hacer seguimiento y actuar tarde son errores frecuentes que reducen la efectividad del cobro.",
    tag: "Consejos",
  },
  {
    slug: "ventajas-tercerizar-recuperacion-de-cartera",
    title: "Ventajas de tercerizar la recuperación de cartera",
    description:
      "Externalizar el cobro permite ahorrar recursos, mejorar resultados y conservar la relación comercial con el deudor.",
    tag: "Estrategia",
  },
  {
    slug: "mora-flujo-de-caja-empresa",
    title: "¿Cómo afecta la mora al flujo de caja de una empresa?",
    description:
      "La cartera vencida impacta directamente la liquidez, limita la operación y puede poner en riesgo la sostenibilidad del negocio.",
    tag: "Finanzas",
  },
  {
    slug: "recuperacion-cartera-pymes",
    title: "Recuperación de cartera para pequeñas y medianas empresas",
    description:
      "Las pymes requieren estrategias de cobro eficientes y proporcionales para proteger su estabilidad financiera.",
    tag: "Empresas",
  },
  {
    slug: "documentos-necesarios-cobrar-deuda",
    title: "¿Qué documentos se necesitan para cobrar una deuda?",
    description:
      "Contar con contratos, facturas, pagarés y soportes adecuados facilita el proceso de recuperación de cartera.",
    tag: "Legal",
  },
  {
    slug: "diferencias-cobro-prejuridico-juridico",
    title: "Diferencias entre cobro prejurídico y cobro jurídico",
    description:
      "El cobro prejurídico busca acuerdos amistosos, mientras que el jurídico implica acciones legales formales.",
    tag: "Legal",
  },
  {
    slug: "calcular-comision-recuperacion-cartera",
    title: "¿Cómo calcular la comisión por recuperación de cartera?",
    description:
      "La comisión depende del monto recuperado, la complejidad del caso y la etapa del proceso de cobro.",
    tag: "Cálculo",
  },
  {
    slug: "buenas-practicas-negociar-deudores",
    title: "Buenas prácticas para negociar con deudores",
    description:
      "Una comunicación clara, empática y documentada aumenta las probabilidades de llegar a acuerdos efectivos.",
    tag: "Negociación",
  },
  {
    slug: "seguimiento-recuperacion-cartera",
    title: "Importancia del seguimiento en la recuperación de cartera",
    description:
      "El seguimiento constante evita incumplimientos y demuestra seriedad en la gestión de cobro.",
    tag: "Gestión",
  },
];

export default function Blog() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>RECUPERACIÓN DE CARTERA</span>

          <h1 className={styles.title}>
            Información clara para <br />
            <span>recuperar tu dinero</span>
          </h1>

          <p className={styles.description}>
            Aprende cómo funciona la recuperación de cartera, evita errores
            comunes y calcula fácilmente tu comisión de recuperación.
          </p>
        </motion.div>
      </section>

      {/* ================= BLOG ================= */}
      <section className={styles.blogSection}>
        <h2 className={styles.sectionTitle}>
          Artículos sobre recuperación de cartera
        </h2>

        <div className={styles.blogGrid}>
          {blogItems.map((item, index) => (
            <Link
              key={index}
              href={`/blog/${item.slug}`}
              className={styles.cardLink}
            >
              <motion.article
                className={styles.blogCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={styles.cardTag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
