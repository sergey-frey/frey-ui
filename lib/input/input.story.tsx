import type { Meta, StoryObj } from "@storybook/react";

import { ArrowRightIcon } from "../../assets/arrow-right-icon";
import { BellIcon } from "../../assets/bell-icon";
import { SearchIcon } from "../../assets/search-icon";
import { Loader } from "../loader";
import { Input, type InputProps } from "./ui/input";

const meta = {
  component: Input,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["m", "s"] satisfies InputProps["size"][],
    },
    startContent: {
      control: "select",
      options: ["search", "arrowRight", "loader", "none"],
      mapping: {
        none: undefined,
        search: <SearchIcon width={20} height={20} />,
        arrowRight: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size="s" />,
      },
    },
    endContent: {
      control: "select",
      options: ["bell", "arrowRight", "loader", "none"],
      mapping: {
        none: undefined,
        bell: <BellIcon width={20} height={20} />,
        arrowRight: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size="m" />,
      },
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

export const WithStartAndEndContent: Story = {
  args: {
    ...defaultProps,
    label: "Label",
    startContent: "search",
    endContent: "loader",
  },
};

export const WithCSSVariables: Story = {
  args: {
    ...defaultProps,
    label: "Custom Input",
    placeholder: "Type something",
    style: {
      "--input-px": "1.5rem",
      "--input-py": "0.75rem",
      "--input-font-size": "1.2rem",
      "--input-letter-spacing": "2px",
      "--frey-foreground": "#0066cc",
    },
  },
};
