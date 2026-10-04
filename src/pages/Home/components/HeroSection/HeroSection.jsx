import styles from './HeroSection.module.css';

export default function HeroSection({ title, TitleIcon, children, ...props }) {
  return (
    <section {...props} className={styles.heroSection}>
      <div className={styles.heroSectionTitle}>
        {<TitleIcon></TitleIcon>}
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}