import styles from "./styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LOGO + TEXTO */}
        <div className={styles.left}>
          <img
            src="/logo-cobrando-online.png"
            className={styles.logo}
            alt="Cobrando Online"
          />

          <p className={styles.text}>
            <strong>Cobrando Online</strong> es tu aliado en la recuperación de
            cartera. Ofrecemos un servicio ágil, transparente y seguro para
            gestionar deudas de personas naturales, jurídicas y entidades de
            salud, con acompañamiento jurídico especializado.
          </p>

          {/* FRASE INSTITUCIONAL */}
          <p className={styles.brandNote}>
            <strong>Cobrando Online</strong> es una plataforma propiedad de{" "}
            <strong>Pravice Abogados</strong>, creada a partir de la necesidad
            de ofrecer soluciones eficientes y seguras para la recuperación de
            cartera, con respaldo jurídico especializado.
          </p>
        </div>

        {/* HORARIO */}
        <div className={styles.schedule}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <div>
            <h4>Lunes - Viernes</h4>
            <p>08:00 am - 06:00 pm</p>
          </div>
        </div>

        {/* REDES SOCIALES */}
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/praviceabogadosespecializados"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://www.tiktok.com/@pravice_abogados"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>

          <a
            href="https://www.instagram.com/pravice_abogados/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.copy}>
        © {new Date().getFullYear()} Pravice Abogados · Todos los derechos
        reservados
      </div>

      {/* BOTÓN FIJO WHATSAPP */}
      {/* BOTÓN FIJO WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=573234372766&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20recuperaci%C3%B3n%20de%20cartera."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
      </a>
    </footer>
  );
}
