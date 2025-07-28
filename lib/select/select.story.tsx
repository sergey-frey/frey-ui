import { Meta, StoryObj } from "@storybook/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "./ui/select";

const meta = {
  component: () => {
    return (
      <SelectRoot>
        <SelectTrigger>Select</SelectTrigger>
        <SelectContent>
          <SelectItem>Item 1</SelectItem>
          <SelectItem>Item 2</SelectItem>
          <SelectItem>Item 3</SelectItem>
        </SelectContent>
      </SelectRoot>
    );
  },
} satisfies Meta<typeof SelectRoot>;

export default meta;

type Story = StoryObj<typeof SelectRoot>;

const defaultProps: Story["args"] = {};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
