import CustomNav from "./CustomNav";
import SocialMedias from "./common/SocialMedias";
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <>
      <hr className="m-0 border border-light border-1 border-color" />
      <footer className="d-flex justify-content-between align-items-center gap-3 p-3 text-light">
        <div className="d-flex align-items-center gap-3">
          <img src={logo} alt="Logo" />
          <div className="d-flex gap-3 text-secondary-color">
            <span className="text-light">Elisson Rocha</span>
            <div className="vr"></div>
            <span className="">Desenvolvedor Full Stack</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-5">
          <CustomNav></CustomNav>
          <SocialMedias id="social-media-footer"></SocialMedias>
          <span className="text-secondary-color">© 2026 Elisson Rocha</span>
        </div>
      </footer>
    </>
  );
}