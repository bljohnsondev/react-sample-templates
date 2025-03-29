import clsx from 'clsx';
import type { MenuItem } from 'react-common-template';
import { NavLink } from 'react-router';

interface MainMenuProps {
  items: MenuItem[];
  open?: boolean;
}

export function MainMenu({ items, open }: MainMenuProps) {
  return (
    <nav
      className={clsx(
        'fixed top-16 left-0 right-0 flex flex-col gap-2 bg-background dark:bg-dark-background pt-4 z-10 min-h-full overflow-y-auto md:(static h-auto opacity-100 visible)',
        'transition-opacity duration-300 ease-in-out',
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
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
                'flex items-center gap-3 mx-4 p-4 no-underline rounded-md text-sm border border-solid border-menu-border dark:border-dark-menu-border': true,
                'text-menu-selected-text bg-menu-selected-bg border border-menu-selected-border dark:(text-dark-menu-selected-text bg-dark-menu-selected-bg border-dark-menu-selected-border)':
                  isActive,
                'dark:text-dark-menu-text hover:(bg-menu-hover-bg dark:bg-dark-menu-hover-bg)': !isActive,
              })
            }
          >
            {item.icon ? item.icon : null}
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
