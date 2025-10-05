import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import { ArrowRightIcon } from "../../assets/arrow-right-icon";
import { BellIcon } from "../../assets/bell-icon";
import { SearchIcon } from "../../assets/search-icon";
import { Loader } from "../loader";
import { Input } from "./ui/input";

/**
 * ## Input Component
 *
 * Компонент Input - это универсальное текстовое поле с поддержкой:
 * - Различных размеров (m, s)
 * - Валидации и отображения ошибок
 * - Слотов для иконок/контента до и после поля
 * - Labels и placeholder
 * - Всех стандартных HTML input атрибутов
 *
 * Особенности
 * - Наследует все стандартные HTML-атрибуты input элемента
 * - Автоматически обертывает поле в label для accessibility
 * - Поддерживает startContent и endContent для иконок/лоадеров
 * - Визуальная индикация валидности
 * - onValueChange callback для удобной работы со значением
 *
 * Accessibility
 * - Использует семантичный `<label>` для обертки
 * - Связь label с input автоматическая (клик на label фокусирует input)
 * - Поддержка всех aria-атрибутов через props
 * - Визуальная индикация состояния ошибки
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   type="email"
 * />
 *
 * <Input
 *   label="Search"
 *   startContent={<SearchIcon />}
 *   placeholder="Search..."
 * />
 *
 * <Input
 *   label="Username"
 *   isInvalid={true}
 *   errors="Username is required"
 * />
 * ```
 */
const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент Input с расширенными возможностями валидации и кастомизации.

## Использование

