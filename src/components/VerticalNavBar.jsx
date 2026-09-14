export default function VerticalNavBar({ direction="row", ...props }) {
  return (
    <>
      <nav {...props}>
        <ul className={`nav d-flex flex-${direction} gap-3 link-color`}>
          <li className="nav-item">
            <a className="nav-link p-0" href="#">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-0" href="#">Tecnologias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-0" href="#">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-0" href="#">Projetos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}