import { DiCode, DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

import DefaultProjectImage from '../../../../assets/project-default.jpg';
import HeroSection from "../HeroSection/HeroSection";

import styles from './Projects.module.css'

function ProjectCard({ pathToImage, title, desc, tags = [], sourceLink, demoLink, ...props }) {
  return (
    <div className={styles.card} {...props}>
      <img src={pathToImage} alt="Preview do projeto" className="project-imagem-size" />
      <div className={styles.cardContent}>
        <span className={styles.title}>{title}</span>
        <p>{desc}</p>
        <div className={styles.badges}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href="#">
            <DiGithubBadge />
            Ver no GitHub</a>

          <a href="#">
            <FiExternalLink />Ver demo</a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ ...props }) {
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
      tags: ["React", "JavaScript", "XYZ"]
    }
  ]

  return (
    <HeroSection title="Projetos" TitleIcon={DiCode} {...props}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            pathToImage={project.pathToImage}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </div>
    </HeroSection>
  );
}