\`\`\`tsx
import { Input } from "@frey-ui/input";
import { SearchIcon } from "@frey-ui/icons";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Базовое использование */}
      <Input
        label="Name"
        placeholder="Enter your name"
        value={inputValue}
        onValueChange={setInputValue}
      />

      {/* С иконкой поиска */}
      <Input
        label="Search"
        startContent={<SearchIcon />}
        placeholder="Search..."
      />

      {/* С валидацией */}
      <Input
        label="Email"
        type="email"
        isInvalid={!inputValue.includes("@")}
        errors="Please enter a valid email"
      />

      {/* Loading состояние */}
      <Input
        label="Loading"
        endContent={<Loader size="s" />}
        disabled
      />
    </>
  );
}
\`\`\`

## Особенности

- **Content Slots**: Слоты startContent и endContent для иконок и лоадеров
- **Validation**: Встроенная поддержка валидации с визуальной индикацией
- **Native Input**: Наследует все HTML-атрибуты input
- **Labels**: Автоматическая связь label с input
- **Accessible**: Семантически корректная разметка с label
- **Controlled**: onValueChange для удобной работы со значением
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
            id: "label",
            enabled: true,
          },
        ],
      },
    },
  },
  argTypes: {
    // Variants
    size: {
      control: "select",
      options: ["m", "s"],
      description:
        "Размер input поля. Влияет на паддинги, размер шрифта и общую высоту.",
      table: {
        type: { summary: '"m" | "s"' },
        defaultValue: { summary: '"m"' },
      },
    },

    // Labels & Placeholders
    label: {
      control: "text",
      description:
        "Текст label, отображаемый над полем ввода. Автоматически связывается с input для accessibility.",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      control: "text",
      description:
        "Placeholder текст, отображаемый когда поле пустое. Стандартный HTML-атрибут.",
      table: {
        type: { summary: "string" },
      },
    },

    // Validation
    isInvalid: {
      control: "boolean",
      description:
        "Флаг валидности поля. При true применяются стили ошибки (красная обводка).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    errors: {
      control: "text",
      description:
        "Текст ошибки, отображаемый под полем. Может быть строкой или любым ReactNode. Обычно используется совместно с isInvalid.",
      table: {
        type: { summary: "ReactNode" },
      },
    },

    // Content Slots
    startContent: {
      control: false,
      description:
        "React-элемент для отображения в начале поля (обычно иконка). Автоматически добавляет отступы.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    endContent: {
      control: false,
      description:
        "React-элемент для отображения в конце поля (обычно иконка или лоадер). Автоматически добавляет отступы.",
      table: {
        type: { summary: "ReactNode" },
      },
    },

    // Callbacks
    onValueChange: {
      action: "onValueChange",
      description:
        "Коллбэк, вызываемый при изменении значения. Получает строку (value). Альтернатива стандартному onChange для упрощения работы.",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Стандартный HTML onChange обработчик. Получает ChangeEvent.",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
      },
    },

    // HTML Input Attributes
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
      ],
      description:
        "Тип input поля (стандартный HTML-атрибут). Определяет поведение и клавиатуру на мобильных устройствах.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"text"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключает поле ввода. Стандартный HTML-атрибут.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: "boolean",
      description: "Делает поле только для чтения. Стандартный HTML-атрибут.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Помечает поле как обязательное. Стандартный HTML-атрибут.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    style: {
      control: "object",
      description:
        "Inline стили. Можно использовать CSS-переменные для кастомизации.",
      table: {
        type: { summary: "CSSProperties" },
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ maxWidth: "400px", padding: "2rem" }}>
        <StoryComponent />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default Input
 *
 * Базовое текстовое поле без label.
 * Минималистичный вариант для простых форм.
 */
export const Default: Story = {
  args: {
    placeholder: "Type something...",
    size: "m",
  },
};

/**
 * With Label
 *
 * Input с label над полем.
 * Стандартный паттерн для форм с явными подписями.
 */
export const WithLabel: Story = {
  args: {
    label: "Full Name",
    placeholder: "John Doe",
    size: "m",
  },
};

/**
 * Small Size
 *
 * Компактная версия input с размером "s".
 * Подходит для плотных интерфейсов и фильтров.
 */
export const SmallSize: Story = {
  args: {
    label: "Compact Input",
    placeholder: "Small size",
    size: "s",
  },
};

/**
 * With Search Icon
 *
 * Input с иконкой поиска в начале.
 * Типичный паттерн для поисковых полей.
 */
export const WithSearchIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    startContent: <SearchIcon width={20} height={20} />,
    size: "m",
  },
};

/**
 * With End Icon
 *
 * Input с иконкой в конце поля.
 */
export const WithEndIcon: Story = {
  args: {
    label: "Navigate",
    placeholder: "Enter destination",
    endContent: <ArrowRightIcon width={20} height={20} />,
    size: "m",
  },
};

/**
 * With Both Icons
 *
 * Input с иконками с обеих сторон.
 */
export const WithBothIcons: Story = {
  args: {
    label: "Full Featured",
    placeholder: "Type here",
    startContent: <BellIcon width={20} height={20} />,
    endContent: <ArrowRightIcon width={20} height={20} />,
    size: "m",
  },
};

/**
 * Invalid State
 *
 * Input с ошибкой валидации.
 * Красная обводка и сообщение об ошибке под полем.
 */
export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "email@example.com",
    isInvalid: true,
    errors: "Please enter a valid email address",
    size: "m",
  },
};

/**
 * Multiple Errors
 *
 * Input с несколькими сообщениями об ошибках.
 */
export const MultipleErrors: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    isInvalid: true,
    errors: (
      <div>
        <div>• At least 8 characters</div>
        <div>• Contains uppercase letter</div>
        <div>• Contains number</div>
      </div>
    ),
    size: "m",
  },
};

/**
 * Loading State
 *
 * Input в состоянии загрузки.
 * Обычно используется при асинхронной валидации или поиске.
 */
export const LoadingState: Story = {
  args: {
    label: "Username",
    placeholder: "Checking availability...",
    endContent: <Loader size="s" />,
    disabled: true,
    size: "m",
  },
};

/**
 * Disabled
 *
 * Отключенное поле ввода.
 * Не принимает фокус и не реагирует на ввод.
 */
export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Can't edit this",
    disabled: true,
    size: "m",
  },
};

/**
 * Read Only
 *
 * Поле только для чтения.
 * Можно выделить и скопировать текст, но нельзя редактировать.
 */
export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    defaultValue: "This value cannot be changed",
    readOnly: true,
    size: "m",
  },
};

/**
 * Required Field
 *
 * Обязательное поле (визуально может помечаться звездочкой в CSS).
 */
export const Required: Story = {
  args: {
    label: "Email (required)",
    placeholder: "email@example.com",
    type: "email",
    required: true,
    size: "m",
  },
};

/**
 * Email Type
 *
 * Input с типом email для правильной клавиатуры на мобильных.
 */
export const EmailType: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    size: "m",
  },
};

/**
 * Password Type
 *
 * Input с типом password - символы скрыты.
 */
export const PasswordType: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    size: "m",
  },
};

/**
 * Number Type
 *
 * Input для числового ввода.
 */
export const NumberType: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "18",
    size: "m",
  },
};

/**
 * Search Type
 *
 * Input с типом search (может иметь кнопку очистки в некоторых браузерах).
 */
export const SearchType: Story = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "Search products...",
    startContent: <SearchIcon width={20} height={20} />,
    size: "m",
  },
};

/**
 * Controlled Input
 *
 * Полностью контролируемый input с состоянием.
 * Демонстрирует использование onValueChange.
 */
export const ControlledInput: Story = {
  render: (storyArgs) => {
    const [inputValue, setInputValue] = useState("");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          {...storyArgs}
          value={inputValue}
          onValueChange={setInputValue}
        />
        <div
          style={{
            padding: "0.75rem",
            background: "#f5f5f5",
            borderRadius: "8px",
            fontSize: "0.875rem",
          }}
        >
          Current value: <strong>{inputValue || "(empty)"}</strong>
        </div>
      </div>
    );
  },
  args: {
    label: "Controlled Input",
    placeholder: "Type to see value update",
    size: "m",
  },
};

/**
 * Live Validation
 *
 * Input с валидацией в реальном времени.
 */
export const LiveValidation: Story = {
  render: (storyArgs) => {
    const [email, setEmail] = useState("");
    const isValidEmail = email.includes("@") && email.includes(".");

    return (
      <Input
        {...storyArgs}
        value={email}
        onValueChange={setEmail}
        isInvalid={email.length > 0 && !isValidEmail}
        errors={
          email.length > 0 && !isValidEmail
            ? "Please enter a valid email address"
            : null
        }
      />
    );
  },
  args: {
    label: "Email (validated)",
    type: "email",
    placeholder: "email@example.com",
    size: "m",
  },
};

/**
 * Form Example
 *
 * Пример использования нескольких Input в форме.
 */
export const FormExample: Story = {
  render: () => {
    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      password: "",
    });

    const updateField = (field: string, newValue: string) => {
      setFormValues((prev) => {
        return { ...prev, [field]: newValue };
      });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Form submitted - data: formValues
        }}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formValues.name}
          onValueChange={(val) => updateField("name", val)}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="email@example.com"
          value={formValues.email}
          onValueChange={(val) => updateField("email", val)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formValues.password}
          onValueChange={(val) => updateField("password", val)}
          required
        />

        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Submit
        </button>
      </form>
    );
  },
};

/**
 * With Custom Styles (CSS Variables)
 *
 * Input с кастомными стилями через CSS-переменные.
 * Демонстрирует возможности кастомизации.
 */
export const WithCustomStyles: Story = {
  args: {
    label: "Custom Styled Input",
    placeholder: "Custom styling",
    style: {
      "--input-px": "1.5rem",
      "--input-py": "0.75rem",
      "--input-font-size": "1.1rem",
      "--input-letter-spacing": "1px",
      "--frey-foreground": "#0066cc",
    },
    size: "m",
  },
};

/**
 * All Sizes Comparison
 *
 * Сравнение всех доступных размеров Input.
 */
export const AllSizesComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Input label="Medium (m)" placeholder="Medium size" size="m" />
      <Input label="Small (s)" placeholder="Small size" size="s" />
    </div>
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
    label: "Playground Input",
    placeholder: "Try changing the controls...",
    size: "m",
    isInvalid: false,
    disabled: false,
    readOnly: false,
    required: false,
    type: "text",
  },
};
