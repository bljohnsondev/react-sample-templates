import clsx from 'clsx';
import { NavLink } from 'react-router';

import type { MenuItem } from '@/types/menu-item';

interface MainMenuProps {
  items: MenuItem[];
  open?: boolean;
}

export function MainMenu({ items, open }: MainMenuProps) {
  return (
    <nav
      className={clsx({
        'bg-background fixed top-16 left-0 right-0 flex flex-col gap-2 pt-4 z-10 min-h-full overflow-y-auto opacity-0 invisible md:static md:h-auto md:opacity-100 md:visible': true,
        'transition-opacity duration-300 ease-in-out': true,
        'opacity-100 visible': open,
      })}
    >
      {items.map(item => {
        return item.type === 'divider' ? (
          <hr key={`d-${item.id}`} />
        ) : (
          <NavLink
            key={`mi-${item.id}`}
            to={item.url ?? ''}
            end
            viewTransition
            className={({ isActive }) =>
              clsx({
                'flex items-center gap-3 mx-4 p-4 no-underline rounded-md text-sm border border-menu-border': true,
                'text-menu-selected-text bg-menu-selected-bg border border-menu-selected-border': isActive,
                'hover:bg-menu-hover-bg': !isActive,
              })
            }
          >
            {item.icon ? <span>{item.icon}</span> : null}
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
