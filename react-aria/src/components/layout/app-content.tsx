import styles from './app-content.module.css';

interface AppContentProps {
  children: React.ReactNode;
}
export function AppContent({ children }: AppContentProps) {
  return (
    <div className={styles.appcontent}>
      <div className={styles.appchildren}>{children}</div>
    </div>
  );
}
