import {
   unstable_createGetCssVar as systemCreateGetCssVar,
   unstable_prepareCssVars as prepareCssVars,
} from "@mui/system";

const lightColorScheme = {
   palette: {
      mode: "light",
      primary: {
         default: "#46a358",
         dark: "#3a8549",
      },
      text: {
         default: "#3D3D3D",
      },
   },
};

const createGetCssVar = (cssVarPrefix = "my-app") =>
   systemCreateGetCssVar(cssVarPrefix);

function extendTheme({ cssVarPrefix = "my-app" } = {}) {
   const getCssVar = createGetCssVar(cssVarPrefix);
   const theme = {
      colorSchemes: {
         light: lightColorScheme,
      },
   };

   const { vars: themeVars, generateCssVars } = prepareCssVars(
      {
         colorsSchemes: theme.colorSchemes,
      },
      {
         prefix: cssVarPrefix,
      }
   );
   theme.vars = themeVars;
   theme.generateCssVars = generateCssVars;
   theme.palette = {
      ...theme.colorSchemes.light.palette,
      colorScheme: "light",
   };
   return theme;
}

const myCustomDefaultTheme = extendTheme();

export default myCustomDefaultTheme;
