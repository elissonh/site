import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section id="sobre">
        <h1 className="text-white shadow-sm">Elisson Rocha</h1>
        <h2 className="primary-text-color shadow-sm">Desenvolvedor Full Stack</h2>
        <p className="text-secondary">Desenvolvedor Full-Stack com foco em React, Java e Spring, desenvolvendo APIs REST, microsserviços e integrações entre sistemas.</p>
        <div className="d-flex gap-3">
          <button className="btn primary-button-color d-flex align-items-center gap-1">
            <DiGithubBadge size={24} />
            Ver projetos
          </button>
          <button className="btn primary-button-bordered d-flex align-items-center gap-1">
            <FaLinkedin size={24} />
            Linkedin
          </button>
        </div>
      </section>
      <hr className="my-5 border-color" />
      <section >
        <div>
          <h3 className="h5 text-white d-flex align-items-center gap-3">
            <FaRegUser size={24} className="primary-text-color" />
            Sobre mim</h3>
          <p className="text-secondary">Base em Engenharia de Dados, utilizando Python, SQL e serviços em nuvem para construção de pipelines de dados.</p>
        </div>
      </section>
    </>
  );
}