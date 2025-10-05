import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./ui/loader";

/**
 * ## Loader Component
 *
 * Компонент Loader - это анимированный индикатор загрузки с поддержкой:
 * - Двух вариантов стилей (fill, empty)
 * - Трех размеров (s, m, l)
 * - Плавной CSS-анимации вращения
 * - Всех стандартных HTML div атрибутов
 *
 * Особенности
 * - Легковесная CSS-анимация без JavaScript
 * - Поддержка темизации через CSS-переменные
 * - Может использоваться внутри других компонентов (Button, Input)
 * - Адаптивные размеры под разные контексты
 *
 * Accessibility
 * - Чисто визуальный элемент (не влияет на screen readers)
 * - Рекомендуется использовать с aria-live на родительском контейнере
 * - Обычно комбинируется с текстом "Loading..."
 *
 * @example
 * ```tsx
 * <Loader variant="fill" size="m" />
 *
 * <div aria-live="polite">
 *   <Loader size="s" variant="empty" />
 *   <span>Loading data...</span>
 * </div>
 * ```
 */
const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: `
Анимированный индикатор загрузки для визуальной обратной связи пользователю.

## Использование

\`\`\`tsx
import { Loader } from "@frey-ui/loader";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && (
        <Loader variant="fill" size="m" />
      )}
      
      {/* Внутри кнопки */}
      <button disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader size="s" variant="fill" />
            Loading...
          </>
        ) : (
          "Submit"
        )}
      </button>

      {/* С текстом */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Loader size="s" />
        <span>Loading data...</span>
      </div>
    </div>
  );
}
\`\`\`

## Варианты

- **fill**: Заполненный круг (более заметный)
- **empty**: Полый круг/кольцо (более деликатный)

## Размеры

- **s** (small): Для использования внутри мелких элементов (кнопки, инпуты)
- **m** (medium): Стандартный размер для большинства случаев
- **l** (large): Крупный лоадер для главных состояний загрузки

## Особенности

- **CSS Animation**: Плавная анимация на чистом CSS без JS
- **Flexible**: Наследует все HTML div атрибуты
- **Themeable**: Цвета управляются через CSS-переменные
- **Composable**: Легко встраивается в другие компоненты
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
        "Вариант стилизации лоадера. 'fill' - заполненный круг, 'empty' - полое кольцо.",
      table: {
        type: { summary: '"empty" | "fill"' },
        defaultValue: { summary: '"fill"' },
      },
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description:
        "Размер лоадера. 's' - маленький (для кнопок/инпутов), 'm' - средний, 'l' - большой (для главных экранов загрузки).",
      table: {
        type: { summary: '"s" | "m" | "l"' },
        defaultValue: { summary: '"m"' },
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
        "Inline стили. Можно использовать CSS-переменные для изменения цвета.",
      table: {
        type: { summary: "CSSProperties" },
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          minHeight: "150px",
        }}
      >
        <StoryComponent />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default (Fill)
 *
 * Базовый лоадер с вариантом "fill" и средним размером.
 * Наиболее распространенный вариант для общих случаев.
 */
export const Default: Story = {
  args: {
    variant: "fill",
    size: "m",
  },
};

/**
 * Empty Variant
 *
 * Лоадер с полым кругом (кольцо).
 * Более деликатный вариант, менее отвлекает внимание.
 */
export const Empty: Story = {
  args: {
    variant: "empty",
    size: "m",
  },
};

/**
 * Small Size
 *
 * Маленький лоадер для использования внутри кнопок и инпутов.
 */
export const Small: Story = {
  args: {
    variant: "fill",
    size: "s",
  },
};

/**
 * Small Empty
 *
 * Маленький лоадер с вариантом empty.
 */
export const SmallEmpty: Story = {
  args: {
    variant: "empty",
    size: "s",
  },
};

/**
 * Large Size
 *
 * Крупный лоадер для главных экранов загрузки.
 * Подходит для полноэкранных overlay.
 */
export const Large: Story = {
  args: {
    variant: "fill",
    size: "l",
  },
};

/**
 * Large Empty
 *
 * Крупный лоадер с вариантом empty.
 */
export const LargeEmpty: Story = {
  args: {
    variant: "empty",
    size: "l",
  },
};

/**
 * All Sizes Comparison (Fill)
 *
 * Сравнение всех размеров с вариантом fill.
 */
export const AllSizesFill: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Loader variant="fill" size="s" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Small (s)
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loader variant="fill" size="m" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Medium (m)
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loader variant="fill" size="l" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Large (l)
        </div>
      </div>
    </div>
  ),
};

/**
 * All Sizes Comparison (Empty)
 *
 * Сравнение всех размеров с вариантом empty.
 */
export const AllSizesEmpty: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Loader variant="empty" size="s" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Small (s)
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loader variant="empty" size="m" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Medium (m)
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loader variant="empty" size="l" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Large (l)
        </div>
      </div>
    </div>
  ),
};

/**
 * All Variants Comparison
 *
 * Сравнение всех вариантов и размеров в таблице.
 */
export const AllVariantsComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto repeat(3, 1fr)",
        gap: "1.5rem",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Headers */}
      <div />
      <div style={{ fontWeight: "bold" }}>Small</div>
      <div style={{ fontWeight: "bold" }}>Medium</div>
      <div style={{ fontWeight: "bold" }}>Large</div>

      {/* Fill Row */}
      <div style={{ fontWeight: "bold", textAlign: "right" }}>Fill:</div>
      <Loader variant="fill" size="s" />
      <Loader variant="fill" size="m" />
      <Loader variant="fill" size="l" />

      {/* Empty Row */}
      <div style={{ fontWeight: "bold", textAlign: "right" }}>Empty:</div>
      <Loader variant="empty" size="s" />
      <Loader variant="empty" size="m" />
      <Loader variant="empty" size="l" />
    </div>
  ),
};

/**
 * With Text
 *
 * Лоадер в комбинации с текстом.
 * Стандартный паттерн для информативной загрузки.
 */
export const WithText: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <Loader variant="fill" size="m" />
      <span style={{ fontSize: "1rem" }}>Loading data...</span>
    </div>
  ),
};

/**
 * In Button Context
 *
 * Лоадер внутри кнопки (симуляция состояния загрузки).
 */
export const InButtonContext: Story = {
  render: () => (
    <button
      type="button"
      disabled
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1.5rem",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "not-allowed",
        opacity: 0.7,
      }}
    >
      <Loader variant="fill" size="s" />
      Loading...
    </button>
  ),
};

/**
 * In Input Context
 *
 * Лоадер как endContent в инпуте (симуляция асинхронной валидации).
 */
export const InInputContext: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Username</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.75rem 1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <input
            type="text"
            placeholder="Checking availability..."
            disabled
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              outline: "none",
            }}
          />
          <Loader variant="empty" size="s" />
        </div>
      </label>
    </div>
  ),
};

/**
 * Fullscreen Overlay
 *
 * Лоадер на полноэкранном overlay.
 * Типичный паттерн для блокирующих операций загрузки.
 */
export const FullscreenOverlay: Story = {
  render: () => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        background: "#f5f5f5",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Mock content */}
      <div style={{ padding: "2rem" }}>
        <h3>Page Content</h3>
        <p>This content is behind the loading overlay...</p>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(4px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Loader variant="fill" size="l" />
        <div style={{ fontSize: "1.125rem", fontWeight: 500 }}>
          Loading content...
        </div>
      </div>
    </div>
  ),
};

/**
 * Card Loading State
 *
 * Лоадер в центре карточки.
 */
export const CardLoadingState: Story = {
  render: () => (
    <div
      style={{
        width: "300px",
        padding: "2rem",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Loader variant="fill" size="m" />
      <div style={{ color: "#666", fontSize: "0.875rem" }}>
        Fetching data...
      </div>
    </div>
  ),
};

/**
 * Inline Loader
 *
 * Маленький лоадер в строке текста.
 */
export const InlineLoader: Story = {
  render: () => (
    <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>
      Please wait while we process your request
      <Loader
        variant="empty"
        size="s"
        style={{
          display: "inline-block",
          marginLeft: "0.5rem",
          verticalAlign: "middle",
        }}
      />
    </p>
  ),
};

/**
 * Multiple Loaders
 *
 * Несколько лоадеров для параллельных процессов.
 */
export const MultipleLoaders: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem",
          background: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <Loader variant="fill" size="s" />
        <span>Uploading files...</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem",
          background: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <Loader variant="fill" size="s" />
        <span>Processing images...</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem",
          background: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <Loader variant="fill" size="s" />
        <span>Generating thumbnails...</span>
      </div>
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
    variant: "fill",
    size: "m",
  },
};
