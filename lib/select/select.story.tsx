import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectContent } from "./ui/select-content";
import { SelectItem } from "./ui/select-item";
import { SelectRoot } from "./ui/select-root";
import { SelectTrigger } from "./ui/select-trigger";

type Story = StoryObj<typeof SelectRoot>;

const defaultProps: Story["args"] = {
  isInvertedBehavior: false,
  contentScrollShadowHeight: "1rem",
  topScrollShadowThreshold: 10,
  bottomScrollShadowThreshold: 10,
};

export const Default: Story = {
  args: {
    ...defaultProps,
    topScrollShadowThreshold: 10,
  },
};

export const Inverted: Story = {
  args: {
    ...defaultProps,
    isInvertedBehavior: true,
  },
};

const meta = {
  component: ({
    isInvertedBehavior,
    contentScrollShadowHeight,
    topScrollShadowThreshold,
    bottomScrollShadowThreshold,
  }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
      <div style={{ width: "200px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={value}
          onOpenChange={setIsOpen}
          onValueChange={setValue}
          isInvertedBehavior={isInvertedBehavior}
          contentScrollShadowHeight={contentScrollShadowHeight}
          topScrollShadowThreshold={topScrollShadowThreshold}
          bottomScrollShadowThreshold={bottomScrollShadowThreshold}
        >
          <SelectTrigger>Select favorite fruit</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
            <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
            <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            <SelectItem value="Date 🍇">Date 🍇</SelectItem>
            <SelectItem value="Elderberry 🍇">Elderberry 🍇</SelectItem>
            <SelectItem value="Fig 🍇">Fig 🍇</SelectItem>
            <SelectItem value="Grape 🍇">Grape 🍇</SelectItem>
            <SelectItem value="Honeydew 🍇">Honeydew 🍇</SelectItem>
            <SelectItem value="Kiwi 🍇">Kiwi 🍇</SelectItem>
            <SelectItem value="Lemon 🍇">Lemon 🍇</SelectItem>
            <SelectItem value="Lime 🍇">Lime 🍇</SelectItem>
            <SelectItem value="Mango 🍇">Mango 🍇</SelectItem>
            <SelectItem value="Melon 🍇">Melon 🍇</SelectItem>
            <SelectItem value="Nectarine 🍇">Nectarine 🍇</SelectItem>
            <SelectItem value="Orange 🍇">Orange 🍇</SelectItem>
            <SelectItem value="Papaya 🍇">Papaya 🍇</SelectItem>
            <SelectItem value="Peach 🍇">Peach 🍇</SelectItem>
            <SelectItem value="Pear 🍇">Pear 🍇</SelectItem>
            <SelectItem value="Pineapple 🍇">Pineapple 🍇</SelectItem>
            <SelectItem value="Plum 🍇">Plum 🍇</SelectItem>
            <SelectItem value="Pomegranate 🍇">Pomegranate 🍇</SelectItem>
            <SelectItem value="Raspberry 🍇">Raspberry 🍇</SelectItem>
            <SelectItem value="Strawberry 🍇">Strawberry 🍇</SelectItem>
            <SelectItem value="Tangerine 🍇">Tangerine 🍇</SelectItem>
            <SelectItem value="Watermelon 🍇">Watermelon 🍇</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
  argTypes: {
    isInvertedBehavior: {
      control: "boolean",
      description: "Shadow 'opened' without interaction",
    },
    contentScrollShadowHeight: {
      control: "text",
      description: "Height of the content scroll shadow",
    },
    topScrollShadowThreshold: {
      control: "number",
      description: "Threshold for the top scroll shadow",
    },
    bottomScrollShadowThreshold: {
      control: "number",
      description: "Threshold for the bottom scroll shadow",
    },
  },
} satisfies Meta<typeof SelectRoot>;

export default meta;
