export interface ComponentColors {
  text?: string;
  bg?: string;
  border?: string;
  hover?: Omit<ComponentColors, 'hover'>;
}

export interface HeaderColors extends ComponentColors {
  icon?: string;
  button?: string;
}

export interface MenuColors extends ComponentColors {
  hover: ComponentColors;
  selected: ComponentColors;
}

export interface PageColors {
  title: string;
}

export interface TabColors extends ComponentColors {
  selected: ComponentColors;
  hover: ComponentColors;
}

export interface ButtonColors {
  base: ComponentColors;
  default: ComponentColors;
  filled: ComponentColors;
  disabled: ComponentColors;
}

export interface ToastColors extends ComponentColors {
  success: string;
  warning: string;
  danger: string;
  close: ComponentColors;
}

export interface InputColors extends ComponentColors {
  placeholder: string;
}

export interface TextFieldColors {
  label: string;
  input: InputColors;
}

export interface ThemeColors {
  background: string;
  foreground: string;
  errorMessage: string;
  border: string;
  header: HeaderColors;
  menu: MenuColors;
  page: PageColors;
  button: ButtonColors;
  tab: TabColors;
  toast: ToastColors;
  card: ComponentColors;
  textfield: TextFieldColors;
}
