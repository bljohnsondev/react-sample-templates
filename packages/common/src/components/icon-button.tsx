import styles from './icon-button.module.css';

interface IconButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
}

export function IconButton({ icon, ariaLabel, onClick }: IconButtonProps) {
  return (
    <button type="button" className={styles.iconButton} aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </button>
  );
}
