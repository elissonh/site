import { DiGithubBadge } from "react-icons/di";
import { GitHubCalendar } from 'react-github-calendar';
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";


import HeroSection from "../HeroSection/HeroSection";

import styles from './Github.module.css';

function InfoCard({ label, value, Icon }) {
  return (
    <div className={styles.infoCard}>
      <Icon className={styles.infoCardIcon} />
      <div className={styles.infoCardContent}>
        <span className={styles.infoCardValue}>{value}</span>
        <span className={styles.infoCardLabel}>{label}</span>
      </div>
    </div>
  );
}

export default function GithubSection({ ...props }) {
  return (
    <HeroSection title="Atividade no GitHub" TitleIcon={DiGithubBadge} {...props}>
      <div className={styles.activity}>
        <InfoCard label="Contribuições" value={247} Icon={BsPersonWorkspace} />
        <InfoCard label="Repositórios" value={99} Icon={FaLaptopCode} />
        <InfoCard label="Commits" value={99} Icon={FaCodeBranch} />
        <InfoCard label="Projetos públicos" value={999} Icon={RiGitRepositoryCommitsLine} />

      </div>
      <GitHubCalendar
        username="elissonh"
        blockSize={10}
        blockMargin={4}
        fontSize={12}
        colorScheme="dark" // or "dark"
        className={styles.graph}
      />
    </HeroSection>
  );
}