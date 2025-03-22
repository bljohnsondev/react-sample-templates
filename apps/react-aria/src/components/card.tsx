import clsx from 'clsx';

import styles from './card.module.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
