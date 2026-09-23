import CustomNav from "./CustomNav";
import SocialMedias from "./common/SocialMedias";
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <>
      <div id="footer">
        <footer className="p-3 text-light small">
          <hr className="m-0 border border-light border-1 border-color" />
          <div className="d-flex justify-content-between justify-content-md-center text-secondary-color align-items-center gap-4">
            <div className="d-flex gap-2 align-items-center">
              <img src={logo} alt="Logo" />
              <span className="text-light">Elisson Rocha</span>
              <div className="vr"></div>
              <span className="">Desenvolvedor Full Stack</span>
            </div>
            <SocialMedias id="social-media-footer"></SocialMedias>
          </div>
        </footer>
      </div>
    </>
  );
}