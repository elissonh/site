import { DiGithubBadge } from "react-icons/di";

import HeroSection from "../HeroSection/HeroSection";

export default function GithubSection({ ...props }) {
  return (
    <HeroSection title="Atividade no GitHub" TitleIcon={DiGithubBadge} { ...props }>
    </HeroSection>
  );
}