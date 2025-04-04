import type { Preview } from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "White", value: "#fff" },
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#f6f8fc" },
        { name: "Maroon", value: "#400" },
        { name: "Red", value: "#ff0000" },
      ],
      default: "Light",
    },
  },
};

export default preview;
