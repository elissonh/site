import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import Button from "../Buttons/Button";
// import Nav from "../Nav/Nav";
// import SocialMedias from "../SocialMedias/SocialMedias";
import Sidebar from "../../pages/Home/components/Sidebar/Sidebar";

import logo from '../../assets/logo.svg';

import styles from './Header.module.css';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSideBar() {
    console.log("mostrando");
    setShowSidebar(true);
  }

  return (
    <>
      <div className={styles.header}>
        <header className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <img src={logo} alt="Logo" className={styles.headerImg} />
            <span className="text-primary fw-semibold">Elisson Rocha</span>
          </div>
          <Button variant="transparent" PrefixIcon={IoMenu} iconSize="32" equalPadding={true} onClick={handleShowSideBar}>
          </Button>
          {/* <div className="nav d-none">
            <Nav></Nav>
          </div> */}
          {/* <div className="d-none">
            <SocialMedias></SocialMedias>
          </div> */}
        </header>
        <hr className="border-color" />
      </div>
      {
        showSidebar && (
          <Sidebar onClose={() => setShowSidebar(false)}></Sidebar>
        )
      }
    </>
  );
}