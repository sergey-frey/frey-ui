import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./ui/accordion";

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultProps: Story["args"] = {
  label: "Accordion",
  size: "m",
  isOpen: false,
  children: "Accordion content",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
