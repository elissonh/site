import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import styles from './SocialMedias.module.css'

export default function SocialMedias({ id }) {
  return (
    <div id={id}>
      <a href="#" title="Github" aria-label="Github" className={styles.socialMediaLink}>
        <DiGithubBadge size={24} />
      </a>
      <a href="#" title="Linkedin" aria-label="Linkedin" className={styles.socialMediaLink}>
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}