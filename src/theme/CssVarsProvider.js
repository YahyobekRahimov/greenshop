import { unstable_createCssVarsProvider as createCssVarsProvider } from "@mui/system";

const { CssVarsProvider, useColorScheme } = createCssVarsProvider({
   defaultColorScheme: {
      light: "light",
   },
   theme: myCustomDefaultTheme,
});

export { CssVarsProvider, useColorScheme };
