import type { Meta, StoryObj } from "@storybook/react";

// 作ったコンポーネントをインポートします。
import Page from "./page";

const meta = {
  // Storybookのダッシュボードのサイドバーに表示されるタイトルを定義します。
  title: "01_client/page",
  component: Page,
  parameters: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybookのダッシュボードのサイドバーに表示されるコンポーネントの色々なパーターンを定義します。
export const PageFirst: Story = {};
export const PageSecond: Story = {};
export const PageThird: Story = {};
