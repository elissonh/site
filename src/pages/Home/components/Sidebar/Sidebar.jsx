import Modal from "../../../../components/Modal/Modal";
import Nav from "../../../../components/Nav/Nav";
import SocialMedias from "../../../../components/SocialMedias/SocialMedias";
import styles from './Sidebar.module.css';

export default function Sidebar({ onClose }) {
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "GitHub", href: "#github" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <>
      <div className={styles.sidebar}>
        <Modal onClose={onClose}>
          <aside className={styles.aside}>
            <Nav items={navItems}></Nav>
            <hr className="border-color" />
            <SocialMedias></SocialMedias>
          </aside>
        </Modal>
      </div >
    </>
  );
}