import styles from './Nav.module.css';

export default function VerticalNavBar({ items = [], direction = "column", ulProps, ...props }) {
  const ulClass = direction === "column" ? styles.verticalNav : styles.horizontalNav;

  return (
    <>
      <nav {...props}>
        <ul className={ulClass}>
          {
            items.map((item) => (
              <li>
                <a className={styles.link} href={item.href}>{item.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
}