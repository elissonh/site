import { useState } from "react";

import CustomNav from "./CustomNav";
import VerticalNavBar from "./common/VerticalNavBar";
import SocialMedias from "./common/SocialMedias";
import Modal from "./common/Modal";
import logo from '../assets/logo.svg';

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSideBar() {
    setShowSidebar(true);
  }

  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 text-light position-relative">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="me-3" />
          <span className="fw-semibold">Elisson Rocha</span>
        </div>
        <div id="nav-header" className="d-flex align-items-center">
          <button className="btn button-color p-0" onClick={handleShowSideBar}>
            <IoMenu className="d-md-none" size={32} />
          </button>
          <CustomNav className="d-none d-md-block"></CustomNav>
        </div>
        <div className="d-none d-md-block">
          <SocialMedias id="social-media-header"></SocialMedias>
        </div>
      </header>
      <hr className="m-0 border border-light border-1 border-color" />
      {
        showSidebar && (
          <Modal id="sidebar-modal" onClose={() => setShowSidebar(false)} className="d-md-none">
            <div className="position-absolute top-0 end-0 d-flex flex-column gap-3 px-5 py-4 z-2 bg-secondary h-100 shadow-sm border-start border-color">
              <VerticalNavBar direction="column"></VerticalNavBar>
              <SocialMedias id="social-media-header"></SocialMedias>
            </div>
          </Modal>
        )
      }
    </>
  );
}