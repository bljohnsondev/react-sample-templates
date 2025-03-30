import clsx from 'clsx';
import type { MenuItem } from 'common-template';
import { NavLink } from 'react-router';

import { menu, menuItemVariant, openMenu } from './main-menu.css';

interface MainMenuProps {
  items: MenuItem[];
  open?: boolean;
}

export function MainMenu({ items, open = false }: MainMenuProps) {
  return (
    <nav className={clsx(menu, open && openMenu)}>
      {items.map(item => {
        return item.type === 'divider' ? (
          <hr key={`d-${item.id}`} />
        ) : (
          <NavLink
            key={`mi-${item.id}`}
            to={item.url ?? ''}
            end
            viewTransition
            className={({ isActive }) => (isActive ? menuItemVariant.active : menuItemVariant.inactive)}
          >
            {item.icon ? item.icon : null}
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
