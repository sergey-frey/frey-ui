import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { ArrowRightIcon } from "../../assets/arrow-right-icon";
import { BellIcon } from "../../assets/bell-icon";
import { Loader } from "../loader";
import { Button } from "./ui/button";

/**
 * ## Button Component
 *
 * Компонент Button - это универсальная кнопка с поддержкой:
 * - Двух вариантов стилей (fill, empty)
 * - Различных размеров (m, s)
 * - Режима "только иконка"
 * - Инвертированного поведения (shadow без взаимодействия)
 * - Слотов для иконок до и после текста
 * - Состояний disabled и loading
 *
 * Особенности
 * - Наследует все стандартные HTML-атрибуты button элемента
 * - Поддерживает startContent и endContent для иконок
 * - Автоматически адаптирует стили в зависимости от наличия контента
 *
 * Accessibility
 * - Используется нативный `<button>` элемент
 * - Поддержка клавиатурной навигации
 * - Корректно обрабатывает состояние disabled
 *
 * @example
 * ```tsx
 * <Button variant="fill" size="m">
 *   Click me
 * </Button>
 *
 * <Button
 *   variant="empty"
 *   startContent={<BellIcon />}
 *   endContent={<ArrowRightIcon />}
 * >
 *   With Icons
 * </Button>
 * ```
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент Button с расширенными возможностями кастомизации.

## Использование

\`\`\`tsx
import { Button } from "@frey-ui/button";
import { BellIcon } from "@frey-ui/icons";

function MyComponent() {
  return (
    <>
      {/* Базовое использование */}
      <Button variant="fill">Click me</Button>

      {/* С иконками */}
      <Button 
        variant="empty"
        startContent={<BellIcon />}
      >
        Notifications
      </Button>

      {/* Только иконка */}
      <Button isIconOnly>
        <BellIcon />
      </Button>

      {/* Disabled состояние */}
      <Button disabled>
        Can't click
      </Button>
    </>
  );
}
\`\`\`

## Варианты

- **fill**: Заливка цветом (primary действие)
- **empty**: Прозрачный фон с border (secondary действие)

## Особенности

- **Icon Slots**: Слоты startContent и endContent для иконок
- **Icon Only Mode**: Специальный режим для кнопок с одной иконкой
- **Inverted Behavior**: Режим с постоянной тенью (без hover)
- **Native Button**: Наследует все HTML-атрибуты button
- **Accessible**: Семантически корректная разметка
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
    // Variants
    variant: {
      control: "select",
      options: ["empty", "fill"],
      description:
        "Вариант стилизации кнопки. 'fill' - с заливкой цветом, 'empty' - прозрачная с border.",
      table: {
        type: { summary: '"empty" | "fill"' },
        defaultValue: { summary: '"empty"' },
      },
    },
    size: {
      control: "select",
      options: ["m", "s"],
      description:
        "Размер кнопки. Влияет на паддинги, размер шрифта и общую высоту.",
      table: {
        type: { summary: '"m" | "s"' },
        defaultValue: { summary: '"m"' },
      },
    },

    // Behavior Props
    isIconOnly: {
      control: "boolean",
      description:
        "Режим кнопки с одной иконкой. Применяет квадратную форму и центрирует содержимое.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isInvertedBehavior: {
      control: "boolean",
      description:
        "Инвертированное поведение - тень отображается постоянно, без hover эффекта.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "Отключает кнопку и применяет соответствующие стили. Стандартный HTML-атрибут.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Content Slots
    startContent: {
      control: false,
      description:
        "React-элемент для отображения в начале кнопки (обычно иконка). Автоматически добавляет отступ от текста.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    endContent: {
      control: false,
      description:
        "React-элемент для отображения в конце кнопки (обычно иконка). Автоматически добавляет отступ от текста.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      control: "text",
      description:
        "Основной контент кнопки (текст или иконка). Может быть любым ReactNode.",
      table: {
        type: { summary: "ReactNode" },
      },
    },

    // Style Props
    className: {
      control: "text",
      description: "Дополнительные CSS-классы для кастомизации внешнего вида.",
      table: {
        type: { summary: "string" },
      },
    },

    // HTML Button Attributes
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description:
        "Тип кнопки (стандартный HTML-атрибут). По умолчанию 'button'.",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
      },
    },
    onClick: {
      action: "onClick",
      description: "Обработчик клика по кнопке.",
      table: {
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <StoryComponent />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default (Empty)
 *
 * Базовая кнопка с вариантом "empty" - прозрачная с border.
 * Используется для второстепенных действий.
 */
export const Default: Story = {
  args: {
    variant: "empty",
    size: "m",
    children: "Empty Button",
  },
};

/**
 * Fill Variant
 *
 * Кнопка с заливкой цветом - primary действие.
 * Привлекает больше внимания, используется для основных действий.
 */
export const Fill: Story = {
  args: {
    variant: "fill",
    size: "m",
    children: "Fill Button",
  },
};

/**
 * Small Size
 *
 * Компактная кнопка с размером "s".
 * Подходит для плотных интерфейсов и инлайн-действий.
 */
export const SmallSize: Story = {
  args: {
    variant: "fill",
    size: "s",
    children: "Small Button",
  },
};

/**
 * With Start Icon
 *
 * Кнопка с иконкой в начале.
 * Иконка автоматически получает правильный отступ от текста.
 */
export const WithStartIcon: Story = {
  args: {
    variant: "fill",
    size: "m",
    children: "Notifications",
    startContent: <BellIcon width={20} height={20} />,
  },
};

/**
 * With End Icon
 *
 * Кнопка с иконкой в конце.
 * Часто используется для действий "вперед" или "далее".
 */
export const WithEndIcon: Story = {
  args: {
    variant: "empty",
    size: "m",
    children: "Next",
    endContent: <ArrowRightIcon width={20} height={20} />,
  },
};

/**
 * With Both Icons
 *
 * Кнопка с иконками с обеих сторон.
 * Демонстрирует одновременное использование startContent и endContent.
 */
export const WithBothIcons: Story = {
  args: {
    variant: "fill",
    size: "m",
    children: "Action",
    startContent: <BellIcon width={20} height={20} />,
    endContent: <ArrowRightIcon width={20} height={20} />,
  },
};

/**
 * Icon Only
 *
 * Кнопка только с иконкой, без текста.
 * Применяется квадратная форма и центрирование контента.
 */
export const IconOnly: Story = {
  args: {
    variant: "fill",
    size: "m",
    isIconOnly: true,
    children: <BellIcon width={20} height={20} />,
  },
};

/**
 * Icon Only Small
 *
 * Компактная версия кнопки с одной иконкой.
 */
export const IconOnlySmall: Story = {
  args: {
    variant: "empty",
    size: "s",
    isIconOnly: true,
    children: <ArrowRightIcon width={16} height={16} />,
  },
};

/**
 * Loading State
 *
 * Кнопка в состоянии загрузки.
 * Обычно используется с disabled для предотвращения повторных кликов.
 */
export const LoadingState: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      const loadingDelayMs = 2000;
      setTimeout(() => {
        setIsLoading(false);
      }, loadingDelayMs);
    };

    return (
      <Button
        variant="fill"
        size="m"
        onClick={handleClick}
        disabled={isLoading}
        startContent={
          isLoading ? <Loader size="s" variant="fill" /> : undefined
        }
      >
        {isLoading ? "Loading..." : "Click to Load"}
      </Button>
    );
  },
};

/**
 * Loading Icon Only
 *
 * Кнопка только с лоадером.
 */
export const LoadingIconOnly: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      const loadingDelayMs = 2000;
      setTimeout(() => {
        setIsLoading(false);
      }, loadingDelayMs);
    };

    return (
      <Button
        variant="fill"
        size="m"
        isIconOnly
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader size="s" variant="fill" />
        ) : (
          <BellIcon width={20} height={20} />
        )}
      </Button>
    );
  },
};

/**
 * Disabled
 *
 * Отключенная кнопка.
 * Не реагирует на клики и имеет визуально приглушенный вид.
 */
export const Disabled: Story = {
  args: {
    variant: "fill",
    size: "m",
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * Disabled Empty
 *
 * Отключенная кнопка с вариантом "empty".
 */
export const DisabledEmpty: Story = {
  args: {
    variant: "empty",
    size: "m",
    children: "Disabled Empty",
    disabled: true,
  },
};

/**
 * Inverted Behavior
 *
 * Кнопка с инвертированным поведением - постоянная тень.
 * Полезна для особых состояний или акцентирования.
 */
export const InvertedBehavior: Story = {
  args: {
    variant: "empty",
    size: "m",
    children: "Inverted Button",
    isInvertedBehavior: true,
  },
};

/**
 * Button Group
 *
 * Группа кнопок различных вариантов.
 * Демонстрирует комбинации fill и empty в одном контексте.
 */
export const ButtonGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="empty" size="m">
        Cancel
      </Button>
      <Button variant="fill" size="m">
        Submit
      </Button>
    </div>
  ),
};

/**
 * Button Toolbar
 *
 * Панель инструментов с иконочными кнопками.
 * Типичный паттерн для редакторов и панелей управления.
 */
export const ButtonToolbar: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        padding: "0.5rem",
        background: "var(--frey-background, #f5f5f5)",
        borderRadius: "8px",
      }}
    >
      <Button variant="empty" size="s" isIconOnly>
        <BellIcon width={16} height={16} />
      </Button>
      <Button variant="empty" size="s" isIconOnly>
        <ArrowRightIcon width={16} height={16} />
      </Button>
      <Button variant="empty" size="s" isIconOnly>
        <BellIcon width={16} height={16} />
      </Button>
      <div style={{ width: "1px", background: "#ddd", margin: "0 0.25rem" }} />
      <Button variant="fill" size="s" isIconOnly>
        <ArrowRightIcon width={16} height={16} />
      </Button>
    </div>
  ),
};

/**
 * All Sizes Comparison
 *
 * Сравнение всех доступных размеров кнопок.
 */
export const AllSizesComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="fill" size="s">
          Small (s)
        </Button>
        <Button variant="fill" size="m">
          Medium (m)
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="empty" size="s">
          Small (s)
        </Button>
        <Button variant="empty" size="m">
          Medium (m)
        </Button>
      </div>
    </div>
  ),
};

/**
 * All Variants Comparison
 *
 * Сравнение всех вариантов кнопок в разных состояниях.
 */
export const AllVariantsComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {/* Headers */}
      <div />
      <div style={{ fontWeight: "bold", textAlign: "center" }}>Fill</div>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>Empty</div>

      {/* Normal */}
      <div style={{ fontWeight: "bold" }}>Normal:</div>
      <Button variant="fill" size="m">
        Button
      </Button>
      <Button variant="empty" size="m">
        Button
      </Button>

      {/* With Icon */}
      <div style={{ fontWeight: "bold" }}>With Icon:</div>
      <Button
        variant="fill"
        size="m"
        startContent={<BellIcon width={20} height={20} />}
      >
        Button
      </Button>
      <Button
        variant="empty"
        size="m"
        startContent={<BellIcon width={20} height={20} />}
      >
        Button
      </Button>

      {/* Icon Only */}
      <div style={{ fontWeight: "bold" }}>Icon Only:</div>
      <Button variant="fill" size="m" isIconOnly>
        <BellIcon width={20} height={20} />
      </Button>
      <Button variant="empty" size="m" isIconOnly>
        <BellIcon width={20} height={20} />
      </Button>

      {/* Disabled */}
      <div style={{ fontWeight: "bold" }}>Disabled:</div>
      <Button variant="fill" size="m" disabled>
        Button
      </Button>
      <Button variant="empty" size="m" disabled>
        Button
      </Button>
    </div>
  ),
};

/**
 * Form Example
 *
 * Пример использования кнопок в форме.
 */
export const FormExample: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Form submitted - check console in Actions panel
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        style={{
          padding: "0.75rem",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />
      <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
        <Button type="button" variant="empty" size="m">
          Cancel
        </Button>
        <Button type="submit" variant="fill" size="m">
          Submit
        </Button>
      </div>
    </form>
  ),
};

/**
 * Playground
 *
 * Интерактивная площадка для экспериментов со всеми props.
 * Используйте Controls панель для изменения параметров в реальном времени.
 */
export const Playground: Story = {
  args: {
    variant: "fill",
    size: "m",
    children: "Playground Button",
    isIconOnly: false,
    isInvertedBehavior: false,
    disabled: false,
  },
};
