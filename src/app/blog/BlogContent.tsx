"use client";

import styles from "./Blog.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const blogItems = [
  {
    slug: "que-es-la-recuperacion-de-cartera",
    title:
      "¿Qué es la recuperación de cartera y por qué es clave para tu empresa?",
    description:
      "La recuperación de cartera es el proceso mediante el cual una empresa gestiona el cobro de obligaciones pendientes para reducir la morosidad y mejorar su liquidez.",
    tag: "Educativo",
  },
  {
    slug: "como-recuperar-cartera-vencida",
    title: "¿Cómo recuperar cartera vencida rápido y de forma efectiva?",
    description:
      "Conoce las estrategias legales y administrativas más efectivas para recuperar cartera vencida y mejorar el flujo de caja de tu empresa.",
    tag: "Estrategia",
  },
  {
    slug: "tipos-de-recuperacion-de-cartera",
    title: "Tipos de recuperación de cartera en Colombia: cuál usar y cuándo",
    description:
      "Existen diferentes etapas de cobro según el nivel de mora. Conocerlas permite aplicar la estrategia correcta en el momento adecuado.",
    tag: "Educativo",
  },
  {
    slug: "cuando-iniciar-proceso-de-cobro",
    title: "¿Cuándo iniciar el cobro de cartera y evitar perder el dinero?",
    description:
      "Identificar el momento oportuno para iniciar el cobro evita la prescripción de la deuda y mejora la probabilidad de recuperación.",
    tag: "Gestión",
  },
  {
    slug: "proceso-de-cobro-juridico-colombia",
    title: "Cobro jurídico en Colombia: proceso completo paso a paso",
    description:
      "Conoce las etapas del proceso de cobro jurídico, desde la demanda hasta el embargo y recuperación de la deuda.",
    tag: "Legal",
  },
  {
    slug: "diferencias-cobro-prejuridico-juridico",
    title: "Cobro prejurídico vs jurídico: diferencias clave que debes conocer",
    description:
      "El cobro prejurídico busca acuerdos amistosos, mientras que el jurídico implica acciones legales formales.",
    tag: "Legal",
  },
  {
    slug: "prescripcion-deudas-colombia",
    title: "Prescripción de deudas en Colombia: evita perder tu dinero",
    description:
      "Las deudas pueden prescribir si no se cobran a tiempo. Conoce los términos legales y evita perder el dinero.",
    tag: "Legal",
  },
  {
    slug: "documentos-necesarios-cobrar-deuda",
    title: "¿Qué documentos necesitas para cobrar una deuda en Colombia?",
    description:
      "Contar con contratos, facturas, pagarés y soportes adecuados facilita el proceso de recuperación de cartera.",
    tag: "Legal",
  },
  {
    slug: "errores-comunes-recuperacion-de-cartera",
    title: "Errores comunes al recuperar cartera (y cómo evitarlos)",
    description:
      "No documentar acuerdos, no hacer seguimiento y actuar tarde son errores frecuentes que reducen la efectividad del cobro.",
    tag: "Consejos",
  },
  {
    slug: "estrategias-de-cobranza-efectiva",
    title: "Estrategias de cobranza efectiva que sí funcionan en Colombia",
    description:
      "Aplicar estrategias de cobranza adecuadas aumenta la recuperación de cartera y reduce la morosidad.",
    tag: "Estrategia",
  },
  {
    slug: "buenas-practicas-negociar-deudores",
    title: "Cómo negociar con deudores y lograr acuerdos efectivos",
    description:
      "Una comunicación clara, empática y documentada aumenta las probabilidades de llegar a acuerdos efectivos.",
    tag: "Negociación",
  },
  {
    slug: "acuerdos-de-pago-con-deudores",
    title: "Acuerdos de pago: cómo hacerlos bien y asegurar el cobro",
    description:
      "Los acuerdos de pago permiten recuperar cartera sin procesos judiciales, pero deben hacerse correctamente.",
    tag: "Negociación",
  },
  {
    slug: "ventajas-tercerizar-recuperacion-de-cartera",
    title: "¿Vale la pena tercerizar la recuperación de cartera?",
    description:
      "Externalizar el cobro permite ahorrar recursos, mejorar resultados y conservar la relación comercial con el deudor.",
    tag: "Estrategia",
  },
  {
    slug: "externalizacion-de-cobranza",
    title: "Externalización de cobranza: cuándo conviene hacerlo",
    description:
      "Delegar la cobranza a expertos puede mejorar la recuperación de cartera y reducir costos administrativos.",
    tag: "Empresas",
  },
  {
    slug: "recuperacion-cartera-pymes",
    title: "Recuperación de cartera para PYMES: cómo mejorar el flujo de caja",
    description:
      "Las pymes requieren estrategias de cobro eficientes y proporcionales para proteger su estabilidad financiera.",
    tag: "Empresas",
  },
  {
    slug: "mora-flujo-de-caja-empresa",
    title: "¿Cómo la mora afecta el flujo de caja de tu empresa?",
    description:
      "La cartera vencida impacta directamente la liquidez, limita la operación y puede poner en riesgo la sostenibilidad del negocio.",
    tag: "Finanzas",
  },
  {
    slug: "indicadores-de-cartera-vencida",
    title: "Indicadores de cartera vencida que debes medir sí o sí",
    description:
      "Los indicadores de cartera permiten medir el riesgo, la mora y la efectividad de la gestión de cobro.",
    tag: "Finanzas",
  },
  {
    slug: "seguimiento-recuperacion-cartera",
    title: "Seguimiento de cartera: clave para recuperar más dinero",
    description:
      "El seguimiento constante evita incumplimientos y demuestra seriedad en la gestión de cobro.",
    tag: "Gestión",
  },
  {
    slug: "carta-cobro-prejuridico",
    title: "Carta de cobro prejurídico: ejemplo listo para usar",
    description:
      "La carta de cobro prejurídico es una herramienta efectiva para recuperar cartera antes de iniciar acciones legales.",
    tag: "Legal",
  },
  {
    slug: "calcular-comision-recuperacion-cartera",
    title: "¿Cómo calcular la comisión por recuperación de cartera?",
    description:
      "La comisión depende del monto recuperado, la complejidad del caso y la etapa del proceso de cobro.",
    tag: "Cálculo",
  },
];

export default function BlogContent() {
  return (
    <main>
      <header className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>RECUPERACIÓN DE CARTERA</span>

          <h1 className={styles.title}>
            Aprende a <span>recuperar tu dinero</span> y mejorar tu flujo de
            caja
          </h1>

          <p className={styles.description}>
            Aprende cómo funciona la recuperación de cartera, evita errores
            comunes y calcula fácilmente tu comisión de recuperación.
          </p>
        </motion.div>
      </header>

      <section className={styles.blogSection} aria-label="Listado de artículos">
        <h2 className={styles.sectionTitle}>
          Guías y estrategias para recuperar cartera en Colombia
        </h2>

        <div className={styles.blogGrid}>
          {blogItems.map((item, index) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className={styles.cardLink}
              aria-label={`Leer artículo ${item.title}`}
            >
              <motion.article
                className={styles.blogCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className={styles.cardTag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
