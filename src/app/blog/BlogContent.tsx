"use client";

import styles from "./Blog.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const blogItems = [
  /* =========================================================
   1. FUNDAMENTOS DE CARTERA
========================================================= */

  {
    slug: "que-es-la-recuperacion-de-cartera",
    title:
      "¿Qué es la recuperación de cartera y por qué es clave para tu empresa?",
    description:
      "Explicamos qué es la recuperación de cartera, cómo funciona en empresas y por qué es clave para mantener la liquidez y estabilidad financiera.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "tipos-de-recuperacion-de-cartera",
    title: "Tipos de recuperación de cartera en Colombia",
    description:
      "Conoce los tipos de recuperación de cartera y cómo aplicar cada estrategia según el nivel de mora del cliente.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "que-es-cartera-vencida",
    title: "¿Qué es la cartera vencida y cómo se clasifica?",
    description:
      "Aprende qué es la cartera vencida, cómo se clasifica por días de mora y su impacto en la salud financiera de las empresas.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "ciclo-recuperacion-cartera",
    title: "Ciclo completo de recuperación de cartera explicado",
    description:
      "Entiende el ciclo completo de recuperación de cartera, desde el cobro preventivo hasta la gestión jurídica.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "impacto-cartera-vencida-empresa",
    title: "Impacto de la cartera vencida en las empresas",
    description:
      "Descubre cómo la cartera vencida afecta la liquidez, operación y crecimiento financiero de las empresas.",
    tag: "Finanzas",
    category: "fundamentos",
  },
  {
    slug: "riesgo-crediticio-empresas",
    title: "Qué es el riesgo crediticio en empresas",
    description:
      "Conoce qué es el riesgo crediticio y cómo ayuda a evaluar clientes antes de otorgar créditos o ventas.",
    tag: "Finanzas",
    category: "fundamentos",
  },
  {
    slug: "por-que-no-pagan-clientes",
    title: "¿Por qué los clientes no pagan sus deudas?",
    description:
      "Analizamos las principales razones por las que los clientes incumplen pagos y cómo prevenir la mora.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "gestion-cobranza-basica",
    title: "Gestión de cobranza: conceptos básicos",
    description:
      "Introducción a la gestión de cobranza empresarial y cómo estructurar un proceso de recuperación eficiente.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "mora-en-colombia-explicacion",
    title: "Qué es la mora en Colombia y cómo funciona",
    description:
      "Explicación clara de qué es la mora, cómo se calcula y sus efectos legales y financieros en Colombia.",
    tag: "Legal",
    category: "fundamentos",
  },
  {
    slug: "cartera-activa-vs-vencida",
    title: "Cartera activa vs cartera vencida",
    description:
      "Diferencias entre cartera activa y vencida, y cómo afectan la gestión financiera de una empresa.",
    tag: "Educativo",
    category: "fundamentos",
  },
  {
    slug: "indicadores-basicos-cartera",
    title: "Indicadores básicos de cartera que debes conocer",
    description:
      "Conoce los principales indicadores de cartera para medir la eficiencia de la gestión de cobro.",
    tag: "Finanzas",
    category: "fundamentos",
  },
  {
    slug: "como-funciona-recuperacion-dinero",
    title: "Cómo funciona realmente la recuperación de dinero",
    description:
      "Te explicamos paso a paso cómo funciona la recuperación de dinero en procesos empresariales.",
    tag: "Educativo",
    category: "fundamentos",
  },

  /* =========================================================
   2. COBRO JURÍDICO
========================================================= */

  {
    slug: "proceso-de-cobro-juridico-colombia",
    title: "Cobro jurídico en Colombia paso a paso",
    description:
      "Conoce el proceso de cobro jurídico en Colombia desde la demanda hasta la ejecución y recuperación de la deuda.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "demanda-ejecutiva-por-deuda-colombia",
    title: "Demanda ejecutiva por deuda en Colombia",
    description:
      "Descubre cómo funciona una demanda ejecutiva por deuda y en qué casos se puede aplicar en Colombia.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "prescripcion-deudas-colombia",
    title: "Prescripción de deudas en Colombia",
    description:
      "Aprende cuándo una deuda prescribe en Colombia y cómo evitar perder el derecho de cobro.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "embargos-en-colombia",
    title: "Embargos en Colombia: qué se puede embargar",
    description:
      "Conoce qué bienes pueden ser embargados en Colombia dentro de un proceso de cobro jurídico.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "requisitos-cobro-juridico",
    title: "Requisitos para iniciar cobro jurídico",
    description:
      "Documentos y condiciones necesarias para iniciar un proceso de cobro jurídico en Colombia.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "cuanto-dura-proceso-cobro",
    title: "¿Cuánto dura un proceso de cobro jurídico?",
    description:
      "Conoce los tiempos promedio de un proceso de cobro jurídico en Colombia y sus etapas.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "cobro-ordinario-vs-ejecutivo",
    title: "Cobro ordinario vs ejecutivo",
    description:
      "Diferencias entre cobro ordinario y ejecutivo y cuál conviene según el tipo de deuda.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "deudor-sin-bienes-que-hacer",
    title: "Qué hacer si el deudor no tiene bienes",
    description:
      "Opciones legales y estrategias cuando el deudor no cuenta con bienes embargables.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "costos-cobro-juridico",
    title: "Costos de un proceso de cobro jurídico",
    description:
      "Conoce los costos aproximados de un proceso de cobro jurídico en Colombia.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "notificacion-mandamiento-pago",
    title: "Notificación y mandamiento de pago",
    description:
      "Explicación de las primeras etapas del proceso judicial de cobro de cartera.",
    tag: "Legal",
    category: "cobro_juridico",
  },
  {
    slug: "cuando-ir-a-juicio-deuda",
    title: "Cuándo vale la pena ir a juicio",
    description:
      "Analiza cuándo es conveniente iniciar un proceso judicial de cobro de deuda.",
    tag: "Estrategia",
    category: "cobro_juridico",
  },
  {
    slug: "cobro-juridico-riesgos",
    title: "Riesgos del cobro jurídico",
    description:
      "Conoce los posibles riesgos y escenarios en un proceso de cobro jurídico.",
    tag: "Legal",
    category: "cobro_juridico",
  },

  /* =========================================================
   3. ESTRATEGIAS DE COBRANZA
========================================================= */

  {
    slug: "como-recuperar-cartera-vencida",
    title: "¿Cómo recuperar cartera vencida rápido?",
    description:
      "Estrategias efectivas para recuperar cartera vencida y mejorar el flujo de caja empresarial.",
    tag: "Estrategia",
    category: "estrategias",
  },
  {
    slug: "estrategias-de-cobranza-efectiva",
    title: "Estrategias de cobranza efectiva",
    description:
      "Conoce métodos probados para mejorar la recuperación de cartera en empresas.",
    tag: "Estrategia",
    category: "estrategias",
  },
  {
    slug: "cuando-iniciar-proceso-de-cobro",
    title: "Cuándo iniciar el cobro de cartera",
    description:
      "Identifica el momento ideal para iniciar acciones de cobro y evitar pérdidas.",
    tag: "Gestión",
    category: "estrategias",
  },
  {
    slug: "seguimiento-recuperacion-cartera",
    title: "Seguimiento de cartera efectivo",
    description:
      "Aprende cómo hacer seguimiento de cartera sin afectar la relación con el cliente.",
    tag: "Gestión",
    category: "estrategias",
  },
  {
    slug: "errores-comunes-recuperacion-cartera",
    title: "Errores comunes en la recuperación de cartera",
    description:
      "Descubre los errores más frecuentes que afectan la recuperación de cartera.",
    tag: "Consejos",
    category: "estrategias",
  },
  {
    slug: "negociacion-deudores",
    title: "Cómo negociar con deudores",
    description:
      "Técnicas de negociación efectivas para mejorar la recuperación de cartera.",
    tag: "Negociación",
    category: "estrategias",
  },
  {
    slug: "reducir-morosidad-empresa",
    title: "Cómo reducir la morosidad en empresas",
    description:
      "Estrategias preventivas y correctivas para disminuir la morosidad empresarial.",
    tag: "Finanzas",
    category: "estrategias",
  },
  {
    slug: "cobranza-por-etapas",
    title: "Estrategia de cobranza por etapas",
    description:
      "Modelo estructurado para gestionar la cobranza según niveles de mora.",
    tag: "Estrategia",
    category: "estrategias",
  },
  {
    slug: "flujo-de-caja-cobranza",
    title: "Cobranza y flujo de caja",
    description:
      "Cómo la cobranza impacta directamente el flujo de caja empresarial.",
    tag: "Finanzas",
    category: "estrategias",
  },
  {
    slug: "psicologia-de-cobranza",
    title: "Psicología de la cobranza efectiva",
    description:
      "Cómo la comunicación influye en la decisión de pago del cliente.",
    tag: "Estrategia",
    category: "estrategias",
  },
  {
    slug: "aumentar-recuperacion-cartera",
    title: "Cómo aumentar la recuperación de cartera",
    description:
      "Estrategias avanzadas para maximizar la recuperación de cartera empresarial.",
    tag: "Estrategia",
    category: "estrategias",
  },
  {
    slug: "plan-cobranza-empresas",
    title: "Plan de cobranza mensual",
    description:
      "Cómo estructurar un plan de cobranza eficiente para tu empresa.",
    tag: "Estrategia",
    category: "estrategias",
  },

  /* =========================================================
   4. NEGOCIACIÓN Y ACUERDOS
========================================================= */

  {
    slug: "acuerdos-de-pago-con-deudores",
    title: "Acuerdos de pago: cómo hacerlos bien",
    description:
      "Guía para estructurar acuerdos de pago efectivos con clientes en mora.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "como-negociar-deudas-sin-perder-cliente",
    title: "Cómo negociar sin perder clientes",
    description:
      "Estrategias para negociar deudas sin afectar la relación comercial.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "modelo-acuerdo-pago-colombia",
    title: "Modelo de acuerdo de pago",
    description:
      "Formato práctico para estructurar acuerdos de pago en Colombia.",
    tag: "Plantilla",
    category: "negociacion",
  },
  {
    slug: "errores-acuerdos-de-pago",
    title: "Errores en acuerdos de pago",
    description:
      "Evita los errores más comunes al estructurar acuerdos de pago.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "incumplimiento-acuerdo-pago",
    title: "Qué hacer si incumplen un acuerdo",
    description:
      "Acciones legales y preventivas ante el incumplimiento de acuerdos.",
    tag: "Legal",
    category: "negociacion",
  },
  {
    slug: "documentar-acuerdos-pago",
    title: "Cómo documentar acuerdos de pago",
    description:
      "Importancia de documentar correctamente los acuerdos para respaldo legal.",
    tag: "Legal",
    category: "negociacion",
  },
  {
    slug: "cobrar-sin-perder-cliente",
    title: "Cómo cobrar sin perder clientes",
    description:
      "Mantén relaciones comerciales sanas mientras gestionas el cobro.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "reestructuracion-deuda",
    title: "Reestructuración de deudas",
    description:
      "Opciones para renegociar deudas y mejorar condiciones de pago.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "planes-de-pago-flexibles",
    title: "Planes de pago flexibles",
    description:
      "Modelos flexibles de pago adaptados a la capacidad del cliente.",
    tag: "Negociación",
    category: "negociacion",
  },
  {
    slug: "seguimiento-acuerdos-pago",
    title: "Seguimiento de acuerdos de pago",
    description:
      "Cómo asegurar el cumplimiento de los acuerdos de pago establecidos.",
    tag: "Gestión",
    category: "negociacion",
  },
  {
    slug: "recuperacion-sin-juicio",
    title: "Recuperación sin procesos judiciales",
    description:
      "Alternativas efectivas al cobro judicial para recuperar cartera.",
    tag: "Estrategia",
    category: "negociacion",
  },
  {
    slug: "negociacion-psicologia-cliente",
    title: "Psicología del deudor",
    description:
      "Entiende el comportamiento del deudor para mejorar la negociación.",
    tag: "Estrategia",
    category: "negociacion",
  },

  /* =========================================================
   5. SECTOR / INDUSTRIAS
========================================================= */

  {
    slug: "cartera-sector-salud",
    title: "Cartera en sector salud",
    description:
      "Estrategias de cobranza aplicadas a IPS, clínicas y el sector salud.",
    tag: "Sector Salud",
    category: "sector",
  },
  {
    slug: "cartera-construccion",
    title: "Cartera en construcción",
    description:
      "Gestión de cartera en empresas del sector construcción y obras civiles.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-educacion",
    title: "Cartera en educación",
    description:
      "Cobranza y recuperación de cartera en instituciones educativas.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-logistica",
    title: "Cartera en logística",
    description:
      "Cómo gestionar la cobranza en empresas de transporte y logística.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-retail",
    title: "Cartera en retail",
    description: "Estrategias de recuperación de cartera en comercio y retail.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-tecnologia",
    title: "Cartera en empresas tecnológicas",
    description: "Gestión de cartera en empresas SaaS y tecnología.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-financiero",
    title: "Cartera en sector financiero",
    description:
      "Administración y recuperación de cartera en entidades financieras.",
    tag: "Finanzas",
    category: "sector",
  },
  {
    slug: "cartera-b2b",
    title: "Cobranza B2B",
    description: "Gestión de cartera entre empresas (B2B) y sus desafíos.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-pymes",
    title: "Cartera en PYMES",
    description:
      "Estrategias de cobranza adaptadas a pequeñas y medianas empresas.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "casos-reales-cartera",
    title: "Casos reales de recuperación",
    description:
      "Ejemplos reales de recuperación de cartera y estrategias aplicadas.",
    tag: "Estrategia",
    category: "sector",
  },
  {
    slug: "cartera-servicios",
    title: "Cartera en empresas de servicios",
    description: "Gestión de cartera en empresas de servicios profesionales.",
    tag: "Empresas",
    category: "sector",
  },
  {
    slug: "cartera-telecom",
    title: "Cartera en telecomunicaciones",
    description: "Estrategias de cobranza en el sector telecomunicaciones.",
    tag: "Empresas",
    category: "sector",
  },

  /* =========================================================
   6. FINANZAS E INDICADORES
========================================================= */
  {
    slug: "dso-dias-cartera",
    title: "DSO: días de cartera promedio",
    description:
      "Indicador financiero que mide el tiempo promedio de cobro de cartera.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "rotacion-de-cartera",
    title: "Rotación de cartera",
    description:
      "Cómo medir la eficiencia en la recuperación de cartera empresarial.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "analisis-antiguedad-cartera",
    title: "Antigüedad de cartera",
    description:
      "Clasificación de cartera según tiempo de vencimiento y riesgo.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "kpi-cobranza",
    title: "KPIs de cobranza",
    description:
      "Indicadores clave para medir la efectividad de la gestión de cobranza.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "reportes-cartera",
    title: "Reportes de cartera",
    description: "Cómo estructurar reportes de cartera claros y efectivos.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "riesgo-cartera",
    title: "Riesgo de cartera",
    description:
      "Cómo evaluar el riesgo financiero asociado a la cartera de clientes.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "analisis-financiero-cobranza",
    title: "Análisis financiero de cobranza",
    description:
      "Interpretación de datos financieros para mejorar la cobranza.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "dsr-cartera",
    title: "DSR en cartera",
    description: "Métrica avanzada para analizar desempeño de recuperación.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "optimizar-flujo-caja",
    title: "Cómo optimizar flujo de caja",
    description:
      "Estrategias para mejorar la liquidez y estabilidad financiera.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "dashboard-cartera",
    title: "Dashboard de cartera",
    description: "Visualización de KPIs para controlar la gestión de cartera.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "indice-morosidad",
    title: "Índice de morosidad: cómo calcularlo",
    description:
      "Aprende a calcular el índice de morosidad y evaluar la salud financiera de tu cartera.",
    tag: "Finanzas",
    category: "finanzas",
  },
  {
    slug: "provision-cartera",
    title: "Provisión de cartera: qué es y cómo calcularla",
    description:
      "Guía para calcular provisiones de cartera y gestionar el riesgo financiero empresarial.",
    tag: "Finanzas",
    category: "finanzas",
  },

  /* =========================================================
   7. PLANTILLAS Y AUTOMATIZACIÓN
========================================================= */

  {
    slug: "formato-acuerdo-pago-word-gratis",
    title: "Formato de acuerdo de pago en Word",
    description:
      "Plantilla lista para estructurar acuerdos de pago en empresas.",
    tag: "Plantilla",
    category: "plantillas",
  },
  {
    slug: "mensajes-whatsapp-cobranza",
    title: "Mensajes de WhatsApp para cobrar clientes",
    description: "Ejemplos de mensajes efectivos para cobranza por WhatsApp.",
    tag: "Cobranza",
    category: "plantillas",
  },
  {
    slug: "carta-cobro-prejuridico",
    title: "Carta de cobro prejurídico",
    description:
      "Modelo de carta de cobro prejurídico listo para usar en Colombia.",
    tag: "Legal",
    category: "plantillas",
  },
  {
    slug: "emails-cobranza",
    title: "Emails de cobranza efectivos",
    description:
      "Plantillas de correo para mejorar la recuperación de cartera.",
    tag: "Cobranza",
    category: "plantillas",
  },
  {
    slug: "scripts-llamadas-cobranza",
    title: "Scripts de llamadas de cobranza",
    description:
      "Guiones estructurados para llamadas de recuperación de cartera.",
    tag: "Cobranza",
    category: "plantillas",
  },
  {
    slug: "automatizacion-cobranza",
    title: "Automatización de cobranza",
    description:
      "Cómo automatizar procesos de cobranza para mejorar eficiencia.",
    tag: "Estrategia",
    category: "plantillas",
  },
  {
    slug: "crm-cobranza",
    title: "Uso de CRM en cobranza",
    description:
      "Cómo un CRM ayuda a gestionar y automatizar la cartera de clientes.",
    tag: "Estrategia",
    category: "plantillas",
  },
  {
    slug: "excel-cartera",
    title: "Dashboard de cartera en Excel",
    description:
      "Plantilla en Excel para control y análisis de cartera empresarial.",
    tag: "Finanzas",
    category: "plantillas",
  },
  {
    slug: "secuencias-cobranza",
    title: "Secuencias automáticas de cobranza",
    description: "Flujos automatizados para mejorar la gestión de cobro.",
    tag: "Estrategia",
    category: "plantillas",
  },
  {
    slug: "modelo-carta-cobro",
    title: "Modelos de carta de cobro",
    description: "Formatos profesionales para cartas de cobranza empresarial.",
    tag: "Plantilla",
    category: "plantillas",
  },
  {
    slug: "whatsapp-cobranza-avanzado",
    title: "Cobranza por WhatsApp avanzada",
    description: "Estrategias digitales para mejorar el recaudo por WhatsApp.",
    tag: "Cobranza",
    category: "plantillas",
  },
  {
    slug: "workflow-cobranza",
    title: "Workflow de cobranza automatizado",
    description:
      "Diseño de flujos automatizados para gestión de cobranza empresarial.",
    tag: "Estrategia",
    category: "plantillas",
  },
];

