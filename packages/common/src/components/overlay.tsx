import styles from './overlay.module.css';

import { Spinner } from './spinner';

interface OverlayProps {
  open?: boolean;
  loading?: boolean;
}

export function Overlay({ open = false, loading = false }: OverlayProps) {
  return (
    <div className={open ? styles.overlay : undefined}>
      <Spinner open={loading} />
    </div>
  );
}
