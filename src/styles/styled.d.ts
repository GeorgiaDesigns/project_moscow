import "styled-components";
import theme from "./theme";

type AppTheme = typeof theme;

declare module "styled-components" {
  // Make `props.theme` resolve to the shape of our theme object.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
