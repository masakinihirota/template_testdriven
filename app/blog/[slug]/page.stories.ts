import type { Meta, StoryObj } from "@storybook/react";

// 作ったコンポーネントをインポートします。
import Page from "./page";

const meta = {
  // Storybookのダッシュボードのサイドバーに表示されるタイトルを定義します。
  title: "03_slug/page",
  component: Page,
  parameters: {
    slug: "Button",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybookのダッシュボードのサイドバーに表示されるコンポーネントの色々なパーターンを定義します。
// 今回はパラメーターを渡しています。
// このパラメーターは、コンポーネントのpropsとして渡されます。
export const SlugFirst: Story = { args: { params: { slug: "first_page" } } };
export const SlugSecond: Story = { args: { params: { slug: "second_page" } } };
export const SlugThird: Story = { args: { params: { slug: "third_page" } } };
