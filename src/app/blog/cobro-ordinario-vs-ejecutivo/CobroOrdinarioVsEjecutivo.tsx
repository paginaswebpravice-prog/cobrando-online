"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroOrdinarioVsEjecutivo() {
  return (
    <main className={styles.articleContainer}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Recuperación Judicial de Cartera
        </motion.span>

        {/*  HERO  */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Proceso ejecutivo vs proceso ordinario en Colombia: diferencias,
          ventajas y cuál conviene para recuperar una deuda empresarial
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cuando una empresa agota las etapas de cobranza preventiva,
          administrativa y prejurídica, normalmente surge una pregunta:
          <strong>
            {" "}
            ¿qué proceso judicial conviene iniciar para recuperar la deuda?
          </strong>
          Muchas personas creen que cualquier obligación puede reclamarse
          mediante un proceso ejecutivo, cuando en realidad esto dependerá de la
          documentación disponible y de los requisitos exigidos por la ley.
          Elegir el procedimiento incorrecto puede incrementar costos, extender
          los tiempos de recuperación e incluso disminuir las probabilidades de
          recaudo. En esta guía conocerás las diferencias entre el proceso
          ejecutivo y el proceso ordinario en Colombia, cuándo utilizar cada
          uno, qué ventajas ofrecen y qué aspectos debe analizar una empresa
          antes de iniciar una recuperación judicial de cartera.
        </motion.p>

        {/*  POR QUE ELEGIR EL PROCESO JUDICIAL  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué es importante elegir correctamente el proceso judicial?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          No todas las obligaciones vencidas pueden reclamarse de la misma
          forma. Algunas cuentan con documentos suficientes para exigir
          directamente el pago, mientras que otras requieren demostrar primero
          la existencia de la deuda. Tomar la decisión adecuada desde el inicio
          permite ahorrar recursos, reducir tiempos procesales y aumentar las
          probabilidades de recuperar la cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Además, un análisis previo evita iniciar procesos judiciales que
          podrían prolongarse innecesariamente o generar costos superiores al
          valor que finalmente podría recuperarse.
        </motion.p>

        {/*  QUE ES UN PROCESO EJECUTIVO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es un proceso ejecutivo y cuándo puede utilizarse?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ejecutivo es uno de los mecanismos judiciales más
          utilizados para recuperar cartera empresarial porque permite exigir
          directamente el cumplimiento de una obligación cuando existe un
          documento que presta mérito ejecutivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En términos prácticos, significa que el acreedor ya cuenta con una
          prueba suficiente para demostrar que la deuda existe, cuál es su valor
          y que el plazo para pagar ya venció.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esta situación reduce considerablemente la discusión sobre la
          existencia de la obligación y permite que el proceso se concentre en
          obtener el pago efectivo de la deuda mediante las herramientas
          previstas por la ley.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, muchas empresas buscan fortalecer su documentación
          comercial desde el inicio de la relación con el cliente, ya que contar
          con soportes adecuados puede facilitar una eventual recuperación
          judicial en caso de incumplimiento.
        </motion.p>

        {/*  QUE DOCUMENTOS PUEDE FACILITAR UN PROCESO EJECUTIVO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos pueden facilitar un proceso ejecutivo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Dependiendo del caso concreto y del cumplimiento de los requisitos
          legales, algunos documentos pueden servir como soporte para iniciar un
          proceso ejecutivo.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Pagarés correctamente diligenciados.</li>
          <li>Letras de cambio.</li>
          <li>Cheques.</li>
          <li>Contratos firmados.</li>
          <li>Actas de conciliación.</li>
          <li>Facturas electrónicas que cumplan los requisitos legales.</li>
          <li>Acuerdos de pago debidamente suscritos.</li>
          <li>Reconocimientos escritos de deuda.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          La correcta conservación de estos documentos puede marcar una
          diferencia importante entre iniciar un proceso más ágil o tener que
          acudir a un procedimiento con una etapa probatoria mucho más extensa.
        </motion.p>

        {/*  QUE ES UN PROCESO ORDINARIO Y EN QUE SITUACIONES RESULTA NECESARIO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Qué es un proceso ordinario y en qué situaciones resulta necesario?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ordinario es un mecanismo judicial utilizado cuando el
          acreedor no cuenta con un título ejecutivo suficiente para exigir
          directamente el pago de la obligación. En estas situaciones, el juez
          debe analizar previamente las pruebas aportadas para determinar si la
          deuda realmente existe y cuál es su alcance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esto significa que antes de ordenar el pago, el proceso debe superar
          una etapa probatoria en la que ambas partes pueden aportar documentos,
          testimonios, peritajes y demás elementos permitidos por la legislación
          colombiana.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque normalmente requiere más tiempo que un proceso ejecutivo, el
          proceso ordinario continúa siendo una herramienta importante cuando la
          empresa dispone de evidencia suficiente para demostrar la existencia
          de la obligación, aun cuando no exista un documento que preste mérito
          ejecutivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, muchas organizaciones recurren a este procedimiento
          para resolver controversias contractuales, diferencias comerciales o
          incumplimientos cuya existencia todavía debe ser demostrada ante el
          juez.
        </motion.p>

        {/*  CUANDO UNA EMPRESA SUELE NECESITAR UN PROCESO ORDINARIO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo una empresa suele necesitar un proceso ordinario?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Existen diferentes situaciones en las cuales una empresa puede verse
          obligada a acudir a un proceso ordinario para recuperar una
          obligación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>No existe un pagaré ni un título ejecutivo.</li>
          <li>El contrato presenta vacíos o inconsistencias.</li>
          <li>La factura no reúne los requisitos legales.</li>
          <li>La obligación fue acordada principalmente de forma verbal.</li>
          <li>Existen discusiones sobre el cumplimiento del contrato.</li>
          <li>El deudor niega la existencia de la obligación.</li>
          <li>Es necesario demostrar la prestación efectiva del servicio.</li>
          <li>La deuda depende de la interpretación de varias pruebas.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En estos escenarios, el éxito del proceso dependerá en gran medida de
          la calidad de la documentación que la empresa haya conservado durante
          toda la relación comercial.
        </motion.p>

        {/*  EJEMPLO PRÁCTICO: QUE PROCESO PUEDE UTILIZAR UNA EMPRESA  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ejemplo práctico: ¿qué proceso podría utilizar una empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Imaginemos que una empresa prestó un servicio tecnológico por valor de
          $40 millones y únicamente cuenta con correos electrónicos,
          cotizaciones aceptadas y evidencia de la prestación del servicio, pero
          nunca se firmó un pagaré ni un documento que constituya título
          ejecutivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En este escenario probablemente será necesario demostrar primero la
          existencia de la obligación antes de exigir su pago, razón por la cual
          el procedimiento podría ser diferente al utilizado cuando existe un
          pagaré firmado o una factura con mérito ejecutivo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Este ejemplo evidencia la importancia de documentar correctamente cada
          operación comercial desde el inicio, ya que una adecuada gestión
          documental puede facilitar considerablemente la recuperación posterior
          de la cartera.
        </motion.p>

        {/*  ERRORES FRECUENTES AL ELEGIR ENTRE UN PROCESO EJECUTIVO Y UNO ORDINARIO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Errores frecuentes al elegir entre un proceso ejecutivo y uno
          ordinario
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            Iniciar un proceso sin revisar previamente la documentación
            disponible.
          </li>
          <li>
            Suponer que cualquier factura permite demandar ejecutivamente.
          </li>
          <li>Esperar demasiado tiempo para iniciar la recuperación.</li>
          <li>No verificar la solvencia del deudor.</li>
          <li>Perder documentos importantes durante la relación comercial.</li>
          <li>No conservar soportes de entrega del servicio.</li>
          <li>Omitir acuerdos de pago escritos.</li>
          <li>
            Intentar acudir directamente a la vía judicial sin una estrategia
            previa de recuperación.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Evitar estos errores permite optimizar la estrategia de recuperación y
          reducir costos innecesarios antes de iniciar cualquier actuación
          judicial.
        </motion.p>

        {/*  PRINCIPALES DIFERENCIAS ENTRE COBRO ORDINARIO Y EJECUTIVO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aspectos que una empresa debería analizar antes de elegir un proceso
          judicial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Elegir entre un proceso ejecutivo y un proceso ordinario no depende
          únicamente del nombre del procedimiento. Una decisión acertada
          requiere analizar diferentes factores jurídicos, financieros y
          comerciales que influyen directamente en las probabilidades reales de
          recuperación de la cartera.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En muchas ocasiones las empresas inician procesos judiciales sin
          realizar un análisis previo, lo que puede traducirse en mayores
          costos, tiempos más largos e incluso resultados inferiores a los
          esperados.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Valor económico de la deuda.</li>
          <li>Calidad de la documentación disponible.</li>
          <li>Antigüedad de la obligación.</li>
          <li>Capacidad económica del deudor.</li>
          <li>Existencia de bienes embargables.</li>
          <li>Probabilidad de lograr un acuerdo antes del juicio.</li>
          <li>Tiempo que la empresa está dispuesta a esperar.</li>
          <li>
            Costo total del proceso frente al valor esperado de recuperación.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mientras mejor sea este análisis inicial, mayores serán las
          posibilidades de seleccionar el procedimiento adecuado y optimizar los
          recursos destinados a la recuperación judicial.
        </motion.p>

        {/*  CUANDO SUELE SER MÁS CONVENIENTE UN PROCESO EJECUTIVO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Cuándo suele ser más conveniente un proceso ejecutivo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          En términos generales, el proceso ejecutivo representa la alternativa
          más eficiente cuando la empresa cuenta con documentación sólida que
          permite acreditar la existencia de una obligación clara, expresa y
          exigible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Esto facilita que el proceso avance con mayor rapidez y permite
          adoptar medidas encaminadas a proteger la recuperación del crédito
          desde etapas tempranas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Existe un pagaré firmado.</li>
          <li>La factura cumple los requisitos legales.</li>
          <li>Hay contratos correctamente suscritos.</li>
          <li>La obligación está claramente determinada.</li>
          <li>La deuda ya es exigible.</li>
          <li>Se busca reducir tiempos de recuperación.</li>
          <li>Se pretende proteger bienes del deudor.</li>
        </motion.ul>

        {/*  CUANDO SUELE SER MÁS CONVENIENTE UN PROCESO ORDINARIO  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿En qué situaciones puede resultar más adecuado un proceso ordinario?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque muchas empresas prefieren acudir directamente a un proceso
          ejecutivo, existen situaciones donde el proceso ordinario constituye
          la vía más apropiada debido a la ausencia de un título ejecutivo o a
          la existencia de controversias sobre la obligación.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>La deuda necesita demostrarse mediante pruebas.</li>
          <li>Existen desacuerdos sobre el contrato.</li>
          <li>La obligación fue pactada verbalmente.</li>
          <li>La documentación presenta inconsistencias.</li>
          <li>Se requiere una valoración probatoria amplia.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Aunque normalmente implica un trámite más extenso, este procedimiento
          permite proteger los derechos del acreedor cuando aún no existe un
          documento que permita acudir directamente a la ejecución.
        </motion.p>

        {/*  POR QUE LA RECUPERACION DE CARTERA DEBERIA COMENZAR ANTES DEL PROCESO JUDICIAL  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Por qué la recuperación de cartera debería comenzar antes del proceso
          judicial?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Uno de los errores más frecuentes consiste en esperar varios meses o
          incluso años antes de iniciar una estrategia de recuperación. En ese
          tiempo el deudor puede disminuir su capacidad económica, desaparecer,
          cambiar de domicilio o dificultar la localización de bienes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por esta razón, las empresas que implementan procesos preventivos,
          seguimiento permanente y cobranza prejurídica suelen obtener mejores
          resultados que aquellas que esperan hasta llegar a una demanda.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>Recordatorios automáticos.</li>
          <li>Seguimiento permanente.</li>
          <li>Negociaciones oportunas.</li>
          <li>Acuerdos de pago documentados.</li>
          <li>Clasificación de clientes según riesgo.</li>
          <li>Escalamiento progresivo de la cobranza.</li>
        </motion.ul>

        {/*  CONCLUSIÓN  */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Conclusión: elegir el procedimiento correcto puede aumentar la
          recuperación de cartera
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          El proceso ejecutivo y el proceso ordinario cumplen funciones
          distintas dentro de la recuperación judicial de obligaciones. Elegir
          uno u otro dependerá principalmente de la documentación disponible,
          del tipo de deuda, del comportamiento del deudor y de la estrategia
          diseñada para la empresa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Antes de acudir a un proceso judicial resulta recomendable realizar un
          análisis integral de la cartera, verificar la calidad de los soportes,
          evaluar la solvencia del deudor y determinar si todavía existen
          alternativas de negociación que permitan recuperar el dinero de forma
          más rápida y eficiente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Una estrategia de recuperación bien estructurada, apoyada en procesos
          de cobranza preventiva, gestión prejurídica y análisis documental,
          suele incrementar considerablemente las probabilidades de éxito y
          reducir los costos asociados a la recuperación de cartera empresarial.
        </motion.p>
      </motion.article>
    </main>
  );
}
