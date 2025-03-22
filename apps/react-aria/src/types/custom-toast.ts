export type CustomToastLevel = 'success' | 'warning' | 'danger';

export interface CustomToast {
  id: string;
  message: string;
  level?: CustomToastLevel;
}
