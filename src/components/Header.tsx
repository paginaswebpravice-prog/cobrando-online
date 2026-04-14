import Link from "next/link";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* NAVBAR */}
      <nav
        className={styles.navbar}
        aria-label="Navegación principal"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        {/* LOGO */}
        <div className={styles.logo}>
          <img
            src="/logo-cobrando-online.png"
            alt="Cobrando Online - Recuperación de cartera en Colombia"
          />
        </div>

        {/* MENU */}
        <ul className={styles.menu}>
          {/* INICIO */}
          <li itemProp="name">
            <Link href="/" title="Inicio - Cobrando Online" itemProp="url">
              Inicio
            </Link>
          </li>

          {/* CONOCENOS */}
          <li itemProp="name">
            <Link
              href="/conocenos"
              title="Conócenos - Cobrando Online"
              itemProp="url"
            >
              Conócenos
            </Link>
          </li>

          <li itemProp="name">
            <Link href="/" title="Inicio - Cobrando Online" itemProp="url">
              Inicio
            </Link>
          </li>

          {/* SOLUCIONES */}
          <li className={styles.dropdown} itemProp="name">
            <span className={styles.dropdownTitle}>Soluciones</span>

            <div className={styles.dropdownMenu}>
              <Link href="/soluciones/recuperar-cartera-vencida">
                Recuperar cartera vencida
              </Link>
              <Link href="/soluciones/clientes-no-pagan">
                Clientes que no pagan
              </Link>
              <Link href="/soluciones/reducir-cartera-vencida">
                Reducir cartera morosa
              </Link>
              <Link href="/soluciones/mejorar-flujo-de-caja">
                Mejorar flujo de caja
              </Link>
            </div>
          </li>

          {/* CÓMO FUNCIONA */}
          <li className={styles.dropdown} itemProp="name">
            <span className={styles.dropdownTitle}>Cómo funciona</span>

            <div className={styles.dropdownMenu}>
              <Link href="/como-funciona/cobro-por-whatsapp">
                Cobro por WhatsApp
              </Link>
              <Link href="/como-funciona/recordatorios-de-pago">
                Recordatorios automáticos
              </Link>
              <Link href="/como-funciona/seguimiento-de-cartera">
                Seguimiento de cartera
              </Link>
            </div>
          </li>

          {/* SECTORES */}
          <li className={styles.dropdown} itemProp="name">
            <span className={styles.dropdownTitle}>Sectores</span>

            <div className={styles.dropdownMenu}>
              <Link href="/sectores/recaudo-de-empresas">Empresas</Link>
              <Link href="/sectores/recaudo-pymes">PYMES</Link>
              <Link href="/sectores/recaudo-inmobiliarias">Inmobiliarias</Link>
              <Link href="/sectores/recaudo-colegios">Colegios</Link>
              <Link href="/sectores/recaudo-freelancers">Freelancers</Link>
            </div>
          </li>

          {/* BLOG */}
          <li itemProp="name">
            <Link
              href="/blog"
              title="Blog sobre recuperación de cartera y finanzas"
              itemProp="url"
            >
              Blog
            </Link>
          </li>

          {/* CONTACTO */}
          <li itemProp="name">
            <Link
              href="/contactanos"
              title="Contacto - Cobrando Online"
              itemProp="url"
              className={styles.contactLink}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/contacto"
          className={styles.btn}
          title="Empieza a recuperar tu cartera hoy"
        >
          Empezar ahora
        </Link>
      </nav>
    </header>
  );
}
