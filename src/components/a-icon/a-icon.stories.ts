import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./a-icon";

const meta: Meta = {
  title: "Components/AIcon",
  component: "a-icon",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <a-icon name="${args.name}" size="${args.size}"></a-icon>
  `,
  args: {
    name: "star",
    size: 24,
  },
};

export const SecondaryColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "secondary",
  },
};

export const TertiaryColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "tertiary",
  },
};

export const SuccessColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "success",
  },
};

export const WarningColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "warning",
  },
};

export const ErrorColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "error",
  },
};

export const DarkColor: Story = {
  render: (args) => html`
    <a-icon
      name="${args.name}"
      color="${args.color}"
      size="${args.size}"
    ></a-icon>
  `,
  args: {
    ...Default.args,
    color: "dark",
  },
};

export const Heart: Story = {
  render: (args) => html`
    <a-icon name="${args.name}" size="${args.size}"></a-icon>
  `,
  args: {
    ...Default.args,
    name: "heart",
  },
};

export const Search: Story = {
  render: (args) => html`
    <a-icon name="${args.name}" size="${args.size}"></a-icon>
  `,
  args: {
    ...Default.args,
    name: "search",
  },
};
