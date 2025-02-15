import { Divider } from '@mantine/core';
import { NavLink } from 'react-router';

import styles from './main-menu.module.css';

import type { MenuItem } from '@/types/menu-item';

interface MainMenuProps {
  items: MenuItem[];
  open?: boolean;
}

export function MainMenu({ items, open }: MainMenuProps) {
  return (
    <nav className={`${styles.mainmenu} ${open === true ? 'showvis' : ''}`}>
      {items.map(item => {
        const IconComponent = item.icon;

        return item.type === 'divider' ? (
          <Divider key={`d-${item.id}`} mx="md" my="md" color="var(--app-border-color)" />
        ) : (
          <NavLink
            key={`mi-${item.id}`}
            to={item.url ?? ''}
            end
            viewTransition
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            {IconComponent ? (
              <span className={styles.itemicon}>
                <IconComponent size={18} />
              </span>
            ) : null}
            <span className={styles.itemlabel}>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
