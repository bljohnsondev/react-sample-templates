import clsx from 'clsx';

import styles from './overlay.module.css';

import { Spinner } from './spinner';

interface OverlayProps {
  open?: boolean;
  loading?: boolean;
}

export function Overlay({ open = false, loading = false }: OverlayProps) {
  return (
    <div className={clsx({ [styles.overlay]: open })}>
      <Spinner open={loading} />
    </div>
  );
}
