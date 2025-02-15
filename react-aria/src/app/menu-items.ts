import { Calculator, Cloud, MessageSquareText } from 'lucide-react';

import type { MenuItem } from '@/types/menu-item';

export const menuItems: MenuItem[] = [
  { id: 1, type: 'link', name: 'Counter', icon: Calculator, url: '/' },
  { id: 2, type: 'link', name: 'Messages', icon: MessageSquareText, url: '/messages' },
  { id: 3, type: 'link', name: 'Weather', icon: Cloud, url: '/weather' },
];
