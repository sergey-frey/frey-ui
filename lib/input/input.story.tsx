import { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "../../assets/arrow-right-icon";
import { BellIcon } from "../../assets/bell-icon";
import { SearchIcon } from "../../assets/search-icon";
import { Loader } from "../loader";
import { Input, InputProps } from "./ui/input";

const meta = {
  component: Input,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["m", "s"] satisfies InputProps["size"][],
    },
    startContent: {
      control: "select",
      options: ["search", "arrow_right", "loader", "none"],
      mapping: {
        none: undefined,
        search: <SearchIcon width={20} height={20} />,
        arrow_right: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size={"s"} />,
      },
    },
    endContent: {
      control: "select",
      options: ["bell", "arrow_right", "loader", "none"],
      mapping: {
        none: undefined,
        bell: <BellIcon width={20} height={20} />,
        arrow_right: <ArrowRightIcon width={20} height={20} />,
        loader: <Loader size={"m"} />,
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
