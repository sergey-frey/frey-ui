import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./ui/input";

const meta = {
  component: Input,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["m", "s"] satisfies InputProps["size"][],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story["args"] = {
  size: "m",
  isInvalid: false,
  errors: null,
  placeholder: "Type something",
  label: "",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Label",
  },
};

export const Invalid: Story = {
  args: {
    ...defaultProps,
    isInvalid: true,
    errors: "Invalid input",
    label: "Label",
  },
};
