import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cobrandoonline.com";
  const now = new Date();

  return [
    // =========================================================
    // HOME
    // =========================================================
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/conocenos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =========================================================
    // SOLUCIONES
    // =========================================================
    {
      url: `${baseUrl}/soluciones/recuperar-cartera-vencida`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/clientes-no-pagan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/reducir-cartera-vencida`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones/mejorar-flujo-de-caja`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =========================================================
    // COMO FUNCIONA
    // =========================================================
    {
      url: `${baseUrl}/como-funciona/cobro-por-whatsapp`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-funciona/recordatorios-de-pago`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/como-funciona/seguimiento-de-cartera`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =========================================================
    // SECTORES
    // =========================================================
    {
      url: `${baseUrl}/sectores/recaudo-de-empresas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectores/recaudo-pymes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectores/recaudo-inmobiliarias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectores/recaudo-colegios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sectores/recaudo-freelancers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =========================================================
    // BLOG BASE
    // =========================================================
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // =========================================================
    // 1. FUNDAMENTOS DE CARTERA
    // =========================================================
    {
      url: `${baseUrl}/blog/que-es-la-recuperacion-de-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tipos-de-recuperacion-de-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/que-es-cartera-vencida`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ciclo-recuperacion-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/impacto-cartera-vencida-empresa`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/riesgo-crediticio-empresas`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/por-que-no-pagan-clientes`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/gestion-cobranza-basica`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mora-en-colombia-explicacion`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-activa-vs-vencida`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/indicadores-basicos-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/como-funciona-recuperacion-dinero`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 2. COBRO JURÍDICO
    // =========================================================
    {
      url: `${baseUrl}/blog/proceso-de-cobro-juridico-colombia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/demanda-ejecutiva-por-deuda-colombia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/prescripcion-deudas-colombia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/embargos-en-colombia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/requisitos-cobro-juridico`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cuanto-dura-proceso-cobro`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cobro-ordinario-vs-ejecutivo`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/deudor-sin-bienes-que-hacer`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/costos-cobro-juridico`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/notificacion-mandamiento-pago`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cuando-ir-a-juicio-deuda`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cobro-juridico-riesgos`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 3. ESTRATEGIAS
    // =========================================================
    {
      url: `${baseUrl}/blog/como-recuperar-cartera-vencida`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/estrategias-de-cobranza-efectiva`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cuando-iniciar-proceso-de-cobro`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seguimiento-recuperacion-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/errores-comunes-recuperacion-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/negociacion-deudores`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reducir-morosidad-empresa`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cobranza-por-etapas`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/flujo-de-caja-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/psicologia-de-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/aumentar-recuperacion-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/plan-cobranza-empresas`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 4. NEGOCIACIÓN
    // =========================================================
    {
      url: `${baseUrl}/blog/acuerdos-de-pago-con-deudores`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/como-negociar-deudas-sin-perder-cliente`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/modelo-acuerdo-pago-colombia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/errores-acuerdos-de-pago`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/incumplimiento-acuerdo-pago`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/documentar-acuerdos-pago`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cobrar-sin-perder-cliente`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reestructuracion-deuda`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/planes-de-pago-flexibles`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seguimiento-acuerdos-pago`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/recuperacion-sin-juicio`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/negociacion-psicologia-cliente`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 5. SECTORES
    // =========================================================
    {
      url: `${baseUrl}/blog/cartera-sector-salud`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-construccion`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-educacion`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-logistica`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-retail`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-tecnologia`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-financiero`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-b2b`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-pymes`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/casos-reales-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-servicios`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-telecom`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 6. FINANZAS
    // =========================================================
    {
      url: `${baseUrl}/blog/indicadores-de-cartera-vencida`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/dso-dias-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/rotacion-de-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/analisis-antiguedad-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/flujo-caja-mora`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/kpi-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reportes-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/riesgo-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/analisis-financiero-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/dsr-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/optimizar-flujo-caja`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/dashboard-cartera`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // 7. PLANTILLAS
    // =========================================================
    {
      url: `${baseUrl}/blog/formato-acuerdo-pago-word-gratis`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mensajes-whatsapp-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/carta-cobro-prejuridico`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/emails-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/scripts-llamadas-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/automatizacion-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/crm-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/excel-cartera`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/secuencias-cobranza`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/modelo-carta-cobro`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/whatsapp-cobranza-avanzado`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/workflow-cobranza`,
      lastModified: now,
      priority: 0.8,
    },

    // =========================================================
    // CONTACTO
    // =========================================================
    {
      url: `${baseUrl}/contactanos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
