import '@emotion/react';
import { Theme as DefaultTheme } from './assets/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
