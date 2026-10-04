import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import StackIcon from "tech-stack-icons"

import HeroSection from "../HeroSection/HeroSection";


function InnerCard({ label, children }) {
  return (
    <div >
      {children}
      <span className="lh-1 small text-white position-absolute bottom-0">{label}</span>
    </div>
  );
}

export default function StackSection({ ...props }) {
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

  return (
    <HeroSection title="Tecnologias principais" TitleIcon={HiOutlineSquare3Stack3D} { ...props }>
      <div className="d-flex flex-column gap-3">
        {/* <div id="frontend-stack" className="d-flex gap-2">
          {
            frontEndStacks.map((stackItem) => (
              <InnerCard label={stackItem.stack}>
                <StackIcon name={stackItem.stackIconName} className="icon-size d-inline" />
              </InnerCard>
            ))
          }
        </div>
        <div id="backend-stack" className="d-flex gap-2">
          {
            backEndStacks.map((stackItem) => (
              <InnerCard label={stackItem.stack}>
                <StackIcon name={stackItem.stackIconName} className="icon-size d-inline" />
              </InnerCard>
            ))
          }
        </div>
        <div id="databases-stack" className="d-flex gap-2">
          {
            databases.map((stackItem) => (
              <InnerCard label={stackItem.stack}>
                <StackIcon name={stackItem.stackIconName} className="icon-size d-inline" />
              </InnerCard>
            ))
          }
        </div>
        <div id="tools-stack" className="d-flex gap-2">
          {
            tools.map((stackItem) => (
              <InnerCard label={stackItem.stack}>
                <StackIcon name={stackItem.stackIconName} className="icon-size d-inline" />
              </InnerCard>
            ))
          }
        </div> */}
      </div>
    </HeroSection>
  );
}