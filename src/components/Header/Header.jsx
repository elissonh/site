import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import Button from "../Buttons/Button";
import SocialMedias from "../SocialMedias/SocialMedias";
import Nav from '../../components/Nav/Nav';
import Sidebar from "../../pages/Home/components/Sidebar/Sidebar";

import logo from '../../assets/logo.svg';

import styles from './Header.module.css';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "GitHub", href: "#github" },
    { name: "Projetos", href: "#projetos" },
  ];

  function handleShowSideBar() {
    console.log("mostrando");
    setShowSidebar(true);
  }

  return (
    <>
        <header className={styles.header}>
          <div className={styles.headerLogo}>
            <img src={logo} alt="Logo" className={styles.headerImg} />
            <span className="text-primary fw-semibold">Elisson Rocha</span>
          </div>
          <Button
            variant="transparent"
            PrefixIcon={IoMenu}
            iconSize="32"
            equalPadding={true}
            onClick={handleShowSideBar}
          />
          <Nav items={navItems} className={styles.nav} ulProps={styles.horizontalNav}></Nav>
          <SocialMedias className={styles.socialMedias}></SocialMedias>
        </header>
      {
        showSidebar && (
          <Sidebar onClose={() => setShowSidebar(false)}></Sidebar>
        )
      }
    </>
  );
}