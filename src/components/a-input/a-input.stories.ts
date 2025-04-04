import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./a-input";
import "../a-icon/a-icon";

const meta: Meta = {
  title: "Components/AInput",
  component: "a-input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}></a-input>
  `,
  args: {
    placeholder: "",
    value: "",
  },
};

export const PrefixIcon: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon name=${args.iconName} size=${args.iconSize} aPrefix></a-icon>
    </a-input>
  `,
  args: {
    ...Default.args,
    placeholder: "Type something...",
    iconSize: 24,
    iconName: "search",
  },
};

export const SuffixIcon: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon name=${args.iconName} size=${args.iconSize} aSuffix></a-icon>
    </a-input>
  `,
  args: {
    ...PrefixIcon.args,
  },
};

export const BothIcons: Story = {
  render: (args) => html`
    <a-input placeholder=${args.placeholder} value=${args.value}>
      <a-icon name=${args.iconName} size=${args.iconSize} aPrefix></a-icon>
      <a-icon name=${args.iconName} size=${args.iconSize} aSuffix></a-icon>
    </a-input>
  `,
  args: {
    ...PrefixIcon.args,
  },
};
