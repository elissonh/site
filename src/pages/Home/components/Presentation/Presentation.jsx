import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import Button from "../../../../components/Buttons/Button";

import styles from './Presentation.module.css';

export default function PresentationSection() {
  return (
    <>
      <section className={styles.presentation}>
        <div>
          <h1 className="text-white">Elisson Rocha</h1>
          <h2 className="text-main">Desenvolvedor Front-End</h2>
        </div>
        <p className="text-secondary">Desenvolvedor Front-End com foco em React desenvolvendo interfaces modernas, intuitivas e performáticas.</p>
        <div className={styles.socialMedia}>
          <Button label="Ver projetos" PrefixIcon={DiGithubBadge} iconSize={26}></Button>
          <Button label="Linkedin" PrefixIcon={FaLinkedin} iconSize={24} variant="outline"></Button>
        </div>
      </section>
    </>
  );
}