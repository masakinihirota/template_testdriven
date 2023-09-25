import type { Meta, StoryObj } from "@storybook/react";

// 作ったコンポーネントをインポートします。
import Counter from "./component";

const meta = {
  // Storybookのダッシュボードのサイドバーに表示されるタイトルを定義します。
  title: "02_hooks/component",
  component: Counter,
  parameters: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybookのダッシュボードのサイドバーに表示されるコンポーネントの色々なパーターンを定義します。
export const ComponentFirst: Story = {};
export const ComponentSecond: Story = {};
export const ComponentThird: Story = {};