const categoryMeta: Record<string, { title: string; description: string }> = {
  fundamentos: {
    title: "Fundamentos de recuperación de cartera",
    description:
      "Conceptos básicos para entender cómo funciona la recuperación de cartera en empresas.",
  },
  cobro_juridico: {
    title: "Cobro jurídico y procesos legales",
    description: "Guías prácticas sobre procesos legales de cobro en Colombia.",
  },
  estrategias: {
    title: "Estrategias de cobranza efectiva",
    description: "Métodos prácticos para mejorar la recuperación de cartera.",
  },
  negociacion: {
    title: "Negociación y acuerdos de pago",
    description: "Técnicas para negociar deudas sin perder clientes.",
  },
  sector: {
    title: "Recuperación de cartera por sector",
    description: "Estrategias adaptadas a diferentes industrias y negocios.",
  },
  finanzas: {
    title: "Finanzas e indicadores de cartera",
    description: "Métricas clave para analizar y optimizar la cobranza.",
  },
  plantillas: {
    title: "Plantillas y automatización",
    description: "Herramientas listas para usar en procesos de cobranza.",
  },
};

/* ================= GROUP BY CATEGORY ================= */

function groupByCategory(items: typeof blogItems) {
  return items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof blogItems>,
  );
}

/* ================= COMPONENT ================= */

export default function BlogContent() {
  const grouped = groupByCategory(blogItems);

  return (
    <main>
      {/* ================= HERO ================= */}
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
            Guías prácticas sobre cobranza, procesos legales, negociación y
            estrategias para mejorar la recuperación de cartera en Colombia.
          </p>
        </motion.div>
      </header>

      {/* ================= BLOG ================= */}
      <section className={styles.blogSection}>
        {Object.entries(grouped).map(([category, items]) => {
          const meta = categoryMeta[category];

          return (
            <div key={category} className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>
                {meta?.title || category}
              </h2>

              <p className={styles.categoryDescription}>{meta?.description}</p>

              <div className={styles.blogGrid}>
                {items.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className={styles.cardLink}
                  >
                    <motion.article
                      className={styles.blogCard}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <span className={styles.cardTag}>{item.tag}</span>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <div className={styles.readMore}>
                        Leer guía completa →
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
