"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function EmbargosEnColombia() {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Cobro Jurídico
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Embargos en Colombia: qué se puede embargar y cómo funciona el proceso
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          El embargo es una de las medidas más utilizadas dentro de los procesos
          de cobro jurídico en Colombia. Su objetivo es garantizar el pago de
          una obligación pendiente mediante la afectación temporal de bienes,
          cuentas bancarias o ingresos del deudor. Conocer qué puede embargarse
          y cuáles son los límites legales es fundamental tanto para acreedores
          como para deudores.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué es un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          El embargo es una medida cautelar decretada por un juez dentro de un
          proceso judicial. Su finalidad es asegurar que existan bienes
          suficientes para responder por la deuda reclamada mientras avanza el
          proceso de cobro.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Una vez decretado el embargo, el deudor puede ver limitadas sus
          facultades para disponer de determinados bienes hasta que se resuelva
          la obligación o se levante la medida.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué bienes pueden ser embargados en Colombia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Dependiendo del caso, la autoridad judicial puede ordenar el embargo
          de diferentes tipos de bienes o activos del deudor.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Cuentas bancarias y productos financieros.</li>
          <li>Salarios dentro de los límites establecidos por la ley.</li>
          <li>Vehículos registrados a nombre del deudor.</li>
          <li>Inmuebles como casas, apartamentos o lotes.</li>
          <li>Acciones o participaciones societarias.</li>
          <li>Ingresos derivados de actividades comerciales.</li>
          <li>Bienes muebles de valor económico.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué bienes no pueden ser embargados?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La legislación colombiana protege ciertos bienes considerados
          inembargables por razones de subsistencia o interés social.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Parte del salario mínimo legal protegido por la ley.</li>
          <li>Algunos bienes de uso personal indispensables.</li>
          <li>Determinados subsidios y ayudas estatales.</li>
          <li>Pensiones dentro de los límites legales aplicables.</li>
          <li>Bienes expresamente declarados inembargables por la ley.</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona el embargo de cuentas bancarias?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cuando un juez ordena el embargo de una cuenta bancaria, la entidad
          financiera recibe la instrucción de inmovilizar los recursos hasta el
          monto autorizado. Esto impide que el titular retire o transfiera los
          fondos afectados por la medida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Posteriormente, si el proceso avanza favorablemente para el acreedor,
          esos recursos pueden utilizarse para cubrir total o parcialmente la
          deuda reclamada.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Embargo de salario en Colombia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los salarios pueden ser objeto de embargo, aunque existen límites
          legales diseñados para proteger el mínimo vital del trabajador. El
          porcentaje embargable dependerá del monto del salario y de la
          naturaleza de la obligación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Por esta razón, no todo el ingreso mensual de una persona puede ser
          retenido dentro de un proceso judicial.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cuándo se puede solicitar un embargo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Generalmente, el embargo se solicita dentro de un proceso ejecutivo
          cuando existe un documento que presta mérito ejecutivo, como pagarés,
          letras de cambio, sentencias judiciales o facturas que cumplan los
          requisitos legales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La solicitud debe ser presentada ante el juez competente, quien
          evaluará si existen fundamentos suficientes para decretar la medida.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conclusión
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Los embargos son herramientas legales que permiten garantizar el pago
          de obligaciones dentro de procesos de cobro jurídico. Sin embargo,
          existen límites y bienes protegidos por la ley. Comprender cómo
          funciona esta medida ayuda a tomar mejores decisiones y a gestionar
          adecuadamente los riesgos asociados a las deudas en Colombia.
        </motion.p>
      </motion.article>
    </main>
  );
}
