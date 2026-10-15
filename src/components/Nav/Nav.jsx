import styles from './Nav.module.css';

export default function VerticalNavBar({ items = [], ulProps, ...props }) {
  return (
    <>
      <nav {...props}>
        <ul className={ulProps}>
          {
            items.map((item) => (
              <li key={item.name}>
                <a className={styles.link} href={item.href}>{item.name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
}