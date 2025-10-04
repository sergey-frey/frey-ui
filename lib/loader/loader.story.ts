import type { Meta, StoryObj } from "@storybook/react";

import { Loader, type LoaderProps } from "./ui/loader";

const meta = {
  component: Loader,
  argTypes: {
    variant: {
      control: "select",
      options: ["empty", "fill"] satisfies LoaderProps["variant"][],
    },
    size: {
      control: "inline-radio",
      options: ["m", "s", "l"] satisfies LoaderProps["size"][],
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story["args"] = {
  variant: "fill",
  size: "m",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const Empty: Story = {
  args: {
    ...defaultProps,
    variant: "empty",
  },
};
