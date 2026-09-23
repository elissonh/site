import { useState } from "react";

import CustomNav from "./CustomNav";
import VerticalNavBar from "./common/VerticalNavBar";
import SocialMedias from "./common/SocialMedias";
import Modal from "./common/Modal";
import logo from '../assets/logo.svg';

import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSideBar() {
    setShowSidebar(true);
  }

  return (
    <>
      <div id="header" className="header">
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span className="text-primary fw-semibold">Elisson Rocha</span>
          </div>
          <button className="btn" onClick={handleShowSideBar}>
            <IoMenu size={32} />
          </button>
          <div className="nav d-none">
            <CustomNav></CustomNav>
          </div>
          <div className="d-none">
            <SocialMedias id="social-media-header"></SocialMedias>
          </div>
        </header>
        <hr className="border-color" />
      </div>
      {
        showSidebar && (
          <>
            <div
              className="modal-back-layer"
              onClick={() => setShowSidebar(false)}
            />
            <Modal onClose={() => setShowSidebar(false)} id="sidebar">
              <div className="side-bar">
                <VerticalNavBar direction="column"></VerticalNavBar>
                <SocialMedias id="social-media-header"></SocialMedias>
              </div>
            </Modal>
          </>
        )
      }
    </>
  );
}