import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import styles from './SocialMedias.module.css'

export default function SocialMedias({ id, ...props }) {
  return (
    <div id={id} {...props}>
      <a href="#" title="Github" aria-label="Github" className={styles.socialMediaLink}>
        <DiGithubBadge size={20} />
      </a>
      <a href="#" title="Linkedin" aria-label="Linkedin" className={styles.socialMediaLink}>
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}