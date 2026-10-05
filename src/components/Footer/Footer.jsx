import SocialMedias from "../SocialMedias/SocialMedias";
import Nav from '../../components/Nav/Nav';

import styles from './Footer.module.css';

export default function Footer() {
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "GitHub", href: "#github" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <>
      <hr className="border-color" />
      <div className={styles.footer}>
        <footer>
          <div className={styles.footerDescription}>
            <div className={styles.footerTitle}>
              <span className="text-primary">Elisson Rocha</span>
              <span className="text-secondary fs-xs">Desenvolvedor Front-End</span>
            </div>
            <SocialMedias className={styles.socialMedia} />
            <Nav items={navItems} direction="row" className={styles.nav} ></Nav>
            <hr className="border-color" />
            <span className="text-secondary fs-xs">© 2026 - Todos os direitos reservados. </span>
          </div>
        </footer>
      </div>
    </>
  );
}