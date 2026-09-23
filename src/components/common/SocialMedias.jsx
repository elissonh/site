import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMedias({ id }) {
  return (
    <div id={id} className="d-flex">
      <a href="#" className="icon-color" title="Github" aria-label="Github">
        <DiGithubBadge size={24} />
      </a>
      <a href="#" className="icon-color" title="Linkedin" aria-label="Linkedin">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}