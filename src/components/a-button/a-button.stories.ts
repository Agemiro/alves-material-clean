import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./a-button";
import "../a-icon/a-icon";

const meta: Meta = {
  title: "Components/AButton",
  component: "a-button",
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick}> ${args.label} </a-button>
  `,
  args: {
    label: "Click here",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ZpjiNEcE8QasYgBUFsch4h/Untitled?node-id=0-1&p=f&t=SiWz0DFQeivyrNV9-0",
    },
  },
};

export const SecondaryBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "secondary",
  },
};

export const TertiaryBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "tertiary",
  },
};

export const SuccessBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "success",
  },
};

export const WarningBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "warning",
  },
};

export const ErrorBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "error",
  },
};

export const DarkBackgroundColor: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick} background=${args.background}>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "dark",
  },
};

export const LightBackgroundColor: Story = {
  render: (args) => html`
    <a-button
      @click=${args.onClick}
      background=${args.background}
      color=${args.color}
    >
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    background: "light",
    color: "dark",
  },
};

export const PrefixIcon: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick}>
      <a-icon name=${args.iconName} color="${args.iconColor}" aPrefix></a-icon>
      ${args.label}
    </a-button>
  `,
  args: {
    ...Default.args,
    iconName: "star",
    iconColor: "light",
  },
};

export const SuffixIcon: Story = {
  render: (args) => html`
    <a-button @click=${args.onClick}>
      <a-icon name=${args.iconName} color="${args.iconColor}" aSuffix></a-icon>
      ${args.label}
    </a-button>
  `,
  args: {
    ...PrefixIcon.args,
  },
};
