import styles from './HeroSection.module.css';

export default function HeroSection({ title, TitleIcon, children, cssClass, ...props }) {
  const classProp = cssClass ?? "";
  
  return (
    <section {...props} className={`${styles.heroSection} ${classProp}`}>
      <div className={styles.heroSectionTitle}>
        {<TitleIcon></TitleIcon>}
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}