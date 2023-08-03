import { StyleOptions } from "./colors";

const styles = {
  global: ({ colorMode }: StyleOptions) => ({
    body: {
      height: "100vh",
      overflowX: "hidden",
    },
  }),
};

export default styles;
