import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./ui/input";

const meta = {
	component: Input,
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story["args"] = {
	isInvalid: false,
	errors: null,
};

export const Default: Story = {
	args: {
		...defaultProps,
	},
};
