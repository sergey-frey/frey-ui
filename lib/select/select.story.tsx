import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { SelectContent } from "./ui/select-content";
import { SelectItem } from "./ui/select-item";
import { SelectRoot } from "./ui/select-root";
import { SelectTrigger } from "./ui/select-trigger";

/**
 * ## Select Component
 *
 * Компонент Select - это полнофункциональный выпадающий список с поддержкой:
 * - Кастомизируемых индикаторов выбора
 * - Инвертированного поведения (раскрыт по умолчанию)
 * - Теней прокрутки для длинных списков
 * - Полного контроля состояния через controlled props
 *
 * ### Структура компонента
 * Компонент состоит из композиции дочерних элементов:
 * - `SelectRoot` - корневой контейнер с провайдерами контекста
 * - `SelectTrigger` - кнопка-триггер (наследует props от Button)
 * - `SelectContent` - контейнер для списка опций
 * - `SelectItem` - отдельная опция в списке
 *
 * ### Accessibility
 * - `SelectItem` использует `role="option"` для корректной семантики
 * - Клик вне компонента закрывает выпадающий список
 * - Значение отображается в триггере после выбора
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 * const [value, setValue] = useState("");
 *
 * <SelectRoot
 *   isOpen={isOpen}
 *   value={value}
 *   onOpenChange={setIsOpen}
 *   onValueChange={setValue}
 * >
 *   <SelectTrigger>Choose option</SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="option1">Option 1</SelectItem>
 *     <SelectItem value="option2">Option 2</SelectItem>
 *   </SelectContent>
 * </SelectRoot>
 * ```
 */
