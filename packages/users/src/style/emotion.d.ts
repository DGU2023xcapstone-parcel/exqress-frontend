import "@emotion/react";
import { theme } from "./theme.js";

type ThemeTpye = typeof theme;

declare module "@emotion/react" {
  export type Theme = ThemeTpye;
}
