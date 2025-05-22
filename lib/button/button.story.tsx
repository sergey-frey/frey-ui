import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./ui/button";

import { ArrowRightIcon } from "../../assets/arrow-right-icon";
import { BellIcon } from "../../assets/bell-icon";
import { Loader } from "../loader";

const meta = {
  component: Button,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["m", "s"] satisfies ButtonProps["size"][],
    },
    variant: {
      control: "select",
      options: ["empty", "fill"] satisfies ButtonProps["variant"][],
    },
    isIconOnly: {
      control: "boolean",
    },
    isInvertedBehavior: {
      control: "boolean",
      description: "Shadow 'opened' without interaction",
    },
    disabled: {
      control: "boolean",
    },
    startContent: {
      control: "select",
      options: ["bell", "arrow_right", "loader", "none"],
      mapping: {
        none: undefined,
        bell: <BellIcon width={20} height={20} />,
        arrow_right: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size={"s"} variant={"fill"} />,
      },
    },
    endContent: {
      control: "select",
      options: ["bell", "arrow_right", "loader", "none"],
      mapping: {
        none: undefined,
        bell: <BellIcon width={20} height={20} />,
        arrow_right: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size={"s"} variant={"fill"} />,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story["args"] = {
  variant: "empty",
  size: "m",
  isIconOnly: false,
  disabled: false,
  isInvertedBehavior: false,
  startContent: "none",
  endContent: "none",
};

export const Default: Story = {
  args: {
    ...defaultProps,
    children: "Empty Button",
  },
};

export const Fill: Story = {
  args: {
    ...defaultProps,
    variant: "fill",
    children: "Fill Button",
  },
};

export const Icon: Story = {
  args: {
    ...defaultProps,
    children: "bell",
    isIconOnly: true,
  },

  argTypes: {
    children: {
      control: "select",
      options: ["bell", "arrow_right", "loader", "none"],
      mapping: {
        none: undefined,
        bell: <BellIcon width={20} height={20} />,
        arrow_right: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size={"s"} variant={"fill"} />,
      },
    },
  },
};

export const WithStartAndEndContent: Story = {
  args: {
    ...defaultProps,
    children: "Button",
    startContent: "bell",
  },
};

export const InvertedBehavior: Story = {
  args: {
    ...defaultProps,
    children: "Button",
    isInvertedBehavior: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    children: "Button",
    disabled: true,
  },
};