const meta = {
  title: "Components/Select",
  component: SelectRoot,
  parameters: {
    docs: {
      description: {
        component: `
Полностью контролируемый Select-компонент с расширенными возможностями кастомизации.
Поддерживает различные размеры, инвертированное поведение и настраиваемые тени прокрутки.

## Использование

\`\`\`tsx
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@frey-ui/select";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <SelectRoot
      isOpen={isOpen}
      value={value}
      onOpenChange={setIsOpen}
      onValueChange={setValue}
    >
      <SelectTrigger>Select an option</SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple 🍎</SelectItem>
        <SelectItem value="banana">Banana 🍌</SelectItem>
        <SelectItem value="cherry">Cherry 🍒</SelectItem>
      </SelectContent>
    </SelectRoot>
  );
}
\`\`\`

## Особенности

- **Controlled State**: Полный контроль над состоянием через \`isOpen\` и \`value\`
- **Scroll Shadows**: Автоматические тени при прокрутке длинных списков
- **Inverted Behavior**: Режим, в котором список всегда открыт
- **Custom Indicators**: Кастомизируемые индикаторы выбранного элемента
- **Accessible**: Семантическая разметка с использованием role="option"
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
          {
            id: "button-name",
            enabled: true,
          },
        ],
      },
    },
  },
  argTypes: {
    // Core Props
    isOpen: {
      control: "boolean",
      description:
        "Контролирует состояние открытия/закрытия выпадающего списка. Используется совместно с `onOpenChange` для полного контроля состояния.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: "text",
      description:
        "Текущее выбранное значение. Отображается в триггере после выбора. Используется совместно с `onValueChange`.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Коллбэк, вызываемый при изменении состояния открытия/закрытия. Получает новое состояние boolean.",
      table: {
        type: { summary: "(isOpen: boolean) => void" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description:
        "Коллбэк, вызываемый при выборе нового значения. Получает value выбранного SelectItem.",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },

    // Variants
    size: {
      control: "select",
      options: ["m"],
      description:
        "Размер компонента. На данный момент поддерживается только размер 'm'.",
      table: {
        type: { summary: '"m"' },
        defaultValue: { summary: '"m"' },
      },
    },

    // Behavior Props
    isInvertedBehavior: {
      control: "boolean",
      description:
        "Инвертированное поведение - список остается открытым без взаимодействия. Полезно для всегда видимых меню или фильтров.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Scroll Shadow Props
    contentScrollShadowHeight: {
      control: "text",
      description:
        "Высота теней прокрутки (градиентов сверху/снизу). Принимает любое валидное CSS-значение (px, rem, em и т.д.).",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: '"1rem"' },
      },
    },
    topScrollShadowThreshold: {
      control: { type: "number", min: 0, max: 100, step: 5 },
      description:
        "Порог в пикселях для появления верхней тени прокрутки. Тень появляется, когда прокрутка превышает это значение от верха.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
    },
    bottomScrollShadowThreshold: {
      control: { type: "number", min: 0, max: 100, step: 5 },
      description:
        "Порог в пикселях для появления нижней тени прокрутки. Тень появляется, когда до конца списка остается меньше этого значения.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
    },

    // Style Props
    className: {
      control: "text",
      description:
        "Дополнительные CSS-классы для кастомизации внешнего вида компонента.",
      table: {
        type: { summary: "string" },
      },
    },
    selectedItemIndicator: {
      control: false,
      description:
        "Кастомный React-элемент для индикатора выбранного элемента. По умолчанию используется стрелка вниз.",
      table: {
        type: { summary: "ReactNode" },
      },
    },

    // Children (не отображается в controls, но нужно для документации)
    children: {
      control: false,
      description:
        "Дочерние элементы: должны включать SelectTrigger и SelectContent с SelectItem внутри.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ minHeight: "400px", padding: "2rem" }}>
        <StoryComponent />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof SelectRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 *
 * Базовый пример Select с несколькими фруктами.
 * Демонстрирует стандартное поведение компонента.
 */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select favorite fruit</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
            <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
            <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            <SelectItem value="Date 🍇">Date 🍇</SelectItem>
            <SelectItem value="Elderberry 🫐">Elderberry 🫐</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
  args: {
    isOpen: false,
    value: "",
    isInvertedBehavior: false,
    contentScrollShadowHeight: "1rem",
    topScrollShadowThreshold: 10,
    bottomScrollShadowThreshold: 10,
  },
};

/**
 *
 * Select с предустановленным значением.
 * Полезно для форм редактирования или сохраненных настроек.
 */
export const WithInitialValue: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Banana 🍌");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select favorite fruit</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
            <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
            <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            <SelectItem value="Date 🍇">Date 🍇</SelectItem>
            <SelectItem value="Elderberry 🫐">Elderberry 🫐</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Select с инвертированным поведением - список всегда открыт.
 * Подходит для постоянно видимых меню, боковых панелей или фильтров.
 */
export const Inverted: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select favorite fruit</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
            <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
            <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            <SelectItem value="Date 🍇">Date 🍇</SelectItem>
            <SelectItem value="Elderberry 🫐">Elderberry 🫐</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Select с длинным списком опций для демонстрации теней прокрутки.
 * При прокрутке появляются градиентные тени сверху и снизу.
 */
export const LongListWithScrollShadows: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select favorite fruit</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
            <SelectItem value="Apricot 🍑">Apricot 🍑</SelectItem>
            <SelectItem value="Avocado 🥑">Avocado 🥑</SelectItem>
            <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
            <SelectItem value="Blackberry 🫐">Blackberry 🫐</SelectItem>
            <SelectItem value="Blueberry 🫐">Blueberry 🫐</SelectItem>
            <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            <SelectItem value="Coconut 🥥">Coconut 🥥</SelectItem>
            <SelectItem value="Cranberry 🔴">Cranberry 🔴</SelectItem>
            <SelectItem value="Date 🍇">Date 🍇</SelectItem>
            <SelectItem value="Dragonfruit 🐉">Dragonfruit 🐉</SelectItem>
            <SelectItem value="Elderberry 🫐">Elderberry 🫐</SelectItem>
            <SelectItem value="Fig 🟣">Fig 🟣</SelectItem>
            <SelectItem value="Grape 🍇">Grape 🍇</SelectItem>
            <SelectItem value="Grapefruit 🍊">Grapefruit 🍊</SelectItem>
            <SelectItem value="Guava 🟢">Guava 🟢</SelectItem>
            <SelectItem value="Honeydew 🍈">Honeydew 🍈</SelectItem>
            <SelectItem value="Kiwi 🥝">Kiwi 🥝</SelectItem>
            <SelectItem value="Lemon 🍋">Lemon 🍋</SelectItem>
            <SelectItem value="Lime 🟢">Lime 🟢</SelectItem>
            <SelectItem value="Lychee 🔴">Lychee 🔴</SelectItem>
            <SelectItem value="Mango 🥭">Mango 🥭</SelectItem>
            <SelectItem value="Melon 🍈">Melon 🍈</SelectItem>
            <SelectItem value="Nectarine 🍑">Nectarine 🍑</SelectItem>
            <SelectItem value="Orange 🍊">Orange 🍊</SelectItem>
            <SelectItem value="Papaya 🟠">Papaya 🟠</SelectItem>
            <SelectItem value="Passionfruit 🟣">Passionfruit 🟣</SelectItem>
            <SelectItem value="Peach 🍑">Peach 🍑</SelectItem>
            <SelectItem value="Pear 🍐">Pear 🍐</SelectItem>
            <SelectItem value="Persimmon 🟠">Persimmon 🟠</SelectItem>
            <SelectItem value="Pineapple 🍍">Pineapple 🍍</SelectItem>
            <SelectItem value="Plum 🟣">Plum 🟣</SelectItem>
            <SelectItem value="Pomegranate 🔴">Pomegranate 🔴</SelectItem>
            <SelectItem value="Raspberry 🔴">Raspberry 🔴</SelectItem>
            <SelectItem value="Strawberry 🍓">Strawberry 🍓</SelectItem>
            <SelectItem value="Tangerine 🍊">Tangerine 🍊</SelectItem>
            <SelectItem value="Watermelon 🍉">Watermelon 🍉</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Демонстрация кастомных настроек теней прокрутки.
 * Увеличенная высота тени и более низкие пороги срабатывания.
 */
export const CustomScrollShadowSettings: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select a country</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="USA 🇺🇸">USA 🇺🇸</SelectItem>
            <SelectItem value="UK 🇬🇧">UK 🇬🇧</SelectItem>
            <SelectItem value="Germany 🇩🇪">Germany 🇩🇪</SelectItem>
            <SelectItem value="France 🇫🇷">France 🇫🇷</SelectItem>
            <SelectItem value="Italy 🇮🇹">Italy 🇮🇹</SelectItem>
            <SelectItem value="Spain 🇪🇸">Spain 🇪🇸</SelectItem>
            <SelectItem value="Japan 🇯🇵">Japan 🇯🇵</SelectItem>
            <SelectItem value="China 🇨🇳">China 🇨🇳</SelectItem>
            <SelectItem value="India 🇮🇳">India 🇮🇳</SelectItem>
            <SelectItem value="Brazil 🇧🇷">Brazil 🇧🇷</SelectItem>
            <SelectItem value="Canada 🇨🇦">Canada 🇨🇦</SelectItem>
            <SelectItem value="Australia 🇦🇺">Australia 🇦🇺</SelectItem>
            <SelectItem value="Mexico 🇲🇽">Mexico 🇲🇽</SelectItem>
            <SelectItem value="Russia 🇷🇺">Russia 🇷🇺</SelectItem>
            <SelectItem value="South Korea 🇰🇷">South Korea 🇰🇷</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Несколько Select-компонентов на одной странице.
 * Демонстрирует корректную изоляцию состояния между экземплярами.
 */
export const MultipleSelects: Story = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("");
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState("");

    return (
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ width: "220px" }}>
          <SelectRoot
            isOpen={isOpen1}
            value={selectedValue1}
            onOpenChange={setIsOpen1}
            onValueChange={setSelectedValue1}
          >
            <SelectTrigger>Select fruit</SelectTrigger>
            <SelectContent topOffset={7}>
              <SelectItem value="Apple 🍎">Apple 🍎</SelectItem>
              <SelectItem value="Banana 🍌">Banana 🍌</SelectItem>
              <SelectItem value="Cherry 🍒">Cherry 🍒</SelectItem>
            </SelectContent>
          </SelectRoot>
        </div>

        <div style={{ width: "220px" }}>
          <SelectRoot
            isOpen={isOpen2}
            value={selectedValue2}
            onOpenChange={setIsOpen2}
            onValueChange={setSelectedValue2}
          >
            <SelectTrigger>Select vegetable</SelectTrigger>
            <SelectContent topOffset={7}>
              <SelectItem value="Carrot 🥕">Carrot 🥕</SelectItem>
              <SelectItem value="Broccoli 🥦">Broccoli 🥦</SelectItem>
              <SelectItem value="Tomato 🍅">Tomato 🍅</SelectItem>
            </SelectContent>
          </SelectRoot>
        </div>
      </div>
    );
  },
};

/**
 *
 * Минимальный пример использования с тремя опциями.
 * Идеально подходит для быстрого старта и понимания базовой структуры.
 */
export const MinimalExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "200px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Choose...</SelectTrigger>
          <SelectContent>
            <SelectItem value="Option 1">Option 1</SelectItem>
            <SelectItem value="Option 2">Option 2</SelectItem>
            <SelectItem value="Option 3">Option 3</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Select с кастомной шириной.
 * Ширина контролируется родительским контейнером.
 */
export const WithCustomWidth: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "400px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select programming language</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="TypeScript">TypeScript</SelectItem>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="Rust">Rust</SelectItem>
            <SelectItem value="Go">Go</SelectItem>
            <SelectItem value="Java">Java</SelectItem>
            <SelectItem value="C++">C++</SelectItem>
            <SelectItem value="C#">C#</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};

/**
 *
 * Интерактивная площадка для экспериментов со всеми props.
 * Используйте Controls панель для изменения параметров в реальном времени.
 */
export const Playground: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
      <div style={{ width: "220px" }}>
        <SelectRoot
          isOpen={isOpen}
          value={selectedValue}
          onOpenChange={setIsOpen}
          onValueChange={setSelectedValue}
        >
          <SelectTrigger>Select an option</SelectTrigger>
          <SelectContent topOffset={7}>
            <SelectItem value="Option A">Option A</SelectItem>
            <SelectItem value="Option B">Option B</SelectItem>
            <SelectItem value="Option C">Option C</SelectItem>
            <SelectItem value="Option D">Option D</SelectItem>
            <SelectItem value="Option E">Option E</SelectItem>
            <SelectItem value="Option F">Option F</SelectItem>
            <SelectItem value="Option G">Option G</SelectItem>
            <SelectItem value="Option H">Option H</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>
    );
  },
};
