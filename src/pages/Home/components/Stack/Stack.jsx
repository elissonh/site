import StackIcon from "tech-stack-icons"

import { TbStack2, TbServer2 } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";


import HeroSection from "../HeroSection/HeroSection";

import styles from './Stack.module.css';

const frontEndStacks = [
  { "stack": "HTML", "stackIconName": "html5" },
  { "stack": "CSS", "stackIconName": "css3" },
  { "stack": "JavaScript", "stackIconName": "js" },
  { "stack": "React", "stackIconName": "react" },
  { "stack": "BootStrap", "stackIconName": "bootstrap5" },
];

const backEndStacks = [
  { "stack": "Java", "stackIconName": "java" },
  { "stack": "Python", "stackIconName": "python" },
];

const databases = [
  { "stack": "PostgreSQL", "stackIconName": "postgresql" },
  { "stack": "MySQL", "stackIconName": "mysql" },
  { "stack": "MongoDB", "stackIconName": "mongodb" },
];

const tools = [
  { "stack": "Git", "stackIconName": "git" },
  { "stack": "GitHub", "stackIconName": "github" },
  { "stack": "Docker", "stackIconName": "docker" },
  { "stack": "Linux", "stackIconName": "linux" },
];

function InnerCard({ label, children }) {
  return (
    <div className={styles.stackCard}>
      {children}
      <span className="lh-1 small text-white position-absolute bottom-0">{label}</span>
    </div>
  );
}

function InnerSection({ title, PrefixIcon, stackItems }) {
  return (
    <section>
      <div className={styles.title}>
        <PrefixIcon></PrefixIcon>
        <h4>{title}</h4>
      </div>
      <div className={styles.stackContainer}>
        {
          stackItems.map((stackItem) => (
            <InnerCard label={stackItem.stack} key={stackItem.stack}>
              <StackIcon name={stackItem.stackIconName} />
            </InnerCard>
          ))
        }
      </div>
    </section>
  );
}

export default function StackSection({ ...props }) {
  return (
    <HeroSection title="Tecnologias Principais" TitleIcon={TbStack2} {...props}>
      <div className={styles.stack}>
        <InnerSection title="Front-end" stackItems={frontEndStacks} PrefixIcon={RiComputerLine}/>
        <InnerSection title="Back-end" stackItems={backEndStacks} PrefixIcon={TbServer2}/>
        <InnerSection title="Banco de Dados" stackItems={databases} PrefixIcon={FiDatabase}/>
        <InnerSection title="Ferramentas/DevOps" stackItems={tools} PrefixIcon={MdOutlineSettings}/>
      </div>
    </HeroSection>
  );
}