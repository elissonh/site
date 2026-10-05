import { LuUser } from "react-icons/lu";
import HeroSection from "../HeroSection/HeroSection";

export default function AboutSection({ ...props }) {
  return (
    <HeroSection title="Sobre mim" TitleIcon={LuUser} {...props}>
      <p className="text-secondary">Base em Engenharia de Dados, utilizando Python, SQL e serviços em nuvem para construção de pipelines de dados.</p>
      <p className="text-secondary">Graduando em Análise e Desenvolvimento de Sistemas pelo IFPR.</p>
    </HeroSection>
  );
}