import { DiCode, DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

import DefaultProjectImage from '../../assets/project-default.jpg';


function ProjectCard({ pathToImage, title, desc, tags = [], sourceLink, demoLink }) {
  return (
    <div className="d-flex flex-column border rounded border-color overflow-hidden p-3 gap-2" style={{ width: "400px" }}>
      <img src={pathToImage} alt="Preview do projeto" className="project-imagem-size" />
      <span className="text-white fw-semibold">{title}</span>
      <p className="text-secondary m-0">{desc}</p>
      <div className="d-flex gap-2">
        {tags.map((tag) => (
          <span className="badge rounded-pill bg-card text-secondary p-2">{tag}</span>
        ))}
      </div>
      <div className="d-flex gap-3">
        <div>
          <DiGithubBadge size={24} className="me-2 text-white" />
          <a className="small align-middle link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0" href="#">Ver no GitHub</a>
        </div>
        <div className="vr border-color"></div>
        <div>
          <FiExternalLink size={18} className="me-2 text-white" />
          <a className="small align-middle link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0" href="#">Ver demo</a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      pathToImage: DefaultProjectImage,
      title: "Teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi consequuntur minus ea recusandae, dolor, facilis maiores harum doloribus reprehenderit suscipit similique tempora, dicta mollitia veniam odio consectetur repellat unde.",
      tags: ["React", "JavaScript", "BootStrap"]
    },
    {
      pathToImage: DefaultProjectImage,
      title: "Teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi consequuntur minus ea recusandae, dolor, facilis maiores harum doloribus reprehenderit suscipit similique tempora, dicta mollitia veniam odio consectetur repellat unde.",
      tags: ["React", "JavaScript", "BootStrap"]
    }
  ]

  return (
    <section >
      <div>
        <h3 className="h5 text-white d-flex align-items-center gap-3">
          <DiCode size={32} />
          Projetos
        </h3>
      </div>
      <div className="d-flex gap-4">
        {projects.map((project) => (
          <ProjectCard
            pathToImage={project.pathToImage}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
