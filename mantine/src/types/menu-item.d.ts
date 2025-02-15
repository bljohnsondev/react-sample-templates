import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: number;
  type: 'link' | 'divider';
  name?: string;
  icon?: LucideIcon;
  url?: string;
}
