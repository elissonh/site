import styles from './Button.module.css'

export default function Button({ label, PrefixIcon, iconSize=26, variant="solid", equalPadding=false, ...props }) {
  const equalPaddingClass = equalPadding ? styles.equalPadding : '';  
  const classesName = `${styles.button} ${styles[variant]} ${equalPaddingClass}`;

  return (
    <button className={classesName} {...props}>
      {PrefixIcon && <PrefixIcon size={iconSize}></PrefixIcon>}
      {label && label}
    </button>
  );
}