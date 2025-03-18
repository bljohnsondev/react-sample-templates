import { NavLink } from 'react-router';

import styles from './main-menu.module.css';

import type { MenuItem } from '@/types/menu-item';

interface MainMenuProps {
  items: MenuItem[];
  open?: boolean;
}

export function MainMenu({ items, open }: MainMenuProps) {
  return (
    <nav className={`${styles.mainmenu} ${open === true ? styles.showvis : ''}`}>
      {items.map(item => {
        return item.type === 'divider' ? (
          <hr key={`d-${item.id}`} />
        ) : (
          <NavLink
            key={`mi-${item.id}`}
            to={item.url ?? ''}
            end
            viewTransition
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            {item.icon ? <span className={styles.itemicon}>{item.icon}</span> : null}
            <span className={styles.itemlabel}>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
