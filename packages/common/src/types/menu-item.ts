export interface MenuItem {
  id: number;
  type: 'link' | 'divider';
  name?: string;
  icon?: React.ReactNode;
  url?: string;
}
