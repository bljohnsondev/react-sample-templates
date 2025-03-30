import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-card-bg border border-card-border dark:(bg-dark-card-bg border-dark-card-border) rounded p-3',
        className
      )}
    >
      {children}
    </div>
  );
}
