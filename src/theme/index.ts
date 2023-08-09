import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts";
import styles from "./styles";
import Button from "./components/button";
import Input from "./components/input";
import FormLabel from "./components/form-label";
import radii from "./radius";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const overrides = {
  colors,
  fonts,
  styles,
  components: {
    Button,
    Input,
    FormLabel,
  },
  radii,
};
const theme = extendTheme({ config, ...overrides });

export default theme;
