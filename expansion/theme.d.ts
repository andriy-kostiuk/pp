import 'styled-components';
import { ITheme, ThemeEnum } from '../interfaces/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
