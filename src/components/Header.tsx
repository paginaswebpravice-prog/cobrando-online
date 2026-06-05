"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className={styles.header}>
      <nav
        className={styles.navbar}
        aria-label="Navegación principal"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <img
            src="/logo-cobrando-online.png"
            alt="Cobrando Online - Recuperación de cartera en Colombia"
          />
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        {/* OVERLAY */}
        {menuOpen && (
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
        )}

        {/* MENU */}
        <div
          className={`${styles.menuWrapper} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <ul className={styles.menu}>
            <li itemProp="name">
              <Link href="/" itemProp="url">
                Inicio
              </Link>
            </li>

            <li itemProp="name">
              <Link href="/conocenos" itemProp="url">
                Conócenos
              </Link>
            </li>

            {/* SOLUCIONES */}
            <li className={styles.dropdown}>
              <button
                className={styles.dropdownBtn}
                onClick={() => toggleDropdown("soluciones")}
              >
                Soluciones
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  openDropdown === "soluciones" ? styles.dropdownActive : ""
                }`}
              >
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

            {/* COMO FUNCIONA */}
            <li className={styles.dropdown}>
              <button
                className={styles.dropdownBtn}
                onClick={() => toggleDropdown("funciona")}
              >
                Cómo funciona
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  openDropdown === "funciona" ? styles.dropdownActive : ""
                }`}
              >
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
            <li className={styles.dropdown}>
              <button
                className={styles.dropdownBtn}
                onClick={() => toggleDropdown("sectores")}
              >
                Sectores
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  openDropdown === "sectores" ? styles.dropdownActive : ""
                }`}
              >
                <Link href="/sectores/recaudo-de-empresas">Empresas</Link>

                <Link href="/sectores/recaudo-pymes">PYMES</Link>

                <Link href="/sectores/recaudo-inmobiliarias">
                  Inmobiliarias
                </Link>

                <Link href="/sectores/recaudo-colegios">Colegios</Link>

                <Link href="/sectores/recaudo-freelancers">Freelancers</Link>
              </div>
            </li>

            <li itemProp="name">
              <Link href="/blog" itemProp="url">
                Blog
              </Link>
            </li>

            <li itemProp="name">
              <Link href="/contactanos" itemProp="url">
                Contacto
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link href="/contactanos" className={styles.btn}>
            Empezar ahora
          </Link>
        </div>
      </nav>
    </header>
  );
}
