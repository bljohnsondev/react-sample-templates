import styles from './spinner.module.css';

interface SpinnerProps {
  open?: boolean;
}

export function Spinner({ open = false }: SpinnerProps) {
  if (!open) return null;

  return (
    <div className={styles.spinner}>
      <div className={styles.inner} />
    </div>
  );
}
