export default function VerticalNavBar({ ...props }) {
  return (
    <>
      <nav {...props}>
        <ul className={`nav`}>
          <li className="nav-item">
            <a className="link p-0" href="#">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="link p-0" href="#">Tecnologias</a>
          </li>
          <li className="nav-item">
            <a className="link p-0" href="#">Github</a>
          </li>
          <li className="nav-item">
            <a className="link p-0" href="#">Projetos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}