export interface ThemeOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: ThemeName;
}

export enum ThemeName {
  'deep_purple_amber'= 'deeppurple-amber',
  'indigo_pink' = 'indigo-pink',
  'pink_bluegrey' = 'pink-bluegrey',
  'purple_green' = 'purple-green'
}
