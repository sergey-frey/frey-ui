import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { Accordion } from "./ui/accordion";

/**
 * ## Accordion Component
 *
 * Компонент Accordion - это раскрывающаяся панель с поддержкой:
 * - Управляемого состояния открытия/закрытия
 * - Кастомизируемых индикаторов
 * - Плавной анимации контента
 * - Различных размеров
 *
 * Особенности
 * - Автоматически рассчитывает высоту контента для плавной анимации
 * - Поддерживает любой ReactNode как label и children
 * - Семантически корректная разметка с использованием button для триггера
 *
 * Accessibility
 * - Использует `<button>` для триггера (корректная семантика)
 * - Поддерживает клавиатурную навигацию
 * - Визуальный индикатор состояния открытия/закрытия
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Accordion
 *   label="Click to expand"
 *   isOpen={isOpen}
 *   onOpenChange={setIsOpen}
 * >
 *   <p>Hidden content that appears when accordion is open</p>
 * </Accordion>
 * ```
 */
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
Компонент Accordion для скрытия и раскрытия контента с плавной анимацией.

## Использование

\`\`\`tsx
import { Accordion } from "@frey-ui/accordion";
import { useState } from "react";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion
      label="Section Title"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      size="m"
    >
      <div>
        <p>Your content goes here</p>
        <p>Can be any valid React node</p>
      </div>
    </Accordion>
  );
}
\`\`\`

## Особенности

- **Smooth Animation**: Автоматический расчет высоты для плавной анимации
- **Controlled State**: Полный контроль состояния через \`isOpen\` и \`onOpenChange\`
- **Custom Indicator**: Кастомизируемый индикатор (по умолчанию стрелка)
- **Flexible Content**: Label и children принимают любой ReactNode
- **Accessible**: Семантически корректная разметка с button триггером
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
    label: {
      control: "text",
      description:
        "Заголовок аккордеона, отображаемый в триггере. Может быть строкой или любым ReactNode.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    isOpen: {
      control: "boolean",
      description:
        "Контролирует состояние открытия/закрытия аккордеона. Используется совместно с `onOpenChange` для управляемого состояния.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Коллбэк, вызываемый при клике на триггер. Получает новое состояние boolean.",
      table: {
        type: { summary: "(isOpen: boolean) => void" },
      },
    },

    // Variants
    size: {
      control: "select",
      options: ["m", "s"],
      description:
        "Размер аккордеона. Влияет на паддинги, размер шрифта и общий внешний вид.",
      table: {
        type: { summary: '"m" | "s"' },
        defaultValue: { summary: '"m"' },
      },
    },

    // Customization
    indicator: {
      control: false,
      description:
        "Кастомный индикатор для отображения состояния аккордеона. По умолчанию используется стрелка, которая вращается при открытии.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "<DefaultAccordionIndicator />" },
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

    // Children
    children: {
      control: "text",
      description:
        "Контент аккордеона, который раскрывается при открытии. Может быть любым ReactNode.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ maxWidth: "600px", padding: "2rem" }}>
        <StoryComponent />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Базовый пример Accordion со средним размером.
 * Демонстрирует стандартное поведение компонента.
 */
export const Default: Story = {
  render: (storyArgs) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Accordion {...storyArgs} isOpen={isOpen} onOpenChange={setIsOpen}>
        {storyArgs.children}
      </Accordion>
    );
  },
  args: {
    label: "What is React?",
    isOpen: false,
    children:
      "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
    size: "m",
  },
};

/**
 * Accordion с начальным открытым состоянием.
 * Полезно для FAQ секций, где первый вопрос открыт по умолчанию.
 */
export const InitiallyOpen: Story = {
  render: (storyArgs) => {
    const [openState, setOpenState] = useState(true);

    return (
      <Accordion {...storyArgs} isOpen={openState} onOpenChange={setOpenState}>
        {storyArgs.children}
      </Accordion>
    );
  },
  args: {
    label: "Getting Started",
    isOpen: true,
    children:
      "To get started with this component library, install it via npm: npm install @frey-ui/accordion. Then import and use the Accordion component in your React application.",
    size: "m",
  },
};

/**
 * Компактный вариант Accordion с размером "s".
 * Подходит для плотных интерфейсов и боковых панелей.
 */
export const SmallSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Accordion {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
        {args.children}
      </Accordion>
    );
  },
  args: {
    label: "Compact Accordion",
    isOpen: false,
    children: "This is a smaller, more compact version of the accordion.",
    size: "s",
  },
};

/**
 * Accordion с богатым HTML-контентом внутри.
 * Демонстрирует, что children может содержать любую разметку.
 */
export const WithRichContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Accordion
        {...args}
        label="Features Overview"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <div style={{ padding: "1rem" }}>
          <h4 style={{ marginTop: 0, marginBottom: "0.5rem" }}>
            Key Features:
          </h4>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>Smooth animations</li>
            <li>Fully controlled state</li>
            <li>Custom indicators</li>
            <li>Responsive design</li>
            <li>Accessible markup</li>
          </ul>
          <p style={{ marginBottom: 0, marginTop: "1rem" }}>
            <strong>Note:</strong> All features are production-ready and tested.
          </p>
        </div>
      </Accordion>
    );
  },
  args: {
    isOpen: false,
    size: "m",
  },
};

/**
 * Несколько Accordion компонентов в виде FAQ секции.
 * Демонстрирует независимое состояние каждого аккордеона.
 */
export const MultipleAccordions: Story = {
  render: (args) => {
    const [openStates, setOpenStates] = useState<Record<number, boolean>>({
      0: false,
      1: false,
      2: false,
      3: false,
    });

    const toggleAccordion = (index: number) => {
      setOpenStates((prev) => {
        return {
          ...prev,
          [index]: !prev[index],
        };
      });
    };

    const faqs = [
      {
        question: "How do I install the library?",
        answer:
          "You can install the library using npm or yarn: npm install @frey-ui/components or yarn add @frey-ui/components",
      },
      {
        question: "Is TypeScript supported?",
        answer:
          "Yes! The library is built with TypeScript and provides full type definitions for all components and props.",
      },
      {
        question: "Can I customize the styles?",
        answer:
          "Absolutely! You can use CSS variables, custom className props, or even override styles using CSS modules or styled-components.",
      },
      {
        question: "What about accessibility?",
        answer:
          "All components follow WCAG guidelines and include proper ARIA attributes, keyboard navigation, and screen reader support.",
      },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            {...args}
            label={faq.question}
            isOpen={openStates[index]}
            onOpenChange={() => toggleAccordion(index)}
          >
            <div style={{ padding: "1rem" }}>{faq.answer}</div>
          </Accordion>
        ))}
      </div>
    );
  },
  args: {
    isOpen: false,
    size: "m",
  },
};

/**
 * Accordion с длинным контентом для демонстрации анимации прокрутки.
 * Высота контента рассчитывается автоматически.
 */
export const WithLongContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Accordion {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
        <div style={{ padding: "1rem" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
      </Accordion>
    );
  },
  args: {
    label: "Read More",
    isOpen: false,
    size: "m",
  },
};

/**
 * Группа аккордеонов, где только один может быть открыт одновременно.
 * Паттерн "accordion" - при открытии одного, остальные закрываются.
 */
export const AccordionGroup: Story = {
  render: (args) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
      {
        label: "Personal Information",
        content:
          "This section contains your personal details like name, email, and phone number.",
      },
      {
        label: "Account Settings",
        content:
          "Manage your account preferences, password, and security settings here.",
      },
      {
        label: "Notifications",
        content:
          "Configure how and when you want to receive notifications from the platform.",
      },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((item, index) => (
          <Accordion
            key={index}
            {...args}
            label={item.label}
            isOpen={openIndex === index}
            onOpenChange={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div style={{ padding: "1rem" }}>{item.content}</div>
          </Accordion>
        ))}
      </div>
    );
  },
  args: {
    isOpen: false,
    size: "m",
  },
};

/**
 * Интерактивная площадка для экспериментов со всеми props.
 * Используйте Controls панель для изменения параметров в реальном времени.
 */
export const Playground: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Accordion {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
        {args.children}
      </Accordion>
    );
  },
  args: {
    label: "Playground Accordion",
    isOpen: false,
    children: "Try changing the props using the controls panel below!",
    size: "m",
  },
};
