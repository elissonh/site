import SocialMedias from "./common/SocialMedias";

export default function Footer() {
  return (
    <>
      <hr className="border-color" />
      <div id="footer" className="footer">
        <footer>
          <div id="footer-description">
            <div id="footer-title">
              <span className="text-primary">Elisson Rocha</span>
              <span className="text-secondary text-small">Desenvolvedor Front-End</span>
              <SocialMedias id="footer-social-medias" />
            </div>
            <span className="text-secondary text-small">© 2026 - Todos os direitos reservados. </span>
          </div>
        </footer>
      </div>
    </>
  );
}